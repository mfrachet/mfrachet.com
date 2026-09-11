export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card = ({ children, onClick }: CardProps) => {
  const clickableStyles = onClick
    ? "outline-4 outline-offset-2 outline-transparent hover:outline-zinc-600 cursor-pointer active:bg-zinc-900 active:outline-zinc-700"
    : "";

  return (
    <div
      onClick={onClick}
      className={`rounded-3xl bg-zinc-800 h-full transition-all ${clickableStyles}`}
    >
      {children}
    </div>
  );
};
