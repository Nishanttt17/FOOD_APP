import RestaurantCard from "./RestaurantCard";
import resObj  from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
const Body=()=>{
    const [ListOfRestaurants,setListOfRestaurant]=useState([]);
    const[filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("");
    //whenever state variables are updated,react trigers a reconcilation cycle
    //(re-renders the component)
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async()=>{
        const data=await fetch(
             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        console.log(json);
       setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    return ListOfRestaurants.length===0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                />
                <button
                 onClick={()=>{
                    //filter the reastaurant list and update the UI
                    //searchText
                    console.log(searchText);
                   const filteredRestaurant= ListOfRestaurants.filter((res)=>
                   res.info.name.toLowerCase().includes(searchText.toLowerCase())
                   );
                   
                    setfilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
              // filter logic here
              const filteredlist=ListOfRestaurants.filter(
                 (res)=>res.info.avgRating>4.5               
              );
              
              setfilteredRestaurant(filteredlist); 
                }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
            {filteredRestaurant.map((restaurant) => 
        (<RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
                
            </div>
        </div>
    );
};
export default Body;
