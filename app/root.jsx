import { cssBundleHref } from "@remix-run/css-bundle";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import AppContext from "./util/context";
import { useState } from "react";

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  let [posts, setPosts] = useState([]);
  let [user, setUser] = useState({ username: "", password: "" });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />

        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@3.2.1/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"
        />
      </head>
      <AppContext.Provider value={{ posts, setPosts, user, setUser }}>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </AppContext.Provider>
    </html>
  );
}
