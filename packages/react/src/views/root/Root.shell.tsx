import { useAutoAnimate } from '@formkit/auto-animate/react';
import layoutStyles from '@friendly-ui/design/layout.module.css';
import { Outlet } from '@tanstack/react-location';
import Search from './Search';

const RootShell = () => {
  const [wrapperRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <div className={layoutStyles.layoutApp} ref={wrapperRef}>
      <Search />
      <Outlet />
    </div>
  );
};

export default RootShell;
