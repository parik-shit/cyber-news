import Image from "next/image";
import { BentoGridDemo } from "./components/BentoGridDemo";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <main className="flex min-h-screen bg-white dark:bg-black flex-col items-center justify-between border border-white p-24">
      <div className=" border items-center justify-center border-blue-400 ">
      <p className="ml-[45rem] text-[90px] font-semibold text-green-300 font-jacquard12">CODEX</p>

        
      </div>
      <div className="border border-blue-400">

      <BentoGridDemo/>
      </div>
      <Separator/>
    </main>
  );
}
