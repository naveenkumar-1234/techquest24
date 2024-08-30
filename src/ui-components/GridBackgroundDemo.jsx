import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `TECHQUEST 24`
const word2="MOUNT ZION COLLEGE OF ENGINEERING AND TECHNOLOGY"


export function GridBackgroundDemo() {
  return (
    (<div
      className="h-screen w-full bg-white   bg-grid-black/[0.2]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p
        className="text-center text-black text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b px-5  py-3">
        <TextGenerateEffect  duration={2} filter={false} words={words} />
        <TextGenerateEffect  duration={2} filter={false} words={word2} />
      </p>
      <h1>
</h1>
    </div>)
  );
}
