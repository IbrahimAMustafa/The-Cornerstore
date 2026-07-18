
import Image, { StaticImageData } from 'next/image';

interface ContentCardProps {
  name: string;
  price: string;
  image: string;
  type: string;
}

export default function InventoryCard ({name, price, image, type}: ContentCardProps) {
    const imagePath = `/inventory_images/${image}`
    return (
        <div className='flex flex-col  items-center'>
            <Image
                src={imagePath}
                alt="Background"
                width={300}
                height={300}
                loading='eager'
                className='w-7/10 aspect-square object-cover rounded-xl'
            />
            <p className='text-center'>{name}
                <br/>
                {type}
                <br/>
                ${price}
            </p>
        </div>
    );
};