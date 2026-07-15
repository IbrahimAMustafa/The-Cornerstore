'use client'
import InventoryCard from '@/app/components/InventoryCard';
import inventoryData from '../../Data/inventory.json'
import React, { useState, useId } from 'react';

export default function Page() {

  const usernameId = useId();
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [nameFilter,setNameFilter] = useState('');
  const brands = inventoryData.filter(brand => selectedBrands && selectedBrands.includes(brand.producer) || selectedBrands.length == 0 );
  const products = brands.flatMap(brand => brand.products.map(
      item => ({...item, producer: brand.producer})
    ).filter(
      item => RegExp(nameFilter, 'i').test(item.name+brand.producer))
  );

  const updateNameFilter = (event:any) => {
    setNameFilter(RegExp.escape(event.target.value));
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
        <div className='flex flex-col items-center mb-5 border border-solid h-[60vh] w-40 overflow-auto scrollbar-none'>
          <p className='text-center border-b w-1/1'>Filters</p>
          <label htmlFor={usernameId} className='flex flex-col items-center border-b pb-5'>Search
            <input type='text' id={usernameId} className='bg-white w-8/10' onChange={updateNameFilter}/>
          </label>
          <div className='border-b w-1/1'>
            <p className='text-center'>Brands</p>
            {inventoryData.map((brand, index) => (
              <label key={index} style={{ display: 'block', margin: '5px 0' }}>
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
          <div className='grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-1 mt-5'>
            {products?.map((item,index) =>
              (
                <InventoryCard 
                  name={item.producer + " " + item.name}
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