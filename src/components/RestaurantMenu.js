import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu=()=>{
    const [resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=454499&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
        const json=await data.json();
        console.log(json);
        setresInfo(json.data)
    };
   const {name,cuisines,costForTwoMessage}=
    resInfo?.cards[0]?.card?.card?.gridElements.infoWithStyle.info;

   if(resInfo===null){

       <Shimmer/>;
   }

   return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}-{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;