import { createContext, ParentComponent, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { sleep } from './utils';

const storeContext = createContext();

export function useFriendsStore() {
  const store = useContext(storeContext);

  if (!store) {
    throw new Error('Please use it inside FriendsStoreProvider component');
  }

  return store;
}

export const FriendsStoreProvider: ParentComponent = (p) => {
  const [friends, setFriends] = createStore({
    statusMap: {},
  });

  const methods = {
    addFriend(personId) {
      setFriends(
        produce(async (draft) => {
          draft.statusMap[personId] = 'requested';
          await sleep(2000);
          draft.statusMap[personId] = 'accepted';
        }),
      );
    },
    removeFriend(personId) {
      setFriends(
        produce(async (draft) => {
          delete draft.statusMap[personId];
        }),
      );
    },
  };

  const store = [friends, methods];

  return <storeContext.Provider value={store} children={p.children} />;
};
