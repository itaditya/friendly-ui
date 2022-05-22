export function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

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
