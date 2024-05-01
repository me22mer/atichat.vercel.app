import Image from "next/image";

import Icon from "../../../public/images/A-black.png";

export default function Logo() {
  return (
    <Image
      src={Icon}
      alt=""
      width={35}
      height={35}
      className="rounded"
      quality={100}
    />
  );
}
