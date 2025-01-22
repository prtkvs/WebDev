function Hello(){
    let myName = "Prateek";
    let number = 456;
    let fullName=()=>{
        return "Prashant Sir";
    }
    return <p>
       Message no.: {number} Hello this is {myName}, student of {fullName()}.
        
        </p>
}
// hence using {} we can access any js variable or methods
export default Hello;