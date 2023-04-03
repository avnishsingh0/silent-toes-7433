import React from "react";
import { Box } from "@chakra-ui/react";
import { NavbarCard1, NavbarCard2} from "./NavbarCard";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <Box overflow="hidden" bg="white" position="fixed" top={0} width={"100%"} zIndex={10}>
      <Box display={{ base: "none", xl: "inherit" }} color="blackAlpha.800">
        <NavbarCard1 />
        <NavbarCard2 />
      </Box>
      <Nav />
    </Box>
  );
};

export default Navbar;
