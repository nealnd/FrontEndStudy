import { IconType } from "react-icons";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Documents from "./pages/Documents";

export type Navlink = {
  name: string;
  url: string;
  icon: IconType;
  component: React.ComponentType | null;
};

export const NavDatas: Navlink[] = [
  {
    name: "home",
    url: "/",
    icon: FaHome,
    component: Home,
  },
  {
    name: "team",
    url: "/team",
    icon: FaUserFriends,
    component: Team,
  },
  {
    name: "projects",
    url: "/projects",
    icon: FaFolderOpen,
    component: Projects,
  },
  {
    name: "calendar",
    url: "/calendar",
    icon: FaCalendarAlt,
    component: Calendar,
  },
  {
    name: "documents",
    url: "/documents",
    icon: FaWpforms,
    component: Documents,
  },
];

export const OtherDatas: Navlink[] = [
  {
    name: "facebook",
    url: "https://www.twitter.com",
    icon: FaFacebook,
    component: null,
  },
  {
    name: "twitter",
    url: "https://www.twitter.com",
    icon: FaTwitter,
    component: null,
  },
  {
    name: "Linkedin",
    url: "https://www.twitter.com",
    icon: FaLinkedin,
    component: null,
  },
  {
    name: "Behance",
    url: "https://www.twitter.com",
    icon: FaBehance,
    component: null,
  },
  {
    name: "Sketch",
    url: "https://www.twitter.com",
    icon: FaSketch,
    component: null,
  },
];
