
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./components/Card";
import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://zomatolite-backend.onrender.com/api/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">ZomatoLite</h1>
        <nav>
          <ul className="flex gap-4 text-gray-700">
            <li>Home</li>
            <li>Restaurants</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <h2 className="hero-text">Find the Best Restaurants Near You</h2>
      </section>

      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Search restaurants..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button">Search</button>
      </div>

      <section className="restaurant-list">
        {restaurants.map((r, i) => (
          <Card key={i} image={r.image} name={r.name} cuisine={r.cuisine} location={r.location} />
        ))}
      </section>

      <footer className="footer">© 2025 ZomatoLite. All rights reserved.</footer>
    </div>
  );
}

export default App;
