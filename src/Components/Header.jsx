import React from 'react';
import { Menu } from 'semantic-ui-react';
import Cookies from 'js-cookie';

const Header = (props) => {
  return (
    <div className="header">
      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          background-color: orange; 
        }

        .logo-container {
          height: 100px;
          margin-right: 10px;
          display: flex;
          align-items: center;
        }

        .logo {
          max-width: 100%;
          max-height: 100%;
        }

        .heading {
          font-size: 30px;
          font-weight: bold;
          margin: 0;
        }

        .menu-right {
          display: flex;
          align-items: center;
        }
      `}</style>

      <div className="logo-container">
        <img className="logo" src="https://pbs.twimg.com/media/Fqvo7klWcAAQ39B.png" alt="Logo" />
      </div>

      <h1 className="heading">Election Commission of India</h1>

      <div className="menu-right">
        <Menu secondary>
          <Menu.Menu position="right">
            <Menu.Item icon="user" />
            <Menu.Item style={{ paddingRight: '10px' }}>
              {Cookies.get('company_email') || Cookies.get('voter_email')}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
