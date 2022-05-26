import { createResource } from 'solid-js';
import { People } from '_shared/types';

async function fetchPeople() {
  const res = await fetch('/api/people.json');
  const data = await res.json();
  return data;
}

function PeopleData() {
  const [people] = createResource<People>(fetchPeople, {
    initialValue: [],
  });
  return people;
}

export default PeopleData;
