const TermsPage = () => (
  <div className="min-h-screen max-w-2xl mx-auto px-4 sm:px-6 py-8">
    <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Terms of Use</h1>
    <div className="prose prose-sm text-foreground space-y-4">
      <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      <h2 className="text-lg font-semibold text-foreground">1. Medical Disclaimer</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">MediScan is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider.</p>
      <h2 className="text-lg font-semibold text-foreground">2. Accuracy</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">While we strive for accuracy, MediScan cannot guarantee that all information is complete or error-free. Medicine formulations may vary by manufacturer and region.</p>
      <h2 className="text-lg font-semibold text-foreground">3. Use at Your Own Risk</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">You use MediScan at your own risk. We are not liable for any decisions made based on the information provided by this application.</p>
      <h2 className="text-lg font-semibold text-foreground">4. Changes</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">We reserve the right to update these terms at any time. Continued use of the app constitutes acceptance of updated terms.</p>
    </div>
  </div>
);

export default TermsPage;
