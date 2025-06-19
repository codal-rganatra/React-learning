const Greet = () =>{
    const message="Hello This is Raj's component"
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    return(
            <div>
               <p> Message: {message}</p>
                <p>Date: {currentDate}</p>
                <p></p>
            </div>
    )
}
export default Greet;