export interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-7xl mx-auto px-4">{children}</div>;
};
