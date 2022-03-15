import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
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
                </IonGrid>
                <IonRow >
						<IonCol size="12">
							<IonCard >
								<IonCardContent>
									<IonRow className="ion-justify-content-between">
										<IonCardTitle>Já tem conta ?</IonCardTitle>
                                        <IonButton href='/login'>
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

export default Register