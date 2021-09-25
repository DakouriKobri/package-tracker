// NPM package
import { useState } from "react";

// Local files
import ButtonToggle from "../components/ButtonToggle";
import postman from "../assets/images/postman.jpg";
import List from "../components/List";

export default function ListScreen({ items, setModal }) {
  const [listDisplayed, setListDisplayed] = useState(false);

  return (
    <div className="list-screen">
      <ButtonToggle
        status={listDisplayed}
        onClick={() => setListDisplayed(!listDisplayed)}
      />
      {listDisplayed && <List items={items} setModal={setModal} />}
      {!listDisplayed && (
        <div className="welcome-view">
          <p className="welcome-view__message">
            Welcome to your package tracker! Click the button above to start
            tracking your orders!
          </p>
          <img src={postman} alt="A parcel being scanned" />
        </div>
      )}
    </div>
  );
}
