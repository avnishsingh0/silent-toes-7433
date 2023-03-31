import { Box, Button, Center, Input, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SidebarWithHeader from "./Sidebar";
import Aos from "aos";
const Package = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image1, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [catogery, setCatogery] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1500 }, { offset: 200 });
  }, []);

  function saveData() {
    let data = { name, image1, price, type, catogery };
    fetch("https://caratlane-database.vercel.app/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  }

  return (
    <Box>
      <SidebarWithHeader />
      <Center>
        <Box
          p={5}
          ml={300}
          mt={50}
          w={"30%"}
          border={"2px solid cyan"}
          borderRadius={15}
          textAlign={"center"}
          data-aos="fade-left"
        >
          <label>ADD PRODUCT</label>
          <br />
          <br />
          <Select placeholder="Select Catogery">
            <option
              value={catogery}
              onChange={(e) => {
                setCatogery(e.target.value);
              }}
            >
              Jwellery
            </option>
          </Select>
          <br />
          <Input
            placeholder="Enter product name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />

          <Input
            placeholder="Enter image url"
            value={image1}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br />
          <br />
          <Input
            placeholder="Enter-type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          <br />
          <br />
          <Input
            placeholder="Enter-Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <Center p={0} mt={5}>
            <Button
              w={"full"}
              maxW={"md"}
              colorScheme={"messenger"}
              onClick={saveData}
            >
              <Center>
                <Text>Add Product</Text>
              </Center>
            </Button>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Package;
