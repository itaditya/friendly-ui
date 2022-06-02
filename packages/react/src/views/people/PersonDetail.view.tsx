import { useAutoAnimate } from '@formkit/auto-animate/react';
import personDetailStyles from '@friendly-ui/design/person_detail.module.css';
import { Navigate, useMatch } from '@tanstack/react-location';
import { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react';
import { useFriendsStore } from '_shared/friendsStore';
import PageTitle from '_shared/PageTitle';
import { LocationGenerics, RequestStatus } from '_shared/types';

interface AddBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: RequestStatus;
}

const AddBtn: FC<AddBtnProps> = ({ status, onClick }) => {
  function renderContent() {
    if (status === 'requested') {
      return 'Pending';
    }

    if (status === 'accepted') {
      return 'Unfriend';
    }

    return 'Add Friend';
  }

  return (
    <button
      className={personDetailStyles.addBtn}
      type="button"
      data-status={status}
      tabIndex={status === 'requested' ? -1 : undefined}
      aria-disabled={status === 'requested'}
      onClick={onClick}
    >
      {renderContent()}
    </button>
  );
};

function PersonDetailView() {
  const {
    params: { id },
    data: { people = [] },
  } = useMatch<LocationGenerics>();
  const { statusMap, addFriend, removeFriend } = useFriendsStore();
  const [wrapperRef] = useAutoAnimate<HTMLDivElement>();
  const [bioRef] = useAutoAnimate<HTMLDivElement>();

  const friendStatus = statusMap[id];

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (friendStatus === 'requested') {
      event.preventDefault();
    }

    if (friendStatus === 'accepted') {
      removeFriend(id);
      return;
    }

    addFriend(id);
  };

  const person = people.find((person) => person.id === id);

  if (!person) {
    return <Navigate to="/people" />;
  }

  const { name, description, imageUrl } = person;

  return (
    <div className={personDetailStyles.wrapper} ref={wrapperRef} key={id}>
      <PageTitle>{name}</PageTitle>
      <div>
        <img src={imageUrl} alt="" className={personDetailStyles.avatar} />
      </div>
      <div className={personDetailStyles.bio} ref={bioRef}>
        <h2 className={personDetailStyles.name}>{name}</h2>
        <p className={personDetailStyles.description}>{description}</p>
        <AddBtn status={friendStatus} onClick={handleClick} />
      </div>
    </div>
  );
}

export default PersonDetailView;
