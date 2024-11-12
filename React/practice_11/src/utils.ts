import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
export type NavData = {
  name: string;
  to: string;
  component: React.ComponentType;
};

export const Navlink: NavData[] = [
  {
    name: "home",
    to: "/",
    component: Home,
  },
  {
    name: "about",
    to: "/about",
    component: About,
  },
  {
    name: "projects",
    to: "/to",
    component: Projects,
  },
  {
    name: "contact",
    to: "/contact",
    component: Contact,
  },
  {
    name: "profile",
    to: "/profile",
    component: Profile,
  },
];
