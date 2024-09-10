import { Button } from "@/components/ui/button.tsx";
import { useTheme } from "@/components/theme-provider.tsx";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 shadow-lg bg-card text-card-foreground transition-colors duration-500 dark:bg-card dark:text-card-foreground">
      <div className="text-2xl font-bold">רשימת בעיות</div>
      <div className="space-x-2">
        {theme === "dark" ? (
          <Button
            size="icon"
            variant="outline"
            className="size-10 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 border-border bg-muted text-muted-foreground"
            onClick={() => setTheme("light")}
          >
            <Sun className="animate-rotate-in text-primary-foreground" />
          </Button>
        ) : (
          <Button
            size="icon"
            variant="outline"
            className="size-10 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 border-border bg-muted text-muted-foreground"
            onClick={() => setTheme("dark")}
          >
            <Moon className="animate-rotate-in text-gray-900" />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
