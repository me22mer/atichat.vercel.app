export default function Experience() {
  return (
    <div className="mb-16">
      <h3 className="mb-3 text-2xl font-semibold">Experience</h3>
      <div className="">
        <h4 className="mb-1 text-[1.1rem]">
          <span className="font-bold text-yellow-500">
            Volunteer<span className="text-white">,</span>
          </span>{" "}
          <span className=" text-white"> GoodGeekClub</span>{" "}
          <span className=" text-zinc-300 italic">(2022 to Present)</span>
        </h4>
        <div>
          <ul className="list-disc list-inside text-[1.05rem] space-y-1.5">
            <li>
              <a
                href="https://dseelin.co.th/"
                target="_blank"
                className="font-semibold text-zinc-400 underline decoration-dotted hover:decoration-solid"
              >
                dseelin.co.th
              </a>

              <span className="ml-2 before:content-['-'] before:mr-2">
                Create a website with Plesk hosting and Wordpress for healthy
                food products.{" "}
              </span>
            </li>
            <li>
              <a
                href="https://youthplusthailand.com/"
                target="_blank"
                className="font-semibold text-zinc-400 underline decoration-dotted hover:decoration-solid"
              >
                youthplusthailand.com
              </a>

              <span className="ml-2 before:content-['-'] before:mr-2">
                Deploy the static web page Nextjs to Plesk hosting.
              </span>
            </li>
            <li>
              Using Amazon services such as S3, Cloudfront, to host a static
              webpage.
            </li>
            <li>
              Provide IT expertise as a volunteer to benefit the less fortunate.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
