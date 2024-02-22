import AllValueProvider from "./AllValueProvider";
import AuthProvider from "./AuthProvider";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AllValueProvider>{children}</AllValueProvider>
    </AuthProvider>
  );
};

export default Providers;
