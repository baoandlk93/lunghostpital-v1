import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen text-black flex items-center justify-center bg-[#f5f5f5]">
        <h1 className="text-4xl font-bold">Bệnh viện Phổi Khánh Hòa</h1>
      </div>
    </>
  );
}
