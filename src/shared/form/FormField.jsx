'use client';
import { useState, useEffect } from 'react';
import { Controller } from "react-hook-form";

const FormField = ({ name, control, label, type = "text", rules, placeholder }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a skeleton or null during SSR to prevent mismatch
  if (!mounted) {
    return (
      <div className="flex flex-col gap-1">
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
        <div className="h-10 w-full bg-gray-100 animate-pulse rounded-md border border-gray-300" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue="" // Ensure this matches the server default!
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`w-full px-3 py-2 border rounded-md transition-colors focus:outline-none focus:ring-2 
                ${error 
                  ? "border-red-500 focus:ring-red-200" 
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
                }`}
            />
            {error && (
              <span className="text-xs text-red-500 mt-1 italic font-medium">
                {error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default FormField;