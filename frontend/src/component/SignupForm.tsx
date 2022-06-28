import React, { FC ,useEffect} from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  RegisterOptions,
  FieldName,
  Control,
  useWatch,
} from "react-hook-form";
import { Button, Form, Input, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../_redux/reducers/rootReducer";
import { createUserRequest, createUserSuccess, showAlertAction } from "../_redux/actions/authActions/authAction";
import { useNavigate } from "react-router-dom";

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
  render?: any;
};

const SignupForm: FC = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { loading, success, email,message } = useSelector((state: RootState) => state.auth);


  useEffect(()=>{
    if(success && email){
    dispatch(showAlertAction({alertMessage:message, type:'success'}))
    dispatch(createUserSuccess({loading:false,success:false,email:"",message:""}))
    navigate("/");

  }else if (message=='Failed to Register'){
    dispatch(showAlertAction({alertMessage:message, type:'error'}))
    dispatch(createUserSuccess({loading:false,success:false,email:"",message:""}))

    navigate("/");
  }
    console.log('success nessage',message)
  },[success,email,message])

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      c_password: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let requestData = {
      email: data.email,
      password: data.password,
    };
    const response =  dispatch(createUserRequest(requestData));
    console.log("value on onSubmit", response);
  };

  const Controller = ({
    control,
    register,
    name,
    rules,
    render,
  }: any) => {
    const value = useWatch({
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
    });
  };

  const Input_Example = (props: any) => {
    const [value, setValue] = React.useState(props.value || "");

    React.useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    return (
      <>
        {props.type == "password" ? (
          <Input.Password
            name={props.name}
            onChange={(e) => {
              setValue(e.target.value);
              props.onChange && props.onChange(e);
            }}
            placeholder={props.placeholder}
            value={value}
            style={{filter:loading && 'blur(2px)'}}
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
            style={{filter:loading && 'blur(2px)'}}
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
        <h2 className="text-center" style={{filter:loading && 'blur(2px)'}}>Sign up form</h2>

        <Form
          name="signup"
          onFinish={handleSubmit(onSubmit)}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row justify="center" className="mb-2">
            <Col md={3} xs={{ span: "22", offset: "2" }}>
              <label className="form-label" style={{filter:loading && 'blur(2px)'}}>Email</label>
            </Col>
            <Col md={10} xs={20}>
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
                      <Input_Example
                        {...props}
                        placeholder="Enter your email address"
                        type="email"
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
              <label className="form-label" style={{filter:loading && 'blur(2px)'}}>Password</label>
            </Col>
            <Col md={10} xs={20}>
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
                      <Input_Example
                        {...props}
                        type="password"
                        placeholder="Enter your password"
                      />
                      <span className="error-message">
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
          <Row justify="start" className="mt-3">
            <Col offset={12}>
              {" "}
              <Button type="primary" htmlType="submit" style={{filter:loading && 'blur(2px)'}}
>
                Signup
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      {loading && (
        <>
          <div className="overlay"></div>
          <div className="spinner-border spinner-placement" />
        </>
      )}
    </div>
  );
};

export default SignupForm;
