import { useSignIn } from "@/hooks/mutations/use-sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { generateErrorMessage } from "@/lib/error";
import { Link } from "react-router";

export default function SignInPage() {
  const {
    signInValue,
    handleSignInOnChange,
    handleSignInClick,
    isSignInPending,
  } = useSignIn({
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: "top-center",
      });
    },
  });

  return (
    <>
      <div className="pb-4 text-2xl font-bold">로그인</div>
      <div className="flex flex-col gap-2">
        <div className="text-md font-medium">Email</div>
        <Input
          id="email"
          value={signInValue.email}
          onChange={handleSignInOnChange}
          placeholder="example@abc.com"
          disabled={isSignInPending}
        />
        <div className="text-md font-medium">Password</div>
        <Input
          id="password"
          type="password"
          value={signInValue.password}
          onChange={handleSignInOnChange}
          placeholder="password"
          disabled={isSignInPending}
        />
        <Button
          className="mt-2"
          onClick={handleSignInClick}
          disabled={isSignInPending}
        >
          로그인
        </Button>
        <Link to={"/sign-up"}>계정이 없다면? 회원가입</Link>
      </div>
    </>
  );
}
