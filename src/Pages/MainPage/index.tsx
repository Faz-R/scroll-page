import { useCallback, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { IPost } from "./interface";
import PostCard from "../../Components/PostCard";
import { postApi } from "../../services/PostService";
import { Virtuoso } from "react-virtuoso";

function MainPage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = postApi.useGetPostsQuery({
    limit: 15,
    currentPage: currentPage,
  });

  useEffect(() => {
    if (data) {
      setPosts((prev) => [...prev, ...data]);
    }
  }, [data]);

  const loadMore = useCallback(() => {
    setCurrentPage((page) => page + 1);
    return () => {
      const data = postApi.useGetPostsQuery({
        limit: 15,
        currentPage: currentPage,
      }).data;
      if (data?.length) setPosts((users) => [...users, ...data]);
    };
  }, [currentPage]);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Virtuoso
          style={{ height: window.innerHeight }}
          data={posts}
          endReached={loadMore}
          itemContent={(index, post) => {
            return <PostCard post={post} key={index} />;
          }}
        />
      </Container>
    </>
  );
}

export default MainPage;
