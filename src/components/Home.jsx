import { useState, useEffect } from "react";
import { CountryCard } from "./CountryCard";

function Home(){
    const [countryData, setCountryData] = useState([]);
    const [filteredData, setFilteredData]= useState([]);

    function handleSearch(e){
        const res = countryData.filter(ele => ele.common.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredData(res);
    }

  const fetchCountries = async() => {
    try {
      const response = await fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
      const data = await response.json();

      setCountryData(data);
      setFilteredData(data);
    } catch (error) {
      console.error(`Error fetching data: ${error.response}`);
    }
  }

  useEffect(()=>{
    fetchCountries();
  }, [])

  return (
    <div>
        <navbar style={{display:'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgrey', height: '60px', position: 'sticky', top: '0'}}>
            <input style={{padding: '10px', width: '50%'}} placeholder='Search for Countries...' type="text" onChange={handleSearch}></input>
        </navbar>
        <div style={{
                display : "flex",
                flexWrap : "wrap",
                justifyContent: 'center'
            }}>
    {
      filteredData.map((ele) => (
        <CountryCard img={ele.png} name={ele.common} abbr={ele.common}/>
      ))
    }
    </div>
    </div>
  )
}

export default Home;