import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function CustomImage({ src, alt }: Props) {
  return (
    <div className="mb-6 overflow-hidden rounded-md w-full md:w-[672px] h-[400px]">
      <Image
        className=" w-full h-full rounded-lg duration-1000 "
        src={src}
        alt={alt}
        style={{ objectFit: "cover" }}
        width={672}
        height={400}
        quality={100}
        sizes="(max-width: 1024px) 100vw"
        priority
      />
    </div>
  );
}
