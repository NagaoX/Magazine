import { 
  Brain, Atom, Globe, Leaf, Cpu, Rocket, History, Zap, FlaskConical, 
  Microscope, Sparkles, BookOpen 
} from 'lucide-react';

/**
 * 📚 BIBLIOTECA DE CONTEÚDO ESTÁTICO (COMPLETA E CIENTIFICAMENTE APROFUNDADA)
 * Agora todos os artigos, inclusive os teasers menores, possuem conteúdo rico.
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
  // CAPA CLASSIC (Scientific American - Mente & Física)
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
    title: "Ultrassom Focado (HIFU): Cirurgia Invisível", 
    author: "Medicina Vibracional", 
    category: "Biofísica", 
    fact: "O ultrassom focado pode aquecer um ponto do tamanho de um grão de arroz dentro do corpo a 65°C em milissegundos, sem afetar a pele acima.",
    imageUrl: "https://image.pollinations.ai/prompt/focused%20ultrasound%20medical%20therapy%20brain%20waves%20healing%20blue%20abstract?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/HIFU%20medical%20device%20schematic%20sound%20waves%20converging?width=1600&height=900&nologo=true", caption: "Convergência acústica: a energia se soma apenas no ponto focal." },
        { url: "https://image.pollinations.ai/prompt/blood%20brain%20barrier%20microbubbles%20ultrasound%20opening?width=1600&height=900&nologo=true", caption: "Microbolhas vibrando para abrir a barreira hematoencefálica." }
    ],
    content: `O som é geralmente associado à comunicação ou música, mas fisicamente, é uma onda de pressão mecânica. Quando aumentamos a frequência para a faixa do ultrassom e focamos múltiplos feixes em um único ponto (como uma lupa foca a luz do sol), criamos uma ferramenta cirúrgica poderosa chamada HIFU (High-Intensity Focused Ultrasound).

    No ponto focal, a energia acústica causa uma vibração molecular tão intensa que gera calor imediato (ablação térmica) ou cavitação (formação de bolhas explosivas). Isso permite "cozinhar" tumores profundos no fígado ou útero sem fazer um único corte na pele do paciente. É a realização da cirurgia não-invasiva perfeita.

    Além da destruição de tecidos, o ultrassom focado de baixa intensidade está revolucionando a neurologia. Ele pode ser usado para abrir temporariamente a barreira hematoencefálica (uma "muralha" que protege o cérebro, mas impede a entrada de remédios). Isso permite que drogas de quimioterapia ou anticorpos para Alzheimer entrem no cérebro apenas nas áreas desejadas, guiadas por ressonância magnética em tempo real.` 
  },
  "DNA Digital": { 
    title: "Armazenamento em DNA: O Arquivo Eterno", 
    author: "Bio-Tech Labs", 
    category: "Genética da Computação", 
    fact: "Todo os dados produzidos pela humanidade hoje poderiam caber em uma sala pequena se armazenados em DNA, com densidade de 215 petabytes por grama.",
    imageUrl: "https://image.pollinations.ai/prompt/DNA%20strand%20made%20of%20binary%20code%20glowing%20blue%20cyberpunk?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/dna%20sequencer%20machine%20futuristic%20lab%20data%20storage?width=1600&height=900&nologo=true", caption: "Sintetizadores de DNA convertem bits digitais em química." },
        { url: "https://image.pollinations.ai/prompt/ancient%20amber%20fossil%20dna%20preservation%20concept?width=1600&height=900&nologo=true", caption: "Longevidade: DNA fóssil dura centenas de milhares de anos." }
    ],
    content: `Estamos gerando mais dados do que conseguimos armazenar. Discos rígidos e fitas magnéticas degradam-se em poucas décadas e ocupam data centers gigantescos que consomem energia de cidades inteiras. A natureza, no entanto, resolveu o problema do armazenamento de dados há bilhões de anos com o DNA.

    O princípio é converter o sistema binário digital (0s e 1s) para o sistema quaternário biológico (as bases A, C, T, G). Cientistas já codificaram filmes, sistemas operacionais e bibliotecas inteiras em fitas de DNA sintético. A densidade é absurda: uma única gota pode conter exabytes de informação. E, ao contrário de um CD que apodrece, o DNA mantido em local fresco e seco permanece legível por centenas de milhares de anos (como provam os genomas de mamutes recuperados).

    O gargalo atual é a velocidade e o custo de "escrever" (sintetizar) e "ler" (sequenciar) esse DNA. Atualmente, é um processo químico lento. Mas com o avanço da biotecnologia, o DNA pode se tornar o "microfilme" do futuro, usado para arquivamento frio de longo prazo, garantindo que o conhecimento humano sobreviva a qualquer apocalipse digital.` 
  },
  "Sonhos Lúcidos": { 
    title: "Metacognição no Sono REM", 
    author: "Neurociência do Sono", 
    category: "Consciência", 
    fact: "Durante um sonho lúcido, o córtex pré-frontal dorsolateral – a sede da lógica e auto-consciência – reativa-se, algo que normalmente não acontece no sono REM.",
    imageUrl: "https://image.pollinations.ai/prompt/lucid%20dreaming%20surreal%20landscape%20floating%20islands%20person%20controlling%20reality?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/brain%20mri%20scan%20sleeping%20activity%20highlighted%20regions?width=1600&height=900&nologo=true", caption: "Atividade gama (40Hz) surge no cérebro adormecido lúcido." },
        { url: "https://image.pollinations.ai/prompt/inception%20movie%20style%20dream%20architect%20city%20bending?width=1600&height=900&nologo=true", caption: "A realidade virtual biológica: simulação perfeita." }
    ],
    content: `Sonhar lucidamente é o ato de perceber que se está sonhando e, frequentemente, ganhar controle sobre a narrativa do sonho. Por muito tempo considerado esoterismo, o fenômeno foi comprovado cientificamente nos anos 80 por Stephen LaBerge, que instruiu sonhadores a moverem os olhos em padrões específicos (código Morse) enquanto dormiam, sinalizando para o mundo exterior de dentro do sonho.

    Neurobiologicamente, o sonho lúcido é um estado híbrido de consciência. Durante o sono REM normal, o cérebro é hiperativo emocionalmente (amígdala), mas a parte lógica e crítica (córtex pré-frontal) está desligada – por isso aceitamos absurdos como voar ou monstros. Na lucidez, o córtex lógico "acorda" enquanto o corpo permanece paralisado e o sistema sensorial continua alucinando o sonho.

    As aplicações vão além da diversão. Atletas usam sonhos lúcidos para treinar memória muscular (o cérebro ativa os mesmos caminhos motores que na vida real). Terapeutas usam para tratar TEPT (Transtorno de Estresse Pós-Traumático), permitindo que pacientes enfrentem pesadelos recorrentes em um ambiente seguro e controlado, reescrevendo o trauma.` 
  },
  "Fusão Fria": { 
    title: "LENR: A Busca pela Energia Infinita", 
    author: "Física Nuclear", 
    category: "Energia Experimental", 
    fact: "Experimentos recentes da NASA e Google demonstraram anomalias de calor em metais carregados com hidrogênio, reacendendo o interesse na área sob o nome 'Reações Nucleares de Baixa Energia' (LENR).",
    imageUrl: "https://image.pollinations.ai/prompt/cold%20fusion%20reactor%20laboratory%20glowing%20blue%20palladium%20rods?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/atomic%20lattice%20palladium%20deuterium%20fusion%20diagram?width=1600&height=900&nologo=true", caption: "Confinamento em rede: átomos espremidos na estrutura do metal." },
        { url: "https://image.pollinations.ai/prompt/tokamak%20fusion%20reactor%20vs%20cold%20fusion%20beaker%20comparison?width=1600&height=900&nologo=true", caption: "Fusão a quente (Tokamak) vs a hipotética fusão a frio." }
    ],
    content: `A fusão nuclear é o processo que alimenta o Sol: unir átomos leves para liberar energia. Isso geralmente exige temperaturas de milhões de graus para vencer a repulsão eletrostática dos núcleos atômicos. A "Fusão a Frio", proposta em 1989 por Fleischmann e Pons, sugeria que isso poderia ocorrer em temperatura ambiente dentro de uma estrutura metálica de paládio eletrolisado. O anúncio foi prematuro e desacreditado, tornando-se um tabu na ciência.

    No entanto, a física por trás da ideia não é impossível. O conceito envolve usar a estrutura cristalina de metais (como o paládio ou níquel) para "espremer" átomos de hidrogênio (ou deutério) tão próximos uns dos outros que o "tunelamento quântico" permita a fusão sem a necessidade de calor extremo.

    Hoje, o campo foi renomeado para LENR (Low Energy Nuclear Reactions). Laboratórios sérios estão observando excesso de calor inexplicável e transmutação de elementos em experimentos controlados. Se o mecanismo for decifrado e ampliado, teríamos baterias do tamanho de uma lata de refrigerante capazes de alimentar uma casa por anos, sem radiação perigosa ou lixo nuclear.` 
  },
  "Núcleo Parou?": { 
    title: "Geodinâmica: O Coração da Terra", 
    author: "Geofísica Global", 
    category: "Ciências da Terra", 
    fact: "O núcleo interno da Terra é uma bola de ferro sólido cristalino com temperatura semelhante à superfície do Sol, girando dentro de um oceano de ferro líquido.",
    imageUrl: "https://image.pollinations.ai/prompt/earth%20core%20cross%20section%20magma%20iron%20crystal%20scientific%20diagram?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/seismic%20waves%20passing%20through%20earth%20core%20diagram?width=1600&height=900&nologo=true", caption: "Sismologia: usando terremotos como 'raio-x' do planeta." },
        { url: "https://image.pollinations.ai/prompt/earth%20magnetic%20field%20generation%20dynamo%20effect?width=1600&height=900&nologo=true", caption: "O dínamo: a rotação do núcleo gera nosso escudo magnético." }
    ],
    content: `Em 2023, manchetes alarmantes diziam que o núcleo da Terra havia "parado". A realidade científica é menos catastrófica, mas igualmente fascinante. O núcleo interno da Terra é desacoplado do manto pelo núcleo externo líquido, permitindo que ele gire em velocidade diferente da crosta.

    Analisando décadas de dados de ondas sísmicas que atravessam o centro do planeta (geradas por terremotos e testes nucleares), cientistas notaram padrões de interferência mudando. Isso indica que o núcleo interno oscila: ele gira um pouco mais rápido que a superfície por algumas décadas, desacelera até parar em relação à superfície, e então gira um pouco mais devagar.

    Esse ciclo de oscilação dura cerca de 70 anos e está intimamente ligado a mudanças sutis na duração do dia (na ordem de milissegundos) e na intensidade do campo magnético da Terra. Não é um sinal de apocalipse, mas sim a respiração geológica profunda de um planeta vivo e dinâmico. Entender esse mecanismo é crucial para prevermos a evolução do nosso campo magnético, que nos protege da radiação solar mortal.` 
  },

  // =================================================================================
  // CAPA NATURE (NatGeo)
  // =================================================================================
  "O Último Santuário": {
    title: "Quimiossíntese: A Vida Sem Sol",
    author: "Sylvia Earle",
    category: "Bioquímica",
    fact: "Bactérias oxidam sulfeto de hidrogênio (H₂S) tóxico para gerar energia (ATP) e fixar carbono, sustentando ecossistemas inteiros na escuridão total.",
    imageKeyword: "deep ocean bioluminescence",
    imageUrl: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&q=80&w=1600", caption: "Fontes hidrotermais: Chaminés negras expelindo minerais a 400°C." },
        { url: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=1600", caption: "Vermes tubulares gigantes que vivem em simbiose com bactérias." }
    ],
    content: `Até 1977, a biologia afirmava que toda a vida na Terra dependia, em última instância, do Sol através da fotossíntese. A descoberta das fontes hidrotermais nas profundezas abissais quebrou esse paradigma. Lá embaixo, sob pressões esmagadoras e escuridão total, a vida prospera através da Quimiossíntese.

    Nesses ambientes, a água do mar penetra na crosta, é superaquecida pelo magma e retorna carregada de minerais dissolvidos. Bactérias especializadas usam a energia química das ligações desses compostos inorgânicos (principalmente a oxidação do enxofre) para converter CO2 em matéria orgânica. Elas são a base de uma cadeia alimentar rica e isolada.

    Vermes tubulares gigantes (Riftia pachyptila) não têm boca nem estômago; eles possuem um órgão chamado trofossomo recheado dessas bactérias simbióticas, que os alimentam diretamente. Estudar essa bioquímica independente da luz solar é crucial para a astrobiologia, pois sugere que luas geladas como Europa (Júpiter) ou Encélado (Saturno) poderiam abrigar vida em seus oceanos subterrâneos escuros.`
  },
  "Fungos Assassinos": { 
    title: "Ophiocordyceps: Engenharia Comportamental", 
    author: "Micologia Evolutiva", 
    category: "Biologia Parasitária", 
    fact: "O fungo não infecta o cérebro da formiga, mas cresce dentro dos músculos, controlando o corpo como uma marionete biológica enquanto o inseto permanece consciente.",
    imageUrl: "https://image.pollinations.ai/prompt/cordyceps%20fungus%20ant%20macro%20photography%20spores%20jungle?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/fungal%20spores%20microscope%20view%20infection?width=1600&height=900&nologo=true", caption: "Esporos penetrando o exoesqueleto enzimaticamente." },
        { url: "https://image.pollinations.ai/prompt/ant%20biting%20leaf%20death%20grip%20zombie%20fungus?width=1600&height=900&nologo=true", caption: "A 'mordida da morte': fixação final antes da frutificação." }
    ],
    content: `Tornado famoso pela cultura pop, o fungo Ophiocordyceps unilateralis é um exemplo aterrorizante e fascinante de coevolução. Ele infecta formigas carpinteiras no chão da floresta. Uma vez dentro, o fungo se alimenta de tecidos não vitais e libera um coquetel químico preciso que sequestra o sistema nervoso central do inseto.

    A formiga perde o medo de altura e sobe na vegetação até uma altura específica (cerca de 25cm), onde a umidade e temperatura são ideais para o fungo. Lá, ela morde com força a nervura de uma folha (a "mordida da morte") e morre. O fungo então consome os órgãos internos e lança uma haste através da cabeça da formiga, criando uma cápsula que explode e chove esporos sobre outras formigas desavisadas abaixo.

    Estudos mostram que o fungo forma uma rede 3D de células conectadas ao redor das fibras musculares da formiga, assumindo o controle motor direto, cortando a conexão do cérebro com o corpo. É, literalmente, um corpo sendo dirigido por um passageiro alienígena.` 
  },
  "Cidades de Coral": { 
    title: "O Branqueamento e a Simbiose Quebrada", 
    author: "Biologia Marinha", 
    category: "Ecologia", 
    fact: "Corais não são coloridos por natureza; suas cores vibrantes vêm de algas microscópicas (zooxantelas) que vivem dentro de seus tecidos em troca de proteção.",
    imageUrl: "https://image.pollinations.ai/prompt/coral%20reef%20bleaching%20contrast%20dead%20white%20vs%20colorful%20alive%20underwater?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/microscope%20view%20coral%20polyps%20zooxanthellae%20algae?width=1600&height=900&nologo=true", caption: "Zooxantelas: as usinas de energia solar do coral." },
        { url: "https://image.pollinations.ai/prompt/great%20barrier%20reef%20aerial%20view%20blue%20ocean?width=1600&height=900&nologo=true", caption: "Recifes vistos do espaço: as maiores estruturas vivas da Terra." }
    ],
    content: `Os recifes de coral são as "florestas tropicais" do mar, cobrindo menos de 1% do oceano mas sustentando 25% da biodiversidade marinha. Eles são construídos por pólipos, pequenos animais parentes das águas-vivas, que secretam um esqueleto de carbonato de cálcio. Sua sobrevivência depende de uma parceria delicada com algas chamadas zooxantelas.

    As algas fazem fotossíntese e dão até 90% da energia que o coral precisa. Em troca, o coral oferece abrigo e nutrientes. O problema é que essa relação tem um "ponto de ruptura" térmico muito baixo. Se a temperatura da água sobe apenas 1°C ou 2°C acima da média por algumas semanas, as algas entram em superprodução de radicais livres, tornando-se tóxicas para o coral.

    Como defesa, o coral expulsa as algas. Sem elas, ele revela seu esqueleto branco calcário – o "branqueamento". Um coral branco não está morto, mas está morrendo de fome. Se a temperatura baixar logo, as algas podem voltar. Se não, o coral morre e o ecossistema colapsa, sendo coberto por algas invasoras. A ciência busca agora criar "super-corais" geneticamente adaptados ao calor em laboratório para replantio.` 
  },
  "O Elo Perdido": { 
    title: "Homo Naledi e a Evolução Arbustiva", 
    author: "Paleoantropologia", 
    category: "Evolução Humana", 
    fact: "A evolução humana não foi uma 'marcha do progresso' linear (macaco -> homem), mas sim um arbusto desordenado com muitas espécies humanas convivendo ao mesmo tempo.",
    imageUrl: "https://image.pollinations.ai/prompt/homo%20naledi%20cave%20reconstruction%20skull%20fossil%20anthropology?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/human%20evolution%20tree%20bush%20diagram%20multiple%20species?width=1600&height=900&nologo=true", caption: "A árvore genealógica complexa dos hominídeos." },
        { url: "https://image.pollinations.ai/prompt/ancient%20cave%20burial%20ritual%20primitive%20humans?width=1600&height=900&nologo=true", caption: "Rituais funerários podem ser muito mais antigos do que pensávamos." }
    ],
    content: `A descoberta do *Homo naledi* em uma caverna profunda na África do Sul chocou a ciência. Com um cérebro do tamanho de uma laranja (típico de ancestrais de 2 milhões de anos), mas com mãos e pés surpreendentemente modernos, ele viveu há apenas 300.000 anos – a mesma época em que nossa espécie, *Homo sapiens*, estava surgindo.

    O mais intrigante é o local da descoberta: uma câmara de difícil acesso, sugerindo que o *Homo naledi* depositava seus mortos lá deliberadamente. Comportamento funerário e simbólico era considerado exclusivo de humanos de cérebro grande. Isso sugere que a complexidade emocional e cultural pode ter precedido o crescimento do cérebro.

    Além disso, a genética moderna (DNA antigo) revelou que *Homo sapiens*, Neandertais e Denisovanos não apenas conviveram, mas cruzaram entre si. A maioria dos humanos hoje carrega genes neandertais que ajudam na imunidade ou afetam a pele. "O Elo Perdido" não existe porque não há uma corrente única, mas uma rede complexa de populações que se separavam e se reencontravam.` 
  },
  "Árvores Falam": { 
    title: "Wood Wide Web: A Internet da Floresta", 
    author: "Ecologia Florestal", 
    category: "Botânica", 
    fact: "Através de fungos micorrízicos, árvores podem distinguir seus próprios 'filhos' de outras plantas, enviando-lhes mais nutrientes.",
    imageUrl: "https://image.pollinations.ai/prompt/mycorrhizal%20network%20underground%20glowing%20roots%20connecting%20trees%20avatar%20style?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/microscope%20fungi%20hyphae%20connecting%20plant%20roots?width=1600&height=900&nologo=true", caption: "Hifas fúngicas: os cabos de fibra óptica da natureza." },
        { url: "https://image.pollinations.ai/prompt/mother%20tree%20forest%20ecosystem%20diagram?width=1600&height=900&nologo=true", caption: "A 'Árvore Mãe' redistribuindo recursos para a comunidade." }
    ],
    content: `Esqueça a ideia de que as árvores são indivíduos solitários competindo por luz. A ecologista Suzanne Simard provou que as florestas são sociedades cooperativas conectadas subterraneamente por uma rede vasta de fungos chamada micorriza.

    Nessa simbiose, as árvores dão açúcares (da fotossíntese) aos fungos, e os fungos buscam minerais no solo para as árvores. Mas a rede também serve de comunicação. Se uma árvore é atacada por insetos, ela envia sinais químicos de alerta pela rede. As árvores vizinhas, ao receberem o sinal, começam a produzir toxinas defensivas antes mesmo de serem atacadas.

    Ainda mais impressionante é a redistribuição de recursos. Árvores grandes e antigas ("Árvores Mãe") atuam como hubs, enviando carbono e água para mudas jovens que crescem na sombra e não conseguiriam sobreviver sozinhas. A floresta age como um superorganismo, onde a saúde do grupo garante a estabilidade do ecossistema a longo prazo.` 
  },
  "Vírus Gigantes": { 
    title: "Mimivírus e a Fronteira da Vida", 
    author: "Virologia", 
    category: "Microbiologia", 
    fact: "Vírus gigantes possuem genes para produção de proteínas e reparo de DNA, funções que antes acreditávamos serem exclusivas de células vivas.",
    imageUrl: "https://image.pollinations.ai/prompt/giant%20virus%20mimivirus%20electron%20microscope%203d%20render%20abstract?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/permafrost%20melting%20ancient%20virus%20awakening?width=1600&height=900&nologo=true", caption: "Vírus 'zumbis' de 30.000 anos revividos do permafrost." },
        { url: "https://image.pollinations.ai/prompt/bacteriophage%20vs%20giant%20virus%20size%20comparison?width=1600&height=900&nologo=true", caption: "Escala: alguns vírus são maiores que bactérias comuns." }
    ],
    content: `Os livros de biologia costumavam definir vírus como simples pacotes de material genético (DNA ou RNA) incapazes de fazer qualquer coisa fora de uma célula hospedeira. A descoberta dos "Vírus Gigantes" (como o Mimivírus, Pandoravírus e Pithovírus) nas últimas duas décadas destruiu essa definição simples.

    Eles são enormes, visíveis em microscópios de luz comuns, e possuem genomas maiores que os de muitas bactérias. O mais chocante é que eles carregam genes metabólicos complexos, sugerindo que eles podem ser resquícios degenerados de um antigo tipo de célula que "escolheu" o parasitismo e perdeu parte de sua autonomia, ou talvez representem um "quarto domínio" da árvore da vida, totalmente distinto de bactérias, arqueas e eucariontes.

    Muitos desses gigantes estão sendo encontrados em permafrost (solo congelado) siberiano que está derretendo devido ao aquecimento global. Cientistas já conseguiram "reviver" vírus gigantes de 30.000 anos de idade que ainda eram capazes de infectar amebas. Embora não infectem humanos, eles levantam a questão: que outros segredos biológicos (ou patógenos) estão dormindo no gelo?` 
  },
  "Gelo Derretendo": { 
    title: "Paleoclimatologia: Lendo o Passado no Gelo", 
    author: "Glaciologia", 
    category: "Clima", 
    fact: "O gelo da Antártida contém bolhas de ar intactas de 800.000 anos atrás, permitindo-nos medir diretamente a atmosfera da época dos Neandertais.",
    imageUrl: "https://image.pollinations.ai/prompt/ice%20core%20sample%20lab%20scientist%20examining%20ancient%20air%20bubbles?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/antarctica%20drilling%20ice%20core%20expedition?width=1600&height=900&nologo=true", caption: "Extraindo cilindros de gelo de quilômetros de profundidade." },
        { url: "https://image.pollinations.ai/prompt/co2%20graph%20vs%20temperature%20history%20ice%20core%20data?width=1600&height=900&nologo=true", caption: "A correlação inegável entre CO2 e temperatura global." }
    ],
    content: `Como sabemos que o aquecimento atual não é natural? A resposta está nos núcleos de gelo ("Ice Cores"). A neve que cai nos polos não derrete; ela se acumula ano após ano, comprimindo-se em gelo e aprisionando pequenas bolhas da atmosfera daquele momento.

    Ao perfurar quilômetros de profundidade na Antártida ou Groenlândia, cientistas extraem cilindros que funcionam como uma máquina do tempo. Analisando a química da água do gelo (isótopos de oxigênio), podemos determinar a temperatura exata em que a neve caiu. Analisando o ar das bolhas, medimos o CO2.

    Os dados são claros: nos últimos 800 mil anos, o CO2 oscilou naturalmente entre 180 e 280 ppm (partes por milhão) acompanhando as eras glaciais. Hoje, estamos acima de 420 ppm, um pico vertical sem precedentes no registro geológico recente. O gelo confirma que estamos realizando um experimento geoquímico perigoso e inédito com a atmosfera do nosso planeta.` 
  },

  // =================================================================================
  // CAPA TECH (Wired)
  // =================================================================================
  "A Singularidade": {
    title: "Lei dos Retornos Acelerados",
    author: "Ray Kurzweil",
    category: "Futurismo Matemático",
    fact: "O progresso tecnológico não é linear, é exponencial. Avançaremos no século XXI o equivalente a 20.000 anos de progresso no ritmo de hoje.",
    imageKeyword: "artificial intelligence cyborg",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1600", caption: "Redes Neurais Profundas: camadas de abstração imitando o córtex." },
        { url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1600", caption: "Transumanismo: a fusão biológica será o próximo passo." }
    ],
    content: `A Singularidade é o ponto teórico onde a IA se torna capaz de melhorar seu próprio código recursivamente, gerando uma explosão de inteligência (ASI - Superinteligência Artificial). O futurista Ray Kurzweil baseia isso na "Lei dos Retornos Acelerados": tecnologias da informação seguem curvas exponenciais (como a Lei de Moore), não lineares.

    Isso significa que o futuro chega mais rápido do que nossa intuição linear prevê. O smartphone no seu bolso é milhões de vezes mais poderoso que o computador da NASA que levou o homem à Lua. Se a tendência continuar, teremos o poder de computação de um cérebro humano por $1000 antes de 2030.

    O conceito levanta questões profundas: Se a mente é apenas o resultado do processamento de informações em uma rede neural biológica, então ela é computável e replicável. O "Upload de Mente" (transferir a consciência para um substrato digital) poderia oferecer imortalidade digital, transformando a humanidade em uma espécie multi-substrato.`
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
  "O Fim do Dinheiro": { 
    title: "CBDCs e o Dinheiro Programável", 
    author: "Economia Digital", 
    category: "Fintech", 
    fact: "Dinheiro programável permite 'Smart Contracts': pagamentos que só são liberados automaticamente se certas condições (como a entrega de um produto) forem cumpridas.",
    imageUrl: "https://image.pollinations.ai/prompt/digital%20currency%20blockchain%20network%20glowing%20coins%20futuristic?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/bitcoin%20mining%20farm%20servers%20blue%20light?width=1600&height=900&nologo=true", caption: "Blockchain: o livro-razão imutável e descentralizado." },
        { url: "https://image.pollinations.ai/prompt/cashless%20society%20payment%20biometric%20scan?width=1600&height=900&nologo=true", caption: "Pagamentos invisíveis via biometria." }
    ],
    content: `O dinheiro físico é anônimo e burro. O dinheiro digital do futuro é rastreável e inteligente. Bancos Centrais de todo o mundo (incluindo o Brasil com o DREX) estão criando as CBDCs (Central Bank Digital Currencies). Diferente do dinheiro no seu app de banco hoje (que é apenas um registro num banco de dados privado), a CBDC é um token digital emitido diretamente pelo governo.

    Isso permite "Dinheiro Programável". O governo poderia, por exemplo, emitir um auxílio emergencial que expira se não for usado em 30 dias, ou que só pode ser gasto em comida e remédios, bloqueando a compra de álcool.

    Embora prometa eficiência e inclusão financeira, o fim do dinheiro físico levanta preocupações massivas de privacidade. Em uma sociedade "cashless", cada transação é um dado. O desafio das democracias será equilibrar a conveniência tecnológica com o direito fundamental ao anonimato financeiro.` 
  },
  "Mineração Lunar": { 
    title: "Hélio-3: A Corrida do Ouro Espacial", 
    author: "Space Economy", 
    category: "Exploração Espacial", 
    fact: "A superfície da Lua contém cerca de 1 milhão de toneladas de Hélio-3, um isótopo raro na Terra ideal para fusão nuclear limpa.",
    imageUrl: "https://image.pollinations.ai/prompt/moon%20mining%20base%20futuristic%20heavy%20machinery%20earth%20in%20background?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/fusion%20reactor%20helium3%20clean%20energy%20concept?width=1600&height=900&nologo=true", caption: "Hélio-3 + Deutério: fusão sem nêutrons radioativos." },
        { url: "https://image.pollinations.ai/prompt/starship%20landing%20moon%20cargo%20unloading?width=1600&height=900&nologo=true", caption: "Logística interplanetária: reduzindo o custo de lançamento." }
    ],
    content: `A Lua não é mais apenas um destino de prestígio político; é um ativo econômico. A regolita lunar (solo) é rica em Hélio-3, depositado pelos ventos solares ao longo de bilhões de anos. Na Terra, nossa atmosfera bloqueia esse isótopo, tornando-o incrivelmente raro e caro.

    Por que ele é valioso? O Hélio-3 é o combustível perfeito para reatores de fusão nuclear de segunda geração. Ao contrário da fusão de deutério-trítio, a reação com Hélio-3 não produz nêutrons de alta energia, o que significa que o reator não se torna radioativo e a energia pode ser capturada diretamente como eletricidade, sem turbinas a vapor ineficientes.

    Além da energia, o polo sul da Lua contém gelo de água nas crateras sombreadas. Essa água pode ser quebrada em Hidrogênio e Oxigênio – combustível de foguete. A Lua se tornará o "posto de gasolina" do sistema solar, permitindo missões baratas para Marte e além, pois decolar da Lua (baixa gravidade) exige 20 vezes menos energia que da Terra.` 
  },
  "Chips Neurais": { 
    title: "BCI: O Fim das Telas?", 
    author: "NeuroTech", 
    category: "Biotecnologia", 
    fact: "A Neuralink já demonstrou um macaco jogando 'Pong' apenas com a mente, e testes em humanos mostram controle de cursor com precisão.",
    imageUrl: "https://image.pollinations.ai/prompt/brain%20computer%20interface%20neural%20link%20chip%20glowing%20synapses?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/paralyzed%20patient%20using%20mind%20control%20exoskeleton?width=1600&height=900&nologo=true", caption: "Restaurando movimentos: a ponte digital para a medula espinhal." },
        { url: "https://image.pollinations.ai/prompt/telepathy%20concept%20brain%20to%20brain%20communication%20digital?width=1600&height=900&nologo=true", caption: "Comunicação sintética: enviando pensamentos via nuvem." }
    ],
    content: `Interfaces Cérebro-Computador (BCIs) traduzem a tempestade elétrica dos neurônios em código digital. Inicialmente focada em medicina restaurativa, essa tecnologia já permite que tetraplégicos controlem braços robóticos, digitem textos e até voltem a andar através de pontes digitais que contornam lesões na medula.

    A próxima fronteira é a banda larga neural. Dispositivos atuais leem centenas de neurônios; o objetivo é ler milhões. Isso permitiria não apenas "saída" (controlar coisas), mas "entrada" (receber dados). Imagine fazer o download de uma habilidade ou visualizar um mapa diretamente no córtex visual, sem usar os olhos.

    O objetivo de longo prazo de empresas como a Neuralink é a simbiose com a IA. Se a inteligência artificial nos superar cognitivamente, a única forma de não nos tornarmos irrelevantes (ou "gatos domésticos" da IA) seria nos fundirmos a ela, aumentando nossa capacidade cognitiva biológica com camadas digitais instantâneas.` 
  },
  "Elevador Espacial": { 
    title: "Engenharia de Megaestruturas: O Elevador", 
    author: "Eng. Civil Espacial", 
    category: "Astroengenharia", 
    fact: "A tensão no cabo de um elevador espacial seria maior do que qualquer material tradicional (aço, titânio) pode suportar sem se romper sob o próprio peso.",
    imageUrl: "https://image.pollinations.ai/prompt/space%20elevator%20earth%20orbit%20station%20tether%20nanotubes%20sci-fi?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/carbon%20nanotubes%20microscope%20structure%20hexagonal?width=1600&height=900&nologo=true", caption: "Nanotubos de Carbono: a única esperança material." },
        { url: "https://image.pollinations.ai/prompt/space%20elevator%20climber%20robot%20view%20from%20top?width=1600&height=900&nologo=true", caption: "Escaladores eletromagnéticos levando carga a custo zero." }
    ],
    content: `Chegar ao espaço é caro porque precisamos carregar o combustível para carregar o combustível. A Equação do Foguete de Tsiolkovsky é impiedosa. Um elevador espacial contornaria isso: um cabo esticado do equador da Terra até além da órbita geoestacionária (36.000 km), mantido teso pela força centrífuga da rotação do planeta.

    Veículos elétricos (climbers) subiriam pelo cabo usando energia solar ou transmitida por laser, sem precisar de tanques de propelente explosivo. O custo de colocar 1kg em órbita cairia de $20.000 para cerca de $200, abrindo o sistema solar para colonização e turismo em massa.

    O problema é o material. O cabo precisa ser leve e incrivelmente forte para não arrebentar sob seu próprio peso descomunal. O aço se rompe após alguns quilômetros verticais. A única substância conhecida pela física capaz de aguentar essa tensão são os Nanotubos de Carbono (Graphene), que são 100 vezes mais fortes que o aço. Já conseguimos produzi-los em laboratório, mas apenas em centímetros. O desafio agora é fabricar um cabo contínuo de 36.000 km sem defeitos atômicos.` 
  },
  "Baterias Infinitas": { title: "Baterias de Diamante Nuclear", author: "Física Nuclear", category: "Energia", fact: "Usando Carbono-14 de lixo nuclear, é possível criar baterias de diamante que geram pequena corrente por milhares de anos.", imageUrl: "https://image.pollinations.ai/prompt/diamond%20nuclear%20battery%20glowing%20blue%20concept?width=1600&height=900&nologo=true", content: "Não servem para carros, mas para sensores remotos, marcapassos e sondas espaciais, uma bateria que dura 28.000 anos sem recarga é revolucionária. Ela converte o decaimento beta diretamente em eletricidade." },

  // =================================================================================
  // CAPA COSMOS (Astronomy)
  // =================================================================================
  "Além do Horizonte": { 
    title: "JWST: A Máquina do Tempo Infravermelha", 
    author: "Astrofísica NASA", 
    category: "Astronomia", 
    fact: "O espelho do James Webb é folheado a ouro puro para maximizar a reflexão de luz infravermelha, essencial para ver através da poeira cósmica.",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/james%20webb%20telescope%20deep%20field%20galaxies%20stars?width=1600&height=900&nologo=true", caption: "Campo Profundo: milhares de galáxias no espaço de um grão de areia." },
        { url: "https://image.pollinations.ai/prompt/exoplanet%20atmosphere%20spectrum%20data%20analysis?width=1600&height=900&nologo=true", caption: "Espectroscopia: analisando a composição química de mundos distantes." }
    ],
    content: `O Telescópio Espacial James Webb (JWST) não é apenas um sucessor do Hubble; é um tipo diferente de "olho". Enquanto o Hubble via luz visível, o Webb vê em infravermelho. Isso é crucial por causa da expansão do universo: a luz das primeiras estrelas e galáxias, emitidas há 13,5 bilhões de anos, foi "esticada" (Redshift) para o espectro infravermelho durante sua longa viagem até nós.

    Com essa capacidade, o Webb está nos mostrando o "Amanhecer Cósmico" – o momento em que as primeiras luzes se acenderam após a Idade das Trevas do universo. Ele revelou que galáxias massivas e bem formadas existiam muito antes do que os modelos teóricos previam, forçando os cosmólogos a reescreverem a história da evolução galáctica.

    Além do passado profundo, o Webb é um caçador de vida. Ele pode analisar a luz das estrelas que passa pela atmosfera de exoplanetas. Se houver vida em um planeta, ela desequilibra quimicamente a atmosfera (por exemplo, oxigênio e metano coexistindo). O Webb tem a precisão necessária para detectar essas "bioassinaturas" em mundos rochosos a anos-luz de distância.` 
  },
  "Matéria Escura": { 
    title: "Massa Oculta: A Gravidade Sem Fonte", 
    author: "Vera Rubin", 
    category: "Cosmologia", 
    fact: "A velocidade orbital das estrelas nas bordas das galáxias viola as Leis de Kepler, a menos que exista 5x mais massa do que vemos.", 
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600", caption: "Lentes gravitacionais: a matéria escura entorta a luz de galáxias distantes." },
        { url: "https://images.unsplash.com/photo-1534996858221-380b92700493?auto=format&fit=crop&q=80&w=1600", caption: "Simulação da estrutura em larga escala do universo." }
    ],
    content: `A Matéria Escura é um "tapa-buraco" teórico necessário para que a gravidade funcione na escala galáctica. Segundo a Relatividade Geral, a gravidade é causada pela massa. No entanto, ao somar toda a massa visível (estrelas, gás, poeira) de uma galáxia, o total não é suficiente para mantê-la unida na velocidade em que gira. Pela lógica, as galáxias deveriam se despedaçar como um carrossel girando rápido demais.

    A física propõe que a Matéria Escura seja composta de WIMPs (Weakly Interacting Massive Particles) - partículas que têm massa, mas não interagem com a força eletromagnética (não emitem nem refletem luz) nem com a força nuclear forte. Elas interagem apenas via gravidade e, possivelmente, força nuclear fraca.

    Detectores como o LUX-ZEPLIN usam tanques de xenônio líquido ultra-puro enterrados profundamente no subsolo (para blindar raios cósmicos) na tentativa de captar o flash sutil de um WIMP colidindo com um núcleo de xenônio. Até hoje, nenhum sinal foi confirmado, mantendo a Matéria Escura como o maior mistério não resolvido da física moderna. Alternativas como a gravidade modificada (MOND) tentam explicar os efeitos sem novas partículas, mas falham em explicar a estrutura em grande escala do universo.` 
  },
  "Terra 2.0": { 
    title: "Zona Cachinhos Dourados", 
    author: "Astrobiologia", 
    category: "Exoplanetas", 
    fact: "Kepler-452b é o primo mais próximo da Terra já encontrado: 60% maior, orbita uma estrela como o Sol e tem a temperatura certa para água líquida.",
    imageUrl: "https://image.pollinations.ai/prompt/exoplanet%20kepler%20452b%20ocean%20alien%20vegetation%20sunset?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/trappist-1%20system%20surface%20view%20multiple%20planets%20in%20sky?width=1600&height=900&nologo=true", caption: "Sistema TRAPPIST-1: 7 mundos rochosos espremidos." },
        { url: "https://image.pollinations.ai/prompt/transit%20method%20exoplanet%20detection%20light%20curve?width=1600&height=900&nologo=true", caption: "Método de Trânsito: detectando a sombra do planeta." }
    ],
    content: `Até 1992, não sabíamos se existiam planetas fora do nosso sistema solar. Hoje, confirmamos mais de 5.000. A busca pela "Terra 2.0" foca em planetas rochosos na Zona Habitável – a distância da estrela onde a água pode existir em estado líquido, nem gelo, nem vapor.

    O sistema TRAPPIST-1 é o mais promissor, com 7 planetas do tamanho da Terra orbitando uma anã vermelha ultra-fria. Três deles estão na zona habitável. Como estão muito próximos entre si, de um planeta você veria os outros no céu maiores do que a nossa Lua.

    O desafio das anãs vermelhas (as estrelas mais comuns) é que elas são instáveis, lançando explosões de radiação que podem varrer a atmosfera dos planetas. A verdadeira Terra 2.0 precisa orbitar uma estrela calma tipo-Sol e ter um campo magnético forte. A próxima geração de telescópios gigantes em solo (ELT) poderá fotografar esses pontos pálidos diretamente, buscando o "reflexo vermelho" da clorofila alienígena.` 
  },
  "O Big Bang": { title: "Inflação Cósmica", author: "Cosmologia", category: "Origens", fact: "O universo expandiu-se mais rápido que a luz nos primeiros 10^-32 segundos.", imageUrl: "https://image.pollinations.ai/prompt/big%20bang%20explosion%20cosmic%20inflation%20abstract%20art?width=1600&height=900&nologo=true", content: "O Big Bang não foi uma explosão no espaço, mas uma explosão DO espaço. O universo surgiu de um ponto de densidade infinita e se expandiu. A radiação cósmica de fundo é o eco térmico desse evento, resfriado pela expansão para -270°C, visível em todas as direções." },
  "Motor de Dobra": { title: "Dobra Espacial (Warp Drive)", author: "Física Teórica", category: "Propulsão", fact: "A Métrica de Alcubierre prova matematicamente que viajar mais rápido que a luz é possível sem violar a relatividade, se você contrair o espaço à frente e expandir atrás.", imageUrl: "https://image.pollinations.ai/prompt/alcubierre%20warp%20drive%20spaceship%20bending%20space%20time%20grid?width=1600&height=900&nologo=true", content: "Para a nave, a velocidade é zero; é o espaço ao redor que se move. O problema? Exige 'energia negativa' ou massa exótica para funcionar, algo que nunca observamos em quantidades macroscópicas. Mas a NASA tem um laboratório (Eagleworks) estudando a física de interferometria para detectar minúsculas dobras espaciais." },
  "Neutrinos": { title: "Observatório IceCube", author: "Física de Partículas", category: "Física", fact: "Para detectar neutrinos, cientistas usam 1 km cúbico de gelo puro no Polo Sul como detector.", imageUrl: "https://image.pollinations.ai/prompt/icecube%20neutrino%20observatory%20antarctica%20sensors%20under%20ice?width=1600&height=900&nologo=true", content: "Neutrinos interagem tão pouco que podem atravessar um ano-luz de chumbo sem bater. O IceCube detecta os raríssimos choques que geram um flash azul (Radiação Cherenkov) no gelo escuro. Eles são os únicos mensageiros que nos permitem 'ver' dentro de supernovas e buracos negros." },
  "Sinais de Rádio": { title: "O Sinal Wow! e FRBs", author: "SETI", category: "Radioastronomia", fact: "Fast Radio Bursts (FRBs) liberam em milissegundos mais energia que o Sol em 80 anos.", imageUrl: "https://image.pollinations.ai/prompt/arecibo%20message%20radio%20telescope%20space%20signal%20visualization?width=1600&height=900&nologo=true", content: "A maioria dos sinais estranhos acaba sendo natural (pulsares, magnetares). Mas o sinal Wow! de 1977 tinha a assinatura exata esperada de uma transmissão artificial interestelar e nunca se repetiu. A busca continua focada em 'tecnoassinaturas' como lasers ou esferas de Dyson." },

  // =================================================================================
  // CAPA VINTAGE (História & Arqueologia)
  // =================================================================================
  "A Máquina de Anticítera": {
    title: "O Primeiro Computador da História",
    author: "Arqueologia Mecânica",
    category: "Tecnologia Antiga",
    fact: "O mecanismo usava um sistema de engrenagem diferencial para subtrair ciclos lunares e solares, algo que se acreditava ter sido inventado apenas no século 16.",
    imageUrl: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/antikythera%20mechanism%20reconstruction%20bronze%20gears%20shiny?width=1600&height=900&nologo=true", caption: "Reconstrução: 37 engrenagens de bronze em uma caixa de madeira." },
        { url: "https://image.pollinations.ai/prompt/x-ray%20scan%20antikythera%20mechanism%20corroded%20gears?width=1600&height=900&nologo=true", caption: "Raio-X revelou a complexidade oculta sob a corrosão marinha." }
    ],
    content: `Recuperado de um naufrágio romano em 1901, o Mecanismo de Anticítera parecia apenas um pedaço de bronze corroído. Décadas depois, scans modernos revelaram o impossível: um computador analógico de precisão suíça datado de 100 a.C.

    Ele não apenas previa as posições do Sol, Lua e planetas, mas também eclipses (com códigos de cores para prever a hora) e as datas dos Jogos Olímpicos Pan-helênicos. A complexidade matemática embutida nas relações das engrenagens mostra que os gregos antigos possuíam conhecimento heliocêntrico e mecânico muito superior ao que os livros de história registravam.

    A existência deste dispositivo levanta uma questão perturbadora: o que aconteceu com essa tecnologia? Por que desapareceu por 1500 anos até o surgimento dos relógios astronômicos na Europa medieval? Anticítera é a prova física de que o progresso humano não é uma linha reta ascendente, mas sujeito a colapsos e esquecimentos catastróficos.`
  },
  "Tumbas Perdidas": { 
    title: "Arqueologia de Múons: Vendo Através da Pedra", 
    author: "Scan Pyramids", 
    category: "Física de Partículas Aplicada", 
    fact: "Usando detectores de raios cósmicos (múons), cientistas descobriram um vazio de 30 metros de comprimento dentro da Grande Pirâmide de Gizé em 2017.",
    imageUrl: "https://image.pollinations.ai/prompt/great%20pyramid%20giza%20cosmic%20ray%20scan%20hidden%20chamber%20visualization?width=1600&height=900&nologo=true",
    additionalImages: [
        { url: "https://image.pollinations.ai/prompt/cleopatra%20tomb%20underwater%20alexandria%20ruins%20diver?width=1600&height=900&nologo=true", caption: "A busca submarina pela tumba perdida de Cleópatra." },
        { url: "https://image.pollinations.ai/prompt/lidar%20scan%20maya%20city%20jungle%20hidden%20structures?width=1600&height=900&nologo=true", caption: "LIDAR revelando megacidades Maias sob a selva." }
    ],
    content: `A era de Indiana Jones com pás e picaretas acabou. A nova arqueologia usa física de partículas. Múons são partículas elementares criadas quando raios cósmicos atingem a atmosfera. Elas chovem sobre a Terra constantemente e conseguem atravessar rocha sólida, mas são absorvidas gradualmente pela densidade da pedra.

    Colocando detectores sensíveis dentro ou ao redor de monumentos, podemos criar uma "radiografia" da estrutura. Se houver mais múons chegando em um ponto do detector, significa que eles atravessaram menos pedra – indicando um buraco ou câmara oculta. Foi assim que o projeto ScanPyramids achou o "Grande Vazio" em Quéops, uma câmara selada há 4.500 anos.

    Essa tecnologia não-invasiva é a esperança para encontrar a tumba de Nefertiti (suspeita-se estar atrás das paredes da tumba de Tutancâmon) ou a do Primeiro Imperador da China (cujo túmulo cercado por rios de mercúrio nunca foi aberto).` 
  },
  "O Código Voynich": { title: "O Mistério Medieval", author: "Criptologia", category: "História", fact: "O manuscrito segue a Lei de Zipf (uma regra estatística de linguagens naturais), sugerindo que não é apenas rabiscos aleatórios, mas um idioma real cifrado.", imageUrl: "https://image.pollinations.ai/prompt/voynich%20manuscript%20page%20weird%20plants%20text%20macro?width=1600&height=900&nologo=true", content: "Datado do século 15, este livro contém ilustrações de plantas que não existem, diagramas astrológicos bizarros e mulheres banhando-se em tubos verdes. A IA moderna e os melhores criptógrafos da NSA falharam em decifrá-lo. É um idioma perdido? Um código de alquimista? Ou uma fraude elaborada criada para tirar dinheiro de um imperador?" },
  "Newton Oculto": { title: "Isaac Newton: O Último Mago", author: "História da Ciência", category: "Biografia", fact: "Newton escreveu mais de 1 milhão de palavras sobre alquimia e teologia, muito mais do que escreveu sobre física ou matemática.", imageUrl: "https://image.pollinations.ai/prompt/isaac%20newton%20alchemy%20lab%20experiment%20painting%20style?width=1600&height=900&nologo=true", content: "Conhecemos Newton como o pai da razão, mas ele era profundamente místico. Ele passou décadas tentando decifrar códigos bíblicos para prever o apocalipse (calculou para 2060) e buscando a Pedra Filosofal para transmutar metais. Para ele, a gravidade era apenas mais uma manifestação do poder divino oculto na matéria." },
  "Pirâmides": { title: "Concreto Geopolimérico?", author: "Engenharia de Materiais", category: "Arqueologia", fact: "Microscopia eletrônica sugere que alguns blocos das pirâmides não são calcário natural cortado, mas sim um tipo de concreto antigo moldado no local.", imageUrl: "https://image.pollinations.ai/prompt/egyptian%20pyramids%20construction%20white%20limestone%20casing%20gold%20capstone?width=1600&height=900&nologo=true", content: "A teoria convencional diz que blocos de 2,5 toneladas foram arrastados por rampas. Mas a teoria do geopolímero, proposta por Joseph Davidovits, sugere que os egípcios conheciam uma química avançada para criar pedra sintética misturando calcário, água, cal e natrão. Isso explicaria a precisão absurda dos encaixes onde nem uma agulha passa." },
  "Da Vinci": { title: "Engenharia do Futuro no Passado", author: "História da Arte", category: "Renascença", fact: "Da Vinci desenhou o 'Ornithopter' e o parafuso aéreo 400 anos antes do voo motorizado, baseando-se na dissecção de pássaros.", imageUrl: "https://image.pollinations.ai/prompt/leonardo%20da%20vinci%20sketches%20flying%20machine%20parchment%20vintage?width=1600&height=900&nologo=true", content: "Leonardo não via distinção entre arte e ciência. Seus estudos de fluxo de água (hidrodinâmica) informaram suas pinturas e seus projetos de canais. Ele projetou robôs (o cavaleiro mecânico), tanques de guerra e trajes de mergulho. Sua genialidade estava na observação obsessiva da natureza como a engenheira suprema." },
  "Pólvora": { title: "Alquimia Imortal", author: "História Química", category: "China", fact: "A fórmula original da pólvora (enxofre, carvão, salitre) foi descoberta por taoístas chineses no século 9 que buscavam o elixir da vida eterna.", imageUrl: "https://image.pollinations.ai/prompt/ancient%20chinese%20fireworks%20gunpowder%20alchemy%20lab?width=1600&height=900&nologo=true", content: "A ironia suprema: buscando a vida eterna, criaram a substância mais mortal da história pré-nuclear. A pólvora democratizou a guerra; um camponês com um mosquete podia matar um cavaleiro nobre que treinou a vida toda. Isso destruiu o sistema feudal e moldou o mundo moderno." }
};
