export default function FilterFetch (data, functionName, selectedBrands?, nameFilter?, selectedTypes?) {
    if(functionName == "types"){
        return [...new Set(data.inventory.flatMap((brand: { products: any[]; }) => brand.products.map(item => item.type)))];
    }else if(functionName == "brands"){
        return data.flatMap(type => type.inventory.filter(brand => selectedBrands && selectedBrands.includes(brand.producer) || selectedBrands.length == 0 ));
  
    }else if(functionName == "products"){
        return data.flatMap(brand => brand.products.map(
                item => ({...item, producer: brand.producer})
            ).filter(
                item => 
                    RegExp(nameFilter, 'i').test(item.name+brand.producer) 
                    && 
                    (selectedTypes.length == 0 || selectedTypes.includes(item.type))
            )
        );
    }
}