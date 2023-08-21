export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card = ({ children, onClick }: CardProps) => {
  const clickableStyles = onClick
    ? "hover:outline outline-offset-2 outline-4 cursor-pointer outline-stone-600 active:bg-stone-900 active:outline-stone-700"
    : "";

  return (
    <div
      onClick={onClick}
      className={`rounded-3xl bg-stone-800 h-full transition-all ${clickableStyles}`}
    >
      {children}
    </div>
  );
};
