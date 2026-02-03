import { useState } from "react";
//import "./App.css";
 
const brandsData = [
  { id: "1", brandName: "Puma" },
  { id: "2", brandName: "Nike" },
  { id: "3", brandName: "Adidas" },
  { id: "4", brandName: "Reebok" },
  { id: "5", brandName: "Under Armour" },
  { id: "6", brandName: "New Balance" },
  { id: "7", brandName: "Fila" },
  { id: "8", brandName: "Skechers" }
];

function Addthecart(){
    const [selectedBrand, setSelectedBrand]=useState([]);
    const onAddToCartClick=(id)=>{
        const selectedItem=brandsData.find(item=>item.id==id);
        setSelectedBrand([...selectedBrand,selectedItem]);
    }
    const onRemoveClick=(id)=>{
        const filterItems=selectedBrand.filter(item=>item.id!==id);
        setSelectedBrand(filterItems);
    }
    return(
        <> 
       <div>
         <p>Add Brand to our Card</p>{
            brandsData.map(brand=><div>
                <span>{brand.brandName}</span>
                <button onClick={()=>onAddToCartClick(brand.id)}>Add to cart</button>
                </div>)
         }
       </div>
       <div>
        <p>Your Cart</p>
        {
            selectedBrand &&  selectedBrand.map(brand=><p>{brand.brandName}- <button onClick={()=>onRemoveClick(brand.id)}>Remove</button></p>)
        }
       </div>
        </>
    );
}

export default Addthecart;