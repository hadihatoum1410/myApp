import React, { useState } from 'react';
import { IonButton, IonInput, IonLabel, IonPage } from '@ionic/react';

interface DataCollectionFormProps {
  onDataSubmit: (data: { name: string; email: string; phone: string }) => void;
}

const DataCollectionForm: React.FC<DataCollectionFormProps> = ({ onDataSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleInputChange = (e: any) => {
    const inputName = e.target?.name;
    const inputValue = e.detail?.value;

    if (inputName !== undefined && inputValue !== undefined) {
      setFormData({ ...formData, [inputName]: inputValue });
    }
  };

  const handleSubmit = () => {
    // Additional validation can be added here
    onDataSubmit(formData);
  };

  return (
    <IonPage>
      <IonLabel>Name:</IonLabel>
      <IonInput name="name" value={formData.name} onIonChange={handleInputChange} />

      <IonLabel>Email:</IonLabel>
      <IonInput name="email" value={formData.email} onIonChange={handleInputChange} />

      <IonLabel>Phone:</IonLabel>
      <IonInput name="phone" value={formData.phone} onIonChange={handleInputChange} />

      <IonButton onClick={handleSubmit}>Submit Data</IonButton>
    </IonPage>
  );
};

export default DataCollectionForm;
