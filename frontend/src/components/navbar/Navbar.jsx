import { useState } from "react";
import "./navbar.css";
import Sidebar from "./Sidebar";

export const NavItems = ({ title }) => {
  return (
    <div className="single-item">
      <p>{title}</p>
      <p>
        <i className="fa-solid fa-angle-down"></i>
      </p>
    </div>
  );
};

const Navbar = ({ children, expandSide, setExpandSide }) => {
  const [focus, setFocus] = useState(true);
  return (
    <>
      <div className="navigation-bar">
        <div className="main-nav">
          <div className="left-menu">
            {/* <p>
            <i className="fa-solid fa-braille"></i>
          </p> */}
            <div className="trello-icon">
              <p>
                <i className="fa-brands fa-trello"></i>
              </p>
              <h3>Trello</h3>
            </div>
            <div className="left-nav-items">
              <NavItems title="Workspaces" />
              <NavItems title="Recent" />
              <NavItems title="Starred" />
              <NavItems title="Templates" />
            </div>
            {focus && (
              <button type="button" className="nav-create-button">
                Create
              </button>
            )}
          </div>
          <div className="right-menu">
            <div className="search-container">
              <p>
                <i className="fa-solid fa-magnifying-glass"></i>
              </p>
              <input
                type="text"
                placeholder="Search"
                onFocus={() => setFocus(false)}
                onBlur={() => setFocus(true)}
              />
            </div>
            <p>
              <i className="fa-regular fa-bell"></i>
            </p>
            <p>
              <i className="fa-regular fa-circle-question"></i>
            </p>
            <div className="profile-pic">SK</div>
          </div>
        </div>
        <div className="bottom-side-nav">
          <div className="side">
            <Sidebar expandSide={expandSide} setExpandSide={setExpandSide} />
          </div>
          <div className="navs">
            <div className="bottom-nav">
              <div className="bottom-left">
                <div className="bottom-l-menu">
                  <h3>test</h3>
                  <p>
                    <i className="fa-regular fa-star"></i>
                  </p>
                  <p>
                    <i className="fa-light fa-user-group"></i>
                  </p>
                  <button>Board</button>
                  <p>
                    <i className="fa-solid fa-angle-down"></i>
                  </p>
                </div>
              </div>
              <div className="bottom-right">
                <div className="bottom-r-menu">
                  <p>
                    <i class="fa-solid fa-rocket"></i>
                  </p>
                  <p>
                    <i class="fa-solid fa-bolt-lightning"></i>
                  </p>
                  <p>
                  <i class="fa-solid fa-arrow-down-wide-short"></i>
                    <span>Filters</span>
                  </p>
                  <div className="bottom-r-sub">
                    <div></div>
                    <button>
                      <p>
                        <i className="fa-solid fa-user-plus"></i>
                      </p>
                    </button>
                    <p>...</p>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
