import React from "react";
import { Box, Text, Image, Flex, useColorModeValue } from "@chakra-ui/react";
export const HomeCard3 = ({ text, src }) => {
  return (
    <Box mt="-20">
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "2px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
          mb: 4,
        }}
        _after={{
          content: '""',
          borderBottom: "2px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 4,
          mb: 4,
        }}
      >
        <Text
          fontSize={["15px", "15px", "15px", "30px", "30px"]}
          pb="7"
          fontWeight="500"
          textAlign="center"
        >
          {text}
        </Text>
      </Flex>

      <Image src={src} alt="img" />
    </Box>
  );
};

export const HomeCard3a = ({ text, src }) => {
  return (
    <Box mt="-20">
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "2px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
          mb: 4,
        }}
        _after={{
          content: '""',
          borderBottom: "2px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 4,
          mb: 4,
        }}
      >
        <Text
          fontSize={["15px", "15px", "15px", "30px", "30px"]}
          pb="7"
          fontWeight="500"
          textAlign="center"
        >
          {text}
        </Text>
      </Flex>
      <Image src={src} alt="img" w="85%" m="auto" />
    </Box>
  );
};

export const HomeCard3b = ({ text, src }) => {
  return (
    <Box mt="-20">
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "2px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
          mb: 4,
        }}
        _after={{
          content: '""',
          borderBottom: "2px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 4,
          mb: 4,
        }}
      >
        <Text
          fontSize={["15px", "15px", "15px", "30px", "30px"]}
          pb="7"
          fontWeight="500"
          textAlign="center"
        >
          {text}
        </Text>
      </Flex>
      <Image src={src} alt="img" w="100%" m="auto" />
    </Box>
  );
};
