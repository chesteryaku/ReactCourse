import { useState } from "react";

function Home() {

    const [name,setName] = useState('mario');
    const handleClick = () => {
        setName('luigi')
        console.log("Hello Ninjas")
    }



    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Home;