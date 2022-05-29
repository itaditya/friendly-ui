import { ReactLocation, Router, Route, Outlet } from '@tanstack/react-location';

const rootShellElement = () =>
  import('./views/root/Root.shell').then((mod) => <mod.default />);
const peopleShellElement = () =>
  import('./views/people/People.shell').then((mod) => <mod.default />);
const peopleViewElement = () =>
  import('./views/people/People.view').then((mod) => <mod.default />);
const personDetailViewElement = () =>
  import('./views/people/PersonDetail.view').then((mod) => <mod.default />);
const homeViewElement = () =>
  import('./views/Home.view').then((mod) => <mod.default />);

const reactLocation = new ReactLocation();

const routes: Array<Route> = [
  {
    path: '',
    element: rootShellElement,
    children: [
      {
        path: '/',
        element: homeViewElement,
      },
      {
        path: 'people',
        element: peopleShellElement,
        children: [
          {
            path: '/',
            element: peopleViewElement,
          },
          {
            path: ':id',
            element: personDetailViewElement,
          },
        ],
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
