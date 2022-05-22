import { Component, Show } from 'solid-js';
import {
  Link,
  Outlet,
  useMatch,
  useParams,
  useSearchParams,
} from 'solid-app-router';
import Card from './Card';
import PersonAvatar from './PersonAvatar';
import layoutStyles from '@friendly-ui/design/layout.module.css';
import peopleStyles from '@friendly-ui/design/people.module.css';

const PeopleView: Component = () => {
  const [searchParams] = useSearchParams();
  const match = useMatch(() => '/people/:id');

  function getHeaderActionHref() {
    const personId = match()?.params.id;

    let url = '/people';

    if (personId) {
      url += `/${personId}`;
    }

    url += '?filter=';

    if (searchParams.filter === 'friends') {
      url += 'all';
    } else {
      url += 'friends';
    }

    return url;
  }

  return (
    <>
      <Card class={layoutStyles.fillChild}>
        <header class={peopleStyles.header}>
          <h4 class={peopleStyles.heading}>Find People</h4>
          <Link href={getHeaderActionHref()} class={peopleStyles.headerAction}>
            <Show
              when={searchParams.filter === 'friends'}
              fallback={'Show Friends'}
            >
              Show all people
            </Show>
          </Link>
        </header>
        <main class={peopleStyles.avatarGrid}>
          <PersonAvatar
            personId="1"
            src="https://devadi.netlify.app/dp_twitter.png"
          />
          <PersonAvatar personId="2" src="https://unavatar.io/kikobeats" />
          <PersonAvatar personId="3" src="https://unavatar.io/github/mdo" />
          <PersonAvatar
            personId="4"
            src="https://devadi.netlify.app/dp_twitter.png"
          />
          <PersonAvatar
            personId="5"
            src="https://devadi.netlify.app/dp_twitter.png"
          />
        </main>
      </Card>
      <Card variant="split">
        <Outlet />
      </Card>
    </>
  );
};

export default PeopleView;
