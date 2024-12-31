import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import featuredImg from '../assets/home/featured.jpg';
import '../Pages/Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="Check It Out" heading="Featured Item"></SectionTitle>

            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div> 
                <div className='md:ml-10'>
                    <p>Aug 20, 2030</p>
                    <p>Where Can I get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad possimus ipsa, neque id facilis laborum numquam quaerat mollitia ex, quos nostrum voluptate debitis rerum. Nostrum eius minus in soluta!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
       
    );
};

export default Featured;