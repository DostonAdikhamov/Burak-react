import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import ActiveUsers from "./ActiveUsers";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {createSelector} from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data))
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function Home() { 
  const { setPopularDishes } = actionDispatch(useDispatch());
  const {popularDishes} = useSelector(popularDishesRetriever);
  // Selectors: Store => Data

  useEffect(() => {
    // Basckend Serverdan datani fetch qiladi => Data
    const result = [
    {
        "_id": "692716c68b670943543dec82",
        "productStatus": "PROCESS",
        "productCollection": "DISH",
        "productName": "Burger",
        "productPrice": 12,
        "productLeftCount": 20,
        "productSize": "NORMAL",
        "productVolume": 1,
        "productDesc": "Shirindir, yeb ko'ring!",
        "productImages": [
            "uploads/products/05e5813e-71b0-474a-a5ee-0e8c881dcb1a.png",
            "uploads/products/707cbad6-e00d-4330-82ea-3b756c8665dc.png"
        ],
        "productViews": 1,
        "createdAt": "2025-11-26T15:03:34.971Z",
        "updatedAt": "2025-11-27T11:11:20.090Z",
        "__v": 0
    },
    {
        "_id": "692716a08b670943543dec80",
        "productStatus": "PROCESS",
        "productCollection": "DISH",
        "productName": "Burger",
        "productPrice": 15,
        "productLeftCount": 12,
        "productSize": "LARGE",
        "productVolume": 1,
        "productDesc": "Shirindir",
        "productImages": [
            "uploads/products/1f6186cc-eac4-43da-a4a7-8a5d614b3754.png",
            "uploads/products/fc4e4866-0316-4957-98ca-02ebd6fad71f.png"
        ],
        "productViews": 0,
        "createdAt": "2025-11-26T15:02:56.739Z",
        "updatedAt": "2025-11-26T15:05:21.389Z",
        "__v": 0
    },
]
    // Slice: Data => Store
  // @ts-ignore
  setPopularDishes(result);
  }, []);

  console.log("popular Dishes", popularDishes);

  return <div className={"homepage"}>
    <Statistics />
    <PopularDishes />
    <NewDishes />
    <Advertisement />
    <ActiveUsers />
    <Events />
  </div>
}
