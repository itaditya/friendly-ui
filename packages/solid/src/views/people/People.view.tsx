import peopleStyles from '@friendly-ui/design/people.module.css';
import { Component } from 'solid-js';
import PageTitle from '_shared/PageTitle';

const PeopleView: Component = () => {
  return (
    <>
      <PageTitle>Connect</PageTitle>
      <div class={peopleStyles.detailMsg}>
        Select a person to see their details here
      </div>
    </>
  );
};

export default PeopleView;
