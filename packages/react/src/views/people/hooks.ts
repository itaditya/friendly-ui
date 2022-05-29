import { useMatch, useMatchRoute, useSearch } from '@tanstack/react-location';
import { useMemo } from 'react';
import { useFriendsStore } from '_shared/friendsStore';
import { useSearchStore } from '_shared/searchStore';
import { LocationGenerics } from '_shared/types';

export const usePeopleRouteData = () => {
  const match = useMatch<LocationGenerics>();
  const routeData = match.data.people || [];
  return routeData;
};

export const usePeopleList = () => {
  const statusMap = useFriendsStore((state) => state.statusMap);
  const searchQuery = useSearchStore((state) => state.query);
  const routeData = usePeopleRouteData();
  const searchParams = useSearch();
  const isFilterFriends = searchParams.filter === 'friends';

  const searchedPeople = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return routeData.filter((person) => {
      const name = person.name.toLowerCase();
      return name.includes(query);
    });
  }, [searchQuery, routeData]);

  const peopleList = useMemo(() => {
    if (!isFilterFriends) {
      return searchedPeople;
    }

    return searchedPeople.filter(
      (person) => statusMap[person.id] === 'accepted',
    );
  }, [isFilterFriends, searchedPeople, statusMap]);

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
