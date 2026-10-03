import { createContext, useContext, useState, ReactNode } from "react";

interface SpotifyConsentContextType {
  hasConsent: boolean;
  giveConsent: () => void;
  revokeConsent: () => void;
}

const SpotifyConsentContext =
  createContext<SpotifyConsentContextType | undefined>(undefined);

const STORAGE_KEY = "spotify_consent";

export function SpotifyConsentProvider({
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
    <SpotifyConsentContext.Provider
      value={{ hasConsent, giveConsent, revokeConsent }}
    >
      {children}
    </SpotifyConsentContext.Provider>
  );
}

export function useSpotifyConsent() {
  const context = useContext(SpotifyConsentContext);

  if (context === undefined) {
    throw new Error(
      "useSpotifyConsent must be used within a SpotifyConsentProvider"
    );
  }

  return context;
}