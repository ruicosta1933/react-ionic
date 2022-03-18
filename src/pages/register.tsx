import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { personAdd } from "ionicons/icons"
import { useEffect, useState } from "react"

const Register: React.FC = () => {
    const [input, setInput] = useState<string>('')

    useEffect(() => {
        console.log(input)
    }, [input])


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <IonGrid>
                    <IonList>
                        <IonItem>
                        <IonInput placeholder="Username"></IonInput>
                        </IonItem>
                        <IonItem>
                        <IonInput placeholder="Password"></IonInput>
                        </IonItem>
                        <IonItem>
                        <IonInput placeholder="Confirm Password"></IonInput>
                        </IonItem>
                        <IonButton  expand="block">Registe</IonButton>
                    </IonList>
                            <IonRow className="ion-justify-content-between">
                                <IonCardSubtitle>Já tem conta ? <a href="/login">Entre aqui !</a></IonCardSubtitle>
                            </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Register