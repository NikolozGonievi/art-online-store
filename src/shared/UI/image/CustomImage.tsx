import Image from "next/image";

interface IProps {
  src: any;
  alt: string;
  width: number;
  height: number;
}

export default function CustomImage({ src, alt, width, height }: IProps) {
  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} />
    </>
  );
}
