import { cn } from "@/lib/utils";

const Width = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={cn(
        className,
        "xl:w-[95%] lg:w-[1000px] md:w-[750px] sm:w-[600px] w-full px-4"
      )}
    >
      {children}
    </section>
  );
};

export default Width;
