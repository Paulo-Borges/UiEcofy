import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

interface IInputLoginProps {
  value: string;
  InputLabel: string;
  type?: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin: React.FC<IInputLoginProps> = (props, ref) => {
  return (
    <div>
      <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel htmlFor="component-outlined">{props.InputLabel}</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue=""
          label="UserName"
          type={props.type}
          ref={ref}
          value={props.value}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? props.onPressEnter && props.onPressEnter()
              : //   ? props.inputPasswordRef.current?.focus()
                undefined
          }
          onChange={(e) => props.onChange(e.target.value)}
          //   onChange={(e) => props.setEmail(e.target.value)}
        />
      </FormControl>
    </div>
  );
};
