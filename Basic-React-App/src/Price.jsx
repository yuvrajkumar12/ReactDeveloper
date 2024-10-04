export default function  Price({OldPrice,NewPrice}){
    let oldStyle={
        textDecorationLine:"line-through",
    };
    let newStyle={
        fontWeight:"bold",
    };
    let styles={
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    };
    return (
        <div style={styles}>
            <span style={oldStyle}>{OldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{NewPrice}</span>
        </div>
    );
}