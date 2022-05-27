import { Component } from 'solid-js';
import peopleStyles from '@friendly-ui/design/people.module.css';

const PeopleView: Component = () => {
  return (
    <div class={peopleStyles.detailMsg}>
      Select a person to see their details here
    </div>
  );
};

export default PeopleView;
