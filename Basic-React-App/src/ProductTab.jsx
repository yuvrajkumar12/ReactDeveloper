import Product from "./Product.jsx";
function Producttab(){
    let features=["fast","reliable"];//Passing Array to Props
    let feature={a:"fast",b:"reliable"};
    return(
        <>
        <Product title="Phone" price="1000" features={features} />
        <Product title="Laptop" price={15000}/>
        <Product title="Mobile" price={150} feature={feature.a}/>
        
        </>
    );
}
export default Producttab;