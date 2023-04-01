import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SidebarWithHeader from "./Sidebar";
import Aos from "aos";
const Package = () => {
  const [name, setName] = useState("");
  const [productType, setProductType] = useState("");
  const [imageTsrc, setimageTsrc] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1500 }, { offset: 200 });
  }, []);

  function saveData() {
    let data = { name, imageTsrc, price, productType, gender };
    fetch("http://localhost:8080/product", {
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
          ml={["", "", "180", "300"]}
          mt={50}
          w={["90%", "", "50%", "30%"]}
          border={"2px solid cyan"}
          borderRadius={15}
          textAlign={"center"}
          data-aos="fade-left"
        >
          <Heading color="cyan.500" fontWeight={600}>
            ADD PRODUCT
          </Heading>
          <br />
          <br />
          <Select border={"1px solid cyan"} placeholder="Select Gender">
            <option
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              Men
            </option>
            <option
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              Women
            </option>
            <option
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              Kids
            </option>
            <option
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              Men,Women
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
            placeholder="Enter ImageURL"
            value={imageTsrc}
            onChange={(e) => {
              setimageTsrc(e.target.value);
            }}
          />
          <br />
          <br />
          <Input
            placeholder="Enter Product type"
            value={productType}
            onChange={(e) => {
              setProductType(e.target.value);
            }}
          />
          <br />
          <br />
          <Input
            placeholder="Enter Price"
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
