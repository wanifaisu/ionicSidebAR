import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React from "react";



interface PageProps {
  pageName: string | undefined;
}

const TabPage: React.FC<PageProps> = ({ pageName }) => {
  console.log("render TabPage " + pageName);

  return (
    <IonPage>
      {/* <SideBar/> */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default TabPage;
