import { Component, Suspense } from 'solid-js';
import { Outlet } from 'solid-app-router';
import Search from './Search';
import layoutStyles from '@friendly-ui/design/layout.module.css';

const RootShell: Component = () => {
  return (
    <div class={layoutStyles.layoutApp}>
      <Search />
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootShell;
