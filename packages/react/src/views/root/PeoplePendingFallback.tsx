import pendingStyles from '@friendly-ui/design/people_pending_fallback.module.css';
import { PeopleLoadingIcon } from '_shared/Icons';

function PeoplePendingFallback() {
  return (
    <div className={pendingStyles.wrapper}>
      <div className={pendingStyles.iconWrapper}>
        <PeopleLoadingIcon />
      </div>
      <p className={pendingStyles.text}>Fetching people in your area...</p>
    </div>
  );
}

export default PeoplePendingFallback;
