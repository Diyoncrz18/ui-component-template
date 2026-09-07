import Footer from "@/components/footer";
import { ImageCarouselHero } from "../template1";
import { CopyCodeButton } from "@/components/copy-button";

// Mock data for the carousel using the generated mockup image
const mockImages = [
  { id: "1", src: "/img1.jpg", alt: "Cinematic Portrait", rotation: -10 },
  { id: "2", src: "/img2.jpg", alt: "Mountain Sunset", rotation: 5 },
  { id: "3", src: "/img3.jpg", alt: "Sci-Fi City", rotation: -5 },
  { id: "4", src: "/img4.jpg", alt: "Stylized Robot", rotation: 12 },
  { id: "5", src: "/img5.jpg", alt: "Abstract Art", rotation: -8 },
  { id: "6", src: "/img6.jpg", alt: "Cyberpunk City", rotation: 15 },
];

export default function Template1Page() {
  return (
    <main className="flex flex-col min-h-dvh relative">
      {/* Floating Copy Button */}
      <div className="absolute top-6 right-6 z-50">
        <CopyCodeButton filename="template1.tsx" />
      </div>

      {/* Template Component Area */}
      <div className="flex-1">
        <ImageCarouselHero images={mockImages} />
      </div>

      <Footer />
    </main>
  );
}
