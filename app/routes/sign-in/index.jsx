import { useContext, useState } from "react";
import AppContext from "../../util/context";
import { useNavigate } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Sign In" },
    { name: "description", content: "Sign in to your app" },
  ];
};

export default function Index() {
  let { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="card w-80 bg-base-100 shadow-xl overflow-hidden">
        <div className="bg-neutral w-80 h-48 flex justify-center items-center text-3xl font-bold text-accent">
          Remix App
        </div>
        <div className="card-body">
          <h2 className="card-title">Sign In</h2>
          <label>ID</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <div className="card-actions justify-end">
            <button
              className="btn btn-neutral"
              onClick={() => {
                setUser({ username: username, password, password });
                navigate("/main");
              }}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
