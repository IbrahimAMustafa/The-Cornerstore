
import Image, { StaticImageData } from 'next/image';

interface ContentCardProps {
  title: string;
  content: string;
  images?: StaticImageData[];
  cardIndex: number;
}

const ContentCard = ({title, content, images, cardIndex}: ContentCardProps) => {


  return (
    <div className={`flex flex-col items-center mt-5 pt-5 pb-5 ${cardIndex % 2 == 1 ? "bg-(--altbg)" : ""}`}>
        <h2 className='min-w-[320] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-(--highlight) mb-6'>
            {title}
        </h2>
        <div className="w-50 h-1 bg-(--highlight) mx-auto mb-8"></div>
        <div className={`flex flex-col justify-center items-center bg-card  ${cardIndex % 2 == 0 ? " bg-(--altbg)/50" : " bg-(--medium)/50"} rounded-2xl shadow-lg w-1/2 pt-5 pb-5 `}>
            <p className='text-center text-(length:--p1-font-size) mb-5' dangerouslySetInnerHTML={{ __html: content}}>
            </p>
            <div className='grid grid-flow-row md:grid-flow-col gap-4'>
                {images?.map((image, index) => 
                    <Image
                        src={image}
                        alt="Background"
                        placeholder="blur"
                        className=' min-w-24 min-h-24 h-[20vw] w-[20vw] max-w-70 max-h-70 aspect-square object-cover rounded-xl'
                        key={index}
                    />
                )}
            </div>
        </div>
      </div>
  );
};

export default ContentCard;