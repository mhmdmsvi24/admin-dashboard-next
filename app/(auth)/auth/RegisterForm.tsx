"use client";

import * as z from "zod";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name is reqired, minimum 2 characters",
    }),
    lastName: z.string().min(2, {
      message: "Name is reqired, minimum 2 characters",
    }),
    email: z
      .string()
      .min(4, {
        message: "Email Is Required",
      })
      .email({ message: "Please Enter a Valid Email" }),
    password: z.string().min(4, {
      message: "Password Is Required",
    }),
    confirmPassword: z.string().min(4, {
      message: "Confirm Password Is Required",
    }),
  })
  .refine((input) => input.password !== input.confirmPassword, {
    message: "Password Confirmation Failed",
    path: ["confirm"],
  });

const RegisterForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = () => {
    router.push("/");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Sign up by ddding required info</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
            <div className="flex justify-center gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Name"
                        className="bg-slate-100 dark:bg-slate-500 dark:text-white border-0 
                      focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Last Name"
                        className="bg-slate-100 dark:bg-slate-500 dark:text-white border-0 
                      focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Email"
                      className="bg-slate-100 dark:bg-slate-500 dark:text-white border-0 
                      focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      className="bg-slate-100 dark:bg-slate-500 dark:text-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      className="bg-slate-100 dark:bg-slate-500 dark:text-white border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full font-bold">Sign in</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
