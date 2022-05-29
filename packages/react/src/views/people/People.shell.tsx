import peopleStyles from '@friendly-ui/design/people.module.css';
import { Outlet } from '@tanstack/react-location';
import PersonAvatar from './PersonAvatar';
import { usePeopleList } from './hooks';

function PeopleShell() {
  const peopleList = usePeopleList();

  return (
    <>
      <section className={`${peopleStyles.listCard} ${peopleStyles.card}`}>
        <header className={peopleStyles.header}>
          <h4 className={peopleStyles.heading}>Connect</h4>
          {/* <Link
            href={headerHref()}
            className={peopleStyles.headerAction}
            classList={{
              [peopleStyles.activeFilter]: searchParams.filter === 'friends',
            }}
          >
            Just Friends
          </Link> */}
        </header>
        <main className={peopleStyles.avatarGrid}>
          {peopleList.map((person) => (
            <PersonAvatar key={person.id} person={person} />
          ))}
        </main>
      </section>
      <section className={`${peopleStyles.detailCard} ${peopleStyles.card}`}>
        <Outlet />
      </section>
    </>
  );
}

export default PeopleShell;
