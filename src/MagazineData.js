import { 
  Brain, Atom, Globe, Leaf, Cpu, Rocket, History, Zap, FlaskConical, 
  Microscope, Sparkles, BookOpen 
} from 'lucide-react';

/**
 * 📚 BIBLIOTECA DE CONTEÚDO ESTÁTICO (COMPLETA E EXPANDIDA)
 */
export const STATIC_CONTENT_LIBRARY = {
  // --- CAPA AUTO (Veículos) ---
  "Revolução Elétrica": {
    title: "Eletromagnetismo Aplicado: O Fim da Combustão",
    author: "Eng. Carlos Pista",
    category: "Física Automotiva",
    fact: "Motores elétricos superam 90% de eficiência térmica, enquanto motores a combustão desperdiçam cerca de 70% da energia química em calor (Segunda Lei da Termodinâmica).",
    imageKeyword: "electric car motor cutaway",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600",
    additionalImages: [
        { url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600", caption: "Plataforma skate: baterias no assoalho baixam o centro de gravidade." },
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
