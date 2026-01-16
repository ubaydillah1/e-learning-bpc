"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username" className="b2-r">
            Username
          </Label>
          <Input
            id="username"
            type="username"
            placeholder="example@gmail.com"
            required
            className="text-sm"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password" className="b2-r">
              Password
            </Label>
          </div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            className="text-sm"
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
