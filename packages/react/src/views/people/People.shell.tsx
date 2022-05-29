import { useAutoAnimate } from '@formkit/auto-animate/react';
import peopleStyles from '@friendly-ui/design/people.module.css';
import { Link, Outlet, useSearch } from '@tanstack/react-location';
import clsx from 'clsx';
import { useHeaderLink, usePeopleList } from './hooks';
import PersonAvatar from './PersonAvatar';

function PeopleShell() {
  const searchParams = useSearch();
  const peopleList = usePeopleList();
  const getHeaderLink = useHeaderLink();
  const [avatarGridRef] = useAutoAnimate<HTMLElement>();
  const [detailCardRef] = useAutoAnimate<HTMLElement>({
    duration: 100,
  });

  return (
    <>
      <section className={`${peopleStyles.listCard} ${peopleStyles.card}`}>
        <header className={peopleStyles.header}>
          <h4 className={peopleStyles.heading}>Connect</h4>
          <Link
            to={getHeaderLink()}
            className={clsx(peopleStyles.headerAction, {
              [peopleStyles.activeFilter]: searchParams.filter === 'friends',
            })}
          >
            Just Friends
          </Link>
        </header>
        <main className={peopleStyles.avatarGrid} ref={avatarGridRef}>
          {peopleList.map((person) => (
            <PersonAvatar key={person.id} person={person} />
          ))}
        </main>
      </section>
      <section
        className={`${peopleStyles.detailCard} ${peopleStyles.card}`}
        ref={detailCardRef}
      >
        <Outlet />
      </section>
    </>
  );
}

export default PeopleShell;
