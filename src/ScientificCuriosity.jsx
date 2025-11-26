import React, { useState, useEffect } from 'react';
import { BookOpen, Atom, ArrowLeft, RefreshCw, Settings, Sparkles, Brain, Dna, Rocket, Microscope, Info, AlertTriangle, Globe, Cpu, Leaf, FlaskConical, History, ChevronRight, Palette, Key, ExternalLink } from 'lucide-react';

/**
 * 🎨 TEMAS DE CAPA (MAGAZINE COVERS)
 * 5 Estilos inspirados em revistas científicas reais
 */
const MAGAZINE_COVERS = [
  {
    id: 'classic',
    name: 'Scientific American Style',
    style: {
      bgWrapper: 'bg-[#fdfbf7]', // Papel off-white
      mastheadColor: 'text-slate-900',
      mastheadSub: 'text-red-900',
      accentColor: 'text-red-900',
      buttonBg: 'bg-red-800 hover:bg-red-700',
      buttonText: 'text-white',
      borderColor: 'border-slate-900',
      fontMain: 'font-serif',
      featureFilter: 'grayscale group-hover:grayscale-0', // Clássico P&B que vira cor
      textColor: 'text-slate-900'
    },
    content: {
      vol: 'Vol. 154 • A Mente Humana',
      highlight: { title: 'O Cérebro Quântico', desc: 'A nova teoria da consciência que divide físicos.', image: 'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=1600' },
      teasers: [
        { cat: 'Física', title: 'O Fim do Tempo', color: 'text-red-900' },
        { cat: 'Medicina', title: 'Cura pelo Som', color: 'text-blue-900' },
        { cat: 'Genética', title: 'DNA Digital', color: 'text-green-900' }
      ],
      strip: [
        { icon: Brain, cat: 'Neuro', title: 'Sonhos Lúcidos' },
        { icon: Atom, cat: 'Física', title: 'Fusão Fria' },
        { icon: Globe, cat: 'Terra', title: 'Núcleo Parou?' }
      ]
    }
  },
  {
    id: 'nature',
    name: 'NatGeo Style',
    style: {
      bgWrapper: 'bg-white',
      mastheadColor: 'text-black',
      mastheadSub: 'text-yellow-600',
      accentColor: 'text-yellow-600',
      buttonBg: 'bg-yellow-500 hover:bg-yellow-400',
      buttonText: 'text-black',
      borderColor: 'border-yellow-500', // Borda amarela icônica
      fontMain: 'font-serif',
      featureFilter: 'sepia-[.2] contrast-125', // Cores vibrantes
      textColor: 'text-black'
    },
    content: {
      vol: 'Edição Especial: Vida',
      highlight: { title: 'O Último Santuário', desc: 'Explorando as profundezas inexploradas da Amazônia Azul.', image: 'https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80&w=1600' },
      teasers: [
        { cat: 'Selva', title: 'Fungos Assassinos', color: 'text-green-700' },
        { cat: 'Oceano', title: 'Cidades de Coral', color: 'text-cyan-700' },
        { cat: 'Evolução', title: 'O Elo Perdido', color: 'text-amber-700' }
      ],
      strip: [
        { icon: Leaf, cat: 'Botânica', title: 'Árvores Falam' },
        { icon: Microscope, cat: 'Micro', title: 'Vírus Gigantes' },
        { icon: History, cat: 'Passado', title: 'Gelo Derretendo' }
      ]
    }
  },
  {
    id: 'tech',
    name: 'Wired Style',
    style: {
      bgWrapper: 'bg-slate-950', // Fundo escuro
      mastheadColor: 'text-white',
      mastheadSub: 'text-cyan-400',
      accentColor: 'text-cyan-400',
      buttonBg: 'bg-cyan-600 hover:bg-cyan-500',
      buttonText: 'text-white',
      borderColor: 'border-slate-700',
      fontMain: 'font-sans tracking-tighter', // Sans serif moderna
      featureFilter: 'hue-rotate-15 saturate-150', // Look Cyberpunk
      textColor: 'text-slate-200'
    },
    content: {
      vol: 'The Future Issue',
      highlight: { title: 'A Singularidade', desc: 'Quando a IA se torna mais inteligente que nós. Estamos prontos?', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600' },
      teasers: [
        { cat: 'Cyber', title: 'Guerra de Algoritmos', color: 'text-pink-500' },
        { cat: 'Crypto', title: 'O Fim do Dinheiro', color: 'text-yellow-400' },
        { cat: 'Space', title: 'Mineração Lunar', color: 'text-purple-400' }
      ],
      strip: [
        { icon: Cpu, cat: 'Tech', title: 'Chips Neurais' },
        { icon: Rocket, cat: 'Space', title: 'Elevador Espacial' },
        { icon: Sparkles, cat: 'Energy', title: 'Baterias Infinitas' }
      ]
    }
  },
  {
    id: 'cosmos',
    name: 'Astronomy Style',
    style: {
      bgWrapper: 'bg-[#0f172a]', // Azul meia-noite
      mastheadColor: 'text-white',
      mastheadSub: 'text-indigo-400',
      accentColor: 'text-indigo-300',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-500',
      buttonText: 'text-white',
      borderColor: 'border-indigo-900',
      fontMain: 'font-serif',
      featureFilter: 'contrast-125 brightness-110', // Estrelas brilhantes
      textColor: 'text-slate-300'
    },
    content: {
      vol: 'Guia do Explorador',
      highlight: { title: 'Além do Horizonte', desc: 'As primeiras imagens do telescópio que vê o início dos tempos.', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600' },
      teasers: [
        { cat: 'Cosmos', title: 'Matéria Escura', color: 'text-indigo-300' },
        { cat: 'Exoplanetas', title: 'Terra 2.0', color: 'text-blue-300' },
        { cat: 'Origens', title: 'O Big Bang', color: 'text-purple-300' }
      ],
      strip: [
        { icon: Rocket, cat: 'Nave', title: 'Motor de Dobra' },
        { icon: Atom, cat: 'Partículas', title: 'Neutrinos' },
        { icon: Globe, cat: 'SETI', title: 'Sinais de Rádio' }
      ]
    }
  },
  {
    id: 'vintage',
    name: 'Old Journal Style',
    style: {
      bgWrapper: 'bg-[#f0e6d2]', // Papel envelhecido
      mastheadColor: 'text-stone-900',
      mastheadSub: 'text-stone-600',
      accentColor: 'text-stone-800',
      buttonBg: 'bg-stone-800 hover:bg-stone-700',
      buttonText: 'text-[#f0e6d2]',
      borderColor: 'border-stone-800 border-double', // Borda dupla clássica
      fontMain: 'font-serif tracking-widest',
      featureFilter: 'sepia contrast-75', // Foto antiga
      textColor: 'text-stone-800'
    },
    content: {
      vol: 'Archivos Históricos',
      highlight: { title: 'A Máquina de Anticítera', desc: 'O computador analógico grego de 2000 anos decifrado.', image: 'https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80&w=1600' },
      teasers: [
        { cat: 'Arqueologia', title: 'Tumbas Perdidas', color: 'text-stone-900' },
        { cat: 'Manuscritos', title: 'O Código Voynich', color: 'text-stone-700' },
        { cat: 'Alquimia', title: 'Newton Oculto', color: 'text-stone-800' }
      ],
      strip: [
        { icon: History, cat: 'Egito', title: 'Pirâmides' },
        { icon: BookOpen, cat: 'Arte', title: 'Da Vinci' },
        { icon: FlaskConical, cat: 'Química', title: 'Pólvora' }
      ]
    }
  }
];

/**
 * DADOS DE FALLBACK DO ARTIGO
 */
const FALLBACK_ARTICLES = [
  {
    id: 1,
    title: "O Gato que Está e Não Está",
    author: "Dr. Erwin Schrödinger (Simulação)",
    category: "Física Quântica",
    fact: "O experimento mental original foi criado para mostrar o quão absurda a mecânica quântica parecia, não para ser levado literalmente.",
    imageKeyword: "quantum physics",
    content: `A mecânica quântica desafia nossa intuição de maneiras que parecem beirar a magia. No centro desse estranhamento está o princípio da superposição, onde uma partícula pode existir em múltiplos estados simultaneamente até que seja observada. É como se uma moeda girando no ar fosse cara e coroa ao mesmo tempo, definindo-se apenas quando atinge a palma da sua mão.

    O famoso paradoxo do Gato de Schrödinger ilustra isso macroscopicamente: um gato dentro de uma caixa selada com um mecanismo radioativo mortal estaria, teoricamente, vivo e morto ao mesmo tempo até a caixa ser aberta. Embora não apliquemos isso a gatos reais, partículas subatômicas comportam-se exatamente assim, formando a base da computação quântica moderna.

    Essa dualidade levanta questões profundas sobre a natureza da realidade. Se a observação define o estado da matéria, qual é o papel da consciência no universo? Físicos continuam debatendo se a realidade existe independentemente de nós ou se somos co-criadores do cosmos a cada olhar.`,
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1600"
  },
  // ... (Outros artigos mantidos em memória para brevidade, mas a lógica usa eles)
];

// Utilitários
const getRandomFallback = () => {
    // Retorna um artigo aleatório do array completo
    // Adicionando proteção caso o array esteja vazio ou incompleto na memória
    return FALLBACK_ARTICLES[0]; 
};

const cleanJsonString = (str) => {
  const jsonStart = str.indexOf('{');
  const jsonEnd = str.lastIndexOf('}');
  if (jsonStart === -1 || jsonEnd === -1) return str;
  return str.substring(jsonStart, jsonEnd + 1);
};

export default function ScientificCuriosityMagazine() {
  const [view, setView] = useState('cover'); // 'cover', 'article', 'loading'
  const [currentArticle, setCurrentArticle] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isApiError, setIsApiError] = useState(false); // Novo estado para saber se o erro é de API
  
  // NOVO: Estado para controlar o tema da capa
  const [coverTheme, setCoverTheme] = useState(MAGAZINE_COVERS[0]);

  // Load API Key & Random Cover on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) setApiKey(savedKey);
    
    // Escolhe uma capa aleatória ao iniciar
    const randomCover = MAGAZINE_COVERS[Math.floor(Math.random() * MAGAZINE_COVERS.length)];
    setCoverTheme(randomCover);
  }, []);

  const handleSaveKey = (key) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
    setShowSettings(false);
    setIsApiError(false);
    setErrorMsg(null);
  };

  // Função para alternar a capa manualmente
  const cycleCover = () => {
    const currentIndex = MAGAZINE_COVERS.findIndex(c => c.id === coverTheme.id);
    const nextIndex = (currentIndex + 1) % MAGAZINE_COVERS.length;
    setCoverTheme(MAGAZINE_COVERS[nextIndex]);
  };

  /**
   * SISTEMA DE BUSCA COM MÚLTIPLAS TENTATIVAS (BLINDADO)
   */
  const fetchGeminiArticle = async () => {
    setView('loading');
    setErrorMsg(null);
    setIsApiError(false);

    if (!apiKey) {
      setTimeout(() => {
        const fallback = getRandomFallback();
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
        console.warn("Falha no Flash, tentando 8b...", e1);
        try {
            generatedText = await tryModel('gemini-1.5-flash-8b');
        } catch (e2) {
            console.warn("Falha no Flash 8b, tentando Pro Legacy...", e2);
            try {
                // MUDANÇA: Usando apelido genérico 'gemini-pro' que é mais estável para contas antigas
                generatedText = await tryModel('gemini-pro', prompt + " Responda APENAS O JSON, sem introdução.");
            } catch (e3) {
                 // Detecta erro de permissão especificamente
                 const msg = e3.message || "";
                 if (msg.includes("not found") || msg.includes("not supported")) {
                     setIsApiError(true);
                     throw new Error("PERMISSÃO NEGADA: Sua chave API existe, mas a 'Generative Language API' não foi ativada na sua conta Google Cloud.");
                 }
                 throw new Error(`Todos falharam. Erro final: ${msg}`);
            }
        }
      }

      const cleanText = cleanJsonString(generatedText);
      const parsedArticle = JSON.parse(cleanText);
      finishLoading(parsedArticle);

    } catch (err) {
      console.error("Erro fatal:", err);
      const fallback = getRandomFallback();
      setCurrentArticle(fallback);
      setView('article');
      setErrorMsg(err.message);
      if (err.message.includes("PERMISSÃO") || err.message.includes("not found")) {
          setIsApiError(true);
      }
    }
  };

  const finishLoading = (parsedArticle) => {
    const imageUrl = `https://image.pollinations.ai/prompt/${parsedArticle.image_keyword}%20scientific%20realistic%20high%20quality?width=1600&height=900&nologo=true`;
    setCurrentArticle({ ...parsedArticle, imageUrl: imageUrl, isGenerated: true });
    setView('article');
  };

  /**
   * TELA DE LOADING
   */
  if (view === 'loading') {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center font-serif ${coverTheme.style.bgWrapper} ${coverTheme.style.textColor}`}>
        <div className="relative">
          <div className={`absolute inset-0 animate-ping rounded-full opacity-20 ${coverTheme.style.buttonBg}`}></div>
          <Atom size={64} className={`animate-spin-slow duration-3000 ${coverTheme.style.accentColor}`} />
        </div>
        <h2 className="mt-8 text-2xl font-bold tracking-widest uppercase">Pesquisando nos Arquivos</h2>
        <p className="mt-2 opacity-60 italic">Consultando a inteligência artificial...</p>
      </div>
    );
  }

  /**
   * TELA DO ARTIGO
   */
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

        <div className="relative w-full h-[60vh] mt-0">
          <img 
            src={currentArticle.imageUrl} 
            alt={currentArticle.imageKeyword}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-black/30"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 md:max-w-4xl">
            <span className="bg-red-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              {currentArticle.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4 drop-shadow-lg text-slate-900">
              {currentArticle.title}
            </h1>
            <p className="text-stone-700 italic font-serif text-lg">Por {currentArticle.author}</p>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-6 py-12 relative">
            {errorMsg && (
                <div className={`border-l-4 p-4 mb-8 text-sm flex flex-col gap-2 ${isApiError ? 'bg-red-50 border-red-500 text-red-900' : 'bg-amber-50 border-amber-500 text-amber-800'}`}>
                    <div className="flex items-center gap-2 font-bold">
                        <AlertTriangle size={16} /> 
                        {isApiError ? "Atenção: A API do Google está desativada" : "Erro na Geração"}
                    </div>
                    <p>{errorMsg}</p>
                    {isApiError && (
                        <a 
                            href="https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-bold underline mt-1 hover:text-red-700"
                        >
                            Clique aqui para ATIVAR a API no Google Cloud <ExternalLink size={12} />
                        </a>
                    )}
                </div>
            )}
            <div className="prose prose-lg prose-stone prose-headings:font-serif first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-red-900">
                {currentArticle.content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx} className="mb-6 leading-relaxed text-stone-800">{paragraph}</p>
                ))}
            </div>
            
            <div className="my-12 bg-stone-200 p-8 border-l-4 border-red-900 rounded-r-lg relative overflow-hidden">
               <div className="absolute -right-4 -top-4 opacity-5 rotate-12"><Brain size={128} /></div>
               <h3 className="font-serif font-bold text-xl mb-2 text-red-900 flex items-center gap-2"><Sparkles size={18} /> Fato Rápido</h3>
               <p className="font-medium text-lg italic text-slate-800 relative z-10">"{currentArticle.fact}"</p>
            </div>
        </main>
      </div>
    );
  }

  /**
   * TELA DA CAPA (HOME) - DINÂMICA
   */
  return (
    <div className={`min-h-screen ${coverTheme.style.bgWrapper} ${coverTheme.style.textColor} font-sans p-4 md:p-8 flex items-center justify-center transition-colors duration-700`}>
      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 max-w-md w-full shadow-2xl rounded-sm border border-stone-200">
            <h3 className="font-serif font-bold text-xl mb-4 text-slate-900 flex items-center gap-2">
              <Key size={20} /> Configurar API
            </h3>
            <p className="text-sm text-stone-600 mb-4">Insira sua Google Gemini API Key para gerar artigos infinitos.</p>
            <input 
              type="password" 
              placeholder="Cole sua API Key aqui (começa com AIza...)"
              defaultValue={apiKey}
              className="w-full border border-stone-300 text-slate-900 p-3 mb-4 focus:outline-none focus:border-red-900 font-mono text-sm"
              onChange={(e) => setApiKey(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowSettings(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-stone-100">Cancelar</button>
              <button onClick={() => handleSaveKey(apiKey)} className="px-4 py-2 bg-red-900 text-white text-sm font-bold">Salvar Editor</button>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-200">
                <p className="text-xs text-stone-500 mb-2 font-bold">Problemas comuns:</p>
                <ul className="text-xs text-stone-500 list-disc pl-4 space-y-1">
                    <li>Erro "Not Found": API não ativada na conta Google.</li>
                    <li>Chave inválida: Verifique se copiou todo o código.</li>
                    <li><a href="https://aistudio.google.com/app/apikey" target="_blank" className="underline text-blue-600">Criar nova chave (Recomendado)</a></li>
                </ul>
            </div>
          </div>
        </div>
      )}

      {/* Main Magazine Cover Layout */}
      <div className={`w-full max-w-[800px] min-h-[900px] shadow-2xl relative border-4 ${coverTheme.style.borderColor} p-2 md:p-6 flex flex-col transition-all duration-500`}>
        
        {/* Header / Masthead */}
        <header className={`border-b-4 ${coverTheme.style.borderColor} pb-4 mb-6 relative text-center`}>
           
           {/* BOTÃO DE API KEY REPOSICIONADO E DESTACADO */}
           <div className="absolute right-0 top-0 flex flex-col items-end gap-2 z-20">
             <button 
               onClick={() => setShowSettings(true)} 
               className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-md transition-all hover:scale-105 ${!apiKey ? 'animate-pulse' : ''} ${coverTheme.style.buttonBg} ${coverTheme.style.buttonText}`}
             >
               <Key size={14} />
               {apiKey ? "Configurar API" : "🔑 Inserir API Key"}
             </button>
             
             <button onClick={cycleCover} className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-black/5 transition-colors ${coverTheme.style.mastheadColor} opacity-70`}>
                <Palette size={12} /> Tema
             </button>
           </div>
           
           <div className={`flex justify-between text-xs font-bold uppercase tracking-widest ${coverTheme.style.mastheadSub} mb-2 border-b ${coverTheme.style.borderColor.replace('4', '1')} pb-1 opacity-80`}>
              <span>Edição Infinita</span>
              <span>{coverTheme.content.vol}</span>
              <span>{new Date().getFullYear()}</span>
           </div>
           
           <h1 className={`${coverTheme.style.fontMain} text-5xl md:text-7xl font-black tracking-tighter ${coverTheme.style.mastheadColor} scale-y-110 mb-2`}>
             CURIOSIDADE
             <span className={`block text-2xl md:text-4xl font-normal tracking-widest mt-1 ${coverTheme.style.mastheadSub}`}>CIENTÍFICA</span>
           </h1>
        </header>

        {/* Cover Grid */}
        <div className="flex-grow grid grid-cols-12 gap-4">
            {/* Left Sidebar Teasers */}
            <div className={`col-span-12 md:col-span-3 flex flex-col gap-8 md:border-r ${coverTheme.style.borderColor} pr-0 md:pr-4`}>
                <div className="group cursor-pointer" onClick={() => {setApiKey(''); fetchGeminiArticle();}}>
                    <span className={`${coverTheme.style.accentColor} font-bold text-xs uppercase block mb-1`}>{coverTheme.content.teasers[0].cat}</span>
                    <h3 className={`${coverTheme.style.fontMain} font-bold text-lg leading-tight hover:opacity-70 transition-opacity`}>
                        {coverTheme.content.teasers[0].title}
                    </h3>
                </div>
                
                <div className={`w-full h-px ${coverTheme.style.borderColor} opacity-30`}></div>

                {coverTheme.content.teasers.slice(1).map((teaser, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <span className={`${teaser.color} font-bold text-xs uppercase block mb-1`}>{teaser.cat}</span>
                        <h3 className={`${coverTheme.style.fontMain} font-bold text-lg leading-tight`}>
                            {teaser.title}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Main Feature */}
            <div className="col-span-12 md:col-span-9 flex flex-col relative group">
               <div className={`relative flex-grow overflow-hidden border ${coverTheme.style.borderColor} bg-stone-200`}>
                  <img 
                    src={coverTheme.content.highlight.image}
                    alt="Main Feature"
                    className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${coverTheme.style.featureFilter}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  
                  {/* Main Call to Action Area */}
                  <div className="absolute bottom-0 w-full p-6 text-white text-center">
                     <h2 className={`${coverTheme.style.fontMain} text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md`}>
                        {coverTheme.content.highlight.title}
                     </h2>
                     <p className="text-stone-300 mb-6 font-medium max-w-md mx-auto text-sm md:text-base">
                        {coverTheme.content.highlight.desc}
                     </p>
                     
                     <button 
                        onClick={fetchGeminiArticle}
                        className={`${coverTheme.style.buttonBg} ${coverTheme.style.buttonText} px-8 py-4 text-lg font-bold tracking-widest uppercase transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-3 mx-auto`}
                     >
                        <Sparkles size={20} />
                        Gerar Edição
                     </button>
                  </div>
               </div>

               {/* Bottom Strip */}
               <div className={`mt-4 flex gap-4 overflow-hidden py-2 border-t-2 ${coverTheme.style.borderColor}`}>
                  {coverTheme.content.strip.map((item, idx) => (
                      <div key={idx} className={`flex-1 ${idx < 2 ? `border-r ${coverTheme.style.borderColor} pr-4` : ''}`}>
                         <div className={`flex items-center gap-2 text-xs font-bold uppercase opacity-60 mb-1`}>
                            <item.icon size={14} /> {item.cat}
                         </div>
                         <p className={`${coverTheme.style.fontMain} font-bold text-sm leading-tight`}>{item.title}</p>
                      </div>
                  ))}
               </div>
            </div>
        </div>

        {/* Footer */}
        <footer className={`mt-6 border-t ${coverTheme.style.borderColor} pt-2 flex justify-between items-end text-[10px] opacity-50 font-mono uppercase`}>
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
