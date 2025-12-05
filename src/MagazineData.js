import { 
  Brain, Atom, Globe, Leaf, Cpu, Rocket, History, Zap, FlaskConical, 
  Microscope, Sparkles, BookOpen 
} from 'lucide-react';

/**
 * 📚 BIBLIOTECA DE CONTEÚDO ESTÁTICO (IMAGENS CORRIGIDAS E RÁPIDAS)
 */
export const STATIC_CONTENT_LIBRARY = {
  // --- ARTIGO DESTAQUE 1: INTELIGÊNCIA POLICIAL ---
  "O Olho de Deus: Vigilância Preditiva e ABIS": {
    title: "O Olho de Deus: Vigilância Preditiva e ABIS",
    author: "Dra. Helena Vance",
    category: "Tecnologia & Segurança",
    fact: "O sistema Córtex, no Brasil, integra milhares de câmeras e lê placas em milissegundos.",
    imageKeyword: "surveillance",
    // Imagem Unsplash: Sala de controle futurista/Cyberpunk
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600", caption: "Mapeamento digital em tempo real." },
        { url: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1600", caption: "Drones autônomos patrulhando cidades inteligentes." }
    ],
    content: `A segurança pública entrou na era do "Policiamento Preditivo". Não se trata mais apenas de reagir ao crime, mas de antecipá-lo usando Big Data e IA. No Brasil, o destaque é o **Projeto Córtex**, uma plataforma de vigilância integrada que cruza dados de leitura de placas (LPR) com bancos de dados criminais em tempo real. O sistema utiliza algoritmos de reconhecimento de padrões para identificar comportamentos anômalos — como um veículo circulando repetidamente em uma área bancária — antes que o crime ocorra.

    Globalmente, a tecnologia **ABIS (Automated Biometric Identification System)** evoluiu muito além das impressões digitais. Agências como a Interpol e o FBI agora utilizam a análise de marcha (gait analysis). A física por trás disso envolve a modelagem cinemática do esqueleto humano; como cada pessoa possui uma biomecânica única ao caminhar (distribuição de peso, balanço dos braços e cadência), câmeras de alta resolução podem identificar suspeitos mesmo com o rosto coberto, analisando vetores de movimento com precisão de 99,6%.

    No entanto, a "vigilância de dados" levanta questões sobre privacidade e criptografia. Softwares modernos de inteligência, como o Pegasus (israelense), exploram vulnerabilidades "zero-day" em smartphones para transformar microfones e câmeras em dispositivos de escuta passiva. A engenharia reversa desses malwares revela um nível de sofisticação onde o código se autodestrói se detectar que está sendo analisado em uma sandbox.`
  },

  // --- ARTIGO DESTAQUE 2: SAÚDE/DIETA ---
  "Psicobióticos: O Cérebro no Intestino": {
    title: "Psicobióticos: O Cérebro no Intestino",
    author: "Carlos M. Nutricionista",
    category: "Biologia & Saúde",
    fact: "90% da serotonina do seu corpo é produzida no intestino, não no cérebro.",
    imageKeyword: "microbiome",
    // Imagem Unsplash: Abstrato biológico/células
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1600", caption: "O Nervo Vago: a autoestrada de dados corpo-cérebro." },
        { url: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=1600", caption: "Culturas ativas analisadas em laboratório." }
    ],
    content: `A nova fronteira da dieta não é sobre contar calorias, mas sobre cultivar o "segundo cérebro". Estudos recentes de 2024/2025 solidificaram o conceito de **Psicobióticos**: bactérias probióticas específicas que, quando ingeridas, alteram a química cerebral. O mecanismo chave é o **Nervo Vago**, o maior nervo craniano, que atua como um cabo de fibra óptica bidirecional conectando o sistema nervoso entérico ao sistema nervoso central.

    A novidade reside na identificação de cepas como *Lactobacillus rhamnosus* e *Bifidobacterium longum*, que metabolizam fibras dietéticas em ácidos graxos de cadeia curta (como o butirato). O butirato fortalece a barreira hematoencefálica e reduz a neuroinflamação. Mais impressionante é a capacidade dessas bactérias de sintetizar neurotransmissores como GABA e serotonina. Dietas ricas em prebióticos (alimentos para essas bactérias) demonstraram, em ensaios clínicos duplo-cegos, uma redução de até 40% nos níveis de cortisol (hormônio do estresse) circulante.

    Isso muda o paradigma da psiquiatria nutricional. Não estamos apenas "comendo saudável", estamos modulando a expressão gênica. A ingestão de alimentos fermentados e fibras complexas não digeríveis pelo humano (mas adoradas pelas bactérias) cria um ambiente onde a microbiota regula ativamente o humor e a cognição, sugerindo que a depressão e a ansiedade podem ter raízes metabólicas inflamatórias no trato digestivo.`
  },

  // --- ARTIGO DESTAQUE 3: AUTOMOTIVO ---
  "Baterias de Estado Sólido: O Fim do Lítio Líquido?": {
    title: "Baterias de Estado Sólido: O Fim do Lítio Líquido?",
    author: "Eng. Marco Turbina",
    category: "Engenharia Automotiva",
    fact: "Elas podem carregar de 0 a 80% em menos de 10 minutos devido à estabilidade térmica.",
    imageKeyword: "electric car battery",
    // Imagem Unsplash: Carro elétrico chassi/tech
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600", caption: "Plataforma de baterias de nova geração." },
        { url: "https://images.unsplash.com/photo-1553406232-021021703672?auto=format&fit=crop&q=80&w=1600", caption: "Estações de ultra-carregamento." }
    ],
    content: `A indústria automotiva está à beira de seu maior salto desde o motor de combustão interna: as baterias de estado sólido (Solid-State Batteries - SSBs). Diferente das baterias de íon-lítio atuais, que usam um eletrólito líquido inflamável para transportar íons entre o cátodo e o ânodo, as SSBs utilizam um eletrólito sólido, feito de cerâmica ou polímeros avançados. A física aqui é transformadora: a densidade energética salta de 250 Wh/kg para mais de 500 Wh/kg.

    O segredo está na supressão dos dendritos. Em baterias líquidas, o carregamento rápido forma "agulhas" de lítio (dendritos) que podem perfurar o separador e causar curtos-circuitos explosivos. O eletrólito sólido atua como uma barreira física impenetrável, permitindo correntes de carregamento muito mais altas sem risco térmico. Toyota e Nissan estão liderando essa corrida, prometendo veículos com autonomia superior a 1.200 km por carga até 2027.

    Além da autonomia, a redução de peso é crucial para a dinâmica veicular. Baterias mais leves significam menor massa não suspensa e menor inércia, permitindo que carros elétricos esportivos tenham o comportamento ágil de um carro a combustão leve, algo que o peso excessivo das baterias atuais sempre impediu.`
  },

  // --- OUTROS ARTIGOS VARIADOS ---
  "O Zumbido de Fundo: Ondas Gravitacionais": {
    title: "O Zumbido de Fundo: Ondas Gravitacionais",
    author: "Dr. Cosmos",
    category: "Astronomia",
    fact: "O universo tem um 'som' de fundo causado pela colisão de buracos negros supermassivos.",
    imageKeyword: "gravitational waves",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "Astrônomos detectaram o fundo estocástico de ondas gravitacionais usando pulsares como relógios cósmicos. Diferente das ondas detectadas pelo LIGO (eventos únicos), este é um 'zumbido' constante gerado por milhões de fusões de buracos negros supermassivos ao longo da história do universo."
  },
  
  "Aerodinâmica Ativa na F1": {
    title: "Aerodinâmica Ativa na F1",
    author: "Lando S.",
    category: "Engenharia",
    fact: "O efeito solo gera sucção suficiente para um F1 andar no teto a 150km/h.",
    imageKeyword: "formula 1",
    imageUrl: "https://images.unsplash.com/photo-1539281222953-b097b69279a0?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "A gestão do fluxo de ar, vórtices Y250 e o DRS explicados através da dinâmica dos fluidos computacional (CFD). Carros modernos não apenas cortam o ar; eles o manipulam para criar downforce massiva em curvas e reduzi-la em retas."
  },

  "Pergaminhos de Herculano e IA": {
    title: "Pergaminhos de Herculano e IA",
    author: "História Viva",
    category: "História & Tech",
    fact: "A IA conseguiu ler tinta dentro de pergaminhos carbonizados pelo Vesúvio.",
    imageKeyword: "ancient scroll",
    imageUrl: "https://images.unsplash.com/photo-1546803734-710537126c61?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "Tomografia de contraste de fase e aprendizado de máquina revelam textos filosóficos perdidos há 2000 anos. O 'Vesuvius Challenge' provou que é possível desenrolar digitalmente papiros que se desintegrariam ao toque físico."
  },

  "A Rede Micelial: Internet da Floresta": {
    title: "A Rede Micelial: Internet da Floresta",
    author: "Bio Fungi",
    category: "Biologia",
    fact: "Árvores usam fungos para trocar nutrientes e avisos de pragas.",
    imageKeyword: "forest roots",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "A simbiose entre fungos e raízes cria uma rede complexa de troca de carbono e sinais químicos. Árvores mais velhas usam essa rede para 'amamentar' mudas jovens que crescem na sombra, garantindo a sobrevivência da floresta."
  },

  "Computação Quântica: O Fim da Criptografia?": {
    title: "Computação Quântica: O Fim da Criptografia?",
    author: "Alan T.",
    category: "Tecnologia",
    fact: "O algoritmo de Shor pode quebrar chaves RSA em minutos, não milênios.",
    imageKeyword: "quantum computer",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "A superposição e o entrelaçamento quântico permitem cálculos paralelos massivos que ameaçam a segurança bancária. O mundo corre agora para desenvolver a 'criptografia pós-quântica' antes que os computadores Q cheguem ao mercado."
  },

  "Fusão Nuclear: O Santo Graal": {
    title: "Fusão Nuclear: O Santo Graal",
    author: "Marie C.",
    category: "Física",
    fact: "Recentemente atingimos a 'ignição', gerando mais energia do que a gasta para iniciar a reação.",
    imageKeyword: "nuclear energy",
    imageUrl: "https://images.unsplash.com/photo-1520113412646-049d569cc069?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "Confinamento magnético em Tokamaks força isótopos de hidrogênio a se fundirem em hélio, liberando energia limpa. É o mesmo processo que alimenta o Sol, replicado em garrafas magnéticas na Terra."
  },

  "Exoplanetas e Bioassinaturas": {
    title: "Exoplanetas e Bioassinaturas",
    author: "Carl S.",
    category: "Astronomia",
    fact: "O James Webb detectou metano e CO2 na atmosfera de K2-18b.",
    imageKeyword: "space planet",
    imageUrl: "https://images.unsplash.com/photo-1614730341194-75c60740a070?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "Espectroscopia de transmissão analisa a luz das estrelas filtrada pela atmosfera de planetas distantes. A presença simultânea de gases redutores e oxidantes seria um forte indício de vida biológica ativa."
  },

  "Concreto Auto-Regenerativo": {
    title: "Concreto Auto-Regenerativo",
    author: "Eng. Civil",
    category: "Engenharia",
    fact: "Bactérias dentro do cimento acordam com a água da chuva e fecham rachaduras.",
    imageKeyword: "concrete",
    imageUrl: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "Bactérias do gênero Bacillus adicionadas à mistura produzem calcário quando expostas à umidade, selando fissuras automaticamente e aumentando a vida útil de pontes e prédios em décadas."
  },

  "Edição Genética Prime": {
    title: "Edição Genética Prime",
    author: "Jennifer D.",
    category: "Biologia",
    fact: "O 'Prime Editing' é mais preciso que o CRISPR original, agindo como um processador de texto de DNA.",
    imageKeyword: "dna editing",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "Essa técnica permite trocar bases individuais do DNA sem quebrar a dupla hélice, reduzindo erros e permitindo a correção de até 89% das doenças genéticas conhecidas."
  },

  "O Motor Scramjet": {
    title: "O Motor Scramjet",
    author: "Aero Space",
    category: "Física & Eng",
    fact: "Scramjets respiram ar supersônico e podem atingir Mach 10.",
    imageKeyword: "supersonic plane",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1600", // Fallback imagem tech
    additionalImages: [],
    content: "A compressão do ar ocorre pela própria velocidade do veículo, eliminando partes móveis como turbinas. Isso permite voos de Nova York a Londres em menos de uma hora."
  },
  
  "Arqueologia LiDAR na Amazônia": {
    title: "Arqueologia LiDAR na Amazônia",
    author: "Indy J.",
    category: "História",
    fact: "Lasers revelaram cidades perdidas sob a copa das árvores da Amazônia.",
    imageKeyword: "jungle ruins",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "A tecnologia LiDAR penetra a vegetação densa para mapear topografias, revelando vastas redes urbanas pré-colombianas, estradas e pirâmides que estavam escondidas por séculos."
  },

  "Fotossíntese Artificial": {
    title: "Fotossíntese Artificial",
    author: "Eco Lab",
    category: "Química",
    fact: "Folhas biônicas usam luz solar para quebrar água em hidrogênio combustível.",
    imageKeyword: "leaf lab",
    imageUrl: "https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [],
    content: "Catalisadores imitam o complexo de evolução de oxigênio das plantas para armazenar energia solar em ligações químicas, criando combustíveis líquidos a partir do ar e do sol."
  }
};

/**
 * 🎨 TEMAS DE CAPA (MAGAZINE COVERS) - Com Imagens BLINDADAS do Unsplash
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
        desc: 'Como a IA, a análise de marcha e o Big Data estão acabando com o conceito de anonimato nas metrópoles.', 
        // Imagem Unsplash: Sala de controle / Hacker
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600' 
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
        // Imagem Unsplash: Carro elétrico conceitual
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600' 
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
        desc: 'Sob nossos pés, uma rede de fungos conecta árvores em uma "wood wide web" de comunicação química.', 
        // Imagem Unsplash: Floresta/Cogumelos
        image: 'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?auto=format&fit=crop&q=80&w=1600' 
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
        desc: 'O algoritmo de Shor e o colapso iminente da segurança bancária mundial.', 
        // Imagem Unsplash: Computador Quântico
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1600' 
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
        desc: 'Escutando a cacofonia de buracos negros supermassivos colidindo através do tempo.', 
        // Imagem Unsplash: Espaço/Ondas
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600' 
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
        desc: 'Como a inteligência artificial decifrou carvão de 2000 anos e revelou filosofia grega perdida.', 
        // Imagem Unsplash: Papiro/Antigo
        image: 'https://images.unsplash.com/photo-1546803734-710537126c61?auto=format&fit=crop&q=80&w=1600' 
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
