import layoutStyles from '@friendly-ui/design/layout.module.css';
import { Outlet } from '@tanstack/react-location';
import { Suspense } from 'react';
import Search from './Search';

const RootShell = () => {
  return (
    <div className={layoutStyles.layoutApp}>
      <Search />
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootShell;
