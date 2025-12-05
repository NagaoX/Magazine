import React, { useState, useEffect } from 'react';
import { BookOpen, Atom, ArrowLeft, RefreshCw, Settings, Sparkles, Brain, Dna, Rocket, Microscope, Info, AlertTriangle, Globe, Cpu, Leaf, FlaskConical, History, ChevronRight, Palette, Key, ExternalLink, CheckCircle, XCircle, Loader2, Zap, Car, Gauge, Image as ImageIcon } from 'lucide-react';

/**
 * 📚 BIBLIOTECA DE CONTEÚDO ESTÁTICO (EXPANDIDA E CIENTIFICAMENTE APROFUNDADA)
 */
const STATIC_CONTENT_LIBRARY = {
  // --- CAPA AUTO (Veículos com Foco Científico) ---
  "Revolução Elétrica": {
    title: "Eletromagnetismo Aplicado: O Fim da Combustão",
    author: "Eng. Carlos Pista",
    category: "Física Automotiva",
    fact: "Motores elétricos superam 90% de eficiência térmica, enquanto motores a combustão desperdiçam cerca de 70% da energia química em calor (Segunda Lei da Termodinâmica).",
    imageKeyword: "electric car motor cutaway",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600", caption: "O estator e o rotor: interação de campos magnéticos gerando torque." },
        { url: "https://images.unsplash.com/photo-1620882352829-216972626243?auto=format&fit=crop&q=80&w=1600", caption: "Inversores de frequência convertem DC da bateria em AC para o motor." }
    ],
    content: `A transição para veículos elétricos não é apenas uma mudança de combustível, é uma mudança de princípios físicos. O motor de combustão interna opera sob o Ciclo de Otto (ou Diesel), dependendo de explosões controladas para empurrar pistões. É um processo termodinamicamente ineficiente, limitado pelo Princípio de Carnot, onde a maior parte da energia potencial da gasolina é perdida como calor residual e vibração.

    Em contraste, o motor elétrico opera baseado na Força de Lorentz. Quando uma corrente elétrica passa por uma bobina dentro de um campo magnético, uma força física é gerada instantaneamente. Não há conversão de movimento linear (pistão) para rotacional (virabrequim); a energia elétrica vira rotação pura. Isso explica o "torque instantâneo": não é necessário esperar a pressão dos gases de escape girar uma turbina ou o motor atingir certas rotações. O campo magnético age na velocidade da luz (limitado apenas pela indutância das bobinas).

    O desafio científico atual reside na Eletroquímica das baterias. As células de íon-lítio funcionam movendo íons do cátodo para o ânodo através de um eletrólito líquido. O problema é a formação de "dendritos" (estruturas metálicas em forma de agulha) que podem crescer dentro da célula, causando curtos-circuitos. A próxima fronteira, as Baterias de Estado Sólido, substituem o líquido por cerâmica sólida, aumentando a condutividade iônica e a segurança térmica, permitindo densidades energéticas que desafiam os limites atuais da química.`
  },
  "O Retorno do Prelude": { 
    title: "Honda Prelude: Hibridização e Recuperação Cinética", 
    author: "Jornal do Carro", 
    category: "Engenharia Mecânica", 
    fact: "Sistemas híbridos utilizam a frenagem regenerativa para converter energia cinética, que seria dissipada como calor nos discos de freio, em energia potencial química na bateria.", 
    imageUrl: "https://images.unsplash.com/photo-1621262973736-6b22c7eb4634?auto=format&fit=crop&q=80&w=1600", 
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600", caption: "Aerodinâmica ativa: reduzindo o coeficiente de arrasto (Cd)." },
        { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1600", caption: "O motor elétrico atua como gerador nas desacelerações." }
    ],
    content: `O novo Honda Prelude não é apenas um exercício de nostalgia, é uma aplicação prática de gerenciamento eficiente de energia. Diferente de um veículo puramente a combustão, onde a energia cinética acumulada durante a aceleração é desperdiçada como calor nos freios ao parar, o sistema híbrido e:HEV atua como um sistema de recuperação de energia (KERS, similar à Fórmula 1).

    O princípio fundamental aqui é a reversibilidade dos motores elétricos. Quando você tira o pé do acelerador, o motor elétrico inverte sua polaridade, tornando-se um gerador. A inércia do carro gira o eixo do motor, que induz corrente elétrica, carregando a bateria e criando resistência magnética que freia o carro. Isso aumenta a eficiência termodinâmica global do sistema drasticamente.

    Além disso, o Prelude foca na redução do Coeficiente de Arrasto (Cd). A resistência do ar aumenta com o quadrado da velocidade. O design baixo e fluido do cupê não é apenas estético; é físico. Menor área frontal e fluxo de ar laminar significam que menos energia é necessária para "furar" a atmosfera, permitindo que o trem de força híbrido opere em sua faixa de eficiência máxima por mais tempo.` 
  },
  "Pequeno Gigante: GR Yaris": { 
    title: "Toyota GR Yaris: Termodinâmica de Alta Pressão", 
    author: "Gazoo Racing Tech", 
    category: "Física de Fluídos", 
    fact: "Para extrair 260cv de um motor 1.6L, o turbocompressor opera com pressões extremas, forçando mais moléculas de oxigênio na câmara para queimar mais combustível por ciclo.", 
    imageUrl: "https://images.unsplash.com/photo-1629897850409-a764722da2b7?auto=format&fit=crop&q=80&w=1600", 
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1600", caption: "Downsizing: Menor volume, maior pressão interna e eficiência térmica." },
        { url: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1600", caption: "Diferenciais Torsen distribuem torque mecanicamente." }
    ],
    content: `O motor G16E-GTS do GR Yaris é uma aula de eficiência volumétrica. Normalmente, a potência de um motor é limitada pela quantidade de ar que ele consegue aspirar naturalmente (pressão atmosférica de 1 bar). O Yaris usa um turbocompressor para comprimir o ar antes da admissão, aumentando drasticamente a densidade de oxigênio na câmara de combustão.

    Fisicamente, isso é descrito pela Lei dos Gases Ideais (PV=nRT). Ao aumentar a pressão (P), aumentamos a quantidade de mols de oxigênio (n) disponíveis para a reação de combustão exotérmica. No entanto, comprimir ar gera calor (T), o que diminui a densidade. Por isso, o carro usa um intercooler (trocador de calor) para resfriar o ar comprimido antes de entrar no motor, maximizando a densidade.

    Outro destaque é o uso de materiais leves como fibra de carbono forjada no teto. Na dinâmica veicular, isso reduz o Momento de Inércia Polar. Ao baixar o centro de gravidade e concentrar a massa no centro, o carro precisa de menos força lateral para mudar de direção, resultando em uma resposta de curva muito mais rápida e precisa, essencial para o WRC.` 
  },
  "Mentes de Silício": { 
    title: "LIDAR e Redes Neurais: A Visão da Máquina", 
    author: "Dra. Sarah Conner", 
    category: "Óptica e Computação", 
    fact: "O LIDAR funciona medindo o 'Tempo de Voo' (ToF) de fótons laser: ele dispara luz e calcula a distância baseada no tempo exato que a luz demora para bater num objeto e voltar.", 
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1600", caption: "Nuvem de Pontos: A representação vetorial 3D do mundo." },
        { url: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=1600", caption: "Inferência Bayesiana: O carro calcula probabilidades constantes de colisão." }
    ],
    content: `Como um carro "vê"? Diferente de nós, que interpretamos fótons passivamente, um carro autônomo usa sensoriamento ativo. O sensor LIDAR (Light Detection and Ranging) dispara milhões de pulsos de laser infravermelho por segundo. Usando a velocidade da luz como constante (c ≈ 300.000 km/s), o computador calcula a distância exata de cada obstáculo medindo o tempo de retorno do pulso (d = c * t / 2).

    Isso gera uma "nuvem de pontos" 3D de alta precisão. Mas ver não é entender. É aqui que entram as Redes Neurais Convolucionais (CNNs). Inspiradas no córtex visual humano, essas estruturas matemáticas aplicam filtros em camadas para identificar padrões: bordas, formas e, finalmente, objetos complexos como "pedestre" ou "semáforo".

    O grande desafio científico não é a percepção, mas a predição. O carro usa Inferência Bayesiana para calcular probabilidades: "Qual a chance estatística daquele ciclista virar à esquerda?". É um problema de física estocástica em tempo real, onde o computador precisa modelar o comportamento caótico humano dentro de leis de movimento determinísticas.` 
  },
  "Baterias Sólidas": { title: "Eletroquímica de Estado Sólido", author: "Lab Tech", category: "Química", fact: "Eletrólitos sólidos de cerâmica ou polímero previnem a formação de dendritos de lítio, que são os causadores de curtos-circuitos internos e incêndios em baterias líquidas.", content: "A bateria de estado sólido substitui o solvente orgânico líquido inflamável por um condutor iônico sólido. Isso aumenta a janela de estabilidade eletroquímica, permitindo o uso de anodos de lítio metálico puro em vez de grafite, o que pode dobrar a densidade energética (Wh/kg)." },
  "Hidrogênio": { title: "Célula de Combustível: Eletrólise Reversa", author: "Energia H2", category: "Físico-Química", fact: "A reação na célula de combustível (2H2 + O2 → 2H2O) libera elétrons que formam a corrente elétrica, tendo como único subproduto vapor de água.", content: "Carros a hidrogênio (FCEV) não queimam o gás. Eles realizam uma 'queima fria' eletroquímica. O hidrogênio passa pelo ânodo e perde elétrons (oxidação). Esses elétrons são forçados a passar por um circuito externo (motor), enquanto os prótons H+ atravessam uma membrana polimérica (PEM) para se reencontrar com o oxigênio no cátodo, formando água." },
  "Carros Voadores": { title: "eVTOLs e a Física do Voo Distribuído", author: "AeroDynamics", category: "Engenharia Aeroespacial", fact: "O uso de múltiplos rotores elétricos pequenos permite controle de atitude instantâneo variando o torque de cada motor, eliminando a complexidade mecânica dos helicópteros (prato oscilante).", content: "eVTOLs (Electric Vertical Take-off and Landing) dependem de alta densidade de potência. Diferente de aviões que usam asas para sustentação eficiente (L/D ratio), a decolagem vertical exige empuxo bruto maior que o peso (T/W > 1). A propulsão elétrica distribuída (DEP) aumenta a redundância e segurança: se um motor falha, os outros compensam eletronicamente em milissegundos." },

  // --- CAPA CLASSIC (Scientific American) ---
  "O Cérebro Quântico": {
    title: "Consciência: Colapso da Função de Onda?",
    author: "Dr. Roger Penrose",
    category: "Física Quântica",
    fact: "Microtúbulos possuem simetria e ressonância compatíveis com a manutenção de coerência quântica, protegendo o sistema do 'ruído' térmico do cérebro.",
    imageKeyword: "quantum brain neural network",
    imageUrl: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600", caption: "Estrutura dos microtúbulos: reticulados de proteína tubulina." },
        { url: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1600", caption: "A rede neural clássica vs a rede quântica proposta." }
    ],
    content: `A teoria clássica da neurociência trata o cérebro como um sistema determinístico de potenciais de ação eletroquímicos. Porém, o físico Roger Penrose argumenta que a consciência possui características "não-computáveis" que um sistema binário clássico não pode replicar.

    A hipótese "Orch-OR" (Redução Objetiva Orquestrada) propõe que a computação quântica ocorre dentro dos microtúbulos, estruturas do citoesqueleto dos neurônios. Em um computador quântico, a informação existe em superposição (0 e 1 ao mesmo tempo) até que uma medição cause o colapso da função de onda. Penrose sugere que esse "colapso" dentro do cérebro gera os momentos discretos de experiência consciente ("qualia").

    A maior crítica sempre foi a "decoerência": sistemas quânticos geralmente exigem zero absoluto (-273°C) para funcionar, e o cérebro é quente e úmido. No entanto, novas descobertas em biologia quântica (como o tunelamento quântico em enzimas e na fotossíntese) mostram que a vida desenvolveu mecanismos para proteger estados quânticos do ruído térmico, tornando a teoria de Penrose biologicamente plausível.`
  },
  "O Fim do Tempo": {
    title: "Entropia e a Seta do Tempo",
    author: "Julian Barbour",
    category: "Termodinâmica",
    fact: "A Segunda Lei da Termodinâmica é a única lei fundamental da física que não é reversível no tempo, criando a distinção entre passado e futuro.",
    imageKeyword: "surreal clock melting",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600", caption: "O Big Bang: o estado de mínima entropia inicial." },
        { url: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?auto=format&fit=crop&q=80&w=1600", caption: "Morte Térmica: o destino de máxima entropia do universo." }
    ],
    content: `Na escala microscópica, as leis da física são simétricas no tempo. Um filme de dois átomos colidindo faz sentido tanto rodando para frente quanto para trás. Então, por que lembramos do passado e não do futuro? Por que um copo quebrado nunca se remonta espontaneamente?

    A resposta reside na Termodinâmica e no conceito de Entropia (uma medida estatística de desordem). O universo começou em um estado de entropia extremamente baixa (alta ordem) no Big Bang. Desde então, a entropia só aumenta. Essa transição do ordenado para o desordenado é o que percebemos como a "seta do tempo".

    Julian Barbour leva isso além, propondo que o tempo é uma ilusão criada pela nossa mente ao processar "snapshots" estáticos do universo (o "Universo Bloco"). Se o universo atingir o equilíbrio térmico (Morte Térmica), onde a entropia é máxima e nada mais muda, a dimensão do tempo efetivamente deixará de existir, pois não haverá eventos para marcar sua passagem. O tempo é, portanto, uma propriedade emergente da mudança, não uma dimensão fundamental.`
  },

  // --- CAPA NATURE (NatGeo) ---
  "O Último Santuário": {
    title: "Quimiossíntese: Vida Sem Sol",
    author: "Sylvia Earle",
    category: "Bioquímica",
    fact: "Bactérias extremófilas oxidam sulfeto de hidrogênio (H₂S) tóxico para gerar energia (ATP) e fixar carbono, sustentando ecossistemas inteiros na escuridão total.",
    imageKeyword: "deep ocean bioluminescence",
    imageUrl: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&q=80&w=1600", caption: "Fontes hidrotermais: Chaminés negras expelindo minerais a 400°C." },
        { url: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=1600", caption: "Vermes tubulares gigantes que vivem em simbiose com bactérias." }
    ],
    content: `Até 1977, a biologia afirmava que toda a vida na Terra dependia, em última instância, do Sol através da fotossíntese. A descoberta das fontes hidrotermais nas profundezas oceânicas quebrou esse paradigma. Lá embaixo, sob pressões esmagadoras e escuridão total, a vida prospera através da Quimiossíntese.

    Nesses ambientes, a água do mar penetra na crosta, é superaquecida pelo magma e retorna carregada de minerais dissolvidos, como sulfetos metálicos. Bactérias especializadas usam a energia química das ligações desses compostos inorgânicos (principalmente a oxidação do enxofre) para converter CO2 em matéria orgânica.

    Essas bactérias formam a base de uma cadeia alimentar única. Vermes tubulares gigantes (Riftia pachyptila) não têm boca nem estômago; eles possuem um órgão chamado trofossomo recheado dessas bactérias simbióticas, que os alimentam diretamente. Estudar essa bioquímica independente da luz solar é crucial para a astrobiologia, pois sugere que luas geladas como Europa (Júpiter) ou Encélado (Saturno) poderiam abrigar vida em seus oceanos subterrâneos.`
  },

  // --- CAPA TECH (Wired) ---
  "A Singularidade": {
    title: "Lei dos Retornos Acelerados",
    author: "Ray Kurzweil",
    category: "Futurismo Matemático",
    fact: "O progresso tecnológico não é linear, é exponencial. Avançaremos no século XXI o equivalente a 20.000 anos de progresso no ritmo de hoje.",
    imageKeyword: "artificial intelligence cyborg",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1600", caption: "Redes Neurais Profundas: camadas de abstração imitando o córtex." },
        { url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1600", caption: "Transumanismo: a interface biológica será o gargalo final." }
    ],
    content: `A Singularidade Tecnológica baseia-se na observação matemática de que a evolução da tecnologia segue curvas exponenciais, não lineares. A Lei de Moore (dobrar transistores a cada 18 meses) é apenas um exemplo dessa "Lei dos Retornos Acelerados".

    Quando uma tecnologia se torna digitalizada, ela salta para uma curva de crescimento exponencial. Genética, nanotecnologia e robótica estão nesse ponto agora. O conceito de Singularidade surge quando a Inteligência Artificial alcança a capacidade de melhorar seu próprio código-fonte (auto-aperfeiçoamento recursivo). Isso geraria um ciclo de feedback positivo incontrolável: uma "explosão de inteligência".

    Cientificamente, isso levanta a questão da "computabilidade da consciência". Se a mente é apenas o resultado do processamento de informações em uma rede neural biológica, então, teoricamente, ela pode ser replicada em substrato de silício (Upload de Mente). A Singularidade não seria apenas o fim da era humana, mas o início de uma nova era de evolução pós-biológica, onde a inteligência se desvincula das limitações da química orgânica lenta.`
  },

  // --- FALLBACKS GERAIS (Mantidos para garantir links funcionais) ---
  "Matéria Escura": { 
    title: "Massa Oculta: A Gravidade Sem Fonte", 
    author: "Vera Rubin", 
    category: "Astrofísica", 
    fact: "A velocidade orbital das estrelas nas bordas das galáxias viola as Leis de Kepler, a menos que exista 5x mais massa do que vemos.", 
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600", caption: "Lentes gravitacionais: a matéria escura entorta a luz de galáxias distantes." },
        { url: "https://images.unsplash.com/photo-1534996858221-380b92700493?auto=format&fit=crop&q=80&w=1600", caption: "Simulação da estrutura em larga escala do universo." }
    ],
    content: `A Matéria Escura é um "tapa-buraco" teórico necessário para que a gravidade funcione na escala galáctica. Segundo a Relatividade Geral, a gravidade é causada pela massa. No entanto, ao somar toda a massa visível (estrelas, gás, poeira) de uma galáxia, o total não é suficiente para mantê-la unida na velocidade em que gira.

    A física propõe que a Matéria Escura seja composta de WIMPs (Weakly Interacting Massive Particles) - partículas que têm massa, mas não interagem com a força eletromagnética (não emitem nem refletem luz) nem com a força nuclear forte. Elas interagem apenas via gravidade e força nuclear fraca.

    Detectores como o LUX-ZEPLIN usam tanques de xenônio líquido ultra-puro enterrados profundamente no subsolo para tentar captar o flash sutil de um WIMP colidindo com um núcleo de xenônio. Até hoje, nenhum sinal foi confirmado, mantendo a Matéria Escura como o maior mistério não resolvido da física moderna.` 
  },
  
  // (Outros fallbacks rápidos para links menores)
  "Cura pelo Som": { title: "Cura pelo Som", author: "Medicina Vibracional", category: "Biofísica", fact: "Ultrassom focado de alta intensidade (HIFU) induz necrose térmica precisa em tumores.", content: "O som é uma onda mecânica de pressão. Ao focar múltiplos feixes de ultrassom em um único ponto dentro do corpo, a energia acústica é convertida em calor intenso, cozinhando células cancerígenas sem cortes." },
  "DNA Digital": { title: "DNA Digital", author: "Bio-Engenharia", category: "Genética", fact: "O DNA tem uma densidade de dados 1 milhão de vezes maior que um SSD moderno.", content: "Codificar dados binários (0s e 1s) em bases nitrogenadas (A, C, T, G) permite armazenar todo o conhecimento da internet em uma caixa de sapatos. O desafio é a velocidade de leitura/escrita química." },
  "Sonhos Lúcidos": { title: "Metacognição no Sono", author: "Neurociência", category: "Sono", fact: "Durante sonhos lúcidos, o córtex pré-frontal dorsolateral, normalmente inativo no sono REM, reativa-se.", content: "Sonhos lúcidos são um estado híbrido de consciência. Estudos com EEG mostram frequências de ondas gama (40Hz) associadas à consciência desperta ocorrendo durante a fase REM, permitindo volição dentro da alucinação onírica." },
  "Fusão Fria": { title: "Reações Nucleares de Baixa Energia", author: "Física Nuclear", category: "Física", fact: "O tunelamento quântico pode permitir que núcleos se fundam a temperaturas mais baixas do que a física clássica prevê.", content: "A fusão a quente (como no Sol) exige milhões de graus para vencer a repulsão eletrostática dos núcleos. A pesquisa em LENR busca catalisadores (como paládio) que facilitem essa fusão via efeitos quânticos em temperatura ambiente." },
  "Núcleo Parou?": { title: "Sismologia Planetária", author: "Geofísica", category: "Terra", fact: "O núcleo interno gira independentemente do manto, separado pelo núcleo externo líquido.", content: "Ondas sísmicas de terremotos repetidos mostram mudanças no tempo de viagem através do núcleo ao longo de décadas, sugerindo uma oscilação na velocidade de rotação do núcleo interno em ciclos de ~70 anos." },
};

// ... O resto do código (Componente React) permanece idêntico à versão anterior.
// Não é necessário alterar a lógica, pois ela já está preparada para ler `STATIC_CONTENT_LIBRARY`.

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
    // Busca parcial para ser mais flexível
    const articleKey = Object.keys(STATIC_CONTENT_LIBRARY).find(key => 
        title.includes(key) || key.includes(title)
    );
    
    const article = STATIC_CONTENT_LIBRARY[articleKey];
    
    if (article) {
        setCurrentArticle({
            ...article,
            // Fallback inteligente de imagem se não houver na biblioteca
            imageUrl: article.imageUrl || `https://image.pollinations.ai/prompt/${article.imageKeyword || article.title}%20realistic%20high%20quality?width=1600&height=900&nologo=true`,
            isGenerated: false 
        });
        setView('article');
    } else {
        if(apiKey) {
            fetchGeminiArticle();
        } else {
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
