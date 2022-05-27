import { mergeProps, ParentComponent, Switch, Match } from 'solid-js';
import { Link, useSearchParams } from 'solid-app-router';
import { useFriendsStore } from '_shared/friendsStore';
import {
  AddFriendIcon,
  PendingRequestIcon,
  RemoveFriendIcon,
} from '_shared/Icons';
import { Person } from '_shared/types';
import personAvatarStyles from '@friendly-ui/design/person_avatar.module.css';

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

  const commonBtnIconProps = {
    class: personAvatarStyles.addBtnIcon,
  };

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
        onClick={handleAddFriend}
      >
        <Switch fallback={<AddFriendIcon {...commonBtnIconProps} />}>
          <Match when={friendStatus() === 'requested'}>
            <PendingRequestIcon {...commonBtnIconProps} />
          </Match>
          <Match when={friendStatus() === 'accepted'}>
            <RemoveFriendIcon {...commonBtnIconProps} />
          </Match>
        </Switch>
      </button>
    </div>
  );
};

export default PersonAvatar;
