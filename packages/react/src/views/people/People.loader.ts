async function fetchPeople() {
  const res = await fetch('/api/people.json');
  const data = await res.json();
  return data;
}

async function peopleLoader() {
  return {
    people: await fetchPeople(),
  };
}

export default peopleLoader;
