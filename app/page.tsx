"use client";

import Live from "./LiveBlocks/Live";
import { Room } from "./LiveBlocks/Room";

export default function Home() {
  return (
    <>
      <Room>
          <Live />
      </Room>
    </>
  );
}
