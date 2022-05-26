import { createMemo } from 'solid-js';
import { useRouteData, useSearchParams, useMatch } from 'solid-app-router';
import { useFriendsStore } from '_shared/friendsStore';
import { PeopleAccessor } from '_shared/types';
import { useSearchStore } from '_shared/searchStore';

export const usePeopleRouteData = () => {
  const routeData = useRouteData<PeopleAccessor>();
  return routeData;
};

export function createPeopleList() {
  const [friends] = useFriendsStore();
  const [search] = useSearchStore();
  const routeData = usePeopleRouteData();
  const [searchParams] = useSearchParams();

  const searchedPeople = createMemo(() => {
    const query = search.query.toLowerCase();
    const fetchedPeople = routeData();

    return fetchedPeople.filter((person) => {
      const name = person.name.toLowerCase();
      return name.includes(query);
    });
  });

  const peopleList = createMemo(() => {
    const isFilterFriends = searchParams.filter === 'friends';
    const people = searchedPeople();

    if (!isFilterFriends) {
      return people;
    }

    return people.filter(
      (person) => friends.statusMap[person.id] === 'accepted',
    );
  });

  return peopleList;
}

export function createHeaderHref() {
  const match = useMatch(() => '/people/:id');
  const [searchParams] = useSearchParams();

  function headerHref() {
    const personId = match()?.params.id;

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

  return headerHref;
}
