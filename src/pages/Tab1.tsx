import { IonAvatar, IonButton, IonChip, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { construct, eye, eyeOff, trash } from 'ionicons/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  const [check, setCheck ] = useState(false)
  const [check1, setCheck1 ] = useState(false)
  const { t, i18n } = useTranslation();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('occurrences.Title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Occurrences</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>       
           <IonItem onClick={() => setCheck(!check)}>
              <IonAvatar slot="start">
                  <img src="https://cdn.icon-icons.com/icons2/2715/PNG/512/warning_icon_172115.png"/>
              </IonAvatar>
              <IonLabel>
                <h2>Avaria nos Sanitarios</h2>
                <p>Maria Fernandes: 05/03/2022</p>
              </IonLabel>
              <IonButton fill="default" color="dark" >
              { check ? <IonIcon icon={eye} /> : <IonIcon icon={eyeOff} /> }
                </IonButton>
                <IonButton fill="default" color="dark" >
              <IonIcon icon={construct} />
                </IonButton>
                <IonButton fill="default" color="dark" >
              <IonIcon icon={trash} />
                </IonButton>
            </IonItem>
        <IonItem onClick={() => setCheck1(!check1)}>
          <IonAvatar slot="start">
              <img src="https://static.thenounproject.com/png/61749-200.png"/>
          </IonAvatar>
          <IonLabel>
            <h2>Janelas partidas no Pavilhão</h2>
            <p>Ramiro Torres: 17/01/2022</p>
          </IonLabel>
         <IonButton fill="default" color="dark" >
            { check1 ? <IonIcon icon={eye} /> : <IonIcon icon={eyeOff} /> }
           </IonButton>
           <IonButton fill="default" color="dark" >
              <IonIcon icon={construct} />
                </IonButton>
                <IonButton fill="default" color="dark" >
              <IonIcon icon={trash} />
                </IonButton>
        </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
