"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Swap } from "swap-component/dist/components.es";

function Page() {
  return (
    <div>
      <ConnectButton />
      <Swap></Swap>
    </div>
  );
}

export default Page;
