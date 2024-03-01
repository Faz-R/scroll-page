import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { IPost } from "./interface";
import PostCard from "../../Components/PostCard";

function MainPage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(26);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?_limit=25&_page=${currentPage}`
        )
        .then((response) => {
          setPosts([...posts, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [currentPage, fetching, posts]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
        100 &&
      posts.length < totalCount
    ) {
      setFetching(true);
    }
  };

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
      </Container>
    </>
  );
}

export default MainPage;
