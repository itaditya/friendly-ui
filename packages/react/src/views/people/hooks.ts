import { useMatch, useMatchRoute, useSearch } from '@tanstack/react-location';
import { useMemo } from 'react';
import { useFriendsStore } from '_shared/friendsStore';

export const usePeopleRouteData = () => {
  const match = useMatch();
  const routeData = match.data.people;
  return routeData;
};

export const usePeopleList = () => {
  const statusMap = useFriendsStore((state) => state.statusMap);
  const routeData = usePeopleRouteData();
  const searchParams = useSearch();
  const isFilterFriends = searchParams.filter === 'friends';
  console.log(`statusMap`, statusMap); // aditodo remove this
  
  const people = routeData;

  const peopleList = useMemo(() => {
    if (!isFilterFriends) {
      return people;
    }

    return people.filter(
      (person) => statusMap[person.id] === 'accepted',
    );
  }, [isFilterFriends, people, statusMap]);

  return peopleList;
};

export const useHeaderLink = () => {
  const searchParams = useSearch();
  const matchRoute = useMatchRoute();

  function getHeaderLink() {
    const match = matchRoute({ to: ':id' });
    const personId = match.id;

    let url = '/people';

    if (personId) {
      url += `/${personId}`;
    }

    url += '?filter=';

    if (searchParams.filter === 'friends') {
      url += 'all';
    } else {
      url += 'friends';
    }

    return url;
  }

  return getHeaderLink;
};
