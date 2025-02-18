
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "",
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest",
      description: "The brochure will be sent to your email shortly.",
    });
  };

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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-3xl font-display text-white">200</p>
                  <p className="text-sand-100 text-sm">Units</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-3xl font-display text-white">15</p>
                  <p className="text-sand-100 text-sm">Floors</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-3xl font-display text-white">7</p>
                  <p className="text-sand-100 text-sm">Duplexes</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                      <p className="text-xl font-display text-white">Watch</p>
                      <p className="text-sand-100 text-sm">The Video</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden">
                    <video
                      className="w-full aspect-video"
                      src="https://dhbholding.com/wp-content/uploads/2024/10/DHB_YAS-Bay_4k.mp4"
                      controls
                      autoPlay
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-sand-100 text-lg leading-relaxed">
                Opula represents a balance of luxury, comfort, and modern living, perfect for those seeking a sophisticated yet understated lifestyle.
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
                Opula combines modern architectural design with serene waterfront views for a unique living experience. Its minimalist lines and glass façades invite natural light and blend with the landscape.
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

      <section className="py-20 bg-sand-100">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl text-primary text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square bg-sand-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
                alt="Opula Exterior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square bg-sand-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="Opula Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square bg-sand-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764"
                alt="Opula View"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-primary mb-6">About Opula</h2>
              <p className="text-primary/80 leading-relaxed mb-6">
                Opula combines modern architectural design with serene waterfront views for a unique living experience. Its minimalist lines and glass façades invite natural light and blend with the landscape.
              </p>
              <p className="text-primary/80 leading-relaxed">
                Outdoor spaces and terraces offer residents a calming connection to nature, while thoughtful interior layouts maximize functionality and comfort.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                alt="Opula Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-sand-50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl mb-12 text-center">Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl mb-6">Yas Bay</h3>
              <p className="text-sand-200 leading-relaxed mb-6">
                Experience life at Yas Bay, a destination that offers everything for you, your family, and friends. With top-tier amenities, stunning views, and a thoughtfully designed environment, it's a place that combines convenience with quality living.
              </p>
              <ul className="space-y-4 text-sand-200">
                <li>• Minutes from Yas Marina Circuit</li>
                <li>• Close to world-class entertainment</li>
                <li>• Easy access to Abu Dhabi and Dubai</li>
                <li>• Waterfront dining and retail</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
                alt="Yas Bay Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand-100">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-display text-4xl text-primary mb-4">Download Brochure</h2>
            <p className="text-primary/80">
              Complete the form below to receive our detailed project brochure.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unitType">Interested In</Label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, unitType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select unit type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1br">1 Bedroom</SelectItem>
                  <SelectItem value="2br">2 Bedrooms</SelectItem>
                  <SelectItem value="3br">3 Bedrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
              Download Brochure
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
