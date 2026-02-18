import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";

interface SEOProps {
  /** Título da página. Se omitido, usa o nome da loja. */
  title?: string;
  /** Descrição da página (max ~160 chars). */
  description?: string;
  /** URL canônica da página. */
  canonical?: string;
  /** URL da imagem para Open Graph / Twitter Card. */
  image?: string;
  /** Tipo Open Graph (padrão: "website"). */
  ogType?: string;
}

const SITE_URL = "https://brabusconveniencia.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const DEFAULT_DESCRIPTION =
  "Conveniência e tabacaria em Aracoiaba-CE. Cervejas geladas, copões, petiscos, delivery via WhatsApp. Aberto até tarde. Rua Antônio Lopes, 571 — Cohab.";

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = SITE_URL + "/",
  image = DEFAULT_IMAGE,
  ogType = "website",
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${siteConfig.storeName}`
    : `${siteConfig.storeName} | Aracoiaba - CE`;

  return (
    <Helmet>
      {/* ----- Básico ----- */}
      <html lang="pt-BR" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* ----- Open Graph ----- */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteConfig.storeName} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={siteConfig.storeName} />

      {/* ----- Twitter Card ----- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
