import { DatePicker, Input, InputNumber, Radio, Select, TimePicker } from "antd";
const { Option } = Select;

export const CustomInput = ({
  field,

  title,

  form: { touched, errors },

  ...props
}: any) => {
  return <Input {...field} {...props} />;
};

export const CustomNumberInput = ({
  field,

  title,

  form: { touched, errors },

  ...props
}: any) => {
  return <InputNumber {...field} {...props} />;
};

const SalonServices = [
  { label: "Hair", value: 20},
  { label: "Facial", value: 25},
  { label: "CleanUp", value: 30},
];

export const CustomSelect = ({
  value,
  serviceChangeHandler,
  onChange,
  name,
  ...props
}: any) => {
  return (
    <Select
      placeholder="Select Type"
      optionFilterProp="children"
      value={value}

      onChange={(e) => onChange({target: {name, value: e}})}
      >

      {SalonServices.map((op: any, i: any) => {
        return (
          <Option key={i} value={op.value}>
            {op.label}
          </Option>
        );
      })}
    </Select>
  );
};

export const CustomDatePicker = ({
  onChange,
  name,
  ...props
}: any) => {
  return <DatePicker 
  onChange={(e) => onChange({target: {name, value: e}})}
  {...props} />;
};

export const CustomTimePicker = ({
  onChange,
  name,
  ...props
}: any) => {
  return <TimePicker 
  onChange={(e) => onChange({target: {name, value: e}})}
  {...props} />;
};
