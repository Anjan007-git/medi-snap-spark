const PrivacyPage = () => (
  <div className="min-h-screen max-w-2xl mx-auto px-4 sm:px-6 py-8">
    <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
    <div className="prose prose-sm text-foreground space-y-4">
      <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      <h2 className="text-lg font-semibold text-foreground">1. Information We Collect</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">MediScan processes medicine images locally in your browser. We do not store, transmit, or retain any images you scan. Scan history is stored only on your device using local storage.</p>
      <h2 className="text-lg font-semibold text-foreground">2. How We Use Information</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">Images are processed solely to identify medicines and provide related information. No personal data is collected or shared with third parties.</p>
      <h2 className="text-lg font-semibold text-foreground">3. Data Storage</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">All scan history is stored locally on your device. You can clear this data at any time from the History page.</p>
      <h2 className="text-lg font-semibold text-foreground">4. Contact</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">If you have questions about this privacy policy, please contact us through the app.</p>
    </div>
  </div>
);

export default PrivacyPage;
