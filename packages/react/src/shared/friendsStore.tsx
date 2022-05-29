import create from 'zustand';
import createContext from 'zustand/context';
import { immer } from 'zustand/middleware/immer';

const { Provider, useStore } = createContext();

const createStore = () =>
  create(
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

export const FriendsStoreProvider = ({ children }) => {
  return <Provider createStore={createStore} children={children} />;
};

export { useStore as useFriendsStore };

function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
