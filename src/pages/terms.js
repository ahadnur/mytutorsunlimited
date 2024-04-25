import React from "react";
import Link from "next/link";

function terms() {
  return (
    <div className="w-full lg:w-3/4 xl:w-2/3 lg:mx-auto mt-20">
      <div className="mb-20">
        <h1 className="font-bold text-xl md:text-5xl mb-3 uppercase">
          Terms of Use
        </h1>
        <p className="text-gray-600">Effective Date: April 4, 2024</p>
      </div>

      <div className="mb-5">
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
        <h3 className="privacySubHeading">1. User Accounts and Registration</h3>
        <ul>
            <li>To access certain features of the Services, you may need to create an account. You are responsible for maintaining the confidentiality of your account information, including your login credentials, and for all activity that occurs under your account.</li>
            <li>You represent and warrant that you are of legal age to enter into a binding agreement with My Tutors Unlimited and that you are not prohibited from doing so under any applicable law.</li>
        </ul>
      </div>

      <div>
        <h3 className="privacySubHeading">2. Acceptable Use</h3>
        <ul>
            <li>You agree to use the Services only for lawful purposes and in accordance with these Terms.</li>
            <li>You agree not to use the Services for any purpose that could be harmful to My Tutors Unlimited or others, including but not limited to:
                <ul className="mt-2">
                    <li>Uploading or transmitting any content that is illegal, harmful, threatening, abusive, harassing, defamatory, obscene, hateful, or racially or ethnically offensive.</li>
                    <li>Engaging in any activity that disrupts or interferes with the functionality of the Services.</li>
                    <li>Using the Services for academic dishonesty, such as cheating on assignments.</li>
                    <li>Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity.</li>
                </ul>
            </li>
        </ul>
      </div>

      <div>
        <h3 className="privacySubHeading">3. Content</h3>
        <ul>
            <li>You retain all ownership rights to the content you upload or submit to the Services.</li>
            <li>By uploading Your Content, you grant My Tutors Unlimited a non-exclusive, royalty-free license to use, reproduce, modify, publish, distribute, and display Your Content in connection with the Services.</li>
            <li>You are responsible for ensuring that Your Content does not violate the intellectual property rights of any third party.</li>
        </ul>
      </div>

      <div>
        <h3 className="privacySubHeading">4. Disclaimers and Limitations of Liability</h3>
        <ul>
            <li>HE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</li>
            <li>My Tutors Unlimited does not warrant that the Services will be uninterrupted, secure, or error-free.</li>
            <li>My Tutors Unlimited shall not be liable for any damages arising from your use of the Services, including but not limited to direct, indirect, incidental, special, consequential, or punitive damages.</li>
        </ul>
      </div>

      <div>
        <h3 className="privacySubHeading">5. Termination</h3>
        <ul>
            <li> We may terminate your access to the Services at any time, for any reason, or no reason at all, with or without notice.</li>
            <li>You may terminate your account at any time.</li>
        </ul>
      </div>

      <div>
        <h3 className="privacySubHeading">6. Governing Law and Dispute Resolution</h3>
        <ul>
            <li>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws provisions.</li>
            <li>Any dispute arising out of or relating to these Terms shall be resolved by in accordance with the rules of the American Arbitration Association.</li>
        </ul>
      </div>

      <div>
        <h3 className="privacySubHeading">7. Amendments to Terms of Use</h3>
        <ul>
            <li>We may update these Terms at any time by posting the revised Terms on our website.</li>
            <li>You are responsible for checking the Terms periodically for updates. Your continued use of the Services following the posting of revised Terms constitutes your acceptance of the revised Terms.</li>
        </ul>
      </div>

      <div>
        <h3 className="privacySubHeading">8. Entire Agreement</h3>
        <ul>
            <li>These Terms constitute the entire agreement between you and My Tutors Unlimited regarding your use of the Services.</li>
        </ul>
      </div>

      <div>
        <h3 className="privacySubHeading">9. Severability</h3>
        <ul>
            <li>If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.</li>
        </ul>
      </div>


      <div>
        <h3 className="privacySubHeading">10. Waiver</h3>
        <ul>
            <li>No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision.</li>
        </ul>
      </div>

      <div>
        <h3 className="privacySubHeading">11. Contact Us</h3>
        <ul>
            <li>If you have any questions about these Terms, please contact us at <Link href={`mailto:psylabs.tutors@gmail.com`} className="underline font-semibold">HERE</Link> or <Link href={`tel:+8801982674720`} className="underline font-semibold">Call Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default terms;
