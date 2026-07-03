import Image from 'next/image';
import "./home.css";
import backgroundImage from '../public/thecornerstore.jpg'; // Static import for automatic width/height detection
import cardReader from '../public/Credit-Card-Reader-Image.jpg';
import atm from '../public/atm-placeholder.jpg';
import snacks from '../public/snacks.jpg';

export default function Home() {
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
          <h1 className="text-4xl font-bold text-(--light) [-webkit-text-stroke:1px_black]">Brinsmade's Best</h1>
        </div>
      </div>
      
      <div className='flex flex-col justify-center items-center mt-5'>
        <h2 className='min-w-[320] text-center text-3xl sm:text-4xl md:text-5xl font-bold text-(--highlight) mb-6'>Convenience Near Home</h2>
        <div className="w-50 h-1 bg-(--highlight) mx-auto mb-8"></div>
        <p className='text-center min-w-[295px] w-[56vw] max-w-[720px] text-(length:--p1-font-size) mb-5'>Come get snacks, drinks, and food from the store on your street. We have sweets for the kids and alcohol for the party people!
        </p>
        <Image
            src={snacks}
            alt="Background"
            placeholder="blur"
            quality={75}
            className='min-w-[200px] w-[35vw] max-w-[340px] rounded-xl'
        />
      </div>

      <div className='flex flex-col justify-center items-center mt-5 mb-5 pt-5 pb-5 bg-(--altbg)'>
        <h2 className='min-w-[320] text-center text-3xl sm:text-4xl md:text-5xl font-bold text-(--highlight) mb-6'>All Payment Methods Accepted</h2>
        <div className="w-50 h-1 bg-(--highlight) mx-auto mb-8"></div>
        <p className='text-center min-w-[280px] w-[55vw] max-w-[650px] text-(length:--p1-font-size) mb-5'>We accept cash, EBT, credit, and debit, and if needed we also have an ATM inside with a withdrawl limit of $200
        </p>
        <div className={`flex flex-col sm:flex-row gap-4`}>
          <Image
            src={cardReader}
            alt="Background"
            placeholder="blur"
            quality={75}
            className='min-w-[200px] w-[35vw] max-w-[340px] rounded-xl'
          />
          <Image
            src={atm}
            alt="Background"
            placeholder="blur"
            quality={75}
            className= 'min-w-[200px] w-[35vw] max-w-[340px] rounded-xl'
          />
        </div>
      </div>
    </>
  );
}
