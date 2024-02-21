import ContactSvg from "../svg/ContactSvg";
import LocationSvg from "../svg/LocationSvg";
import WebSvg from "../svg/WebSvg";

const ContactInfo = () => {
  return (
    <div className="xl:w-[40%] w-full px-4 py-8 dark:text-white space-y-10">
      <div className="space-y-5">
        <h4 className="text-lg font-semibold">Contact Information</h4>
        <p className="text-sm dark:text-dark-100">
          <span>Fill out the form and our team will get back to</span>
          <br />
          <span>you within 24 hours.</span>
        </p>
      </div>
      {/*  */}
      <>
        <div className="flex gap-5 ">
          <LocationSvg />
          <p>
            Office Location <br />
            <span className="text-sm dark:text-dark-100">
              Urban-Loritz-Platz, 1070 Wien, Austria
            </span>
          </p>
        </div>
        {/*  */}
        <div className="flex gap-5 ">
          <ContactSvg />
          <p>
            Call us anytime <br />
            <span className="text-sm dark:text-dark-100">
              +161649646591, +5454645431
            </span>
          </p>
        </div>
        {/*  */}
        <div className="flex gap-5 ">
          <WebSvg />
          <p>
            Visit Website <br />
            <span className="text-sm dark:text-dark-100">
              https://warnsun.com
            </span>
          </p>
        </div>
      </>
    </div>
  );
};

export default ContactInfo;
