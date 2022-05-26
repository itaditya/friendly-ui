import { lazy, Component } from 'solid-js';
import { RouteDefinition, useRoutes } from 'solid-app-router';
import PeopleData from './views/people/People.data';
import { FriendsStoreProvider } from './shared/friendsStore';

const RootShell = lazy(() => import('./views/root/Root.shell'));
const PeopleShell = lazy(() => import('./views/people/People.shell'));
const PeopleView = lazy(() => import('./views/people/People.view'));
const PersonDetailView = lazy(() => import('./views/people/PersonDetail.view'));
const HomeView = lazy(() => import('./views/Home.view'));

const routes: Array<RouteDefinition> = [
  {
    path: '/',
    component: RootShell,
    children: [
      {
        path: '/people',
        component: PeopleShell,
        data: PeopleData,
        children: [
          {
            path: '/:id',
            component: PersonDetailView,
          },
          {
            path: '/',
            component: PeopleView,
          },
        ],
      },
      {
        path: '/',
        component: HomeView,
      },
    ],
  },
];

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <FriendsStoreProvider>
      <Routes />
    </FriendsStoreProvider>
  );
};

export default App;
