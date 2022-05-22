import type { Component } from 'solid-js';
import layoutStyles from '@friendly-ui/design/layout.module.css';
import cardStyles from '@friendly-ui/design/card.module.css';

const App: Component = () => {
  return (
    <div class={layoutStyles.layoutApp}>
      <section>
        <input type="text" placeholder="Search" />
      </section>
      <section class={`${cardStyles.card} ${layoutStyles.fillChild}`}>
        Hello
      </section>
      <section class={cardStyles.card} data-variant="split">
        Hello
      </section>
    </div>
  );
};

export default App;
