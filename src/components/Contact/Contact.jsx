import ContactFrom from "./ContactFrom";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <>
      <section className="my-16   ">
        <div className="text-center mb-10">
          <h4 className="xl:text-2xl text-lg font-semibold dark:dark:text-white">
            Need help? Contact us
          </h4>
          <p className="dark:text-dark-100 xl:text-lg text-sm">
            Looking for help? Drop your contact details here
          </p>
        </div>
        <section className="xl:w-[80%] w-full mx-auto flex flex-col lg:flex-row p-5  rounded">
          <ContactInfo />
          <ContactFrom />
        </section>
      </section>
    </>
  );
};
export default Contact;
