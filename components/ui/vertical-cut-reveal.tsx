"use client";
import React from "react";

interface VerticalCutRevealProps {
  children?: React.ReactNode;
  className?: string;
  splitBy?: string;
  staggerDuration?: number;
  staggerFrom?: string;
}

export const VerticalCutReveal = ({
  children,
  className,
}: VerticalCutRevealProps) => {
  return <div className={className}>{children}</div>;
};
