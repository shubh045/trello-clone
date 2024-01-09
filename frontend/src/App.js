import "./App.css";
import ListCard from "./components/list-card/ListCard";
import { useEffect, useState } from "react";
import Modal from "./components/modal/Modal";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const App = () => {
  const [addList, setAddList] = useState(false);
  const [listData, setListData] = useState([]);
  const [listTitle, setListTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [counter, setCounter] = useState(0);

  // const [obj, setObj] = useState({
  //   start: -1,
  //   end: -1,
  // });

  const handleAddList = () => {
    if (listTitle.length > 0) {
      setListData((prev) => [...prev, { id: counter, title: listTitle }]);
      setCounter((prev) => prev + 1);
      setListTitle("");
    }
  };

  // const replaceObjectPosition = (id) => {
  //   const index = listData.findIndex((item) => item.id === id);
  //   if (
  //     obj.start < 0 ||
  //     obj.start >= listData.length ||
  //     obj.end < 0 ||
  //     obj.end >= listData.length
  //   ) {
  //     console.log("error");
  //   }

  //   const newArray = [...listData];
  //   const removedItem = newArray.splice(index, 1)[0];
  //   newArray.splice(obj.end, 0, removedItem);

  //   setListData(newArray);
  // };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    )
      return;

      const newArray = [...listData];
      const removedItem = newArray.splice(source.index, 1)[0];
      newArray.splice(destination.index, 0, removedItem);
  
      setListData(newArray);
  };

  return (
    <>
      {openModal && (
        <div className="modal">
          <div className="modal-content">
            <Modal />
          </div>
        </div>
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <ListCard title="test" setOpenModal={setOpenModal} />

          {listData.map((item, index) => (
            <Droppable droppableId={item.id.toString()} key={item.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="card-list-cont"
                >
                  <Draggable draggableId={item.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListCard
                          title={item.title}
                          key={item.id}
                          setOpenModal={setOpenModal}
                          id={item.id}
                          // setObj={setObj}
                          // replaceObjectPosition={replaceObjectPosition}
                          // obj={obj}
                          // setListData={setListData}
                          // listData={listData}
                          // index={index}
                        />
                      </div>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}

          {!addList && (
            <button className="add-list" onClick={() => setAddList(true)}>
              <span>+</span> Add another list
            </button>
          )}

          {addList && (
            <div className="add-list-section">
              <input
                type="text"
                placeholder="Enter list title..."
                value={listTitle}
                onChange={(e) => setListTitle(e.target.value)}
                onKeyDown={(e) =>
                  listTitle.length > 0 &&
                  e.key === "Enter" &&
                  !e.shiftKey &&
                  handleAddList()
                }
              />
              <div className="add-list-btns">
                <button className="add-btn" onClick={handleAddList}>
                  Add list
                </button>
                <button
                  className="reject-btn"
                  onClick={() => setAddList(false)}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
