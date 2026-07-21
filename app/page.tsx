import Image from 'next/image';
import "@/app/home.css";
import backgroundImage from '@/public/thecornerstore.jpg';
import cardReader from '@/public/Credit-Card-Reader-Image.jpg';
import atm from '@/public/atm-placeholder.jpg';
import snacks from '@/public/snacks.jpg';
import alcohol from '@/public/alcohol.jpg';
import ContentCard from '@/app/components/contentCard';

export default function Home() {
  const contentCards = [
    {
      title: "Convenience Near Home",
      content: "Come get snacks, drinks, and food from the store on the corner. We have sweets for the kids and alcohol for the party people!",
      images: [snacks]
    },
    {
      title: "Cold Beer and Wine",
      content: `For all the party people, we have all the alcohol you could ask for every day of the week! <br /> (Except sunday if you want wine)`,
      images:[alcohol]
    },
    {
      title: "All Payment Methods Accepted",
      content: "We accept cash, EBT, credit, and debit, and if needed we also have an ATM inside with a withdrawl limit of $200",
      images: [cardReader, atm]
    }
  ]
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-(--light) [-webkit-text-stroke:1px_black]">The Cornerstore</h1>
        </div>
      </div>

      {contentCards.map((card, index) => <ContentCard key={index} cardIndex={index} {...card} />)}
    </>
  );
}
