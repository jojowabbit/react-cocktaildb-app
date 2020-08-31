import React, { useState } from "react";

import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  return (
    <main>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList cocktails={cocktails} />
    </main>
  );
}
