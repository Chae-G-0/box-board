import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationCallback } from "@/types";
import { signInAPI } from "@/api/auth";

export function useSignIn(callbakcs?: UseMutationCallback) {
  const [signInValue, setSignInValue] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });

  const handleSignInOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignInValue((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const { mutate: signInClick, isPending: isSignInPending } = useMutation({
    mutationFn: signInAPI,
    onError: (error) => {
      if (callbakcs?.onError) {
        setSignInValue((prev) => {
          return {
            ...prev,
            password: "",
          };
        });
        callbakcs.onError(error);
      }
    },
  });

  const handleSignInClick = () => {
    if (signInValue.email.trim() === "") return;
    if (signInValue.password.trim() === "") return;

    signInClick({ email: signInValue.email, password: signInValue.password });
  };

  return {
    signInValue,
    handleSignInOnChange,
    handleSignInClick,
    isSignInPending,
  };
}
