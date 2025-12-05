import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import ActiveUsers from "./ActiveUsers";
import "../../../css/home.css";

export default function Home() { 
  // Selectors: Store => Data

  useEffect(() => {
    // Basckend Serverdan datani fetch qiladi => Data

    // Slice: Data => Store
  }, [])

  return <div className={"homepage"}>
    <Statistics />
    <PopularDishes />
    <NewDishes />
    <Advertisement />
    <ActiveUsers />
    <Events />
  </div>
}
