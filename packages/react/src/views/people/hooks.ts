import { useMatch } from "@tanstack/react-location";

export const usePeopleRouteData = () => {
  const match = useMatch();
  const routeData = match.data.people;
  return routeData;
}

export const usePeopleList = () => {
  const routeData = usePeopleRouteData();

  return routeData;
}
