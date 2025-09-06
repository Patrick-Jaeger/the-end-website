import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Band from "./pages/Band";
import Gigs from "./pages/Gigs";
import Media from "./pages/Media";
import Repertoire from "./pages/Repertoire";
import PALichtverleih from "./pages/PALichtverleih";
import Mearch from "./pages/Mearch";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendering...");
  
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          <BrowserRouter>
            <div>Test - App is loading</div>
            <Routes>
              <Route path="/" element={<div>Home Page Working</div>} />
              <Route path="/band" element={<div>Band Page Working</div>} />
              <Route path="/gigs" element={<div>Gigs Page Working</div>} />
              <Route path="/media" element={<div>Media Page Working</div>} />
              <Route path="/repertoire" element={<div>Repertoire Page Working</div>} />
              <Route path="/pa-lichtverleih" element={<div>PA-Lichtverleih Page Working</div>} />
              <Route path="/mearch" element={<div>Mearch Page Working</div>} />
              <Route path="/kontakt" element={<div>Kontakt Page Working</div>} />
              <Route path="/impressum" element={<div>Impressum Page Working</div>} />
              <Route path="/datenschutz" element={<div>Datenschutz Page Working</div>} />
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("Error in App component:", error);
    return <div>Error loading app: {error.message}</div>;
  }
};

export default App;
