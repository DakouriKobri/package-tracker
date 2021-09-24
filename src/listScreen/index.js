import { useState } from "react";
import ButtonToggle from "../components/ButtonToggle";
import List from "../components/List";

export default function ListScreen({ items, setModal }) {
  const [listDisplayed, setListDisplayed] = useState(false);

  return (
    <div>
      <ButtonToggle
        status={listDisplayed}
        onClick={() => setListDisplayed(!listDisplayed)}
      />
      {listDisplayed && <List items={items} setModal={setModal} />}
    </div>
  );
}
