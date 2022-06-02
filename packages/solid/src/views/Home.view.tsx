import homeStyles from '@friendly-ui/design/home.module.css';
import { Link } from 'solid-app-router';
import { Component } from 'solid-js';
import PageTitle from '_shared/PageTitle';

const Home: Component = () => {
  return (
    <div class={homeStyles.wrapper}>
      <PageTitle>Home</PageTitle>
      <Link class={homeStyles.demoLink} href="/people">
        Solid Demo
      </Link>
      <Link
        class={homeStyles.demoLink}
        href="https://friendly-ui-react.vercel.app/people"
      >
        React Demo
      </Link>
    </div>
  );
};

export default Home;
