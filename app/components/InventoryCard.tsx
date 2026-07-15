
import Image, { StaticImageData } from 'next/image';

interface ContentCardProps {
  name: string;
  price: string;
  image: string;
}

export default function InventoryCard ({name, price, image}: ContentCardProps) {
    const imagePath = `/inventory/${image}`
    return (
        <div className='flex flex-col  items-center'>
            <Image
                src={imagePath}
                alt="Background"
                width={1000}
                height={200}
                className='w-7/10 aspect-square object-cover rounded-xl'
            />
            <p className='text-center'>{name}
                <br/>
            ${price}</p>
        </div>
    );
};