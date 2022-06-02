import layoutStyles from '@friendly-ui/design/layout.module.css';
import pendingStyles from '@friendly-ui/design/people_pending_fallback.module.css';
import { PeopleLoadingIcon } from '_shared/Icons';
import Search from './Search';

function PeoplePendingFallback() {
  return (
    <div className={layoutStyles.layoutApp}>
      <Search />
      <div className={pendingStyles.wrapper}>
        <div className={pendingStyles.iconWrapper}>
          <PeopleLoadingIcon />
        </div>
        <p className={pendingStyles.text}>Fetching people in your area...</p>
      </div>
    </div>
  );
}

export default PeoplePendingFallback;
