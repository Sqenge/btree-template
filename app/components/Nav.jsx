import { useLocation, useNavigate } from "@remix-run/react";
import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import CreatePost from "./CreatePost";
import AppContext from "../util/context";

export default function Nav({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  let [openPost, setOpenPost] = useState(false);
  let { posts } = useContext(AppContext);

  return (
    <div className="flex flex-col">
      <div className="h-16 w-full bg-base-100 border-b-2 border-neutral fixed top-0 flex justify-center items-center text-3xl font-semibold text-neutral z-10">
        Template
      </div>
      <div className="my-16 py-2">{children}</div>
      <div className="btm-nav z-10">
        <div className="absolute rounded-t-lg shadow-lg w-full h-full transform rotate-180"></div>
        <button
          className={location.pathname === "/main" ? "active" : ""}
          onClick={() => {
            navigate("/main");
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>
        <button
          className="absolute w-16 h-16 border-2  rounded-full mb-8 text-2xl btn btn-neutral text-accent z-20"
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            setOpenPost(true);
            console.log(posts);
          }}>
          <FaPlus />
        </button>
        <button
          className={location.pathname === "/profile" ? "active" : ""}
          onClick={() => {
            navigate("/profile");
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <CreatePost isOpen={openPost} close={() => setOpenPost(false)} />
      </div>
    </div>
  );
}
