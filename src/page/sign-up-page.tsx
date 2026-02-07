import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpClick = () => {};

  return (
    <>
      <div className="pb-4 text-2xl font-bold">Sign up</div>
      <div className="flex flex-col gap-2">
        <div className="text-md font-medium">Email</div>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@abc.com"
        />
        <div className="text-md font-medium">Password</div>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <Button className="mt-2" onClick={handleSignUpClick}>
          회원가입
        </Button>
        <Button variant={"outline"} onClick={() => navigate("/sign-in")}>
          로그인
        </Button>
      </div>
    </>
  );
}
