import peopleStyles from '@friendly-ui/design/people.module.css';
import { Outlet } from '@tanstack/react-location';

function PeopleShell() {
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
          {/* <For each={peopleList()}>
            {(person) => <PersonAvatar person={person} />}
          </For> */}
        </main>
      </section>
      <section className={`${peopleStyles.detailCard} ${peopleStyles.card}`}>
        <Outlet />
      </section>
    </>
  );
}

export default PeopleShell;
