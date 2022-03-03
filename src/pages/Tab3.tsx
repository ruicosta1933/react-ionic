import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipsisHorizontal, imageOutline, personAddOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      		<IonToolbar>
				<IonToolbar>
					<IonTitle>Profile</IonTitle>
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
														<p>Minister of Pools</p>
													</IonText>
												</IonCol>
											</IonRow>
                      <IonButton color="primary" expand="block" fill="outline">
												<IonIcon icon={ personAddOutline } size="small" />&nbsp;
												Edit
											</IonButton>
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
										<IonCardTitle>Description</IonCardTitle>
									</IonRow>
								</IonCardHeader>
								<IonCardContent>
									<IonText>
										<p>The minister of pools is the one person that ministrates pools!</p>
									</IonText>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow >
						<IonCol size="6">
							<IonCard >
								<IonCardContent>
									<IonIcon icon={ imageOutline } />
									<IonCardTitle>147</IonCardTitle>
									<IonCardSubtitle>Occurences</IonCardSubtitle>
								</IonCardContent>
							</IonCard>
						</IonCol>

						<IonCol size="6">
							<IonCard >
								<IonCardContent>
									<IonIcon icon={ bookmarkOutline } />
									<IonCardTitle>63</IonCardTitle>
									<IonCardSubtitle>Responded</IonCardSubtitle>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow >
						<IonCol size="12">
							<IonCard >
								<IonCardContent>
									<IonRow className="ion-justify-content-between">
										<IonCardSubtitle>View latest occurences reported</IonCardSubtitle>
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
