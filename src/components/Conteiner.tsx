export default function Conteiner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-[1440px] mx-auto p-4 ${className}`}>{children}</div>
  );
}
