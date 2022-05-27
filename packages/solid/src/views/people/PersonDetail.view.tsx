import personDetailStyles from '@friendly-ui/design/person_detail.module.css';
import { Navigate, useParams } from 'solid-app-router';
import { autoAnimate } from 'solid-auto-animate';
import { Component, Match, Switch } from 'solid-js';
import { useFriendsStore } from '_shared/friendsStore';
import { PersonId, RequestStatus } from '_shared/types';
import { usePeopleRouteData } from './primitives';

interface AddFriendHandlerData {
  id: PersonId;
  status: RequestStatus;
}

const PersonDetailView: Component = () => {
  const params = useParams();
  const routeData = usePeopleRouteData();
  const [friends, methods] = useFriendsStore();
  autoAnimate; // to prevent TS from removing the directive

  function friendStatus(personId: PersonId) {
    return friends.statusMap[personId];
  }

  function handleAddFriend(data: AddFriendHandlerData, event: MouseEvent) {
    const { id, status } = data;
    if (status === 'requested') {
      event.preventDefault();
      return;
    }

    if (status === 'accepted') {
      methods.removeFriend(id);
      return;
    }

    methods.addFriend(id);
  }

  function renderAddBtn(id: PersonId) {
    const status = friendStatus(id);

    return (
      <button
        class={personDetailStyles.addBtn}
        type="button"
        onClick={[handleAddFriend, { id, status }]}
      >
        <Switch fallback="Add Friend">
          <Match when={friendStatus(id) === 'requested'}>Pending</Match>
          <Match when={friendStatus(id) === 'accepted'}>Remove Friend</Match>
        </Switch>
      </button>
    );
  }

  function renderPerson() {
    const fetchedPeople = routeData();

    if (fetchedPeople.length === 0) {
      return null;
    }

    const person = fetchedPeople.find((person) => person.id === params.id);

    if (!person) {
      return <Navigate href="/people" />;
    }

    const { id, name, description, imageUrl } = person;

    return (
      <>
        <div>
          <img src={imageUrl} alt="" class={personDetailStyles.avatar} />
        </div>
        <div class={personDetailStyles.bio} use:autoAnimate>
          <h2 class={personDetailStyles.name}>{name}</h2>
          <p class={personDetailStyles.description}>{description}</p>
          {renderAddBtn(id)}
        </div>
      </>
    );
  }

  return (
    <div
      class={personDetailStyles.wrapper}
      use:autoAnimate={{
        duration: 200,
      }}
    >
      {renderPerson()}
    </div>
  );
};

export default PersonDetailView;
