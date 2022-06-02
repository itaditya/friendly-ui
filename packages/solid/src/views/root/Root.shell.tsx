import layoutStyles from '@friendly-ui/design/layout.module.css';
import { Outlet, useIsRouting } from 'solid-app-router';
import { autoAnimate } from 'solid-auto-animate';
import { Component, Show, Suspense } from 'solid-js';
import PeoplePendingFallback from './PeoplePendingFallback';
import Search from './Search';

const RootShell: Component = () => {
  const isRouting = useIsRouting();
  autoAnimate; // to prevent TS from removing the directive

  return (
    <div class={layoutStyles.layoutApp} use:autoAnimate>
      <Search />
      <Suspense fallback={<PeoplePendingFallback />}>
        <Show when={!isRouting()} fallback={<PeoplePendingFallback />}>
          <Outlet />
        </Show>
      </Suspense>
    </div>
  );
};

export default RootShell;
