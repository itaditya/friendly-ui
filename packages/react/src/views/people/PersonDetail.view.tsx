import personDetailStyles from '@friendly-ui/design/person_detail.module.css';
import { useMatch } from '@tanstack/react-location';

function PersonDetailView() {
  const {
    params: { id },
    data: { people },
  } = useMatch();

  const person = people.find((person) => person.id === id);
  const { name, description, imageUrl } = person;

  return (
    <div className={personDetailStyles.wrapper}>
      <div>
        <img src={imageUrl} alt="" className={personDetailStyles.avatar} />
      </div>
      <div className={personDetailStyles.bio}>
        <h2 className={personDetailStyles.name}>{name}</h2>
        <p className={personDetailStyles.description}>{description}</p>
        {/* <AddBtn
          personId={id}
          status={friendStatus(id)}
          onClick={[handleAddFriend, id]}
        /> */}
      </div>
    </div>
  );
}

export default PersonDetailView;
