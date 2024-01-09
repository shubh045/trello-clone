const ItemCard = ({itemTitle, setOpenModal}) => {
  return (
    <li className="item" draggable="true" onClick={() => setOpenModal(true)}>
      <p>{itemTitle}</p>
      <i className="fa-solid fa-pen edit-icon"></i>
    </li>
  );
};

export default ItemCard;
