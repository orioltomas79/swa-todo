import PeopleIcon from "@mui/icons-material/People";

interface MainNavbarItem {
  id: number;
  icon: JSX.Element;
  label: string;
  router: string;
}

export const mainNavbarItems: MainNavbarItem[] = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Authentication",
    router: "route",
  },
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Authentication2",
    router: "route",
  }
];
