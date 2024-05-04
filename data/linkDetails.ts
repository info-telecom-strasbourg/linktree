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
  {
    href: "https://matrix.its-tps.fr/_matrix/static/",
    title: "Matrix",
    description: "Check out our Matrix server",
    section: "Servers",
  },
  {
    href: "",
    title: "Minecraft",
    description: "Join our Minecraft server mineraft.its-tps.fr",
    section: "Servers",
  },
  {
    href: "https://mirror.its-tps.fr",
    title: "Linux Mirror",
    description: "Download your Linux packages from our mirror",
    section: "Servers",
  },
  {
    href: "https://virtualmin.its-tps.fr",
    title: "Virtualmin",
    description: "Host your website with us",
    section: "Servers",
  },
  {
    href: "https://nextcloud.its-tps.fr",
    title: "Nextcloud",
    description: "",
    section: "Applications",
  },
  {
    href: "https://overleaf.its-tps.fr",
    title: "Overleaf",
    description: "",
    section: "Applications",
  },
  {
    href: "https://excalidraw.its-tps.fr",
    title: "Excalidraw",
    description: "",
    section: "Applications",
  },
  {
    href: "https://etherpad.its-tps.fr",
    title: "Etherpad",
    description: "",
    section: "Applications",
  },
  {
    href: "https://app.its-tps.fr",
    title: "InsidePSBS",
    description: "The app for the students of the schools",
    section: "Applications",
  },
];
