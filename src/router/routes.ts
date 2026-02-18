const SITE_URL = "https://brabusconveniencia.vercel.app";

export interface RouteConfig {
  path: string;
  sectionId: string;
  label: string;
  seoTitle?: string;
  seoDescription: string;
  canonical: string;
}

export const appRoutes: RouteConfig[] = [
  {
    path: "/",
    sectionId: "hero",
    label: "Início",
    seoTitle: undefined, // usa o título padrão completo
    seoDescription:
      "Conveniência e tabacaria em Aracoiaba-CE. Cervejas geladas, copões, petiscos, delivery via WhatsApp. Aberto até tarde. Rua Antônio Lopes, 571 — Cohab.",
    canonical: `${SITE_URL}/`,
  },
  {
    path: "/destaques",
    sectionId: "highlights",
    label: "Destaques",
    seoTitle: "Nossos Produtos",
    seoDescription:
      "Cervejas geladas, copões, petiscos e tabacaria na Brabu's em Aracoiaba-CE. Tudo que você precisa para o seu rolê.",
    canonical: `${SITE_URL}/destaques`,
  },
  {
    path: "/promos",
    sectionId: "promos",
    label: "Promoções",
    seoTitle: "Promoções da Semana",
    seoDescription:
      "Confira as promoções da semana na Brabu's Conveniência & Tabacaria em Aracoiaba-CE. Bebidas e petiscos com preços especiais.",
    canonical: `${SITE_URL}/promos`,
  },
  {
    path: "/delivery",
    sectionId: "delivery",
    label: "Entregas",
    seoTitle: "Delivery em Aracoiaba",
    seoDescription:
      "Delivery de bebidas e petiscos em Aracoiaba-CE. Faça seu pedido pelo WhatsApp e receba em casa. Brabu's Conveniência.",
    canonical: `${SITE_URL}/delivery`,
  },
  {
    path: "/horarios",
    sectionId: "hours",
    label: "Horários",
    seoTitle: "Horários de Funcionamento",
    seoDescription:
      "Horários de funcionamento da Brabu's Conveniência & Tabacaria em Aracoiaba-CE. Aberto de segunda a domingo, até tarde.",
    canonical: `${SITE_URL}/horarios`,
  },
  {
    path: "/localizacao",
    sectionId: "location",
    label: "Localização",
    seoTitle: "Como Chegar",
    seoDescription:
      "Encontre a Brabu's Conveniência & Tabacaria em Aracoiaba-CE. Rua Antônio Lopes, 571 — Conjunto Cohab. Veja no mapa.",
    canonical: `${SITE_URL}/localizacao`,
  },
  {
    path: "/contato",
    sectionId: "contact",
    label: "Contato",
    seoTitle: "Contato & Pedidos",
    seoDescription:
      "Entre em contato com a Brabu's Conveniência & Tabacaria pelo WhatsApp ou Instagram. Pedidos e atendimento em Aracoiaba-CE.",
    canonical: `${SITE_URL}/contato`,
  },
];

/** Retorna a config da rota pelo pathname atual */
export function getRouteConfig(pathname: string): RouteConfig {
  return appRoutes.find((r) => r.path === pathname) ?? appRoutes[0];
}
