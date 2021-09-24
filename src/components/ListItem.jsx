export default function ListItem({ item, onClick }) {
  const { parcel_id, sender, status, last_updated } = item;
  return (
    <li>
      <div className="item-short-info">
        <h3 className="item__parcel__id">{parcel_id} </h3>
        <p>{sender} </p>
        <p>{status} </p>
        <p>{new Date(`${last_updated}`).toUTCString()} </p>
      </div>
      <button className="button" onClick={onClick}>
        View
      </button>
    </li>
  );
}
