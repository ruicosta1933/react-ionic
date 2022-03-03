import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { add, build, personAdd, trash } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [present] = useIonAlert();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gestão Utilizadores</IonTitle>
          <IonButtons slot="end">

						<IonButton color="dark" href='/addUser'>
							<IonIcon icon={ add } />
						</IonButton>
					</IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCard>
                  <img  src="https://vistapointe.net/images/people-wallpaper-7.jpg" alt="avatar"/>
              </IonCard>
            </IonRow>
          </IonGrid>
          <IonList>       
            <IonItem>
                <IonAvatar slot="start">
                    <img src="https://static.remove.bg/remove-bg-web/59c96072ccf69a79c0e6dd85a2eac05ceb4d0784/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"/>
                </IonAvatar>
                <IonLabel>
                  <h2>Joaquim Pessoa</h2>
                </IonLabel>
                <IonButtons>
                    <IonButton fill="default" color="dark" >
                        <IonIcon icon={build} />
                        </IonButton>
                    <IonButton onClick={() =>
                              present({
                                cssClass: 'my-css',
                                header: 'Apagar Utilizador',
                                message: 'A conta não será eliminada do servidor ! Quer eliminar o utilizador apenas neste dispositivo?',
                                buttons: [
                                  'Não',
                                  { text: 'Sim', handler: (d) => console.log('ok pressed') },
                                ],
                                onDidDismiss: (e) => console.log('did dismiss'),
                              })
                            }>
                          <IonIcon icon={trash}/> 
                      </IonButton>
                  </IonButtons>
              </IonItem>
          </IonList>
          <IonItem >
                <IonAvatar slot="start">
                    <img src="https://cdn.pixabay.com/photo/2017/09/05/15/51/plus-2718200_960_720.png"/>
                </IonAvatar>
                <IonLabel>
                  <h2>Adicionar Utilizador</h2>
                </IonLabel>
                <IonButton color="dark" href='/addUser'>
							    <IonIcon icon={ personAdd } />
					    	</IonButton>
              </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
