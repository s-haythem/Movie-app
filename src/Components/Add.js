import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#555a74',
    borderRadius:'10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "500px",
    height: "500px",
  },
}));

export default function Add({ addMovieHandler }) {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [img, setImg] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  const input = () => {
    addMovieHandler({
      id: Math.random(),
      title: title,
      rate: rate,
      img: img,
      genre: genre,
      description: description
    });
  };
  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addImg = (e) => {
    setImg(e.target.value);
  };
  const addRate = (e) => {
    setRate(e.target.value);
  };
  const addGenre = (e) => {
    setGenre(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Add">
      <button type="button" className="buttonAdd" onClick={handleOpen}>
        Add Movie
      </button>
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
            <h2 id="transition-modal-title">Add Movie :</h2>
            <input className='inputAdd' type="text" placeholder="Add a movie " onChange={addTitle} />
            <input className='inputAdd' type="text" placeholder="add Rate" onChange={addRate} />
            <input
              className='inputAdd'
              type="text"
              placeholder="add Poster Link "
              onChange={addImg}
            />
            <input
              className='inputAdd'
              type="text"
              placeholder="add genre"
              onChange={addGenre}
            />
            <input
              className='inputAdd'
              type="text"
              placeholder="add description"
              onChange={addDescription}
            />
            <div>
            <button className='btnIn' onClick={input}>Add</button>
            <button className='btnIn' onClick={handleClose}>close</button>
            </div>
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
