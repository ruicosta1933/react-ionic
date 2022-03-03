import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";


const AddUser: React.FC = () => {
    const [text, setText] = useState<string>();
  
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonToolbar>
                        <IonTitle>Adicionar Utilizador</IonTitle>
                    </IonToolbar>

                    <IonButtons slot="start">
                        <IonBackButton defaultHref="" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                        <IonInput value={text} placeholder="Nome" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder="Password" disabled ></IonInput>
                    </IonItem>
                    <IonButton expand="block">Validar Autenticação</IonButton>
                </IonList>

                <IonList>
                    <IonItem>
                        <IonInput value={text} placeholder="Nome" onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder="PIN de Acesso" disabled ></IonInput>
                    </IonItem>
                    <IonButton expand="block">Guardar</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default AddUser;