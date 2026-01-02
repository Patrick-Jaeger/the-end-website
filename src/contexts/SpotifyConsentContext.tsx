import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SpotifyConsentContextType {
  hasConsent: boolean;
  giveConsent: () => void;
}

const SpotifyConsentContext = createContext<SpotifyConsentContextType | undefined>(undefined);

const STORAGE_KEY = "spotify_consent";

export function SpotifyConsentProvider({ children }: { children: ReactNode }) {
  const [hasConsent, setHasConsent] = useState<boolean>(() => {
    // Nur im Browser prüfen
    if (typeof window !== "undefined") {
      return localStorage.getItem(STORAGE_KEY) === "true";
    }
    return false;
  });

  const giveConsent = () => {
    setHasConsent(true);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <SpotifyConsentContext.Provider value={{ hasConsent, giveConsent }}>
      {children}
    </SpotifyConsentContext.Provider>
  );
}

export function useSpotifyConsent() {
  const context = useContext(SpotifyConsentContext);
  if (context === undefined) {
    throw new Error("useSpotifyConsent must be used within a SpotifyConsentProvider");
  }
  return context;
}
