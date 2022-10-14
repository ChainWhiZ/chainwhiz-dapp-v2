import Image from 'next/image';

export default function RenderStyledImage({
  src,
  className = '',
  alt = '',
}: {
  src: string;
  className?: string;
  alt?: string;
}) {
  return (
    <div className={className} style={{ position: 'relative' }}>
      <Image src={src} layout="fill" alt={alt} />
    </div>
  );
}
