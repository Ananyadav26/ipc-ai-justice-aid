
import { useSearchParams } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { SearchResults } from "@/components/search/SearchResults";

const Results = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        
        <div className="flex-1 overflow-y-auto">
          <div className="container py-8 mx-auto">
            <SearchBar />
            <SearchResults query={query} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
