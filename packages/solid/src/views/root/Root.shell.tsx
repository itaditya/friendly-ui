import { Component, Suspense } from 'solid-js';
import { Outlet } from 'solid-app-router';
import { autoAnimate } from 'solid-auto-animate';
import Search from './Search';
import layoutStyles from '@friendly-ui/design/layout.module.css';

const RootShell: Component = () => {
  autoAnimate; // to prevent TS from removing the directive

  return (
    <div class={layoutStyles.layoutApp} use:autoAnimate>
      <Search />
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootShell;
