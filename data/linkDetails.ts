/*
href: URL of your profile
title: Name of the site
description: small description
*/

export interface CardProps {
  href: string;
  title: string;
  description: string;
  section: string;
}

// you can add more such data if you want to add
// if you don't want to use any of these then just delete that particular data

export const CardData: Array<CardProps> = [
  {
    href: "https://www.linkedin.com/company/info-telecom-strasbourg",
    title: "Linkedin",
    description: "Let's connect on LinkedIn",
    section: "Social Media",
  },
  {
    href: "https://www.instagram.com/info.telecom.strasbourg",
    title: "Instagram",
    description: "Follow us on Instagram",
    section: "Social Media",
  },
  {
    href: "https://discord.gg/wJ4VtNavFk",
    title: "Discord",
    description: "Join our Discord server",
    section: "Social Media",
  },
  {
    href: "https://www.facebook.com/Info.Telecom.Strasbourg",
    title: "Facebook",
    description: "Follow us on Facebook",
    section: "Social Media",
  },
  {
    href: "https://info-telecom-strasbourg.fr",
    title: "Website",
    description: "Visit our website",
    section: "Social Media",
  },
  {
    href: "https://github.com/info-telecom-strasbourg",
    title: "Github",
    description: "Check out some of our code projects",
    section: "Projects",
  },
  {
    href: "https://uptime.its-tps.fr/status/its",
    title: "Uptime Kuma",
    description: "Check out our servers status",
    section: "Servers",
  },
];
