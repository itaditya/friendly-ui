import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

export interface PageTitleProps {
  children: ReactNode;
}

const PageTitle: FC<PageTitleProps> = (p) => {
  return (
    <Helmet titleTemplate="%s | Friendly React">
      <title>{p.children}</title>
    </Helmet>
  );
};

export default PageTitle;
