import { Controller } from "react-hook-form";
const FormField = ({ name, control, label, type = "text", rules, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
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