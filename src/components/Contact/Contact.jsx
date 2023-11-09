import ContactFrom from "./ContactFrom";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <>
      <section className="my-16   ">
        <div className="text-center mb-10">
          <h4 className="text-2xl font-semibold dark:text-white">
            Need help? Contact us
          </h4>
          <p className="dark:text-darkNormal">
            Looking for help? Drop your contact details here
          </p>
        </div>
        <section className="w-[80%] mx-auto flex p-5 dark:bg-darkSec rounded" >
          <ContactInfo />
          <ContactFrom />
        </section>
      </section>
    </>
  );
};
export default Contact;
