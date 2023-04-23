import React from "react";
import { useParams } from 'react-router-dom';
//import {useEffect, useState} from 'react'
//import { useParams } from "react-router-dom"
//import { Client } from "@petfinder/petfinder-js";

import { Link } from 'react-router-dom';
//import products from '../data';


const Profile = (props) => {
  const {animal} = props;
  const params = useParams()

  const animalId = animal.find((animal) =>{
    return animal.Name === params.title
  })


return (
  <div className="pet"> 
<div key={animalId.id} >
{/* <div style={{
						border: "1px solid",
						height: "400px",
						width: "200px",
						margin: "20px",
            overflow: "hidden",
					}}> */}
  <div className="pet-image-container">
    <img
      className="pet-image"
        src={
              animalId.photos[0]?.medium || 'image/pet-photo-shoot.jpeg'
            }
              alt=""
    />
  </div>
    
      <h3 >{animalId.Name}</h3>
     
      <p>Type: {animal.type}</p>
      <p>{animal.contact.address.city},{animal.contact.address.state} </p>
      <p>Breed: {animal.breeds.primary}</p>
      {/* <p>Color: {animal.colors.primary}</p> */}
      <p>Gender: {animal.gender}</p>
      <p>Age: {animal.age}</p>
      {/* <p>About {animal.name}: {animal.description}</p> */}
  
  </div>
</div>   



   
 );};
      


  
export default Profile;  