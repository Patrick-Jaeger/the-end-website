import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Nur scrollen, wenn kein Hash vorhanden ist
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" }); // oder "smooth"
    }
  }, [pathname, hash]);

  return null;
}
