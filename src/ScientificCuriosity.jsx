import React, { useState, useEffect } from 'react';
import { BookOpen, Atom, ArrowLeft, RefreshCw, Settings, Sparkles, Brain, Dna, Rocket, Microscope, Info, AlertTriangle, Globe, Cpu, Leaf, FlaskConical, History, ChevronRight, Palette, Key, ExternalLink, CheckCircle, XCircle, Loader2, Zap, Car, Gauge, Image as ImageIcon } from 'lucide-react';

/**
 * 📚 BIBLIOTECA DE CONTEÚDO ESTÁTICO (COMPLETA)
 * Contém os artigos para TODAS as manchetes de TODAS as capas.
 */
const STATIC_CONTENT_LIBRARY = {
  // --- CAPA AUTO (Veículos) ---
  "Revolução Elétrica": {
    title: "Eletromagnetismo Aplicado: O Fim da Combustão",
    author: "Eng. Carlos Pista",
    category: "Física Automotiva",
    fact: "Motores elétricos superam 90% de eficiência térmica, enquanto motores a combustão desperdiçam cerca de 70% da energia química em calor.",
    imageKeyword: "electric car motor cutaway",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600", caption: "Plataforma skate: baterias no assoalho baixam o centro de gravidade." },
        { url: "https://images.unsplash.com/photo-1620882352829-216972626243?auto=format&fit=crop&q=80&w=1600", caption: "Inversores de frequência convertem DC da bateria em AC para o motor." }
    ],
    content: `A transição para veículos elétricos é uma mudança de princípios físicos. O motor de combustão interna opera sob o Ciclo de Otto, dependendo de explosões controladas. É um processo ineficiente, limitado pelo Princípio de Carnot, onde a maior parte da energia vira calor.

    Em contraste, o motor elétrico opera baseado na Força de Lorentz. Quando corrente elétrica passa por uma bobina num campo magnético, força física é gerada instantaneamente. Não há conversão complexa de movimento linear para rotacional; a energia elétrica vira rotação pura. Isso explica o "torque instantâneo".

    O desafio científico atual é a Eletroquímica. Células de íon-lítio usam eletrólito líquido inflamável. A próxima fronteira, Baterias de Estado Sólido, substitui o líquido por cerâmica sólida, aumentando a segurança e densidade energética, prometendo dobrar a autonomia dos veículos.`
  },
  "O Retorno do Prelude": { title: "Honda Prelude: Hibridização", author: "Jornal do Carro", category: "Engenharia", fact: "Sistemas híbridos usam frenagem regenerativa para converter energia cinética em elétrica.", imageUrl: "https://images.unsplash.com/photo-1621262973736-6b22c7eb4634?auto=format&fit=crop&q=80&w=1600", content: "O novo Prelude não é apenas nostalgia; é gestão eficiente de energia. Diferente de carros comuns que desperdiçam energia ao frear (aquecendo os discos), o sistema híbrido transforma o motor elétrico em gerador nas desacelerações, recarregando a bateria. O design aerodinâmico reduz o arrasto (Cd), essencial para a eficiência em rodovias." },
  "Pequeno Gigante: GR Yaris": { title: "Toyota GR Yaris: Termodinâmica", author: "Gazoo Racing", category: "Física", fact: "O motor de 3 cilindros mais potente do mundo usa pressões de turbo extremas.", imageUrl: "https://images.unsplash.com/photo-1629897850409-a764722da2b7?auto=format&fit=crop&q=80&w=1600", content: "Para extrair 260cv de um motor 1.6L, a Toyota aplicou a Lei dos Gases Ideais no limite. O turbo comprime o ar para aumentar a densidade de oxigênio na câmara. O uso de teto de fibra de carbono reduz o momento de inércia polar, permitindo curvas mais rápidas." },
  "Mentes de Silício": { title: "Visão Computacional: LIDAR", author: "Dra. Sarah Conner", category: "AI", fact: "O LIDAR mede a distância disparando lasers e calculando o tempo de retorno da luz.", imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600", content: "Carros autônomos veem o mundo através de nuvens de pontos 3D geradas por lasers. Redes Neurais Convolucionais (CNNs) processam esses dados para identificar 'pedestre' ou 'carro'. O desafio é a predição probabilística: adivinhar o que o humano fará a seguir." },
  "Baterias Sólidas": { title: "Eletroquímica de Estado Sólido", author: "Lab Tech", category: "Química", fact: "Eletrólitos sólidos previnem dendritos que causam curtos em baterias comuns.", content: "Substituir o líquido da bateria por cerâmica permite usar anodos de lítio puro, dobrando a energia armazenada e eliminando risco de incêndio." },
  "Hidrogênio": { title: "Célula de Combustível", author: "Energia H2", category: "Físico-Química", fact: "O único escape de um carro a hidrogênio é vapor de água pura.", content: "Eles não queimam hidrogênio. Eles fazem uma 'queima fria' eletroquímica onde o H2 perde elétrons para gerar corrente, se unindo ao oxigênio para formar água." },
  "Carros Voadores": { title: "eVTOLs: Física do Voo", author: "AeroDynamics", category: "Engenharia", fact: "A propulsão elétrica distribuída permite redundância: se um motor falha, outros compensam.", content: "eVTOLs dependem de alta densidade de potência para decolar verticalmente. Motores elétricos pequenos permitem ajustes finos de atitude sem a complexidade mecânica de helicópteros." },

  // --- CAPA CLASSIC (Scientific American) ---
  "O Cérebro Quântico": {
    title: "Consciência: Colapso da Função de Onda?",
    author: "Dr. Roger Penrose",
    category: "Física Quântica",
    fact: "Microtúbulos no cérebro podem manter coerência quântica, protegendo o sistema do 'ruído' térmico.",
    imageKeyword: "quantum brain neural network",
    imageUrl: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=1600",
    content: `A teoria "Orch-OR" propõe que a computação quântica ocorre dentro dos microtúbulos celulares. Penrose sugere que o "colapso" da função de onda dentro do cérebro gera momentos de consciência. Novas descobertas em biologia quântica (como na fotossíntese) tornam essa teoria biologicamente plausível, desafiando a visão de que o cérebro é apenas um computador clássico.`
  },
  "O Fim do Tempo": { title: "Entropia e a Seta do Tempo", author: "Julian Barbour", category: "Termodinâmica", fact: "A Segunda Lei da Termodinâmica cria a distinção entre passado e futuro.", imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=1600", content: "Na física microscópica, o tempo é reversível. A sensação de tempo fluindo vem do aumento da Entropia (desordem). Se o universo atingir o equilíbrio térmico máximo, onde nada muda, o tempo deixará de existir fisicamente." },
  "Cura pelo Som": { title: "Ultrassom Focado (HIFU)", author: "Medicina", category: "Biofísica", fact: "O som pode gerar calor intenso em um ponto preciso dentro do corpo.", content: "Ondas sonoras são energia mecânica. Ao focar feixes de ultrassom em um ponto, a energia cozinha tumores sem cortes, uma cirurgia não-invasiva revolucionária." },
  "DNA Digital": { title: "Armazenamento em DNA", author: "Bio-Tech", category: "Genética", fact: "1 grama de DNA pode armazenar 215 petabytes de dados.", content: "O DNA é o disco rígido da natureza. Cientistas já codificaram filmes em bases nitrogenadas (A,C,T,G). É o futuro do arquivamento de dados de longo prazo." },
  "Sonhos Lúcidos": { title: "Consciência no Sono REM", author: "Neurociência", category: "Sono", fact: "O córtex pré-frontal lógico ativa-se durante sonhos lúcidos.", content: "É um estado híbrido entre vigília e sono. Estudos mostram ondas gama (40Hz) típicas de foco mental ocorrendo enquanto o corpo dorme." },
  "Fusão Fria": { title: "Reações Nucleares LENR", author: "Física", category: "Energia", fact: "Efeitos quânticos podem permitir fusão sem calor extremo.", content: "A fusão a frio busca usar catalisadores para fundir átomos em temperatura ambiente, prometendo energia infinita e limpa, embora ainda seja controversa." },
  "Núcleo Parou?": { title: "Oscilação do Núcleo Terrestre", author: "Geofísica", category: "Terra", fact: "O núcleo interno da Terra gira em velocidade diferente da crosta.", content: "Dados sísmicos mostram que a rotação do núcleo interno oscila em ciclos de 70 anos, afetando a duração do dia em milissegundos." },

  // --- CAPA NATURE (NatGeo) ---
  "O Último Santuário": {
    title: "Quimiossíntese: Vida Sem Sol",
    author: "Sylvia Earle",
    category: "Bioquímica",
    fact: "Bactérias transformam minerais tóxicos em energia na escuridão total.",
    imageKeyword: "deep ocean bioluminescence",
    imageUrl: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80&w=1600",
    content: `Nas profundezas oceânicas, a vida não depende do sol. Fontes hidrotermais expelem minerais quentes que bactérias usam para gerar energia via Quimiossíntese. Elas sustentam ecossistemas inteiros de vermes gigantes e caranguejos, provando que a vida pode existir em luas geladas como Europa.`
  },
  "Fungos Assassinos": { title: "Ophiocordyceps", author: "Micologia", category: "Biologia", fact: "O fungo controla os músculos da formiga, não o cérebro.", content: "Este fungo infecta formigas e as obriga a subir em plantas para morrer no local ideal para espalhar esporos. É uma engenharia biológica de controle de hospedeiro aterrorizante." },
  "Cidades de Coral": { title: "Simbiose em Risco", author: "Biologia Marinha", category: "Ecologia", fact: "Corais obtêm cor e energia de algas (zooxantelas) que vivem dentro deles.", content: "O branqueamento ocorre quando a água quente estressa o coral, que expulsa suas algas parceiras. Sem elas, o coral passa fome e morre, colapsando o ecossistema." },
  "O Elo Perdido": { title: "Evolução Humana", author: "Paleoantropologia", category: "História", fact: "O DNA neandertal está presente em humanos modernos não-africanos.", content: "A evolução não foi uma linha reta. Várias espécies humanas conviveram e cruzaram. Somos os últimos sobreviventes de uma família outrora diversa." },
  "Árvores Falam": { title: "Wood Wide Web", author: "Botânica", category: "Ecologia", fact: "Árvores usam fungos para enviar açúcar a vizinhas doentes.", content: "Florestas são superorganismos conectados por micorrizas. Árvores alertam sobre pragas e nutrem suas mudas através dessa internet subterrânea." },
  "Vírus Gigantes": { title: "Mimivírus", author: "Virologia", category: "Microbiologia", fact: "Vírus gigantes podem ser infectados por outros vírus menores (virófagos).", content: "Descobertos no permafrost, são tão complexos que desafiam a fronteira entre vivo e não-vivo, possuindo genes para reparo de DNA." },
  "Gelo Derretendo": { title: "Paleoclimatologia", author: "Climatologia", category: "Terra", fact: "O gelo antártico guarda bolhas de ar de 800 mil anos atrás.", content: "Geleiras são arquivos do clima. Analisando isótopos no gelo, reconstruímos a temperatura antiga e provamos a relação entre CO2 e aquecimento." },

  // --- CAPA TECH (Wired) ---
  "A Singularidade": {
    title: "Lei dos Retornos Acelerados",
    author: "Ray Kurzweil",
    category: "Futurismo",
    fact: "O progresso tecnológico é exponencial. O século XXI terá o equivalente a 20.000 anos de progresso.",
    imageKeyword: "artificial intelligence cyborg",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    content: `A Singularidade é o ponto onde a IA se torna capaz de melhorar seu próprio código, gerando uma explosão de inteligência. Se a mente é computável, em breve poderemos fazer upload de consciência, iniciando uma era pós-biológica.`
  },
  "Guerra de Algoritmos": { title: "Cyberwarfare", author: "SecOps", category: "Tech", fact: "O Stuxnet destruiu centrífugas nucleares físicas usando apenas código.", content: "A guerra moderna é digital. Malwares autônomos podem derrubar redes elétricas e financeiras em milissegundos, agindo mais rápido que humanos podem reagir." },
  "O Fim do Dinheiro": { title: "Blockchain e CBDCs", author: "Economia", category: "Crypto", fact: "Dinheiro programável permite contratos que se auto-executam.", content: "Criptografia permite criar escassez digital. Bancos centrais agora criam moedas digitais oficiais, o que pode significar o fim total do dinheiro físico e anônimo." },
  "Mineração Lunar": { title: "Hélio-3", author: "SpaceX", category: "Espaço", fact: "Hélio-3 lunar pode alimentar reatores de fusão limpa por séculos.", content: "A Lua é rica em isótopos raros na Terra. A nova corrida espacial visa extrair esses recursos para sustentar a economia energética terrestre futura." },
  "Chips Neurais": { title: "Interface Cérebro-Máquina", author: "Neuralink", category: "Neurotech", fact: "Já é possível digitar apenas pensando usando eletrodos implantados.", content: "A meta é aumentar a banda de comunicação entre cérebro e nuvem, permitindo fusão cognitiva com a IA para expandir a inteligência humana." },
  "Elevador Espacial": { title: "Nanotubos de Carbono", author: "Engenharia", category: "Materiais", fact: "Só materiais 100x mais fortes que o aço permitem um cabo até o espaço.", content: "Um cabo ancorado no equador até a órbita geoestacionária reduziria drasticamente o custo de acesso ao espaço, mas exige materiais que ainda não fabricamos em escala." },
  "Baterias Infinitas": { title: "Estado Sólido", author: "Energia", category: "Tech", fact: "Carregar um carro em 5 minutos exige correntes imensas que baterias líquidas não suportam.", content: "Novas químicas de bateria prometem densidade energética revolucionária, essencial para aviação elétrica e eletrônicos que duram semanas." },

  // --- CAPA COSMOS (Astronomy) ---
  "Além do Horizonte": { title: "Telescópio James Webb", author: "NASA", category: "Astronomia", fact: "O JWST vê luz infravermelha emitida há 13,5 bilhões de anos.", imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600", content: "Estamos vendo o universo bebê. A luz de as primeiras galáxias foi esticada pela expansão do universo para o infravermelho, revelando a formação das primeiras estrelas." },
  "Matéria Escura": { title: "A Cola Cósmica", author: "Cosmologia", category: "Física", fact: "Galáxias giram tão rápido que deveriam se despedaçar sem massa extra.", imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1600", content: "85% da matéria é invisível. Não interage com luz, apenas gravidade. Detectores subterrâneos tentam captar partículas de matéria escura (WIMPs) colidindo com átomos." },
  "Terra 2.0": { title: "Exoplanetas Habitáveis", author: "Astrobiologia", category: "Espaço", fact: "TRAPPIST-1 tem 7 planetas rochosos, 3 na zona habitável.", content: "Analisamos a luz que passa pela atmosfera de planetas distantes. Se encontrarmos oxigênio e metano juntos, é um forte sinal de vida biológica ativa." },
  "O Big Bang": { title: "Radiação Cósmica de Fundo", author: "Física", category: "Origens", fact: "1% da estática de TVs antigas é radiação do Big Bang.", content: "O universo era quente e denso. A radiação fóssil de 380.000 anos após o início é a foto mais antiga que temos, confirmando a expansão cósmica." },
  "Motor de Dobra": { title: "Métrica de Alcubierre", author: "Física Teórica", category: "Sci-Fi", fact: "Teoricamente possível se existir matéria com massa negativa.", content: "Em vez de mover a nave, a dobra contrai o espaço à frente e expande atrás. A nave surfa numa onda de espaço-tempo, tecnicamente mais rápida que a luz." },
  "Neutrinos": { title: "Caçadores de Fantasmas", author: "Física de Partículas", category: "Física", fact: "IceCube usa 1km cúbico de gelo antártico para detectar neutrinos.", content: "Neutrinos atravessam a Terra sem bater em nada. Eles trazem informações diretas do núcleo do Sol e de supernovas, impossíveis de obter com luz." },
  "Sinais de Rádio": { title: "Sinal Wow!", author: "SETI", category: "Espaço", fact: "Um sinal de 72 segundos em 1977 nunca se repetiu.", content: "Ouvimos o céu em busca de padrões matemáticos artificiais. Com bilhões de planetas, o silêncio (Paradoxo de Fermi) é o maior mistério estatístico." },

  // --- CAPA VINTAGE (Old Journal) ---
  "A Máquina de Anticítera": { title: "Computador Analógico", author: "Arqueologia", category: "História", fact: "Usava engrenagens diferenciais 1500 anos antes de sua reinvenção.", imageUrl: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80&w=1600", content: "Encontrado num naufrágio grego, este dispositivo de bronze calculava eclipses e posições planetárias com precisão mecânica absurda para 100 a.C." },
  "Tumbas Perdidas": { title: "Radar de Solo", author: "Egiptologia", category: "Arqueologia", fact: "Múons cósmicos revelaram um vazio gigante na Grande Pirâmide.", content: "A tecnologia permite ver o subsolo sem escavar. Buscamos a tumba de Cleópatra e câmaras ocultas no Vale dos Reis que podem conter tesouros intactos." },
  "O Código Voynich": { title: "O Manuscrito Indecifrável", author: "Criptografia", category: "Mistério", fact: "Plantas desenhadas no livro não existem na Terra.", content: "Séculos de tentativas falharam em ler este livro medieval. Pode ser um idioma perdido, um código complexo ou a fraude mais elaborada da história." },
  "Newton Oculto": { title: "Newton Alquimista", author: "História da Ciência", category: "História", fact: "Newton buscava a Pedra Filosofal mais que a gravidade.", content: "O pai da física moderna era secretamente um alquimista obsessivo. Ele acreditava que a ciência antiga escondia segredos divinos da matéria." },
  "Pirâmides": { title: "Engenharia Antiga", author: "Arquitetura", category: "Egito", fact: "As pirâmides eram revestidas de calcário branco polido.", content: "A Grande Pirâmide foi a estrutura mais alta do mundo por 3800 anos. Sua precisão de alinhamento com o norte é melhor que a de muitos edifícios modernos." },
  "Da Vinci": { title: "Engenharia Renascentista", author: "História", category: "Arte", fact: "Da Vinci desenhou rolamentos de esferas essenciais para máquinas modernas.", content: "Seus cadernos mostram paraquedas, tanques e robôs. Ele dissecava corpos para entender a mecânica humana e aplicá-la em máquinas voadoras." },
  "Pólvora": { title: "Química Explosiva", author: "História Militar", category: "China", fact: "Descoberta por acaso buscando o elixir da imortalidade.", content: "A mistura de enxofre, carvão e salitre mudou o mundo. A energia química liberada rapidamente tornou muralhas e armaduras obsoletas, redefinindo a geopolítica." }
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
    // Busca flexível
    const articleKey = Object.keys(STATIC_CONTENT_LIBRARY).find(key => 
        title.includes(key) || key.includes(title)
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
            // Fallback robusto se clicar em algo sem link
            const randomArt = Object.values(STATIC_CONTENT_LIBRARY)[0];
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
        const fallback = Object.values(STATIC_CONTENT_LIBRARY)[0];
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

  // ----------------------------------------------------
  // TEMAS DE CAPA (MAGAZINE COVERS)
  // ----------------------------------------------------
  const MAGAZINE_COVERS = [
    {
      id: 'classic',
      name: 'Scientific American Style',
      style: {
        bgWrapper: 'bg-[#fdfbf7]', 
        mastheadColor: 'text-slate-900',
        mastheadSub: 'text-red-900',
        accentColor: 'text-red-900',
        buttonBg: 'bg-red-800 hover:bg-red-700',
        buttonText: 'text-white',
        borderColor: 'border-slate-900',
        fontMain: 'font-serif',
        featureFilter: 'grayscale group-hover:grayscale-0',
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
      id: 'auto',
      name: 'Turbo Style',
      style: {
        bgWrapper: 'bg-zinc-900', 
        mastheadColor: 'text-white',
        mastheadSub: 'text-red-600',
        accentColor: 'text-red-500',
        buttonBg: 'bg-red-600 hover:bg-red-500',
        buttonText: 'text-white',
        borderColor: 'border-zinc-700',
        fontMain: 'font-sans tracking-tight',
        featureFilter: 'contrast-125 saturate-110', 
        textColor: 'text-zinc-100'
      },
      content: {
        vol: 'Especial: Mobilidade',
        highlight: { title: 'Revolução Elétrica', desc: 'O fim da combustão? Como a tecnologia de baterias de estado sólido vai mudar tudo.', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600' },
        teasers: [
          { cat: 'Lançamento', title: 'O Retorno do Prelude', color: 'text-red-500' },
          { cat: 'Rally', title: 'Pequeno Gigante: GR Yaris', color: 'text-yellow-500' },
          { cat: 'Futuro', title: 'Mentes de Silício', color: 'text-blue-400' }
        ],
        strip: [
          { icon: Zap, cat: 'Tech', title: 'Baterias Sólidas' },
          { icon: FlaskConical, cat: 'Fuel', title: 'Hidrogênio' },
          { icon: Rocket, cat: 'Sky', title: 'Carros Voadores' }
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
        borderColor: 'border-yellow-500',
        fontMain: 'font-serif',
        featureFilter: 'sepia-[.2] contrast-125',
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
        bgWrapper: 'bg-slate-950', 
        mastheadColor: 'text-white',
        mastheadSub: 'text-cyan-400',
        accentColor: 'text-cyan-400',
        buttonBg: 'bg-cyan-600 hover:bg-cyan-500',
        buttonText: 'text-white',
        borderColor: 'border-slate-700',
        fontMain: 'font-sans tracking-tighter',
        featureFilter: 'hue-rotate-15 saturate-150', 
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
        bgWrapper: 'bg-[#0f172a]', 
        mastheadColor: 'text-white',
        mastheadSub: 'text-indigo-400',
        accentColor: 'text-indigo-300',
        buttonBg: 'bg-indigo-600 hover:bg-indigo-500',
        buttonText: 'text-white',
        borderColor: 'border-indigo-900',
        fontMain: 'font-serif',
        featureFilter: 'contrast-125 brightness-110', 
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
        bgWrapper: 'bg-[#f0e6d2]', 
        mastheadColor: 'text-stone-900',
        mastheadSub: 'text-stone-600',
        accentColor: 'text-stone-800',
        buttonBg: 'bg-stone-800 hover:bg-stone-700',
        buttonText: 'text-[#f0e6d2]',
        borderColor: 'border-stone-800 border-double', 
        fontMain: 'font-serif tracking-widest',
        featureFilter: 'sepia contrast-75', 
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

  const cleanJsonString = (str) => {
    const jsonStart = str.indexOf('{');
    const jsonEnd = str.lastIndexOf('}');
    if (jsonStart === -1 || jsonEnd === -1) return str;
    return str.substring(jsonStart, jsonEnd + 1);
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
