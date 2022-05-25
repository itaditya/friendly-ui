import { Component } from 'solid-js';
import { useParams } from 'solid-app-router';
import { usePeopleStore } from '../../shared/peopleStore';
import personDetailStyles from '@friendly-ui/design/person_detail.module.css';

const PersonDetailView: Component = () => {
  const params = useParams();
  const [state] = usePeopleStore();

  function person() {
    return state.peopleDetailsMap[params.id];
  }

  return (
    <div class={personDetailStyles.wrapper}>
      <div>
        <img src={person().imageUrl} alt="" class={personDetailStyles.avatar} />
      </div>
      <div class={personDetailStyles.bio}>
        <h2 class={personDetailStyles.name}>{person().name}</h2>
        <p>Hello There</p>
        <button class={personDetailStyles.addBtn} type="button">
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default PersonDetailView;
