// src/pages/Home.tsx

import React, { useState } from 'react';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import QRCodeScanner from '../components/QRCodeScanner';

const Home: React.FC = () => {
  const [qrCodeData, setQrCodeData] = useState('');

  const handleScan = (data: string) => {
    setQrCodeData(data);
  };

  return (
    <IonPage>
      <IonContent>
        <IonButton routerLink="/scanner">Scan QR Code</IonButton>
        {qrCodeData && <p>Scanned Data: {qrCodeData}</p>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
