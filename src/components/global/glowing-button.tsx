"use client";
import React from "react";
import { HoverBorderGradient } from "../helpers/hover-border-gradient";

export function GlowingButton({ title }: { title: string }) {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>{title}</span>
      </HoverBorderGradient>
    </div>
  );
}
