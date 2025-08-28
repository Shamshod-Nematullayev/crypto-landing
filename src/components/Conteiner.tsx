export default function Conteiner({
  children,
  className,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div className={`w-[1440px] mx-auto p-4 ${className}`} ref={ref}>
      {children}
    </div>
  );
}
