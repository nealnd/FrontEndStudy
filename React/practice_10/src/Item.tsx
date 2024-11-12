import { GroceryItem } from "./utils";

interface ItemProps {
  item: GroceryItem;
  index: number;
  boughtItem: (index: number) => void;
  editItem: (index: number) => void;
  deleteItem: (index: number) => void;
}

const Item: React.FC<ItemProps> = ({
  item,
  index,
  boughtItem,
  editItem,
  deleteItem,
}) => {
  return (
    <div className="single-item" key={index}>
      <input
        type="checkbox"
        checked={item.isBought}
        onChange={() => boughtItem(index)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isBought ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn edit-btn"
        type="button"
        onClick={() => editItem(index)}
      >
        edit
      </button>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteItem(index)}
      >
        delete
      </button>
    </div>
  );
};

export default Item;
