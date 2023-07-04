import PeopleIcon from "@mui/icons-material/People";

interface MainNavbarItem {
  id: number;
  icon: JSX.Element;
  label: string;
  route: string;
}

export const mainNavbarItems: MainNavbarItem[] = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Authentication",
    route: "authentication",
  },
  {
    id: 1,
    icon: <PeopleIcon />,
    label: "Hello World",
    route: "helloworld",
  },
];
