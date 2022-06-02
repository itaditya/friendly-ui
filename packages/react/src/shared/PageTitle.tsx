import { FC } from 'react';
import { Title } from 'react-head';

export interface PageTitleProps {
  children: string;
}

const PageTitle: FC<PageTitleProps> = (p) => {
  const { children } = p;
  function getContent() {
    const baseContent = 'Friendly React';

    if (children) {
      return `${children} | ${baseContent}`;
    }

    return baseContent;
  }

  return <Title>{getContent()}</Title>;
};

export default PageTitle;
