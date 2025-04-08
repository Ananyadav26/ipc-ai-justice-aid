
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Search, History, Info, Menu, X, BookOpen, Gavel } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  expanded: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ to, icon, label, expanded, onClick }: SidebarLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        expanded ? "justify-start" : "justify-center",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
          : "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-white/10"
      )}
      onClick={onClick}
    >
      <div>{icon}</div>
      {expanded && <span>{label}</span>}
    </Link>
  );
};

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { t } = useTranslation();
  
  // Set expanded to false on mobile by default
  useEffect(() => {
    if (isMobile) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }, [isMobile]);
  
  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setExpanded(false);
    }
  }, [location.pathname, isMobile]);
  
  const handleLinkClick = () => {
    if (isMobile) {
      setExpanded(false);
    }
  };

  return (
    <div
      className={cn(
        "h-screen bg-justice-navy text-white flex flex-col border-r border-sidebar-border transition-all duration-300 absolute md:relative z-20",
        expanded ? "w-64" : "w-16",
        isMobile && expanded ? "shadow-lg" : ""
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className={cn("flex items-center gap-3", !expanded && "hidden")}>
          <Gavel className="h-6 w-6 text-justice-gold" />
          <h1 className="font-bold text-lg">{t("app.name")}</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setExpanded(!expanded)}
          className="text-white hover:bg-white/10"
        >
          {expanded ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      <div className="flex-1 py-6 flex flex-col gap-2 px-2">
        <SidebarLink to="/" icon={<Home size={20} />} label={t("nav.home")} expanded={expanded} onClick={handleLinkClick} />
        <SidebarLink to="/search" icon={<Search size={20} />} label={t("nav.search")} expanded={expanded} onClick={handleLinkClick} />
        <SidebarLink to="/history" icon={<History size={20} />} label={t("nav.history")} expanded={expanded} onClick={handleLinkClick} />
        <SidebarLink to="/about" icon={<Info size={20} />} label={t("nav.about")} expanded={expanded} onClick={handleLinkClick} />
      </div>
      
      <div className="p-4 border-t border-sidebar-border flex justify-center">
        {expanded ? (
          <div className="text-xs text-center text-white/70">
            <p>{t("app.name")}</p>
            <p>{t("app.version")}</p>
          </div>
        ) : (
          <Link to="/about" className="text-white/70 hover:text-white transition-colors">
            <BookOpen size={20} />
          </Link>
        )}
      </div>
    </div>
  );
}
