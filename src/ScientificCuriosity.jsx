import React, { useState, useEffect } from 'react';
import { BookOpen, Atom, ArrowLeft, RefreshCw, Settings, Sparkles, Brain, Dna, Rocket, Microscope, Info, AlertTriangle } from 'lucide-react';

/**
 * CONFIGURAÇÃO E DADOS DE FALLBACK (O "CÉREBRO" DE BACKUP)
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
  {
    id: 2,
    title: "CRISPR: A Tesoura da Vida",
    author: "Jennifer Doudna (Simulação)",
    category: "Biologia Genética",
    fact: "A tecnologia CRISPR foi adaptada de um mecanismo de defesa natural que as bactérias usam para combater vírus.",
    imageKeyword: "dna structure",
    content: `Imagine poder editar o código da vida como quem corrige um texto no computador. O sistema CRISPR-Cas9 tornou isso realidade. Originalmente um sistema imunológico bacteriano, cientistas o transformaram em uma ferramenta de precisão capaz de localizar, cortar e substituir sequências específicas de DNA em qualquer organismo vivo.

    As implicações são vertiginosas. Já estamos curando doenças genéticas que antes eram sentenças de morte, como a anemia falciforme. No horizonte, vislumbramos a possibilidade de eliminar a malária modificando mosquitos ou criar plantações resistentes às mudanças climáticas extremas que o futuro promete.

    Contudo, o poder de reescrever a genética traz dilemas éticos monumentais. Onde traçamos a linha entre cura e aprimoramento? Bebês projetados, desigualdade genética e impactos ecológicos imprevistos são debates urgentes que a sociedade precisa enfrentar enquanto a ciência avança em velocidade de dobra.`,
    imageUrl: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 3,
    title: "A Dança das Estrelas Negras",
    author: "Kip Thorne (Simulação)",
    category: "Astronomia",
    fact: "Buracos negros não são aspiradores cósmicos; se o Sol virasse um buraco negro, a Terra continuaria orbitando normalmente (mas congelaria).",
    imageKeyword: "black hole",
    content: `Buracos negros são os objetos mais extremos do universo, regiões onde a gravidade é tão intensa que nada, nem mesmo a luz, consegue escapar. Por décadas, eles existiram apenas nas equações de Einstein, monstros matemáticos que muitos duvidavam ser reais. Hoje, temos fotografias deles.

    No centro da nossa própria galáxia, a Via Láctea, reside Sagitário A*, um gigante com a massa de 4 milhões de sóis. O que acontece além do horizonte de eventos permanece um mistério. A física como a conhecemos entra em colapso na singularidade, onde tempo e espaço se tornam indistinguíveis.

    Estudos recentes sugerem que eles podem ser essenciais para a formação de galáxias. Longe de serem apenas devoradores destrutivos, os buracos negros supermassivos atuam como âncoras gravitacionais, orquestrando a dança cósmica de bilhões de estrelas e moldando a estrutura do universo visível.`,
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 4,
    title: "O Primeiro Código",
    author: "Ada Lovelace (Simulação)",
    category: "Computação",
    fact: "Ada Lovelace escreveu o primeiro algoritmo para uma máquina em 1843, um século antes do primeiro computador eletrônico ser construído.",
    imageKeyword: "vintage computer",
    content: `Em uma era de vapor e engrenagens, Ada Lovelace vislumbrou o futuro digital. Filha do poeta Lord Byron, ela colaborou com Charles Babbage em sua "Máquina Analítica". Enquanto Babbage via uma super calculadora, Ada percebeu algo poético: se a máquina podia manipular números, poderia manipular qualquer símbolo, incluindo música e letras.

    Ela escreveu notas detalhadas sobre como instruir a máquina a calcular os Números de Bernoulli. Essas notas são consideradas o primeiro software da história. Ada profetizou que os computadores um dia seriam parceiros da criatividade humana, não apenas ferramentas de cálculo bruto.

    Sua visão foi esquecida por cem anos, até ser redescoberta na era da computação moderna. Hoje, cada linha de código que alimenta nossa inteligência artificial e nossos smartphones carrega um pouco do DNA visionário da "Encantadora de Números" do século XIX.`,
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 5,
    title: "A Química do Amor",
    author: "Marie Curie (Simulação)",
    category: "Química",
    fact: "A oxitocina, conhecida como hormônio do amor, é produzida no hipotálamo e funciona tanto como hormônio quanto como neurotransmissor.",
    imageKeyword: "molecular chemistry",
    content: `O que chamamos de "amor" é, em um nível fundamental, um coquetel químico complexo orquestrado pelo nosso cérebro para garantir a sobrevivência da espécie. Dopamina, oxitocina e serotonina inundam nossos circuitos neurais, criando sensações de euforia, apego e obsessão que poetas tentam descrever há milênios.

    A fase da paixão é impulsionada pela dopamina, ativando os mesmos centros de recompensa que respondem ao açúcar ou drogas viciantes. É um estado biológico de alteração temporária da consciência. Com o tempo, a oxitocina assume o comando, promovendo laços duradouros de confiança e segurança.

    Entender a química não diminui a magia; pelo contrário, revela a complexidade da máquina humana. Somos laboratórios ambulantes, onde reações moleculares sutis ditam desde a escolha de parceiros até a profundidade de nossa empatia social.`,
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 6,
    title: "A Rede Subterrânea das Florestas",
    author: "Suzanne Simard (Simulação)",
    category: "Biologia Botânica",
    fact: "Árvores usam uma rede de fungos nas raízes para enviar nutrientes umas às outras, mantendo vivas até as tocos de árvores cortadas.",
    imageKeyword: "forest roots",
    content: `Sob nossos pés, nas florestas antigas, existe uma "internet" biológica. A "Wood Wide Web" é formada por fungos micorrízicos que conectam as raízes das árvores, permitindo que elas se comuniquem e troquem recursos. Não é uma metáfora: carbono, água e sinais de alerta químicos trafegam por essa via.

    Árvores "mães" usam essa rede para alimentar suas mudas que crescem na sombra, garantindo sua sobrevivência. Quando uma árvore é atacada por pragas, ela envia sinais químicos pela rede, permitindo que as vizinhas aumentem suas defesas imunológicas antes mesmo de serem atingidas.

    Essa descoberta revolucionou nossa compreensão da ecologia. A floresta não é um conjunto de indivíduos competindo apenas pela luz do sol, mas um superorganismo cooperativo. A inteligência da natureza é descentralizada, colaborativa e profundamente conectada.`,
    imageUrl: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?auto=format&fit=crop&q=80&w=1600"
  }
];

/**
 * UTILS
 */
const getRandomFallback = () => {
  const randomIndex = Math.floor(Math.random() * FALLBACK_ARTICLES.length);
  return FALLBACK_ARTICLES[randomIndex];
};

const cleanJsonString = (str) => {
  const jsonStart = str.indexOf('{');
  const jsonEnd = str.lastIndexOf('}');
  if (jsonStart === -1 || jsonEnd === -1) return str;
  return str.substring(jsonStart, jsonEnd + 1);
};

/**
 * COMPONENTE PRINCIPAL
 */
export default function ScientificCuriosityMagazine() {
  const [view, setView] = useState('cover'); // 'cover', 'article', 'loading'
  const [currentArticle, setCurrentArticle] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // Load API Key on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) setApiKey(savedKey);
  }, []);

  const handleSaveKey = (key) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
    setShowSettings(false);
  };

  /**
   * SISTEMA DE BUSCA COM MÚLTIPLAS TENTATIVAS
   * Tenta: Gemini 1.5 Flash -> Gemini 1.5 Flash 8b -> Gemini 1.0 Pro (Explicit)
   */
  const fetchGeminiArticle = async () => {
    setView('loading');
    setErrorMsg(null);

    // Se não tiver chave, usa fallback com delay
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

    // Função auxiliar para testar modelos
    const tryModel = async (modelName, customPrompt = null) => {
      console.log(`Tentando modelo: ${modelName}...`);
      const p = customPrompt || prompt;
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: p }] }],
          // Apenas modelos 1.5 suportam bem o response_mime_type, o 1.0 (pro) costuma falhar
          ...(modelName.includes('1.5') ? { generationConfig: { response_mime_type: "application/json" } } : {})
        })
      });

      if (!response.ok) {
        let errorMsg = `Erro HTTP: ${response.status}`;
        try {
            const errorData = await response.json();
            if (errorData.error && errorData.error.message) errorMsg = errorData.error.message;
        } catch (e) { /* ignore parse error */ }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      if (!data.candidates || !data.candidates[0]) throw new Error("Sem resposta válida da IA");
      return data.candidates[0].content.parts[0].text;
    };

    try {
      let generatedText = "";
      
      // CADEIA DE RESPONSABILIDADE
      try {
        // TENTATIVA 1: Flash Standard
        generatedText = await tryModel('gemini-1.5-flash');
      } catch (e1) {
        console.warn("Falha no Flash, tentando 8b...", e1);
        try {
            // TENTATIVA 2: Flash 8b (Mais novo e leve)
            generatedText = await tryModel('gemini-1.5-flash-8b');
        } catch (e2) {
            console.warn("Falha no Flash 8b, tentando 1.0 Pro Legacy...", e2);
            try {
                // TENTATIVA 3: Gemini 1.0 Pro (Explicitamente a versão antiga)
                // Adicionamos reforço no prompt pois ele não suporta mime_type json nativo
                generatedText = await tryModel('gemini-1.0-pro', prompt + " Responda APENAS O JSON, sem introdução.");
            } catch (e3) {
                 // MOSTRA O ERRO DA ÚLTIMA TENTATIVA PARA SABERMOS O MOTIVO REAL
                 throw new Error(`Todos falharam. Erro final (1.0 Pro): ${e3.message}. Verifique se sua chave tem a API 'Generative Language' ativa.`);
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
      // Exibe o erro na interface
      setErrorMsg(`Erro: ${err.message}`); 
    }
  };

  const finishLoading = (parsedArticle) => {
    // Nova URL de imagem mais estável usando pollinations
    const imageUrl = `https://image.pollinations.ai/prompt/${parsedArticle.image_keyword}%20scientific%20realistic%20high%20quality?width=1600&height=900&nologo=true`;

    setCurrentArticle({
      ...parsedArticle,
      imageUrl: imageUrl, 
      isGenerated: true
    });
    setView('article');
  };

  /**
   * TELA DE LOADING
   */
  if (view === 'loading') {
    return (
      <div className="min-h-screen bg-stone-100 flex flex-col items-center justify-center font-serif text-stone-800">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-red-800 opacity-20"></div>
          <Atom size={64} className="text-red-900 animate-spin-slow duration-3000" />
        </div>
        <h2 className="mt-8 text-2xl font-bold tracking-widest uppercase">Pesquisando nos Arquivos</h2>
        <p className="mt-2 text-stone-500 italic">Consultando a inteligência artificial...</p>
      </div>
    );
  }

  /**
   * TELA DO ARTIGO
   */
  if (view === 'article' && currentArticle) {
    return (
      <div className="min-h-screen bg-stone-50 text-slate-900 font-sans selection:bg-red-200">
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-stone-200 z-50 px-4 py-3 flex justify-between items-center shadow-sm">
          <button 
            onClick={() => setView('cover')}
            className="flex items-center gap-2 text-stone-600 hover:text-red-900 transition-colors uppercase tracking-widest text-xs font-bold"
          >
            <ArrowLeft size={16} /> Voltar à Capa
          </button>
          <span className="font-serif font-bold text-lg hidden md:block">CURIOSIDADE CIENTÍFICA</span>
          <button 
            onClick={fetchGeminiArticle}
            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-xs hover:bg-red-900 transition-colors"
          >
            <RefreshCw size={14} /> Ler Outra
          </button>
        </nav>

        {/* Hero Image */}
        <div className="relative w-full h-[60vh] mt-0">
          <img 
            src={currentArticle.imageUrl} 
            alt={currentArticle.imageKeyword}
            className="w-full h-full object-cover"
            onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-black/30"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 md:max-w-4xl">
            <span className="bg-red-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              {currentArticle.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4 drop-shadow-lg text-slate-900">
              {currentArticle.title}
            </h1>
            <p className="text-stone-700 italic font-serif text-lg">
              Por {currentArticle.author}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <main className="max-w-3xl mx-auto px-6 py-12 relative">
            {errorMsg && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 text-amber-800 text-sm flex gap-2 items-center">
                    <AlertTriangle size={16} /> {errorMsg}
                </div>
            )}

          <div className="flex gap-4 md:-ml-16 mb-8 items-start">
             <div className="hidden md:flex flex-col gap-4 text-stone-400 sticky top-24">
                <button className="hover:text-red-900 transition"><Info size={20}/></button>
                <div className="w-px h-12 bg-stone-300 mx-auto"></div>
             </div>
             
             <div className="prose prose-lg prose-stone prose-headings:font-serif first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-red-900">
                {currentArticle.content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx} className="mb-6 leading-relaxed text-stone-800">{paragraph}</p>
                ))}
             </div>
          </div>

          {/* Callout / Fact Box */}
          <div className="my-12 bg-stone-200 p-8 border-l-4 border-red-900 rounded-r-lg relative overflow-hidden">
             <div className="absolute -right-4 -top-4 opacity-5 rotate-12">
                <Brain size={128} />
             </div>
             <h3 className="font-serif font-bold text-xl mb-2 text-red-900 flex items-center gap-2">
               <Sparkles size={18} /> Fato Rápido
             </h3>
             <p className="font-medium text-lg italic text-slate-800 relative z-10">
               "{currentArticle.fact}"
             </p>
          </div>

          <div className="border-t border-stone-300 pt-8 mt-16 text-center">
             <p className="text-stone-500 text-sm mb-4">Gostou desta descoberta?</p>
             <button 
                onClick={fetchGeminiArticle}
                className="bg-slate-900 text-white px-8 py-3 rounded-none hover:bg-red-900 transition-all font-bold tracking-widest uppercase text-sm"
             >
                Gerar Próximo Artigo
             </button>
          </div>
        </main>
      </div>
    );
  }

  /**
   * TELA DA CAPA (HOME)
   */
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-900 font-sans p-4 md:p-8 flex items-center justify-center">
      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 max-w-md w-full shadow-2xl rounded-sm border border-stone-200">
            <h3 className="font-serif font-bold text-xl mb-4 flex items-center gap-2">
              <Settings size={20} /> Configurações da Editora
            </h3>
            <p className="text-sm text-stone-600 mb-4">
              Para gerar artigos infinitos, insira sua Google Gemini API Key. Sem a chave, você verá apenas os artigos do arquivo.
            </p>
            <input 
              type="password" 
              placeholder="Cole sua API Key aqui..."
              defaultValue={apiKey}
              className="w-full border border-stone-300 p-3 mb-4 focus:outline-none focus:border-red-900 font-mono text-sm"
              onChange={(e) => setApiKey(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowSettings(false)} className="px-4 py-2 text-sm hover:bg-stone-100">Cancelar</button>
              <button onClick={() => handleSaveKey(apiKey)} className="px-4 py-2 bg-red-900 text-white text-sm font-bold">Salvar Editor</button>
            </div>
            <p className="mt-4 text-xs text-stone-400">
              A chave é salva apenas no seu navegador (localStorage).
            </p>
          </div>
        </div>
      )}

      {/* Main Magazine Cover Layout */}
      <div className="bg-white w-full max-w-[800px] min-h-[900px] shadow-2xl relative border-4 border-double border-slate-900 p-2 md:p-6 flex flex-col">
        
        {/* Header / Masthead */}
        <header className="border-b-4 border-slate-900 pb-4 mb-6 relative text-center">
           <button 
              onClick={() => setShowSettings(true)}
              className="absolute right-0 top-0 text-stone-400 hover:text-slate-900 transition-colors"
           >
             <Settings size={20} />
           </button>
           
           <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-red-900 mb-2 border-b border-stone-300 pb-1">
              <span>Edição Infinita</span>
              <span>Vol. {new Date().getFullYear()}</span>
              <span>R$ Grátis</span>
           </div>
           
           <h1 className="font-serif text-5xl md:text-7xl font-black tracking-tighter text-slate-900 scale-y-110 mb-2">
             CURIOSIDADE
             <span className="block text-2xl md:text-4xl font-normal tracking-widest mt-1 text-red-900">CIENTÍFICA</span>
           </h1>
        </header>

        {/* Cover Grid */}
        <div className="flex-grow grid grid-cols-12 gap-4">
            {/* Left Sidebar Teasers */}
            <div className="col-span-12 md:col-span-3 flex flex-col gap-8 border-r-0 md:border-r border-stone-200 pr-0 md:pr-4">
                <div className="group cursor-pointer" onClick={() => {setApiKey(''); fetchGeminiArticle();}}>
                    <span className="text-red-900 font-bold text-xs uppercase block mb-1">Destaque do Mês</span>
                    <h3 className="font-serif font-bold text-lg leading-tight group-hover:text-red-900 transition-colors">
                        O Mistério da Matéria Escura
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-3">
                        O que compõe 85% do universo e por que não conseguimos ver?
                    </p>
                </div>
                
                <div className="w-full h-px bg-stone-300"></div>

                <div className="group cursor-pointer">
                    <span className="text-blue-900 font-bold text-xs uppercase block mb-1">Tecnologia</span>
                    <h3 className="font-serif font-bold text-lg leading-tight">
                        IA: Amiga ou Inimiga?
                    </h3>
                </div>

                <div className="group cursor-pointer">
                    <span className="text-green-900 font-bold text-xs uppercase block mb-1">Natureza</span>
                    <h3 className="font-serif font-bold text-lg leading-tight">
                        A Inteligência dos Fungos
                    </h3>
                </div>
            </div>

            {/* Main Feature */}
            <div className="col-span-12 md:col-span-9 flex flex-col relative group">
               <div className="relative flex-grow overflow-hidden border border-stone-900 bg-stone-200">
                  <img 
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600" 
                    alt="Science Main"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Main Call to Action Area */}
                  <div className="absolute bottom-0 w-full p-6 text-white text-center">
                     <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md">
                        DESCUBRA O DESCONHECIDO
                     </h2>
                     <p className="text-stone-300 mb-6 font-medium max-w-md mx-auto">
                        Gere uma nova edição da revista agora mesmo. Um tópico aleatório, escrito por IA, curado para você.
                     </p>
                     
                     <button 
                        onClick={fetchGeminiArticle}
                        className="bg-red-800 hover:bg-red-700 text-white border-2 border-white/30 px-8 py-4 text-lg font-bold tracking-widest uppercase transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-3 mx-auto"
                     >
                        <Sparkles size={20} />
                        Gerar Nova Descoberta
                     </button>
                  </div>
               </div>

               {/* Bottom Strip */}
               <div className="mt-4 flex gap-4 overflow-hidden py-2 border-t-2 border-slate-900">
                  <div className="flex-1 border-r border-stone-300 pr-4">
                     <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500 mb-1">
                        <Microscope size={14} /> Biologia
                     </div>
                     <p className="font-serif font-bold text-sm">A Revolução CRISPR Explicada</p>
                  </div>
                  <div className="flex-1 border-r border-stone-300 pr-4">
                     <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500 mb-1">
                        <Rocket size={14} /> Espaço
                     </div>
                     <p className="font-serif font-bold text-sm">Turismo em Marte: 2050?</p>
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500 mb-1">
                        <Dna size={14} /> História
                     </div>
                     <p className="font-serif font-bold text-sm">Os Cadernos de Darwin</p>
                  </div>
               </div>
            </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 border-t border-stone-300 pt-2 flex justify-between items-end text-[10px] text-stone-500 font-mono uppercase">
           <div>
              <p>ISSN 2024-AI-GEN</p>
              <p>Powered by Google Gemini</p>
           </div>
           <div className="flex gap-4">
              <div className="w-8 h-8 bg-black"></div>
              <div className="h-8 w-24 bg-black bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,white_2px,white_4px)]"></div>
           </div>
        </footer>
      </div>
    </div>
  );
}
