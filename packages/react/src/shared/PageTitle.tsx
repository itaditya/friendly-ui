import { FC, useEffect, useRef } from 'react';

export interface PageTitleProps {
  children: string;
}

const PageTitle: FC<PageTitleProps> = (p) => {
  const { children } = p;
  const initialTitle = useRef('');

  useEffect(() => {
    initialTitle.current = document.title;

    return () => {
      document.title = initialTitle.current;
    };
  }, []);

  useEffect(() => {
    function getContent() {
      const baseContent = 'Friendly React';

      if (children) {
        return `${children} | ${baseContent}`;
      }

      return baseContent;
    }

    document.title = getContent();
  }, [children]);

  return null;
};

export default PageTitle;
