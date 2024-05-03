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
          icon: createIcon({
            displayName: "UptimeKuma",
            viewBox: "0 0 640 640",
            path: (
              <g transform="matrix(1 0 0 1 320 320)">
                <linearGradient id="S3" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -319.99875 -320.0001577393)" x1="259.78" y1="261.15" x2="463.85" y2="456.49">
                  <stop stopColor="#5CDD8B" />
                  <stop offset="1" stopColor="#86E6A9" />
                </linearGradient>
                <path
                  style={{ stroke: 'rgb(242,242,242)', strokeOpacity: '0.51', strokeWidth: '200', strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: '0', strokeLinejoin: 'miter', strokeMiterlimit: '4', fill: 'url(#S3)', fillRule: 'nonzero', opacity: '1' }}
                  transform=" translate(0, 0)"
                  d="M 170.40125 -84.36016 C 224.09125 38.37984 224.09125 115.33984 170.40125 146.49984 C 89.85125000000001 193.23984000000002 -120.03875 207.48984000000002 -180.45875 135.63984 C -220.73875 87.73983999999999 -220.73875 14.399839999999998 -180.45875 -84.36016000000001 C -139.49875 -151.82016 -81.28875000000001 -185.55016 -5.828750000000014 -185.55016 C 69.64124999999999 -185.55016 128.38125 -151.82016000000002 170.40124999999998 -84.36016000000001 z"
                  strokeLinecap="round"
                />
              </g>
            ),
          }),
        };
        break;
      case "Nextcloud":
        values = {
          color: "blue",
          icon: createIcon({
            displayName: "Nextcloud",
            viewBox: "0 0 132.642 93.377",
            path: (
              <>
                <path d="M66.408 9.375c-11.805 0-21.811 8.003-24.912 18.847C38.8 22.47 32.96 18.44 26.232 18.44c-9.252 0-16.857 7.605-16.857 16.857 0 9.252 7.605 16.86 16.857 16.86 6.728 0 12.568-4.032 15.264-9.784 3.1 10.844 13.107 18.85 24.912 18.85 11.718 0 21.673-7.885 24.853-18.607 2.745 5.622 8.514 9.541 15.146 9.541 9.251 0 16.86-7.608 16.86-16.86 0-9.252-7.609-16.857-16.86-16.857-6.632 0-12.4 3.917-15.146 9.538-3.18-10.722-13.135-18.604-24.853-18.604Zm0 9.896c8.912 0 16.03 7.115 16.03 16.027 0 8.911-7.118 16.03-16.03 16.03a15.954 15.954 0 0 1-16.027-16.03A15.951 15.951 0 0 1 66.408 19.27zm-40.176 9.065c3.904 0 6.965 3.057 6.965 6.962 0 3.904-3.06 6.965-6.965 6.965-3.904 0-6.962-3.06-6.962-6.965s3.058-6.962 6.962-6.962zm80.175 0c3.904 0 6.965 3.057 6.965 6.962 0 3.904-3.061 6.965-6.965 6.965-3.905 0-6.962-3.06-6.962-6.965s3.057-6.962 6.962-6.962z" style={{ fill: '#0082c9', fillOpacity: '1', strokeWidth: '.47038522' }} />
              </>
            ),
          }),
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
              bg="teal.400"
              border="1px solid"
              position="absolute"
              borderColor="green.400"
              inset="0"
              opacity={0.25}
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
