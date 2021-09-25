export default function ListItemModal({ item }) {
  const {
    parcel_id,
    sender,
    status,
    last_updated,
    eta,
    user_name,
    user_phone,
    verification_required,
    location_id,
    location_name,
    location_coordinate_longitude,
    location_coordinate_latitude,
    location_status_ok,
    notes,
  } = item;

  return (
    <div className="list-item-modal__container">
      <div className="list-item-modal">
        <h3 className="item__parcel__id">{parcel_id} </h3>
        <p>
          <span>to: </span> {user_name}
        </p>
        <p>
          <span>Phone number: </span> {user_phone}
        </p>
        <p>
          <span>From:</span> {sender}
        </p>
        <p>{status}</p>
        <p>{verification_required ? "ID required" : "No ID required"}</p>
        <p>
          <span>ETA:</span> {new Date(`${eta}`).toUTCString()}
        </p>
        <p>
          <span>Note:</span> {notes}
        </p>
        <p>
          <span>Last updated:</span> {new Date(`${last_updated}`).toUTCString()}
        </p>
        <p>
          <span>Location:</span> {location_name}
        </p>
        <p>
          <span>Location ID:</span> {location_id}
        </p>
        <p>{location_coordinate_latitude}</p>
        <p>{location_coordinate_longitude}</p>
        <p>{location_status_ok}</p>
      </div>
    </div>
  );
}
