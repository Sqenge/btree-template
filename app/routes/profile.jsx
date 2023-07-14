import { useContext, useState } from "react";
import Nav from "../components/Nav";
import { FaRegHeart } from "react-icons/fa";
import AppContext from "../util/context";
import PostComment from "../components/PostComment";

export const meta = () => {
  return [{ title: "" }, { name: "description", content: "" }];
};

export default function Index() {
  let { posts, user } = useContext(AppContext);
  let [openComment, setOpenComment] = useState(undefined);

  return (
    <Nav>
      <div className="flex flex-col px-3 h-full">
        <div className="text-3xl font-semibold">Profile</div>
        <div className="flex gap-4 text-2xl font-medium mt-3">
          <div className="avatar">
            <div className="w-24 mask mask-squircle bg-neutral"></div>
          </div>
          <div>
            <div>{user.username}</div>
            <div>{user.password}</div>
          </div>
        </div>
        <div className="text-xl font-medium mt-3 flex border-b-2 border-neutral">
          Posts
        </div>
        <div className="grid grid-cols-3 w-full gap-1 mt-1">
          {posts.map((v) => (
            <div
              className="bg-accent"
              style={{ aspectRatio: 1 }}
              onClick={() => setOpenComment(v)}></div>
          ))}
        </div>
      </div>
      <PostComment post={openComment} close={() => setOpenComment(undefined)} />
    </Nav>
  );
}
