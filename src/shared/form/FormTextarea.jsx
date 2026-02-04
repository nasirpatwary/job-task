import { Controller } from "react-hook-form";

export const FormTextarea = ({ name, control, label, placeholder, rules, rows = 2 }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <>
            <textarea
              {...field}
              rows={rows}
              placeholder={placeholder}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition resize-none
                ${error ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-blue-100 focus:border-blue-500"}`}
            />
            {error && <p className="text-xs text-red-500 font-medium">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};