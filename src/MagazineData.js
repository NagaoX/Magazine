import { 
  Brain, Atom, Globe, Leaf, Cpu, Rocket, History, Zap, FlaskConical, 
  Microscope, Sparkles, BookOpen 
} from 'lucide-react';

/**
 * 📚 BIBLIOTECA DE CONTEÚDO ESTÁTICO
 * As chaves (nomes dos objetos) devem ser IDÊNTICAS aos títulos nas capas para o link funcionar.
 */
export const STATIC_CONTENT_LIBRARY = {
  // =================================================================================
  // ARTIGOS DA CAPA "TURBO STYLE" (Carros)
  // =================================================================================
  "Baterias de Estado Sólido: O Fim do Lítio Líquido?": {
    title: "Baterias de Estado Sólido: O Fim do Lítio Líquido?",
    author: "Eng. Marco Turbina",
    category: "Engenharia Automotiva",
    fact: "Elas podem carregar de 0 a 80% em menos de 10 minutos devido à estabilidade térmica superior dos eletrólitos cerâmicos.",
    imageKeyword: "solid state battery diagram car chassis",
    imageUrl: "https://image.pollinations.ai/prompt/electric%20car%20chassis%20with%20glowing%20solid%20state%20battery%20pack%20technical%20cutaway%20realistic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/ceramic%20electrolyte%20molecular%20structure?width=800&height=600&nologo=true", caption: "Estrutura cristalina do eletrólito cerâmico." },
        { url: "https://image.pollinations.ai/prompt/futuristic%20sports%20car%20charging%20station?width=800&height=600&nologo=true", caption: "Estações de ultra-carregamento." }
    ],
    content: `A indústria automotiva está à beira de seu maior salto desde o motor de combustão interna: as baterias de estado sólido (Solid-State Batteries - SSBs). Diferente das baterias de íon-lítio atuais, que usam um eletrólito líquido inflamável para transportar íons entre o cátodo e o ânodo, as SSBs utilizam um eletrólito sólido, feito de cerâmica ou polímeros avançados. A física aqui é transformadora: a densidade energética salta de 250 Wh/kg para mais de 500 Wh/kg.

    O segredo está na supressão dos dendritos. Em baterias líquidas, o carregamento rápido forma "agulhas" de lítio (dendritos) que podem perfurar o separador e causar curtos-circuitos explosivos. O eletrólito sólido atua como uma barreira física impenetrável, permitindo correntes de carregamento muito mais altas sem risco térmico. Toyota e Nissan estão liderando essa corrida, prometendo veículos com autonomia superior a 1.200 km por carga até 2027.

    Além da autonomia, a redução de peso é crucial para a dinâmica veicular. Baterias mais leves significam menor massa não suspensa e menor inércia, permitindo que carros elétricos esportivos tenham o comportamento ágil de um carro a combustão leve, algo que o peso excessivo das baterias atuais sempre impediu.`
  },
  "Aerodinâmica Ativa na F1": {
    title: "Aerodinâmica Ativa na F1",
    author: "Lando S.",
    category: "Engenharia Mecânica",
    fact: "Um carro de F1 gera tanta downforce que poderia, teoricamente, andar de cabeça para baixo no teto de um túnel a 150 km/h.",
    imageKeyword: "formula 1 wind tunnel aerodynamic smoke",
    imageUrl: "https://image.pollinations.ai/prompt/formula%201%20car%20in%20wind%20tunnel%20smoke%20flow%20lines%20aerodynamics%20technical?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/formula%201%20drg%20system%20wing%20open%20technical%20drawing?width=800&height=600&nologo=true", caption: "DRS: reduzindo o arrasto para ultrapassagens." },
        { url: "https://image.pollinations.ai/prompt/venturi%20tunnels%20under%20f1%20car%20floor%20airflow?width=800&height=600&nologo=true", caption: "Efeito Solo: túneis Venturi sugam o carro contra a pista." }
    ],
    content: `Na Fórmula 1 moderna, o motor é importante, mas a aerodinâmica é rainha. O objetivo não é apenas cortar o ar (reduzir arrasto), mas manipulá-lo para criar Downforce. As asas e o assoalho do carro funcionam como asas de avião invertidas: em vez de gerar sustentação para subir, geram força para empurrar os pneus contra o asfalto.

    A física chave é o Princípio de Bernoulli. Túneis Venturi debaixo do carro aceleram o ar que passa por baixo. Ar mais rápido tem menor pressão. A diferença de pressão entre o ar lento em cima e o ar rápido embaixo cria uma sucção poderosa (Efeito Solo).

    O DRS (Drag Reduction System) é um exemplo de aerodinâmica ativa. Em retas, o piloto abre a asa traseira, reduzindo a área frontal e o arrasto, ganhando até 20 km/h extras. Equipes usam supercomputadores de CFD para modelar cada molécula de ar, criando vórtices invisíveis que selam as laterais do carro.`
  },
  "O Motor Scramjet": {
    title: "O Motor Scramjet",
    author: "Aero Space",
    category: "Engenharia Aeroespacial",
    fact: "Scramjets não possuem peças móveis; a compressão do ar ocorre pela própria onda de choque da velocidade do veículo.",
    imageKeyword: "hypersonic plane scramjet shockwave",
    imageUrl: "https://image.pollinations.ai/prompt/hypersonic%20aircraft%20shockwaves%20high%20atmosphere%20edge%20of%20space%20realistic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/cfd%20simulation%20hypersonic%20airflow%20scramjet%20inlet?width=800&height=600&nologo=true", caption: "Simulação de fluxo de ar a 7.000 km/h." },
        { url: "https://image.pollinations.ai/prompt/sr-71%20blackbird%20successor%20concept%20art?width=800&height=600&nologo=true", caption: "O sonho de cruzar o Atlântico em 1 hora." }
    ],
    content: `Motores a jato comuns (turbojatos) usam lâminas de turbina para comprimir o ar. O problema é que, acima de Mach 3, o ar fica tão quente e rápido que derreteria as turbinas. É aqui que entra o Scramjet (Supersonic Combustion Ramjet).

    O Scramjet é mecanicamente simples: é um tubo vazio com geometria precisa. Ele usa a própria velocidade do veículo para "atropelar" o ar, comprimindo-o através de ondas de choque. O desafio é que o ar passa pelo motor em velocidades supersônicas. Injetar e queimar combustível nesse fluxo é como "tentar acender um fósforo num furacão".

    Veículos hipersônicos equipados com scramjets poderiam voar de Nova York a Londres em menos de uma hora ou servir como primeiro estágio para lançamentos espaciais.`
  },
  "Concreto Auto-Regenerativo": {
    title: "Concreto Auto-Regenerativo",
    author: "Eng. Civil",
    category: "Engenharia de Materiais",
    fact: "Bactérias dentro do cimento acordam com a água da chuva e produzem calcário para fechar rachaduras.",
    imageKeyword: "concrete cracking healing bacteria microscopic",
    imageUrl: "https://image.pollinations.ai/prompt/microscopic%20view%20of%20concrete%20healing%20cracks%20with%20bacteria%20calcite%20formation?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/bacillus%20bacteria%20spores%20capsule%20cement?width=800&height=600&nologo=true", caption: "Esporos de Bacillus encapsulados." },
        { url: "https://image.pollinations.ai/prompt/bridge%20crack%20filling%20itself%20white%20substance%20timelapse?width=800&height=600&nologo=true", caption: "Cicatrização: o calcário produzido sela a fissura." }
    ],
    content: `O concreto é o material mais usado no mundo, mas tem um defeito fatal: ele racha. A água entra nas fissuras, enferruja o aço da armadura e a estrutura colapsa. A solução holandesa é o "Bioconcreto".

    Ele contém cápsulas com esporos de bactérias do gênero Bacillus e lactato de cálcio. Esses esporos podem ficar dormentes por 200 anos. Quando uma rachadura aparece e a água entra, ela dissolve a cápsula e acorda as bactérias.

    As bactérias consomem o lactato e excretam calcário (carbonato de cálcio), o mesmo material das conchas. Esse calcário preenche a rachadura, selando o concreto e protegendo o aço. É um material vivo que se conserta sozinho.`
  },

  // =================================================================================
  // ARTIGOS DA CAPA "CLASSIC" (Scientific American)
  // =================================================================================
  "O Olho de Deus: Vigilância Preditiva e ABIS": {
    title: "O Olho de Deus: Vigilância Preditiva e ABIS",
    author: "Dra. Helena Vance",
    category: "Tecnologia & Segurança",
    fact: "O sistema Córtex, no Brasil, integra milhares de câmeras e lê placas em milissegundos.",
    imageKeyword: "futuristic surveillance control room screens data",
    imageUrl: "https://image.pollinations.ai/prompt/futuristic%20surveillance%20control%20room%20screens%20data%20biometrics%20blue%20hue%20realistic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/facial%20recognition%20grid%20analysis%20software?width=800&height=600&nologo=true", caption: "Mapeamento nodal facial em tempo real." },
        { url: "https://image.pollinations.ai/prompt/police%20drone%20night%20vision%20city?width=800&height=600&nologo=true", caption: "Drones autônomos com visão térmica." }
    ],
    content: `A segurança pública entrou na era do "Policiamento Preditivo". Não se trata mais apenas de reagir ao crime, mas de antecipá-lo usando Big Data e IA. No Brasil, o destaque é o Projeto Córtex, uma plataforma de vigilância integrada que cruza dados de leitura de placas (LPR) com bancos de dados criminais em tempo real. O sistema utiliza algoritmos de reconhecimento de padrões para identificar comportamentos anômalos antes que o crime ocorra.

    Globalmente, a tecnologia ABIS (Automated Biometric Identification System) evoluiu muito além das impressões digitais. Agências agora utilizam a análise de marcha (gait analysis). Como cada pessoa possui uma biomecânica única ao caminhar, câmeras de alta resolução podem identificar suspeitos mesmo com o rosto coberto, analisando vetores de movimento.

    No entanto, a "vigilância de dados" levanta questões sobre privacidade. Softwares modernos de inteligência exploram vulnerabilidades em smartphones para transformar microfones em escutas. A engenharia reversa revela um nível de sofisticação onde o código se autodestrói se detectar análise.`
  },
  "Psicobióticos: O Cérebro no Intestino": {
    title: "Psicobióticos: O Cérebro no Intestino",
    author: "Carlos M. Nutricionista",
    category: "Biologia & Saúde",
    fact: "90% da serotonina do seu corpo é produzida no intestino, não no cérebro.",
    imageKeyword: "gut microbiome bacteria abstract glowing",
    imageUrl: "https://image.pollinations.ai/prompt/microscopic%20gut%20bacteria%20interacting%20with%20nerve%20cells%20glowing%20blue%20and%20orange%20realistic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/vagus%20nerve%20connection%20human%20body%20illustration?width=800&height=600&nologo=true", caption: "O Nervo Vago: a autoestrada de dados corpo-cérebro." },
        { url: "https://image.pollinations.ai/prompt/fermented%20foods%20lab%20glassware?width=800&height=600&nologo=true", caption: "Culturas ativas analisadas em laboratório." }
    ],
    content: `A nova fronteira da dieta não é sobre contar calorias, mas sobre cultivar o "segundo cérebro". Estudos recentes solidificaram o conceito de Psicobióticos: bactérias probióticas que alteram a química cerebral. O mecanismo chave é o Nervo Vago, que atua como um cabo de fibra óptica bidirecional conectando o intestino ao cérebro.

    A novidade reside na identificação de cepas que metabolizam fibras em ácidos graxos de cadeia curta, como o butirato, que reduz a neuroinflamação. Mais impressionante é a capacidade dessas bactérias de sintetizar neurotransmissores como GABA e serotonina.

    Isso muda o paradigma da psiquiatria nutricional. A ingestão de alimentos fermentados cria um ambiente onde a microbiota regula ativamente o humor e a cognição, sugerindo que a depressão e a ansiedade podem ter raízes metabólicas inflamatórias no trato digestivo.`
  },
  "Fusão Nuclear: O Santo Graal": {
    title: "Fusão Nuclear: O Santo Graal",
    author: "Marie C.",
    category: "Física",
    fact: "Recentemente atingimos a 'ignição', gerando mais energia do que a gasta para iniciar a reação.",
    imageKeyword: "nuclear fusion tokamak reactor plasma",
    imageUrl: "https://image.pollinations.ai/prompt/tokamak%20nuclear%20fusion%20reactor%20interior%20plasma%20purple%20glow%20highly%20detailed?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/magnetic%20field%20lines%20containing%20plasma%20donut%20shape?width=800&height=600&nologo=true", caption: "Tokamak: campos magnéticos aprisionando plasma." },
        { url: "https://image.pollinations.ai/prompt/laser%20fusion%20target%20pellet%20implosion?width=800&height=600&nologo=true", caption: "Fusão inercial: lasers comprimindo combustível." }
    ],
    content: `A fusão nuclear é o processo que alimenta as estrelas. Ao contrário da fissão, que quebra átomos pesados gerando lixo radioativo, a fusão une átomos leves de hidrogênio para criar hélio. O resultado? Energia massiva, combustível abundante e nenhum risco de meltdown.

    O desafio é que, para fundir núcleos, você precisa vencer a repulsão elétrica entre eles, o que exige temperaturas de 100 milhões de graus Celsius. A solução é usar campos magnéticos poderosos em máquinas chamadas Tokamaks para suspender o plasma superaquecido no vácuo.

    Recentemente, alcançamos a "ignição" em laboratório, provando que a física funciona. O desafio agora é a engenharia: construir reatores que possam sustentar esse plasma "queimando" continuamente para gerar eletricidade comercialmente.`
  },
  "Exoplanetas e Bioassinaturas": {
    title: "Exoplanetas e Bioassinaturas",
    author: "Carl S.",
    category: "Astronomia",
    fact: "O James Webb detectou metano e CO2 na atmosfera de K2-18b.",
    imageKeyword: "exoplanet surface alien landscape james webb",
    imageUrl: "https://image.pollinations.ai/prompt/exoplanet%20surface%20strange%20plants%20double%20sun%20sci-fi%20realistic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/james%20webb%20telescope%20spectrum%20graph%20atmosphere%20data?width=800&height=600&nologo=true", caption: "Espectro de transmissão: a 'impressão digital' química." },
        { url: "https://image.pollinations.ai/prompt/k2-18b%20ocean%20world%20concept%20art?width=800&height=600&nologo=true", caption: "K2-18b: um possível mundo oceânico." }
    ],
    content: `Como saber se há vida num planeta a 100 anos-luz de distância? A resposta é a luz. Quando um exoplaneta passa na frente de sua estrela, a luz filtra através da atmosfera do planeta.

    Diferentes moléculas absorvem cores específicas de luz. O Telescópio James Webb analisa esse espectro. Recentemente, detectou metano e CO2 na atmosfera de K2-18b. Na Terra, o metano é produzido principalmente por vida biológica.

    A "arma fumegante" que os astrobiólogos buscam é o oxigênio. O oxigênio é altamente reativo e desapareceria se não fosse reposto constantemente. Encontrar O2, metano e água juntos seria o sinal mais forte de que não estamos sós.`
  },

  // =================================================================================
  // OUTROS ARTIGOS E FALLBACKS
  // =================================================================================
  "Computação Quântica: O Fim da Criptografia?": {
    title: "Computação Quântica: O Fim da Criptografia?",
    author: "Alan T.",
    category: "Tecnologia",
    fact: "O algoritmo de Shor pode quebrar chaves RSA em minutos.",
    imageKeyword: "quantum computer chip gold cryostat",
    imageUrl: "https://image.pollinations.ai/prompt/quantum%20computer%20inside%20cryostat%20gold%20wires%20qubits%20futuristic?width=1600&height=900&nologo=true",
    additionalImages: [],
    content: "A superposição e o entrelaçamento quântico permitem cálculos paralelos massivos que ameaçam a segurança bancária. O mundo corre agora para desenvolver a 'criptografia pós-quântica' antes que os computadores Q cheguem ao mercado."
  },
  "Pergaminhos de Herculano e IA": {
    title: "Pergaminhos de Herculano e IA",
    author: "História Viva",
    category: "História & Tech",
    fact: "A IA conseguiu ler tinta dentro de pergaminhos carbonizados.",
    imageKeyword: "burnt scroll ancient rome ai scanning",
    imageUrl: "https://image.pollinations.ai/prompt/ancient%20burnt%20scrolls%20digital%20scanning%20laser%20revealing%20letters%20herculaneum?width=1600&height=900&nologo=true",
    additionalImages: [],
    content: "Tomografia de contraste de fase e aprendizado de máquina revelam textos filosóficos perdidos há 2000 anos. O 'Vesuvius Challenge' provou que é possível desenrolar digitalmente papiros que se desintegrariam ao toque físico."
  },
  "A Rede Micelial: Internet da Floresta": {
    title: "A Rede Micelial: Internet da Floresta",
    author: "Bio Fungi",
    category: "Biologia",
    fact: "Árvores usam fungos para trocar nutrientes e avisos de pragas.",
    imageKeyword: "mycelium network forest roots glowing",
    imageUrl: "https://image.pollinations.ai/prompt/underground%20mycelium%20network%20connecting%20tree%20roots%20glowing%20bio%20luminescence?width=1600&height=900&nologo=true",
    additionalImages: [],
    content: "A simbiose entre fungos e raízes cria uma rede complexa de troca de carbono e sinais químicos. Árvores mais velhas usam essa rede para 'amamentar' mudas jovens que crescem na sombra, garantindo a sobrevivência da floresta."
  },
  "O Zumbido de Fundo: Ondas Gravitacionais": {
    title: "O Zumbido de Fundo: Ondas Gravitacionais",
    author: "Dr. Cosmos",
    category: "Astronomia",
    fact: "O universo tem um 'som' de fundo causado pela colisão de buracos negros.",
    imageKeyword: "gravitational waves space ripple",
    imageUrl: "https://image.pollinations.ai/prompt/gravitational%20waves%20distorting%20space%20time%20grid%20black%20holes%20merging%20cosmic%20scale?width=1600&height=900&nologo=true",
    additionalImages: [],
    content: "Astrônomos detectaram o fundo estocástico de ondas gravitacionais usando pulsares como relógios cósmicos. Diferente das ondas detectadas pelo LIGO (eventos únicos), este é um 'zumbido' constante gerado por milhões de fusões."
  },
  "Edição Genética Prime": {
    title: "Edição Genética Prime",
    author: "Jennifer D.",
    category: "Biologia",
    fact: "O 'Prime Editing' é mais preciso que o CRISPR original.",
    imageKeyword: "dna editing crispr cas9 molecular",
    imageUrl: "https://image.pollinations.ai/prompt/dna%20strand%20being%20edited%20by%20nanobot%20molecular%20biology%20blue%20medical?width=1600&height=900&nologo=true",
    additionalImages: [],
    content: "Essa técnica permite trocar bases individuais do DNA sem quebrar a dupla hélice, reduzindo erros e permitindo a correção de até 89% das doenças genéticas conhecidas."
  },
  "Arqueologia LiDAR na Amazônia": {
    title: "Arqueologia LiDAR na Amazônia",
    author: "Indy J.",
    category: "História",
    fact: "Lasers revelaram cidades perdidas sob a copa das árvores da Amazônia.",
    imageKeyword: "amazon jungle lidar scan hidden city",
    imageUrl: "https://image.pollinations.ai/prompt/amazon%20rainforest%20aerial%20lidar%20scan%20revealing%20ancient%20pyramids%20geometric%20shapes?width=1600&height=900&nologo=true",
    additionalImages: [],
    content: "A tecnologia LiDAR penetra a vegetação densa para mapear topografias, revelando vastas redes urbanas pré-colombianas, estradas e pirâmides que estavam escondidas por séculos."
  },
  "Fotossíntese Artificial": {
    title: "Fotossíntese Artificial",
    author: "Eco Lab",
    category: "Química",
    fact: "Folhas biônicas usam luz solar para quebrar água em hidrogênio combustível.",
    imageKeyword: "artificial leaf photosynthesis lab energy",
    imageUrl: "https://image.pollinations.ai/prompt/futuristic%20artificial%20leaf%20device%20in%20water%20producing%20bubbles%20sunlight%20lab?width=1600&height=900&nologo=true",
    additionalImages: [],
    content: "Catalisadores imitam o complexo de evolução de oxigênio das plantas para armazenar energia solar em ligações químicas, criando combustíveis líquidos a partir do ar e do sol."
  }
};

/**
 * 🎨 TEMAS DE CAPA (MAGAZINE COVERS)
 */
export const MAGAZINE_COVERS = [
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
      vol: 'Vol. 142 • VIGILÂNCIA & VITALIDADE',
      highlight: { 
        title: 'O Olho de Deus: Vigilância Preditiva e ABIS', 
        desc: 'Como a IA e o Big Data estão acabando com o anonimato nas metrópoles.', 
        image: 'https://image.pollinations.ai/prompt/futuristic%20surveillance%20control%20room%20screens%20data%20biometrics%20blue%20hue%20realistic?width=1600&height=900&nologo=true' 
      },
      teasers: [
        { cat: 'Saúde', title: 'Psicobióticos: O Cérebro no Intestino', color: 'text-red-900' },
        { cat: 'Física', title: 'Fusão Nuclear: O Santo Graal', color: 'text-slate-700' },
        { cat: 'Espaço', title: 'Exoplanetas e Bioassinaturas', color: 'text-slate-700' }
      ],
      strip: [
        { icon: Cpu, cat: 'Tech', title: 'Computação Quântica: O Fim da Criptografia?' },
        { icon: History, cat: 'História', title: 'Pergaminhos de Herculano e IA' },
        { icon: Leaf, cat: 'Bio', title: 'A Rede Micelial: Internet da Floresta' }
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
      vol: 'EDITION #500 • POWER & TECH',
      highlight: { 
        title: 'Baterias de Estado Sólido: O Fim do Lítio Líquido?', 
        desc: 'Mais seguras, mais leves e carregamento em 10 minutos. O Santo Graal dos EVs chegou.', 
        image: 'https://image.pollinations.ai/prompt/electric%20car%20chassis%20with%20glowing%20solid%20state%20battery%20pack%20technical%20cutaway%20realistic?width=1600&height=900&nologo=true' 
      },
      teasers: [
        { cat: 'F1 Tech', title: 'Aerodinâmica Ativa na F1', color: 'text-yellow-400' },
        { cat: 'Aero', title: 'O Motor Scramjet', color: 'text-white' },
        { cat: 'Civil', title: 'Concreto Auto-Regenerativo', color: 'text-gray-400' }
      ],
      strip: [
        { icon: Zap, cat: 'Energia', title: 'Fotossíntese Artificial' },
        { icon: Rocket, cat: 'Speed', title: 'O Motor Scramjet' },
        { icon: Atom, cat: 'Physics', title: 'Fusão Nuclear: O Santo Graal' }
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
      vol: 'SPECIAL ISSUE • HIDDEN WORLDS',
      highlight: { 
        title: 'A Rede Micelial: Internet da Floresta', 
        desc: 'Sob nossos pés, uma rede de fungos conecta árvores em uma "wood wide web".', 
        image: 'https://image.pollinations.ai/prompt/underground%20mycelium%20network%20connecting%20tree%20roots%20glowing%20bio%20luminescence?width=1600&height=900&nologo=true' 
      },
      teasers: [
        { cat: 'Amazônia', title: 'Arqueologia LiDAR na Amazônia', color: 'text-green-800' },
        { cat: 'Saúde', title: 'Psicobióticos: O Cérebro no Intestino', color: 'text-stone-700' },
        { cat: 'Exoplanetas', title: 'Exoplanetas e Bioassinaturas', color: 'text-stone-700' }
      ],
      strip: [
        { icon: Leaf, cat: 'Botânica', title: 'Fotossíntese Artificial' },
        { icon: Microscope, cat: 'Micro', title: 'Edição Genética Prime' },
        { icon: Globe, cat: 'Earth', title: 'Arqueologia LiDAR na Amazônia' }
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
      vol: 'SYS.ROOT • ENCRYPTION',
      highlight: { 
        title: 'Computação Quântica: O Fim da Criptografia?', 
        desc: 'O algoritmo de Shor e o colapso iminente da segurança bancária.', 
        image: 'https://image.pollinations.ai/prompt/quantum%20computer%20inside%20cryostat%20gold%20wires%20qubits%20futuristic?width=1600&height=900&nologo=true' 
      },
      teasers: [
        { cat: 'Surveillance', title: 'O Olho de Deus: Vigilância Preditiva e ABIS', color: 'text-white' },
        { cat: 'Biotech', title: 'Edição Genética Prime', color: 'text-white' },
        { cat: 'AI History', title: 'Pergaminhos de Herculano e IA', color: 'text-gray-500' }
      ],
      strip: [
        { icon: Cpu, cat: 'Hardware', title: 'Baterias de Estado Sólido: O Fim do Lítio Líquido?' },
        { icon: Zap, cat: 'Power', title: 'Fusão Nuclear: O Santo Graal' },
        { icon: Brain, cat: 'Neuro', title: 'Psicobióticos: O Cérebro no Intestino' }
      ]
    }
  },
  {
    id: 'cosmos',
    name: 'Astronomy Style',
    style: {
      bgWrapper: 'bg-[#0B0d17]', 
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
      vol: 'DEEP SPACE • GRAVITY',
      highlight: { 
        title: 'O Zumbido de Fundo: Ondas Gravitacionais', 
        desc: 'Escutando a cacofonia de buracos negros supermassivos.', 
        image: 'https://image.pollinations.ai/prompt/gravitational%20waves%20distorting%20space%20time%20grid%20black%20holes%20merging%20cosmic%20scale?width=1600&height=900&nologo=true' 
      },
      teasers: [
        { cat: 'Xenos', title: 'Exoplanetas e Bioassinaturas', color: 'text-purple-300' },
        { cat: 'Fusion', title: 'Fusão Nuclear: O Santo Graal', color: 'text-blue-200' },
        { cat: 'Propulsion', title: 'O Motor Scramjet', color: 'text-blue-200' }
      ],
      strip: [
        { icon: Rocket, cat: 'Launch', title: 'O Motor Scramjet' },
        { icon: Sparkles, cat: 'Cosmos', title: 'O Zumbido de Fundo: Ondas Gravitacionais' },
        { icon: Atom, cat: 'Quantum', title: 'Computação Quântica: O Fim da Criptografia?' }
      ]
    }
  },
  {
    id: 'vintage',
    name: 'Old Paper Style',
    style: {
      bgWrapper: 'bg-[#e3dac9]', 
      mastheadColor: 'text-[#2c1b0e]',
      mastheadSub: 'text-[#5c4033]',
      accentColor: 'text-[#8b4513]',
      buttonBg: 'bg-[#5c4033] hover:bg-[#3e2b22]',
      buttonText: 'text-[#e3dac9]',
      borderColor: 'border-[#2c1b0e]', 
      fontMain: 'font-serif',
      featureFilter: 'sepia contrast-125', 
      textColor: 'text-[#2c1b0e]'
    },
    content: {
      vol: 'EST. 1888 • ARCHAEOLOGY',
      highlight: { 
        title: 'Pergaminhos de Herculano e IA', 
        desc: 'IA decifra carvão de 2000 anos e revela filosofia perdida.', 
        image: 'https://image.pollinations.ai/prompt/ancient%20burnt%20scrolls%20digital%20scanning%20laser%20revealing%20letters%20herculaneum?width=1600&height=900&nologo=true' 
      },
      teasers: [
        { cat: 'Lost Cities', title: 'Arqueologia LiDAR na Amazônia', color: 'text-[#8b4513]' },
        { cat: 'Engineering', title: 'Concreto Auto-Regenerativo', color: 'text-[#2c1b0e]' },
        { cat: 'Mind', title: 'Psicobióticos: O Cérebro no Intestino', color: 'text-[#2c1b0e]' }
      ],
      strip: [
        { icon: BookOpen, cat: 'History', title: 'Pergaminhos de Herculano e IA' },
        { icon: Globe, cat: 'World', title: 'Arqueologia LiDAR na Amazônia' },
        { icon: FlaskConical, cat: 'Science', title: 'Fotossíntese Artificial' }
      ]
    }
  }
];
