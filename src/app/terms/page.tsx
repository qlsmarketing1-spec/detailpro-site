import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-[#e7e6ee] mb-4">Terms of Service</h1>
        <p className="text-[#a3a3a3] mb-12">Effective Date: January 26, 2026</p>

        <div className="article-content text-[#a3a3a3] space-y-8">
          <p>
            Welcome to DetailPro. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website detailpro.tech and the DetailPro platform and services operated by MOTO Technology, LLC (&ldquo;DetailPro,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </p>
          <p>
            By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our services.
          </p>

          <section>
            <h2>1. Description of Services</h2>
            <p>
              DetailPro provides a sales and growth system built for auto detailing businesses. Our services include a detailing-industry-specific CRM, lead management tools, automated follow-up systems, and optional advertising management services. The specific services and fees applicable to your use are governed by your Service Agreement with us.
            </p>
          </section>

          <section>
            <h2>2. Account Registration</h2>
            <p>
              To use our services, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2>3. Acceptable Use</h2>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the services in any way that violates any applicable law or regulation</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
              <li>Use the services to send spam, unsolicited messages, or harassing communications</li>
              <li>Interfere with or disrupt the integrity or performance of the services</li>
              <li>Reverse engineer, decompile, or disassemble any portion of the services</li>
              <li>Sublicense, resell, or provide access to the services to third parties without authorization</li>
            </ul>
          </section>

          <section>
            <h2>4. User Content</h2>
            <p>
              You retain ownership of all content you upload, submit, or input into the services (&ldquo;User Content&rdquo;), including customer leads, business data, and images. By uploading User Content, you grant us a non-exclusive, royalty-free license to use, store, and process such content solely to provide and improve our services to you. You are solely responsible for ensuring that your User Content does not violate any third-party rights or applicable laws.
            </p>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              The DetailPro platform, including all software, systems, processes, methodologies, templates, automations, workflows, and know-how, is and remains the executive property of MOTO Technology, LLC. You receive only the limited license rights expressly granted in your Service Agreement. No title to or ownership of the platform or any intellectual property rights therein is transferred to you. All rights not expressly granted are reserved by DetailPro.
            </p>
          </section>

          <section>
            <h2>6. Payment Terms</h2>
            <p>
              Payment terms, fees, and billing arrangements are governed by your Service Agreement. All payments are processed through Stripe. You agree to provide accurate billing information and authorize us to charge the applicable fees. If you elect advertising management services, you understand that advertising spend is paid directly by you to the applicable advertising platforms (such as Google and Meta) and is separate from fees paid to DetailPro.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>
            <p>
              Our services integrate with third-party services including Stripe for payment processing and Twilio for SMS and messaging. Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the acts or omissions of any third-party service providers.
            </p>
          </section>

          <section>
            <h2>8. Disclaimers</h2>
            <p>
              THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
            <p>
              DetailPro does not guarantee any specific results, including but not limited to: a specific number of leads, a specific cost per lead, a specific number of booked jobs, revenue growth, profitability, or return on advertising spend. Performance depends on many factors including market conditions, competition, your responsiveness, advertising budget, seasonality, and your pricing and service quality.
            </p>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, DETAILPRO&apos;S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICES SHALL NOT EXCEED THE AMOUNT OF FEES ACTUALLY PAID BY YOU TO DETAILPRO DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
            <p>
              IN NO EVENT SHALL DETAILPRO BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION, EVEN IF DETAILPRO HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section>
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless DetailPro and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of the services, your User Content, your violation of these Terms, or your violation of any rights of another party.
            </p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>
              We may suspend or terminate your access to the services at any time for violation of these Terms or for any other reason as described in your Service Agreement. Upon termination, your right to use the services will immediately cease. You may request export of your CRM data and customer information following termination, as provided in your Service Agreement.
            </p>
          </section>

          <section>
            <h2>12. Dispute Resolution</h2>
            <p>
              Any dispute, controversy, or claim arising out of or relating to these Terms shall be settled by binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Minnesota. The arbitrator&apos;s decision shall be final and binding, and judgment on the award may be entered in any court having jurisdiction. Each party shall bear its own costs and attorneys&apos; fees in connection with any arbitration, unless the arbitrator determines that a party&apos;s claims or defenses were frivolous.
            </p>
          </section>

          <section>
            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Minnesota, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2>14. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on our website and updating the &ldquo;Effective Date&rdquo; above. Your continued use of our services after such changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2>16. Entire Agreement</h2>
            <p>
              These Terms, together with your Service Agreement and our Privacy Policy, constitute the entire agreement between you and DetailPro regarding your use of the services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2>17. Contact Us</h2>
            <p>If you have questions about these Terms, please contact us at:</p>
            <p>
              MOTO Technology, LLC<br />
              6925 Lake Harrison Cir<br />
              Chanhassen, MN 55317<br />
              Email: information@detailpro.tech
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
