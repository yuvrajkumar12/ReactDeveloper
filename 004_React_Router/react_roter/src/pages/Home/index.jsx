import { useNavigate } from "react-router-dom";
export const Home=()=>{
    //React Router v6 introduces the useNavigate() hook, making it 
    // easier and more flexible to navigate between different pages in your app.
    const navigate=useNavigate();
    const onGoCartClick=()=>{
        navigate('/cart');

    }
    return(
        <>
        <h1>This is Home page</h1>
        <button onClick={onGoCartClick}>Go to cart</button>
        </>
    );
}