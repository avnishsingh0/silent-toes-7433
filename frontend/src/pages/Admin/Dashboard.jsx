import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "./Sidebar";
// import { FiHome } from "react-icons/fi";
import Chart from "react-apexcharts";
// import { useSelector } from "react-redux";
const Blog = () => {
  // const  isLoadin  = useSelector((store) => store.AppReducer);
  // console.log(isLoadin);
  return (
    <Box>
      <SidebarWithHeader />
      <Box ml={250}>
        <SimpleGrid fontWeight={"bold"} columns={[1, 3, 3, 4]}>
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
            Packages <br />24{" "}
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
            Customers <br />3
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
            Gift Card <br />0
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
            Income <br />10000  
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={75}>
        <Chart
          type="pie"
          width={1100}
          height={350}
          series={[24, 35, 0, 30]}
          options={{
            
            noData: { text: "Empty Data" },
            labels: ["Packages", "Customers", "Gift Card", "Income"],
          }}
        >
          
        </Chart>
      </Box>
    </Box>
  );
};

export default Blog;
