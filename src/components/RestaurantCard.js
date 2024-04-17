import { CDN_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    }=resData?.info;
    // Construct the complete Cloudinary image URL
    const imageUrl =`${CDN_URL}${cloudinaryImageId}`
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {/* Use the constructed image URL */}
            <img
                className="res-logo"
                alt="res-logo"
                src={imageUrl}
            />
            <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating}stars</h4>
              <h4>{costForTwo}</h4>
        </div>
    );
};
export default RestaurantCard;