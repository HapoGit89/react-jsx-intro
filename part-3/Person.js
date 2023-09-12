function Person({name, age=10, hobbies = []}){
    return(
        <div>
            <p>---------------------------------------------</p>
            <p>Learn something about this person:</p>
            <p>Name : {name.length>8 ? name.slice(0,6) : name}</p>
            <p>Age: {age}</p>
           {age>18? <h3>Please Go Vote</h3>: <h3>Sorry you can't vote yet!</h3>}
           <ul>
            <p>Hobbies:</p>
            {hobbies.map(el => <li>{el}</li>)}
           </ul>
           <p>---------------------------------------------</p>
        </div>
    )

}