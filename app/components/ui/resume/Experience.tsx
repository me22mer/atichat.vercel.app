export default function Experience() {
  return (
    <>
      <h1 className="text-3xl">Experience</h1>
      <h2 className="mb-1 font-semibold text-xl tracking-tighter">
        GoodGeekClub
      </h2>
      <p className="mb-1 text-base text-neutral-400">Web Developer, 2022 — Present</p>
      <ul className="pl-5 list-disc list-outside [&_ul]:list-[revert] text-[1rem] space-y-1.5 list-">
        <li>
          <a
            href="https://dseelin.co.th/"
            target="_blank"
            className="font-semibold text-lg no-underline"
          >
            dseelin.co.th
          </a>{" "}
          Create a website with Plesk hosting and Wordpress for healthy food
          products.
        </li>
        <li>
          <a
            href="https://youthplusthailand.com/"
            target="_blank"
            className="font-semibold text-lg no-underline"
          >
            youthplusthailand.com
          </a>{" "}
          Deploy the static web page Next.js to Plesk hosting.
        </li>
        <li>
          Using Amazon services such as S3, Cloudfront, to host a static
          webpage.
        </li>
        <li>
          Provide IT expertise as a volunteer.
        </li>
      </ul>

      <hr />
    </>
  );
}
