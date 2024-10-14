import {
  House,
  FolderClosed,
  PanelRight,
  LayoutGrid,
  MessageSquareText,
  Search,
  Settings,
  Bell,
  AlignJustify,
} from "lucide-react";
import "./HomePage.scss";

const menuLinks = [
  { id: 1, title: "Home", icon: <House /> },
  { id: 2, title: "Projects", icon: <FolderClosed /> },
  { id: 3, title: "Templates", icon: <PanelRight /> },
  { id: 4, title: "Brand", icon: <LayoutGrid /> },
  { id: 5, title: "Apps", icon: <LayoutGrid /> },
];

const HomePage = () => {
  return (
    <main className="home">
      <aside className="home-aside">
        <nav className="home-aside-nav">
          {menuLinks.map((el) => (
            <li className="home-aside-element" key={el.title}>
              <button>{el.icon}</button>
              <h6>{el.title}</h6>
            </li>
          ))}
        </nav>

        <li className="home-aside-element">
          <button>{<MessageSquareText />}</button>
          <h6>Glow up</h6>
        </li>
      </aside>

      <div className="home-content">
        <header>
          <button className="menu-btn">
            <AlignJustify />
          </button>

          <form>
            <button>
              <Search />
            </button>
            <input type="text" placeholder="Search your content and Canva's" />
          </form>

          <div className="home-content-actions">
            <button>
              <Settings size={24} />
            </button>

            <div className="home-content-notification">
              <span>3</span>
              <button>
                <Bell size={24} />
              </button>
            </div>

            <div className="home-content-profile"></div>
          </div>
        </header>
      </div>
    </main>
  );
};

export default HomePage;
