import React, { useState, useEffect } from 'react';
import { BookOpen, Atom, ArrowLeft, RefreshCw, Settings, Sparkles, Brain, Dna, Rocket, Microscope, Info, AlertTriangle, Globe, Cpu, Leaf, FlaskConical, History, ChevronRight, Palette, Key, ExternalLink, CheckCircle, XCircle, Loader2, Zap, Car, Gauge, Image as ImageIcon } from 'lucide-react';

/**
 * 📚 BIBLIOTECA DE CONTEÚDO ESTÁTICO (EXPANDIDA E ILUSTRADA)
 */
const STATIC_CONTENT_LIBRARY = {
  // --- CAPA AUTO (Veículos) ---
  "Revolução Elétrica": {
    title: "O Fim da Combustão: A Ascensão Silenciosa",
    author: "Carlos Pista",
    category: "Tecnologia Automotiva",
    fact: "Motores elétricos possuem apenas uma peça móvel principal (o rotor), contra centenas em um motor a combustão.",
    imageKeyword: "electric car chassis",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600", caption: "Plataforma de baterias skate: o novo padrão da indústria." },
        { url: "https://images.unsplash.com/photo-1620882352829-216972626243?auto=format&fit=crop&q=80&w=1600", caption: "Estações de carregamento ultrarrápido estão substituindo postos de gasolina." }
    ],
    content: `Estamos testemunhando a maior transformação industrial dos últimos 100 anos. O motor de combustão interna, uma maravilha da engenharia mecânica que dominou o século XX com seus pistões, válvulas e explosões controladas, está sendo aposentado. Em seu lugar, entra a elegância silenciosa e brutalmente eficiente do motor elétrico.

    A diferença de eficiência é avassaladora. Um motor a gasolina desperdiça cerca de 70% da energia do combustível apenas gerando calor e ruído. Um motor elétrico converte mais de 90% da energia da bateria diretamente em movimento. Isso não é apenas uma evolução; é uma mudança de paradigma que redefiniu o conceito de performance. O torque instantâneo, disponível a zero rpm, transformou sedãs familiares em máquinas capazes de humilhar supercarros italianos no 0 a 100 km/h.

    No entanto, a revolução não é isenta de desafios. O "calcanhar de Aquiles" continua sendo o armazenamento de energia. As baterias de íon-lítio atuais são pesadas, caras e dependem de mineração complexa. A corrida agora é pelas Baterias de Estado Sólido (Solid State), que prometem dobrar a autonomia e reduzir o tempo de recarga para minutos, eliminando o eletrólito líquido inflamável. Quando essa tecnologia atingir escala industrial, prevista para o final desta década, o argumento final a favor da combustão terá evaporado.`
  },
  "O Retorno do Prelude": { 
    title: "Honda Prelude: O Ícone Renasce Híbrido", 
    author: "Jornal do Carro", 
    category: "Lançamentos", 
    fact: "O novo Prelude prioriza a 'alegria de dirigir' acima da potência bruta, mantendo a filosofia original dos anos 80.", 
    imageUrl: "https://images.unsplash.com/photo-1621262973736-6b22c7eb4634?auto=format&fit=crop&q=80&w=1600", // Imagem genérica de cupê esportivo
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600", caption: "Design aerodinâmico focado em eficiência e estilo." },
        { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1600", caption: "O interior minimalista foca na experiência do motorista." }
    ],
    content: `A Honda chocou o mundo automotivo ao ressuscitar uma de suas placas mais queridas: o Prelude. Descontinuado no início dos anos 2000, o cupê esportivo era sinônimo de inovação tecnológica (foi o pioneiro no esterçamento das quatro rodas). O novo Prelude Concept, no entanto, não é um elétrico puro, mas um híbrido sofisticado.

    Essa decisão estratégica da Honda reflete uma leitura madura do mercado. Enquanto todos correm para EVs puros, a marca japonesa aposta que ainda existe espaço para a conexão mecânica e a emoção de dirigir, auxiliada, mas não substituída, pela eletricidade. O design é uma carta de amor aos cupês clássicos: baixo, largo e com proporções perfeitas, fugindo da tendência monótona dos SUVs que dominam as ruas.

    Sob o capô, espera-se uma evolução do sistema e:HEV, onde o motor elétrico traciona as rodas na maior parte do tempo, enquanto o motor a combustão atua como gerador ou acopla em altas velocidades. O Prelude não veio para quebrar recordes de velocidade, mas para provar que, em um futuro silencioso e autônomo, ainda haverá espaço para a paixão humana ao volante.` 
  },
  "Pequeno Gigante: GR Yaris": { 
    title: "Toyota GR Yaris: A Fúria do Rally nas Ruas", 
    author: "Gazoo Racing Team", 
    category: "Performance", 
    fact: "O teto é feito de fibra de carbono forjada para baixar o centro de gravidade, uma técnica vinda direto dos supercarros.", 
    imageUrl: "https://images.unsplash.com/photo-1629897850409-a764722da2b7?auto=format&fit=crop&q=80&w=1600", // Toyota de rally genérico
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1600", caption: "Motor 1.6 turbo de 3 cilindros: uma obra-prima da engenharia." },
        { url: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1600", caption: "Interior focado em competição: tudo está ao alcance das mãos." }
    ],
    content: `Em uma era de carros cada vez maiores, pesados e anestesiados, o Toyota GR Yaris é um milagre da engenharia "old school". Ele não foi criado pelo departamento de marketing, mas exigido pelas regras do Campeonato Mundial de Rally (WRC). Para competir, a Toyota precisava vender 25.000 unidades de rua. O resultado é um monstro de bolso.

    Seu motor de 1.6 litros e três cilindros desafia a lógica, entregando mais de 260 cavalos de potência. É o motor de três cilindros mais potente já colocado em um carro de produção. Mas a mágica reside no sistema de tração GR-FOUR. Diferente dos sistemas AWD comuns que reagem à perda de aderência, este permite ao motorista escolher a distribuição de torque: 60:40 para o dia a dia, 30:70 para diversão traseira ou 50:50 para máxima aderência em pista.

    O chassi é único, uma fusão da plataforma do Yaris comum na frente com a do Corolla atrás, permitindo uma suspensão traseira independente sofisticada. O GR Yaris já se tornou um clássico instantâneo, valorizando-se no mercado de usados. Ele é a prova viva de que, quando engenheiros apaixonados recebem carta branca (e orçamento ilimitado), a magia acontece.` 
  },
  "Mentes de Silício": { 
    title: "O Dilema Moral do Carro Autônomo", 
    author: "Dra. Sarah Conner", 
    category: "Inteligência Artificial", 
    fact: "Carros autônomos geram cerca de 4 terabytes de dados por dia apenas 'olhando' o mundo ao redor.", 
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1600", caption: "Visão LIDAR: como a máquina enxerga o mundo em 3D." },
        { url: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=1600", caption: "O motorista virou passageiro: o futuro do transporte." }
    ],
    content: `A tecnologia para veículos autônomos de Nível 4 e 5 (onde o volante é opcional) está amadurecendo rapidamente, impulsionada por redes neurais profundas e sensores LIDAR. Mas o maior obstáculo não é tecnológico, é ético. Estamos prestes a entregar decisões de vida ou morte a algoritmos.

    O clássico "Problema do Bonde" da filosofia saiu dos livros para as ruas. Se um acidente é inevitável, o carro deve desviar e atingir um pedestre para salvar o passageiro, ou sacrificar o passageiro para salvar um grupo de crianças na calçada? Programar essa moralidade em código binário é um campo minado jurídico e social. Quem é o responsável: a montadora, o desenvolvedor do software ou o dono do carro?

    Além da ética, há a questão da convivência. Em testes, carros autônomos são "intimidados" por motoristas humanos agressivos porque são programados para serem cautelosos demais. O futuro misto, onde robôs perfeitos dividem espaço com humanos imprevisíveis, será o período mais perigoso da transição. A verdadeira autonomia só brilhará quando tirarmos o elemento humano da equação completamente.` 
  },

  // --- CAPA CLASSIC (Scientific American) ---
  "O Cérebro Quântico": {
    title: "Consciência: Um Fenômeno Quântico?",
    author: "Dr. Roger Penrose",
    category: "Neurociência",
    fact: "A teoria Orch-OR sugere que a consciência não é computação, mas um processo físico fundamental do universo.",
    imageKeyword: "quantum brain neural network",
    imageUrl: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600", caption: "Microtúbulos: a estrutura celular onde a magia quântica pode ocorrer." },
        { url: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1600", caption: "A complexidade neural vai muito além das simples sinapses elétricas." }
    ],
    content: `A consciência humana permanece o "problema difícil" da ciência. A visão neurocientífica predominante trata o cérebro como um computador biológico úmido, onde neurônios são transistores e sinapses são os fios. Se isso fosse verdade, bastaria mapear todas as conexões para replicar uma mente humana em silício. Mas e se estivermos olhando para o lugar errado?

    Uma teoria ousada, proposta pelo físico ganhador do Nobel Roger Penrose e pelo anestesista Stuart Hameroff, sugere que a consciência deriva de vibrações quânticas dentro de estruturas minúsculas chamadas microtúbulos, que formam o esqueleto das células cerebrais. Segundo a teoria da "Redução Objetiva Orquestrada" (Orch-OR), o cérebro não computa algoritmicamente; ele acessa informações fundamentais na própria geometria do espaço-tempo.

    Por décadas, a ideia foi ridicularizada. Físicos argumentavam que o cérebro é "quente, úmido e barulhento" demais para sustentar os delicados estados quânticos (superposição) que vemos em computadores quânticos congelados. No entanto, experimentos recentes demonstraram efeitos quânticos na fotossíntese de plantas e na navegação magnética de pássaros. Se uma alga pode usar mecânica quântica, por que não o cérebro humano? Se comprovada, essa teoria mudaria nossa compreensão não apenas da mente, mas da própria realidade.`
  },
  "O Fim do Tempo": {
    title: "A Ilusão da Passagem do Tempo",
    author: "Julian Barbour",
    category: "Física Teórica",
    fact: "Para um fóton viajando na velocidade da luz, o tempo não passa; a emissão e absorção acontecem no mesmo instante.",
    imageKeyword: "surreal clock melting",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600", caption: "Universo Bloco: onde passado, presente e futuro coexistem." },
        { url: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?auto=format&fit=crop&q=80&w=1600", caption: "Entropia: a única lei física que distingue o ontem do amanhã." }
    ],
    content: `Sentimos o tempo fluir. Lembramos do passado e antecipamos o futuro. Mas nas equações fundamentais da física, de Newton a Schrödinger, o tempo é reversível. Não há nada nas leis da natureza que impeça um copo quebrado de se remontar, exceto a probabilidade.

    A teoria do "Universo Bloco" sugere que vivemos em um hipercubo de espaço-tempo onde todos os eventos — o Big Bang, seu nascimento e a morte do sol — existem simultaneamente. A nossa percepção de "agora" é apenas um holofote iluminando uma fatia desse bloco estático. O tempo não passa; nós é que nos movemos através dele, ou nossa consciência cria essa ilusão para lidar com a causalidade.

    O físico Julian Barbour propõe que o universo é uma coleção de "agoras", configurações estáticas de matéria. O que chamamos de tempo é apenas a nossa mente costurando esses snapshots estáticos em uma narrativa, como um filme feito de fotos paradas. Se a expansão do universo parar e a entropia atingir o máximo, o tempo, como conceito físico, deixará de existir. Restará apenas um vasto e silencioso "agora".`
  },

  // --- CAPA NATURE (NatGeo) ---
  "O Último Santuário": {
    title: "Amazônia Azul: O Deserto Profundo",
    author: "Sylvia Earle",
    category: "Oceanografia",
    fact: "Existem lagos e rios submarinos no fundo do oceano que possuem suas próprias ondas e margens.",
    imageKeyword: "deep ocean bioluminescence",
    imageUrl: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&q=80&w=1600", caption: "Fontes hidrotermais: a vida prosperando sem luz solar." },
        { url: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=1600", caption: "Criaturas abissais evoluíram formas monstruosas para sobreviver à pressão." }
    ],
    content: `A maior parte do nosso planeta é escura, fria e esmagadora. As profundezas abissais dos oceanos, abaixo de 3.000 metros, são o maior habitat da Terra, e ainda assim, conhecemos melhor a topografia de Marte do que o nosso próprio assoalho oceânico. É um mundo alienígena aqui mesmo na Terra.

    Longe de ser um deserto vazio, o fundo do mar fervilha de vida adaptada a condições extremas. Expedições recentes revelaram ecossistemas inteiros baseados não na luz solar (fotossíntese), mas na energia química (quimiossíntese) que jorra do interior da crosta terrestre em fontes hidrotermais. Vermes tubulares gigantes, caranguejos yeti e bactérias extremófilas formam oásis de vida no escuro absoluto.

    Este santuário intocado enfrenta agora sua maior ameaça: a mineração em águas profundas. O fundo do mar é rico em nódulos polimetálicos contendo níquel, cobalto e terras raras essenciais para as baterias dos nossos carros elétricos. Estamos diante de um dilema ecológico cruel: destruir o ecossistema menos compreendido da Terra para salvar a atmosfera do aquecimento global? A "corrida do ouro" submarina já começou, e as consequências são imprevisíveis.`
  },

  // --- CAPA TECH (Wired) ---
  "A Singularidade": {
    title: "Além do Horizonte de Eventos Digital",
    author: "Ray Kurzweil",
    category: "Futurismo",
    fact: "Se a história do universo fosse comprimida em um ano, toda a história humana ocuparia os últimos 14 segundos.",
    imageKeyword: "artificial intelligence cyborg",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1600", caption: "Redes neurais já imitam a arte e a criatividade humana." },
        { url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1600", caption: "A fusão biológico-digital pode ser o próximo passo da evolução." }
    ],
    content: `A Singularidade Tecnológica é o momento teórico em que o progresso tecnológico se tornará tão rápido que a inteligência humana não conseguirá mais acompanhá-lo. É o ponto em que criaremos uma Inteligência Artificial Geral (AGI) mais inteligente que nós mesmos. A partir daí, essa IA criará IAs ainda melhores, gerando uma explosão de inteligência.

    Ray Kurzweil, diretor de engenharia do Google, prevê esse momento para 2045. Parece ficção científica, mas olhe ao redor. LLMs como o Gemini já demonstram raciocínio, criatividade e capacidade de codificação. A curva de aprendizado das máquinas é exponencial, enquanto a evolução biológica humana é estática.

    O que acontece depois da Singularidade? Ninguém sabe – por isso o nome, emprestado dos buracos negros, onde as leis conhecidas falham. Podemos viver em uma era de abundância inimaginável, curando todas as doenças e vencendo a morte. Ou podemos nos tornar obsoletos, animais de estimação de deuses de silício. A única certeza é que a geração atual será a última a viver em um mundo onde o ser humano é a entidade mais inteligente do planeta.`
  },

  // --- FALLBACKS GERAIS ---
  "Matéria Escura": { 
    title: "O Universo Invisível", 
    author: "Vera Rubin", 
    category: "Cosmologia", 
    fact: "A matéria escura não reflete, emite ou absorve luz. Sabemos que ela existe apenas porque ela tem peso (gravidade).", 
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600", caption: "Galáxias giram rápido demais: a prova da massa oculta." },
        { url: "https://images.unsplash.com/photo-1534996858221-380b92700493?auto=format&fit=crop&q=80&w=1600", caption: "A teia cósmica que conecta aglomerados de galáxias." }
    ],
    content: `Tudo o que você já viu — estrelas, planetas, galáxias, você e eu — compõe apenas 5% do universo. Os outros 95% são um mistério total, divididos entre Energia Escura (que expande o espaço) e Matéria Escura (que segura as galáxias).

    Na década de 1970, a astrônoma Vera Rubin percebeu que as estrelas na borda das galáxias giravam tão rápido que deveriam ser arremessadas para o espaço. A única explicação era a existência de uma massa invisível colossal gerando gravidade extra. Era a matéria escura.

    Ela funciona como o esqueleto invisível do cosmos. Sem ela, o universo seria uma sopa monótona de gás; as galáxias nunca teriam se formado. Cientistas estão caçando essa substância fantasma em detectores subterrâneos profundos, esperando o momento raro em que uma partícula de matéria escura colida com um átomo comum. Até lá, vivemos na ignorância sobre a maior parte da nossa realidade.` 
  },
  
  // (Mantive os fallbacks curtos anteriores para garantir que nada quebre, 
  // mas adicionei a estrutura additionalImages vazia para evitar erros)
};

// ... Resto do Código (Componente React) permanece igual, mas precisamos atualizar a renderização do artigo.

// ATUALIZAÇÃO NO COMPONENTE ScientificCuriosityMagazine:
// Substitua a função de renderização do artigo (view === 'article') por esta versão melhorada:

// ...
export default function ScientificCuriosityMagazine() {
  // ... (Estados e hooks iguais)
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
    const randomCover = MAGAZINE_COVERS[Math.floor(Math.random() * MAGAZINE_COVERS.length)];
    setCoverTheme(randomCover);
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
    // Busca parcial para ser mais flexível
    const articleKey = Object.keys(STATIC_CONTENT_LIBRARY).find(key => 
        title.includes(key) || key.includes(title)
    );
    
    const article = STATIC_CONTENT_LIBRARY[articleKey];
    
    if (article) {
        setCurrentArticle({
            ...article,
            imageUrl: article.imageUrl || `https://image.pollinations.ai/prompt/${article.title}%20${article.category}%20realistic%20high%20quality?width=1600&height=900&nologo=true`,
            isGenerated: false // Marca como estático
        });
        setView('article');
    } else {
        // Se não achar, tenta gerar via IA se tiver chave, senão usa fallback genérico
        if(apiKey) {
            fetchGeminiArticle();
        } else {
            // Fallback silencioso para um artigo aleatório da biblioteca se clicarem em algo sem conteúdo
            const randomArt = Object.values(STATIC_CONTENT_LIBRARY)[0];
            setCurrentArticle({
                ...randomArt,
                isGenerated: false
            });
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
        // Fallback para conteúdo estático rico
        const fallback = Object.values(STATIC_CONTENT_LIBRARY)[Math.floor(Math.random() * 5)]; // Pega um dos primeiros 5
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
      const fallback = Object.values(STATIC_CONTENT_LIBRARY)[0];
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
            
            {/* Texto Principal */}
            <div className="prose prose-base md:prose-lg prose-stone prose-headings:font-serif first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-red-900 mb-12">
                {currentArticle.content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx} className="mb-6 leading-relaxed text-stone-800">{paragraph}</p>
                ))}
            </div>

            {/* Galeria de Imagens Adicionais (Se houver) */}
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
            
            {/* Fato Rápido */}
            <div className="my-8 md:my-12 bg-stone-200 p-6 md:p-8 border-l-4 border-red-900 rounded-r-lg relative overflow-hidden">
               <div className="absolute -right-4 -top-4 opacity-5 rotate-12"><Brain size={128} /></div>
               <h3 className="font-serif font-bold text-lg md:text-xl mb-2 text-red-900 flex items-center gap-2"><Sparkles size={18} /> Fato Rápido</h3>
               <p className="font-medium text-base md:text-lg italic text-slate-800 relative z-10">"{currentArticle.fact}"</p>
            </div>
        </main>
      </div>
    );
  }

  // ... (O restante da renderização da CAPA permanece idêntico)
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
               {/* Destaque Principal */}
               <div className={`relative flex-grow min-h-[400px] md:min-h-auto overflow-hidden border ${coverTheme.style.borderColor} bg-stone-200 cursor-pointer`} onClick={() => handleOpenStaticArticle(coverTheme.content.highlight.title)}>
                  <img 
                    src={coverTheme.content.highlight.image}
                    alt="Main Feature"
                    className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${coverTheme.style.featureFilter}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 w-full p-6 text-white text-center">
                     <h2 className={`${coverTheme.style.fontMain} text-2xl md:text-5xl font-bold leading-tight mb-2 md:mb-4 drop-shadow-md`}>
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
