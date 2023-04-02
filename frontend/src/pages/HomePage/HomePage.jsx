import React from "react";
import HomeCard from "./HomeCard";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";
import { HomeCard3, HomeCard3a, HomeCard3b } from "./HomeCard3";
import { HomeCard4, HomeCard4a, HomeCard4b, HomeCard4c } from "./HomeCard4";
import HomeCard5 from "./HomeCard5";
import HomeCard6 from "./HomeCard6";
import Footer from "../../components/Footer/Footer";
import {
  HomeDetails,
  HomeDetails1,
  HomeDetails2,
  HomeDetails3,
  HomeDetails4,
  HomeDetails5,
  HomeDetails6,
  HomeDetails7,
  HomeDetails8,
  HomeDetails9,
  HomeDetails10,
  HomeDetails11,
  HomeDetails12,
} from "./HomeDetails";
import { Image, Box } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import {NavbarCard4} from "../../components/Navbar/NavbarCard";

const Line4 = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
const Line3 = () => {
  return (
    <>
      <br />
      <br />
      <br />
    </>
  );
};
const Home = () => {
  return (
    <Box mt={["70px","40px","90px","120px"]}>
    {/* <Box > */}
      <Navbar />
      <NavbarCard4 />
      <HomeCard type={HomeDetails} />
      <HomeCard1 type={HomeDetails1} />
       <Image
        src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/PREMIUM%20BRANDS%20WEB.jpg"
        alt="img"
        mt="10"
        width="100%"
        height={["150px", "150px", "400px"]}
      />
      <Image
        src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
        alt="img"
        mt="10"
        width="100%"
        height={["100px", "100px", "200px"]}
      />
      {/* <HomeCard2
        type={HomeDetails2}
        //linked={"/personalcare"}
        src="https://i.imgur.com/Gry0Q5D.png"
      /> */}
      <HomeCard3
        text="As Seen on Shark Tank"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
      />
      <Line4 />
      <HomeCard3
        text="As Seen On Karan Johar"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
      />
      <Line4 />
     <HomeCard3
        text="Trending Sunglasses"
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      />
      <Line4 />
      <HomeCard3
        text="OJOS"
        src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/ojos%20banner/ojos%20banner/web%20banner/ojos-web-1199.gif"
      />
      <Line4 />
      <HomeCard3
        text="Aquacolor - Glam Up With Color Lenses"
        src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
      />
      <Line3 />
      <HomeCard4 />
      <Line4 />
      <HomeCard3a
        text="INTRODUCING OJOS Wear - SUBSCRIBE & SAVE"
        src="https://static1.lenskart.com/media/desktop/img/May22/ojos-web.jpg"
      />
      <Line3 />
      <HomeCard4a type={HomeDetails3} heading="CONTACT LENSES & MORE" />
      <Line3 />
      <HomeCard4b type={HomeDetails4} heading="BUY IT YOUR WAY" />
      <Line4 />
      <HomeCard3b
        text="OUR BRANDS"
        src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
      />
      <br />
        {/* <HomeCard5 type={HomeDetails5} heading="EYEGLASSES" /> */}
      <br />
      {/* <HomeCard5 type={HomeDetails6} heading="SUNGLASSES" /> */}
      <Image
        src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"
        alt="img"
        mt="10"
        width="100%"
        height={["100px", "100px", "400px"]}
      />
      {/* <HomeCard5 type={HomeDetails5} heading="EYEGLASSES" /> */}
      <br />
      {/* <HomeCard5 type={HomeDetails6} heading="SUNGLASSES" /> */}
      <Image
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg"
        alt="img"
        mt="10"
        width="100%"
        height={["100px", "100px", "400px"]}
      />
      {/* <HomeCard5 type={HomeDetails5} heading="EYEGLASSES" /> */}
      <Image
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-Readers-Banner.jpg"
        alt="img"
        mt="10"
        width="100%"
        height={["120px", "120px", "400px"]}
      />
      {/* <HomeCard5 type={HomeDetails9} heading="EYEGLASSES" /> */}
      <Image
        src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"
        alt="img"
        mt="10"
        width="100%"
        height={["100px", "100px", "400px"]}
      />
      {/* <HomeCard5 type={HomeDetails7} heading="WITH POWER COMPUTER BLU LENSES" /> */}
      <br />
      {/* <HomeCard5
        type={HomeDetails8}
        heading="WITH ZERO POWER COMPUTER BLU LENSES"
      /> */}
      <Image
        src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"
        alt="img"
        mt="10"
        width="100%"
        height={["150px", "150px", "400px"]}
      />
      <br />
      {/* <HomeCard5 type={HomeDetails10} heading="CONTACT LENSES" /> */}
      <br />
      {/* <HomeCard5 type={HomeDetails11} heading="COLOR CONTACT LENSES" /> */}
      <Image
        src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/whatsapp.png"
        alt="img"
        mt="10"
        width="100%"
        height={["50px", "70px", "200px"]}
      />
      <br />
      <HomeCard4c type={HomeDetails12} heading="MEET OUR HAPPY CUSTOMERS" />
      <HomeCard6
        type={HomeDetails9}
        heading="WITH ZERO POWER COMPUTER BLU LENSES"
      />

      <Footer />
    </Box>
  );
};

export default Home;
