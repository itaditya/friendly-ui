import homeStyles from '@friendly-ui/design/home.module.css';
import { Link } from '@tanstack/react-location';

function HomeView() {
  return (
    <div className={homeStyles.wrapper}>
      <Link className={homeStyles.demoLink} to="/people">
        React Demo
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
