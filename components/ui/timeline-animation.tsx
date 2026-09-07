"use client";
import React from "react";

interface TimelineContentProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animationNum?: number;
  customVariants?: unknown;
  timelineRef?: unknown;
}

export const TimelineContent = ({
  as: Component = "div",
  children,
  className,
  style,
}: TimelineContentProps) => {
  const El = Component as React.ElementType;
  return <El className={className} style={style}>{children}</El>;
};
