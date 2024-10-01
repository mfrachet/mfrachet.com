export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card = ({ children, onClick }: CardProps) => {
  const clickableStyles = onClick
    ? "hover:outline outline-offset-2 outline-4 cursor-pointer outline-zinc-600 active:bg-zinc-900 active:outline-zinc-700"
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
