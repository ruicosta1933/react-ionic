import { IonAvatar, IonButton, IonChip, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { eye, eyeOff } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  const [check, setCheck ] = useState(false)
  const [check1, setCheck1 ] = useState(false)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Occurrences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Occurrences</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonList>       
           <IonItem onClick={() => setCheck(!check)}>
              <IonAvatar slot="start">
                  <img src="https://static.remove.bg/remove-bg-web/59c96072ccf69a79c0e6dd85a2eac05ceb4d0784/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"/>
              </IonAvatar>
              <IonLabel>
                <h2>Occurence</h2>
                <p>Title: Titulo</p>
              </IonLabel>
              <IonButton fill="default" color="dark" >
              { check ? <IonIcon icon={eye} /> : <IonIcon icon={eyeOff} /> }
                </IonButton>
            </IonItem>
        <IonItem onClick={() => setCheck1(!check1)}>
          <IonAvatar slot="start">
              <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"/>
          </IonAvatar>
          <IonLabel>
            <h2>Occurence 2</h2>
            <p>Title: Titulo 2</p>
          </IonLabel>
         <IonButton fill="default" color="dark" >
            { check1 ? <IonIcon icon={eye} /> : <IonIcon icon={eyeOff} /> }
           </IonButton>
        </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
