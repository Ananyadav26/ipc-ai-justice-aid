
import { Bell, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/components/ui/use-toast";
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
  
  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have no new notifications",
    });
  };
  
  const handleBookClick = () => {
    toast({
      title: "Legal Resources",
      description: "Access to legal resources will be available in the next update",
    });
  };

  return (
    <div className="h-16 border-b border-border bg-white/80 backdrop-blur-sm flex items-center justify-between px-4 sticky top-0 z-10">
      <div>
        <h1 className="text-xl font-semibold text-justice-navy md:block hidden">IPC AI Justice Aid</h1>
        <h1 className="text-lg font-semibold text-justice-navy md:hidden">IPC Aid</h1>
      </div>

      <div className="flex items-center gap-2">
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
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toast({ title: "Profile", description: "Profile page coming soon" })}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast({ title: "Settings", description: "Settings page coming soon" })}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toast({ title: "Logged Out", description: "You have been logged out" })}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
