import { useEffect } from "react";

export default function SEO({ title, description, canonical }) {
  const siteName = "Aïkido Arts Martiaux Reignacais";
  const fullTitle = title ? `${title} — ${siteName}` : siteName;
  const baseUrl = "https://d1ges4chvr5pnl.cloudfront.net";

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    if (description) {
      setMeta('meta[name="description"]', description);
      setMeta('meta[property="og:description"]', description);
    }
    setMeta('meta[property="og:title"]', fullTitle);
    if (canonical) {
      setMeta('meta[property="og:url"]', `${baseUrl}${canonical}`);
      setLink("canonical", `${baseUrl}${canonical}`);
    }
  }, [fullTitle, description, canonical]);

  return null;
}
