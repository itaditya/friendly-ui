import { ReactNode } from 'react';
import create from 'zustand';
import createContext from 'zustand/context';
import { immer } from 'zustand/middleware/immer';
import { SearchStore, SearchState } from './types';

const { Provider, useStore } = createContext<SearchStore>();

const createStore = () =>
  create<SearchState>()(
    immer((set) => ({
      query: '',
      history: [],
      runSearch(query) {
        set((draft) => {
          const lastQuery = draft.query;

          draft.query = query;

          if (lastQuery) {
            draft.history.splice(0, 0, lastQuery);
          }
        });
      },
      clearSearch() {
        this.runSearch('');
      },
    })),
  );

export const SearchStoreProvider = (props: { children: ReactNode }) => {
  return <Provider createStore={createStore} {...props} />;
};

export { useStore as useSearchStore };
