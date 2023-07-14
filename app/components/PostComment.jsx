import { useContext, useState } from "react";
import AppContext from "../util/context";

export default function PostComment({ post, close }) {
  let { posts, setPosts, user } = useContext(AppContext);
  let [comment, setComment] = useState();

  function postComment() {
    if (!!comment) {
      post.comments.push({ username: user.username, text: comment });
    } else {
      alert("You need to write something");
    }
  }

  return (
    <div
      className={
        "fixed bottom-0 w-full z-30 border rounded-t-2xl bg-base-100 shadow-xl duration-500 " +
        (post !== undefined ? "h-96" : "h-0 -bottom-10")
      }
      onClick={(ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      }}>
      <div className="modal-box w-full h-full flex flex-col rounded-b-none relative pr-5">
        <div className="text-lg font-semibold h-6">{post?.username}</div>
        <div className="text-lg">{post?.description}</div>

        <div className="border-t-2 border-neutral mt-2"></div>
        <div className="overflow-auto py-2">
          {post?.comments?.map((v, i) => (
            <div
              key={i}
              className="flex flex-col border-t border-b border-gray-200">
              <div className="font-medium text-sm">{v.username}</div>
              <div className="text-sm ml-1">{v.text}</div>
            </div>
          ))}
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col bottom-2 w-full bg-base-100 border-t-2 border-neutral">
          <div className="ml-3">write your comment</div>
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item focus:outline-none"
                  placeholder="Search..."
                  value={comment}
                  onChange={(ev) => setComment(ev.target.value)}
                />
              </div>
            </div>
            <div className="indicator">
              <button
                className="btn join-item"
                onClick={() => {
                  postComment();
                  setComment("");
                }}>
                Post
              </button>
            </div>
          </div>
        </div>

        <button
          className="btn btn-sm btn-circle absolute right-2 top-2 hover:btn-ghost"
          onClick={close}>
          ✕
        </button>
      </div>
    </div>
  );
}
