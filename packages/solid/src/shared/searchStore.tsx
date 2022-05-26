import { createContext, ParentComponent, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { SearchMethods, SearchState, SearchStore } from './types';

const storeContext = createContext<SearchStore>();

export function useSearchStore() {
  const store = useContext(storeContext);

  if (!store) {
    throw new Error('Please use it inside SearchStoreProvider component');
  }

  return store;
}

const initialState: SearchState = {
  query: '',
  history: [],
};

export const SearchStoreProvider: ParentComponent = (p) => {
  const [search, setSearch] = createStore(initialState);

  const methods: SearchMethods = {
    runSearch(query) {
      setSearch(
        produce(async (draft) => {
          const lastQuery = draft.query;
          draft.history.push(lastQuery);
          draft.query = query;
        }),
      );
    },
    clearSearch() {
      methods.runSearch('');
    },
  };

  const store: SearchStore = [search, methods];

  return <storeContext.Provider value={store} children={p.children} />;
};
