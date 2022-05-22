import { mergeProps, ParentComponent } from 'solid-js';
import { Link, useSearchParams } from 'solid-app-router';
import { usePeopleStore } from '../../shared/peopleStore';
import { AddFriendIcon } from '../../shared/Icons';
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

  function handleAddFriend() {
    methods.addFriend(p.personId);
  }

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
      <button type="button" class={personAvatarStyles.addBtn} onClick={handleAddFriend}>
        <AddFriendIcon class={personAvatarStyles.addBtnIcon} />
      </button>
    </div>
  );
};

export default PersonAvatar;
