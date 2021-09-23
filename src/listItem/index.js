export default function ListItem({ item }) {
  return (
    <li>
      <div className="item-short-info">
        <h3 className="item__parcel__id">{item.parcel_id} </h3>
        <p>{item.sender} </p>
        <p>{item.status} </p>
        <p>{item.last_updated}</p>
      </div>
      <button>View</button>
    </li>
  );
}
