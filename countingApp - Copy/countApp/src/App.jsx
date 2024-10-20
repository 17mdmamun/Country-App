import React,{useState , useEffect} from "react";
import './App.css';
import Countries from "./components/Countries";
import Search from "./components/Search";


const url = "https://restcountries.com/v3.1/all";
function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  // const [filterCountries, setFilterCountries] = useState(countries);
  
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      
    }
  }
  useEffect(()=>{
    fetchData(url)
  },[])
  

  const handleRemoveCountry =(name)=>{
   const filter = countries.filter((country)=>country.name.common !== name);
     setCountries(filter)
   
   
  }
  const handleSearch=(searchValue)=>{
      let value =searchValue.toLowerCase();
      const newContries = countries.filter((country)=>{
          const countryName = country.name.common.toLowerCase();
          return countryName.includes(value);
      })
      setCountries(newContries)
  }

  return (
    <>
     <h1>Country App</h1>
     <Search onSearch ={handleSearch} />
     {isLoading && <h2> Loading.....</h2>}
     {error && <h2>{error.message}</h2>}
     {countries && <Countries countries={countries} onRemoveCountry={handleRemoveCountry}/>}
    
       
    </>
  )
}

export default App
