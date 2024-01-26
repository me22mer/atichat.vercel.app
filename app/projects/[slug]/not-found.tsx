'use client'

import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full flex fixed backdrop-blur duration-200 bg-zinc-900/0">
      <div className="p-6">
        <span>
          <a href="/projects" aria-label="arrow navigator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="invert-[.45]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </a>
        </span>
      </div>
    </nav>
      <div className="w-full bg-black">
        <div className="py-24 sm:py-32 flex justify-center bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
          <div className=" px-6 flex flex-col text-center">
            {/* <time className="mb-6 text-lg  text-zinc-300">{pubDate}</time> */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              Not found : &quot;{pathname}&quot;
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-zinc-300">{subtitle}</p> */}
          </div>
        </div>
        <div className="bg-white">
          <div className="">
            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
              {/* <section dangerouslySetInnerHTML={{ __html: contentHtml }} /> */}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
