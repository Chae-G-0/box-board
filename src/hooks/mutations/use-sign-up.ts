import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signUpAPI } from "@/api/auth";
import type { UseMutationCallback } from "@/types";

export function useSignUp(callbacks?: UseMutationCallback) {
  const [signUpValue, setSignUpValue] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });

  const handleSignUpOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignUpValue((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const { mutate: signUpClick, isPending: isSignUpPending } = useMutation({
    mutationFn: signUpAPI,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });

  const handleSignUpClick = () => {
    if (signUpValue.email.trim() === "") return;
    if (signUpValue.password.trim() === "") return;

    signUpClick({ email: signUpValue.email, password: signUpValue.password });
  };

  return {
    signUpValue,
    handleSignUpOnChange,
    handleSignUpClick,
    isSignUpPending,
  };
}
