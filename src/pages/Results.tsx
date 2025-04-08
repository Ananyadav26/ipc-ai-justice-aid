import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { ResultCard } from "@/components/ResultCard";
import { CasePrediction } from "@/components/CasePrediction";
import { Button } from "@/components/ui/button";
import { ipcSections, IPCSection } from "@/lib/ipcData";
import { ArrowLeft, FileText, FilePenLine } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface SearchResult extends IPCSection {
  relevance: "high" | "medium" | "low";
}

const Results = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (query) {
      // Simulate API call with a delay
      setLoading(true);
      setTimeout(() => {
        const searchResults = searchIPCSections(query);
        setResults(searchResults);
        setLoading(false);
      }, 1000);
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  // Mock search function
  const searchIPCSections = (query: string): SearchResult[] => {
    const searchTerms = query.toLowerCase().split(" ");
    
    return ipcSections
      .map(section => {
        // Calculate relevance score
        let score = 0;
        
        // Check title matches
        searchTerms.forEach(term => {
          if (section.title.toLowerCase().includes(term)) {
            score += 3;
          }
        });
        
        // Check tag matches
        section.tags.forEach(tag => {
          if (searchTerms.some(term => tag.toLowerCase().includes(term))) {
            score += 2;
          }
        });
        
        // Check description matches
        searchTerms.forEach(term => {
          if (section.description.toLowerCase().includes(term)) {
            score += 1;
          }
        });
        
        // Determine relevance based on score
        let relevance: "high" | "medium" | "low" = "low";
        if (score >= 5) relevance = "high";
        else if (score >= 2) relevance = "medium";
        
        return {
          ...section,
          relevance,
          score // for sorting
        };
      })
      .filter(section => section.score > 0) // Only include sections with some relevance
      .sort((a, b) => b.score - a.score) // Sort by relevance score
      .map(({ score, ...rest }) => rest); // Remove the score property from results
  };

  const getRelevantSectionCounts = () => {
    const high = results.filter(r => r.relevance === "high").length;
    const medium = results.filter(r => r.relevance === "medium").length;
    const low = results.filter(r => r.relevance === "low").length;
    return { high, medium, low };
  };

  const counts = getRelevantSectionCounts();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        
        <div className="flex-1 overflow-y-auto">
          <div className={cn("container py-8 mx-auto", isMobile ? "px-4 max-w-full" : "px-6 max-w-5xl")}>
            <Button variant="ghost" className="mb-4" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-justice-navy mb-2">Search Results</h1>
              <p className="text-gray-600">Showing results for: <span className="font-medium">{query}</span></p>
            </div>
            
            <SearchBar />
            
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="w-16 h-16 bg-justice-navy/20 rounded-full mb-4"></div>
                  <div className="h-6 bg-justice-navy/20 rounded w-48 mb-2"></div>
                  <div className="h-4 bg-justice-navy/20 rounded w-64"></div>
                </div>
              </div>
            ) : results.length > 0 ? (
              <>
                <div className="premium-card mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-semibold text-lg text-justice-navy">
                        <FileText className="inline mr-2 h-5 w-5" />
                        Search Summary
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        Found {results.length} relevant IPC sections
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-justice-crimson">{counts.high}</div>
                        <div className="text-xs text-gray-500">High Relevance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-justice-navy">{counts.medium}</div>
                        <div className="text-xs text-gray-500">Medium Relevance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-500">{counts.low}</div>
                        <div className="text-xs text-gray-500">Low Relevance</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="premium-card mb-6">
                  <div className="flex items-start gap-3">
                    <FilePenLine className="h-6 w-6 text-justice-crimson mt-1" />
                    <div>
                      <h2 className="font-semibold text-lg text-justice-navy">Legal Analysis</h2>
                      <p className="text-gray-700 mt-2">
                        Based on your query "{query}", the search has identified several sections of the Indian Penal Code that may be relevant. 
                        The sections with high relevance are most likely to apply to your scenario, but please review all results for a complete understanding.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Add Case Prediction Component */}
                <CasePrediction />
                
                {results.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-justice-navy mb-4">Applicable IPC Sections</h2>
                    {results.map((result) => (
                      <ResultCard
                        key={result.section}
                        section={result.section}
                        title={result.title}
                        description={result.description}
                        punishment={result.punishment}
                        relevance={result.relevance}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="premium-card p-8 inline-block mb-4">
                  <FileText className="h-12 w-12 text-justice-navy mx-auto mb-2" />
                </div>
                <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any IPC sections matching your search. Try using different keywords or a more general search term.
                </p>
                <Button onClick={() => window.history.back()}>
                  Try Another Search
                </Button>
              </div>
            )}
            
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500">
                Disclaimer: This analysis is for informational purposes only and does not constitute legal advice.
                Consult a legal professional for personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
