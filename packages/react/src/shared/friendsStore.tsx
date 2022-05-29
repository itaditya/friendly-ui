import { ReactNode } from 'react';
import create from 'zustand';
import createContext from 'zustand/context';
import { immer } from 'zustand/middleware/immer';
import { FriendsStore, FriendsState } from './types';

const { Provider, useStore } = createContext<FriendsStore>();

const createStore = () =>
  create<FriendsState>()(
    immer((set) => ({
      statusMap: {},
      async addFriend(personId) {
        set((draft) => {
          draft.statusMap[personId] = 'requested';
        });
        await sleep(800);
        set((draft) => {
          draft.statusMap[personId] = 'accepted';
        });
      },
      removeFriend(personId) {
        set((draft) => {
          delete draft.statusMap[personId];
        });
      },
    })),
  );

export const FriendsStoreProvider = (props: { children: ReactNode }) => {
  return <Provider createStore={createStore} {...props} />;
};

export { useStore as useFriendsStore };

function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
