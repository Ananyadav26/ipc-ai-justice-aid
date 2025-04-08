
import { Bookmark, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  section: string;
  title: string;
  description: string;
  punishment?: string;
  relevance?: "high" | "medium" | "low";
}

export function ResultCard({ section, title, description, punishment, relevance = "medium" }: ResultCardProps) {
  const handleBookmark = () => {
    toast({
      title: "Section Bookmarked",
      description: `${section} has been saved to your bookmarks`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`IPC Section ${section}: ${title}`);
    toast({
      title: "Copied to Clipboard",
      description: "The section details have been copied to your clipboard",
    });
  };

  const getRelevanceBorder = () => {
    switch (relevance) {
      case "high":
        return "border-justice-crimson";
      case "medium":
        return "border-justice-navy";
      case "low":
        return "border-gray-400";
      default:
        return "border-justice-navy";
    }
  };

  return (
    <div className={cn("law-card", getRelevanceBorder())}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="law-section">IPC Section {section}</h3>
          <h2 className="text-xl font-semibold mb-2 text-justice-navy">{title}</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handleBookmark}>
            <Bookmark size={16} />
          </Button>
          <Button variant="outline" size="icon" onClick={handleShare}>
            <Share2 size={16} />
          </Button>
        </div>
      </div>
      
      <p className="law-description">{description}</p>
      
      {punishment && (
        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
          <span className="font-semibold text-justice-crimson">Punishment: </span>
          <span>{punishment}</span>
        </div>
      )}
      
      <div className="mt-4 flex items-center">
        <span className="text-sm text-gray-500 mr-2">Relevance:</span>
        <div className="flex gap-1">
          {["high", "medium", "low"].map((level) => (
            <div 
              key={level}
              className={cn(
                "w-5 h-2 rounded-full",
                relevance === level
                  ? level === "high" ? "bg-justice-crimson" : level === "medium" ? "bg-justice-navy" : "bg-gray-400"
                  : "bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
