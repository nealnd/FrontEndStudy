import { useRef } from "react";
import { useGlobalContext } from "../context";

export const SearchForm = () => {
  const { handleSearch, changeValue } = useGlobalContext();
  const Input = useRef<HTMLInputElement>(null);
  return (
    <div className="form-container">
      <form
        method="get"
        action="/?index"
        className="form"
        onSubmit={(e) => handleSearch(e, Input)}
      >
        <input
          type="search"
          name="search"
          className="form-input"
          spellCheck="false"
          data-ms-editor="true"
          ref={Input}
          onChange={(e) => changeValue(e)}
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </div>
  );
};
