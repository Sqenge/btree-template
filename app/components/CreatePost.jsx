import { useContext, useState } from "react";
import AppContext from "../util/context";

export default function CreatePost({ isOpen, close }) {
  let { posts, setPosts, user } = useContext(AppContext);
  let [description, setDescription] = useState("");
  return (
    <div
      className={
        "fixed bottom-0 w-full z-30 border rounded-t-2xl bg-base-100 shadow-xl duration-500 " +
        (isOpen ? "h-96" : "h-0 -bottom-10")
      }
      onClick={(ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      }}>
      <div className="modal-box w-full h-full flex flex-col rounded-b-none">
        <div className="text-2xl font-semibold">Create a Post</div>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs mt-2"
        />
        <div className="mt-4 font-medium">Write Description</div>
        <textarea
          className="textarea textarea-bordered mt-1 overflow-y-auto h-40"
          placeholder="Bio"
          onChange={(ev) => setDescription(ev.target.value)}></textarea>
        <button
          className="btn btn-neutral flex self-end mt-2"
          onClick={() => {
            setPosts([
              ...posts,
              {
                username: user.username,
                description: description,
                likes: 0,
                comments: [],
              },
            ]);
            close();
          }}>
          POST
        </button>
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2 hover:btn-ghost"
          onClick={close}>
          ✕
        </button>
      </div>
    </div>
  );
}
