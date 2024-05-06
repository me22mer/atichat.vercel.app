export default function Experience() {
  return (
    <>
      <h1 className="text-3xl">Experience</h1>
      <h2 className="mb-1 font-semibold text-xl tracking-tighter">
        GoodGeekClub
      </h2>
      <p className="mb-1 text-base text-neutral-400">
        Web Developer, 2022 — Present
      </p>
      <ul className="pl-5 list-disc list-outside [&_ul]:list-[revert] text-[1rem] space-y-1.5 list-">
        <li>
          <a
            href="https://dseelin.co.th/"
            target="_blank"
            className="font-semibold text-lg no-underline"
          >
            dseelin.co.th
          </a>{" "}
          <ul>
            <li>
              {" "}
              Create a website with Plesk hosting and Wordpress for healthy food
              products.
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://youthplusthailand.com/"
            target="_blank"
            className="font-semibold text-lg no-underline"
          >
            youthplusthailand.com
          </a>{" "}
          <ul>
            <li>
              Deploy the static web page{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="no-underline"
              >
                Next.js
              </a>{" "}
              to Plesk hosting.
            </li>
            <li>
              Create an Internationalization feature by using{" "}
              <a
                href="https://next-intl-docs.vercel.app/"
                target="_blank"
                className="no-underline"
              >
                next-intl.
              </a>
            </li>
          </ul>
        </li>
        <li>
          Hosting static web pages with{" "}
          <a
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            Amazon Web Services
          </a>{" "}
          such as CloudFront, S3, and EC2.
        </li>
        <li>Provide IT expertise as a volunteer.</li>
      </ul>

      <hr />
    </>
  );
}
