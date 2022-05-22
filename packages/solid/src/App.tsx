import { Component } from 'solid-js';
import { RouteDefinition, useRoutes } from 'solid-app-router';
import AppShellView from './views/appShell/AppShell.view';
import PeopleShellView from './views/people/People.view';
import PersonDetailView from './views/PersonDetail.view';

const routes: Array<RouteDefinition> = [
  {
    path: '/',
    component: AppShellView,
    children: [
      {
        path: '/people',
        component: PeopleShellView,
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
