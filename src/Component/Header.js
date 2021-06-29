import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../Images/logo.jpg";
import "../App.css";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "black",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logoPosition: {
    fontFamily: "Work Sans, sans-serif",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const headersData = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "WORK",
    href: "#work",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
  {
    label: "BLOG",
    href: "#blog",
  },
];

const Header = () => {
  const { header, toolbar } = useStyles();
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 70 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}>
          <a href='#home'>
            {" "}
            <img
              src={logo}
              alt='logo'
              style={{ height: 70, width: 70, borderRadius: 50 }}
            />
          </a>
        </motion.div>

        <div className={{ display: "flex", alignItems: "flexStart" }}>
          <a
            style={{ textDecoration: "none", color: "white", margin: 10 }}
            href='#about'>
            ABOUT
          </a>
          <a
            style={{ textDecoration: "none", color: "white", margin: 10 }}
            href='#work'>
            WORK
          </a>
          <a
            style={{ textDecoration: "none", color: "white", margin: 10 }}
            href='#contact'>
            CONTACT
          </a>
          <a
            style={{ textDecoration: "none", color: "white", margin: 10 }}
            href='#blog'>
            BLOG
          </a>
        </div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};
export default Header;
