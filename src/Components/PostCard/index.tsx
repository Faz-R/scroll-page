import { Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { PostProps } from "./interface";

const PostCard = ({ post }: PostProps) => {
  return (
    <Paper
      variant="elevation"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography sx={{ flex: 1 }}>#{post.id}</Typography>
      <Typography sx={{ flex: 4 }}>{post.title}</Typography>
      <Typography
        sx={{
          flex: 10,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {post.body}
      </Typography>

      <Button component={Link} to={`/${post.id}`} variant="contained">
        Просмотр
      </Button>
    </Paper>
  );
};

export default PostCard;
