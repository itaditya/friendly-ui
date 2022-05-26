import { Component } from 'solid-js';
import { useParams, useRouteData } from 'solid-app-router';
import personDetailStyles from '@friendly-ui/design/person_detail.module.css';

const PersonDetailView: Component = () => {
  const params = useParams();
  const routeData = useRouteData();

  function person() {
    const fetchedPeople = routeData();
    return fetchedPeople.find(person => person.id === params.id);
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
