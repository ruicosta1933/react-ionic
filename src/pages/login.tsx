import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
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
                    <IonList>
                        <IonItem>
                            <IonInput placeholder="Username"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput placeholder="Password"></IonInput>
                        </IonItem>
                            <IonButton  expand="block">Login</IonButton>
                    </IonList>
                </IonGrid>
                <IonRow >
						<IonCol size="12">
							<IonCard >
								<IonCardContent>
									<IonRow className="ion-justify-content-between">
										<IonCardTitle>Ainda não tem conta ?</IonCardTitle>
                                        <IonButton href='/register'>
                                            <IonIcon icon={ personAdd } />
                                        </IonButton>
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>
            </IonContent>
        </IonPage>
    )
}

export default Login