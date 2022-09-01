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
  { label: "Hair", value: 1, cost: "20" },
  { label: "Facial", value: 2, cost: "25" },
  { label: "CleanUp", value: 3, cost: "30" },
];

export const CustomSelect = ({
  field,
  title,
  value,
  serviceChangeHandler,
  form: { touched, errors, values },
  ...props
}: any) => {
  return (
    <Select
      placeholder="Select Type"
      optionFilterProp="children"
      // value={values.consumerUidType}
      value={value}
      onChange={(value) => {
        console.log('Dropdown Value number: ', value);
        // props.setFieldValue("consumerUidType", value);
        // props.setFieldValue("consumerUid", "");

        let obj = SalonServices.find((o) => o.value === value);
        console.log("🚀 Dropdown Selected Val: ", obj);
        serviceChangeHandler(obj);
      }}
      filterOption={(input, option) =>
        (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
      }>
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
  field,

  title,

  form: { touched, errors },

  ...props
}: any) => {
  // return <InputNumber {...field} {...props} />
  return <DatePicker {...field} {...props} />;
};

export const CustomTimePicker = ({
  field,

  title,

  form: { touched, errors },

  ...props
}: any) => {
  return <TimePicker {...field} {...props} />;
};
