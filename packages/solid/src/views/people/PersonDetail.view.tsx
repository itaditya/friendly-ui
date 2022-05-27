import { Component } from 'solid-js';
import { useParams } from 'solid-app-router';
import { autoAnimate } from 'solid-auto-animate';
import { usePeopleRouteData } from './primitives';
import personDetailStyles from '@friendly-ui/design/person_detail.module.css';

const PersonDetailView: Component = () => {
  const params = useParams();
  const routeData = usePeopleRouteData();
  autoAnimate; // to prevent TS from removing the directive

  function person() {
    const fetchedPeople = routeData();
    const foundPerson = fetchedPeople.find((person) => person.id === params.id);

    if (!foundPerson) {
      throw new Error('No person found');
    }

    return foundPerson;
  }

  function renderPerson() {
    const { name, description, imageUrl } = person();

    return (
      <>
        <div>
          <img src={imageUrl} alt="" class={personDetailStyles.avatar} />
        </div>
        <div class={personDetailStyles.bio}>
          <h2 class={personDetailStyles.name}>{name}</h2>
          <p class={personDetailStyles.description}>{description}</p>
          <button class={personDetailStyles.addBtn} type="button">
            Add Friend
          </button>
        </div>
      </>
    );
  }

  return (
    <div
      class={personDetailStyles.wrapper}
      use:autoAnimate={{
        duration: 100,
      }}
    >
      {renderPerson()}
    </div>
  );
};

export default PersonDetailView;
