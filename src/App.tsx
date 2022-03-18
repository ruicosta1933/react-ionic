import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albums, ellipse, people, person, square } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import AddUser from './pages/addUser';
import Login from './pages/login';
import Register from './pages/register';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import addUser from './pages/addUser';

import {useTranslation} from 'react-i18next';
setupIonicReact();

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  return(
<IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route exact path="/occurrences">
            <Tab1 />
          </Route>
          <Route exact path="/users">
            <Tab2 />
          </Route>
          <Route path="/profile">
            <Tab3 />
          </Route>
          <Route path="/addUser" exact >
            <AddUser />
          </Route>
        
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/occurrences">
            <IonIcon icon={albums} />
            <IonLabel>{t('tabs.Occurrences')}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/users">
            <IonIcon icon={people} />
            <IonLabel>{t('tabs.Users')}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/profile">
            <IonIcon icon={person} />
            <IonLabel>{t('tabs.Profile')}</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      
    </IonReactRouter>
  </IonApp>
  )
  
};

export default App;
