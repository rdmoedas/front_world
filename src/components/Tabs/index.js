<<<<<<< HEAD
import { useState } from 'react';
import "./tabs.css";

function Tabs(){

    const [activeTab, setActiveTab] = useState("country");

    function onClickTab(event) {
        setActiveTab(event.target.id)
    }

    return (
        <ul className="tabs">
            <li id="country" onClick={onClickTab} className={ activeTab === 'country' ? 'active' : null }>
            Paises
            </li>
            <li id="language" onClick={onClickTab} className={ activeTab === 'language' ? 'active' : null }>
            Idiomas
            </li>
            <li id="city" onClick={onClickTab} className={ activeTab === 'city' ? 'active' : null }>
            Cidades
            </li>
        </ul>
    );
}

export default Tabs;
=======
import { useState } from "react";
import "./tabs.css"

function Tabs() {
  const [tabActive, setTabActive] = useState("country");

  function onClickTab(event) {
    setTabActive(event.target.id);
  }

  return (
    <ul className="tabs">
      <li
        id="country"
        onClick={onClickTab}
        className={tabActive === "country" ? "active" : null}
      >
        Paises
      </li>
      <li
        id="language"
        onClick={onClickTab}
        className={tabActive === "language" ? "active" : null}
      >
        Idiomas
      </li>
      <li
        id="city"
        onClick={onClickTab}
        className={tabActive === "city" ? "active" : null}
      >
        Cidades
      </li>
    </ul>
  );
}

export default Tabs;
>>>>>>> 4edbd139a7364ed251f56167cf0dcad3c16fd67e
