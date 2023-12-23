import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css'

export { Expand };


function Expand() {
    const [navbarItems, setNavbarItems] = useState([
        {
          id: 1,
          title: 'Item 1',
          isOpen: false,
          subItems: ['Subitem 1.1', 'Subitem 1.2', 'Subitem 1.3'],
        },
        {
          id: 2,
          title: 'Item 2',
          isOpen: false,
          subItems: ['Subitem 2.1', 'Subitem 2.2', 'Subitem 2.3'],
        },
        // Add more items as needed
      ]);
    
      const toggleNavbarItem = (itemId) => {
        setNavbarItems((prevItems) =>
          prevItems.map((item) =>
            item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
          )
        );
      };
    
      return (
        <div className="container">
          <div className="navbar">
            {navbarItems.map((item) => (
              <div key={item.id} className="navbar-item">
                <div
                  className={`navbar-item-header ${item.isOpen ? 'open' : ''}`}
                  onClick={() => toggleNavbarItem(item.id)}
                >
                  {item.title}
                </div>
                {item.isOpen && (
                  <ul className="sub-items">
                    {item.subItems.map((subItem, index) => (
                      <li key={index}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {/* Main content goes here */}
        </div>
      );
}

