import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

const RootLayouts = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">InterQuest</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayouts;
