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
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/band" element={<Band />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/repertoire" element={<Repertoire />} />
          <Route path="/pa-lichtverleih" element={<PALichtverleih />} />
          <Route path="/mearch" element={<Mearch />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
