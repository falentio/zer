"use client";
import { useState } from "react";
import { encode } from "@/utils/zer";

export default function Home() {
  const [url, setUrl] = useState("https://");
  const [copied, setCopied] = useState(false);
  const encoded =
    new URL(
      `/`,
      new URL((globalThis as any).window?.location.href || "http://foo.com")
    ).href + encode(url);
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
            className="bg-zinc-200 w-full p-2 text-zinc-800 peer"
          />
          <span className="invisible peer-invalid:visible w-full text-red-500">
            Invalid url {url}
          </span>
        </label>
        <label className="block w-full">
          <span className="text-sm block"> Zeroed URL</span>
          <div className="flex flex-row overflow-hidden">
            <input
              type="url"
              disabled
              name="url"
              value={encoded}
              className="w-full p-2 bg-zinc-900 text-sky-300 border border-sky-500"
            />
            <button
              className="bg-sky-600 text-zinc-900 px-1"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(encoded).catch(() => {});
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 600);
              }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </label>
      </form>
    </main>
  );
}
