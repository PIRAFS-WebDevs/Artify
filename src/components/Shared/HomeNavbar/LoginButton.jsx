import Login from "@/components/Login/Login";
import { useAllValueContext } from "@/hooks/useAllValueContext";
import { FaUserCircle } from "react-icons/fa";

const LoginButton = () => {
  const { showLoginModal, setShowLoginModal } = useAllValueContext();

  return (
    <>
      <FaUserCircle
        onClick={() => setShowLoginModal(true)}
        size={"1.5rem"}
        className="cursor-pointer dark:hover:text-light-100 hover:text-light-500"
      />

      {/* modal */}
      <Login isShow={showLoginModal} setIsShow={setShowLoginModal} />
    </>
  );
};

export default LoginButton;
