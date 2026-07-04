
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ContentCardProps {
  title: string;
  content: string;
  images?: StaticImageData[];
  cardIndex: number;
}

const ContentCard = ({title, content, images, cardIndex}: ContentCardProps) => {


  return (
    <div className={`flex flex-col justify-center items-center mt-5 pt-5 pb-5 ${cardIndex % 2 == 1 ? "bg-(--altbg)" : ""}`}>
        <h2 className='min-w-[320] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-(--highlight) mb-6'>
            {title}
        </h2>
        <div className="w-50 h-1 bg-(--highlight) mx-auto mb-8"></div>
        <p className='text-center min-w-[295px] w-[56vw] max-w-[720px] text-(length:--p1-font-size) mb-5' 
        dangerouslySetInnerHTML={{ __html: content}}>
        </p>
        <div className='flex flex-col sm:flex-row gap-4'>
            {images?.map((image, index) => 
                <Image
                    src={image}
                    alt="Background"
                    placeholder="blur"
                    className='min-w-[200px] w-[35vw] max-w-[340px] rounded-xl'
                    key={index}
                />
            )}
        </div>
      </div>
  );
};

export default ContentCard;