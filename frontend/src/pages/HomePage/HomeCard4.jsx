import React from "react";
import {
  Box,
  Text,
  Image,
  Grid,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

export const HomeCard4 = () => {
  return (
    <Box w="85%" m="auto">
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
          FIND THE PERFECT FIT
        </Text>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
          "2xl": "repeat(2,1fr)",
        }}
      >
        <Box>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
            alt="img"
            p="2"
          />
        </Box>
        <Box>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
            alt="img"
            p="2"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export const HomeCard4a = ({ type, heading }) => {
  return (
    <Box w="85%" m="auto">
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
          {heading}
        </Text>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
          "2xl": "repeat(2,1fr)",
        }}
        gap={6}
      >
        {type.map((i) => (
          <Box key={i.img}>
            <Image src={`${i.img}`} alt={i.caption} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export const HomeCard4b = ({ type, heading }) => {
  return (
    <Box w="95%" m="auto">
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
          {heading}
        </Text>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
          "2xl": "repeat(2,1fr)",
        }}
        gap={6}
      >
        {type.map((i) => (
          <Box key={i}>
            <Image src={`${i.img}`} alt={i.caption} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export const HomeCard4c = ({ type, heading }) => {
  return (
    <Box bgColor="#fff092" pb="5%" pt="2%">
      <Box w="90%" m="auto">
        <Text
          fontSize={["15px", "15px", "15px", "30px", "30px"]}
          pb="7"
          fontWeight="500"
          textAlign="center"
          fontFamily="futurastd-medium"
        >
          {heading}
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(3,1fr)",
            "2xl": "repeat(3,1fr)",
          }}
          gap={6}
          w="100%"
        >
          {type.map((i) => (
            <Box key={i}>
              <ReactPlayer url={i.img} width="100%" height="300px" />
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
