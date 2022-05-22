import { createContext, ParentComponent, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { getNormalizedPeople } from './utils';

const storeContext = createContext();

export function usePeopleStore() {
  const store = useContext(storeContext);

  if (!store) {
    throw new Error('Please use it inside PeopleStoreProvider component');
  }

  return store;
}

export const PeopleStoreProvider: ParentComponent = (p) => {
  const [state, setState] = createStore({
    friendsStatusMap: {},
    peopleDetailsMap: {},
    peopleIdList: [],
  });

  const methods = {
    setData({ people = [], friends = {} } = {}) {
      const { peopleDetailsMap, peopleIdList } = getNormalizedPeople(people);

      setState(
        produce((draft) => {
          Object.assign(draft.friendsStatusMap, friends);
          Object.assign(draft.peopleDetailsMap, peopleDetailsMap);
          draft.peopleIdList.push(...peopleIdList);
        }),
      );
    },
  };

  const store = [state, methods];

  return <storeContext.Provider value={store} children={p.children} />;
};
