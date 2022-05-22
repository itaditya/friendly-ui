import { Component, createEffect } from 'solid-js';
import { useParams } from 'solid-app-router';
import { usePeopleStore } from '../shared/peopleStore';

const PersonDetailView: Component = (p) => {
  const params = useParams();
  const [state] = usePeopleStore();

  function person() {
    return state.peopleDetailsMap[params.id];
  }

  return <h2>Details of {person().name} </h2>;
};

export default PersonDetailView;
