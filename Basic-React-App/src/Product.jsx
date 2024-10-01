import "./Product.css";
function Product({title, price, features,feature}){
    //using ternary ? operator  
    //let discount=price>3000?"Discount 5%":"Npt Discount";
    /*if(price>=300){
        return (
            <div className="Product">
                <h3>{title}</h3>
                <h5>Price:{price}</h5>
                <h3>Discount</h3>
            </div>
        );
    }
    else{
        return (
            <div className="Product">
                <h3>{title}</h3>
                <h5>Price:{price}</h5>
                <h3>Not Discount</h3>
            </div>
        );
    }
    
}*/
let col={backgroundColor:"red"};
return (
   <div className="Product" style={col}>
    <h1>{title}</h1>
    <h6>price:{price}</h6>
    {price>300?<p>Not Discount</p>:<a href="/">Go Tuch</a>}
   </div>
);
}
export default Product;