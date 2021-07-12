import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment } from "../features/counter/counterSlice";
import { fetchPost } from "../features/post/postSlice";

export default function Home() {
  const counterState = useAppSelector((state) => state.counter);
  const { posts, loading, errorMsg } = useAppSelector(
    (state) => state.postsSlice
  );
  const dispatch = useAppDispatch();
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <>
      <h1>Fetching data</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <h2>Value: {counterState.value}</h2>
      <div>{errorMsg && <p>{errorMsg}</p>}</div>
      <div>
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
              </div>
            );
          })}
      </div>
      {/* <div>
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <div>{item.body}</div>
              </div>
            );
          })}
      </div> */}
    </>
  );
}
