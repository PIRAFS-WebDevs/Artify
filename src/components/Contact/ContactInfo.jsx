import LocationSvg from "../svg/LocationSvg";
import ContactSvg from "../svg/ContactSvg";
import WebSvg from "../svg/WebSvg";

const ContactInfo = () => {
  return (
    <div className="xl:w-[40%] w-full px-5 py-10 dark:dark:text-white space-y-10 dark:bg-dark-400 ">
      <div className="space-y-5">
        <h4 className="text-lg font-semibold">Contact Information</h4>
        <p className=" dark:text-dark-100 text-sm">
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
            <span className="dark:text-dark-100 text-sm">
              Urban-Loritz-Platz, 1070 Wien, Austria
            </span>
          </p>
        </div>
        {/*  */}
        <div className="flex gap-5 ">
          <ContactSvg />
          <p>
            Call us anytime <br />
            <span className="dark:text-dark-100 text-sm">
              +161649646591, +5454645431
            </span>
          </p>
        </div>
        {/*  */}
        <div className="flex gap-5 ">
          <WebSvg />
          <p>
            Visit Website <br />
            <span className="dark:text-dark-100 text-sm">
              https://warnsun.com
            </span>
          </p>
        </div>
      </>
    </div>
  );
};

export default ContactInfo;
