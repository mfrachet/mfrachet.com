export interface BannerProps {
  children: React.ReactNode;
}

export const Banner = ({ children }: BannerProps) => {
  return (
    <div className="py-2 px-4 text-center bg-orange-200 text-zinc-900">
      {children}
    </div>
  );
};
