"use client";

import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider";

export function ImagenCorporativa() {
  const images = [
    "https://axis.uninunez.edu.co/public/web/images/banners/principal/bannerformaci%C3%B3n%20para%20la%20docencia-100.jpg",
    "https://axis.uninunez.edu.co/public/web/images/banners/principal/343485-727-219-0-1710443378.jpg",
    "https://atlas.uninunez.edu.co/public/web/images/banners/principal/uninunez.jpg",
  ];
  return (
    <ImagesSlider className='md:h-96 ' images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
    
      </motion.div>
    </ImagesSlider>
  );
}
