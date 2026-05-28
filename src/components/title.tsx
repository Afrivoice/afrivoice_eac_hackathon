import type React from "react";

// Utils
import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-5xl text-center font-bold leading-14", className)}>
      {children}
    </p>
  );
};

export default Title;
