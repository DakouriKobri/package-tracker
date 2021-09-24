export default function ListItemModal({ item }) {
  const {
    parcel_id,
    sender,
    status,
    last_updated,
    eta,
    verification_required,
    location_id,
    location_name,
    location_coordinate_longitude,
    location_coordinate_latitude,
    location_status_ok,
    notes,
  } = item;

  return (
    <div className="list-item-modal">
      <h3 className="item__parcel__id">{parcel_id} </h3>
      <p>{sender} </p>
      <p>{status} </p>
      <p>{last_updated}</p>
      <p>{location_name}</p>
      <p>{verification_required ? "ID required" : "No ID required"}</p>
      <p>{location_id}</p>
      <p>{location_coordinate_latitude}</p>
      <p>{location_coordinate_longitude}</p>
      <p>{location_status_ok}</p>
      <p>{notes}</p>
      <p>{eta}</p>
    </div>
  );
}
