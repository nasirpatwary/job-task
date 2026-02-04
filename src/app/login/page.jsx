"use client";
import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";
import { setCookie } from "cookies-next";
import FormField from "@/shared/form/FormField";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    setCookie('auth_token', 'true');
    window.location.href = "/items";
    setLoading(true);
    setTimeout(() => {
      toast.success("Subscribed successfully!");
      setLoading(false);
    }, 1500);
    reset();
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Mock Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <FormField
          name="email"
          label="Your Email"
          control={control}
          placeholder="Enter Your Email"
          rules={{ required: "Email is required" }}
        />
          <FormField
          name="password"
          label="Your Password"
          control={control}
          placeholder="Enter Your Password"
          rules={{ required: "Password is required" }}
        />
        
         
        <div className="text-end">
          <button
          type="submit"
          className="w-full md:w-fit btn text-end bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-100"
        >
          {loading ? (
                <span className="flex items-center gap-2">
                  Submitting{" "}
                  <TbFidgetSpinner className="animate-spin" size={20} />
                </span>
              ) : (
                "Login"
              )}
        </button>
        </div>
      </form>
    </div>
  );
}