import Image from 'next/image';
import backgroundImage from '../public/thecornerstore.jpg'; // Static import for automatic width/height detection
import cardReader from '../public/Credit-Card-Reader-Image.jpg';

export default function Home() {
  return (
    <>
      <div className="relative w-full overflow-hidden h-100 bg-gradient-to-b from-background to-40%">
        <Image
          src={backgroundImage}
          alt="Background"
          placeholder="blur"
          quality={75}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-1/1 text-white bg-black/40 bg-gradient-to-t from-(--medium) to-40%">
          <h1 className="text-4xl font-bold text-(--light) [-webkit-text-stroke:1px_black]">Brinsmade's Best</h1>
        </div>

      </div>
      <div className='flex justify-center items-center'>
        <p>We accept cash, credit, and debit!</p>
        <img
          src={cardReader}
          alt="Background"
          placeholder="blur"
          quality={75}
          width="50px"
        />
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
