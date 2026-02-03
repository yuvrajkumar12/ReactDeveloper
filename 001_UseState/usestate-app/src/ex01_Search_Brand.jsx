import { useState } from "react";
import "./App.css";
 
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

function ex01_Search_Brand() {

  const [search, setSearch] = useState("");
  const [brands, setbrands] = useState(brandsData);

  const onchangeSearch = (e) => {
    setSearch(e.target.value);

    // ✅ FIX 1: toLowerCase() added
    const filterBrands = brandsData.filter((brand) =>
      brand.brandName.toLowerCase().includes(
        e.target.value.toLowerCase()
      )
    );

    setbrands(filterBrands);
  };

  return (
    <>
      <input
        onChange={onchangeSearch}
        placeholder="Search a brand"
      />

      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
    </>
  );
}

export default ex01_Search_Brand;
