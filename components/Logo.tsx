import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC<{ linkClass?: string }> = ({ linkClass = "" }) => {
  return (
    <Link className={linkClass} href="/">
      <Image width={142} height={43} src="/images/logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
