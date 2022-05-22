import { mergeProps, ParentComponent, Switch, Match } from 'solid-js';
import { Link, useSearchParams } from 'solid-app-router';
import { usePeopleStore } from '../../shared/peopleStore';
import {
  AddFriendIcon,
  PendingRequestIcon,
  RemoveFriendIcon,
} from '../../shared/Icons';
import personAvatarStyles from '@friendly-ui/design/person_avatar.module.css';

export type PersonAvatarProps = {
  personId: string;
  class?: string;
};

const defaultProps = { class: '' } as const;

const PersonAvatar: ParentComponent<PersonAvatarProps> = (ip) => {
  const p = mergeProps(defaultProps, ip);
  const [searchParams] = useSearchParams();
  const [state, methods] = usePeopleStore();

  function person() {
    return state.peopleDetailsMap[p.personId];
  }

  function personLink() {
    const urlParams = new URLSearchParams(searchParams);
    const qs = urlParams.toString();

    return `/people/${p.personId}?${qs}`;
  }

  function friendStatus() {
    return state.friendsStatusMap[p.personId];
  }

  function handleAddFriend(event) {
    if (friendStatus() === 'requested') {
      event.preventDefault();
      return;
    }

    if (friendStatus() === 'accepted') {
      methods.removeFriend(p.personId);
      return;
    }

    methods.addFriend(p.personId);
  }

  const commonBtnIconProps = {
    class: personAvatarStyles.addBtnIcon,
  };

  return (
    <div class={personAvatarStyles.avatarWrapper}>
      <Link href={personLink()} class={personAvatarStyles.avatarLink}>
        <img
          src={person().imageUrl}
          alt=""
          class={`${personAvatarStyles.avatar} ${p.class}`}
        />
        <span class={personAvatarStyles.avatarName}>{person().name}</span>
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
