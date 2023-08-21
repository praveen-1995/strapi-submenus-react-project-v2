import { useGlobalContext } from './Context';

import { FaTimes } from 'react-icons/fa';
import links from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button type="button" className="close-sidebar-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {links.map((link) => {
            const { pageId, page, subLinks } = link;
            return (
              <article key={pageId}>
                <h3>{page}</h3>
                <div className="sidebar-sublinks">
                  {subLinks.map((subLink) => {
                    const { id, icon, label, url } = subLink;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
