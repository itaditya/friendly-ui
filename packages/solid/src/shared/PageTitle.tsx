import { Component, ComponentProps } from 'solid-js';
import { Title } from 'solid-meta';

export type PageTitleProps = ComponentProps<typeof Title>;

const PageTitle: Component<PageTitleProps> = (p) => {
  function getContent() {
    const baseContent = 'Friendly Solid';
    const { children } = p;

    if (children) {
      return `${children} | ${baseContent}`;
    }

    return baseContent;
  }

  return <Title children={getContent()} />;
};

export default PageTitle;
