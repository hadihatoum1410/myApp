// src/components/ConsentForm.tsx

import React, { useState } from 'react';
import { IonButton, IonInput, IonLabel, IonPage } from '@ionic/react';

interface ConsentFormProps {
  onConsent: () => void;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ onConsent }) => {
  const [consentGiven, setConsentGiven] = useState(false);

  const handleConsent = () => {
    // Additional validation can be added here
    setConsentGiven(true);
    onConsent();
  };

  return (
    <IonPage>
      <IonLabel>Do you consent to data collection?</IonLabel>
      <IonButton onClick={handleConsent}>Give Consent</IonButton>
    </IonPage>
  );
};

export default ConsentForm;
