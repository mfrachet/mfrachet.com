export interface BannerProps {
  children: React.ReactNode;
}

export const Banner = ({ children }: BannerProps) => {
  return (
    <div className="py-2 px-4 text-center bg-orange-300 text-slate-900">
      {children}
    </div>
  );
};
