import ThemeToggler from "@/components/ThemeToggler";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-svh flex justify-center items-center relative">
      {children}
      <div className="absolute bottom-5 right-0 text-white">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default AuthLayout;
