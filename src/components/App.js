import {useEffect, useState} from 'react'
 



const App = () => {
    const [dogsPics, setDogPics] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);        
    useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
       setDogPics(data.message)
       setIsLoaded(true)
      });
  }, []);
  console.log(dogsPics)
  if (!isLoaded) return <p>Loading...</p>
    return <img alt="A Random Dog" src={dogsPics}/>
}


export default App