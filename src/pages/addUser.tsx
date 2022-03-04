import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar, useIonAlert } from "@ionic/react";
import React, { useState } from "react";


const AddUser: React.FC = () => {
    const [present] = useIonAlert();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonToolbar>
                        <IonTitle>Adicionar Utilizador</IonTitle>
                    </IonToolbar>

                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tab2" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                <IonList>
                    <IonItem>
                        <IonInput placeholder="Username" required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder="Password" type="password"  required></IonInput>
                    </IonItem>
                    <IonButton expand="block" onClick={() =>
                              present({
                                cssClass: 'my-css',
                                header: 'Validar Autenticação',
                                message: 'Autenticação realizada com sucesso! Os dados de acesso ao servidor são válidos.',
                                buttons: [
                                  { text: 'OK', handler: (d) => console.log('ok pressed') },
                                ],
                                onDidDismiss: (e) => console.log('did dismiss'),
                              })
                            }>Validar Autenticação</IonButton>
                </IonList>

                <IonList>
                    <IonItem>
                        <IonInput placeholder="Name"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder="PIN de Acesso" type="password" ></IonInput>
                    </IonItem>
                    <IonButton expand="block">Guardar</IonButton>
                </IonList>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AddUser;