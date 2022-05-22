import { mergeProps, ParentComponent } from 'solid-js';
import cardStyles from '@friendly-ui/design/card.module.css';

export type CardProps = {
  variant?: 'split' | 'full';
  class?: string;
};

const defaultProps = { variant: 'full', class: '' } as const;

const Card: ParentComponent<CardProps> = (ip) => {
  const p = mergeProps(defaultProps, ip);

  return (
    <section class={`${cardStyles.card} ${p.class}`} data-variant={p.variant}>
      {p.children}
    </section>
  );
};

export default Card;
