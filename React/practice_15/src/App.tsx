import { FaMoon } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoSunny } from "react-icons/io5";
import { useGlobalContext } from "./context";

function App() {
  const { state, handleSearch, changeMode, changeSearch } = useGlobalContext();

  return (
    <main>
      <section className="toggle-container">
        <button className="dark-toggle" onClick={changeMode}>
          <IconContext.Provider value={{ className: "toggle-icon" }}>
            {state.mode ? <FaMoon></FaMoon> : <IoSunny></IoSunny>}
          </IconContext.Provider>
        </button>
      </section>
      <section>
        <h1 className="title">unsplash images</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-input search-input"
            name="search"
            placeholder="cat"
            spellCheck="false"
            data-ms-editor="true"
            value={state.search}
            onChange={(e) => changeSearch(e.target.value)}
          />
          <button type="submit" className="btn">
            search
          </button>
        </form>
      </section>
      <section className="image-container">
        {state.results ? (
          state.results.map((item) => {
            return (
              <img
                src={item.urls.regular}
                alt={item.alt_description?.toString()}
                className="img"
                key={item.id}
              />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </main>
  );
}

export default App;
