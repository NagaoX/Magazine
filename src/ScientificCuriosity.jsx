import React, { useState, useEffect } from 'react';
import { 
  Atom, ArrowLeft, RefreshCw, Settings, Sparkles, Brain, 
  AlertTriangle, Palette, Key, ExternalLink, CheckCircle, 
  XCircle, Loader2, Image as ImageIcon 
} from 'lucide-react';
import { STATIC_CONTENT_LIBRARY, MAGAZINE_COVERS } from './MagazineData';

// Utilitários
const cleanJsonString = (str) => {
  const jsonStart = str.indexOf('{');
  const jsonEnd = str.lastIndexOf('}');
  if (jsonStart === -1 || jsonEnd === -1) return str;
  return str.substring(jsonStart, jsonEnd + 1);
};

export default function ScientificCuriosityMagazine() {
  const [view, setView] = useState('cover'); 
  const [currentArticle, setCurrentArticle] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isApiError, setIsApiError] = useState(false); 
  const [errorType, setErrorType] = useState(''); 
  const [testStatus, setTestStatus] = useState('idle');
  const [testMessage, setTestMessage] = useState('');
  
  const [coverTheme, setCoverTheme] = useState(MAGAZINE_COVERS[0]);

  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) setApiKey(savedKey);
    // Inicia com a capa clássica (Cérebro Quântico) para garantir que você veja a correção primeiro, 
    // ou pode manter aleatório se preferir.
    setCoverTheme(MAGAZINE_COVERS[0]); 
  }, []);

  const handleSaveKey = (key) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
    setShowSettings(false);
    setIsApiError(false);
    setErrorMsg(null);
    setTestStatus('idle');
  };

  const cycleCover = () => {
    const currentIndex = MAGAZINE_COVERS.findIndex(c => c.id === coverTheme.id);
    const nextIndex = (currentIndex + 1) % MAGAZINE_COVERS.length;
    setCoverTheme(MAGAZINE_COVERS[nextIndex]);
  };

  const handleOpenStaticArticle = (title) => {
    const articleKey = Object.keys(STATIC_CONTENT_LIBRARY).find(key => 
        title.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(title.toLowerCase())
    );
    
    const article = STATIC_CONTENT_LIBRARY[articleKey];
    
    if (article) {
        setCurrentArticle({
            ...article,
            imageUrl: article.imageUrl || `https://image.pollinations.ai/prompt/${article.imageKeyword || article.title}%20realistic%20high%20quality?width=1600&height=900&nologo=true`,
            isGenerated: false 
        });
        setView('article');
    } else {
        if(apiKey) {
            fetchGeminiArticle();
        } else {
            const articlesArray = Object.values(STATIC_CONTENT_LIBRARY);
            const randomArt = articlesArray[Math.floor(Math.random() * articlesArray.length)];
            setCurrentArticle({ ...randomArt, isGenerated: false });
            setView('article');
        }
    }
  };

  const testConnection = async () => {
    if (!apiKey) {
        setTestStatus('error');
        setTestMessage("Campo de chave vazio.");
        return;
    }
    setTestStatus('testing');
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: "Hello" }] }] })
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `Erro ${response.status}`);
        }
        setTestStatus('success');
        setTestMessage("Conexão OK!");
    } catch (e) {
        setTestStatus('error');
        setTestMessage(e.message);
    }
  };

  const fetchGeminiArticle = async () => {
    setView('loading');
    setErrorMsg(null);
    setIsApiError(false);
    setErrorType('');

    if (!apiKey) {
      setTimeout(() => {
        const articlesArray = Object.values(STATIC_CONTENT_LIBRARY);
        const fallback = articlesArray[Math.floor(Math.random() * articlesArray.length)];
        setCurrentArticle(fallback);
        setView('article');
        setErrorMsg("Modo Demo: Adicione sua API Key nas configurações para gerar conteúdo inédito.");
      }, 2000);
      return;
    }

    const prompt = `Você é um editor de revista científica. Escreva um artigo curto e fascinante sobre um tema aleatório (Física, Biologia, Química, Astronomia ou Tecnologia).
    O formato DEVE ser um JSON puro (sem markdown) com os campos: title, author, category, content (3 parágrafos usando \\n\\n), fact (curiosidade one-liner) e image_keyword (uma palavra em inglês para busca).`;

    const tryModel = async (modelName, customPrompt = null) => {
      console.log(`Tentando modelo: ${modelName}...`);
      const p = customPrompt || prompt;
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: p }] }],
          ...(modelName.includes('1.5') ? { generationConfig: { response_mime_type: "application/json" } } : {})
        })
      });

      if (!response.ok) {
        let errorMsg = `Erro HTTP: ${response.status}`;
        try {
            const errorData = await response.json();
            if (errorData.error && errorData.error.message) errorMsg = errorData.error.message;
        } catch (e) { }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      if (!data.candidates || !data.candidates[0]) throw new Error("Sem resposta válida da IA");
      return data.candidates[0].content.parts[0].text;
    };

    try {
      let generatedText = "";
      try {
        generatedText = await tryModel('gemini-1.5-flash');
      } catch (e1) {
        console.warn("Falha no Flash 1.5, tentando fallback...", e1);
        try {
            generatedText = await tryModel('gemini-1.5-pro');
        } catch (e2) {
            console.warn("Falha no Pro 1.5, tentando Legacy...", e2);
            try {
                generatedText = await tryModel('gemini-pro', prompt + " Responda APENAS O JSON, sem introdução.");
            } catch (e3) {
                 const msg = e3.message || "";
                 if (msg.includes("not found") || msg.includes("404")) {
                     setErrorType('permission');
                     throw new Error("CHAVE DE TIPO ERRADO: Esta chave não tem permissão para usar a 'Generative Language API'.");
                 } else if (msg.includes("400") || msg.includes("INVALID_ARGUMENT")) {
                     setErrorType('invalid');
                     throw new Error("CHAVE INVÁLIDA: A chave copiada está incorreta.");
                 }
                 throw new Error(`Falha na conexão. Detalhes: ${msg}`);
            }
        }
      }

      const cleanText = cleanJsonString(generatedText);
      const parsedArticle = JSON.parse(cleanText);
      finishLoading(parsedArticle);

    } catch (err) {
      console.error("Erro fatal:", err);
      const articlesArray = Object.values(STATIC_CONTENT_LIBRARY);
      const fallback = articlesArray[0];
      setCurrentArticle(fallback);
      setView('article');
      setErrorMsg(err.message);
      if (errorType || err.message.includes("CHAVE")) {
          setIsApiError(true);
      }
    }
  };

  const finishLoading = (parsedArticle) => {
    const imageUrl = `https://image.pollinations.ai/prompt/${parsedArticle.image_keyword}%20scientific%20realistic%20high%20quality?width=1600&height=900&nologo=true`;
    setCurrentArticle({ ...parsedArticle, imageUrl: imageUrl, isGenerated: true });
    setView('article');
  };

  // --- RENDERIZAÇÃO: LOADING ---
  if (view === 'loading') {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center font-serif ${coverTheme.style.bgWrapper} ${coverTheme.style.textColor}`}>
        <div className="relative">
          <div className={`absolute inset-0 animate-ping rounded-full opacity-20 ${coverTheme.style.buttonBg}`}></div>
          <Atom size={64} className={`animate-spin-slow duration-3000 ${coverTheme.style.accentColor}`} />
        </div>
        <h2 className="mt-8 text-xl md:text-2xl font-bold tracking-widest uppercase">Pesquisando nos Arquivos</h2>
        <p className="mt-2 opacity-60 italic">Consultando a inteligência artificial...</p>
      </div>
    );
  }

  // --- RENDERIZAÇÃO: ARTIGO ---
  if (view === 'article' && currentArticle) {
    return (
      <div className="min-h-screen bg-stone-50 text-slate-900 font-sans selection:bg-red-200">
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-stone-200 z-50 px-4 py-3 flex justify-between items-center shadow-sm">
          <button onClick={() => setView('cover')} className="flex items-center gap-2 text-stone-600 hover:text-red-900 transition-colors uppercase tracking-widest text-xs font-bold">
            <ArrowLeft size={16} /> Voltar à Capa
          </button>
          <span className="font-serif font-bold text-lg hidden md:block">CURIOSIDADE CIENTÍFICA</span>
          <button onClick={fetchGeminiArticle} className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-xs hover:bg-red-900 transition-colors">
            <RefreshCw size={14} /> Ler Outra
          </button>
        </nav>

        <div className="relative w-full h-[50vh] md:h-[60vh] mt-0">
          <img 
            src={currentArticle.imageUrl} 
            alt={currentArticle.imageKeyword || "Science"}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-black/30"></div>
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 md:max-w-4xl">
            <span className="bg-red-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              {currentArticle.category}
            </span>
            <h1 className="text-3xl md:text-6xl font-serif font-bold leading-tight mb-2 md:mb-4 drop-shadow-lg text-slate-900">
              {currentArticle.title}
            </h1>
            <p className="text-stone-700 italic font-serif text-base md:text-lg">Por {currentArticle.author}</p>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-4 py-8 md:px-6 md:py-12 relative">
            {errorMsg && (
                <div className={`border-l-4 p-4 mb-8 text-sm flex flex-col gap-2 ${isApiError ? 'bg-red-50 border-red-500 text-red-900' : 'bg-amber-50 border-amber-500 text-amber-800'}`}>
                    <div className="flex items-center gap-2 font-bold">
                        <AlertTriangle size={16} /> 
                        {errorType === 'permission' ? "Erro de Permissão" : "Erro na Geração"}
                    </div>
                    <p>{errorMsg}</p>
                    {errorType === 'permission' && (
                        <div className="flex flex-col gap-2 mt-2">
                            <p className="text-xs">Sua chave foi criada no local errado ou a API não foi ativada.</p>
                            <a 
                                href="https://aistudio.google.com/app/apikey" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1 px-3 py-2 bg-red-100 hover:bg-red-200 rounded text-red-900 font-bold text-xs border border-red-300 transition-colors"
                            >
                                1. Obter Chave Correta (AI Studio) <ExternalLink size={12} />
                            </a>
                        </div>
                    )}
                </div>
            )}
            
            <div className="prose prose-base md:prose-lg prose-stone prose-headings:font-serif first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-red-900 mb-12">
                {currentArticle.content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx} className="mb-6 leading-relaxed text-stone-800">{paragraph}</p>
                ))}
            </div>

            {currentArticle.additionalImages && currentArticle.additionalImages.length > 0 && (
                <div className="my-12">
                    <h3 className="font-serif font-bold text-2xl mb-6 text-slate-900 flex items-center gap-2">
                        <ImageIcon size={24} /> Galeria Visual
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentArticle.additionalImages.map((img, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <div className="overflow-hidden rounded-lg shadow-md aspect-video bg-stone-200">
                                    <img 
                                        src={img.url} 
                                        alt={`Imagem ${idx + 1}`} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <p className="text-xs text-stone-500 italic border-l-2 border-red-900 pl-2">
                                    {img.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            <div className="my-8 md:my-12 bg-stone-200 p-6 md:p-8 border-l-4 border-red-900 rounded-r-lg relative overflow-hidden">
               <div className="absolute -right-4 -top-4 opacity-5 rotate-12"><Brain size={128} /></div>
               <h3 className="font-serif font-bold text-lg md:text-xl mb-2 text-red-900 flex items-center gap-2"><Sparkles size={18} /> Fato Rápido</h3>
               <p className="font-medium text-base md:text-lg italic text-slate-800 relative z-10">"{currentArticle.fact}"</p>
            </div>
        </main>
      </div>
    );
  }

  // --- RENDERIZAÇÃO: CAPA (HOME) ---
  return (
    <div className={`min-h-screen ${coverTheme.style.bgWrapper} ${coverTheme.style.textColor} font-sans p-0 md:p-8 flex items-center justify-center transition-colors duration-700`}>
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 max-w-md w-full shadow-2xl rounded-sm border border-stone-200 m-4">
            <h3 className="font-serif font-bold text-xl mb-4 text-slate-900 flex items-center gap-2">
              <Key size={20} /> Configurar API
            </h3>
            <p className="text-sm text-stone-600 mb-4">Insira sua Google Gemini API Key para gerar artigos infinitos.</p>
            
            <div className="flex gap-2 mb-4">
                <input 
                type="password" 
                placeholder="Cole sua API Key aqui..."
                defaultValue={apiKey}
                className="flex-1 border border-stone-300 text-slate-900 p-3 focus:outline-none focus:border-red-900 font-mono text-sm w-full"
                onChange={(e) => {setApiKey(e.target.value); setTestStatus('idle');}}
                />
                <button 
                    onClick={testConnection}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 font-bold text-xs uppercase tracking-wide transition-colors flex items-center justify-center min-w-[80px]"
                    disabled={testStatus === 'testing'}
                >
                    {testStatus === 'testing' ? <Loader2 size={16} className="animate-spin"/> : "Testar"}
                </button>
            </div>

            {testStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 text-xs flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600"/> {testMessage}
                </div>
            )}
            {testStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2 break-all">
                    <XCircle size={16} className="text-red-600 mt-0.5 shrink-0"/> <span>{testMessage}</span>
                </div>
            )}

            <div className="flex justify-end gap-2">
              <button onClick={() => setShowSettings(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-stone-100">Cancelar</button>
              <button onClick={() => handleSaveKey(apiKey)} className="px-4 py-2 bg-red-900 text-white text-sm font-bold">Salvar Editor</button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-stone-200">
                <p className="text-xs text-stone-500 mb-2 font-bold">Problemas comuns:</p>
                <ul className="text-xs text-stone-500 list-disc pl-4 space-y-1">
                    <li>Erro "404 Not Found": Chave errada (Vertex AI).</li>
                    <li><a href="https://aistudio.google.com/app/apikey" target="_blank" className="underline text-blue-600 font-bold">Criar Chave Correta no AI Studio</a></li>
                </ul>
            </div>
          </div>
        </div>
      )}

      <div className={`w-full max-w-[800px] min-h-screen md:min-h-[900px] shadow-2xl relative border-y-0 border-x-0 md:border-4 ${coverTheme.style.borderColor} p-4 md:p-6 flex flex-col transition-all duration-500`}>
        <header className={`border-b-4 ${coverTheme.style.borderColor} pb-4 mb-6 relative text-center`}>
           <div className="absolute right-0 top-0 flex flex-col items-end gap-2 z-20">
             <button 
               onClick={() => setShowSettings(true)} 
               className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-md transition-all hover:scale-105 ${!apiKey ? 'animate-pulse' : ''} ${coverTheme.style.buttonBg} ${coverTheme.style.buttonText}`}
             >
               <Key size={12} className="md:w-3.5 md:h-3.5" />
               {apiKey ? "Configurar" : "Inserir Key"}
             </button>
             
             <button onClick={cycleCover} className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-black/5 transition-colors ${coverTheme.style.mastheadColor} opacity-70`}>
                <Palette size={12} /> Tema
             </button>
           </div>
           
           <div className={`flex justify-between text-[10px] md:text-xs font-bold uppercase tracking-widest ${coverTheme.style.mastheadSub} mb-2 border-b ${coverTheme.style.borderColor.replace('4', '1')} pb-1 opacity-80 pt-8 md:pt-0`}>
              <span>Edição Infinita</span>
              <span>{coverTheme.content.vol}</span>
              <span>{new Date().getFullYear()}</span>
           </div>
           
           <h1 className={`${coverTheme.style.fontMain} text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter ${coverTheme.style.mastheadColor} scale-y-110 mb-2 mt-4 md:mt-0`}>
             CURIOSIDADE
             <span className={`block text-xl md:text-4xl font-normal tracking-widest mt-1 ${coverTheme.style.mastheadSub}`}>CIENTÍFICA</span>
           </h1>
        </header>

        <div className="flex-grow grid grid-cols-12 gap-4">
            <div className={`col-span-12 md:col-span-3 flex flex-col gap-6 md:gap-8 md:border-r ${coverTheme.style.borderColor} pr-0 md:pr-4 order-2 md:order-1`}>
                
                {/* Teaser 1 */}
                <div className="group cursor-pointer" onClick={() => handleOpenStaticArticle(coverTheme.content.teasers[0].title)}>
                    <span className={`${coverTheme.style.accentColor} font-bold text-xs uppercase block mb-1`}>{coverTheme.content.teasers[0].cat}</span>
                    <h3 className={`${coverTheme.style.fontMain} font-bold text-lg leading-tight hover:opacity-70 transition-opacity`}>
                        {coverTheme.content.teasers[0].title}
                    </h3>
                </div>
                <div className={`w-full h-px ${coverTheme.style.borderColor} opacity-30`}></div>
                
                {/* Teasers Restantes */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                    {coverTheme.content.teasers.slice(1).map((teaser, idx) => (
                        <div key={idx} className="group cursor-pointer" onClick={() => handleOpenStaticArticle(teaser.title)}>
                            <span className={`${teaser.color} font-bold text-xs uppercase block mb-1`}>{teaser.cat}</span>
                            <h3 className={`${coverTheme.style.fontMain} font-bold text-lg leading-tight hover:opacity-70`}>
                                {teaser.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-span-12 md:col-span-9 flex flex-col relative group order-1 md:order-2">
               {/* Destaque Principal - Dimensionamento Corrigido */}
               <div className={`relative flex-grow min-h-[50vh] md:min-h-auto overflow-hidden border ${coverTheme.style.borderColor} bg-stone-200 cursor-pointer`} onClick={() => handleOpenStaticArticle(coverTheme.content.highlight.title)}>
                  <img 
                    src={coverTheme.content.highlight.image}
                    alt="Main Feature"
                    className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${coverTheme.style.featureFilter}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 w-full p-6 text-white text-center">
                     {/* Fonte aumentada para mobile (text-3xl) e desktop (text-6xl) */}
                     <h2 className={`${coverTheme.style.fontMain} text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-2 md:mb-4 drop-shadow-md`}>
                        {coverTheme.content.highlight.title}
                     </h2>
                     <p className="text-stone-300 mb-6 font-medium max-w-md mx-auto text-sm md:text-base line-clamp-3 md:line-clamp-none">
                        {coverTheme.content.highlight.desc}
                     </p>
                     <button 
                        onClick={(e) => { e.stopPropagation(); fetchGeminiArticle(); }}
                        className={`${coverTheme.style.buttonBg} ${coverTheme.style.buttonText} px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold tracking-widest uppercase transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-3 mx-auto relative z-10`}
                     >
                        <Sparkles size={18} />
                        Gerar IA
                     </button>
                  </div>
               </div>

               {/* Faixa Inferior */}
               <div className={`mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 border-t-2 ${coverTheme.style.borderColor}`}>
                  {coverTheme.content.strip.map((item, idx) => (
                      <div key={idx} 
                           onClick={() => handleOpenStaticArticle(item.title)}
                           className={`flex-1 ${idx < 2 ? `sm:border-r ${coverTheme.style.borderColor} sm:pr-4` : ''} border-b sm:border-b-0 border-dashed pb-2 sm:pb-0 ${coverTheme.style.borderColor} opacity-80 cursor-pointer hover:opacity-100 transition-opacity`}>
                         <div className={`flex items-center gap-2 text-xs font-bold uppercase opacity-60 mb-1`}>
                            <item.icon size={14} /> {item.cat}
                         </div>
                         <p className={`${coverTheme.style.fontMain} font-bold text-sm leading-tight`}>{item.title}</p>
                      </div>
                  ))}
               </div>
            </div>
        </div>

        <footer className={`mt-6 border-t ${coverTheme.style.borderColor} pt-2 flex justify-between items-end text-[10px] opacity-50 font-mono uppercase pb-safe`}>
           <div>
              <p>ISSN 2025-AI-GEN</p>
              <p>{coverTheme.name}</p>
           </div>
           <div className="flex gap-4">
              <div className={`w-8 h-8 ${coverTheme.style.mastheadColor === 'text-white' ? 'bg-white' : 'bg-black'}`}></div>
              <div className={`h-8 w-24 ${coverTheme.style.mastheadColor === 'text-white' ? 'bg-white' : 'bg-black'} opacity-20`}></div>
           </div>
        </footer>
      </div>
    </div>
  );
}
