import { createMemo } from 'solid-js';
import { useSearchParams } from 'solid-app-router';
import { usePeopleStore } from '../../shared/peopleStore';

export function createPeopleList() {
  const [state] = usePeopleStore();
  const [searchParams] = useSearchParams();

  const peopleList = createMemo(() => {
    const isFilterFriends = searchParams.filter === 'friends';

    if (!isFilterFriends) {
      return state.peopleIdList;
    }

    return state.peopleIdList.filter(
      (personId) => state.friendsStatusMap[personId] === 'accepted',
    );
  });

  return peopleList;
}
