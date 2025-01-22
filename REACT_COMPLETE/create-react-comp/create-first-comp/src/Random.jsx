function Random(){
    let number = Math.random()*100;
    
    return <h1 style={{'background-color':'#765e21'}}>Random Number is:{Math.floor(number)}</h1>
}

export default Random;