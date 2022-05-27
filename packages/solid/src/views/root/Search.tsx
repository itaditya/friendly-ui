import searchStyles from '@friendly-ui/design/search.module.css';
import { autoAnimate } from 'solid-auto-animate';
import { Component, createSignal, For, JSX, Show } from 'solid-js';
import { ClearSearchIcon, SearchHistoryIcon } from '_shared/Icons';
import { useSearchStore } from '_shared/searchStore';

type SubmitHandler = JSX.EventHandlerUnion<HTMLFormElement, SubmitEvent>;

const Search: Component = () => {
  const [search, methods] = useSearchStore();
  const [show, setShow] = createSignal(false);
  autoAnimate; // to prevent TS from removing the directive

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
    <section use:autoAnimate>
      <form
        class={searchStyles.searchForm}
        autocomplete="off"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <input
          class={searchStyles.searchField}
          type="text"
          placeholder="Search"
          name="search"
          aria-label="Search"
        />
        <button
          class={searchStyles.historyBtn}
          type="button"
          onClick={() => setShow((old) => !old)}
        >
          <SearchHistoryIcon />
        </button>
        <button class={searchStyles.resetBtn} type="reset">
          <ClearSearchIcon />
        </button>
      </form>
      <Show when={show()}>
        <ul class={searchStyles.history}>
          <For each={search.history} fallback={<li>No Search History</li>}>
            {(searchRecord) => <li class={searchStyles.historyItem}>{searchRecord}</li>}
          </For>
        </ul>
      </Show>
    </section>
  );
};

export default Search;
