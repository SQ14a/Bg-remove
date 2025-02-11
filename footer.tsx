import { useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Advanced AI-powered background removal tool. Fast, free, and easy to use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span
                  onClick={() => {
                    const howItWorks = document.getElementById("how-it-works");
                    howItWorks?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </span>
              </li>
              <li>
                <span
                  onClick={() => {
                    const features = document.getElementById("features");
                    features?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span
                  onClick={() => setLocation("/privacy")}
                  className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </span>
              </li>
              <li>
                <span
                  onClick={() => setLocation("/terms")}
                  className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@removebg.ai"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <span
                  onClick={() => setLocation("/faq")}
                  className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} RemoveBG.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}