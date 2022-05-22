import { lazy, Component } from 'solid-js';
import { RouteDefinition, useRoutes } from 'solid-app-router';
import PeopleData from './views/people/People.data';

const AppShellView = lazy(() => import('./views/appShell/AppShell.view'));
const PeopleShellView = lazy(() => import('./views/people/People.view'));
const PersonDetailView = lazy(() => import('./views/PersonDetail.view'));

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
        element: <h2>Home</h2>,
      },
    ],
  },
];

const App: Component = () => {
  const Routes = useRoutes(routes);

  return <Routes />;
};

export default App;
