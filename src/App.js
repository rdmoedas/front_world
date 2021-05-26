import { useEffect } from 'react';
import { useState } from 'react';
import "./App.css";
import Card from "./components/Card";
<<<<<<< HEAD
import Tabs from "./components/Tabs"
=======
import Tabs from "./components/Tabs";
>>>>>>> 4edbd139a7364ed251f56167cf0dcad3c16fd67e
import worldService from "./services/world";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const countriesApi = await worldService.getCountries();
      setCountries(countriesApi.response)
    }

    callApi();
  }, []);

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
}

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
