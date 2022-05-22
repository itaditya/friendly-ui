import { Component, For, Show, createRenderEffect } from 'solid-js';
import {
  Link,
  Outlet,
  useMatch,
  useRouteData,
  useSearchParams,
} from 'solid-app-router';
import Card from './Card';
import PersonAvatar from './PersonAvatar';
import { usePeopleStore } from '../../../shared/peopleStore';
import { createPeopleList } from './createPeopleList';
import layoutStyles from '@friendly-ui/design/layout.module.css';
import peopleStyles from '@friendly-ui/design/people.module.css';

const PeopleView: Component = () => {
  const [searchParams] = useSearchParams();
  const match = useMatch(() => '/people/:id');
  const routeData = useRouteData();
  const [_state, methods] = usePeopleStore();
  const peopleList = createPeopleList();

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

  createRenderEffect(() => {
    const data = routeData();
    methods.setData(data);
  });

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
          <For each={peopleList()}>
            {(personId) => <PersonAvatar personId={personId} />}
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
