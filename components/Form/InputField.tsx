import React from "react";

const InputField = ({
  register,
  type = "text",
  name,
  label,
  placeholder,
  required,
  className,
  leftAddon,
}: InputProps) => {
  const Input = () => {
    return type == "textarea" ? (
      <textarea
        className="textarea textarea-bordered"
        placeholder={placeholder}
        required={required}
        {...register(name, { required })}
      />
    ) : (
      <input
        type={type}
        className={`input input-bordered ${leftAddon ? "w-full flex-1 join-item" : ""}`}
        placeholder={placeholder}
        required={required}
        {...register(name, { required })}
      />
    );
  };

  return (
    <div className={`form-control ${className}`}>
      <label className="text-sm font-medium label">
        <span className="label-text">
          {label} {required && <span className="text-error">*</span>}
        </span>
      </label>
      {leftAddon ? (
        <div className="join">
          <span className="flex items-center px-4 join-item bg-base-200">{leftAddon}</span>
          <Input />
        </div>
      ) : (
        <Input />
      )}
    </div>
  );
};

export default InputField;
