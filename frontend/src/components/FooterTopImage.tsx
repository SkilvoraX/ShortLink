import { useEffect, useState } from "react";

type ParallaxImageProps = {
  imageUrl?: string;
  speed?: number; // lower = slower movement
};

export default function ParallaxImage({
  imageUrl = "https://skilvorax.com/wp-content/uploads/2023/12/footer.jpeg",
  speed = 0.2,
}: ParallaxImageProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <section className="relative w-full md:w-[90%] h-[150px] md:h-[250px] lg:h-[400px] overflow-hidden">
        <div className="w-full -translate-y-[150px] md:-translate-y-[200px] lg:-translate-y-[200px]" >
            <img
                src={imageUrl}
                alt="Footer visual"
                className="w-full h-auto object-cover object-center will-change-transform"
                style={{
                transform: `translateY(${offset}px)`,
                }}
            />
        </div>
    </section>
  );
}
