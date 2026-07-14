'use client'
import InventoryCard from '@/app/components/InventoryCard';
import inventoryData from '../../Data/inventory.json'
import React, { useState, useId } from 'react';


const brands = [
  { id: '1', label: 'Coca-Cola' },
  { id: '2', label: 'Pepsi' },
  { id: '3', label: 'Dr Pepper' }
];

export default function Page() {

  const usernameId = useId();
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [nameFilter,setNameFilter] = useState('');
  const brands = inventoryData.filter(brand => selectedBrands && selectedBrands.includes(brand.producer) || selectedBrands.length == 0 );
  const products = brands.flatMap(brand => brand.products).filter(item => RegExp(nameFilter, 'i').test(item.name));

  const updateNameFilter = (event:any) => {
    setNameFilter(event.target.value);
  };

  const handleCheckboxChange = (brand:any) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((item) => item !== brand) // Remove if checked
        : [...prevSelected, brand]                      // Add if unchecked
    );
  };

  return (
    <>
      <h3 className='m-auto font-bold text-5xl my-10'>Inventory</h3>
      <div className='m-auto flex flex-row'>
        <div className='flex flex-col items-center mb-5 border border-solid w-40 '>
          <p className='text-center border-b w-1/1'>Filters</p>
          <label htmlFor={usernameId} className='flex flex-col items-center border-b pb-5'>Search
            <input type='text' id={usernameId} className='bg-white w-8/10' onChange={updateNameFilter}/>
          </label>
          <div className='border-b w-1/1'>
            <p className='text-center'>Brands</p>
            {inventoryData.map((brand) => (
              <label key={brand.producer} style={{ display: 'block', margin: '5px 0' }}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.producer)}
                  onChange={() => handleCheckboxChange(brand.producer)}
                />
                {brand.producer}
              </label>
          ))}
          </div>
        </div>
        <div className="mr-auto mb-5 border border-solid w-[80vw] h-[60vh] overflow-auto scrollbar-none">
          <div className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-1 mt-5'>
            {products?.map((item,index) =>
              (
                <InventoryCard 
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  key={index}
                />
              )
            )}
            
          </div>    
        </div>
      </div>
    </>
  )
}