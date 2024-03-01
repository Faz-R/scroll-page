import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { postApi } from "../../services/PostService";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return <Paper>Post no founded</Paper>;
  }

  const { data: post, isLoading } = postApi.useGetPostQuery(id);

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
      {isLoading ? (
        <Box>Loading...</Box>
      ) : (
        post && (
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
        )
      )}
    </Paper>
  );
};

export default PostPage;
