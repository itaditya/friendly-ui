import { ReactLocation, Router, Route, Outlet } from '@tanstack/react-location';

import RootShell from './views/root/Root.shell';
import PeopleShell from './views/people/People.shell';
import PeopleView from './views/people/People.view';
import PersonDetailView from './views/people/PersonDetail.view';
import HomeView from './views/Home.view';

// const RootShell = lazy(() => import('./views/root/Root.shell'));
// const PeopleShell = lazy(() => import('./views/people/People.shell'));
// const PeopleView = lazy(() => import('./views/people/People.view'));
// const PersonDetailView = lazy(() => import('./views/people/PersonDetail.view'));
// const HomeView = lazy(() => import('./views/Home.view'));

const reactLocation = new ReactLocation();

const routes: Array<Route> = [
  {
    path: '',
    element: <RootShell />,
    children: [
      {
        path: 'people',
        element: <PeopleShell />,
        children: [
          {
            path: ':id',
            element: <PersonDetailView />,
          },
          {
            path: '/*all',
            element: <PeopleView />,
          },
        ],
      },
      {
        path: '/',
        element: <HomeView />,
      },
    ],
  },
];

function App() {
  return (
    <Router location={reactLocation} routes={routes}>
      <Outlet />
    </Router>
  );
}

export default App;
