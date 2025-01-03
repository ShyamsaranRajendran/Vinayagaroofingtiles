import React, { useEffect } from "react";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { Products } from "./components/Products";
import { Brand } from "./components/Brand";

function App() {


  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        <Hero />
        <Brand />
        <Categories />
        <Products />
      </main>
    </div>
  );
}

export default App;
