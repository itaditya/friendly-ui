import peopleStyles from '@friendly-ui/design/people.module.css';
import PageTitle from '_shared/PageTitle';

function PeopleView() {
  return (
    <>
      <PageTitle>Connect</PageTitle>
      <div className={peopleStyles.detailMsg}>
        Select a person to see their details here
      </div>
    </>
  );
}

export default PeopleView;
