import React from "react";
import Link from "next/link";

function privacyPolicy() {
  return (
    <div className="w-full lg:w-3/4 xl:w-2/3 lg:mx-auto">
      <div className="mb-5">
        <h1 className="font-bold text-xl md:text-5xl mb-3 uppercase">
          Privacy Policy
        </h1>
        <p className="text-gray-600">Effective Date: April 4, 2024</p>
      </div>
      <div className="mb-5">
        <h2 className="privacyHeading">Introduction</h2>
        <p className="privacyPara">Welcome to My Tutors Unlimited.</p>
        <p className="privacyPara">
          My Tutors Unlimited ("we", "us", or "our") operates{" "}
          <Link
            href={`https://mytutorsunlimited.com`}
            className="font-semibold underline"
          >
            https://mytutorsunlimited.com
          </Link>{" "}
          (hereinafter referred to as "<b>Service</b>"), respects the privacy of
          our users ("users" or "you") and is committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, disclose, and protect your information when you use our services
          (the "Services").
        </p>
      </div>

      <div>
        <h2 className="privacyHeading">Information We Collect</h2>
        <p className="privacyPara">
          We collect several different types of information for various purposes
          to provide and improve our Services to you.
        </p>
        <h3 className="privacySubHeading">Personal Information</h3>
        <p className="privacyPara">
          We may collect personal information such as your{" "}
          <strong className="font-semibold">
            name, email address, phone number, and address
          </strong>{" "}
          when you create an account, use our Services, or contact customer
          support.
        </p>
        <h3 className="privacySubHeading">Data Collected Through Use</h3>
        <p className="privacyPara">
          We may collect information about your activity on our platform, such
          as the subjects you seek tutoring for, the tutors you interact with,
          and any content you upload.
        </p>

        <h3 className="privacySubHeading">How We Use Your Information</h3>
        <p className="privacyPara">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="ml-5 text-gray-600">
          <li className="list-disc">Providing and improving our Services</li>
          <li className="list-disc">
            Connecting you with tutors who meet your needs
          </li>
          <li className="list-disc">
            Sending you administrative communications such as account
            verification, service updates, and password resets
          </li>
          <li className="list-disc">
            Responding to your inquiries and providing customer support
          </li>
        </ul>
      </div>

      <div>
        <h3 className="privacyHeading">Data Sharing</h3>
        <p className="privacyPara">
          We may share your information with third-party vendors who provide
          services that support our operations, such as data storage, payment
          processing, and marketing. We will only share your information with
          vendors who have agreed to comply with strict data security standards.
        </p>
      </div>

      <div>
        <h3 className="privacyHeading">Your Choices</h3>
        <h4 className="privacyPara">
          You have certain choices regarding your information
        </h4>
        <p className="privacyPara">
          <b className="font-semibold">
            Accessing and Updating Your Information
          </b>
          : You can access and update your account information at any time.
        </p>
        <p className="privacyPara">
          <b className="font-semibold">Contacting Us</b>: If you have any
          questions about this Privacy Policy or your information, please
          contact us at <Link href={`mailto:psylabs.tutors@gmail.com`} className="underline font-semibold">HERE</Link> or <Link href={`tel:+8801982674720`} className="underline font-semibold">Call Us</Link>
        </p>
      </div>

      <div>
        <h3 className="privacyHeading">Security</h3>
        <p className="privacyPara">We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage method is completely secure.</p>
      </div>

      <div>
        <h3 className="privacyHeading">Analytics</h3>
        <p className="privacyPara">We may use third-party Service Providers to monitor and analyze the use of our Service.</p>

        <h4 className="privacySubHeading">Google Analytics</h4>
        <p className="privacyPara">Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>
        <p className="privacyPara">For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: https://policies.google.com/privacy?hl=en</p>
        <p className="privacyPara">We also encourage you to review the Google's policy for safeguarding your data: https://support.google.com/analytics/answer/6004245.</p>
      </div>

      <div>
        <h3 className="privacyHeading">Changes to this Privacy Policy</h3>
        <p className="privacyPara">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      </div>

      <div>
        <h3 className="privacyHeading">Your Consent</h3>
        <p className="privacyPara">By using our Services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.</p>
      </div>

      <div>
        <h3 className="privacyHeading">Contact Us</h3>
        <p className="privacyPara">If you have any questions about this Privacy Policy, please contact us at: <Link href={`mailto:psylabs.tutors@gmail.com`} className="underline font-semibold">HERE</Link> or <Link href={`tel:+8801982674720`} className="underline font-semibold">Call Us</Link></p>
      </div>

    </div>
  );
}

export default privacyPolicy;
