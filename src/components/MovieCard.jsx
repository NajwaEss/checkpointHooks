import React, { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { movies } from "../constatnts/Movies";
import ClampLines from "react-clamp-lines";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { useEffect } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function MovieCard() {
  const [expanded, setExpanded] = useState(false);
  const [listMovies, setListMovies] = useState(movies);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [url, setUrl] = useState("");

 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChange = (e) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "desc":
        setDescription(e.target.value);
        break;
      case "url":
        setUrl(e.target.value);
        break;
      default:
        setRating(e.target.value);
        break;
    }
  };
  const handleClick = () => {
    movies.push({
      title: title,
      description: description ,
      posterURL: url ,
      rating: rating ,
      picture: "images/alive.jpg",
    });
    setListMovies([...movies])
    console.log(movies);
  };

  return (
    <div className="container">
      <div className="section1">
        {listMovies.map((element) => (
          <div className="card">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    F
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={element.title}
                subheader={element.rating}
              />
              <CardMedia
                component="img"
                height="400"
                image={element.picture}
                alt={element.title}
              />
              <CardContent>
                <ClampLines text={element.description} id="default" lines={2}>
                  {/* <Typography  variant="body2" color="text.secondary">
                                    {element.description}
                                </Typography> */}
                </ClampLines>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <a href={element.posterURL}>check</a>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
      <div className="section2">
        <h1>Add new movie:</h1>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="title"
            label="Title"
            variant="standard"
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            sx={{ width: "100%" }}
            id="desc"
            label="Description"
            variant="standard"
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="rating"
            label="Rating"
            variant="standard"
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="url"
            label="PosterURL"
            variant="standard"
            onChange={handleChange}
          />
        </Box>
        <Button className="btn-add" variant="outlined" onClick={handleClick}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default MovieCard;
/*
 */
