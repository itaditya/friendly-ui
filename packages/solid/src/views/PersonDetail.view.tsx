import { Component } from 'solid-js';
import { useParams } from 'solid-app-router';

const PersonDetailView: Component = (p) => {
  const params = useParams();
  return <h2>Details of Person {params.id} </h2>;
};

export default PersonDetailView;
