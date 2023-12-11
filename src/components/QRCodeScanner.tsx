// src/components/QRCodeScanner.tsx

import React, { useState } from 'react';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

interface QRCodeScannerProps {
  onScan: (data: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan }) => {
  const startScanner = async () => {
    QRScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          const scanSub = QRScanner.scan().subscribe((text: string) => {
            onScan(text);
            scanSub.unsubscribe();
            QRScanner.hide();
          });
          QRScanner.show();
        } else if (status.denied) {
          // Handle permission denied
        } else {
          // Handle permission denied permanently
        }
      })
      .catch((e: any) => console.error(e));
  };

  return (
    <IonPage>
      <IonContent>
        <IonButton onClick={startScanner}>Scan QR Code</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default QRCodeScanner;
