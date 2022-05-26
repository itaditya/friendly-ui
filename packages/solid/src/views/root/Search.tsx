import { Component, createSignal, Show, JSX } from 'solid-js';
import { useSearchStore } from '_shared/searchStore';

type SubmitHandler = JSX.EventHandlerUnion<HTMLFormElement, SubmitEvent>;

const Search: Component = () => {
  const [_search, methods] = useSearchStore();
  const [show, setShow] = createSignal(false);

  const handleSubmit: SubmitHandler = (event) => {
    event.preventDefault();
    const formElem = event.currentTarget;
    const formData = new FormData(formElem);
    const query = formData.get('search');

    if (typeof query === 'string') {
      methods.runSearch(query);
    }
  };

  const handleReset = () => {
    methods.clearSearch();
  };

  return (
    <section>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input type="text" placeholder="Search" name="search" />
        <button onClick={() => setShow((old) => !old)}>Toggle</button>
        <button type="submit">Search</button>
        <button type="reset">Reset</button>
      </form>
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
