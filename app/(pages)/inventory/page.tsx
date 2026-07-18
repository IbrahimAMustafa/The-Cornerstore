'use client'
import InventoryCard from '@/app/components/InventoryCard';
import inventoryData from '../../Data/inventory.json'
import React, { useState, useId } from 'react';

export default function Page() {

  const usernameId = useId();
  const [brandsIsOpen, setBrandsIsOpen] = useState(false);
  const [typesIsOpen, setTypesIsOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [nameFilter,setNameFilter] = useState('');
  const brands = inventoryData.flatMap(type => type.inventory.filter(brand => selectedBrands && selectedBrands.includes(brand.producer) || selectedBrands.length == 0 ));
  const products = brands.flatMap(brand => brand.products.map(
      item => ({...item, producer: brand.producer})
    ).filter(
      item => RegExp(nameFilter, 'i').test(item.name+brand.producer))
  );

  const updateNameFilter = (event:any) => {
    setNameFilter(event.target.value.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&'));
  };

  const handleCheckboxChange = (checked:any, setList:Function) => {
    setList((prevSelected:any) =>
      prevSelected.includes(checked)
        ? prevSelected.filter((item:string) => item !== checked) // Remove if checked
        : [...prevSelected, checked]                      // Add if unchecked
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
            <button onClick={() => setBrandsIsOpen(!brandsIsOpen)} className='text-center w-1/1'>Brands</button>
            {brandsIsOpen && (
              inventoryData[0].inventory.map((brand, index) => (
              <label key={index} style={{ display: 'block', margin: '5px 0' }}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.producer)}
                  onChange={() => handleCheckboxChange(brand.producer, setSelectedBrands)}
                />
                {brand.producer}
              </label>
              ))
            )}
          </div>
          <div className='border-b w-1/1'>
            <button onClick={() => setTypesIsOpen(!typesIsOpen)} className='text-center w-1/1'>Types</button>
            {typesIsOpen && (
              inventoryData[0].inventory.map((brand, index) => (
              <label key={index} style={{ display: 'block', margin: '5px 0' }}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.producer)}
                  onChange={() => handleCheckboxChange(brand.producer, setSelectedTypes)}
                />
                {brand.producer}
              </label>
              ))
            )}
            
          </div>
        </div>
        <div className="mr-auto mb-5 border border-solid w-[80vw] h-[60vh] overflow-auto scrollbar-none">
          <div className='flex sticky top-0 w-1/1 bg-(--altbg) justify-between px-5'>
            <span className=''>Sodas and Juice</span><span>Alcohol Singles</span><span>Alcohol Packs</span>
          </div>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-1 mt-5'>
            {products?.map((item,index) =>
              (
                <InventoryCard 
                  name={item.producer + " " + item.name}
                  price={item.price}
                  image={item.image}
                  type={item.type}
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