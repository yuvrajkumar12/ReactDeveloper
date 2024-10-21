import { useState } from "react";

export default function Likebutton() { // corrected spelling here
    let [isLiked, setIsLiked] = useState(false); // fixed destructuring and variable name
    let [click, setClick]= useState(0);
    let clicked = () => {
        setIsLiked(!isLiked); // toggle the 'isLiked' state
        setClick(click+1);
    };
    let likestyle={color:"red"};
    return (
        <div>
            <p>Click={click}</p>
            <p onClick={clicked}>
                {isLiked ?(<i className="fa-solid fa-heart" style={likestyle}></i>):
                (<i className="fa-regular fa-heart"></i>)
            }
            </p>
        </div>
    );
}
