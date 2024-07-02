export default function Experience() {
  return (
    <>
      <h1 className="text-3xl underline decoration-zinc-700 decoration-4">
        Experience
      </h1>
      <h2 className="mb-1 font-semibold text-xl tracking-tighter">
        GoodGeekClub
      </h2>
      <p className="mb-1 text-base text-neutral-400">
        Web Developer, 2022 — Present
      </p>
      <p
        className="leading-loose"
      >
        I created a website with Plesk hosting and WordPress for healthy food
        products at{" "}
        <a
          href="https://dseelin.co.th/"
          target="_blank"
          className="no-underline "
        >
          dseelin.co.th
        </a>
        , deployed a static web page using{" "}
        <a href="https://nextjs.org/" target="_blank" className="no-underline">
          Next.js
        </a>{" "}
        and implemented an internationalization feature with{" "}
        <a
          href="https://next-intl-docs.vercel.app/"
          target="_blank"
          className="no-underline"
        >
          next-intl
        </a>{" "}
        for{" "}
        <a
          href="https://youthplusthailand.com/"
          target="_blank"
          className="no-underline"
        >
          youthplusthailand.com
        </a>
        , hosted static web pages with{" "}
        <a
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          Amazon Web Services
        </a>{" "}
        (including CloudFront, S3, and EC2), and provided IT expertise as a
        volunteer.
      </p>

      <hr />
    </>
  );
}
