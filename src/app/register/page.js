import RegisterForm from "@/components/Register/RegisterForm";
import RegisterShape from "@/components/Register/RegisterShape";

const Register = () => {
  return (
    <div className="py-20">
      <div className="max-w-screen-2xl px-4 md:px-8 flex justify-center lg:justify-between items-center gap-4 relative">
        <RegisterShape />

        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
