function handleFormSubmit(event){
    event.preventDefault(); 
    console.log("Submit This Form");
};
export default function Form(){
    return(<form>
        <input placeholde="Write something"/>
        <button onClick={handleFormSubmit}>Submit</button>
    </form>
    );
}