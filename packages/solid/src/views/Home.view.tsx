import { Component } from 'solid-js';
import { Link } from 'solid-app-router';
import layoutStyles from '@friendly-ui/design/layout.module.css';
import homeStyles from '@friendly-ui/design/home.module.css';

const Home: Component = () => {
  return (
    <div class={`${layoutStyles.fillChild} ${homeStyles.wrapper}`}>
      <Link class={homeStyles.demoLink} href="/people">Solid Demo</Link>
      <Link class={homeStyles.demoLink} href="https://friendly-ui-react.vercel.app/people">
        React Demo
      </Link>
    </div>
  );
};

export default Home;
