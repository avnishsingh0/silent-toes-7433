import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Piechart } from "./PieChat";
import SidebarWithHeader from "./Sidebar";

const Blog = () => {
  const [allproducts, setAllProducts] = useState(0);
  const [men, setMens] = useState(0);
  const [women, setWomen] = useState(0);
  const [kids, setKids] = useState(0);
  const [both, setBoth] = useState(0);

  useEffect(() => {
    getAllProduct();
    getMen();
    getWomen();
    getKids();
    getBoth();
  }, []);

  function getAllProduct() {
    fetch("https://good-cyan-giraffe-wig.cyclic.app/product").then((result) => {
      result.json().then((res) => {
        console.log("allproducts", res.length);
        setAllProducts(res.length);
      });
    });
  }

  function getMen() {
    fetch("https://good-cyan-giraffe-wig.cyclic.app/Men").then((result) => {
      result.json().then((res) => {
        console.log("Men", res.length);
        setMens(res.length);
      });
    });
  }

  function getWomen() {
    fetch("https://good-cyan-giraffe-wig.cyclic.app/Women").then((result) => {
      result.json().then((res) => {
        console.log("Women", res.length);
        setWomen(res.length);
      });
    });
  }

  function getKids() {
    fetch("https://good-cyan-giraffe-wig.cyclic.app/Kids").then((result) => {
      result.json().then((res) => {
        console.log("Kids", res.length);
        setKids(res.length);
      });
    });
  }

  function getBoth() {
    fetch("https://good-cyan-giraffe-wig.cyclic.app/menWomen").then((result) => {
      result.json().then((res) => {
        console.log("Both", res.length);
        setBoth(res.length);
      });
    });
  }
  return (
    <Box>
      <SidebarWithHeader />
      <Box ml={["5", "", "250"]} mt={5}>
        <SimpleGrid fontWeight={"bold"} columns={[2, 3, 3, 5]} gap={4}>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            AllProduct <br />
            {allproducts}{" "}
          </Box>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            Mens <br />
            {men}
          </Box>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            Women <br />
            {women}
          </Box>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            Kids <br />
            {kids}
          </Box>
          <Box
            _hover={{
              bg: "cyan.800",
              color: "white",
              cursor: "pointer",
            }}
            borderRadius={15}
            bg={"cyan.300"}
            color={"black"}
            display={"grid"}
            textAlign={"center"}
            alignItems={"center"}
            h={20}
            w={150}
          >
            Men and Women <br />
            {both}
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={75}>
        <Piechart />
      </Box>
    </Box>
  );
};

export default Blog;
