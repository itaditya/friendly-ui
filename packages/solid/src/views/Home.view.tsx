import homeStyles from '@friendly-ui/design/home.module.css';
import { Link, useIsRouting } from 'solid-app-router';
import { Component, Show } from 'solid-js';
import PageTitle from '_shared/PageTitle';

const Home: Component = () => {
  const isRouting = useIsRouting();

  return (
    <div class={homeStyles.wrapper}>
      <PageTitle>Home</PageTitle>
      <Link class={homeStyles.demoLink} href="/people">
        <Show when={isRouting()} fallback="Solid Demo">
          Loading...
        </Show>
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
