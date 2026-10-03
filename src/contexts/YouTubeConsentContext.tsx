import { createContext, useContext, useState, ReactNode } from "react";

interface YouTubeConsentContextType {
  hasConsent: boolean;
  giveConsent: () => void;
  revokeConsent: () => void;
}

const YouTubeConsentContext =
  createContext<YouTubeConsentContextType | undefined>(undefined);

const STORAGE_KEY = "youtube_consent";

export function YouTubeConsentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [hasConsent, setHasConsent] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(STORAGE_KEY) === "true";
    }

    return false;
  });

  const giveConsent = () => {
    setHasConsent(true);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const revokeConsent = () => {
    setHasConsent(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <YouTubeConsentContext.Provider
      value={{ hasConsent, giveConsent, revokeConsent }}
    >
      {children}
    </YouTubeConsentContext.Provider>
  );
}

export function useYouTubeConsent() {
  const context = useContext(YouTubeConsentContext);

  if (context === undefined) {
    throw new Error(
      "useYouTubeConsent must be used within a YouTubeConsentProvider"
    );
  }

  return context;
}