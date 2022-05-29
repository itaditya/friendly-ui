import personAvatarStyles from '@friendly-ui/design/person_avatar.module.css';
import { Link, useSearch } from '@tanstack/react-location';
import { useFriendsStore } from '_shared/friendsStore';
// import {
//   AddFriendIcon,
//   PendingRequestIcon,
//   RemoveFriendIcon
// } from '_shared/Icons';
import { Person } from '_shared/types';

export type PersonAvatarProps = {
  person: Person;
  className?: string;
};

const defaultProps = { className: '' } as const;

const PersonAvatar = (op) => {
  const p = {
    ...defaultProps,
    ...op,
  };
  const searchParams = useSearch();
  const { statusMap, addFriend, removeFriend } = useFriendsStore();
  const friendStatus = statusMap[p.person.id];

  function getPersonLink() {
    const urlParams = new URLSearchParams(searchParams);
    const qs = urlParams.toString();

    return `/people/${p.person.id}?${qs}`;
  }

  function handleAddFriend(event: MouseEvent) {
    if (friendStatus === 'requested') {
      event.preventDefault();
      return;
    }

    if (friendStatus === 'accepted') {
      removeFriend(p.person.id);
      return;
    }

    addFriend(p.person.id);
  }

  const commonBtnIconProps = {
    className: personAvatarStyles.addBtnIcon,
  };

  return (
    <div className={personAvatarStyles.avatarWrapper}>
      <Link to={getPersonLink()} className={personAvatarStyles.avatarLink}>
        <img
          src={p.person.imageUrl}
          alt=""
          className={`${personAvatarStyles.avatar} ${p.className}`}
        />
        <span className={personAvatarStyles.avatarName}>{p.person.name}</span>
      </Link>
      <button
        type="button"
        className={personAvatarStyles.addBtn}
        data-status={friendStatus}
        tabIndex={friendStatus === 'requested' ? -1 : undefined}
        aria-disabled={friendStatus === 'requested'}
        onClick={handleAddFriend}
      >
        ab
      </button>
    </div>
  );
};

export default PersonAvatar;
