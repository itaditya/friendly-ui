import { Component } from 'solid-js';
import { Outlet } from 'solid-app-router';
import Search from './Search';
import layoutStyles from '@friendly-ui/design/layout.module.css';

const AppShellView: Component = () => {
  return (
    <div class={layoutStyles.layoutApp}>
      <Search />
      <Outlet />
    </div>
  );
};

export default AppShellView;
