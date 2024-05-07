import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image';
import AllCards from "../components/AllCards";
import { Heading, Flex, Text } from "@chakra-ui/react";
import { fullName, tagline, copyright, url, address } from "../data/mainDetails";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>{fullName}</title>
        </Head>
      </div>
      <main>
        <div>
          <Flex
            direction="column"
            alignItems="center"
            bgGradient="linear(to-r, #033C70, #2E4B5B)"
          >
            <Heading
              as="h2"
              bgGradient="linear(to-b, #ff7e5f, #ff1e56)"
              bgClip="text"
              fontWeight="bold"
              mt="10"
              fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              textAlign="center"
            >
              {fullName}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              color="green.100"
              fontWeight="light"
              mt="3"
              textAlign="center"
            >
              {tagline}
            </Text>
            <Image src="/logo.png" alt="Info Télécom Strasbourg logo" width={150} height={150} style={{ margin: '20px' }} />

            <AllCards />
          </Flex>
        </div>
      </main>
      <footer style={{ marginBottom: 10 }}>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} fontWeight="light" mt="3" textAlign="center">
          {copyright} - <a href={url} target="_blank" >{fullName}</a> - {address}
        </Text>
      </footer>
    </>
  );
};

export default Home;
