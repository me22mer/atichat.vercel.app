import FacebookIcon from "@/icons/Facebook-Icon";
import LinkedInIcon from "@/icons/LInkedIn-Icon";
import XIcon from "@/icons/X-Icon";

export default function Profile() {
  return (
    <>
      <article className="mb-2">
        <h3 className="text-5xl font-bold">Atichat Thongnak</h3>
        <p className="mb-3.5 text-[1.05rem]">
          Address: Bangkok 10220, Thailand
          <br />
          Email: atichatbusiness@gmail.com
        </p>
        <div className="flex gap-2.5 items-center">
          <FacebookIcon IconClass="fill-white hover:scale-105 duration-300" />
          <LinkedInIcon IconClass="fill-white hover:scale-105 duration-300" />
          <XIcon IconClass="fill-white hover:scale-105 duration-300" />
        </div>
      </article>
      <hr />
    </>
  );
}
