import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import  Typography  from "@material-ui/core/Typography";
import { Link as RouterLink,  NavLink as RouterNav, } from "react-router-dom";

// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import logo from '../Images/logo.jpg'

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "black",
    paddingRight: "79px",
    paddingLeft: "118px",
   },
     logoPosition: {
    fontFamily: "Work Sans, sans-serif",
 
  },
  menuButton: {

      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      color:"white",
      // marginLeft:"90%",
    
   },
     toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },


}));

const headersData1 = [
  {
    label: "ABOUT",
    href: "/about",
  },
  {
    label: "WORK",
    href: "/work",
  },
    {
    label: "CONTACT",
    href: "/contact",
  },
  {
    label: "BLOG",
    href: "/blog",
  },
];
  const headersData2 = [


];
const  Header = () => {
  const {header,logoPosition,menuButton,toolbar} = useStyles();
  const displayDesktop = () => {
    return <Toolbar className={toolbar}>
                                 <img src={logo} alt="logo" style={{height:70,width:70,borderRadius:50}} />

            <div>{getMenuButtons()}</div>

        {/* {slogo}        
      <div>{getMenuButtons2()}</div> */}
</Toolbar>;
  };
    const slogo = (
    <Typography  className={logoPosition}>

    </Typography>
  );
    const getMenuButtons= () => {
    return headersData1.map(({ label, href }) => {
      return (
        <Button
          {...{
      key: label,
      color: "inherit",
      to: href,
      component: RouterNav,
      className: menuButton          }}
        >
          {label}
        </Button>
      );
    });
  };
  //     const getMenuButtons2 = () => {
  //   return headersData2.map(({ label, href }) => {
  //     return (
  //       <Button
  //         {...{
  //     key: label,
  //     color: "inherit",
  //     to: href,
  //     component: RouterNav,
  //     className: menuButton          }}
  //       >
  //         {label}
  //       </Button>
  //     );
  //   });
  // };
     
  return (
     <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
export default Header