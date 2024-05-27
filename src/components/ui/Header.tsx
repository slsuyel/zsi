import Container from "react-bootstrap/Container";
import logo from "../../assets/images/logo-1.png";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/Pages.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [MobileMenu, setMobileMenu] = useState(false);

  const showDrawer = () => {
    setMobileMenu(true);
  };

  const onClose = () => {
    setMobileMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsFixed(offset > 0);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const menuItems = [
    {
      id: 1,
      label: "What we do",
      link: "/services",
    },
    {
      id: 2,
      label: "Technology",
      link: "/technology",
    },
    {
      id: 3,
      label: "Who we are",
      link: "/who-we-are",
    },
    {
      id: 4,
      label: "Careers",
      link: "/careers",
    },
    {
      id: 5,
      label: "News",
      link: "/news",
    },
    {
      id: 6,
      label: "Contact us",
      link: "/contact-us",
    },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        fixed={isFixed ? "top" : undefined}
        className={`header_shadow py-3 mx-auto  ${
          isFixed ? "fix-bg " : "animated-gradient "
        } ${isMobile ? "d-none" : "d-block"}`}
      >
        <Container>
          <Navbar.Brand href="/" className="p-0 ">
            <img src={logo} alt="" width={200} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-end fs-5 fw-semibold gap-3"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="nav-link text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isMobile && (
        <>
          <div className=" align-items-center d-flex justify-content-between p-2 bg-dark ">
            <Navbar.Brand href="/" className="p-1 ">
              <img src={logo} alt="" width={100} />
            </Navbar.Brand>
            <Button type="primary" className="rounded-0 " onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </div>

          <Drawer
            style={{ backgroundColor: "#be93b6", width: "60%" }}
            placement="left"
            onClose={onClose}
            open={MobileMenu}
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="nav-link text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </Drawer>
        </>
      )}
    </>
  );
};

export default Header;
