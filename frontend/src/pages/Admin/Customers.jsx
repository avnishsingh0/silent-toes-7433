import {
  Box,
  Button,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SidebarWithHeader from "./Sidebar";
import InitialFocus from "./Modal";
const Customers = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getJewlery();
  }, [1]);

  function getJewlery() {
    fetch("https://caratlane-database.vercel.app/products").then((result) => {
      result.json().then((resp) => {
        setCart(resp);
      });
    });
  }

  function deleteItem(id) {
    fetch(`https://caratlane-database.vercel.app/products/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getJewlery();
      });
    });
  }
  return (
    <Box>
      <SidebarWithHeader />
      <TableContainer>
        <Table size="sm" ml={250} w={"80%"}>
          <Thead>
            <Tr>
              <Th>Sl.No</Th>
              <Th>Item Image</Th>
              <Th>Item name</Th>
              <Th>Offer Price</Th>
              <Th>Real Price</Th>
              <Th>Item Edit</Th>
              <Th>Item Delete</Th>
            </Tr>
          </Thead>
          {cart.map((product, index) => (
            <Tbody key={index}>
              <Tr>
                <Td fontWeight={"bold"}>{index + 1}.</Td>
                <Td>
                  <Img w={50} h={50} src={product.image1} />
                </Td>
                <Td>{product.name}</Td>
                <Td>{product.price}</Td>
                <Td>4000</Td>
                <Td>
                  <InitialFocus />
                </Td>
                <Td>
                  <Button
                    bg="tomato"
                    variant="solid"
                    onClick={() => deleteItem(product.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Customers;
