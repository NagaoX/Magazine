import { 
  Brain, Atom, Globe, Leaf, Cpu, Rocket, History, Zap, FlaskConical, 
  Microscope, Sparkles, BookOpen, Car, Gauge 
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

  // =================================================================================
  // CAPA NATURE (NatGeo)
  // =================================================================================
  "O Último Santuário": {
    title: "Quimiossíntese: Vida Sem Sol",
    author: "Sylvia Earle",
    category: "Bioquímica",
    fact: "Bactérias oxidam sulfeto de hidrogênio (H₂S) tóxico para gerar energia (ATP) e fixar carbono, sustentando ecossistemas inteiros na escuridão total.",
    imageKeyword: "deep ocean bioluminescence",
    imageUrl: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&q=80&w=1600", caption: "Fontes hidrotermais: Chaminés negras expelindo minerais a 400°C." },
        { url: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=1600", caption: "Vermes tubulares gigantes que vivem em simbiose com bactérias." }
    ],
    content: `Nas profundezas oceânicas, a vida não depende do sol. Fontes hidrotermais expelem minerais quentes que bactérias usam para gerar energia via Quimiossíntese. Elas sustentam ecossistemas inteiros de vermes gigantes e caranguejos, provando que a vida pode existir em luas geladas como Europa.`
  },
  "Fungos Assassinos": { title: "Ophiocordyceps", author: "Micologia", category: "Biologia", fact: "O fungo controla os músculos da formiga, não o cérebro.", content: "Este fungo infecta formigas e as obriga a subir em plantas para morrer no local ideal para espalhar esporos. É uma engenharia biológica de controle de hospedeiro aterrorizante." },
  "Cidades de Coral": { title: "Simbiose em Risco", author: "Biologia Marinha", category: "Ecologia", fact: "Corais obtêm cor e energia de algas (zooxantelas) que vivem dentro deles.", content: "O branqueamento ocorre quando a água quente estressa o coral, que expulsa suas algas parceiras. Sem elas, o coral passa fome e morre, colapsando o ecossistema." },
  "O Elo Perdido": { title: "Evolução Humana", author: "Paleoantropologia", category: "História", fact: "O DNA neandertal está presente em humanos modernos não-africanos.", content: "A evolução não foi uma linha reta. Várias espécies humanas conviveram e cruzaram. Somos os últimos sobreviventes de uma família outrora diversa." },
  "Árvores Falam": { title: "Wood Wide Web", author: "Botânica", category: "Ecologia", fact: "Árvores usam fungos para enviar açúcar a vizinhas doentes.", content: "Florestas são superorganismos conectados por micorrizas. Árvores alertam sobre pragas e nutrem suas mudas através dessa internet subterrânea." },
  "Vírus Gigantes": { title: "Mimivírus", author: "Virologia", category: "Microbiologia", fact: "Vírus gigantes podem ser infectados por outros vírus menores (virófagos).", content: "Descobertos no permafrost, são tão complexos que desafiam a fronteira entre vivo e não-vivo, possuindo genes para reparo de DNA." },
  "Gelo Derretendo": { title: "Paleoclimatologia", author: "Climatologia", category: "Terra", fact: "O gelo antártico guarda bolhas de ar de 800 mil anos atrás.", content: "Geleiras são arquivos do clima. Analisando isótopos no gelo, reconstruímos a temperatura antiga e provamos a relação entre CO2 e aquecimento." },

  // =================================================================================
  // CAPA TECH (Wired) - ARTIGOS EXPANDIDOS
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
    content: `A segurança pública entrou na era do "Policiamento Preditivo". Não se trata mais apenas de reagir ao crime, mas de antecipá-lo usando Big Data e IA. No Brasil, o destaque é o **Projeto Córtex**, uma plataforma de vigilância integrada que cruza dados de leitura de placas (LPR) com bancos de dados criminais em tempo real. O sistema utiliza algoritmos de reconhecimento de padrões para identificar comportamentos anômalos — como um veículo circulando repetidamente em uma área bancária — antes que o crime ocorra.

    Globalmente, a tecnologia **ABIS (Automated Biometric Identification System)** evoluiu muito além das impressões digitais. Agências como a Interpol e o FBI agora utilizam a análise de marcha (gait analysis). A física por trás disso envolve a modelagem cinemática do esqueleto humano; como cada pessoa possui uma biomecânica única ao caminhar (distribuição de peso, balanço dos braços e cadência), câmeras de alta resolução podem identificar suspeitos mesmo com o rosto coberto, analisando vetores de movimento com precisão de 99,6%.

    No entanto, a "vigilância de dados" levanta questões sobre privacidade e criptografia. Softwares modernos de inteligência, como o Pegasus (israelense), exploram vulnerabilidades "zero-day" em smartphones para transformar microfones e câmeras em dispositivos de escuta passiva. A engenharia reversa desses malwares revela um nível de sofisticação onde o código se autodestrói se detectar que está sendo analisado em uma sandbox.`
  },
  "Computação Quântica: O Fim da Criptografia?": {
    title: "Computação Quântica: O Fim da Criptografia RSA?",
    author: "Alan T.",
    category: "Tecnologia",
    fact: "O algoritmo de Shor, executado em um computador quântico suficientemente potente, pode quebrar chaves RSA em minutos, tarefa que levaria milhões de anos para supercomputadores clássicos.",
    imageKeyword: "quantum computer chip gold cryostat",
    imageUrl: "https://image.pollinations.ai/prompt/quantum%20computer%20inside%20cryostat%20gold%20wires%20qubits%20futuristic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/qubit%20bloch%20sphere%20superposition%20visualization?width=800&height=600&nologo=true", caption: "Esfera de Bloch: visualizando o estado de um Qubit." },
        { url: "https://image.pollinations.ai/prompt/post%20quantum%20cryptography%20code%20matrix?width=800&height=600&nologo=true", caption: "Criptografia Pós-Quântica: a nova corrida de segurança." }
    ],
    content: `A segurança de toda a internet (bancos, e-mails, segredos militares) depende da criptografia RSA. Ela baseia-se na dificuldade matemática de fatorar números primos gigantescos. Para um computador clássico, descobrir quais dois números primos multiplicados resultaram em um número de 600 dígitos é praticamente impossível. Mas para um computador quântico, é trivial.

    Isso acontece devido ao princípio da **superposição**. Enquanto um bit clássico é 0 ou 1, um Qubit pode ser ambos ao mesmo tempo. Com o Algoritmo de Shor, um computador quântico pode testar bilhões de possibilidades simultaneamente, colapsando a função de onda na resposta correta quase instantaneamente. Se (ou quando) um computador quântico estável com qubits suficientes for construído, toda a criptografia atual se tornará obsoleta – o chamado "Q-Day".

    Para combater isso, o NIST (Instituto Nacional de Padrões e Tecnologia dos EUA) já está padronizando algoritmos de "Criptografia Pós-Quântica". Esses novos métodos não dependem da fatoração de primos, mas de problemas matemáticos geométricos complexos (como reticulados em espaços multidimensionais) que se acredita serem difíceis até para computadores quânticos resolverem.`
  },
  "Guerra de Algoritmos": { 
    title: "Guerra Cibernética Autônoma", 
    author: "SecOps Intelligence", 
    category: "Cibersegurança", 
    fact: "O malware Stuxnet foi a primeira arma digital a causar destruição física no mundo real, destruindo centrífugas nucleares iranianas alterando sua velocidade de rotação.",
    imageUrl: "https://image.pollinations.ai/prompt/cyber%20warfare%20digital%20map%20hacking%20code%20matrix%20red%20alert?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/hacker%20typing%20code%20binary%20security%20shield?width=1600&height=900&nologo=true", caption: "Zero-Day Exploits: falhas de segurança vendidas por milhões." },
        { url: "https://image.pollinations.ai/prompt/power%20grid%20blackout%20city%20night%20cyber%20attack?width=1600&height=900&nologo=true", caption: "Infraestrutura crítica é o novo campo de batalha." }
    ],
    content: `A imagem de um hacker encapuzado digitando furiosamente é coisa do passado. A cibersegurança moderna é uma batalha entre IAs. Sistemas de defesa autônomos escaneiam redes em busca de anomalias milhões de vezes por segundo, enquanto malwares baseados em IA sofrem mutações ("polimorfismo") a cada infecção para evitar detecção.

    A próxima guerra mundial pode ser decidida sem disparar um tiro, mas desligando a rede elétrica, o sistema bancário ou os satélites de GPS do inimigo. O Stuxnet provou que código pode destruir hardware físico. Agora, a corrida é para encontrar falhas "Zero-Day" (vulnerabilidades desconhecidas pelos fabricantes) e guardá-las como ogivas nucleares digitais.

    O perigo futuro é a democratização do ataque. Ferramentas de IA generativa podem permitir que atores não estatais criem malwares sofisticados ou campanhas de desinformação em massa (Deepfakes), desestabilizando democracias de dentro para fora.` 
  },
  "Edição Genética Prime": {
    title: "Edição Genética Prime: O 'Word' do DNA",
    author: "Jennifer D.",
    category: "Biotecnologia",
    fact: "O 'Prime Editing' é mais preciso que o CRISPR original pois não corta as duas fitas do DNA, reduzindo drasticamente erros indesejados.",
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

  // =================================================================================
  // CAPA NATURE (NatGeo) - ARTIGOS EXPANDIDOS
  // =================================================================================
  "A Rede Micelial: Internet da Floresta": {
    title: "Wood Wide Web: A Internet da Floresta",
    author: "Bio Fungi",
    category: "Botânica",
    fact: "Árvores usam fungos para trocar nutrientes e avisos de pragas, funcionando como um sistema nervoso descentralizado.",
    imageKeyword: "mycelium network forest roots glowing",
    imageUrl: "https://image.pollinations.ai/prompt/underground%20mycelium%20network%20connecting%20tree%20roots%20glowing%20bio%20luminescence?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/microscope%20fungi%20hyphae%20connecting%20plant%20roots?width=800&height=600&nologo=true", caption: "Hifas fúngicas penetrando células da raiz." },
        { url: "https://image.pollinations.ai/prompt/mother%20tree%20sharing%20nutrients%20saplings%20diagram?width=800&height=600&nologo=true", caption: "Árvores-Mãe nutrindo mudas na sombra." }
    ],
    content: `Esqueça a ideia darwinista de que a floresta é apenas uma competição onde o mais forte sobrevive. A ecologista Suzanne Simard provou que as florestas são, na verdade, sociedades cooperativas conectadas subterraneamente por uma rede vasta de fungos chamada **micorriza**.

    Nessa simbiose, as árvores dão açúcares (produto da fotossíntese) aos fungos, e os fungos, com suas hifas finas que exploram o solo, buscam água e minerais (fósforo, nitrogênio) para as árvores. Mas a rede também serve de comunicação. Se uma árvore é atacada por insetos, ela envia sinais químicos de alerta pela rede. As árvores vizinhas, ao receberem o sinal, começam a produzir toxinas defensivas em suas folhas antes mesmo de serem atacadas.

    Ainda mais impressionante é a redistribuição de recursos. Árvores grandes e antigas ("Árvores Mãe") atuam como hubs, enviando carbono e água para mudas jovens que crescem na sombra e não conseguiriam sobreviver sozinhas. A floresta age como um superorganismo, onde a saúde do grupo garante a estabilidade do ecossistema a longo prazo.`
  },
  "Arqueologia LiDAR na Amazônia": {
    title: "Arqueologia LiDAR: Cidades Perdidas na Amazônia",
    author: "Indy J.",
    category: "Arqueologia",
    fact: "Lasers revelaram redes urbanas complexas e pirâmides de terra na Amazônia que estavam escondidas sob a copa das árvores há séculos.",
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
  "Fotossíntese Artificial": {
    title: "Fotossíntese Artificial: Combustível do Ar",
    author: "Eco Lab",
    category: "Química Verde",
    fact: "Folhas biônicas já conseguem converter luz solar em energia química com 10x mais eficiência que as plantas naturais.",
    imageKeyword: "artificial leaf photosynthesis lab energy",
    imageUrl: "https://image.pollinations.ai/prompt/futuristic%20artificial%20leaf%20device%20in%20water%20producing%20bubbles%20sunlight%20lab?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/molecular%20catalyst%20splitting%20water%20hydrogen%20oxygen?width=800&height=600&nologo=true", caption: "Catalisadores quebrando moléculas de água." },
        { url: "https://image.pollinations.ai/prompt/solar%20fuel%20production%20plant%20desert%20futuristic?width=800&height=600&nologo=true", caption: "Fazendas de combustível solar: o futuro da energia." }
    ],
    content: `As plantas fazem parecer fácil: pegar luz do sol, água e CO2 e transformar em energia química (açúcar). Mas a "Fotossíntese Artificial" tenta fazer algo ainda melhor: criar combustíveis líquidos densos, como metanol ou hidrogênio, diretamente do ar e do sol, pulando a etapa de cultivar biomassa.
    
    O segredo está nos catalisadores. A natureza usa enzimas complexas e frágeis. Cientistas estão desenvolvendo materiais semicondutores (como óxidos de metal) que agem como uma "folha biônica". Quando a luz atinge o material, ele gera uma carga elétrica que quebra a molécula de água em oxigênio e hidrogênio. O hidrogênio pode ser usado como combustível ou combinado com CO2 capturado para criar hidrocarbonetos sintéticos.
    
    O impacto potencial é imenso: um ciclo de carbono fechado. Queimamos o combustível no carro, liberamos CO2, e a folha artificial captura esse mesmo CO2 para fazer mais combustível. Diferente de baterias que apenas armazenam energia, isso cria um vetor de energia densa, essencial para aviões e navios que não podem carregar baterias pesadas.`
  },

  // =================================================================================
  // CAPA COSMOS (Astronomy) - ARTIGOS EXPANDIDOS
  // =================================================================================
  "O Zumbido de Fundo: Ondas Gravitacionais": {
    title: "O Zumbido de Fundo: Ondas Gravitacionais",
    author: "Dr. Cosmos",
    category: "Astronomia",
    fact: "O universo tem um 'som' de fundo causado pela colisão de buracos negros supermassivos, detectado usando pulsares como relógios cósmicos.",
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
  "O Motor Scramjet": {
    title: "O Motor Scramjet: Respirando Fogo Supersônico",
    author: "Aero Space",
    category: "Engenharia Aeroespacial",
    fact: "Scramjets não possuem peças móveis; a compressão do ar ocorre pela própria onda de choque da velocidade do veículo, permitindo voos acima de Mach 5.",
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
  "Exoplanetas e Bioassinaturas": {
    title: "Exoplanetas: Caçando Vida na Luz",
    author: "Carl S.",
    category: "Astronomia",
    fact: "A detecção de Metano e Dióxido de Carbono juntos, sem Monóxido de Carbono, é considerada uma 'bioassinatura' forte, pois esse desequilíbrio químico é difícil de manter sem vida.",
    imageKeyword: "exoplanet surface alien landscape james webb",
    imageUrl: "https://image.pollinations.ai/prompt/exoplanet%20surface%20strange%20plants%20double%20sun%20sci-fi%20realistic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/james%20webb%20telescope%20spectrum%20graph%20atmosphere%20data?width=800&height=600&nologo=true", caption: "Espectro de transmissão: a 'impressão digital' química de um planeta." },
        { url: "https://image.pollinations.ai/prompt/k2-18b%20ocean%20world%20concept%20art?width=800&height=600&nologo=true", caption: "K2-18b: um possível mundo oceânico (Hycean)." }
    ],
    content: `Como saber se há vida num planeta a 100 anos-luz de distância sem ir até lá? A resposta é a luz. Quando um exoplaneta passa na frente de sua estrela (trânsito), a luz da estrela filtra através da atmosfera do planeta antes de chegar aos nossos telescópios.

    Diferentes moléculas na atmosfera absorvem cores específicas de luz. O Telescópio Espacial James Webb (JWST) analisa esse espectro e nos diz a composição química do ar alienígena. Recentemente, ele detectou metano e CO2 na atmosfera de K2-18b, um planeta na zona habitável. Na Terra, o metano é produzido principalmente por vida biológica.

    Mas a "arma fumegante" que os astrobiólogos buscam é o oxigênio. O oxigênio é altamente reativo e desapareceria da atmosfera em poucos milhões de anos reagindo com rochas, a menos que algo (como plantas ou cianobactérias) o estivesse repondo constantemente. Encontrar O2, metano e água juntos seria o sinal mais forte de que não estamos sós.`
  },
  "Fusão Nuclear: O Santo Graal": {
    title: "Fusão Nuclear: A Estrela na Garrafa",
    author: "Marie C.",
    category: "Física",
    fact: "Em 2022, o laboratório NIF conseguiu pela primeira vez a 'ignição', gerando mais energia na reação de fusão do que a energia dos lasers usados para iniciá-la.",
    imageKeyword: "nuclear fusion tokamak reactor plasma",
    imageUrl: "https://image.pollinations.ai/prompt/tokamak%20nuclear%20fusion%20reactor%20interior%20plasma%20purple%20glow%20highly%20detailed?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/magnetic%20field%20lines%20containing%20plasma%20donut%20shape?width=800&height=600&nologo=true", caption: "Tokamak: campos magnéticos aprisionando plasma a 100 milhões °C." },
        { url: "https://image.pollinations.ai/prompt/laser%20fusion%20target%20pellet%20implosion?width=800&height=600&nologo=true", caption: "Fusão inercial: 192 lasers comprimindo um grão de combustível." }
    ],
    content: `A fusão nuclear é o processo que alimenta as estrelas. Ao contrário da fissão (usada em usinas nucleares atuais), que quebra átomos pesados de urânio gerando lixo radioativo por milênios, a fusão une átomos leves de hidrogênio para criar hélio. O resultado? Energia massiva, combustível abundante (água do mar) e nenhum risco de meltdown ou lixo de longa duração.

    O desafio é que, para fundir núcleos, você precisa vencer a repulsão elétrica entre eles, o que exige temperaturas de 100 milhões de graus Celsius. Nenhum material aguenta isso. A solução é usar campos magnéticos poderosos em máquinas em forma de donut chamadas **Tokamaks** (como o reator ITER em construção na França) para suspender o plasma superaquecido no vácuo.

    Recentemente, o NIF nos EUA alcançou a "ignição" usando lasers, provando que a física funciona. O desafio agora é a engenharia: construir reatores que possam sustentar esse plasma "queimando" continuamente por meses, não frações de segundo, e extrair o calor para gerar eletricidade comercialmente. É a promessa de energia limpa infinita, sempre a "30 anos de distância", mas estamos mais perto do que nunca.`
  },

  // =================================================================================
  // CAPA VINTAGE & OUTROS - ARTIGOS EXPANDIDOS
  // =================================================================================
  "Aerodinâmica Ativa na F1": {
    title: "Fórmula 1: Quando o Ar Vira Cola",
    author: "Lando S.",
    category: "Engenharia Mecânica",
    fact: "Um carro de F1 gera tanta downforce (força descendente) que poderia, teoricamente, andar de cabeça para baixo no teto de um túnel a 150 km/h.",
    imageKeyword: "formula 1 wind tunnel aerodynamic smoke",
    imageUrl: "https://image.pollinations.ai/prompt/formula%201%20car%20in%20wind%20tunnel%20smoke%20flow%20lines%20aerodynamics%20technical?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/formula%201%20drg%20system%20wing%20open%20technical%20drawing?width=800&height=600&nologo=true", caption: "DRS: reduzindo o arrasto para ultrapassagens." },
        { url: "https://image.pollinations.ai/prompt/venturi%20tunnels%20under%20f1%20car%20floor%20airflow?width=800&height=600&nologo=true", caption: "Efeito Solo: túneis Venturi sugam o carro contra a pista." }
    ],
    content: `Na Fórmula 1 moderna, o motor é importante, mas a aerodinâmica é rainha. O objetivo não é apenas cortar o ar (reduzir arrasto), mas manipulá-lo para criar **Downforce**. As asas e o assoalho do carro funcionam como asas de avião invertidas: em vez de gerar sustentação para subir, geram força para empurrar os pneus contra o asfalto, permitindo curvas em velocidades absurdas.

    A física chave é o Princípio de Bernoulli. Túneis Venturi debaixo do carro aceleram o ar que passa por baixo. Ar mais rápido tem menor pressão. A diferença de pressão entre o ar lento em cima e o ar rápido embaixo cria uma sucção poderosa (Efeito Solo).

    O DRS (Drag Reduction System) é um exemplo de aerodinâmica ativa. Em retas, o piloto abre a asa traseira, reduzindo a área frontal e o arrasto, ganhando até 20 km/h extras. Equipes usam supercomputadores de CFD (Dinâmica dos Fluidos Computacional) para modelar cada molécula de ar, criando vórtices invisíveis (Y250 vortex) que selam as laterais do carro como paredes de ar virtuais.`
  },
  "Pergaminhos de Herculano e IA": {
    title: "Vesuvius Challenge: Lendo o Invisível",
    author: "História Viva",
    category: "História & Tech",
    fact: "O Desafio do Vesúvio ofereceu prêmios em dinheiro para quem criasse uma IA capaz de ler pergaminhos que parecem carvão queimado, sem abri-los fisicamente.",
    imageKeyword: "burnt scroll ancient rome ai scanning",
    imageUrl: "https://image.pollinations.ai/prompt/ancient%20burnt%20scrolls%20digital%20scanning%20laser%20revealing%20letters%20herculaneum?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/ct%20scan%203d%20model%20unrolling%20scroll%20virtually?width=800&height=600&nologo=true", caption: "O 'desenrolamento virtual': geometria computacional extrema." },
        { url: "https://image.pollinations.ai/prompt/greek%20letters%20glowing%20on%20charcoal%20texture%20ai%20vision?width=800&height=600&nologo=true", caption: "A tinta invisível revelada pelo contraste de fase." }
    ],
    content: `Quando o Vesúvio entrou em erupção em 79 d.C., enterrou a cidade de Herculano e carbonizou instantaneamente uma biblioteca inteira de pergaminhos. Por séculos, eles foram impenetráveis; tentar abri-los os transformava em pó. Eram pedaços de carvão com segredos dentro.

    A solução veio da física de partículas e da inteligência artificial. Usando aceleradores de partículas (síncrotrons), cientistas escanearam os rolos com raios-X de altíssima energia. A tinta usada pelos romanos era à base de carbono, assim como o papiro queimado, então o contraste era quase nulo. No entanto, a tinta deixava uma textura microscópica na superfície do papiro.

    Uma IA foi treinada para detectar essas variações minúsculas de textura (crackle pattern) em scans 3D. Em 2023, o código venceu: as primeiras palavras ("Porphyras" - púrpura) foram lidas. Em 2024, passagens inteiras de filosofia epicurista sobre música e prazer foram reveladas. Estima-se que centenas de textos perdidos da antiguidade clássica, de Sófocles a Aristóteles, possam estar esperando para serem lidos nessa biblioteca fantasma.`
  },
  "Concreto Auto-Regenerativo": {
    title: "Bioconcreto: Prédios que se Curam",
    author: "Eng. Civil",
    category: "Engenharia de Materiais",
    fact: "Inspirado na biologia, o concreto auto-regenerativo pode dobrar a vida útil de infraestruturas, economizando bilhões em manutenção e reduzindo as emissões de CO2.",
    imageKeyword: "concrete cracking healing bacteria microscopic",
    imageUrl: "https://image.pollinations.ai/prompt/microscopic%20view%20of%20concrete%20healing%20cracks%20with%20bacteria%20calcite%20formation?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/bacillus%20bacteria%20spores%20capsule%20cement?width=800&height=600&nologo=true", caption: "Esporos de Bacillus encapsulados esperando para 'acordar'." },
        { url: "https://image.pollinations.ai/prompt/bridge%20crack%20filling%20itself%20white%20substance%20timelapse?width=800&height=600&nologo=true", caption: "Cicatrização: o calcário produzido sela a fissura." }
    ],
    content: `O concreto é o material mais usado no mundo depois da água, mas tem um defeito fatal: ele racha. A água entra nas fissuras, enferruja o aço da armadura e a estrutura colapsa. A solução holandesa para isso é misturar biologia com construção civil.

    O "Bioconcreto" contém cápsulas especiais misturadas na massa. Dentro delas, há esporos de bactérias do gênero *Bacillus* e lactato de cálcio (alimento). Esses esporos podem ficar dormentes por 200 anos. Quando uma rachadura aparece e a água da chuva entra, ela dissolve a cápsula e acorda as bactérias.

    As bactérias consomem o lactato e, como subproduto metabólico, excretam calcário (carbonato de cálcio) – o mesmo material das conchas e estalactites. Esse calcário preenche a rachadura, selando o concreto e protegendo o aço. É um material vivo que responde ao dano se consertando, inspirado na capacidade dos ossos humanos de se regenerarem.`
  },

  // (Os artigos clássicos anteriores como "Revolução Elétrica", "Matéria Escura", etc. continuam aqui...)
  // Mantendo a compatibilidade com a versão anterior para não perder nada.
  "O Cérebro Quântico": {
    title: "Consciência: Colapso da Função de Onda?",
    author: "Dr. Roger Penrose",
    category: "Física Quântica",
    fact: "Microtúbulos possuem simetria e ressonância compatíveis com a manutenção de coerência quântica, protegendo o sistema do 'ruído' térmico do cérebro.",
    imageKeyword: "quantum brain neural network",
    imageUrl: "https://image.pollinations.ai/prompt/quantum%20brain%20neural%20network%20microtubules%20glowing%20blue%20synapses%20abstract%20science?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/microtubule%20structure%20tubulin%20protein%20lattice%203d?width=800&height=600&nologo=true", caption: "Estrutura dos microtúbulos: reticulados de proteína tubulina." },
        { url: "https://image.pollinations.ai/prompt/penrose%20hameroff%20orch%20or%20theory%20diagram?width=800&height=600&nologo=true", caption: "Orch-OR: a ponte entre a física quântica e a mente." }
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
    imageUrl: "https://image.pollinations.ai/prompt/surreal%20melting%20clocks%20time%20warp%20space%20dali%20style%20cosmic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/big%20bang%20low%20entropy%20singularity?width=800&height=600&nologo=true", caption: "O Big Bang: o estado de mínima entropia inicial." },
        { url: "https://image.pollinations.ai/prompt/heat%20death%20universe%20entropy%20black%20holes?width=800&height=600&nologo=true", caption: "Morte Térmica: o destino de máxima entropia do universo." }
    ],
    content: `Na escala microscópica, as leis da física são simétricas no tempo. Um filme de dois átomos colidindo faz sentido tanto rodando para frente quanto para trás. Então, por que lembramos do passado e não do futuro? Por que um copo quebrado nunca se remonta espontaneamente?

    A resposta reside na Termodinâmica e no conceito de Entropia (uma medida estatística de desordem). O universo começou em um estado de entropia extremamente baixa (alta ordem) no Big Bang. Desde então, a entropia só aumenta. Essa transição do ordenado para o desordenado é o que percebemos como a "seta do tempo".

    Julian Barbour leva isso além, propondo que o tempo é uma ilusão criada pela nossa mente ao processar "snapshots" estáticos do universo (o "Universo Bloco"). Se o universo atingir o equilíbrio térmico (Morte Térmica), onde a entropia é máxima e nada mais muda, a dimensão do tempo efetivamente deixará de existir, pois não haverá eventos para marcar sua passagem. O tempo é, portanto, uma propriedade emergente da mudança, não uma dimensão fundamental.`
  },
  "Cura pelo Som": { title: "Ultrassom Focado (HIFU)", author: "Medicina", category: "Biofísica", fact: "O som pode gerar calor intenso em um ponto preciso dentro do corpo.", imageUrl: "https://image.pollinations.ai/prompt/focused%20ultrasound%20medical%20therapy%20glowing%20blue%20waves?width=1600&height=900&nologo=true", additionalImages: [], content: "Ondas sonoras são energia mecânica. Ao focar feixes de ultrassom em um ponto, a energia cozinha tumores sem cortes, uma cirurgia não-invasiva revolucionária. Também é usado para abrir a barreira hematoencefálica para tratamentos cerebrais." },
  "DNA Digital": { title: "Armazenamento em DNA", author: "Bio-Tech", category: "Genética", fact: "1 grama de DNA pode armazenar 215 petabytes de dados.", imageUrl: "https://image.pollinations.ai/prompt/dna%20data%20storage%20binary%20code%20double%20helix%20blue%20tech?width=1600&height=900&nologo=true", additionalImages: [], content: "O DNA é o disco rígido da natureza. Cientistas já codificaram filmes em bases nitrogenadas (A,C,T,G). É o futuro do arquivamento de dados de longo prazo, pois o DNA é ultra-compacto e dura milhares de anos se preservado." },
  "Sonhos Lúcidos": { title: "Consciência no Sono REM", author: "Neurociência", category: "Sono", fact: "O córtex pré-frontal lógico ativa-se durante sonhos lúcidos.", imageUrl: "https://image.pollinations.ai/prompt/lucid%20dreaming%20surreal%20mind%20control%20asleep%20awake%20duality?width=1600&height=900&nologo=true", additionalImages: [], content: "É um estado híbrido entre vigília e sono. Estudos mostram ondas gama (40Hz) típicas de foco mental ocorrendo enquanto o corpo dorme. Pode ser usado para terapia de pesadelos e treinamento de habilidades motoras." },
  "Fusão Fria": { title: "Reações Nucleares LENR", author: "Física", category: "Energia", fact: "Efeitos quânticos podem permitir fusão sem calor extremo.", imageUrl: "https://image.pollinations.ai/prompt/cold%20fusion%20apparatus%20electrolysis%20glowing%20palladium?width=1600&height=900&nologo=true", additionalImages: [], content: "A fusão a frio busca usar catalisadores para fundir átomos em temperatura ambiente, prometendo energia infinita e limpa. Embora controversa desde 1989, pesquisas recentes da NASA e Google reacenderam o interesse em anomalias térmicas em metais hidrogenados." },
  "Núcleo Parou?": { title: "Oscilação do Núcleo Terrestre", author: "Geofísica", category: "Terra", fact: "O núcleo interno da Terra gira em velocidade diferente da crosta.", imageUrl: "https://image.pollinations.ai/prompt/earth%20core%20rotation%20seismic%20waves%20geophysics%20diagram?width=1600&height=900&nologo=true", additionalImages: [], content: "Dados sísmicos mostram que a rotação do núcleo interno oscila em ciclos de 70 anos, afetando a duração do dia em milissegundos. Recentemente, ele parece ter desacelerado para sincronizar com a superfície, não 'parado' catastroficamente." },
  "Matéria Escura": { title: "Massa Oculta: A Gravidade Sem Fonte", author: "Vera Rubin", category: "Astrofísica", fact: "A velocidade orbital das estrelas nas bordas das galáxias viola as Leis de Kepler, a menos que exista 5x mais massa do que vemos.", imageUrl: "https://image.pollinations.ai/prompt/dark%20matter%20web%20universe%20structure%20purple%20filaments?width=1600&height=900&nologo=true", additionalImages: [], content: "A Matéria Escura é um 'tapa-buraco' teórico necessário para que a gravidade funcione na escala galáctica. Ela não emite luz, mas sua gravidade molda o universo. Detectores subterrâneos de xenônio tentam captar o impacto raro dessas partículas fantasmas." },
  "Terra 2.0": { title: "Em Busca de um Lar", author: "Exoplanetas", category: "Espaço", fact: "O telescópio James Webb está analisando atmosferas de exoplanetas em busca de bioassinaturas.", imageUrl: "https://image.pollinations.ai/prompt/earth%20like%20exoplanet%20trappist%20system%20surface%20view?width=1600&height=900&nologo=true", additionalImages: [], content: "Proxima Centauri b é o candidato mais próximo, mas mundos como TRAPPIST-1e oferecem esperanças de água líquida. A busca por 'Terra 2.0' foca em planetas rochosos na zona habitável de suas estrelas." },
  "O Big Bang": { title: "O Primeiro Segundo", author: "Origens", category: "Espaço", fact: "O eco do Big Bang ainda é visível na estática de TVs antigas.", imageUrl: "https://image.pollinations.ai/prompt/big%20bang%20cosmic%20inflation%20universe%20origin%20explosion?width=1600&height=900&nologo=true", additionalImages: [], content: "Tudo o que existe estava comprimido em um ponto menor que um átomo. A inflação cósmica explica como chegamos aqui. A radiação cósmica de fundo é a 'foto' mais antiga do universo, tirada 380.000 anos após o início." },
  "Motor de Dobra": { title: "Dobra Espacial: Possível?", author: "Física Teórica", category: "Nave", fact: "A métrica de Alcubierre permite viajar mais rápido que a luz sem violar Einstein, dobrando o espaço.", imageUrl: "https://image.pollinations.ai/prompt/warp%20drive%20spaceship%20bending%20space%20time%20alcubierre?width=1600&height=900&nologo=true", additionalImages: [], content: "Teoricamente possível, mas exige 'matéria exótica' com massa negativa para expandir o espaço atrás da nave. Laboratórios como o Eagleworks da NASA investigam interferometria para detectar minúsculas dobras espaciais." },
  "Neutrinos": { title: "Partículas Fantasmas", author: "Física", category: "Partículas", fact: "Trilhões de neutrinos do Sol atravessam seu polegar a cada segundo.", imageUrl: "https://image.pollinations.ai/prompt/neutrino%20detection%20icecube%20observatory%20blue%20light?width=1600&height=900&nologo=true", additionalImages: [], content: "Eles quase não têm massa e não interagem com nada. Detectá-los exige tanques gigantes de água pura no subsolo ou no gelo antártico. Eles nos permitem 'ver' o interior do Sol em tempo real." },
  "Sinais de Rádio": { title: "Alguém aí?", author: "SETI", category: "Aliens", fact: "O sinal 'Wow!' de 1977 continua sendo o candidato mais forte a contato alienígena.", imageUrl: "https://image.pollinations.ai/prompt/radio%20telescope%20array%20seti%20night%20sky%20signal?width=1600&height=900&nologo=true", additionalImages: [], content: "Ouvimos o céu há 60 anos. O silêncio é assustador (Paradoxo de Fermi), mas só vasculhamos uma fração da galáxia. Projetos como o Breakthrough Listen usam IA para filtrar ruído terrestre em busca de tecnoassinaturas." },
  "A Máquina de Anticítera": { title: "O Computador Grego", author: "História", category: "Arqueologia", fact: "Calculava eclipses e Olimpíadas com engrenagens de bronze há 2000 anos.", imageUrl: "https://image.pollinations.ai/prompt/antikythera%20mechanism%20gears%20underwater%20discovery?width=1600&height=900&nologo=true", additionalImages: [], content: "Um mecanismo tão avançado que tecnologia similar só apareceu 14 séculos depois na Europa. Prova que o conhecimento antigo era muito mais sofisticado do que imaginávamos antes de ser perdido." },
  "Tumbas Perdidas": { title: "Segredos da Areia", author: "Egiptologia", category: "Arqueologia", fact: "A tumba de Cleópatra nunca foi encontrada e pode estar submersa em Alexandria.", imageUrl: "https://image.pollinations.ai/prompt/egyptian%20tomb%20hidden%20chamber%20torchlight%20discovery?width=1600&height=900&nologo=true", additionalImages: [], content: "Novos escaneamentos de radar e múons sugerem câmaras ocultas na tumba de Tutancâmon e na Grande Pirâmide. A tecnologia não invasiva está revolucionando a arqueologia, permitindo ver sem destruir." },
  "O Código Voynich": { title: "O Livro Impossível", author: "Criptografia", category: "Mistério", fact: "Nem a IA moderna conseguiu decifrar o manuscrito Voynich do século XV.", imageUrl: "https://image.pollinations.ai/prompt/voynich%20manuscript%20open%20page%20strange%20plants?width=1600&height=900&nologo=true", additionalImages: [], content: "Escrito em uma língua desconhecida com ilustrações de plantas inexistentes. Fraude ou conhecimento perdido? Análises estatísticas mostram padrões de linguagem real, mas o significado permanece trancado." },
  "Newton Oculto": { title: "O Alquimista", author: "História da Ciência", category: "História", fact: "Isaac Newton escreveu mais sobre alquimia e apocalipse bíblico do que sobre física.", imageUrl: "https://image.pollinations.ai/prompt/isaac%20newton%20alchemy%20laboratory%20painting?width=1600&height=900&nologo=true", additionalImages: [], content: "O pai da gravidade passou a vida tentando transformar chumbo em ouro e buscando a Pedra Filosofal. Para ele, a ciência era uma forma de entender a mente de Deus, não separada do misticismo." },
  "Pirâmides": { title: "Engenharia Impossível", author: "Construção Antiga", category: "Egito", fact: "As pirâmides eram originalmente brancas e polidas, brilhando como joias no deserto.", imageUrl: "https://image.pollinations.ai/prompt/giza%20pyramids%20ancient%20times%20white%20casing%20stones%20gold%20top?width=1600&height=900&nologo=true", additionalImages: [], content: "A precisão do alinhamento com o norte verdadeiro é maior que a de edifícios modernos. Teorias variam de rampas internas a concreto geopolimérico moldado no local." },
  "Da Vinci": { title: "O Homem do Futuro", author: "Arte e Ciência", category: "Renascença", fact: "Da Vinci projetou tanques, helicópteros e robôs 400 anos antes de existirem.", imageUrl: "https://image.pollinations.ai/prompt/leonardo%20da%20vinci%20flying%20machine%20sketch%20blueprint?width=1600&height=900&nologo=true", additionalImages: [], content: "Seus cadernos revelam que a arte era apenas uma ferramenta para entender a anatomia e a física da natureza. Ele dissecava corpos para desenhar músculos com precisão e estudava o voo dos pássaros obsessivamente." },
  "Pólvora": { title: "A Invenção Explosiva", author: "Química Antiga", category: "China", fact: "Alquimistas chineses descobriram a pólvora tentando criar o elixir da imortalidade.", imageUrl: "https://image.pollinations.ai/prompt/ancient%20chinese%20fireworks%20invention%20chemistry?width=1600&height=900&nologo=true", additionalImages: [], content: "Mudou a guerra para sempre, acabando com a era dos castelos e cavaleiros blindados. A mistura de salitre, enxofre e carvão criou a primeira reação química capaz de liberar energia cinética massiva instantaneamente." }
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
