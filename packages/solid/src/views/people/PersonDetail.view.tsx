import { Component } from 'solid-js';
import { useParams } from 'solid-app-router';
import { usePeopleRouteData } from './primitives';
import personDetailStyles from '@friendly-ui/design/person_detail.module.css';

const PersonDetailView: Component = () => {
  const params = useParams();
  const routeData = usePeopleRouteData();

  function person() {
    const fetchedPeople = routeData();
    const foundPerson = fetchedPeople.find((person) => person.id === params.id);

    if (!foundPerson) {
      throw new Error('No person found');
    }

    return foundPerson;
  }

  return (
    <div class={personDetailStyles.wrapper}>
      <div>
        <img src={person().imageUrl} alt="" class={personDetailStyles.avatar} />
      </div>
      <div class={personDetailStyles.bio}>
        <h2 class={personDetailStyles.name}>{person().name}</h2>
        <p>{person().description}</p>
        <button class={personDetailStyles.addBtn} type="button">
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default PersonDetailView;
