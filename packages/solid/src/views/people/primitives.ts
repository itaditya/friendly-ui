import { createMemo } from 'solid-js';
import { useRouteData, useSearchParams, useMatch } from 'solid-app-router';
import { useFriendsStore } from '_shared/friendsStore';

export function createPeopleList() {
  const [friends] = useFriendsStore();
  const routeData = useRouteData();
  const [searchParams] = useSearchParams();

  const peopleList = createMemo(() => {
    const isFilterFriends = searchParams.filter === 'friends';
    const fetchedPeople = routeData();

    if (!isFilterFriends) {
      return fetchedPeople;
    }

    return fetchedPeople.filter(
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
