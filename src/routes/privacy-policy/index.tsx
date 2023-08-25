import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <h1 class="text-5xl text-left mb-4">Privacy Policy</h1>
      <p class="mb-6">Last updated: 25 August, 2023</p>

      <p class="mb-6">Greetings from Blood Mitra!</p>

      <p class="mb-6">
        Blood Mitra aims to provide a platform that helps nurture the selfless
        community of blood donors and receivers. Towards this purpose, we
        prioritize privacy and transparency. This Privacy Policy describes what
        information we collect, how we use said information and how we protect
        your right to privacy. When used in this document, [“
        <span class="font-bold">Blood Mitra</span>”, “
        <span class="font-bold">we</span>”, “<span class="font-bold">us</span>”,
        “<span class="font-bold">our</span>”, “
        <span class="font-bold">Company</span>”] refers to Blood Mitra and its
        entities.
      </p>

      <p>
        Blood Mitra is a different entity on its own but it falls under Ottr
        Technology Pvt. Ltd. It is created, maintained and managed by Ottr
        Technology and as such all rights reserved by Ottr Technology.
      </p>

      <p class="mb-6">
        Your continued use of the service means that you agree to our Privacy
        Policy.
      </p>

      <ol>
        <li>
          <h2>Information We Collect</h2>

          <p>We collect the following types of information.</p>

          <ol>
            <li>
              <h3>Information that you provide.</h3>
              <p>
                Personally identifiable information may include, but is not
                limited to:
              </p>

              <ul>
                <li>
                  Your phone number which is necessary for using the Service.
                </li>
                <li>
                  Profile information that you provide for user profile such as
                  email, bio, location (Address, State, Province, Date of Birth,
                  ZIP/Postal code, City, Country)
                </li>
                <li>
                  Information that you may need to provide to complete a certain
                  transaction. For example, if you want to be a donor we will
                  collect and store data about your blood group, address and
                  such.
                </li>
              </ul>
            </li>

            <li>
              <h3>Information from Third-Party Services.</h3>

              <p>
                We do not use any third party services to manage accounts in our
                app currently.
              </p>
            </li>

            <li>
              <h3>Usage data.</h3>

              <p>We may collect data during your use of the Service.</p>

              <ul>
                <li>
                  Your device’s IP Address, the pages of the Service you visit,
                  the time and date of your visit, the time spent on these pages
                  and other diagnostic data.
                </li>

                <li>
                  Type of mobile device, mobile device unique ID, mobile
                  operating system, unique device identifiers.
                </li>
              </ul>
            </li>

            <li>
              <h3>Information from use of the Service.</h3>

              <p>
                While using the Service, to use some of its features we may
                require the following data, which we collect with your prior
                permission.
              </p>

              <ul>
                <li>
                  Information regarding your location (Not map data but Street,
                  City, State and District that you provide).
                </li>
                <li>Access to make calls and contact lists.</li>
              </ul>
            </li>
          </ol>
        </li>

        <li>
          <h2>Cookies</h2>

          <p>
            Cookies are small text files placed in your device and are commonly
            used on the internet. We use cookies and similar technologies to
            store information regarding:
          </p>

          <ul>
            <li>Visitor’s preferences</li>
            <li>Their browsing history (pages and time).</li>
          </ul>
        </li>

        <li>
          <h2>Third Party Privacy Policies.</h2>

          <p>
            Our Privacy Policy does not apply to other advertisers or websites
            or services that we use from them. Please advise the respective
            Privacy Policy, specifically Google Firebase for more detailed
            information.
          </p>
        </li>

        <li>
          <h2>Why do we collect these data.</h2>
          <ul>
            <li>To provide, maintain and monitor the usage of the Service.</li>
            <li>
              When you register as a user, you are given access to different
              functionalities of the Service.
            </li>
            <li>
              To provide you with special news and newsletters if you have not
              opted to receive such information.
            </li>
            <li>To manage your feedback and requests to us.</li>
            <li>Data analysis, identifying user trends.</li>
            <li>
              We do not share, sell or trade your information to third parties
              for their marketing purposes, except as mentioned below.
            </li>
            <li>
              <p class="inline-block">
                Sharing of information in the following situations:
              </p>
              <ul class="ml-8 list-circle">
                <li>
                  To evaluate or conduct a merger. We may share or transfer your
                  personal information in connection with, or during
                  negotiations of, any merger, sale of company assets, financing
                  or acquisition of all or a portion of our business to another
                  company.
                </li>

                <li>
                  With affiliates, in which case this Privacy Policy is honored.
                </li>

                <li>
                  We may disclose your personal information for any other
                  purpose with your consent.
                </li>

                <li>
                  To share information between members when collaborating on the
                  Service. This information includes but is not limited to full
                  name, phone number, past donation, profile information, usage
                  activities and such.
                </li>

                <li>In case of legal discourse as required by law of Nepal.</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <h2>Retention of your personal Data.</h2>
          <p>
            We will retain your personal data only for as long as is necessary
            for the purposes set out in this Privacy Policy, and in need of
            compliance with any legal obligations (to resolve disputes and
            enforce our legal agreements and policies). Data can also be
            retained for an internal analysis process.
          </p>
        </li>

        <li>
          <h2>Deletion of Data.</h2>
          <p>
            If you need to delete your data, please contact at
            info@bloodmitra.org and all data will be deleted within 1 month of
            the request.
          </p>
        </li>

        <li>
          <h2>How we protect your Data.</h2>
          <p>
            Your personal information is kept strictly confidential and fully
            secure. Your encrypted (encoded) information is protected using SSL
            [Secure Socket Layers] and we follow industry standards to receive,
            send and store data. But it is also necessary to mention that no
            method of security is 100% secure, so we cannot guarantee its
            absolute security.
          </p>
        </li>

        <li>
          <h2>Children’s Privacy Policy.</h2>
          <p>
            We do not knowingly collect any kind of identifiable information
            from under the age of 13. If anyone knows of a child that is using
            our Service and providing their personal information, we strongly
            encourage you to contact us immediately. We will remove all
            information promptly.
          </p>
        </li>

        <li>
          <h2>Changes to our Privacy Policy.</h2>
          <p>
            We may make changes to our Privacy Policy from time to time. We will
            immediately provide you with a notification regarding our changes to
            the Policy. Your continued use of the service means that you agree
            to the changes.
          </p>
        </li>

        <li>
          <h2>Notification.</h2>
          <p>You can contact us at:</p>
          <p>Email: info@bloodmitra.org</p>

          <p>For any requests for technical support, feedback or comment.</p>
        </li>
      </ol>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy | Blood Mitra",
  meta: [
    {
      name: "description",
      content: "Blood Mitra's privacy policy in full disclosure",
    },
  ],
};
