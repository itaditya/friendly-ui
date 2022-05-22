import { Component } from 'solid-js';
import { Outlet } from 'solid-app-router';
import Card from './Card';
import PersonAvatar from './PersonAvatar';
import layoutStyles from '@friendly-ui/design/layout.module.css';

const PeopleView: Component = (p) => {
  return (
    <>
      <Card class={layoutStyles.fillChild}>
        <PersonAvatar
          personId="1"
          src="https://devadi.netlify.app/dp_twitter.png"
        />
        <PersonAvatar
          personId="2"
          src="https://unavatar.io/kikobeats"
        />
        <PersonAvatar
          personId="3"
          src="https://unavatar.io/github/mdo"
        />
        <PersonAvatar
          personId="4"
          src="https://devadi.netlify.app/dp_twitter.png"
        />
        <PersonAvatar
          personId="5"
          src="https://devadi.netlify.app/dp_twitter.png"
        />
      </Card>
      <Card variant="split">
        <Outlet />
      </Card>
    </>
  );
};

export default PeopleView;
