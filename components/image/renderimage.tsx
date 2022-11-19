import Image from 'next/image';

export default function RenderImage({
  src,
  alt = '',
}: {
  src: string;
  alt?: string;
}) {
  return <Image src={src} layout="fill" alt={alt} />;
}
