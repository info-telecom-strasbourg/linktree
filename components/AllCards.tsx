import { CardData, CardProps } from "../data/linkDetails";
import { SimpleGrid, Center, Box, Heading } from "@chakra-ui/react";
import LinkCard from "./LinkCard";
import { VStack } from "@chakra-ui/react";

const AllCards = (): any => {
  const sections: { [key: string]: CardProps[] } = CardData.reduce<{ [key: string]: CardProps[] }>((acc, card) => {
    if (!acc[card.section]) {
      acc[card.section] = [];
    }
    acc[card.section].push(card);
    return acc;
  }, {});

  return (
    <VStack mx={[2, 3]} spacing={10}>
      {Object.keys(sections).map((section) => (
        <Box key={section} w="full">
          <Heading size="lg" mb={4}>{section}</Heading>
          <SimpleGrid
            pt={5}
            pb={10}
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={[7, 10]}
          >
            {sections[section].map((card: CardProps, index: number) => (
              <LinkCard key={index} {...card} />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </VStack>
  );
};

export default AllCards;