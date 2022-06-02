import layoutStyles from '@friendly-ui/design/layout.module.css';
import { Outlet } from 'solid-app-router';
import { autoAnimate } from 'solid-auto-animate';
import { Component, Suspense } from 'solid-js';
import PeoplePendingFallback from './PeoplePendingFallback';
import Search from './Search';

const RootShell: Component = () => {
  autoAnimate; // to prevent TS from removing the directive

  return (
    <div class={layoutStyles.layoutApp} use:autoAnimate>
      <Search />
      <Suspense fallback={<PeoplePendingFallback />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootShell;
