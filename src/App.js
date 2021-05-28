import { useEffect } from 'react';
import { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Tabs from "./components/Tabs"
import worldService from "./services/world";

function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const callApi = async () => {
      const countriesApi = await worldService.getCountries();
      setCountries(countriesApi.response)
    }

    const callApiCities = async () => {
      const citiesApi = await worldService.getCities();
      setCities(citiesApi.response)
      console.log(citiesApi.response);
    }

    callApi();
    callApiCities();
  }, []);

  function filter() {
    const listFilter = countries.filter(function (country) {
      
      return country.Name.indexOf(search) >= 0;
    })

    setCountries(listFilter);
  }

  return (
    <>
    <Header />
    <main className="container">
      <section>
        <div className="search">
          <input 
            type="text" 
            imput={search} 
            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />
          <button className="btn" onClick={filter}>
            Pesquisar
          </button>
        </div>
      </section>
      <Tabs />
      <section className="">
      <div className="country-wrapper">
        {countries.map(function (country) {
          return <Card key={country.Name} country={country} />;
        })}
      </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

/*

<div className="country-wrapper">
          {countries.map(function (country) {
            return <Card key={country.Name} country={country} />;
          })}
        </div>



*/



/* function App() {
  const countries = worldService.getCountries();

  return (
    <main className="container">
      <section>
        <Tabs />
      </section>
      <div className="country-wrapper">
        {countries.map(function (country) {
          return <Card key={country.Name} country={country} />;
        })}
      </div>
    </main>
  );
} */

export default App;
