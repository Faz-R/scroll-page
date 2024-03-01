import { Box, Button, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../MainPage/interface";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({} as IPost);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "30px",
        padding: "30px",
      }}
    >
      {loading ? (
        <Box>Loading...</Box>
      ) : (
        <>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <Typography>#{id}</Typography>
            <Typography>Title: {post.title}</Typography>
          </Box>
          <Box>Description: {post.body}</Box>
          <Button
            variant="contained"
            sx={{ justifySelf: "center" }}
            onClick={() => {
              navigate(-1);
            }}
          >
            Назад
          </Button>
        </>
      )}
    </Paper>
  );
};

export default PostPage;
