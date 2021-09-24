// NPM Packages
import { useState, useEffect } from "react";

// Local file
//import List from "./components/List";
import ListScreen from "./listScreen";
import Modal from "./components/Modal";

export default function App() {
  const API_URL = `https://my.api.mockaroo.com/insta-orders.json?key=e49e6840`;

  const [items, setitems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Couldn't get any data");
        const itemData = await response.json();
        setitems(itemData);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    (async () => await fetchItems())();
  }, [API_URL]);

  return (
    <div className="App">
      <h1>My Package Tracker</h1>
      {isLoading && <p className="loading-message">Loading...</p>}
      {fetchError && <p className="error-message">{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading && (
        <ListScreen items={items} setModal={setModal} />
      )}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
