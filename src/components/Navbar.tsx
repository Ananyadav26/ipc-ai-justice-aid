
import { Bell, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/components/ui/use-toast";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleNotificationClick = () => {
    toast({
      title: t("action.notifications"),
      description: "You have no new notifications",
    });
  };
  
  const handleBookClick = () => {
    toast({
      title: t("action.resources"),
      description: "Access to legal resources will be available in the next update",
    });
  };

  return (
    <div className="h-16 border-b border-border bg-white/80 backdrop-blur-sm flex items-center justify-between px-4 sticky top-0 z-10">
      <div>
        <h1 className="text-xl font-semibold text-justice-navy md:block hidden">{t("app.name")}</h1>
        <h1 className="text-lg font-semibold text-justice-navy md:hidden">IPC Aid</h1>
      </div>

      <div className="flex items-center gap-2">
        <LanguageSelector />
        
        <Button variant="ghost" size="icon" className="text-gray-600" onClick={handleBookClick}>
          <BookOpen size={20} />
        </Button>
        
        <Button variant="ghost" size="icon" className="text-gray-600" onClick={handleNotificationClick}>
          <Bell size={20} />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full bg-justice-navy/10">
              <User size={20} className="text-justice-navy" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>{t("action.profile")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toast({ title: t("action.profile"), description: "Profile page coming soon" })}>
              {t("action.profile")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast({ title: t("action.settings"), description: "Settings page coming soon" })}>
              {t("action.settings")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toast({ title: "Logged Out", description: "You have been logged out" })}>
              {t("action.logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
