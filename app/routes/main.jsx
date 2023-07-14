import { useContext, useState } from "react";
import Nav from "../components/Nav";
import { FaRegHeart } from "react-icons/fa";
import AppContext from "../util/context";
import PostComment from "../components/PostComment";

export const meta = () => {
  return [{ title: "" }, { name: "description", content: "" }];
};

export default function Index() {
  let { posts, setPosts, user } = useContext(AppContext);

  let [openComment, setOpenComment] = useState(undefined);

  function likePost(index) {
    let temp = [...posts];
    temp[index].likes++;
    setPosts(temp);
  }

  return (
    <Nav>
      <div className="flex justify-center flex-col items-center gap-5 overflow-y-auto">
        <div className="card w-80 bg-base-100 shadow-xl overflow-hidden">
          <div className="bg-neutral w-80 h-40 flex justify-center items-center text-3xl font-bold text-accent">
            Remix App
          </div>
          <div className="card-body pt-2 px-3 max-h-32">
            <div className="flex justify-between">
              <div className="font-semibold">ID</div>
              <div className="flex gap-1">
                <button className="text-2xl btn p-0 border-none flex-none min-h-0 h-5 bg-transparent">
                  <FaRegHeart />
                </button>
                <div>{35}</div>
              </div>
            </div>
            <p
              className="leading-4 line-clamp-3"
              style={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "3",
              }}>
              text
            </p>
          </div>
        </div>

        {posts.map((v, i) => (
          <div
            key={i}
            className="card w-80 bg-base-100 shadow-xl overflow-hidden">
            <div className="bg-neutral w-80 h-40 flex justify-center items-center text-3xl font-bold text-accent">
              Remix App
            </div>
            <div
              className="card-body pt-2 px-3 max-h-32"
              onClick={() => setOpenComment(v)}>
              <div className="flex justify-between">
                <div className="font-semibold">{user.username}</div>
                <div className="flex gap-1">
                  <button
                    className="text-2xl btn p-0 border-none flex-none min-h-0 h-5 bg-transparent"
                    onClick={(ev) => {
                      ev.stopPropagation();
                      likePost(i);
                    }}>
                    <FaRegHeart />
                  </button>
                  <div>{v.likes}</div>
                </div>
              </div>
              <p
                className="leading-4 line-clamp-3"
                style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "3",
                }}>
                {v.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <PostComment post={openComment} close={() => setOpenComment(undefined)} />
    </Nav>
  );
}
