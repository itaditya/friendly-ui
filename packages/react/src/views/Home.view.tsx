import homeStyles from '@friendly-ui/design/home.module.css';
import { Link, useRouter } from '@tanstack/react-location';
import PageTitle from '_shared/PageTitle';
import { LocationGenerics } from '_shared/types';

function HomeView() {
  const router = useRouter<LocationGenerics>();

  return (
    <div className={homeStyles.wrapper}>
      <PageTitle>Home</PageTitle>
      <Link className={homeStyles.demoLink} to="/people">
        {router.pending ? 'Loading...' : 'React Demo'}
      </Link>
      <a
        className={homeStyles.demoLink}
        href="https://friendly-ui-solid.vercel.app/people"
      >
        Solid Demo
      </a>
    </div>
  );
}

export default HomeView;
