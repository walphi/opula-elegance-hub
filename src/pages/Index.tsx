
import { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      
      <section className="relative h-screen">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://dhbholding.com/wp-content/uploads/2024/10/opula-hb.mp4"
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
                Opula Residences
                <span className="block text-2xl md:text-3xl mt-2 text-sand-100">Yas Bay</span>
              </h1>
              <p className="text-sand-100 text-lg md:text-xl mb-8">
                Discover a new living experience in Abu Dhabi's most prestigious waterfront address
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-primary mb-6">A NEW LIVING EXPERIENCE</h2>
              <p className="text-primary/80 leading-relaxed">
                Opula represents a balance of luxury, comfort, and modern living, perfect for those seeking a sophisticated yet understated lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sand-100 p-6 rounded-lg">
                <h3 className="font-display text-3xl text-primary mb-2">200</h3>
                <p className="text-sm text-primary/60">Total Units</p>
              </div>
              <div className="bg-sand-100 p-6 rounded-lg">
                <h3 className="font-display text-3xl text-primary mb-2">15</h3>
                <p className="text-sm text-primary/60">Floors</p>
              </div>
              <div className="bg-sand-100 p-6 rounded-lg">
                <h3 className="font-display text-3xl text-primary mb-2">7</h3>
                <p className="text-sm text-primary/60">Duplexes</p>
              </div>
              <div className="bg-sand-100 p-6 rounded-lg">
                <h3 className="font-display text-3xl text-primary mb-2">∞</h3>
                <p className="text-sm text-primary/60">Views</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
