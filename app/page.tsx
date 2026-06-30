import Image from 'next/image';
import "./home.css";
import backgroundImage from '../public/thecornerstore.jpg'; // Static import for automatic width/height detection
import cardReader from '../public/Credit-Card-Reader-Image.jpg';
import atm from '../public/atm-placeholder.jpg';

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
        <p className='text-center w-(--p1-w-size)'>We accept cash, EBT, credit, and debit, and if needed we also have an ATM inside with a withdrawl limit of $200
        </p>
        <div className={`flex flex-(--img-grid-format) gap-4`}>
          <Image
            src={cardReader}
            alt="Background"
            placeholder="blur"
            quality={75}
            className='w-(--img1-w) rounded-xl'
          />
          <Image
            src={atm}
            alt="Background"
            placeholder="blur"
            quality={75}
            className= 'w-(--img1-w) rounded-xl'
          />
        </div>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div> <div>
        <p>a</p>
      </div>
    </>
  );
}
