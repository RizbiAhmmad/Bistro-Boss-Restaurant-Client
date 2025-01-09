import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] =useCart()

    const handleAddToCart = () =>{
      // console.log(food);

      if(user && user.email){
        // console.log(user.email, food);

        // send cart item to the database
        const cartItem={
          menuId: _id,
          email: user.email,
          name,
          image, 
          price
        }
        axiosSecure.post('/carts', cartItem)
        .then(res=>{
          console.log(res.data)
          if (res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} addeded to the cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart items count
            refetch();
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate ('/login', {state: {from:location}})          
          }
        });
      }
    }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div onClick={handleAddToCart} className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
