import { useMutation } from "@tanstack/react-query";
import { signup as singupApi } from "./apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: singupApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Account successfully created! please veryfiy the new account from users's email address."
      );
    },
  });

  return { signup, isLoading };
}
