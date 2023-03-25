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
        className={`input input-bordered ${leftAddon ? "w-full flex-1" : ""}`}
        placeholder={placeholder}
        required={required}
        {...register(name, { required })}
      />
    );
  };

  return (
    <div className={`form-control ${className}`}>
      <label className="label font-medium text-sm">
        <span className="label-text">
          {label} {required && <span className="text-error">*</span>}
        </span>
      </label>
      {leftAddon ? (
        <div className="input-group">
          <span>{leftAddon}</span>
          <Input />
        </div>
      ) : (
        <Input />
      )}
    </div>
  );
};

export default InputField;
