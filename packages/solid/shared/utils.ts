export function getNormalizedPeople(people = []) {
  const peopleIdList = people.map(person => person.id);
  const peopleDetailsMap = {};

  for (const person of people) {
    peopleDetailsMap[person.id] = person;
  }

  return {
    peopleIdList,
    peopleDetailsMap,
  };
}
