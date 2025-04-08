
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Index from "./pages/Index";
import Results from "./pages/Results";
import History from "./pages/History";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Background Elements */}
        <div className="bg-ellipse-1"></div>
        <div className="bg-ellipse-2"></div>
        <div className="bg-ellipse-3"></div>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/results" element={<Results />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Results />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
