function dosomething(){
    console.log("What are you doing");
};
function printData(){
    console.log("bye");
}
export default function Buttom1(){
    return(
        <div>
            <button onClick={dosomething}>Click Me!</button>
            <p onMouseOver={printData}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae et explicabo qui deserunt distinctio, asperiores in soluta molestiae. Quibusdam quae temporibus quis quasi quisquam! Illum earum suscipit voluptates ullam.
            </p >
        </div>
    );
}