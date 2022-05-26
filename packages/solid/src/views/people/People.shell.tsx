import { Component, For, Show } from 'solid-js';
import { Link, Outlet, useSearchParams } from 'solid-app-router';
import { autoAnimate } from 'solid-auto-animate';
import Card from './Card';
import PersonAvatar from './PersonAvatar';
import { createHeaderHref, createPeopleList } from './primitives';
import layoutStyles from '@friendly-ui/design/layout.module.css';
import peopleStyles from '@friendly-ui/design/people.module.css';

const PeopleView: Component = () => {
  const [searchParams] = useSearchParams();
  const peopleList = createPeopleList();
  const headerHref = createHeaderHref();
  autoAnimate; // to prevent TS from removing the directive

  return (
    <>
      <Card class={layoutStyles.fillChild}>
        <header class={peopleStyles.header}>
          <h4 class={peopleStyles.heading}>Connect</h4>
          <Link href={headerHref()} class={peopleStyles.headerAction}>
            <Show
              when={searchParams.filter === 'friends'}
              fallback={'Show Friends'}
            >
              Show all people
            </Show>
          </Link>
        </header>
        <main class={peopleStyles.avatarGrid} use:autoAnimate>
          <For each={peopleList()}>
            {(person) => <PersonAvatar person={person} />}
          </For>
        </main>
      </Card>
      <Card variant="split">
        <Outlet />
      </Card>
    </>
  );
};

export default PeopleView;
