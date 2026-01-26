import Marquee from "react-fast-marquee";
import { AiOutlineArrowRight } from "react-icons/ai";

// Import images
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import img6 from "../../assets/img6.webp";
import img7 from "../../assets/img7.webp";
import img8 from "../../assets/img8.webp";
import img9 from "../../assets/img9.webp";
import img10 from "../../assets/img10.webp";
import img11 from "../../assets/img11.webp";
import img12 from "../../assets/img12.webp";
import img13 from "../../assets/img13.webp";
import img14 from "../../assets/img14.webp";
import img15 from "../../assets/img15.webp";
import img16 from "../../assets/img16.webp";
import img17 from "../../assets/img17.webp";
import img18 from "../../assets/img18.webp";
import img19 from "../../assets/img19.webp";
import img20 from "../../assets/img20.webp";
import img21 from "../../assets/img21.webp";
import img22 from "../../assets/img22.webp";
import img23 from "../../assets/img23.webp";
import img24 from "../../assets/img24.webp";
import img25 from "../../assets/img25.webp";
import img26 from "../../assets/img26.webp";
import img27 from "../../assets/img27.webp";
import img28 from "../../assets/img28.webp";
import img29 from "../../assets/img29.webp";
import img30 from "../../assets/img30.webp";
import img31 from "../../assets/img31.webp";
import img32 from "../../assets/img32.webp";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img11,
  img28, img29, img30, img31, img32,
];

const Gallery = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Heading */}
      <h1 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-6 bg-gradient-to-br from-gray-600 via-white to-black text-transparent bg-clip-text mb-14">
        GALLERY
      </h1>

      {/* Marquee Section */}
      <section className="relative w-full h-fit cursor-grab overflow-hidden">
        {/* Top overlay */}
        <div className="absolute z-[4] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[1223dvw] md:-translate-y-[1212dvw] lg:-translate-y-[1208dvw] xl:-translate-y-[1205dvw] w-[1200vw] h-[1200vw] bg-black rounded-full" />

        <Marquee speed={250} pauseOnHover={true} gradient={false}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="block object-cover rounded-[0.5rem] border-2 border-black h-[30dvh] mx-[0.375rem]"
            />
          ))}
        </Marquee>

        {/* Bottom overlay */}
        <div className="absolute z-[4] left-1/2 top-1/2 -translate-x-1/2 translate-y-[23dvw] md:translate-y-[12dvw] lg:translate-y-[08dvw] xl:translate-y-[5dvw] w-[1200vw] h-[1200vw] bg-black rounded-full" />
      </section>

      {/* Visit Gallery Button */}
      <button
        onClick={() => (window.location.href = "/gallery")}
        className="mt-10 relative w-[clamp(160px,18vw,200px)] h-[clamp(35px,7vh,50px)] border-2 border-[#d01515] text-white font-['Kode_Mono',monospace] font-bold text-[clamp(14px,1.8vw,18px)] overflow-hidden transition-colors duration-300 hover:bg-[#d01515] hover:border-white"
      >
        <span className="relative z-10">VISIT GALLERY</span>
        <AiOutlineArrowRight className="absolute top-1/2 right-2 transform -translate-y-1/2 w-[clamp(18px,1.8vw,25px)] h-[clamp(12px,1.5vw,18px)] text-white" />
      </button>
    </div>
  );
};

export default Gallery;
