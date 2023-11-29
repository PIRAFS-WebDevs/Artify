import ContactFrom from "./ContactFrom";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <>
      <section className="my-16 ">
        <div className="mb-10 text-center">
          <h4 className="text-lg font-semibold xl:text-2xl dark:text-white">
            Need help? Contact us
          </h4>
          <p className="text-sm dark:text-dark-100 xl:text-lg">
            Looking for help? Drop your contact details here
          </p>
        </div>
        <section className="xl:w-[80%] w-full mx-auto flex flex-col lg:flex-row p-5  rounded dark:bg-dark-400 bg-light-400">
          <ContactInfo />
          <ContactFrom />
        </section>
      </section>
    </>
  );
};
export default Contact;
