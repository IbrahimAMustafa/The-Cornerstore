
import Image, { StaticImageData } from 'next/image';

interface ContentCardProps {
  name: string;
  price: string;
  image: string;
}

export default function InventoryCard ({name, price, image}: ContentCardProps) {
    const imagePath = `/inventory/${image}`
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={imagePath}
                alt="Background"
                width={100}
                height={100}
                className='aspect-square object-cover rounded-xl'
            />
            <p>{name}</p>
            <p>${price}</p>
        </div>
    );
};