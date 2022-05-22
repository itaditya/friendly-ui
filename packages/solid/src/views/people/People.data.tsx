import { createMemo, createResource } from 'solid-js';

async function fetchPeople() {
  const res = await fetch('/api/people.json');
  const data = await res.json();
  return data;
}

async function fetchFriends() {
  const res = await fetch('/api/friends.json');
  const data = await res.json();
  return data;
}

function PeopleData() {
  const [people] = createResource(fetchPeople);
  const [friends] = createResource(fetchFriends);

  const data = createMemo(() => {
    return {
      people: people(),
      friends: friends(),
    };
  });

  return data;
}

export default PeopleData;
