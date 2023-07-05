"use client";
import { useState } from "react";
import { encode } from "@/utils/zer";

export default function Home() {
  const [url, setUrl] = useState("https://");
  const encoded =
    new URL(`/`, new URL((globalThis as any).window?.location.href)).href +
    encode(url);
  return (
    <main className="flex flex-col">
      <section className="flex flex-col text-center">
        <h1 className="text-5xl p-4"> Zer </h1>
        <span>
          {" "}
          URL Shortener are boring, they give us 5 characters (exclude domain)
        </span>
        <span>
          {" "}
          Try Zer URL Zeroer, you won`t see any chars except the domain{" "}
        </span>
        <span>Zer also has Zero Database.</span>
      </section>
      <form className="mx-auto p-8 flex flex-col items-stretch w-full max-w-sm">
        <label className="block w-full">
          <span className="text-sm block"> URL to be zeroed </span>
          <input
            type="url"
            name="url"
            defaultValue={url}
            onChange={(e) => setUrl(e.currentTarget.value)}
            className="bg-zinc-200 w-full p-2 text-zinc-800 rounded peer"
          />
          <span className="invisible peer-invalid:visible w-full text-red-500">
            Invalid url {url}
          </span>
        </label>
        <label className="block w-full">
          <span className="text-sm block"> Zeroed URL</span>
          <div className="flex flex-row rounded overflow-hidden">
            <input
              type="url"
              disabled
              name="url"
              value={encoded}
              className="bg-zinc-200 w-full p-2 text-zinc-800"
            />
            <button
              className="bg-sky-600 text-zinc-900 px-1"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(url).catch(() => {});
              }}
            >
              {" "}
              Copy{" "}
            </button>
          </div>
        </label>
      </form>
    </main>
  );
}
