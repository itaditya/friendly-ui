import { lazy, Component } from 'solid-js';
import { RouteDefinition, useRoutes } from 'solid-app-router';
import PeopleData from './views/people/People.data';
import { PeopleStoreProvider } from './shared/peopleStore';

const AppShellView = lazy(() => import('./views/appShell/AppShell.view'));
const PeopleShellView = lazy(() => import('./views/people/People.view'));
const PersonDetailView = lazy(() => import('./views/PersonDetail.view'));
const HomeView = lazy(() => import('./views/Home.view'));

const routes: Array<RouteDefinition> = [
  {
    path: '/',
    component: AppShellView,
    children: [
      {
        path: '/people',
        component: PeopleShellView,
        data: PeopleData,
        children: [
          {
            path: '/:id',
            component: PersonDetailView,
          },
          {
            path: '/',
            element: <h2>Select a person to see their details here</h2>,
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
    <PeopleStoreProvider>
      <Routes />
    </PeopleStoreProvider>
  );
};

export default App;
