import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  SimpleGrid,
  AspectRatio,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { createIcon } from '@chakra-ui/icons'
import { CardProps } from "../data/linkDetails";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaCode,
  FaDiscord,
} from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { GoFlame, GoCode } from "react-icons/go";

import { NextcloudIcon, UptimeKumaIcon, OverleafIcon, ExcalidrawIcon, EtherpadIcon, InsidePSBSIcon, MatrixIcon, MinecraftIcon, VirtualminIcon } from "../data/icons";

type myIcons = {
  color: string;
  icon: any;
};

const LinkCard = (props: CardProps) => {
  const { href, title, description } = props;

  const getIcon = (iconName: string): myIcons => {
    let values: myIcons;

    switch (iconName) {
      case "Linkedin":
        values = { color: "#007bb5", icon: FaLinkedin };
        break;
      case "Github":
        values = { color: "#F2FFE9", icon: FaGithub };
        break;
      case "Discord":
        values = { color: "#F2FFE9", icon: FaDiscord };
        break;
      case "Twitter":
        values = { color: "#55acee", icon: FaTwitter };
        break;
      case "Facebook":
        values = { color: "#3b5998", icon: FaFacebook };
        break;
      case "Instagram":
        values = { color: "#e95950", icon: FaInstagram };
        break;
      case "Youtube":
        values = { color: "#ff0000", icon: FaYoutube };
        break;
      case "Uptime Kuma":
        values = {
          color: "#4dc247",
          icon: UptimeKumaIcon,
        };
        break;
      case "Nextcloud":
        values = {
          color: "blue",
          icon: NextcloudIcon,
        };
        break;
      case "Overleaf":
        values = {
          color: "#4dc247",
          icon: OverleafIcon,
        };
        break;
      case "Excalidraw":
        values = {
          color: "#070707",
          icon: ExcalidrawIcon,
        };
        break;
      case "Etherpad":
        values = {
          color: "#00b0ff",
          icon: EtherpadIcon,
        };
        break;
      case "InsidePSBS":
        values = {
          color: "#00b0ff",
          icon: InsidePSBSIcon,
        };
        break;
      case "Matrix":
        values = {
          color: "#00b0ff",
          icon: MatrixIcon,
        };
        break;
      case "Minecraft":
        values = {
          color: "#00b0ff",
          icon: MinecraftIcon,
        };
        break;
      case "Virtualmin":
        values = {
          color: "#00b0ff",
          icon: VirtualminIcon,
        };
        break;
      default:
        values = { color: "gray", icon: FaCode };
        break;
    }

    return values;
  };

  return (
    <Box as="a" target={"_blank"} href={href} height="100%">
      <SimpleGrid
        bg="gray.900"
        p={3}
        maxW="400px"
        width="100%"
        height="100%"
        gridTemplateColumns="85px 1fr"
        border="1px solid"
        borderColor="gray.700"
        borderRadius="2xl"
        boxShadow="lg"
        transition="all 0.25s"
        transitionTimingFunction="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
      >
        <AspectRatio ratio={1} boxSize="85px">
          <Box
            position="relative"
            overflow="hidden"
            boxShadow="lg"
            borderRadius="2xl"
          >
            <Box
              // bg="teal.400"
              bg="#24CBBB"
              border="1px solid"
              position="absolute"
              borderColor="green.400"
              inset="0"
              // opacity={0.25}
              opacity={0.1}
            />
            <Icon
              h={[10, 10]}
              w={[10, 10]}
              as={getIcon(title).icon}
              color={getIcon(title).color}
            />
          </Box>
        </AspectRatio>

        <Flex
          textAlign="left"
          direction="column"
          pl={5}
          height="100%"
          justifyContent="center"
          alignItems="flex-start"
          isTruncated
        >
          <Stack isInline alignItems="center">
            <Text fontSize="xl" fontWeight="semibold">
              {title}
            </Text>
          </Stack>

          <Text color="gray.400" whiteSpace="normal" width="100%">
            {description}
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default LinkCard;
