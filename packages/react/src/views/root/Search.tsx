import { useAutoAnimate } from '@formkit/auto-animate/react';
import searchStyles from '@friendly-ui/design/search.module.css';
import { FormEventHandler, useState } from 'react';
import { ClearSearchIcon, SearchHistoryIcon } from '_shared/Icons';
import { useSearchStore } from '_shared/searchStore';

type SubmitHandler = FormEventHandler<HTMLFormElement>;

const Search = () => {
  const { history, runSearch } = useSearchStore();
  const [show, setShow] = useState(false);
  const [wrapperRef] = useAutoAnimate<HTMLDivElement>();

  const handleSubmit: SubmitHandler = (event) => {
    event.preventDefault();
    const formElem = event.currentTarget;
    const formData = new FormData(formElem);
    const query = formData.get('search');

    if (typeof query === 'string') {
      runSearch(query);
    }
  };

  const handleReset = () => {
    runSearch('');
  };

  function renderHistoryContent() {
    if (history.length === 0) {
      return <li>No Search History</li>;
    }

    const historyItems = history.map((searchRecord) => (
      <li className={searchStyles.historyItem} key={searchRecord}>
        {searchRecord}
      </li>
    ));

    return historyItems;
  }

  return (
    <section ref={wrapperRef}>
      <form
        className={searchStyles.searchForm}
        autoComplete="off"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <input
          className={searchStyles.searchField}
          type="text"
          placeholder="Search"
          name="search"
          aria-label="Search"
        />
        <button
          className={searchStyles.historyBtn}
          type="button"
          aria-label="Search History"
          onClick={() => setShow((old) => !old)}
        >
          <SearchHistoryIcon />
        </button>
        <button
          className={searchStyles.resetBtn}
          type="reset"
          aria-label="Clear Search"
        >
          <ClearSearchIcon />
        </button>
      </form>
      {show && (
        <ul className={searchStyles.history}>{renderHistoryContent()}</ul>
      )}
    </section>
  );
};

export default Search;
