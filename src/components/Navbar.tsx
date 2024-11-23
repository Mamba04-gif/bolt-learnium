import React from 'react';
    import { Link } from 'react-router-dom';
    import { Menu } from 'antd';

    const Navbar: React.FC = () => {
      return (
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      );
    };

    export default Navbar;
