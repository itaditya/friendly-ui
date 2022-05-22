import { Component, createSignal, Show } from 'solid-js';

const Search: Component = () => {
  const [show, setShow] = createSignal(false);

  return (
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
  );
};

export default Search;
