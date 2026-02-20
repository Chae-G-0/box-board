import { Link } from "react-router";
import { useSignUp } from "@/hooks/mutations/use-sign-up";
import { generateErrorMessage } from "@/lib/error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function SignInPage() {
  const {
    signUpValue,
    handleSignUpOnChange,
    handleSignUpClick,
    isSignUpPending,
  } = useSignUp({
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: "top-center",
      });
    },
  });

  return (
    <>
      <div className="pb-4 text-2xl font-bold">회원가입</div>
      <div className="flex flex-col gap-2">
        <div className="text-md font-medium">Email</div>
        <Input
          id="email"
          value={signUpValue.email}
          onChange={handleSignUpOnChange}
          placeholder="example@abc.com"
          disabled={isSignUpPending}
        />
        <div className="text-md font-medium">Password</div>
        <Input
          id="password"
          type="password"
          value={signUpValue.password}
          onChange={handleSignUpOnChange}
          placeholder="password"
          disabled={isSignUpPending}
        />
        <Button
          className="mt-2"
          onClick={handleSignUpClick}
          disabled={isSignUpPending}
        >
          회원가입
        </Button>
        <Link to="/sign-in">이미 계정이 있다면? 로그인</Link>
      </div>
    </>
  );
}
