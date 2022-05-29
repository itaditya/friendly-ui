import personDetailStyles from '@friendly-ui/design/person_detail.module.css';
import { useMatch } from '@tanstack/react-location';
import { useFriendsStore } from '_shared/friendsStore';

const AddBtn = ({ status, onClick }) => {
  return (
    <button
      className={personDetailStyles.addBtn}
      type="button"
      data-status={status}
      tabIndex={status === 'requested' ? -1 : undefined}
      aria-disabled={status === 'requested'}
      onClick={onClick}
    >
      Add Friend
    </button>
  );
};

function PersonDetailView() {
  const {
    params: { id },
    data: { people },
  } = useMatch();
  const { statusMap, addFriend, removeFriend } = useFriendsStore();

  const friendStatus = statusMap[id];
  const person = people.find((person) => person.id === id);
  const { name, description, imageUrl } = person;

  function handleClick(event) {
    if (friendStatus === 'requested') {
      event.preventDefault();
    }

    if (friendStatus === 'accepted') {
      removeFriend(id);
      return;
    }

    addFriend(id);
  }

  return (
    <div className={personDetailStyles.wrapper}>
      <div>
        <img src={imageUrl} alt="" className={personDetailStyles.avatar} />
      </div>
      <div className={personDetailStyles.bio}>
        <h2 className={personDetailStyles.name}>{name}</h2>
        <p className={personDetailStyles.description}>{description}</p>
        <AddBtn
          personId={id}
          status={friendStatus}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default PersonDetailView;
