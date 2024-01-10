import { useState, useRef } from "react";
import "./list.css";
import ItemCard from "../item-card/ItemCard";
import { Draggable } from "react-beautiful-dnd";

const ListCard = ({
  title,
  setOpenModal,
  id,
  // setObj,
  // replaceObjectPosition,
  // obj,
  // setListData,
  // listData,
  // index,
}) => {
  const [value, setValue] = useState(title);
  const [items, setItems] = useState([]);
  const [addItem, setAddItem] = useState(false);
  const [itemTitle, setItemTitle] = useState("");
  const [counter, setCounter] = useState(0);

  // const dragList = useRef();
  // const dragOverList = useRef();

  // const dragStart = (e) => {
  //   dragList.current = e.target.id;
  //   setObj((p) => {
  //     return { ...p, start: dragList.current };
  //   });

  //   console.log("start", obj);
  // };

  // const dragEnter = (e) => {
  //   dragOverList.current = e.target.id;
  //   setObj((p) => {
  //     return { ...p, end: dragOverList.current };
  //   });

  //   console.log("end", obj);
  // };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdditem = () => {
    if (itemTitle.length > 0) {
      setItems((prev) => [...prev, { id: counter, title: itemTitle }]);
      setCounter((prev) => prev + 1);
      setItemTitle("");
    }
  };

  return (
    <>
      <div
        className="card-list"
        // draggable="true"
        // onDragStart={(e) => dragStart(e)}
        // onDragEnter={(e) => dragEnter(e)}
        // onDragEnd={() => replaceObjectPosition(id)}
        id={id}
      >
        <div className="list-head">
          <input
            type="text"
            className="list-main-heading"
            value={value}
            onChange={handleChange}
          />
          <p className="list-menu-bar">···</p>
        </div>

        <ul className="items">
          {items.map((itm, index) => (
            // <Draggable draggableId={itm.id.toString()} key={itm.id} index={index}>
            //   {(provided) => (
                <div
                  // ref={provided.innerRef}
                  // {...provided.draggableProps}
                  // {...provided.dragHandleProps}
                >
                  <ItemCard
                    itemTitle={itm.title}
                    key={itm.id}
                    setOpenModal={setOpenModal}
                  />
                </div>
            //   )}
            // </Draggable>
          ))}
        </ul>

        {!addItem && (
          <div className="list-foot">
            <button className="add-card-btn" onClick={() => setAddItem(true)}>
              <span>+</span> &nbsp; Add a card
            </button>
            <p>icon</p>
          </div>
        )}

        {addItem && (
          <div className="list-foot1">
            <textarea
              className="item-text-area"
              placeholder="Enter a title for this card..."
              value={itemTitle}
              onChange={(e) => setItemTitle(e.target.value)}
              onKeyDown={(e) =>
                itemTitle.length > 0 &&
                e.key === "Enter" &&
                !e.shiftKey &&
                handleAdditem()
              }
            ></textarea>
            <div className="add-list-btns item-btns">
              <button className="add-btn" onClick={handleAdditem}>
                Add list
              </button>
              <button className="reject-btn" onClick={() => setAddItem(false)}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ListCard;
