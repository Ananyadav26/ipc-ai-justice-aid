import { LanguageSelector } from "@/components/LanguageSelector";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="border-b sticky top-0 z-30 bg-background/90 backdrop-blur-sm dark:border-justice-navy/20">
      <div className="flex h-16 items-center px-4">
        <Link to="/" className="font-bold text-xl text-justice-navy dark:text-justice-gold">
          Justice Hub
        </Link>
        
        <div className="ml-auto flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="text-justice-navy dark:text-white border-justice-navy/20">
            <Link to="/auth">
              <LogIn className="h-4 w-4 mr-2" />
              {t("auth.signIn")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
