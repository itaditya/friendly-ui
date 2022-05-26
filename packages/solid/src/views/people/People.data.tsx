import { createResource } from 'solid-js';

async function fetchPeople() {
  const res = await fetch('/api/people.json');
  const data = await res.json();
  return data;
}

function PeopleData() {
  const [people] = createResource(fetchPeople);
  return people;
}

export default PeopleData;
