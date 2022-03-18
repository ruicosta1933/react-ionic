import { IonBackButton, IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar, useIonAlert } from "@ionic/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const AddUser: React.FC = () => {
    const [present] = useIonAlert();
    const { t, i18n } = useTranslation();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonToolbar>
                        <IonTitle>{t('users.add.Title')}</IonTitle>
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
                        <IonInput placeholder={t('users.add.Username')} required></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder={t('users.add.Password')} type="password"  required></IonInput>
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
                            }>{t('users.add.Validate')}</IonButton>
                </IonList>

                <IonList>
                    <IonItem>
                        <IonInput placeholder={t('users.add.Name')}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput placeholder={t('users.add.PIN')} type="password" ></IonInput>
                    </IonItem>
                    <IonButton expand="block">{t('users.add.Save')}</IonButton>
                </IonList>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AddUser;