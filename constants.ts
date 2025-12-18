import { Question, ResultTier } from './types';

export const QUESTIONS: Question[] = [
  // --- PILAR 1: Conteúdo Estratégico ---
  {
    id: 1,
    category: "Conteúdo Estratégico",
    question: "Sobre a sua rotina de postagens no Instagram, qual cenário te define?",
    options: [
      { id: 'A', text: "Posto quando dá vontade ou sobra tempo, geralmente fotos aleatórias do dia a dia.", points: 1 },
      { id: 'B', text: "Tento postar todo dia, mas foco muito em 'trends' e dancinhas para ganhar seguidores.", points: 3 },
      { id: 'C', text: "Tenho um calendário editorial, mas sinto que educo demais e vendo de menos.", points: 5 },
      { id: 'D', text: "Todo post tem intenção clara: ou gera autoridade ou tem um CTA direto para venda/lead.", points: 7 }
    ]
  },
  {
    id: 2,
    category: "Conteúdo Estratégico",
    question: "Como você estrutura a legenda das suas fotos?",
    options: [
      { id: 'A', text: "Coloco emojis ou frases curtas tipo 'Bom dia'.", points: 1 },
      { id: 'B', text: "Escrevo textões inspiracionais, mas esqueço de pedir para a pessoa comprar.", points: 3 },
      { id: 'C', text: "Explico os benefícios do produto, mas o link fica perdido na bio e eu não aviso.", points: 5 },
      { id: 'D', text: "Uso copywriting: toco na dor, apresento a solução e termino com ordem de ação clara.", points: 7 }
    ]
  },
  {
    id: 3,
    category: "Conteúdo Estratégico",
    question: "O que você faz nos Stories diariamente?",
    options: [
      { id: 'A', text: "Repost de memes ou foto do meu café da manhã sem contexto.", points: 1 },
      { id: 'B', text: "Mostro bastidores bagunçados sem explicar o valor do meu trabalho.", points: 3 },
      { id: 'C', text: "Abro caixinha de perguntas, mas respondo de forma técnica e chata.", points: 5 },
      { id: 'D', text: "Construo narrativa: crio desejo, quebro objeções e levo para o Direct/Link.", points: 7 }
    ]
  },
  {
    id: 4,
    category: "Conteúdo Estratégico",
    question: "Quando você lança uma oferta, o que acontece?",
    options: [
      { id: 'A', text: "Silêncio total. Ninguém comenta, ninguém compra.", points: 1 },
      { id: 'B', text: "Muitos likes e comentários 'lindo!', mas zero vendas.", points: 3 },
      { id: 'C', text: "Vendo um pouco, mas sinto que deixei dinheiro na mesa por falta de pressão.", points: 5 },
      { id: 'D', text: "Tenho pico de vendas porque aqueci a audiência antes de ofertar.", points: 7 }
    ]
  },

  // --- PILAR 2: Gestão de Leads/Relacionamento ---
  {
    id: 5,
    category: "Gestão de Leads",
    question: "Como você responde a um cliente que pergunta 'Preço?' no Direct?",
    options: [
      { id: 'A', text: "Demoro horas (ou dias) para responder ou mando só o valor seco.", points: 1 },
      { id: 'B', text: "Mando um texto gigante pronto (copia e cola) que ninguém lê.", points: 3 },
      { id: 'C', text: "Sou simpática, passo o preço, mas se ele some, eu não faço follow-up.", points: 5 },
      { id: 'D', text: "Inicio um script de qualificação, entendo a necessidade e conduzo o fechamento.", points: 7 }
    ]
  },
  {
    id: 6,
    category: "Gestão de Leads",
    question: "Onde ficam armazenados os dados dos seus clientes?",
    options: [
      { id: 'A', text: "Na minha cabeça ou perdidos nas conversas do WhatsApp.", points: 1 },
      { id: 'B', text: "Em um caderno de anotações que às vezes eu perco.", points: 3 },
      { id: 'C', text: "Em uma planilha de Excel básica, mas raramente atualizo.", points: 5 },
      { id: 'D', text: "Uso um CRM ou sistema organizado para fazer recuperação e upsell.", points: 7 }
    ]
  },
  {
    id: 7,
    category: "Gestão de Leads",
    question: "Você faz recuperação de vendas (remarketing manual)?",
    options: [
      { id: 'A', text: "Não, acho chato incomodar quem não comprou.", points: 1 },
      { id: 'B', text: "Só quando estou desesperada por dinheiro no fim do mês.", points: 3 },
      { id: 'C', text: "Mando uma mensagem padrão para todos, sem personalizar.", points: 5 },
      { id: 'D', text: "Sim, tenho um processo estruturado para quebrar objeções de quem parou no quase.", points: 7 }
    ]
  },
  {
    id: 8,
    category: "Gestão de Leads",
    question: "Como você lida com clientes antigos?",
    options: [
      { id: 'A', text: "Esqueço que existem depois que pagam.", points: 1 },
      { id: 'B', text: "Espero que eles voltem sozinhos se gostaram.", points: 3 },
      { id: 'C', text: "Mando mensagem só em datas comemorativas (Natal/Dia das Mães).", points: 5 },
      { id: 'D', text: "Crio ofertas exclusivas e mantenho relacionamento para vender de novo (LTV).", points: 7 }
    ]
  },

  // --- PILAR 3: Posicionamento de Marca/Imagem ---
  {
    id: 9,
    category: "Posicionamento",
    question: "Analise a qualidade visual das suas fotos/vídeos hoje.",
    options: [
      { id: 'A', text: "Fotos escuras, tremidas, feitas de qualquer jeito no celular antigo.", points: 1 },
      { id: 'B', text: "Uso filtros exagerados do Instagram para disfarçar a falta de produção.", points: 3 },
      { id: 'C', text: "São bonitas, mas parecem amadoras perto das grandes marcas do nicho.", points: 5 },
      { id: 'D', text: "Profissionais. Iluminação, cenário e edição transmitem alto valor percebido.", points: 7 }
    ]
  },
  {
    id: 10,
    category: "Posicionamento",
    question: "Sua identidade visual (cores, fontes, logo) transmite o quê?",
    options: [
      { id: 'A', text: "Confusão. Cada dia uso uma cor e fonte diferente.", points: 1 },
      { id: 'B', text: "Básico. Uso templates prontos do Canva que todo mundo usa.", points: 3 },
      { id: 'C', text: "Organização, mas falta personalidade e diferenciação.", points: 5 },
      { id: 'D', text: "Autoridade e Exclusividade. Minha marca é reconhecida de longe.", points: 7 }
    ]
  },
  {
    id: 11,
    category: "Posicionamento",
    question: "Você aparece nos vídeos/fotos?",
    options: [
      { id: 'A', text: "Não, morro de vergonha. Só posto foto de produto ou frases.", points: 1 },
      { id: 'B', text: "Raramente, e quando apareço estou insegura com minha imagem.", points: 3 },
      { id: 'C', text: "Sim, mas sinto que minha roupa/cenário não condizem com o preço que cobro.", points: 5 },
      { id: 'D', text: "Sempre. Sou a cara da marca e minha imagem vende sucesso e confiança.", points: 7 }
    ]
  },
  {
    id: 12,
    category: "Posicionamento",
    question: "Como é sua bio no Instagram?",
    options: [
      { id: 'A', text: "Só meu nome e 'Seja bem-vindo'.", points: 1 },
      { id: 'B', text: "Muitas frases motivacionais e emojis, pouco clara sobre o que faço.", points: 3 },
      { id: 'C', text: "Diz o que faço, mas o link leva para um lugar confuso.", points: 5 },
      { id: 'D', text: "Promessa clara, autoridade estabelecida e CTA único para conversão.", points: 7 }
    ]
  },

  // --- PILAR 4: Métricas e Execução ---
  {
    id: 13,
    category: "Métricas",
    question: "Qual métrica você mais acompanha hoje?",
    options: [
      { id: 'A', text: "Número de seguidores (fico triste se cai).", points: 1 },
      { id: 'B', text: "Número de likes na última foto.", points: 3 },
      { id: 'C', text: "Alcance e impressões.", points: 5 },
      { id: 'D', text: "Lucro líquido, CAC (Custo por Cliente) e Taxa de Conversão.", points: 7 }
    ]
  },
  {
    id: 14,
    category: "Métricas",
    question: "Se o Instagram acabasse hoje, o que aconteceria com seu negócio?",
    options: [
      { id: 'A', text: "Falência imediata. 100% das vendas vêm de lá.", points: 1 },
      { id: 'B', text: "Desespero total, não tenho contato dos clientes fora de lá.", points: 3 },
      { id: 'C', text: "Seria difícil, mas tenho alguns contatos no WhatsApp.", points: 5 },
      { id: 'D', text: "Seguiria vendendo. Tenho lista de e-mail/leads e canais diversificados.", points: 7 }
    ]
  },
  {
    id: 15,
    category: "Métricas",
    question: "Como você define suas metas de vendas?",
    options: [
      { id: 'A', text: "Não tenho meta, o que vier é lucro.", points: 1 },
      { id: 'B', text: "Penso num valor alto, mas não sei como chegar lá.", points: 3 },
      { id: 'C', text: "Baseio no mês anterior, tentando crescer um pouquinho.", points: 5 },
      { id: 'D', text: "Engenharia reversa: defino o faturamento e quebro em ações diárias de venda.", points: 7 }
    ]
  },
];

export const RESULT_TIERS: ResultTier[] = [
  {
    min: 15,
    max: 40,
    title: "ALARME VERMELHO: Rodinha do Hamster",
    description: "Você está correndo, suando, mas não sai do lugar. Sua operação é amadora e dependente da sorte. Marketing bonito não paga boleto, e o seu nem bonito está. Você precisa destruir essa estrutura falha e começar a base do zero.",
    action: "Você precisa de ESTRATÉGIA DE BASE + MENTORIA DE VENDAS urgente.",
    color: "bg-red-600"
  },
  {
    min: 41,
    max: 75,
    title: "ATENÇÃO: Conteúdo Sem Potência",
    description: "Você até tem boa vontade e algum resultado, mas seu conteúdo não gera desejo ardente. Você educa demais e vende de menos. Sua imagem não condiz com o preço que você quer cobrar. O cliente vê 'custo', não 'valor'.",
    action: "O foco agora é POSICIONAMENTO (Estúdio/Branding) e CONTEÚDO DE CONVERSÃO.",
    color: "bg-yellow-500"
  },
  {
    min: 76,
    max: 105,
    title: "QUASE LÁ: Próxima Escala",
    description: "Sua máquina funciona, você já fatura, mas está sobrecarregada ou estagnada em um platô. O perigo aqui é a zona de conforto. Para multiplicar o faturamento sem perder a alma (e a saúde), é hora de refinar.",
    action: "Você precisa de OTIMIZAÇÃO DE FUNIL e MENTORIA DE ESCALA.",
    color: "bg-emerald-600"
  }
];