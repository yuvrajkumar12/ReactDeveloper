import Product from "./Product.jsx";
function Producttab(){
    let Style={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alingItems:"center",
    };
    return(
        <div style={Style}>
            <Product title="Logitech MX Master" ind={0}/>
            <Product title="Apple Pencile (2nd Gen)" ind={1}/>
            <Product title="Zebronics Zeb-Transformer " ind={2}/>
            <Product title="Petronics Toad 23"ind={3}/>
        </div>
    );
}
export default Producttab;