import React, { useState, useEffect } from 'react';
import { BookOpen, Atom, ArrowLeft, RefreshCw, Settings, Sparkles, Brain, Dna, Rocket, Microscope, Info, AlertTriangle, Globe, Cpu, Leaf, FlaskConical, History, ChevronRight, Palette, Key, ExternalLink, CheckCircle, XCircle, Loader2, Zap, Car, Gauge } from 'lucide-react';

/**
 * 📚 BIBLIOTECA DE CONTEÚDO ESTÁTICO
 * Contém os artigos completos para cada manchete que aparece nas capas.
 */
const STATIC_CONTENT_LIBRARY = {
  // --- CAPA CLASSIC (Scientific American) ---
  "O Cérebro Quântico": {
    title: "O Cérebro Quântico",
    author: "Dr. Roger Penrose",
    category: "Neurociência",
    fact: "Microtúbulos dentro dos neurônios podem manter estados quânticos por tempo suficiente para processar informações.",
    imageKeyword: "quantum brain neural network",
    imageUrl: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=1600",
    content: `A consciência humana permanece o maior mistério da ciência. A teoria convencional diz que o cérebro é um computador biológico clássico, processando bits de informação através de sinapses. Mas uma teoria controversa, a "Redução Objetiva Orquestrada" (Orch-OR), sugere algo muito mais estranho.\n\nProposta pelo físico Roger Penrose e pelo anestesista Stuart Hameroff, a teoria postula que a consciência deriva de vibrações quânticas dentro de estruturas celulares chamadas microtúbulos. Se for verdade, seu cérebro não é apenas um computador, mas um computador quântico capaz de processamento não-algorítmico.\n\nCríticos argumentam que o cérebro é "quente, úmido e barulhento" demais para manter estados quânticos delicados. No entanto, descobertas recentes sobre efeitos quânticos na fotossíntese e na navegação de pássaros sugerem que a biologia quântica é mais comum do que pensávamos.`
  },
  "O Fim do Tempo": {
    title: "O Fim do Tempo",
    author: "Julian Barbour",
    category: "Física Teórica",
    fact: "Algumas equações fundamentais da física quântica, como a de Wheeler-DeWitt, não incluem a variável 'tempo'.",
    imageKeyword: "surreal clock melting",
    content: `O tempo é real ou é uma ilusão persistente? Para a maioria de nós, o tempo flui como um rio. Mas para a física moderna, o passado, presente e futuro podem existir simultaneamente em um "bloco de universo" tetradimensional.\n\nA entropia (a medida da desordem) é o que nos dá a "seta do tempo". O universo começou ordenado no Big Bang e caminha para a desordem. Nós percebemos essa mudança como a passagem do tempo.\n\nSe o universo atingir o equilíbrio térmico máximo, o tempo deixará de fazer sentido. Não haverá eventos, nem mudanças, apenas um vasto mar de partículas estáticas em um "agora" eterno.`
  },
  "Cura pelo Som": { title: "Cura pelo Som", author: "Medicina Vibracional", category: "Medicina", fact: "Ultrassom focado de alta intensidade já é usado para destruir tumores sem cortes.", content: "O som não é apenas música; é energia mecânica. Novas terapias usam frequências específicas para quebrar pedras nos rins, acelerar a regeneração óssea e até abrir a barreira hematoencefálica para entregar remédios ao cérebro." },
  "DNA Digital": { title: "DNA Digital", author: "Bio-Engenharia", category: "Genética", fact: "Um grama de DNA pode teoricamente armazenar 215 petabytes de dados.", content: "Estamos ficando sem espaço para armazenar dados digitais. A solução? DNA sintético. Cientistas já conseguiram codificar filmes inteiros e sistemas operacionais em cadeias de moléculas da vida, criando um armazenamento que dura milhares de anos." },
  "Sonhos Lúcidos": { title: "Sonhos Lúcidos", author: "Stephen LaBerge", category: "Neurociência", fact: "Gamers frequentes têm mais chances de ter sonhos lúcidos devido ao treinamento em controlar ambientes virtuais.", content: "Acordar dentro de um sonho e controlá-lo não é magia, é uma habilidade treinável. Estudos mostram que sonhadores lúcidos podem se comunicar com o mundo exterior movendo os olhos em código Morse enquanto dormem." },
  "Fusão Fria": { title: "Fusão Fria: O Retorno", author: "Energia Limpa", category: "Física", fact: "Em 1989, o anúncio prematuro da fusão a frio quase destruiu a reputação do campo.", content: "A ideia de criar energia nuclear à temperatura ambiente foi ridicularizada por décadas. Agora, com novos materiais e a tecnologia LENR (Reações Nucleares de Baixa Energia), laboratórios sérios, incluindo a NASA, estão revisitando a possibilidade." },
  "Núcleo Parou?": { title: "O Núcleo da Terra Parou?", author: "Geofísica", category: "Terra", fact: "O núcleo interno da Terra é uma bola de ferro sólido do tamanho de Plutão.", content: "Estudos sísmicos recentes sugerem que a rotação do núcleo interno da Terra pode ter pausado e até invertido em relação à superfície. Isso é parte de um ciclo natural de décadas que afeta a duração do dia e o campo magnético." },

  // --- CAPA NATURE (NatGeo) ---
  "O Último Santuário": {
    title: "O Último Santuário: Amazônia Azul",
    author: "Sylvia Earle",
    category: "Oceanografia",
    fact: "Conhecemos melhor a superfície de Marte do que o fundo dos nossos oceanos.",
    imageKeyword: "deep ocean bioluminescence",
    imageUrl: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80&w=1600",
    content: `Nas profundezas abissais, onde a luz do sol nunca chega, existe um mundo alienígena. A "Amazônia Azul" não é apenas água; é um ecossistema complexo de fontes hidrotermais, corais de água fria e criaturas que produzem sua própria luz.\n\nExpedições recentes descobriram "florestas" de esponjas de vidro que vivem por milhares de anos e ecossistemas inteiros que dependem não da fotossíntese, mas da quimiossíntese, alimentando-se de minerais tóxicos que jorram do interior da Terra.\n\nEste santuário está ameaçado pela mineração em águas profundas. Proteger este mundo oculto é vital, pois ele regula o carbono do planeta e pode conter a chave para a origem da vida na Terra.`
  },
  "Fungos Assassinos": { title: "O Cordyceps Real", author: "Micologia", category: "Selva", fact: "Existem fungos que transformam formigas em zumbis para espalhar seus esporos, inspiração para 'The Last of Us'.", content: "Nas florestas tropicais, uma guerra silenciosa acontece. O fungo Ophiocordyceps infecta insetos, assume o controle de seus corpos e os obriga a subir em plantas altas antes de matá-los para liberar esporos ao vento." },
  "Cidades de Coral": { title: "Metrópoles Submersas", author: "Biologia Marinha", category: "Oceano", fact: "Corais não são pedras nem plantas, são colônias de animais minúsculos chamados pólipos.", content: "Recifes de coral ocupam menos de 1% do oceano, mas abrigam 25% de toda a vida marinha. Eles são as cidades mais populosas do mar, agora enfrentando um colapso devido ao aquecimento das águas e acidificação." },
  "O Elo Perdido": { title: "Reescrevendo a Evolução", author: "Paleontologia", category: "Evolução", fact: "O Homo naledi, descoberto recentemente, enterrava seus mortos, um comportamento que pensávamos ser exclusivo de humanos modernos.", content: "Novos fósseis na África do Sul sugerem que a evolução humana não foi uma linha reta, mas um arbusto complexo com várias espécies de humanos convivendo, cruzando e competindo por milênios." },
  "Árvores Falam": { title: "A Linguagem das Raízes", author: "Ecologia", category: "Botânica", fact: "Árvores podem alertar vizinhas sobre ataques de insetos através de sinais químicos no ar e nas raízes.", content: "A floresta é uma rede social. Árvores mães reconhecem suas mudas e enviam açúcar extra através da rede de fungos. Quando uma árvore morre, ela despeja seus recursos restantes na rede para ajudar as vizinhas." },
  "Vírus Gigantes": { title: "Vírus que Parecem Bactérias", author: "Virologia", category: "Micro", fact: "Os Mimivírus são tão grandes que podem ser vistos em microscópios comuns e possuem seu próprio sistema imune.", content: "Descobertos no permafrost derretido, vírus gigantes pré-históricos estão desafiando a definição de vida. Eles são complexos, antigos e estão 'acordando' com o aquecimento global." },
  "Gelo Derretendo": { title: "Arquivos do Clima", author: "Glaciologia", category: "Passado", fact: "Bolhas de ar presas no gelo antártico preservam a atmosfera da Terra de 800 mil anos atrás.", content: "Geleiras são bibliotecas congeladas. Ao perfurá-las, lemos a história das erupções vulcânicas, níveis de CO2 e temperaturas passadas, o que nos ajuda a prever o futuro climático." },

  // --- CAPA TECH (Wired) ---
  "A Singularidade": {
    title: "A Singularidade Está Próxima?",
    author: "Ray Kurzweil",
    category: "Inteligência Artificial",
    fact: "A Lei de Moore prevê que o poder computacional dobra a cada 18 meses, mas estamos chegando ao limite físico do silício.",
    imageKeyword: "artificial intelligence cyborg",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    content: `A Singularidade é o momento hipotético em que a inteligência artificial ultrapassará a inteligência humana, desencadeando um crescimento tecnológico incontrolável e irreversível. Alguns dizem 2045, outros dizem nunca.\n\nHoje, LLMs como o Gemini já passam no Teste de Turing em muitos contextos. O próximo passo é a AGI (Inteligência Artificial Geral) - uma máquina que pode aprender qualquer tarefa intelectual que um humano pode.\n\nO debate não é mais sobre "se", mas "quando". Será uma utopia onde máquinas resolvem o câncer e a fome, ou seremos animais de estimação de deuses digitais que nós mesmos criamos?`
  },
  "Guerra de Algoritmos": { title: "Guerra Fria Digital", author: "CyberSec", category: "Cyber", fact: "O vírus Stuxnet foi a primeira arma digital do mundo usada para destruir fisicamente centrífugas nucleares.", content: "A próxima guerra mundial pode não começar com mísseis, mas com linhas de código. Nações já possuem exércitos de hackers prontos para desligar redes elétricas, bancos e hospitais inimigos com um clique." },
  "O Fim do Dinheiro": { title: "Moedas Programáveis", author: "Fintech", category: "Crypto", fact: "Mais de 80% dos bancos centrais do mundo estão explorando criar suas próprias moedas digitais (CBDCs).", content: "O dinheiro de papel está morrendo. O futuro é o dinheiro programável: contratos inteligentes que se executam sozinhos, pagamentos instantâneos globais e o fim do anonimato financeiro." },
  "Mineração Lunar": { title: "Corrida do Ouro Espacial", author: "SpaceXonomics", category: "Space", fact: "A Lua é rica em Hélio-3, um combustível raro que poderia alimentar reatores de fusão limpa na Terra por séculos.", content: "Empresas privadas estão olhando para a Lua não como um destino turístico, mas como uma mina. Água lunar pode virar combustível de foguete, transformando nosso satélite em um posto de gasolina para Marte." },
  "Chips Neurais": { title: "Fusão Mente-Máquina", author: "Neuralink", category: "Tech", fact: "Paraplégicos já usam implantes cerebrais para controlar braços robóticos e digitar com o pensamento.", content: "Interfaces Cérebro-Computador (BCI) prometem restaurar a visão e o movimento. Mas o objetivo final é aumentar a inteligência humana, permitindo download de habilidades e comunicação telepática digital." },
  "Elevador Espacial": { title: "Escada para o Céu", author: "Engenharia", category: "Space", fact: "O conceito exige um cabo de 36.000 km feito de um material que ainda não conseguimos fabricar em escala, como nanotubos de carbono.", content: "Foguetes são caros e perigosos. Um elevador espacial, ancorado no equador e estendendo-se até a órbita geoestacionária, reduziria o custo de levar carga ao espaço de $20.000/kg para $200/kg." },
  "Baterias Infinitas": { title: "A Revolução do Estado Sólido", author: "Energia", category: "Energy", fact: "Baterias de estado sólido podem armazenar 3x mais energia que as de lítio atuais e não pegam fogo.", content: "O gargalo da tecnologia moderna é a bateria. Novas químicas prometem carregar carros elétricos em 5 minutos e fazer celulares durarem semanas, eliminando o eletrólito líquido inflamável." },

  // --- CAPA AUTO (Veículos) ---
  "Revolução Elétrica": {
    title: "O Futuro sobre Rodas: Elétricos vs Combustão",
    author: "Engenharia Automotiva",
    category: "Tecnologia Automotiva",
    fact: "O primeiro carro a atingir 100 km/h foi um veículo elétrico, o 'La Jamais Contente', em 1899.",
    imageKeyword: "electric car chassis",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600",
    content: `A indústria automotiva vive sua maior transformação em 100 anos. O motor a combustão interna, uma maravilha mecânica de milhares de peças móveis, está dando lugar à simplicidade elegante do motor elétrico.\n\nA eficiência é incomparável: enquanto um motor a gasolina desperdiça 70% da energia em calor, um motor elétrico aproveita mais de 90% para movimento. O torque instantâneo redefiniu o que consideramos "rápido".\n\nMas o desafio permanece nas baterias. A densidade energética, o peso e a infraestrutura de carregamento são as barreiras finais. Quem resolver a equação da "Bateria de Estado Sólido" dominará o século XXI.`
  },
  "O Retorno do Prelude": { 
    title: "Honda Prelude: O Ícone Renasce", 
    author: "Car Magazine", 
    category: "Lançamentos", 
    fact: "O novo Prelude Concept é um híbrido, mantendo a tradição da Honda de aliar esportividade com eficiência.", 
    content: "A Honda surpreendeu o mundo ao ressuscitar o nome Prelude. Diferente do passado puramente a gasolina, o novo modelo é um cupê híbrido elegante, focado no prazer de dirigir ('Joy of Driving') em uma era de SUVs genéricos. Ele promete ser o elo entre o analógico nostálgico e o futuro eletrificado." 
  },
  "Pequeno Gigante: GR Yaris": { 
    title: "Toyota GR Yaris: Nascido no Rally", 
    author: "Gazoo Racing", 
    category: "Performance", 
    fact: "O GR Yaris foi desenvolvido 'ao contrário': a Toyota criou um carro de rally primeiro e depois o adaptou para as ruas para cumprir regras de homologação.", 
    content: "Em um mundo de carros chatos, o GR Yaris é um milagre. Com um motor 1.6 de 3 cilindros (o mais potente do mundo) e tração integral inteligente GR-FOUR, ele humilha supercarros em estradas sinuosas. É a prova de que a paixão pela engenharia mecânica ainda vive." 
  },
  "Mentes de Silício": { 
    title: "Dilemas do Carro Autônomo", 
    author: "Ética AI", 
    category: "Autônomos", 
    fact: "O 'Problema do Bonde' da filosofia agora é real: se um acidente é inevitável, o carro deve salvar o passageiro ou o pedestre?", 
    content: "A tecnologia para carros que dirigem sozinhos (Nível 5) está quase pronta, mas a legislação e a ética não. Sensores LIDAR veem tudo, mas quem é o culpado em um acidente? O 'motorista' que dormia, a montadora ou o programador do algoritmo? A transição será turbulenta." 
  },
  "Baterias Sólidas": { title: "O Santo Graal da Energia", author: "Tech Auto", category: "Inovação", fact: "A Toyota planeja lançar carros com baterias de estado sólido até 2027, com autonomia de 1200km.", content: "Substituir o eletrólito líquido por sólido torna as baterias mais leves, carrega mais rápido e elimina o risco de incêndio. É a tecnologia que pode finalmente matar o motor a combustão." },
  "Hidrogênio": { title: "O Combustível do Futuro?", author: "Energia Alternativa", category: "Sustentabilidade", fact: "O único escapamento de um carro a hidrogênio (FCEV) é água potável pura.", content: "Enquanto baterias reinam nos carros de passeio, o hidrogênio pode ser a salvação para caminhões e navios. A Toyota e a BMW continuam apostando nessa tecnologia, onde o tempo de abastecimento é igual ao da gasolina." },
  "Carros Voadores": { title: "eVTOLs: O Sonho Real", author: "Mobilidade Urbana", category: "Futuro", fact: "Empresas como a Embraer (Eve) já têm centenas de pedidos para seus 'táxis aéreos' elétricos.", content: "Não são carros voadores estilo Jetsons, são eVTOLs (Decolagem e Pouso Vertical Elétrico). Silenciosos e mais baratos que helicópteros, eles prometem transformar o céu das metrópoles em novas rodovias até 2030." },

  // --- CAPA COSMOS & VINTAGE (Adicionar conteúdo genérico para garantir cobertura) ---
  "Matéria Escura": { title: "A Cola do Universo", author: "Cosmologia", category: "Espaço", fact: "85% da matéria do universo é invisível e atravessa você agora.", content: "Não sabemos o que é, apenas o que faz. Sem a matéria escura, as galáxias se despedaçariam girando." },
  "Terra 2.0": { title: "Em Busca de um Lar", author: "Exoplanetas", category: "Espaço", fact: "O telescópio James Webb está analisando atmosferas de exoplanetas em busca de bioassinaturas.", content: "Proxima Centauri b é o candidato mais próximo, mas mundos como TRAPPIST-1e oferecem esperanças de água líquida." },
  "O Big Bang": { title: "O Primeiro Segundo", author: "Origens", category: "Espaço", fact: "O eco do Big Bang ainda é visível na estática de TVs antigas.", content: "Tudo o que existe estava comprimido em um ponto menor que um átomo. A inflação cósmica explica como chegamos aqui." },
  "Motor de Dobra": { title: "Dobra Espacial: Possível?", author: "Física Teórica", category: "Nave", fact: "A métrica de Alcubierre permite viajar mais rápido que a luz sem violar Einstein, dobrando o espaço.", content: "Teoricamente possível, mas exige 'matéria exótica' com massa negativa, algo que ainda não encontramos." },
  "Neutrinos": { title: "Partículas Fantasmas", author: "Física", category: "Partículas", fact: "Trilhões de neutrinos do Sol atravessam seu polegar a cada segundo.", content: "Eles quase não têm massa e não interagem com nada. Detectá-los exige tanques gigantes de água pura no subsolo." },
  "Sinais de Rádio": { title: "Alguém aí?", author: "SETI", category: "Aliens", fact: "O sinal 'Wow!' de 1977 continua sendo o candidato mais forte a contato alienígena.", content: "Ouvimos o céu há 60 anos. O silêncio é assustador (Paradoxo de Fermi), mas só vasculhamos uma fração da galáxia." },
  "A Máquina de Anticítera": { title: "O Computador Grego", author: "História", category: "Arqueologia", fact: "Calculava eclipses e Olimpíadas com engrenagens de bronze há 2000 anos.", content: "Um mecanismo tão avançado que tecnologia similar só apareceu 14 séculos depois na Europa." },
  "Tumbas Perdidas": { title: "Segredos da Areia", author: "Egiptologia", category: "Arqueologia", fact: "A tumba de Cleópatra nunca foi encontrada e pode estar submersa em Alexandria.", content: "Novos escaneamentos de radar sugerem câmaras ocultas na tumba de Tutancâmon e na Grande Pirâmide." },
  "O Código Voynich": { title: "O Livro Impossível", author: "Criptografia", category: "Mistério", fact: "Nem a IA moderna conseguiu decifrar o manuscrito Voynich do século XV.", content: "Escrito em uma língua desconhecida com ilustrações de plantas inexistentes. Fraude ou conhecimento perdido?" },
  "Newton Oculto": { title: "O Alquimista", author: "História da Ciência", category: "História", fact: "Isaac Newton escreveu mais sobre alquimia e apocalipse bíblico do que sobre física.", content: "O pai da gravidade passou a vida tentando transformar chumbo em ouro e buscando a Pedra Filosofal." },
  "Pirâmides": { title: "Engenharia Impossível", author: "Construção Antiga", category: "Egito", fact: "As pirâmides eram originalmente brancas e polidas, brilhando como joias no deserto.", content: "A precisão do alinhamento com o norte verdadeiro é maior que a de edifícios modernos. Como fizeram sem lasers?" },
  "Da Vinci": { title: "O Homem do Futuro", author: "Arte e Ciência", category: "Renascença", fact: "Da Vinci projetou tanques, helicópteros e robôs 400 anos antes de existirem.", content: "Seus cadernos revelam que a arte era apenas uma ferramenta para entender a anatomia e a física da natureza." },
  "Pólvora": { title: "A Invenção Explosiva", author: "Química Antiga", category: "China", fact: "Alquimistas chineses descobriram a pólvora tentando criar o elixir da imortalidade.", content: "Mudou a guerra para sempre, acabando com a era dos castelos e cavaleiros blindados." }
};

const MAGAZINE_COVERS = [
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

// Utilitários
const getRandomFallback = () => {
    // Retorna um artigo aleatório da biblioteca estática (transformando em array)
    const articles = Object.values(STATIC_CONTENT_LIBRARY);
    return articles[Math.floor(Math.random() * articles.length)];
};

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

  // NOVA FUNÇÃO: Abre artigos estáticos (manchetes da capa)
  const handleOpenStaticArticle = (title) => {
    const article = STATIC_CONTENT_LIBRARY[title];
    if (article) {
        setCurrentArticle({
            ...article,
            // Se não tiver imagem definida na biblioteca, usa uma genérica ou tenta buscar do Pollinations
            imageUrl: article.imageUrl || `https://image.pollinations.ai/prompt/${article.title}%20${article.category}%20realistic%20high%20quality?width=1600&height=900&nologo=true`
        });
        setView('article');
    } else {
        // Fallback se não encontrar o título exato
        fetchGeminiArticle(); 
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
        console.warn("Falha no Flash 1.5, tentando Flash 8b...", e1);
        try {
            generatedText = await tryModel('gemini-1.5-flash-8b');
        } catch (e2) {
            console.warn("Falha no Flash 8b, tentando Pro 1.0...", e2);
            try {
                generatedText = await tryModel('gemini-1.0-pro', prompt + " Responda APENAS O JSON, sem introdução.");
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
      const fallback = getRandomFallback();
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
            alt={currentArticle.imageKeyword}
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
            <div className="prose prose-base md:prose-lg prose-stone prose-headings:font-serif first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-red-900">
                {currentArticle.content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx} className="mb-6 leading-relaxed text-stone-800">{paragraph}</p>
                ))}
            </div>
            
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
