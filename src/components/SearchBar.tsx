
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface SearchBarProps {
  large?: boolean;
  placeholder?: string;
}

export function SearchBar({ large = false, placeholder = "Search for legal queries..." }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Empty Search",
        description: "Please enter a search query",
        variant: "destructive",
      });
      return;
    }
    
    // Store in local history
    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    const newSearch = {
      id: Date.now(),
      query: query.trim(),
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem("searchHistory", JSON.stringify([newSearch, ...history].slice(0, 20)));
    
    // Navigate to results page with the query
    navigate(`/results?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSearch} className={`search-container ${large ? "mt-8 mb-12" : "my-4"}`}>
      <div className="relative w-full flex items-center">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`pr-12 pl-4 ${large ? "h-14 text-lg" : "h-10"} w-full rounded-md border border-input shadow-sm focus-visible:ring-2`}
        />
        <Button 
          type="submit"
          size={large ? "lg" : "default"}
          className="absolute right-0 rounded-l-none"
        >
          <Search className="mr-2" size={18} />
          Search
        </Button>
      </div>
    </form>
  );
}
