export default function ChargebackPage() {
  return (
    <main>
      {/* Header */}
      <header className="bg-white text-black py-20 text-center">
        <div className="container mx-auto px-6">
          <span className="inline-block bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase mb-5">
            Internal Documentation
          </span>
          <h1 className="text-5xl font-extrabold mb-4">Chargeback Prevention Strategy</h1>
          <p className="text-xl text-blue-400 max-w-2xl mx-auto">
            A multi-layered defense system for remote technical support and diagnostic services.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-5xl font-extrabold text-amber-400">{"< 0.5%"}</div>
              <div className="text-sm">Acceptable Ratio</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-5xl font-extrabold text-amber-400">90%+</div>
              <div className="text-sm">Win Rate with Evidence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-5xl font-extrabold text-amber-400">30%</div>
              <div className="text-sm">Reversed via Contact</div>
            </div>
          </div>
        </div>
      </header>

      {/* Strategy Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-blue-600 inline-block">
            The 10-Step Defense System
          </h2>
          <p className="text-gray-600 mb-12">
            Chargebacks after successful diagnostics are frustrating but preventable. Implement these protocols to secure your revenue.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                01. Prevention
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Set Expectations Before Payment</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Pre-payment popup:</strong> "By proceeding, you authorize a $19.99 diagnostic fee. This fee is NON-REFUNDABLE once our technician begins work..."</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Checkboxes:</strong> Mandatory opt-in for authorization and non-refundable terms.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span><strong>Email Sequence:</strong> Immediate confirmation, 1-hour reminder, attached Service Agreement PDF.</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                02. Documentation
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Paper Trail</h3>
              <p className="font-semibold text-gray-900 mb-2">Essential Evidence to Collect:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Chat transcripts (website/SMS) & email history.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Phone call recordings (with consent).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Before/After screenshots & Remote session recordings.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Diagnostic reports & Time tracking logs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Digital signature & "Start Service" click logs.</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                03. Payment Processing
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PCI-Compliant Tactics</h3>
              <p className="text-gray-700 mb-3">
                Collect billing_address, cvv_check, customer_ip, and browser_fingerprint.
              </p>
              <p className="font-semibold text-gray-900 mb-2">Descriptor Strategy:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Clear Name: "PrinterSupport.com"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Phone included: "PRNTSUP-888-555-1234"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✓</span>
                  <span>Website included: "prntrsupp.com/diag"</span>
                </li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                04. Delivery
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Surprises</h3>
              <p className="text-gray-700 mb-3">
                <strong>Real-Time Updates:</strong> "Diagnostic in progress - 10 min elapsed". Show value.
              </p>
              <p className="font-semibold text-gray-900 mb-2">The Handoff:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Diagnostic completed</li>
                <li>Immediate email with findings (PDF)</li>
                <li>Quote for repair</li>
                <li>Request confirmation</li>
                <li>If declined, send self-help instructions</li>
              </ol>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                05. Follow-up
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure the Transaction</h3>
              <p className="text-gray-700 mb-3">
                <strong>The 1-Hour Follow-up:</strong> Send diagnostic report, solution offered, and clear next steps.
              </p>
              <p className="text-gray-700">
                <strong>Feedback Request:</strong> Send satisfaction survey <strong>IMMEDIATELY</strong>. Positive reviews act as evidence against friendly fraud.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-red-500">
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                06. Response Protocol
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">When Chargeback Threatens</h3>
              <p className="text-gray-700 mb-2">
                <strong>Step 1:</strong> Contact customer <em>first</em>. Offer compromise. 30% are reversed this way.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Step 2:</strong> Prepare Response Package: Compiled evidence PDF, service proof, timestamps.
              </p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm font-mono">
                "This was a legitimate service transaction. The customer received the contracted diagnostic service as evidenced by logs and recordings."
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                07. Legal Safeguards
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Terms of Service</h3>
              <p className="text-gray-700 mb-3">
                "NON-REFUNDABLE DIAGNOSTIC FEE: The diagnostic fee is for technician time and expertise, not a guaranteed fix. Once the remote session begins, this fee is non-refundable regardless of outcome."
              </p>
              <p className="text-gray-700">
                "CHARGEBACK FEE: Unfounded chargebacks will incur a $50 investigation fee plus any bank charges."
              </p>
            </div>

            {/* Step 8 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                08. Red Flags
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Behavioral Prevention</h3>
              <p className="text-gray-700 mb-2">
                <strong>High-Risk Indicators:</strong> Rush requests, unwillingness to provide info, free email only, previous chargeback history.
              </p>
              <p className="text-gray-700">
                <strong>Verification:</strong> Phone verification required, small test charge ($1), delayed service for suspicious accounts.
              </p>
            </div>

            {/* Step 9 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                09. Pricing Models
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Reduction</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Option A:</strong> Assessment Fee ($9.99 Refundable) + Implementation Fee ($10-40).
                </li>
                <li>
                  <strong>Option B:</strong> Subscription First Month ($14.99 includes diagnostics).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Templates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold uppercase mb-4">
              Implementation Toolkit
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specific Legal Wording & Copy</h2>
            <p className="text-gray-600">
              Copy and paste these exact snippets into your payment flow and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <span className="block text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                Payment Page Disclaimer (High Visibility)
              </span>
              <div className="bg-gray-900 text-gray-100 p-5 rounded-lg font-mono text-sm mb-6 relative">
                <span className="absolute top-0 right-0 bg-gray-700 text-gray-400 text-xs px-2 py-1 rounded-bl">
                  TEXT TO COPY
                </span>
                <strong>IMPORTANT SERVICE AGREEMENT:</strong> By clicking below, you authorize a charge of <strong>$19.99</strong> for a diagnostic service. <strong>This fee is NON-REFUNDABLE</strong> once the technician connects to your device. This fee pays for the technician's time and expertise to identify your issue. If you choose to proceed with a repair after the diagnosis, this fee is <strong>credited toward your final repair cost</strong>.
              </div>

              <span className="block text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                Checkout Checkbox 1 (Refund Policy)
              </span>
              <div className="flex items-start bg-white p-4 border border-gray-300 rounded-lg mb-4">
                <input type="checkbox" disabled className="mt-1 mr-3 scale-150" />
                <span className="text-gray-700">
                  I acknowledge that the $19.99 diagnostic fee is NON-REFUNDABLE once service begins. I understand this fee covers the technician's time and expertise to analyze my device.
                </span>
              </div>

              <span className="block text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                Checkout Checkbox 2 (Recording)
              </span>
              <div className="flex items-start bg-white p-4 border border-gray-300 rounded-lg">
                <input type="checkbox" disabled className="mt-1 mr-3 scale-150" />
                <span className="text-gray-700">
                  I consent to the remote session being recorded for quality assurance and dispute resolution purposes.
                </span>
              </div>
            </div>

            <div>
              <span className="block text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                Service Agreement Clause (PDF)
              </span>
              <div className="bg-gray-900 text-gray-100 p-5 rounded-lg font-mono text-sm mb-6 max-h-80 overflow-y-auto relative">
                <span className="absolute top-0 right-0 bg-gray-700 text-gray-400 text-xs px-2 py-1 rounded-bl">
                  TEXT TO COPY
                </span>
                <strong>2. Diagnostic Fee & Refund Policy</strong><br />
                * <strong>Fee:</strong> A non-refundable fee of $19.99 is required prior to the commencement of the Service.<br />
                * <strong>Non-Refundability:</strong> This fee compensates the technician for their time and expertise. The fee becomes fully earned and non-refundable the moment the technician establishes a remote connection or begins troubleshooting, regardless of whether the issue is resolved.<br />
                * <strong>Application to Repair:</strong> If you elect to proceed with a repair or fix recommended by the technician, the $19.99 diagnostic fee will be applied as a credit toward the total cost of that repair.<br /><br />
                <strong>4. Dispute Resolution & Chargeback Policy</strong><br />
                * <strong>Dispute Resolution:</strong> In the event of a service dissatisfaction, you agree to contact [Company Name] support before initiating any credit card dispute or chargeback.<br />
                * <strong>Unauthorized Chargebacks:</strong> You acknowledge that filing a chargeback for a valid, rendered service constitutes a breach of contract. If a chargeback is filed after services have been rendered, you agree to pay a $50 investigation fee plus all bank administrative costs.
              </div>

              <span className="block text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                Pre-Service "Handoff" Pop-up Text
              </span>
              <div className="bg-gray-900 text-gray-100 p-5 rounded-lg font-mono text-sm relative">
                <span className="absolute top-0 right-0 bg-gray-700 text-gray-400 text-xs px-2 py-1 rounded-bl">
                  TEXT TO COPY
                </span>
                <strong>SESSION READY TO BEGIN</strong><br />
                By clicking "START SESSION", you confirm the technician may begin work immediately. You understand that by clicking this button, <strong>your diagnostic fee is now officially non-refundable</strong> as the service is commencing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-blue-600 inline-block">
            Implementation Checklist
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto">
            <ul className="space-y-3 text-lg">
              {[
                "Add checkbox confirmation before payment (Legal Requirement)",
                "Implement session recording (with consent)",
                "Create automated evidence compilation system",
                "Update Terms of Service with non-refundable clause",
                "Set up immediate post-service email sequence",
                "Train staff on evidence collection during service",
                "Create chargeback response template (PDF)",
                "Install IP/device tracking on payment page",
                "Test payment descriptor for clarity",
                "Create diagnostic report template"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                  <span className="text-gray-700"><strong>{item}</strong></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
