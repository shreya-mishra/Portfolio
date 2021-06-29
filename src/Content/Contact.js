import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import contact from "../Images/say-hello.png";
import "../App.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  var templateParams = {
    name: name,
    email: email,
    value: value,
  };
  const sendEmail = (e) => {
    console.log(name);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m4k28xh",
        "template_7fbj31c",
        e.target.value,
        "user_gx9iEPQmQaF7k4pjImvwZ"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    e.reset();
  };

  return (
    <Container>
      <div id='contact' style={{ textAlign: "center", margin: 80 }}>
        <img src={contact} alt='contact' style={{ maxWidth: "100%" }} />
        <div style={{ height: 50 }}></div>
        <p>
          I'm currently available for freelance projects or full-time work. If
          you're interested in working with me, please get in touch using one of
          the methods below. Or feel free to just say hi. I like that too.
        </p>
        <div className='contactsection'>
          <div>
            <h1>HAVE A PROJECT IN MIND</h1>
            <p>Take a minute and answer a few questions and I'll be in touch</p>
            <Button
              onClick={handleOpen}
              style={{
                height: 70,
                width: 250,
                backgroundColor: "#39B54A",
                color: "white",

                boxShadow: "0px 0px 8px rgb(0,0,0,0.44)",
              }}>
              Request a Project
            </Button>
            <Modal
              aria-labelledby='transition-modal-title'
              aria-describedby='transition-modal-description'
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}>
              <Fade in={open}>
                <div className={classes.paper}>
                  <div className='content'>
                    <div className='mainForm'>
                      <h3 style={{ fontSize: 30, marginLeft: "80px" }}>
                        Contact Us
                      </h3>
                      <div className='form'>
                        <TextField
                          style={{ marginBottom: 25 }}
                          label='Enter Your Name'
                          variant='outlined'
                          onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                          style={{ marginBottom: 25 }}
                          label='Enter Your Email'
                          variant='outlined'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextareaAutosize
                          style={{ marginBottom: 25, height: 100 }}
                          rowsMax={4}
                          aria-label='maximum height'
                          placeholder='What you wanna say?'
                          onChange={(e) => setValue(e.target.value)}
                        />

                        <Button
                          variant='contained'
                          color='orange'
                          size='large'
                          onClick={sendEmail}>
                          Done
                        </Button>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </Fade>
            </Modal>
          </div>
          <div>
            <h1>CONTACT ME DIRECTLY</h1>
            <p>Shreya Mishra</p>
            <p>Hardoi,India</p>
            <a
              href='mailto:shreyamishra040398@gmail.com'
              style={{ textDecoration: "none", color: "#39B54A" }}>
              shreyamishra040398@gmail.com
            </a>
            <div style={{ height: 20 }}></div>
            <h1>FOLLOW ME ONLINE</h1>

            <ul class='fa-ul'>
              <motion.li
                whileHover={{ scale: 1.2, originX: -1, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}>
                <span class='fa-li'>
                  <GitHubIcon style={{ color: "#39B54A", fontSize: 20 }} />
                </span>
                <a
                  href='https://github.com/shreya-mishra'
                  style={{ textDecoration: "none", color: "#39B54A" }}>
                  github
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, originX: -1, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}>
                <span class='fa-li'>
                  <LinkedInIcon style={{ color: "#39B54A", fontSize: 20 }} />
                </span>
                <a
                  href='https://www.linkedin.com/in/shreya-mishra-2270901a5/'
                  style={{ textDecoration: "none", color: "#39B54A" }}>
                  linkedin
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, originX: -1, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}>
                <span class='fa-li'>
                  <FacebookIcon style={{ color: "#39B54A", fontSize: 20 }} />
                </span>
                <a
                  href='https://www.facebook.com/profile.php?id=100011450839213'
                  style={{ textDecoration: "none", color: "#39B54A" }}>
                  facebook
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
