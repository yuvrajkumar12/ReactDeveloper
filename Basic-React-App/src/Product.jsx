import "./Product.css";
import Price from "./Price";
function Product({title,ind}){
    let OldPrice=["123","568","4856","4251"];
    let NewPrice=["1235","5694","6548","5698"];
    let Description=[
        ["8,000 DPI","Intutive Surface"],
        ["Intutive Surface","8,000 DPI"],
        ["Design for Ipad Pro","Intutive Surface"],
        ["WireLess","Design for Ipad Pro"]
    ];
return (
    <div className="Product">
        <h4>{title}</h4>
        <p>{Description[ind][0]}</p>
        <p>{Description[ind][1]}</p>
        <Price OldPrice={OldPrice[ind]} NewPrice={NewPrice[ind]}/>
    </div>
 );
}
export default Product;