import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [, setLocation] = useLocation();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div 
            onClick={() => setLocation("/")} 
            className="cursor-pointer"
          >
            <Logo />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLocation("/personal")}>
                  Personal
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation("/business")}>
                  Business
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation("/enterprise")}>
                  Enterprise
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                Resources
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLocation("/blog")}>
                  Blog
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation("/docs")}>
                  Documentation
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLocation("/tutorials")}>
                  Tutorials
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <span 
              onClick={() => {
                const howItWorks = document.getElementById("how-it-works");
                howItWorks?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </span>
            <span
              onClick={() => {
                const features = document.getElementById("features");
                features?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </span>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={() => {
                const uploadSection = document.getElementById("image-processor");
                uploadSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Try Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}