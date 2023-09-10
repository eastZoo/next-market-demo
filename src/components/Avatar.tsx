"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="w-10 h-10 rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "https://via.placeholder.com/400x400?text=no+user+image"}
    />
  );
};

export default Avatar;
