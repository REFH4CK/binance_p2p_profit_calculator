import PropTypes from "prop-types";

export function Input({ type, id, name, onChange, label, placeholder="Enter your value" }) {
  return (
    <>
      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor={id}
          className="text-slate-200 text-md font-semibold capitalize"
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          autoComplete="off"
          required
          name={name}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          className="bg-slate-800 px-2 py-1 w-[15rem] text-[#fff]/70 rounded outline-none"
        />
      </div>
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
