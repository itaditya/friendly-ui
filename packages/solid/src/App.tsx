import { Component, createSignal, Show } from 'solid-js';
import layoutStyles from '@friendly-ui/design/layout.module.css';
import cardStyles from '@friendly-ui/design/card.module.css';

const App: Component = () => {
  const [show, setShow] = createSignal(false);

  return (
    <div class={layoutStyles.layoutApp}>
      <section>
        <input type="text" placeholder="Search" />
        <button onClick={() => setShow((old) => !old)}>Toggle</button>
        <Show when={show()}>
          <div>
            <p>Recent Searches</p>
            <br />
          </div>
        </Show>
      </section>
      <section class={`${cardStyles.card} ${layoutStyles.fillChild}`}>
        Hello
      </section>
      <section class={cardStyles.card} data-variant="split">
        Select a person to see their details here
      </section>
    </div>
  );
};

export default App;
