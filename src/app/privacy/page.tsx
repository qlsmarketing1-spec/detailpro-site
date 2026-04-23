import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-[#e7e6ee] mb-4">Privacy Policy</h1>
        <p className="text-[#a3a3a3] mb-12">Effective Date: January 26, 2026</p>

        <div className="article-content text-[#a3a3a3] space-y-8">
          <p>
            MOTO Technology, LLC (&ldquo;DetailPro,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website detailpro.tech and provides the DetailPro platform and related services. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and services.
          </p>
          <p>
            By using DetailPro, you agree to the collection and use of information as described in this Privacy Policy. If you do not agree with these practices, please do not use our services.
          </p>

          <section>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, phone number, business name, and business address.</li>
              <li><strong>Payment Information:</strong> When you make purchases, our payment processor (Stripe) collects payment card information. We do not store your full payment card details on our servers.</li>
              <li><strong>Business Data:</strong> Information you upload or input into the platform, including customer leads (names, contact information, vehicle information, addresses), business metrics, and communications.</li>
              <li><strong>Photos and Media:</strong> Information you upload related to your detailing business or customer vehicles.</li>
              <li><strong>Communications:</strong> Records of your communications with us, including support requests and feedback.</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Set up and manage your account</li>
              <li>Facilitate lead management and customer communications on your behalf</li>
              <li>Manage advertising campaigns (if you elect this service)</li>
              <li>Send administrative messages, updates, and promotional communications</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section>
            <h2>3. Information Sharing</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We share information with third-party vendors who perform services on our behalf, including Stripe (payment processing) and Twilio (SMS and messaging services).</li>
              <li><strong>Advertising Platforms:</strong> If you elect advertising management services, we may share necessary information with advertising platforms (such as Google Ads and Meta/Facebook) to manage your campaigns.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law, legal process, or government request, or to protect our rights, privacy, safety, or property.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
            <p><strong>We do not sell your personal information to third parties.</strong></p>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>5. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. Upon termination of your account, you may request export of your CRM data and customer information.
            </p>
          </section>

          <section>
            <h2>6. Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li><strong>Access and Portability:</strong> You may request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You may request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain exceptions.</li>
              <li><strong>Opt-Out:</strong> You may opt out of receiving promotional communications by following the unsubscribe instructions in those messages.</li>
            </ul>
            <p>To exercise these rights, please contact us at the information provided below.</p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>
            <p>
              Our services integrate with third-party services including Stripe for payment processing and Twilio for messaging. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third parties.
            </p>
          </section>

          <section>
            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2>9. International Users</h2>
            <p>
              DetailPro is operated from the United States. If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your country.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the &ldquo;Effective Date&rdquo; above. Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p>
              MOTO Technology, LLC<br />
              6925 Lake Harrison Circle<br />
              Chanhassen, MN 55317<br />
              Email: info@detailpro.tech
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
