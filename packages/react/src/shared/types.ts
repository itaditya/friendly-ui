export type PersonId = string;

export interface Person {
  id: PersonId;
  name: string;
  description: string;
  imageUrl: string;
}

export type People = Array<Person>;
