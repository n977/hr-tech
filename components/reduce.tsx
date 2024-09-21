import { cn } from "@/lib/utils";

export function Reduce({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}

Reduce.Body = function ({ children }: { children: React.ReactNode }) {
  return <div className="hidden md:flex gap-2">{children}</div>;
};

Reduce.Body.displayName = "ReduceBody";

Reduce.Button = function ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <button className={cn("md:hidden p-2", className)}>{children}</button>;
};

Reduce.Button.displayName = "ReduceButton";
