import React, { useState } from 'react'
import { Button, Container, MenuItem, StylesProvider, TextField,TextareaAutosize } from "@material-ui/core";
import {  } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import contact from '../Images/say-hello.png'
import "../App.css"
import { SettingsOverscanOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Contact = () => {
 const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 const[name,setName] = useState("");
 const[number,setNumber] = useState("");
 const[value,setValue] = useState("")
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div style={{textAlign:"center",margin:80}}>
        <div style={{height:"190px"}}></div>
        <img src={contact} alt="contact" />
                    <div style={{height:50}}></div>
                    <p>I'm currently available for freelance projects or full-time work. If you're interested in working with me, please get in touch using one of the methods below. Or feel free to just say hi. I like that too.
                    </p>
        <div style={{display:"flex",justifyContent:"space-around"}}>
         <div>
        <h1>HAVE A PROJECT IN MIND</h1>
        <p>Take a minute and answer a few questions and I'll be in touch</p>
        <Button onClick={handleOpen} style={{height:70,width:250,backgroundColor:"#39B54A",color:"white"}}>Request a Project</Button>
              <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           <div className="content" >
                                <div className="mainForm" >
                                    <h3 style={{ fontSize: 30,marginLeft:"60px" }}>Contact Us</h3>
                                    <div className="form">
                                        {/* {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>} */}
                                        <TextField
                                            style={{ marginBottom: 25 }}
                                            label="Enter Your Name"
                                            variant="outlined"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <TextField
                                            style={{ marginBottom: 25 }}
                                            label="Enter Your Phone no."
                                            variant="outlined"
                                            onChange={(e) => setNumber(e.target.value)}
                                        />
                                        <TextareaAutosize
                                        style={{ marginBottom: 25,height:100 }}

                                        rowsMax={4}
                                        aria-label="maximum height"
                                        placeholder="What you wanna say?"
                                        onChange={(e)=>setValue(e.target.value)}
                                       />

                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            onClick={{}}
                                        >
                                            Done
                                        </Button>
                                    </div>
                                </div>

                            </div>          </div>
        </Fade>
      </Modal>

        </div>
        <div>
            <h1>CONTACT ME DIRECTLY</h1>
            <p>Shreya Mishra</p>
            <p>Hardoi,India</p>
            <a href="mailto:shreyamishra040398@gmail.com" style={{textDecoration:"none",color:"#39B54A"}}>shreyamishra040398@gmail.com</a>
            <div style={{height:20}}></div>
            <h1>FOLLOW ME ONLINE</h1>
            <ul>
                {/* <li>
                    <i class="fa-li fa fa-plus"></i>
                    <a href="" style={{textDecoration:"none",color:"#39B54A"}}>twitter</a>
                </li> */}
                   <li>
                    <i class="fa-li fa fa-plus"></i>
                    <a href="https://github.com/shreya-mishra" style={{textDecoration:"none",color:"#39B54A"}}>github</a>
                </li>
                   <li>
                    <i class="fa-li fa fa-plus"></i>
                    <a href="https://www.linkedin.com/in/shreya-mishra-2270901a5/" style={{textDecoration:"none",color:"#39B54A"}}>linkedin</a>
                </li>
                   <li>
                    <i class="fa-li fa fa-plus"></i>
                    <a href="https://www.facebook.com/profile.php?id=100011450839213" style={{textDecoration:"none",color:"#39B54A"}}>facebook</a>
                </li>
            </ul>

        </div>
        </div>
        </div>
    )
}

export default Contact
