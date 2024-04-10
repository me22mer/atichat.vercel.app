export default function Experience() {
  return (
    <div className="mb-16">
      <h3 className="mb-3 text-2xl font-semibold">Experience</h3>
      <div className="">
        <h4 className="mb-1 text-[1.05rem]">
          <span className="font-bold ">
            Website Developer<span className="text-white">,</span>
          </span>{" "}
          <span className=" text-white"> GoodGeekClub</span>{" "}
          <span className=" text-zinc-300 italic">(2022 to Present)</span>
        </h4>
        <div>
          <ul className="pl-5 list-disc list-outside [&_ul]:list-[revert] text-[1rem] space-y-1.5">
            <li>
              <a
                href="https://dseelin.co.th/"
                target="_blank"
                className="font-semibold text-lg  duration-500 underline decoration-dotted underline-offset-4 hover:decoration-solid "
              >
                dseelin.co.th
              </a>

              <ul className="mt-1.5 list-inside">
                <li>
                  Create a website with Plesk hosting and Wordpress for healthy
                  food products.
                </li>
              </ul>
            </li>
            <li>
              <a
                href="https://youthplusthailand.com/"
                target="_blank"
                className="font-semibold text-lg duration-500 underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                youthplusthailand.com
              </a>

              <ul className="mt-1.5 list-inside">
                <li>Deploy the static web page Next.js to Plesk hosting.</li>
              </ul>
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
