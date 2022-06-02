import pendingStyles from '@friendly-ui/design/people_pending_fallback.module.css';
import { Component } from 'solid-js';
import { PeopleLoadingIcon } from '_shared/Icons';

const PeoplePendingFallback: Component = () => {
  return (
    <div class={pendingStyles.wrapper}>
      <div class={pendingStyles.iconWrapper}>
        <PeopleLoadingIcon />
      </div>
      <p class={pendingStyles.text}>Fetching people in your area...</p>
    </div>
  );
}

export default PeoplePendingFallback;
