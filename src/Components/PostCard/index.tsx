import { Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { PostProps } from "./interface";
import { FC } from "react";

const PostCard: FC<PostProps> = ({ post }) => {
  return (
    <Paper
      variant="elevation"
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
        alignItems: "center",
        padding: "20px",
        margin: "20px",
      }}
    >
      <Typography sx={{ flex: 1, minWidth: "20px" }}>#{post.id}</Typography>
      <Typography sx={{ flex: 4, minWidth: "200px" }}>
        Title: {post.title}
      </Typography>
      <Typography
        sx={{
          flex: "7 1",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          minWidth: "200px",
        }}
      >
        Description: {post.body}
      </Typography>

      <Button
        component={Link}
        to={`/${post.id}`}
        sx={{ justifySelf: "center" }}
        variant="contained"
      >
        Просмотр
      </Button>
    </Paper>
  );
};

export default PostCard;
