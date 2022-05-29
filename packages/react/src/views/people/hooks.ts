import { useMatch, useMatchRoute, useSearch } from '@tanstack/react-location';
import { useMemo } from 'react';
import { useFriendsStore } from '_shared/friendsStore';
import { LocationGenerics } from '_shared/types';

export const usePeopleRouteData = () => {
  const match = useMatch<LocationGenerics>();
  const routeData = match.data.people || [];
  return routeData;
};

export const usePeopleList = () => {
  const statusMap = useFriendsStore((state) => state.statusMap);
  const routeData = usePeopleRouteData();
  const searchParams = useSearch();
  const isFilterFriends = searchParams.filter === 'friends';

  const people = routeData;

  const peopleList = useMemo(() => {
    if (!isFilterFriends) {
      return people;
    }

    return people.filter((person) => statusMap[person.id] === 'accepted');
  }, [isFilterFriends, people, statusMap]);

  return peopleList;
};

export const useHeaderLink = () => {
  const searchParams = useSearch<LocationGenerics>();
  const matchRoute = useMatchRoute<LocationGenerics>();

  function getHeaderLink() {
    const match = matchRoute({ to: ':id' });
    const personId = match?.id;

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
