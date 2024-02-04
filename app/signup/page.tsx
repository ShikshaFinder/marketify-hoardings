"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="text" label="Name" />
      <Input type="email" label="Email" placeholder="Enter your email" />

      <Link href={"/checkmail"}>
        {" "}
        <Button color="primary" variant="shadow">
          Signup
        </Button>
      </Link>
    </div>
  );
}
