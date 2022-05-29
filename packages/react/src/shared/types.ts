import { MakeGenerics } from '@tanstack/react-location';
import { StoreApi } from 'zustand';

export type PersonId = string;

export interface Person {
  id: PersonId;
  name: string;
  description: string;
  imageUrl: string;
}

export type People = Array<Person>;

export type RequestStatus = undefined | 'requested' | 'accepted';

export interface FriendsState {
  statusMap: Record<PersonId, RequestStatus>;
  addFriend: (personId: PersonId) => void;
  removeFriend: (personId: PersonId) => void;
}

export type FriendsStore = StoreApi<FriendsState>;

export type SearchQuery = string;

export interface SearchState {
  query: SearchQuery;
  history: Array<SearchQuery>;
  runSearch: (query: SearchQuery) => void;
  clearSearch: () => void;
}

export type SearchStore = StoreApi<SearchState>;

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    people: People;
  };
  Params: {
    id: PersonId;
  };
  Search: {
    filter: 'all' | 'friends';
  };
}>;
