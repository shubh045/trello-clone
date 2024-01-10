const Sidebar = ({ expandSide, setExpandSide }) => {
  return (
    <div className={`sidebar ${expandSide && "expanded"}`}>
      {!expandSide && (
        <p className="expand-arrow" onClick={() => setExpandSide(true)}>
          <i className="fa-solid fa-angle-right"></i>
        </p>
      )}
      {expandSide && (
        <div className="sidebar-inner-container">
          <div className="sidebar-heading">
            <div className="left-heading">
              <p className="t-icon">T</p>
              <p className="trello-workspace">
                <span>Trello Workspace</span> <span>Free</span>
              </p>
            </div>
            <p className="shrink-side" onClick={() => setExpandSide(false)}>
              <i className="fa-solid fa-angle-left"></i>
            </p>
          </div>

          <div className="general-menu">
            <div className="boards-item">
              <p>
                <i className="fa-brands fa-trello"></i> <span>Boards</span>
              </p>
            </div>
            <div className="members">
              <p className="g-left-items">
                <i className="fa-regular fa-user"></i>
                <span>Members</span>
              </p>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="workspace-settings">
              <p className="g-left-items">
                <i className="fa-solid fa-gear"></i>
                <span>Workspace Settings</span>
              </p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="workspace-views">
            <p className="workspace-vw">Workspace views</p>
            <p className="table">
              <i class="fa-solid fa-table-list"></i>
              <span>Table</span>
            </p>

            <p className="calendar">
              <i class="fa-solid fa-calendar-days"></i>
              <span>Calendar</span>
            </p>
          </div>

          <div className="boards-list">
            <p className="boards-list-heading">
                <span>Your boards</span>
                <p><i className="fa-solid fa-plus"></i></p>
            </p>
            <div className="single-board">
                <div className="board-color"></div>
                <p>test</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
