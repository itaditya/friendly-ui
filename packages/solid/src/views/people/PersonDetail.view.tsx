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

  function renderAvatar() {
    const { imageUrl } = person();

    return (
      <img src={person().imageUrl} alt="" class={personDetailStyles.avatar} />
    );
  }

  function renderBio() {
    const { name, description } = person();

    return (
      <>
        <h2 class={personDetailStyles.name}>{name}</h2>
        <p>{description}</p>
        <button class={personDetailStyles.addBtn} type="button">
          Add Friend
        </button>
      </>
    );
  }

  return (
    <div class={personDetailStyles.wrapper}>
      <div use:autoAnimate>{renderAvatar()}</div>
      <div class={personDetailStyles.bio} use:autoAnimate>
        {renderBio()}
      </div>
    </div>
  );
};

export default PersonDetailView;
