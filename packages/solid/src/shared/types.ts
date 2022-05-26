import { Accessor } from 'solid-js';

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

export interface FriendsMethods {
  addFriend: (personId: PersonId) => void;
  removeFriend: (personId: PersonId) => void;
}

export type FriendsStore = [FriendsState, FriendsMethods];
