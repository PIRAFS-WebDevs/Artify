import RegisterForm from "@/components/Register/RegisterForm";
import RegisterShape from "@/components/Register/RegisterShape";

const Register = () => {
  return (
    <div className="py-20">
      <div className="relative flex items-center justify-center gap-4 px-4 mx-auto max-w-screen-2xl md:px-8 lg:justify-between">
        <RegisterShape />

        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
