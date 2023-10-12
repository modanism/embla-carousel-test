"use client";
import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface CardData {
  imageSrc: string;
  title: string;
  description: string;
}
const cardData: CardData[] = [
  {
    imageSrc: "/next.svg",
    title: "D. O. P",
    description:
      "“Dengan menggunakan layanan Pilih Jurusan ini saya merasa lebih percaya diri akan kemampuan saya untuk masuk ke jurusan pilihan saya di universitas”",
  },
  {
    imageSrc: "/next.svg",
    title: "N. M. T",
    description:
      "“Sangat jelas, memotivasi saya juga untuk memilih jurusan dan menentukan masa depan. Kakak coachnya baik dan ramah”",
  },
  {
    imageSrc: "/next.svg",
    title: "Judul Kartu 2",
    description: "Deskripsi kartu ulasan 2.",
  },
];

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const autoplayOptions = {
    delay: 1000,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide w-72 h-36 px-6 py-2.5 bg-white rounded-2xl border border-stone-300 flex-col justify-start items-center relative"
              key={index}
            >
              <div className="flex flex-col justify-center gap-2 md:justify-end">
                <div className="flex gap-2">
                  <Image
                    alt={cardData[index].title}
                    className="object-cover w-8 h-8 border-2 border-indigo-500 rounded-full"
                    height={8}
                    width={8}
                    src={cardData[index].imageSrc}
                  />
                  <h2 className="text-lg font-semibold text-gray-800">
                    {cardData[index].title}
                  </h2>
                </div>
                <p className="text-xs font-normal tracking-tight le4ading-none text-stone-500 font-body">
                  {cardData[index].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
