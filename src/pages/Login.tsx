import styled from "styled-components";
import { Input } from "../components/atoms/inputs/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { ButtonText } from "../components/atoms/buttons/ButtonText";
import { useState } from "react";

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWindow = styled.div`
  width: 40%;
  min-width: 390px;
  max-width: 500px;
  min-height: 600px;
  padding: 40px 20px;
  height: 80%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 20px;
  }
`;

interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { register, handleSubmit, clearErrors, errors } = useForm<LoginProps>({
    mode: "onBlur",
  });

  const onSubmitValid: SubmitHandler<LoginProps> = (data) => {
    console.log(data);
  };

  return (
    <Base>
      <LoginWindow>
        <h3>로그인</h3>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            label="아이디"
            errorMessage={errors?.email?.message}
            hasError={Boolean(errors?.email?.message)}
          >
            <input
              ref={register({
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: "이메일 형식이 아닙니다",
                },
              })}
              onChange={(e) => {
                clearErrors("email");
                setInputs({ ...inputs, email: e.target.value });
              }}
              name="email"
              type="text"
              placeholder="이메일"
            ></input>
          </Input>
          <Input
            label="비밀번호"
            errorMessage={errors?.password?.message}
            hasError={Boolean(errors?.password?.message)}
          >
            <input
              ref={register({
                required: "비밀번호를 입력해주세요",
              })}
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={(e) => {
                clearErrors("password");
                setInputs({ ...inputs, password: e.target.value });
              }}
            ></input>
          </Input>
          <ButtonText
            label="로그인"
            fullWidth={true}
            variant="primary"
          ></ButtonText>
        </form>
      </LoginWindow>
    </Base>
  );
}

export default Login;
