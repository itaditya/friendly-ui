import { Component } from 'solid-js';
import { Navigate, useParams } from 'solid-app-router';
import { autoAnimate } from 'solid-auto-animate';
import { usePeopleRouteData } from './primitives';
import personDetailStyles from '@friendly-ui/design/person_detail.module.css';

const PersonDetailView: Component = () => {
  const params = useParams();
  const routeData = usePeopleRouteData();
  autoAnimate; // to prevent TS from removing the directive

  function renderPerson() {
    const fetchedPeople = routeData();

    if (fetchedPeople.length === 0) {
      return null;
    }

    const person = fetchedPeople.find((person) => person.id === params.id);

    if (!person) {
      return <Navigate href="/people" />;
    }

    const { name, description, imageUrl } = person;

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
        duration: 200,
      }}
    >
      {renderPerson()}
    </div>
  );
};

export default PersonDetailView;
