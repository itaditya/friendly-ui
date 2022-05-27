import { createContext, ParentComponent, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { sleep } from './utils';
import { FriendsMethods, FriendsState, FriendsStore } from './types';

const storeContext = createContext<FriendsStore>();

export function useFriendsStore() {
  const store = useContext(storeContext);

  if (!store) {
    throw new Error('Please use it inside FriendsStoreProvider component');
  }

  return store;
}

const initialState: FriendsState = {
  statusMap: {},
};

export const FriendsStoreProvider: ParentComponent = (p) => {
  const [friends, setFriends] = createStore(initialState);

  const methods: FriendsMethods = {
    addFriend(personId) {
      setFriends(
        produce(async (draft) => {
          draft.statusMap[personId] = 'requested';
          await sleep(800);
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

  const store: FriendsStore = [friends, methods];

  return <storeContext.Provider value={store} children={p.children} />;
};
