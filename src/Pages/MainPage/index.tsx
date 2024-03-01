import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { IPost } from "./interface";
import PostCard from "../../Components/PostCard";
import { postApi } from "../../services/PostService";

function MainPage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { data } = postApi.useGetPostsQuery(currentPage);

  useEffect(() => {
    if (data) {
      setPosts((prev) => [...prev, ...data]);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    const scrollHandler = () => {
      if (
        !loading &&
        document.documentElement.scrollHeight -
          (document.documentElement.scrollTop + window.innerHeight) <
          100 &&
        data?.length
      ) {
        setLoading(true);
        setCurrentPage((prev) => prev + 1);
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [data, loading, posts.length]);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {posts.map((post, index) => {
          return <PostCard post={post} key={index} />;
        })}
        {loading && <div>Loading...</div>}
      </Container>
    </>
  );
}

export default MainPage;
