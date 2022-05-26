import { Accessor } from 'solid-js';
import { Store } from 'solid-js/store';

export type PersonId = string;

export interface Person {
  id: PersonId;
  name: string;
  description: string;
  imageUrl: string;
}

export type People = Array<Person>;

export type PeopleAccessor = Accessor<People>;

export type RequestStatus = undefined | 'requested' | 'accepted';

export interface FriendsState {
  statusMap: Record<PersonId, RequestStatus>;
}

export type FriendsStateStore = Store<FriendsState>;

export interface FriendsMethods {
  addFriend: (personId: PersonId) => void;
  removeFriend: (personId: PersonId) => void;
}

export type FriendsStore = [FriendsStateStore, FriendsMethods];

export type SearchQuery = string;

export interface SearchState {
  query: SearchQuery;
  history: Array<SearchQuery>;
}

export type SearchStateStore = Store<SearchState>;

export interface SearchMethods {
  runSearch: (query: SearchQuery) => void;
  clearSearch: () => void;
}

export type SearchStore = [SearchStateStore, SearchMethods];
