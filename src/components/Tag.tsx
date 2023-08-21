export interface TagProps {
  children: React.ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return (
    <span className="rounded-full bg-stone-700 text-stone-300 px-4 py-2">
      {children}
    </span>
  );
};
