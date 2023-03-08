export interface LineProps {
  size?: "S" | "M";
}

const SizeClass = {
  S: "w-4",
  M: "w-24",
};

export const Line = ({ size = "M" }: LineProps) => {
  const sizeClass = SizeClass[size];

  return (
    <div aria-hidden className={`h-1 bg-slate-300 rounded-full ${sizeClass}`} />
  );
};
