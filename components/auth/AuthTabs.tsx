import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginForm from "@/app/(auth)/auth/LoginForm";
import RegisterForm from "@/app/(auth)/auth/RegisterForm";

const AuthTabs = () => {
  return (
    <Tabs defaultValue="Login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Login">Login</TabsTrigger>
        <TabsTrigger value="Register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
        <LoginForm></LoginForm>
      </TabsContent>
      <TabsContent value="Register">
        <RegisterForm></RegisterForm>
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
