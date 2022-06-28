import React, { FC } from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  RegisterOptions,
  FieldName,
  Control,
  useFormState,
  useWatch,
} from "react-hook-form";
import { Button, Form, Input, Col, Row } from "antd";

type Inputs = {
  email: string;
  password: string;
};

type UseControllerProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldName<TFieldValues>;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  onFocus?: () => void;
  defaultValue?: unknown;
  control?: Control<TFieldValues>;
  register?: any;
  render?: Element;
};

const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("value", data);

  const Controller = ({
    control,
    register,
    name,
    rules,
    render,
    defaultValue,
    onFocus,
  }: any) => {
    const value = useWatch({
      control,
      name,
    });
    const { errors, isValid } = useFormState({
      control,
      name,
    });
    const props = register(name, rules);

    return render({
      value,
      onChange: (e: any) =>
        props.onChange({
          target: {
            name,
            value: e.target.value,
          },
        }),
      onBlur: props.onBlur,
      name: props.name,
      errors: errors,
      isValid
    });
  };

  const CustomInput = (props: any) => {
    const [value, setValue] = React.useState(props.value || "");

    React.useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    console.log("error", isValid);

    return (
      <>
        {props.type == "password" ? (
          <Input.Password
            name={props.name}
            onChange={(e) => {
              setValue(e.target.value);
              props.onChange && props.onChange(e);
            }}
            value={value}
            placeholder={props.placeholder}
          />
        ) : (
          <Input
            name={props.name}
            onChange={(e) => {
              setValue(e.target.value);
              props.onChange && props.onChange(e);
            }}
            type={props.type}
            value={value}
            placeholder={props.placeholder}

          />
        )}
      </>
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div className="signup-wrapper">
        <h2 className="text-center">Sign In</h2>

        <form name="signup" onSubmit={handleSubmit(onSubmit)}>
          <Row justify="center" className="mb-2">
            <Col md={3} xs={{ span: "22", offset: "2" }}>
              <label className="form-label">Email</label>
            </Col>
            <Col md={15} xs={20}>
              <Controller
                {...{
                  control,
                  register,
                  name: "email",
                  rules: {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                  },
                  render: (props: UseControllerProps) => (
                    <>
                      <CustomInput
                        {...props}
                        placeholder="Enter your email address"
                        type="email"
                        isValid={(e:boolean)=>e}
                      />
                      <span className="error-message">
                        {errors.email &&
                          errors.email.message &&
                          errors.email.message}
                      </span>
                    </>
                  ),
                }}
              />
            </Col>
          </Row>

          <Row justify="center" className="mb-2">
            <Col md={3} xs={{ span: "22", offset: "2" }}>
              <label className="form-label">Password</label>
            </Col>
            <Col md={15} xs={20}>
              <Controller
                {...{
                  control,
                  register,
                  name: "password",
                  rules: {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                  },

                  render: (props: UseControllerProps) => (
                    <>
                      <CustomInput
                        {...props}
                        type="password"
                        placeholder="Enter your password."
                        isValid={(e:boolean)=>e}

                      />
                      <span className="error-message">
                        {" "}
                        {errors.password &&
                          errors.password.message &&
                          errors.password.message}
                      </span>
                    </>
                  ),
                }}
              />
            </Col>
          </Row>

          <Row justify="start" className="mb-2">
            <Col offset={4}>
              {" "}
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
