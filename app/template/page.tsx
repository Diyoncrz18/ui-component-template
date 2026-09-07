"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import { ArrowRight, LayoutTemplate, Copy, Check, Loader2 } from "lucide-react";
import { ImageCarouselHero } from "./template1";
import CtaPage from "./template2";
import { ThreeDMarquee } from "./template3";
import CarouselStacked from "./template4";
import { Hero } from "./template5";
import ImageStreamHero from "./template6";
import { Hero as Hero7 } from "./template7";
import Footer4Col from "./template10";
import { Blog8 } from "./template11";
import AboutSection1 from "./template12";
import SphereImageGrid from "./template13";
import Beams from "./template14";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getTemplateSource } from "./actions";

// Mock data for the carousel component preview
const mockImages = [
  { id: "1", src: "/img1.jpg", alt: "Cinematic Portrait", rotation: -10 },
  { id: "2", src: "/img2.jpg", alt: "Mountain Sunset", rotation: 5 },
  { id: "3", src: "/img3.jpg", alt: "Sci-Fi City", rotation: -5 },
  { id: "4", src: "/img4.jpg", alt: "Stylized Robot", rotation: 12 },
  { id: "5", src: "/img5.jpg", alt: "Abstract Art", rotation: -8 },
  { id: "6", src: "/img6.jpg", alt: "Cyberpunk City", rotation: 15 },
];

// Definition of templates in our gallery
const templates = [
  {
    id: 1,
    category: "Hero Section",
    filename: "template1.tsx",
    Component: () => <ImageCarouselHero images={mockImages} />,
  },
  {
    id: 2,
    category: "CTA Section",
    filename: "template2.tsx",
    Component: () => <CtaPage />,
  },
  {
    id: 3,
    category: "Interactive Component",
    filename: "template3.tsx",
    Component: () => <ThreeDMarquee images={mockImages.map(img => img.src)} />,
  },
  {
    id: 4,
    category: "Stacked Carousel",
    filename: "template4.tsx",
    Component: () => <CarouselStacked />,
  },
  {
    id: 5,
    category: "Hero Section",
    filename: "template5.tsx",
    Component: () => <Hero 
      title="Scale Your SaaS to the Moon"
      subtitle="The only landing page template you'll ever need. Built with Next.js, Tailwind CSS, and Framer Motion."
      actions={[
        { label: "Get Started", href: "#" },
        { label: "Learn More", href: "#", variant: "outline" }
      ]}
    />,
  },
  {
    id: 6,
    category: "Image Stream",
    filename: "template6.tsx",
    Component: () => <ImageStreamHero images={mockImages} className="w-full h-full min-h-[600px] bg-black text-white" />,
  },
  {
    id: 7,
    category: "Hero Section",
    filename: "template7.tsx",
    Component: () => <Hero7 
      title="Build Faster with SaaS Template"
      subtitle="The ultimate boilerplate for your next big idea."
    />,
  },
  {
    id: 8,
    category: "Placeholder",
    filename: "template8.tsx",
    Component: null,
  },
  {
    id: 9,
    category: "Navbar",
    filename: "template9.tsx",
    Component: null,
  },
  {
    id: 10,
    category: "Footer",
    filename: "template10.tsx",
    Component: () => <Footer4Col />,
  },
  {
    id: 11,
    category: "Blog Section",
    filename: "template11.tsx",
    Component: () => <Blog8 />,
  },
  {
    id: 12,
    category: "About Section",
    filename: "template12.tsx",
    Component: () => <AboutSection1 />,
  },
  {
    id: 13,
    category: "3D Image Grid",
    filename: "template13.tsx",
    Component: () => <SphereImageGrid images={mockImages as any} containerSize={500} sphereRadius={200} autoRotate={true} />,
  },
  {
    id: 14,
    category: "3D Beams Background",
    filename: "template14.tsx",
    Component: () => <div className="w-full h-full min-h-[600px]"><Beams /></div>,
  }
];

// Interactive button to fetch and copy template source code
function CopyCodeButton({ filename }: { filename: string }) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = async () => {
    if (loading || !filename) return;
    setLoading(true);
    try {
      const code = await getTemplateSource(filename);
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
      alert("Gagal menyalin source code.");
    } finally {
      setLoading(false);
    }
  };

  if (!filename) return null;

  return (
    <button 
      onClick={handleCopy}
      disabled={loading}
      className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-md text-xs font-medium text-white/90 focus:outline-hidden focus:ring-2 focus:ring-primary/50"
      title={`Copy source code for ${filename}`}
    >
      {loading ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin" />
      ) : copied ? (
        <Check className="w-3.5 h-3.5 text-green-400" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
      {filename}
    </button>
  );
}

export default function TemplatePage() {
  return (
    <main className="flex flex-col min-h-dvh">
      {/* Content wrapper with appropriate padding */}
      <div className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-32 pb-24">
        
        {/* Page Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 px-4 bg-primary/10 rounded-full mb-6 text-primary border border-primary/20 shadow-sm">
            <LayoutTemplate className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold tracking-wider uppercase">Live Preview Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-balance">
            Eksplorasi Template
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Preview *real-time* langsung dari komponen React. Klik pada desain untuk melihatnya dalam ukuran penuh tanpa perlu berpindah halaman.
          </p>
        </div>
        
        {/* Template Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {templates.map((template) => (
            <Dialog key={template.id}>
              <div 
                className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Component Live Preview Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                  
                  {template.Component ? (
                    /* 
                      This wrapper simulates a desktop resolution (400% wider and taller)
                      and then scales it down by 25% (0.25) to fit perfectly within the card.
                      pointer-events-none ensures the hover overlay below works properly.
                    */
                    <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none">
                      <template.Component />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                      <span className="text-muted-foreground/50 font-medium">Coming Soon</span>
                    </div>
                  )}
                  
                  {/* Hover Overlay for clicking */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
                    {template.Component ? (
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center justify-center px-4 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg w-full transition-transform hover:scale-[1.02] shadow-lg cursor-pointer">
                          Buka Template <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </DialogTrigger>
                    ) : (
                      <button 
                        disabled
                        className="inline-flex items-center justify-center px-4 py-2.5 bg-muted text-muted-foreground text-sm font-semibold rounded-lg w-full cursor-not-allowed opacity-80"
                      >
                        Segera Hadir
                      </button>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-3 py-1.5 text-xs font-semibold bg-background/90 backdrop-blur-md rounded-full shadow-sm border border-border/50 text-foreground">
                      {template.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* The actual Popup Modal for the Live Preview — Desktop Browser Frame */}
              {template.Component && (
                <DialogContent className="w-[78vw] max-w-[78vw] sm:max-w-[78vw] h-[82vh] max-h-[82vh] p-0 border border-white/10 overflow-hidden bg-[#1e1e1e] dark:bg-[#141414] flex flex-col rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.5)] gap-0">
                  
                  {/* Browser Chrome / Title Bar */}
                  <div className="flex-shrink-0 flex items-center justify-between bg-[#2a2a2a] dark:bg-[#1a1a1a] border-b border-white/10 px-4 py-3">
                    {/* Left: traffic lights + URL */}
                    <div className="flex items-center gap-3">
                      {/* Traffic light buttons */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 transition-all cursor-pointer" />
                        <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90 transition-all cursor-pointer" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90 transition-all cursor-pointer" />
                      </div>
                      {/* URL Bar */}
                      <div className="ml-2 bg-[#1a1a1a] dark:bg-[#0d0d0d] rounded-md px-3 py-1.5 flex items-center gap-2 border border-white/10 w-48 sm:w-64">
                        {/* Lock icon */}
                        <svg className="w-3 h-3 text-white/40 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1C8.676 1 6 3.676 6 7v1H4v15h16V8h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v1H8V7c0-2.276 1.724-4 4-4zm0 9a2 2 0 110 4 2 2 0 010-4z"/>
                        </svg>
                        <span className="text-white/50 text-xs font-medium truncate">localhost:3000/template</span>
                      </div>
                    </div>

                    {/* Right: Copy Source Code Button (with margin to avoid X button) */}
                    <div className="flex items-center mr-10">
                      <CopyCodeButton filename={template.filename} />
                    </div>
                  </div>

                  {/* Website Content Area */}
                  <div className="flex-1 min-h-0 w-full overflow-y-auto bg-background">
                    <template.Component />
                  </div>

                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
        
      </div>

      <Footer />
    </main>
  );
}

