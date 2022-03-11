import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';

import { albums, albumsOutline, arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipsisHorizontal, imageOutline, personAddOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { useTranslation } from 'react-i18next';

const Tab3: React.FC = () => {
	const { t, i18n } = useTranslation();
	const [translate, setTranslate] = useState("en");

  
  
	useEffect(() => {
		console.log(i18n)
		if(localStorage.getItem('lgn')===null){
			localStorage.setItem("lgn", "en");
			console.log(localStorage.getItem('lgn'))
		  }
	},[localStorage.getItem('lgn')])

	function change(e: any){
		localStorage.setItem("lgn", e.detail.value);
		window.location.reload()
		console.log(localStorage.getItem('lgn'))
		console.log(i18n)
	}

  return (
    <IonPage>
      <IonHeader>
      		<IonToolbar>
				<IonToolbar>
					<IonTitle>{t('Title')}</IonTitle>
					</IonToolbar>

					<IonButtons slot="end">

						<IonButton color="dark">
							<IonIcon icon={ ellipsisHorizontal } />
						</IonButton>
					</IonButtons>
						
				</IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
        <IonRow className="ion-justify-content-center">
						<IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
							<IonCard >
								<IonCardContent>
									<IonRow>
										<IonCol size="4">
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgh-NtpTM0ZaPsRftxR-JAn6hAaOuXKW7nywASWq2OT8uS1XtmA8ttGtvGhxISFJpRrqA&usqp=CAU" alt="avatar"/>
										</IonCol>
										<IonCol size="8">
											<IonRow>
												<IonCol size="12">
													<IonText color="dark" >
														<p>Rui Faria</p>
													</IonText>
													<IonText color="medium">
														<p></p>
													</IonText>
												</IonCol>
											</IonRow>
                      							<IonButton color="primary" expand="block" fill="outline">
												<IonIcon icon={ personAddOutline } size="small" />&nbsp;
												{t('Edit')}
											</IonButton>
											<IonItem>
												<IonSelect value={localStorage.getItem('lgn')} okText="Okay" cancelText="Dismiss" onIonChange={e => change(e)} >
													<IonSelectOption value="en" defaultChecked>English</IonSelectOption>
													<IonSelectOption value="pt">Português</IonSelectOption>
												</IonSelect>
											</IonItem>
										</IonCol>
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow >
						<IonCol size="12">
							<IonCard >
								<IonCardHeader>
									<IonRow >
										<IonIcon />
										<IonCardTitle>{t('Description')}</IonCardTitle>
									</IonRow>
								</IonCardHeader>
								<IonCardContent>
									<IonText>
										<p>{t('Text')}</p>
									</IonText>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow >
						<IonCol size="6">
							<IonCard >
								<IonCardContent>
									<IonIcon icon={ albumsOutline } />
									<IonCardTitle>147</IonCardTitle>
									<IonCardSubtitle>{t('Occurrences')}</IonCardSubtitle>
								</IonCardContent>
							</IonCard>
						</IonCol>

						<IonCol size="6">
							<IonCard >
								<IonCardContent>
									<IonIcon icon={ bookmarkOutline } />
									<IonCardTitle>63</IonCardTitle>
									<IonCardSubtitle>{t('Responded')}</IonCardSubtitle>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow >
						<IonCol size="12">
							<IonCard >
								<IonCardContent>
									<IonRow className="ion-justify-content-between">
										<IonCardSubtitle>{t('Latest')}</IonCardSubtitle>
										<IonIcon icon={ arrowForward } />
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
