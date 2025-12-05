import { 
  Brain, Atom, Globe, Leaf, Cpu, Rocket, History, Zap, FlaskConical, 
  Microscope, Sparkles, BookOpen 
} from 'lucide-react';

/**
 * 📚 BIBLIOTECA DE CONTEÚDO ESTÁTICO (COMPLETA E CIENTIFICAMENTE APROFUNDADA)
 * Todas as imagens usam Pollinations.ai e todos os artigos têm profundidade editorial.
 */
export const STATIC_CONTENT_LIBRARY = {
  // =================================================================================
  // CAPA AUTO (Veículos & Engenharia)
  // =================================================================================
  "Revolução Elétrica": {
    title: "Eletromagnetismo Aplicado: O Fim da Combustão",
    author: "Eng. Carlos Pista",
    category: "Física Automotiva",
    fact: "Motores elétricos superam 90% de eficiência térmica, enquanto motores a combustão desperdiçam cerca de 70% da energia química em calor (Segunda Lei da Termodinâmica).",
    imageKeyword: "electric car chassis platform battery",
    imageUrl: "https://image.pollinations.ai/prompt/electric%20car%20skateboard%20chassis%20platform%20battery%20pack%20technical%20cutaway%203d%20render%20realistic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/electric%20motor%20stator%20rotor%20copper%20windings%20technical%20closeup?width=1600&height=900&nologo=true", caption: "O estator e o rotor: interação de campos magnéticos gerando torque." },
        { url: "https://image.pollinations.ai/prompt/electric%20car%20fast%20charging%20station%20futuristic%20night%20glowing%20cables?width=1600&height=900&nologo=true", caption: "Inversores de frequência convertem DC da bateria em AC para o motor." }
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
    imageUrl: "https://image.pollinations.ai/prompt/Honda%20Prelude%20Concept%202024%20white%20coupe%20sleek%20modern%20car%20studio%20lighting%20front%20angle%20realistic%204k?width=1600&height=900&nologo=true", 
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/car%20aerodynamics%20wind%20tunnel%20smoke%20streamlines%20low%20drag%20coefficient?width=1600&height=900&nologo=true", caption: "Aerodinâmica ativa: reduzindo o coeficiente de arrasto (Cd)." },
        { url: "https://image.pollinations.ai/prompt/hybrid%20car%20powertrain%20engine%20and%20electric%20motor%20x-ray%20view?width=1600&height=900&nologo=true", caption: "O motor elétrico atua como gerador nas desacelerações." }
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
    imageUrl: "https://image.pollinations.ai/prompt/Toyota%20GR%20Yaris%20white%20rally%20hatchback%20drifting%20on%20tarmac%20action%20shot%20smoke%20realistic%204k?width=1600&height=900&nologo=true", 
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/car%20engine%20turbocharger%20red%20hot%20glowing%20technical%20closeup?width=1600&height=900&nologo=true", caption: "Downsizing: Menor volume, maior pressão interna e eficiência térmica." },
        { url: "https://image.pollinations.ai/prompt/car%20chassis%20suspension%20differential%20technical%20view?width=1600&height=900&nologo=true", caption: "Diferenciais Torsen distribuem torque mecanicamente." }
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
    imageUrl: "https://image.pollinations.ai/prompt/autonomous%20car%20lidar%20vision%20point%20cloud%20city%20street%20night%20view?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/lidar%20sensor%203d%20scan%20city%20wireframe%20view?width=1600&height=900&nologo=true", caption: "Nuvem de Pontos: A representação vetorial 3D do mundo." },
        { url: "https://image.pollinations.ai/prompt/self%20driving%20car%20interior%20futuristic%20passenger%20reading?width=1600&height=900&nologo=true", caption: "Inferência Bayesiana: O carro calcula probabilidades constantes de colisão." }
    ],
    content: `Como um carro "vê"? Diferente de nós, que interpretamos fótons passivamente, um carro autônomo usa sensoriamento ativo. O sensor LIDAR (Light Detection and Ranging) dispara milhões de pulsos de laser infravermelho por segundo. Usando a velocidade da luz como constante (c ≈ 300.000 km/s), o computador calcula a distância exata de cada obstáculo medindo o tempo de retorno do pulso (d = c * t / 2).

    Isso gera uma "nuvem de pontos" 3D de alta precisão. Mas ver não é entender. É aqui que entram as Redes Neurais Convolucionais (CNNs). Inspiradas no córtex visual humano, essas estruturas matemáticas aplicam filtros em camadas para identificar padrões: bordas, formas e, finalmente, objetos complexos como "pedestre" ou "semáforo".

    O grande desafio científico não é a percepção, mas a predição. O carro usa Inferência Bayesiana para calcular probabilidades: "Qual a chance estatística daquele ciclista virar à esquerda?". É um problema de física estocástica em tempo real, onde o computador precisa modelar o comportamento caótico humano dentro de leis de movimento determinísticas.` 
  },
  "Baterias Sólidas": { 
    title: "Eletroquímica de Estado Sólido", 
    author: "Lab Tech", 
    category: "Química", 
    fact: "Eletrólitos sólidos de cerâmica ou polímero previnem a formação de dendritos de lítio, que são os causadores de curtos-circuitos internos e incêndios em baterias líquidas.",
    imageUrl: "https://image.pollinations.ai/prompt/solid%20state%20battery%20structure%20diagram%20layers%20ceramic%20electrolyte%203d?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/lithium%20dendrites%20microscope%20view%20battery%20failure?width=1600&height=900&nologo=true", caption: "Dendritos: agulhas de lítio que perfuram baterias comuns." },
        { url: "https://image.pollinations.ai/prompt/future%20battery%20lab%20clean%20room%20manufacturing?width=1600&height=900&nologo=true", caption: "Fabricação em sala limpa de eletrólitos cerâmicos." }
    ],
    content: `A bateria de estado sólido representa o "Santo Graal" da eletrificação. As baterias atuais de íon-lítio utilizam um eletrólito líquido orgânico para transportar íons entre o cátodo e o ânodo. Esse líquido é volátil e inflamável. Baterias de estado sólido substituem esse líquido por um condutor iônico sólido, feito de compostos cerâmicos (como óxidos de lítio-lantânio-zircônio) ou polímeros avançados.

    A principal vantagem física é a densidade de energia. Com um eletrólito sólido estável, podemos eliminar o ânodo de grafite (que é volumoso) e usar lítio metálico puro. Isso aumenta drasticamente a capacidade de armazenamento de energia por quilograma, permitindo carros que rodam 1000km com uma carga ou baterias de celular que duram dias.

    Além disso, a segurança é transformada. Sem líquidos inflamáveis, o risco de "fuga térmica" (incêndios que se auto-alimentam) é quase eliminado. A estrutura sólida também suporta carregamento muito mais rápido, pois os íons não precisam navegar por um líquido viscoso, movendo-se através da estrutura cristalina do sólido com menor resistência.` 
  },
  "Hidrogênio": { 
    title: "Célula de Combustível: Eletrólise Reversa", 
    author: "Energia H2", 
    category: "Físico-Química", 
    fact: "A reação na célula de combustível (2H2 + O2 → 2H2O) libera elétrons que formam a corrente elétrica, tendo como único subproduto vapor de água.",
    imageUrl: "https://image.pollinations.ai/prompt/hydrogen%20fuel%20cell%20diagram%20proton%20exchange%20membrane%20scientific?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/hydrogen%20car%20refueling%20station%20futuristic%20design?width=1600&height=900&nologo=true", caption: "Abastecimento em minutos: a vantagem sobre as baterias." },
        { url: "https://image.pollinations.ai/prompt/molecular%20view%20hydrogen%20oxygen%20water%20reaction?width=1600&height=900&nologo=true", caption: "A química limpa: H2 encontra O2 e gera eletricidade." }
    ],
    content: `Carros a hidrogênio (FCEV) são frequentemente mal compreendidos; eles não queimam o gás como um motor a combustão queima gasolina. Eles realizam uma "queima fria" eletroquímica dentro de uma célula de combustível. O hidrogênio (H2) armazenado em tanques de alta pressão é direcionado para o ânodo da célula.

    Lá, um catalisador (geralmente platina) divide o hidrogênio em prótons (H+) e elétrons (e-). A mágica acontece na membrana de troca de prótons (PEM), que permite a passagem apenas dos prótons. Os elétrons, bloqueados, são forçados a percorrer um circuito externo, gerando a corrente elétrica que move o motor do carro.

    Do outro lado, no cátodo, os elétrons retornam e se encontram com os prótons e o oxigênio do ar, formando H2O (água) como único escape. É uma tecnologia fascinante para transporte pesado (caminhões, navios), onde o peso das baterias elétricas seria proibitivo. O desafio atual é produzir hidrogênio "verde" (usando energia renovável para quebrar água) em vez de hidrogênio "cinza" (extraído de gás natural).` 
  },
  "Carros Voadores": { 
    title: "eVTOLs e a Física do Voo Distribuído", 
    author: "AeroDynamics", 
    category: "Engenharia Aeroespacial", 
    fact: "O uso de múltiplos rotores elétricos pequenos permite controle de atitude instantâneo variando o torque de cada motor, eliminando a complexidade mecânica dos helicópteros (prato oscilante).", 
    imageUrl: "https://image.pollinations.ai/prompt/eVTOL%20flying%20taxi%20future%20city%20skyline%20landing%20pad%20realistic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/drone%20rotor%20aerodynamics%20airflow%20simulation%20cfd?width=1600&height=900&nologo=true", caption: "Dinâmica dos Fluidos Computacional (CFD) otimizando o fluxo de ar." },
        { url: "https://image.pollinations.ai/prompt/electric%20aviation%20battery%20pack%20integration%20wing?width=1600&height=900&nologo=true", caption: "Baterias estruturais: armazenando energia dentro das asas." }
    ],
    content: `Os "carros voadores" modernos não são carros com asas, são eVTOLs (Electric Vertical Take-off and Landing). A viabilidade dessa tecnologia depende da densidade de potência dos motores elétricos. Diferente de aviões que usam asas para sustentação eficiente (onde a razão Sustentação/Arrasto é alta), a decolagem vertical exige força bruta: o empuxo deve ser maior que o peso total da aeronave (T/W > 1).

    A inovação chave é a Propulsão Elétrica Distribuída (DEP). Em vez de um ou dois grandes motores (ponto único de falha), eVTOLs usam dezenas de pequenos motores elétricos espalhados pela fuselagem e asas. Isso cria redundância de segurança crítica: se um motor falha, os outros compensam eletronicamente em milissegundos, mantendo a aeronave estável.

    Além disso, motores elétricos não sofrem com a perda de eficiência em escalas menores, ao contrário de turbinas a jato. Isso permite designs aerodinâmicos exóticos que integram propulsão com sustentação, como soprar ar sobre as asas para aumentar a sustentação em baixas velocidades (efeito de aumento de sustentação). O gargalo, novamente, é a densidade de energia das baterias (Wh/kg), que precisa ser cerca de 5x maior que a atual para viabilizar voos de longa distância.` 
  },

  // =================================================================================
  // ARTIGOS EXPANDIDOS (OUTROS TEMAS)
  // =================================================================================
  "Fotossíntese Artificial": {
    title: "Fotossíntese Artificial: Hackeando a Natureza",
    author: "Eco Lab",
    category: "Química Verde",
    fact: "Sistemas biônicos já conseguem converter luz solar em combustível com 10x mais eficiência que uma folha natural.",
    imageKeyword: "artificial leaf photosynthesis lab energy",
    imageUrl: "https://image.pollinations.ai/prompt/futuristic%20artificial%20leaf%20device%20in%20water%20producing%20bubbles%20sunlight%20lab?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/molecular%20catalyst%20splitting%20water%20hydrogen%20oxygen?width=1600&height=900&nologo=true", caption: "Quebra da água: hidrogênio limpo a partir do sol." },
        { url: "https://image.pollinations.ai/prompt/solar%20fuel%20production%20plant%20desert%20futuristic?width=1600&height=900&nologo=true", caption: "Fazendas de combustível solar: o futuro da energia." }
    ],
    content: `As plantas fazem parecer fácil: pegar luz do sol, água e CO2 e transformar em energia química (açúcar). Mas a "Fotossíntese Artificial" tenta fazer algo ainda melhor: criar combustíveis líquidos densos, como metanol ou hidrogênio, diretamente do ar e do sol, pulando a etapa de cultivar biomassa.
    
    O segredo está nos catalisadores. A natureza usa enzimas complexas e frágeis. Cientistas estão desenvolvendo materiais semicondutores (como óxidos de metal) que agem como uma "folha biônica". Quando a luz atinge o material, ele gera uma carga elétrica que quebra a molécula de água em oxigênio e hidrogênio. O hidrogênio pode ser usado como combustível ou combinado com CO2 capturado para criar hidrocarbonetos sintéticos.
    
    O impacto potencial é imenso: um ciclo de carbono fechado. Queimamos o combustível no carro, liberamos CO2, e a folha artificial captura esse mesmo CO2 para fazer mais combustível. Diferente de baterias que apenas armazenam energia, isso cria um vetor de energia densa, essencial para aviões e navios que não podem carregar baterias pesadas.`
  },
  "Pergaminhos de Herculano e IA": {
    title: "O Desafio do Vesúvio: Lendo Carvão",
    author: "História Viva",
    category: "História & Tech",
    fact: "A IA detectou tinta em papiros carbonizados identificando mudanças microscópicas na textura das fibras, invisíveis a olho nu.",
    imageKeyword: "burnt scroll ancient rome ai scanning",
    imageUrl: "https://image.pollinations.ai/prompt/ancient%20burnt%20scrolls%20digital%20scanning%20laser%20revealing%20letters%20herculaneum?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/ct%20scan%203d%20model%20unrolling%20scroll%20virtually?width=1600&height=900&nologo=true", caption: "Desenrolamento virtual: geometria computacional extrema." },
        { url: "https://image.pollinations.ai/prompt/greek%20philosophy%20text%20emerging%20from%20black%20background?width=1600&height=900&nologo=true", caption: "Filosofia epicurista recuperada após 2000 anos." }
    ],
    content: `Quando o Monte Vesúvio entrou em erupção em 79 d.C., soterrou a cidade de Herculano. Uma biblioteca inteira de rolos de papiro foi carbonizada instantaneamente pelo calor, transformando-se em blocos de carvão frágeis que se desintegram ao toque. Por séculos, seu conteúdo foi considerado perdido.
    
    A salvação veio da física de partículas e da inteligência artificial. Usando aceleradores de partículas (síncrotrons), cientistas criaram tomografias de raios-X de altíssima resolução dos rolos fechados. O problema: a tinta romana era feita de carvão, assim como o papel queimado, então não havia contraste químico óbvio.
    
    Foi aí que entrou a IA. Algoritmos de aprendizado de máquina foram treinados para detectar a textura sutilmente diferente ("crackle pattern") onde a tinta havia secado na superfície da fibra do papiro. Em 2023, o "Vesuvius Challenge" premiou estudantes que conseguiram decifrar as primeiras palavras ("Porphyras" - púrpura) e, depois, parágrafos inteiros sobre música e prazer. Estamos prestes a recuperar uma biblioteca perdida da antiguidade clássica.`
  },
  "A Rede Micelial: Internet da Floresta": {
    title: "Wood Wide Web: A Consciência da Floresta",
    author: "Bio Fungi",
    category: "Biologia",
    fact: "Árvores usam fungos subterrâneos para enviar alertas químicos de pragas para vizinhas a quilômetros de distância.",
    imageKeyword: "mycelium network forest roots glowing",
    imageUrl: "https://image.pollinations.ai/prompt/underground%20mycelium%20network%20connecting%20tree%20roots%20glowing%20bio%20luminescence?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/microscope%20fungi%20hyphae%20connecting%20plant%20roots?width=1600&height=900&nologo=true", caption: "Hifas: os cabos de fibra óptica biológicos." },
        { url: "https://image.pollinations.ai/prompt/mother%20tree%20forest%20ecosystem%20diagram%20nutrients?width=1600&height=900&nologo=true", caption: "A 'Árvore Mãe' redistribuindo recursos." }
    ],
    content: `Debaixo de cada passo que você dá na floresta, existe uma rede complexa e pulsante que conecta tudo. Não são apenas raízes; é o micélio, uma rede vasta de filamentos de fungos que vivem em simbiose com as plantas. As árvores fornecem açúcar (carbono) aos fungos, e em troca, os fungos mineram o solo em busca de água, nitrogênio e fósforo, entregando-os diretamente nas raízes.
    
    Mas a "Wood Wide Web" é mais do que um mercado de trocas; é uma rede social. A ecologista Suzanne Simard descobriu que árvores usam essa rede para se comunicar. Se um pinheiro é atacado por besouros, ele envia sinais de estresse pela rede. As árvores vizinhas, alertadas, começam a produzir enzimas defensivas antes mesmo de verem o inseto.
    
    Ainda mais surpreendente é o altruísmo aparente. Árvores grandes e antigas ("Árvores Mãe") atuam como hubs, bombeando nutrientes através da rede fúngica para mudas jovens que crescem na sombra e não conseguiriam fazer fotossíntese suficiente sozinhas. A floresta não é uma coleção de indivíduos competindo, mas um superorganismo cooperativo.`
  },
  "Computação Quântica: O Fim da Criptografia?": {
    title: "O Apocalipse Criptográfico Quântico",
    author: "Alan T.",
    category: "Tecnologia",
    fact: "Um computador quântico estável poderia fatorar números primos em segundos, quebrando a base matemática de toda a segurança bancária atual.",
    imageKeyword: "quantum computer chip gold cryostat",
    imageUrl: "https://image.pollinations.ai/prompt/quantum%20computer%20inside%20cryostat%20gold%20wires%20qubits%20futuristic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/bloch%20sphere%20qubit%20superposition%20visualization?width=1600&height=900&nologo=true", caption: "Superposição: 0 e 1 ao mesmo tempo." },
        { url: "https://image.pollinations.ai/prompt/post%20quantum%20cryptography%20lattice%20math%20abstract?width=1600&height=900&nologo=true", caption: "Criptografia baseada em reticulados: a defesa futura." }
    ],
    content: `Toda a segurança digital moderna, do seu WhatsApp à sua conta bancária, depende de um problema matemático difícil: a fatoração de números primos gigantes (RSA). Computadores clássicos levariam trilhões de anos para testar todas as combinações e quebrar essa chave. Mas a física quântica muda as regras do jogo.
    
    Graças ao princípio da superposição (onde um qubit pode ser 0 e 1 simultaneamente), um computador quântico pode explorar vastos espaços de soluções de uma só vez. O matemático Peter Shor criou um algoritmo em 1994 que prova que uma máquina quântica poderia quebrar o RSA quase instantaneamente. Esse evento hipotético é chamado de "Q-Day".
    
    O mundo está numa corrida. De um lado, engenheiros tentam estabilizar qubits (que são sensíveis a qualquer ruído térmico). Do outro, criptógrafos estão criando a "Criptografia Pós-Quântica", baseada em problemas matemáticos geométricos multidimensionais que se acredita serem imunes até mesmo à força bruta quântica. A pergunta não é se a criptografia atual vai cair, mas se teremos o escudo pronto antes da espada ser forjada.`
  },
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
    content: `A segurança pública entrou na era do "Policiamento Preditivo". Não se trata mais apenas de reagir ao crime, mas de antecipá-lo usando Big Data e IA. No Brasil, o destaque é o **Projeto Córtex**, uma plataforma de vigilância integrada que cruza dados de leitura de placas (LPR) com bancos de dados criminais em tempo real. O sistema utiliza algoritmos de reconhecimento de padrões para identificar comportamentos anômalos — como um veículo circulando repetidamente em uma área bancária — antes que o crime ocorra.

    Globalmente, a tecnologia **ABIS (Automated Biometric Identification System)** evoluiu muito além das impressões digitais. Agências como a Interpol e o FBI agora utilizam a análise de marcha (gait analysis). A física por trás disso envolve a modelagem cinemática do esqueleto humano; como cada pessoa possui uma biomecânica única ao caminhar (distribuição de peso, balanço dos braços e cadência), câmeras de alta resolução podem identificar suspeitos mesmo com o rosto coberto, analisando vetores de movimento com precisão de 99,6%.

    No entanto, a "vigilância de dados" levanta questões sobre privacidade e criptografia. Softwares modernos de inteligência, como o Pegasus (israelense), exploram vulnerabilidades "zero-day" em smartphones para transformar microfones e câmeras em dispositivos de escuta passiva. A engenharia reversa desses malwares revela um nível de sofisticação onde o código se autodestrói se detectar que está sendo analisado em uma sandbox.`
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
    content: `A nova fronteira da dieta não é sobre contar calorias, mas sobre cultivar o "segundo cérebro". Estudos recentes de 2024/2025 solidificaram o conceito de **Psicobióticos**: bactérias probióticas específicas que, quando ingeridas, alteram a química cerebral. O mecanismo chave é o **Nervo Vago**, o maior nervo craniano, que atua como um cabo de fibra óptica bidirecional conectando o sistema nervoso entérico ao sistema nervoso central.

    A novidade reside na identificação de cepas como *Lactobacillus rhamnosus* e *Bifidobacterium longum*, que metabolizam fibras dietéticas em ácidos graxos de cadeia curta (como o butirato). O butirato fortalece a barreira hematoencefálica e reduz a neuroinflamação. Mais impressionante é a capacidade dessas bactérias de sintetizar neurotransmissores como GABA e serotonina. Dietas ricas em prebióticos (alimentos para essas bactérias) demonstraram, em ensaios clínicos duplo-cegos, uma redução de até 40% nos níveis de cortisol (hormônio do estresse) circulante.

    Isso muda o paradigma da psiquiatria nutricional. Não estamos apenas "comendo saudável", estamos modulando a expressão gênica. A ingestão de alimentos fermentados e fibras complexas não digeríveis pelo humano (mas adoradas pelas bactérias) cria um ambiente onde a microbiota regula ativamente o humor e a cognição, sugerindo que a depressão e a ansiedade podem ter raízes metabólicas inflamatórias no trato digestivo.`
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
  "Edição Genética Prime": {
    title: "Edição Genética Prime",
    author: "Jennifer D.",
    category: "Biologia",
    fact: "O 'Prime Editing' é mais preciso que o CRISPR original.",
    imageKeyword: "dna editing crispr cas9 molecular",
    imageUrl: "https://image.pollinations.ai/prompt/dna%20strand%20being%20edited%20by%20nanobot%20molecular%20biology%20blue%20medical?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/cas9%20protein%20cutting%20dna%20molecular%20structure?width=800&height=600&nologo=true", caption: "A proteína Cas9: a tesoura molecular guiada por RNA." },
        { url: "https://image.pollinations.ai/prompt/genetic%20disease%20correction%20cell%20therapy?width=800&height=600&nologo=true", caption: "Terapias gênicas: corrigindo a 'letras' erradas na fonte." }
    ],
    content: `O CRISPR-Cas9 revolucionou a biologia ao permitir cortar o DNA em locais específicos. No entanto, ele age como uma tesoura bruta: corta a dupla hélice e espera que a célula conserte o estrago, o que às vezes gera erros (indels). A nova técnica, chamada **Prime Editing**, age mais como um processador de texto com função "localizar e substituir".

    Desenvolvido no Instituto Broad do MIT e Harvard, o Prime Editing usa uma enzima Cas9 modificada (que corta apenas uma fita do DNA) fundida a uma transcriptase reversa. Ela carrega consigo não apenas o guia de onde cortar, mas também o modelo da nova sequência genética correta. A enzima então escreve a nova informação diretamente no local alvo.

    Essa precisão cirúrgica permite corrigir teoricamente cerca de 89% das 75.000 variantes genéticas conhecidas associadas a doenças humanas, incluindo anemia falciforme e fibrose cística, sem o risco de criar mutações indesejadas em outras partes do genoma ("efeitos off-target"), que era o maior medo do CRISPR clássico.`
  },
  "O Motor Scramjet": {
    title: "O Motor Scramjet",
    author: "Aero Space",
    category: "Física & Eng",
    fact: "Scramjets respiram ar supersônico e podem atingir Mach 10.",
    imageKeyword: "hypersonic plane scramjet shockwave",
    imageUrl: "https://image.pollinations.ai/prompt/hypersonic%20aircraft%20shockwaves%20high%20atmosphere%20edge%20of%20space%20realistic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/cfd%20simulation%20hypersonic%20airflow%20scramjet%20inlet?width=800&height=600&nologo=true", caption: "Simulação de fluxo de ar a 7.000 km/h." },
        { url: "https://image.pollinations.ai/prompt/sr-71%20blackbird%20successor%20concept%20art?width=800&height=600&nologo=true", caption: "O sonho de cruzar o Atlântico em 1 hora." }
    ],
    content: `Motores a jato comuns (turbojatos) usam lâminas de turbina para comprimir o ar antes de misturá-lo com combustível. O problema é que, acima de Mach 3 (3x a velocidade do som), o ar fica tão quente e rápido que derreteria as turbinas. É aqui que entra o **Scramjet** (Supersonic Combustion Ramjet).

    O Scramjet é mecanicamente simples: é um tubo vazio, projetado com geometria precisa. Ele usa a própria velocidade do veículo para "atropelar" o ar, comprimindo-o através de ondas de choque. O desafio é que o ar passa pelo motor em velocidades supersônicas. Injetar e queimar combustível nesse fluxo é comparado a "tentar acender um fósforo num furacão".

    A tecnologia exige materiais cerâmicos avançados para resistir ao calor do atrito atmosférico. Veículos hipersônicos equipados com scramjets poderiam voar de Nova York a Londres em menos de uma hora ou servir como primeiro estágio reutilizável para lançamentos espaciais, tornando o acesso à órbita muito mais barato e frequente.`
  },
  "Arqueologia LiDAR na Amazônia": {
    title: "Arqueologia LiDAR na Amazônia",
    author: "Indy J.",
    category: "História",
    fact: "Lasers revelaram cidades perdidas sob a copa das árvores da Amazônia.",
    imageKeyword: "amazon jungle lidar scan hidden city",
    imageUrl: "https://image.pollinations.ai/prompt/amazon%20rainforest%20aerial%20lidar%20scan%20revealing%20ancient%20pyramids%20geometric%20shapes?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/digital%20topography%20map%20ancient%20roads%20jungle?width=800&height=600&nologo=true", caption: "Topografia digital revelando estradas antigas." },
        { url: "https://image.pollinations.ai/prompt/ancient%20amazonian%20civilization%20reconstruction%20art?width=800&height=600&nologo=true", caption: "Reconstrução artística de uma metrópole amazônica." }
    ],
    content: `Durante séculos, acreditou-se que a Amazônia era uma floresta virgem, incapaz de sustentar grandes civilizações devido ao solo pobre. A tecnologia LiDAR (Light Detection and Ranging) mudou tudo. Ao disparar milhões de lasers de um avião, cientistas conseguem "ver" através da densa vegetação e mapear o relevo do solo com precisão centimétrica.

    O que eles encontraram reescreve a história das Américas. Na Bolívia (cultura Casarabe) e no Brasil (Alto Xingu), o LiDAR revelou vastas redes urbanas com pirâmides de terra de até 22 metros de altura, quilômetros de estradas elevadas, canais e reservatórios de água. Essas "cidades-jardim" abrigavam milhões de pessoas muito antes da chegada dos europeus.

    Essas descobertas provam que a Amazônia não é intocada, mas sim uma paisagem cultural, manejada por milênios. Os povos antigos enriqueciam o solo criando a "Terra Preta de Índio" e plantavam árvores frutíferas em massa. O LiDAR nos mostra que a maior floresta do mundo esconde as ruínas de uma civilização complexa e sustentável que ainda temos muito a aprender.`
  },
  "O Zumbido de Fundo: Ondas Gravitacionais": {
    title: "O Zumbido de Fundo: Ondas Gravitacionais",
    author: "Dr. Cosmos",
    category: "Astronomia",
    fact: "O universo tem um 'som' de fundo causado pela colisão de buracos negros supermassivos.",
    imageKeyword: "gravitational waves space ripple",
    imageUrl: "https://image.pollinations.ai/prompt/gravitational%20waves%20distorting%20space%20time%20grid%20black%20holes%20merging%20cosmic%20scale?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/pulsar%20timing%20array%20galaxy%20grid%20visualization?width=800&height=600&nologo=true", caption: "Pulsar Timing Array: usando estrelas mortas como detector." },
        { url: "https://image.pollinations.ai/prompt/supermassive%20black%20hole%20binary%20merger%20accretion%20disk?width=800&height=600&nologo=true", caption: "A dança final de dois buracos negros galácticos." }
    ],
    content: `Em 2015, o LIGO detectou ondas gravitacionais pela primeira vez: um "chirp" curto causado pela fusão de dois buracos negros estelares. Mas os astrônomos buscavam algo maior: o "fundo estocástico" de ondas gravitacionais. Imagine o LIGO ouvindo um grito isolado; o fundo estocástico é o burburinho constante de uma festa lotada.

    Em 2023, consórcios globais (como o NANOGrav) anunciaram evidências desse zumbido. Eles não usaram detectores na Terra, mas a própria galáxia como detector. Monitoraram dezenas de Pulsares (estrelas de nêutrons que giram e piscam com precisão de relógios atômicos) por 15 anos. Quando uma onda gravitacional gigante passa pela Terra, ela estica e comprime o espaço-tempo, atrasando ou adiantando ligeiramente a chegada dos pulsos dessas estrelas.

    A fonte desse "ruído de fundo" são provavelmente pares de buracos negros supermassivos (com bilhões de vezes a massa do Sol) orbitando um ao outro no centro de galáxias que estão se fundindo. Essa descoberta abre uma nova janela para o universo, permitindo-nos "ouvir" a evolução das galáxias desde o início dos tempos.`
  },

  // =================================================================================
  // CAPA CLASSIC (Scientific American)
  // =================================================================================
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
  "Cura pelo Som": { 
    title: "Ultrassom Focado (HIFU)", 
    author: "Medicina", 
    category: "Biofísica", 
    fact: "O som pode gerar calor intenso em um ponto preciso dentro do corpo.", 
    imageUrl: "https://image.pollinations.ai/prompt/focused%20ultrasound%20medical%20therapy%20glowing%20blue%20waves?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/ultrasound%20waves%20targeting%20tumor%20cells?width=800&height=600&nologo=true", caption: "Ondas sonoras focadas destruindo células-alvo." },
      { url: "https://image.pollinations.ai/prompt/medical%20ultrasound%20device%20futuristic%20interface?width=800&height=600&nologo=true", caption: "Tecnologia de precisão não invasiva." }
    ], 
    content: `O som é geralmente associado à comunicação ou música, mas fisicamente, é uma onda de pressão mecânica. Quando aumentamos a frequência para a faixa do ultrassom e focamos múltiplos feixes em um único ponto (como uma lupa foca a luz do sol), criamos uma ferramenta cirúrgica poderosa chamada HIFU (High-Intensity Focused Ultrasound).
    
    No ponto focal, a energia acústica causa uma vibração molecular tão intensa que gera calor imediato (ablação térmica) ou cavitação (formação de bolhas explosivas). Isso permite "cozinhar" tumores profundos no fígado ou útero sem fazer um único corte na pele do paciente. É a realização da cirurgia não-invasiva perfeita.
    
    Além da destruição de tecidos, o ultrassom focado de baixa intensidade está revolucionando a neurologia. Ele pode ser usado para abrir temporariamente a barreira hematoencefálica (uma "muralha" que protege o cérebro, mas impede a entrada de remédios). Isso permite que drogas de quimioterapia ou anticorpos para Alzheimer entrem no cérebro apenas nas áreas desejadas, guiadas por ressonância magnética em tempo real.` 
  },
  "DNA Digital": { 
    title: "Armazenamento em DNA", 
    author: "Bio-Tech", 
    category: "Genética", 
    fact: "1 grama de DNA pode armazenar 215 petabytes de dados.", 
    imageUrl: "https://image.pollinations.ai/prompt/dna%20data%20storage%20binary%20code%20double%20helix%20blue%20tech?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/dna%20sequencing%20data%20flow?width=800&height=600&nologo=true", caption: "Sequenciamento de dados em estrutura biológica." },
      { url: "https://image.pollinations.ai/prompt/bio%20server%20room%20glowing%20vials?width=800&height=600&nologo=true", caption: "O futuro dos data centers: biológicos e compactos." }
    ], 
    content: `Estamos gerando mais dados do que conseguimos armazenar. Discos rígidos e fitas magnéticas degradam-se em poucas décadas e ocupam data centers gigantescos que consomem energia de cidades inteiras. A natureza, no entanto, resolveu o problema do armazenamento de dados há bilhões de anos com o DNA.

    O princípio é converter o sistema binário digital (0s e 1s) para o sistema quaternário biológico (as bases A, C, T, G). Cientistas já codificaram filmes, sistemas operacionais e bibliotecas inteiras em fitas de DNA sintético. A densidade é absurda: uma única gota pode conter exabytes de informação. E, ao contrário de um CD que apodrece, o DNA mantido em local fresco e seco permanece legível por centenas de milhares de anos.

    O gargalo atual é a velocidade e o custo de "escrever" (sintetizar) e "ler" (sequenciar) esse DNA. Atualmente, é um processo químico lento. Mas com o avanço da biotecnologia, o DNA pode se tornar o "microfilme" do futuro, usado para arquivamento frio de longo prazo, garantindo que o conhecimento humano sobreviva a qualquer apocalipse digital.` 
  },
  "Sonhos Lúcidos": { 
    title: "Consciência no Sono REM", 
    author: "Neurociência", 
    category: "Sono", 
    fact: "O córtex pré-frontal lógico ativa-se durante sonhos lúcidos.", 
    imageUrl: "https://image.pollinations.ai/prompt/lucid%20dreaming%20surreal%20mind%20control%20asleep%20awake%20duality?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/brain%20waves%20rem%20sleep%20graph?width=800&height=600&nologo=true", caption: "Atividade cerebral durante o sono REM lúcido." },
      { url: "https://image.pollinations.ai/prompt/dream%20reality%20check%20hand%20test?width=800&height=600&nologo=true", caption: "Testes de realidade: a chave para a lucidez." }
    ], 
    content: `Sonhar lucidamente é o ato de perceber que se está sonhando e, frequentemente, ganhar controle sobre a narrativa do sonho. Por muito tempo considerado esoterismo, o fenômeno foi comprovado cientificamente nos anos 80 por Stephen LaBerge, que instruiu sonhadores a moverem os olhos em padrões específicos (código Morse) enquanto dormiam.

    Neurobiologicamente, o sonho lúcido é um estado híbrido de consciência. Durante o sono REM normal, o cérebro é hiperativo emocionalmente (amígdala), mas a parte lógica e crítica (córtex pré-frontal) está desligada. Na lucidez, o córtex lógico "acorda" enquanto o corpo permanece paralisado e o sistema sensorial continua alucinando o sonho.

    As aplicações vão além da diversão. Atletas usam sonhos lúcidos para treinar memória muscular (o cérebro ativa os mesmos caminhos motores que na vida real). Terapeutas usam para tratar TEPT (Transtorno de Estresse Pós-Traumático), permitindo que pacientes enfrentem pesadelos recorrentes em um ambiente seguro e controlado.` 
  },
  "Fusão Fria": { 
    title: "Reações Nucleares LENR", 
    author: "Física", 
    category: "Energia", 
    fact: "Efeitos quânticos podem permitir fusão sem calor extremo.", 
    imageUrl: "https://image.pollinations.ai/prompt/cold%20fusion%20apparatus%20electrolysis%20glowing%20palladium?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/palladium%20lattice%20hydrogen%20atoms%20fusion?width=800&height=600&nologo=true", caption: "Átomos de hidrogênio comprimidos na rede de paládio." },
      { url: "https://image.pollinations.ai/prompt/lenr%20reactor%20prototype%20clean%20energy?width=800&height=600&nologo=true", caption: "Protótipos modernos de reatores LENR." }
    ], 
    content: `A fusão nuclear é o processo que alimenta o Sol: unir átomos leves para liberar energia. Isso geralmente exige temperaturas de milhões de graus. A "Fusão a Frio", proposta em 1989, sugeria que isso poderia ocorrer em temperatura ambiente dentro de uma estrutura metálica de paládio eletrolisado. O anúncio foi prematuro, mas a ideia persiste.

    O conceito envolve usar a estrutura cristalina de metais para "espremer" átomos de hidrogênio tão próximos uns dos outros que o "tunelamento quântico" permita a fusão sem a necessidade de calor extremo. Se funcionasse, seria a fonte de energia definitiva.

    Hoje, o campo foi renomeado para LENR (Low Energy Nuclear Reactions). Laboratórios sérios estão observando excesso de calor inexplicável e transmutação de elementos em experimentos controlados. Se o mecanismo for decifrado e ampliado, teríamos baterias capazes de alimentar uma casa por anos, sem radiação perigosa ou lixo nuclear.` 
  },
  "Núcleo Parou?": { 
    title: "Oscilação do Núcleo Terrestre", 
    author: "Geofísica", 
    category: "Terra", 
    fact: "O núcleo interno da Terra gira em velocidade diferente da crosta.", 
    imageUrl: "https://image.pollinations.ai/prompt/earth%20core%20rotation%20seismic%20waves%20geophysics%20diagram?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/seismic%20waves%20earth%20interior%20paths?width=800&height=600&nologo=true", caption: "Ondas sísmicas mapeando o interior do planeta." },
      { url: "https://image.pollinations.ai/prompt/earth%20magnetic%20field%20lines%20core%20dynamo?width=800&height=600&nologo=true", caption: "O campo magnético gerado pelo núcleo dinâmico." }
    ], 
    content: `Em 2023, manchetes alarmantes diziam que o núcleo da Terra havia "parado". A realidade científica é menos catastrófica. O núcleo interno da Terra é desacoplado do manto pelo núcleo externo líquido, permitindo que ele gire em velocidade diferente da crosta.

    Analisando décadas de dados de ondas sísmicas, cientistas notaram padrões de interferência mudando. Isso indica que o núcleo interno oscila: ele gira um pouco mais rápido que a superfície por algumas décadas, desacelera até parar em relação à superfície, e então gira um pouco mais devagar.

    Esse ciclo de oscilação dura cerca de 70 anos e está intimamente ligado a mudanças sutis na duração do dia (na ordem de milissegundos) e na intensidade do campo magnético da Terra. Não é um sinal de apocalipse, mas sim a respiração geológica profunda de um planeta vivo e dinâmico.` 
  },
  "Matéria Escura": { 
    title: "Massa Oculta: A Gravidade Sem Fonte", 
    author: "Vera Rubin", 
    category: "Astrofísica", 
    fact: "A velocidade orbital das estrelas nas bordas das galáxias viola as Leis de Kepler, a menos que exista 5x mais massa do que vemos.", 
    imageUrl: "https://image.pollinations.ai/prompt/dark%20matter%20web%20universe%20structure%20purple%20filaments?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/galaxy%20rotation%20curve%20graph%20dark%20matter?width=800&height=600&nologo=true", caption: "A curva de rotação galáctica: a prova da massa invisível." },
      { url: "https://image.pollinations.ai/prompt/gravitational%20lensing%20dark%20matter%20cluster?width=800&height=600&nologo=true", caption: "Lentes gravitacionais revelando matéria escura." }
    ], 
    content: `A Matéria Escura é um "tapa-buraco" teórico necessário para que a gravidade funcione na escala galáctica. Segundo a Relatividade Geral, a gravidade é causada pela massa. No entanto, ao somar toda a massa visível (estrelas, gás, poeira) de uma galáxia, o total não é suficiente para mantê-la unida na velocidade em que gira.

    A física propõe que a Matéria Escura seja composta de WIMPs (Weakly Interacting Massive Particles) - partículas que têm massa, mas não interagem com a força eletromagnética (não emitem nem refletem luz). Elas interagem apenas via gravidade e força nuclear fraca.

    Detectores como o LUX-ZEPLIN usam tanques de xenônio líquido ultra-puro enterrados profundamente no subsolo na tentativa de captar o flash sutil de um WIMP colidindo com um núcleo de xenônio. Até hoje, nenhum sinal foi confirmado, mantendo a Matéria Escura como o maior mistério não resolvido da física moderna.` 
  },
  "Terra 2.0": { 
    title: "Em Busca de um Lar", 
    author: "Exoplanetas", 
    category: "Espaço", 
    fact: "O telescópio James Webb está analisando atmosferas de exoplanetas em busca de bioassinaturas.", 
    imageUrl: "https://image.pollinations.ai/prompt/earth%20like%20exoplanet%20trappist%20system%20surface%20view?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/habitable%20zone%20diagram%20star%20system?width=800&height=600&nologo=true", caption: "A Zona Habitável: onde a água pode ser líquida." },
      { url: "https://image.pollinations.ai/prompt/james%20webb%20transit%20spectroscopy%20method?width=800&height=600&nologo=true", caption: "Analisando a luz das estrelas através de atmosferas alienígenas." }
    ], 
    content: `Até 1992, não sabíamos se existiam planetas fora do nosso sistema solar. Hoje, confirmamos mais de 5.000. A busca pela "Terra 2.0" foca em planetas rochosos na Zona Habitável – a distância da estrela onde a água pode existir em estado líquido, nem gelo, nem vapor.

    O sistema TRAPPIST-1 é o mais promissor, com 7 planetas do tamanho da Terra orbitando uma anã vermelha. Três deles estão na zona habitável. Como estão muito próximos entre si, de um planeta você veria os outros no céu maiores do que a nossa Lua.

    O desafio das anãs vermelhas é que elas são instáveis, lançando explosões de radiação. A verdadeira Terra 2.0 precisa orbitar uma estrela calma tipo-Sol e ter um campo magnético forte. A próxima geração de telescópios gigantes em solo (ELT) poderá fotografar esses pontos pálidos diretamente, buscando o "reflexo vermelho" da clorofila alienígena.` 
  },
  "O Big Bang": { 
    title: "O Primeiro Segundo", 
    author: "Origens", 
    category: "Espaço", 
    fact: "O eco do Big Bang ainda é visível na estática de TVs antigas.", 
    imageUrl: "https://image.pollinations.ai/prompt/big%20bang%20cosmic%20inflation%20universe%20origin%20explosion?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/cosmic%20microwave%20background%20radiation%20map?width=800&height=600&nologo=true", caption: "Radiação Cósmica de Fundo: a 'foto' mais antiga do universo." },
      { url: "https://image.pollinations.ai/prompt/universe%20expansion%20timeline%20diagram?width=800&height=600&nologo=true", caption: "A cronologia da expansão cósmica." }
    ], 
    content: `O Big Bang não foi uma explosão no espaço, mas uma explosão DO espaço. O universo surgiu de um ponto de densidade infinita e se expandiu. A inflação cósmica, um período de expansão exponencial nos primeiros instantes, explica como o universo ficou tão grande e uniforme tão rápido.

    A evidência mais forte é a radiação cósmica de fundo (CMB). É o calor residual do Big Bang, resfriado pela expansão do universo para apenas 2,7 graus acima do zero absoluto. Essa radiação preenche todo o céu e pode ser detectada por radiotelescópios (e até por TVs antigas fora do ar).

    O mistério atual é o que causou o Big Bang e o que havia antes. Teorias como a inflação eterna ou o multiverso sugerem que o nosso Big Bang pode ter sido apenas uma bolha se formando em um mar cósmico muito maior e mais antigo, onde outros universos estão nascendo o tempo todo.` 
  },
  "Motor de Dobra": { 
    title: "Dobra Espacial: Possível?", 
    author: "Física Teórica", 
    category: "Nave", 
    fact: "A métrica de Alcubierre permite viajar mais rápido que a luz sem violar Einstein, dobrando o espaço.", 
    imageUrl: "https://image.pollinations.ai/prompt/warp%20drive%20spaceship%20bending%20space%20time%20alcubierre?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/space%20time%20curvature%20grid%20warp%20bubble?width=800&height=600&nologo=true", caption: "A bolha de dobra: contraindo o espaço à frente." },
      { url: "https://image.pollinations.ai/prompt/interstellar%20travel%20concept%20starship?width=800&height=600&nologo=true", caption: "Conceitos de naves interestelares da NASA." }
    ], 
    content: `Viajar mais rápido que a luz é impossível segundo a Relatividade Geral, pois exigiria energia infinita. Mas a Métrica de Alcubierre encontrou um "loophole": você não move a nave pelo espaço, você move o próprio espaço.

    A ideia é criar uma bolha de dobra que contrai o espaço-tempo à frente da nave e o expande atrás. A nave "surfa" nessa onda de espaço, permanecendo parada dentro da bolha. Tecnicamente, o espaço pode se expandir mais rápido que a luz (como aconteceu no Big Bang), levando a nave junto.

    O problema é que isso exige "energia negativa" ou massa exótica para funcionar, algo que nunca observamos em quantidades macroscópicas. Além disso, a energia necessária seria colossal, equivalente à massa de Júpiter convertida em energia. Mas a NASA tem um laboratório (Eagleworks) estudando a física de interferometria para detectar minúsculas distorções espaciais, mantendo o sonho vivo.` 
  },
  "Neutrinos": { 
    title: "Partículas Fantasmas", 
    author: "Física", 
    category: "Partículas", 
    fact: "Trilhões de neutrinos do Sol atravessam seu polegar a cada segundo.", 
    imageUrl: "https://image.pollinations.ai/prompt/neutrino%20detection%20icecube%20observatory%20blue%20light?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/icecube%20neutrino%20sensors%20under%20ice%20diagram?width=800&height=600&nologo=true", caption: "O observatório IceCube enterrado no Polo Sul." },
      { url: "https://image.pollinations.ai/prompt/cherenkov%20radiation%20blue%20glow%20water?width=800&height=600&nologo=true", caption: "Radiação Cherenkov: o sinal da passagem de um neutrino." }
    ], 
    content: `Neutrinos são partículas subatômicas quase sem massa que viajam perto da velocidade da luz. Eles interagem tão pouco com a matéria que podem atravessar um ano-luz de chumbo sólido sem bater em nada. Para eles, a Terra, você e eu somos transparentes.

    Para detectá-los, cientistas construíram o IceCube, um observatório enterrado em 1 km cúbico de gelo puro na Antártida. Eles esperam que, por puro acaso, um neutrino colida com um átomo de gelo. Quando isso acontece, gera um flash de luz azul chamado Radiação Cherenkov, que os sensores captam.

    Neutrinos são importantes porque carregam informações diretas de onde foram criados. Eles nos permitem "ver" o interior do núcleo do Sol em tempo real (a luz leva milhares de anos para sair do núcleo) e observar o coração de supernovas distantes antes mesmo da luz da explosão chegar até nós.` 
  },
  "Sinais de Rádio": { 
    title: "Alguém aí?", 
    author: "SETI", 
    category: "Aliens", 
    fact: "O sinal 'Wow!' de 1977 continua sendo o candidato mais forte a contato alienígena.", 
    imageUrl: "https://image.pollinations.ai/prompt/radio%20telescope%20array%20seti%20night%20sky%20signal?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/wow%20signal%20data%20printout%206equj5?width=800&height=600&nologo=true", caption: "O sinal 'Wow!': 72 segundos de mistério." },
      { url: "https://image.pollinations.ai/prompt/alien%20megastructure%20dyson%20sphere%20star?width=800&height=600&nologo=true", caption: "Esferas de Dyson: tecnoassinaturas em estrelas distantes." }
    ], 
    content: `Ouvimos o céu com radiotelescópios há mais de 60 anos em busca de sinais artificiais. O universo é silencioso (o Paradoxo de Fermi), mas houve um momento de esperança. Em 1977, o telescópio Big Ear captou um sinal de rádio forte e de banda estreita vindo da constelação de Sagitário. Durou 72 segundos e tinha a assinatura exata esperada de uma transmissão interestelar.

    O astrônomo Jerry Ehman circulou os dados e escreveu "Wow!" ao lado. Infelizmente, o sinal nunca se repetiu, impedindo a confirmação científica. Poderia ter sido um cometa desconhecido, um satélite secreto ou realmente um farol alienígena varrendo a galáxia.

    Hoje, projetos como o Breakthrough Listen usam IA para filtrar ruído terrestre e monitorar milhões de estrelas simultaneamente. Buscamos não apenas rádio, mas pulsos de laser e "tecnoassinaturas" como o calor residual de megaestruturas alienígenas (Esferas de Dyson) orbitando estrelas.` 
  },
  "A Máquina de Anticítera": { 
    title: "O Computador Grego", 
    author: "História", 
    category: "Arqueologia", 
    fact: "Calculava eclipses e Olimpíadas com engrenagens de bronze há 2000 anos.", 
    imageUrl: "https://image.pollinations.ai/prompt/antikythera%20mechanism%20gears%20underwater%20discovery?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/antikythera%20mechanism%20reconstruction%20wood%20case?width=800&height=600&nologo=true", caption: "Reconstrução do mecanismo original." },
      { url: "https://image.pollinations.ai/prompt/ancient%20greek%20astronomy%20planetary%20model?width=800&height=600&nologo=true", caption: "Astronomia grega: precisão matemática perdida." }
    ], 
    content: `Recuperado de um naufrágio romano em 1901, o Mecanismo de Anticítera parecia apenas um pedaço de bronze corroído. Décadas depois, scans modernos revelaram o impossível: um computador analógico de precisão suíça datado de 100 a.C., contendo pelo menos 30 engrenagens de bronze.

    Ele não apenas previa as posições do Sol, Lua e planetas, mas também eclipses (com códigos de cores para prever a hora) e as datas dos Jogos Olímpicos Pan-helênicos. A complexidade matemática embutida nas relações das engrenagens mostra que os gregos antigos possuíam conhecimento mecânico muito superior ao que os livros de história registravam.

    A existência deste dispositivo levanta uma questão perturbadora: o que aconteceu com essa tecnologia? Por que desapareceu por 1500 anos até o surgimento dos relógios astronômicos na Europa medieval? Anticítera é a prova física de que o progresso humano não é uma linha reta ascendente, mas sujeito a colapsos e esquecimentos catastróficos.` 
  },
  "Tumbas Perdidas": { 
    title: "Segredos da Areia", 
    author: "Egiptologia", 
    category: "Arqueologia", 
    fact: "A tumba de Cleópatra nunca foi encontrada e pode estar submersa em Alexandria.", 
    imageUrl: "https://image.pollinations.ai/prompt/egyptian%20tomb%20hidden%20chamber%20torchlight%20discovery?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/underwater%20ruins%20alexandria%20egypt%20statues?width=800&height=600&nologo=true", caption: "As ruínas submersas do palácio de Cleópatra." },
      { url: "https://image.pollinations.ai/prompt/ground%20penetrating%20radar%20archaeology%20egypt?width=800&height=600&nologo=true", caption: "Radar de penetração no solo buscando vazios." }
    ], 
    content: `A era de escavar aleatoriamente acabou. A nova arqueologia usa tecnologia para ver através da areia e da pedra. Em 2017, o projeto ScanPyramids usou detectores de múons (partículas cósmicas) para encontrar um "Grande Vazio" de 30 metros dentro da Pirâmide de Quéops, uma câmara selada há 4.500 anos que ninguém sabia que existia.

    A busca pela tumba de Cleópatra continua. Acredita-se que ela possa estar no templo de Taposiris Magna ou submersa nas ruínas do antigo porto de Alexandria, que afundou devido a terremotos. Mergulhadores já encontraram esfinges e colunas no fundo do mar, mas o túmulo real permanece elusivo.

    No Vale dos Reis, scans de radar sugerem que podem haver câmaras ocultas atrás das paredes da tumba de Tutancâmon, possivelmente contendo o local de descanso da Rainha Nefertiti. A tecnologia não invasiva está nos permitindo espiar o passado sem destruir a história.` 
  },
  "O Código Voynich": { 
    title: "O Livro Impossível", 
    author: "Criptografia", 
    category: "Mistério", 
    fact: "Nem a IA moderna conseguiu decifrar o manuscrito Voynich do século XV.", 
    imageUrl: "https://image.pollinations.ai/prompt/voynich%20manuscript%20open%20page%20strange%20plants?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/voynich%20manuscript%20plants%20detail%20drawing?width=800&height=600&nologo=true", caption: "Plantas que não existem na botânica conhecida." },
      { url: "https://image.pollinations.ai/prompt/medieval%20alchemist%20writing%20secret%20code?width=800&height=600&nologo=true", caption: "Um código secreto ou uma fraude elaborada?" }
    ], 
    content: `O Manuscrito Voynich é o livro mais misterioso do mundo. Datado por carbono do início do século XV, contém 240 páginas de texto escrito em uma língua ou código desconhecido, acompanhado de ilustrações de plantas que não existem na Terra, diagramas astrológicos bizarros e mulheres banhando-se em tubos verdes conectados.

    Os melhores criptógrafos da história, incluindo os que quebraram os códigos nazistas e japoneses na Segunda Guerra, falharam em lê-lo. A IA moderna também não conseguiu traduzi-lo, embora análises estatísticas mostrem que o texto segue a Lei de Zipf, uma regra que governa todas as linguagens naturais humanas, sugerindo que não é apenas rabiscos aleatórios.

    Teorias variam de um manual de alquimia codificado, um livro de medicina herética, um idioma perdido ou uma fraude elaborada criada para tirar dinheiro do Imperador Rodolfo II. Até hoje, o Voynich guarda seus segredos, desafiando nossa capacidade de entender o passado.` 
  },
  "Newton Oculto": { 
    title: "O Alquimista", 
    author: "História da Ciência", 
    category: "História", 
    fact: "Isaac Newton escreveu mais sobre alquimia e apocalipse bíblico do que sobre física.", 
    imageUrl: "https://image.pollinations.ai/prompt/isaac%20newton%20alchemy%20laboratory%20painting?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/alchemical%20symbols%20manuscript%20handwritten?width=800&height=600&nologo=true", caption: "Manuscritos alquímicos secretos de Newton." },
      { url: "https://image.pollinations.ai/prompt/philosophers%20stone%20glowing%20red%20alchemy?width=800&height=600&nologo=true", caption: "A busca pela Pedra Filosofal." }
    ], 
    content: `Conhecemos Isaac Newton como o pai da razão e da física moderna. Mas quando seus manuscritos privados foram leiloados em 1936, o mundo descobriu um homem diferente. Newton era profundamente místico e passou mais tempo estudando alquimia e teologia bíblica do que a gravidade.

    Ele escreveu mais de um milhão de palavras sobre a busca da Pedra Filosofal (para transmutar metais em ouro e alcançar a imortalidade) e tentou decifrar códigos ocultos na Bíblia para prever o apocalipse (que ele calculou para o ano 2060).

    Para Newton, a ciência não era separada da religião ou da magia; era uma forma de entender a mente de Deus. A gravidade, uma força invisível que age à distância, era para ele mais uma manifestação do poder divino oculto na matéria. Ele foi, nas palavras de John Maynard Keynes, "não o primeiro da era da razão, mas o último dos magos".` 
  },
  "Pirâmides": { 
    title: "Engenharia Impossível", 
    author: "Construção Antiga", 
    category: "Egito", 
    fact: "As pirâmides eram originalmente brancas e polidas, brilhando como joias no deserto.", 
    imageUrl: "https://image.pollinations.ai/prompt/giza%20pyramids%20ancient%20times%20white%20casing%20stones%20gold%20top?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/pyramid%20construction%20ramp%20theory%20egypt?width=800&height=600&nologo=true", caption: "Teorias de construção: rampas externas vs internas." },
      { url: "https://image.pollinations.ai/prompt/limestone%20quarry%20ancient%20egypt%20workers?width=800&height=600&nologo=true", caption: "Corte e transporte de blocos de 2,5 toneladas." }
    ], 
    content: `A Grande Pirâmide de Gizé foi a estrutura mais alta do mundo por 3.800 anos. Construída com 2,3 milhões de blocos de pedra pesando em média 2,5 toneladas, sua precisão é desconcertante. Os lados estão alinhados com o norte verdadeiro com uma margem de erro de apenas 3/60 de grau, uma precisão melhor que a de muitos edifícios modernos.

    Originalmente, elas não eram degraus de pedra marrom, mas lisas, cobertas de calcário branco polido e com um topo (piramídio) folheado a ouro ou eletro. Elas brilhavam tanto sob o sol do deserto que podiam ser vistas a quilômetros de distância.

    Como foram construídas sem a roda, polias ou ferramentas de ferro? Teorias variam de rampas gigantes a sistemas de contrapesos internos ou até o uso de concreto geopolimérico moldado no local (uma teoria controversa de Joseph Davidovits). O fato é que a logística e organização social necessárias para tal feito definiram a civilização egípcia.` 
  },
  "Da Vinci": { 
    title: "O Homem do Futuro", 
    author: "Arte e Ciência", 
    category: "Renascença", 
    fact: "Da Vinci projetou tanques, helicópteros e robôs 400 anos antes de existirem.", 
    imageUrl: "https://image.pollinations.ai/prompt/leonardo%20da%20vinci%20flying%20machine%20sketch%20blueprint?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/vitruvian%20man%20sketch%20leonardo%20da%20vinci?width=800&height=600&nologo=true", caption: "O Homem Vitruviano: a proporção divina." },
      { url: "https://image.pollinations.ai/prompt/anatomical%20drawing%20heart%20leonardo%20da%20vinci?width=800&height=600&nologo=true", caption: "Estudos anatômicos pioneiros." }
    ], 
    content: `Leonardo da Vinci é o arquétipo do homem da Renascença, para quem arte e ciência eram a mesma coisa. Seus cadernos, escritos em escrita espelhada para proteger seus segredos, revelam projetos de máquinas voadoras (o "Ornithopter"), veículos blindados de combate, trajes de mergulho e até um robô cavaleiro mecânico.

    Sua genialidade vinha da observação obsessiva da natureza. Ele estudou o voo dos pássaros para projetar asas, e dissecou mais de 30 cadáveres humanos (ilegal na época) para entender como os músculos moviam os ossos, permitindo-lhe pintar a Mona Lisa com um realismo anatômico sem precedentes.

    Ele também foi um pioneiro na hidrodinâmica e geologia, entendendo a erosão e a formação de fósseis séculos antes de serem ciências estabelecidas. Da Vinci nos ensina que a curiosidade sem fronteiras é a chave para a inovação.` 
  },
  "Pólvora": { 
    title: "A Invenção Explosiva", 
    author: "Química Antiga", 
    category: "China", 
    fact: "Alquimistas chineses descobriram a pólvora tentando criar o elixir da imortalidade.", 
    imageUrl: "https://image.pollinations.ai/prompt/ancient%20chinese%20fireworks%20invention%20chemistry?width=1600&height=900&nologo=true", 
    additionalImages: [
      { url: "https://image.pollinations.ai/prompt/early%20cannon%20chinese%20dynasty%20battle?width=800&height=600&nologo=true", caption: "Os primeiros canhões e foguetes de bambu." },
      { url: "https://image.pollinations.ai/prompt/gunpowder%20chemistry%20sulfur%20charcoal%20saltpeter?width=800&height=600&nologo=true", caption: "A trindade química: enxofre, carvão e salitre." }
    ], 
    content: `A pólvora é um dos exemplos mais irônicos da história. No século 9, alquimistas taoístas na China buscavam o elixir da vida eterna. Misturando enxofre, carvão e salitre (nitrato de potássio), criaram acidentalmente uma substância que queimava com fúria e explodia quando confinada. Chamaram-na de "huo yao" (remédio de fogo).

    Inicialmente usada para fogos de artifício e afastar maus espíritos, logo foi militarizada em flechas de fogo e bombas primitivas. Quando a tecnologia chegou à Europa via Rota da Seda, mudou o mundo para sempre.

    A pólvora tornou obsoletos os castelos medievais (que não resistiam a canhões) e a classe dos cavaleiros blindados (que podiam ser mortos por um camponês com um mosquete). Ela democratizou a violência, centralizou o poder nos estados-nação e moldou a geopolítica moderna. A busca pela imortalidade resultou na invenção mais mortal da era pré-nuclear.` 
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
