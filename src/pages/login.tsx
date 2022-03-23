import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { arrowForward, personAdd } from "ionicons/icons"
import { useEffect, useState } from "react"

const Login: React.FC = () => {
    const [input, setInput] = useState<string>('')

    useEffect(() => {
        console.log(input)
    }, [input])


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Occurrences</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
            <IonGrid> 
                        <img  src="https://vistapointe.net/images/people-wallpaper-7.jpg" alt="avatar"/>
          </IonGrid>
          <IonGrid>
          
          </IonGrid>
                <IonGrid>
                    <IonList>
                        <IonItem>
                        <IonInput type="number" placeholder="PIN"></IonInput>
                        </IonItem>
                            <IonButton  expand="block">Validate</IonButton>
                    </IonList>
                </IonGrid>
                
                   
            </IonContent>
        </IonPage>
    )
}

export default Login