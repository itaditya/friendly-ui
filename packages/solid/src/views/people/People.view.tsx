import { Component } from 'solid-js';
import peopleStyles from '@friendly-ui/design/people.module.css';

const PeopleView: Component = () => {
  return (
    <div class={peopleStyles.selectPersonWrapper}>
      <h2>Select a person to see their details here</h2>
    </div>
  );
};

export default PeopleView;
