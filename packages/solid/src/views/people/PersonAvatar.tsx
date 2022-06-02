import personAvatarStyles from '@friendly-ui/design/person_avatar.module.css';
import { Link, useSearchParams } from 'solid-app-router';
import { mergeProps, ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { useFriendsStore } from '_shared/friendsStore';
import {
  AddFriendIcon,
  PendingRequestIcon,
  RemoveFriendIcon,
} from '_shared/Icons';
import { Person, RequestStatus } from '_shared/types';

function getIcon(status: RequestStatus) {
  if (status === 'requested') {
    return PendingRequestIcon;
  }

  if (status === 'accepted') {
    return RemoveFriendIcon;
  }

  return AddFriendIcon;
}

function getLabel(status: RequestStatus) {
  if (status === 'requested') {
    return 'Pending';
  }

  if (status === 'accepted') {
    return 'Unfriend';
  }

  return 'Add Friend';
}

export type PersonAvatarProps = {
  person: Person;
  class?: string;
};

const defaultProps = { class: '' } as const;

const PersonAvatar: ParentComponent<PersonAvatarProps> = (op) => {
  const p = mergeProps(defaultProps, op);
  const [searchParams] = useSearchParams();
  const [friends, methods] = useFriendsStore();

  function personLink() {
    const urlParams = new URLSearchParams(searchParams);
    const qs = urlParams.toString();

    return `/people/${p.person.id}?${qs}`;
  }

  function friendStatus() {
    return friends.statusMap[p.person.id];
  }

  function handleAddFriend(event: MouseEvent) {
    if (friendStatus() === 'requested') {
      event.preventDefault();
      return;
    }

    if (friendStatus() === 'accepted') {
      methods.removeFriend(p.person.id);
      return;
    }

    methods.addFriend(p.person.id);
  }

  return (
    <div class={personAvatarStyles.avatarWrapper}>
      <Link href={personLink()} class={personAvatarStyles.avatarLink}>
        <img
          src={p.person.imageUrl}
          alt=""
          class={`${personAvatarStyles.avatar} ${p.class}`}
        />
        <span class={personAvatarStyles.avatarName}>{p.person.name}</span>
      </Link>
      <button
        type="button"
        class={personAvatarStyles.addBtn}
        data-status={friendStatus()}
        tabIndex={friendStatus() === 'requested' ? -1 : undefined}
        aria-disabled={friendStatus() === 'requested'}
        aria-label={getLabel(friendStatus())}
        onClick={handleAddFriend}
      >
        <Dynamic
          component={getIcon(friendStatus())}
          class={personAvatarStyles.addBtnIcon}
        />
      </button>
    </div>
  );
};

export default PersonAvatar;
