import Image from "next/image";

export default function Home() {
  return (
  <div className="container my-5 size-80 bg-amber-800 relative">
    <Image className="mx-auto object-contain" fill={true} src="https://cdn.smartslider3.com/wp-content/uploads/2019/05/sliderimages.png" alt="slider" />
  </div>
  );
}
