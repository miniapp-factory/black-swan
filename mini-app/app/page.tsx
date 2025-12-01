"use client";
import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export { generateMetadata };

export default function Home() {
  const [address, setAddress] = useState("");
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <form className="flex flex-col gap-2 mt-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter token or contract address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button type="button" onClick={() => { /* placeholder for scan action */ }}>
          Scan
        </Button>
      </form>
    </main>
  );
}
