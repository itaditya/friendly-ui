import { ReactLocation, Route, Router } from '@tanstack/react-location';
import { HeadProvider } from 'react-head';
import { FriendsStoreProvider } from '_shared/friendsStore';
import { SearchStoreProvider } from '_shared/searchStore';
import peopleLoader from './views/people/People.loader';
import PeoplePendingFallback from './views/root/PeoplePendingFallback';

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
    pendingElement: async () => <PeoplePendingFallback />,
    pendingMs: 0,
    children: [
      {
        path: '/',
        element: homeViewElement,
      },
      {
        path: 'people',
        element: peopleShellElement,
        loader: peopleLoader,
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
    // @ts-expect-error HeadProvider is missing children prop type
    <HeadProvider>
      <FriendsStoreProvider>
        <SearchStoreProvider>
          <Router location={reactLocation} routes={routes} />
        </SearchStoreProvider>
      </FriendsStoreProvider>
    </HeadProvider>
  );
}

export default App;
