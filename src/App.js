import React from "react";
import { Route } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";


export default function App() {
  return (
    <main>
      <Header />
    <TabNav />
      <CharacterList />
        <Route path="/character" component={CharacterList} />
        <Route path="/location" component={LocationsList} />
    </main>
  );
}
