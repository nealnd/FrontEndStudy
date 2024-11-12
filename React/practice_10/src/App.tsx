import React, { useEffect, useRef, useState } from "react";
import { GroceryItem } from "./utils";

import { Bounce, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Item from "./Item";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else return [];
};

function App() {
  const [checkItem, setcheckItem] = useState("");
  const [allItems, setallItems] = useState<GroceryItem[]>(getLocalStorage());
  const [editIndex, seteditIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(allItems));
  }, [allItems]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkItem.trim() !== "") {
      if (editIndex !== null) {
        const updatedItems = allItems.map((item, index) =>
          index === editIndex ? { ...item, name: checkItem } : item
        );
        setallItems(updatedItems);
        seteditIndex(null);
        toast.success("Item Edited Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setcheckItem("");
      } else {
        const temp = new GroceryItem(checkItem);
        setallItems((preItems) => {
          return [...preItems, temp];
        });
        toast.success("Item Added To The List", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      toast.error("Please Provide Value!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const deleteItem = (index: number) => {
    setallItems(allItems.filter((_, i) => i !== index));
    toast.success("Item Deleted!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const boughtItem = (index: number) => {
    const temp = allItems.slice(0, allItems.length);
    temp[index].isBought = !temp[index].isBought;
    setallItems(temp);
  };

  const editItem = (index: number) => {
    setcheckItem(allItems[index].name);
    seteditIndex(index);
    inputRef.current?.focus();
  };

  return (
    <section className="section-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            type="text "
            className="form-input"
            value={checkItem}
            spellCheck="false"
            data-ms-editor="true"
            onChange={(e) => setcheckItem(e.target.value)}
            ref={inputRef}
          />
          <button type="submit" className="btn">
            {editIndex !== null ? "edit item" : "add item"}
          </button>
        </div>
      </form>
      <div className="items">
        {allItems.map((item, index) => (
          <Item
            item={item}
            index={index}
            boughtItem={boughtItem}
            editItem={editItem}
            deleteItem={deleteItem}
          ></Item>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
}

export default App;
