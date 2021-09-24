// Local file
import ListItem from "./ListItem";
import ListItemModal from "../components/ListItemModal";

export default function List({ items, setModal }) {
  function onItem(item) {
    setModal(<ListItemModal item={item} />);
  }

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onClick={() => onItem(item)} />
      ))}
    </ul>
  );
}
