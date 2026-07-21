import Image from 'next/image';
import backgroundImage from '@/public/aboutUsPlaceholder.jpg'; // Static import for automatic width/height detection
import ContentCard from '@/app/components/contentCard';
const contentCards = [
    {
      title: "Convenience Near Home",
      content: "Come get snacks, drinks, and food from the store on the corner. We have sweets for the kids and alcohol for the party people!",
      images: []
    }
  ]
export default function About() {
  return (
    <>
      <div className="relative w-full overflow-hidden h-100 bg-gradient-to-b from-background to-40%">
        <Image
          src={backgroundImage}
          alt="Picture of Store Front"
          placeholder="blur"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-1/1 text-white bg-black/40 bg-gradient-to-t from-(--medium) to-40%">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-(--light) [-webkit-text-stroke:1px_black]">20 Years Running</h1>
        </div>
      </div>
      {contentCards.map((card, index) => <ContentCard key={index} cardIndex={index} {...card} />)}
    </>
  );
}
