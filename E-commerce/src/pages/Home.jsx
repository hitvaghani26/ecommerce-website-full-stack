import React from 'react'
import { IoIosStar } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { MdSupportAgent, MdOutlinePayment } from "react-icons/md";
import { woman1, bag1, bag2, bag3, bag5, couple1, couple2, fashion, fashion1, fashion2, femaleWatch, footer1, footer2, footer3, footer4, man, manWatch, manWatch2, manWatch3, manWatch4, pants1, pants2, photo, unsplash, tshirt, tshirt2, tshirt5, tshirtw, woman, woman2, woman3, woman4, woman6, woman7, refooter, rewoman } from "../assets/photo/index";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import MainHome from '../components/home/MainHome';
import NewProduc from '../components/home/NewProduc';
import Carousel from '../components/home/Carousel';
import Trending from '../components/home/Trending';
import Discoutn from '../components/home/Discoutn';
import Footer from './Footer';

const Home = () => {



  return (
    <div className='Home'>

      <MainHome />


      <NewProduc></NewProduc>

 

      <Carousel></Carousel>

     

      <Trending></Trending>


      <Discoutn></Discoutn> 



    </div>

  )
}

export default Home