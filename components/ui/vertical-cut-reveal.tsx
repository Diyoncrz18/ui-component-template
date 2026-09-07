"use client";
import React from "react";

interface VerticalCutRevealProps {
  children?: React.ReactNode;
  className?: string;
  splitBy?: string;
  staggerDuration?: number;
  staggerFrom?: string;
  transition?: any;
  containerClassName?: string;
  [key: string]: any;
}

export const VerticalCutReveal = ({
  children,
  className,
  containerClassName,
  ...props
}: VerticalCutRevealProps) => {
  return <div className={containerClassName || className} {...props}>{children}</div>;
};

