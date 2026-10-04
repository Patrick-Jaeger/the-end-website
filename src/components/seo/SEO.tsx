import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SITE_URL = "https://www.die-band-the-end.de";

export default function SEO({
  title,
  description,
  canonical,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }

      element.content = content;
    };

    const setCanonical = (url: string) => {
      let element = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;

      if (!element) {
        element = document.createElement("link");
        element.rel = "canonical";
        document.head.appendChild(element);
      }

      element.href = url;
    };

    setMeta("description", description);
    setCanonical(canonical || `${SITE_URL}${window.location.pathname}`);
  }, [title, description, canonical]);

  return null;
}