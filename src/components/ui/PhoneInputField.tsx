import PhoneInput from "react-phone-input-2";

type Props = {
  value: string;
  onChange: (phone: string) => void;
};

const PhoneInputField = ({ value, onChange }: Props) => {
  return (
    <PhoneInput
      country={"in"}
      value={value}
      onChange={onChange}
      enableSearch
      inputClass="!w-full !h-12 !pl-14 !text-black !border !rounded-xl"
      buttonClass="!border-none"
      containerClass="!w-full"
      placeholder="Enter Mobile Number"
    />
  );
};

export default PhoneInputField;