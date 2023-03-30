import SidebarWithHeader from "./Sidebar";
import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Order = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getJewlery();
  }, [1]);
  function getJewlery() {
    fetch("https://caratlane-database.vercel.app/customerData").then(
      (result) => {
        result.json().then((resp) => {
          setCart(resp);
        });
      }
    );
  }
  function deleteItem(id) {
    fetch(`https://caratlane-database.vercel.app/customerData/${id}`, {
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
              <Th>User Name</Th>
              <Th>User Address</Th>
              <Th>Address</Th>
              <Th>No of Item</Th>

              <Th>Reject</Th>
            </Tr>
          </Thead>

          {cart.map((product, index) => (
            <Tbody key={index}>
              <Tr>
                <Td>
                  {product.fullName}
                  {/* <Img
                  w={50}
                  h={50}
                  src={product.image1}
                /> */}
                </Td>
                <Td>{product.address}</Td>
                <Td>{product.city}</Td>
                <Td>{product.numOfItems}</Td>

                <Td>
                  <Button
                    bg="tomato"
                    variant="solid"
                    onClick={() => deleteItem(product.id)}
                  >
                    Reject
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

export default Order;
