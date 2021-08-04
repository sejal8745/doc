import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="https://links.papareact.com/1ui"
        height="300"
        width="558"
        objectFit="contain"
      />
      <Button
        color="blue"
        buttonType="filled"
        ripple="light"
        className="w-44 mt-10"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
