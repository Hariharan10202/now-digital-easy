import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

interface LoginProps {
  setUser: (auth: boolean) => void;
  setActiveIndex: (activeIndex: number) => void;
}

const Login = ({ setUser, setActiveIndex }: LoginProps) => {
  return (
    <div className="py-10 px-[86px]">
      <div className="flex flex-col">
        <span className="font-bold">Existing User?</span>
        <span>Please sign in with your credentials below to continue.</span>
        <div className="flex flex-col gap-y-3 py-5 w-full">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
          <div className="flex justify-end">
            <p className="underline text-bg-primary mt-2">Forgot Password</p>
          </div>
          <div className="flex flex-col items-center w-full">
            <div>
              <Button
                onClick={() => setActiveIndex(2)}
                className="bg-bg-primary text-white px-10 py-2 rounded-md"
              >
                Login
              </Button>
            </div>
            <p className="mt-3">
              New to NowDigitalEasy?
              <span
                onClick={() => setUser(false)}
                className="ml-2 underline text-bg-primary font-semibold"
              >
                Sign up here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
