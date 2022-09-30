import React from "react";

type UserDataInterface = { initialized: boolean; loggedIn: boolean; user: any };
type MyContextInterface = {
  authInfo: UserDataInterface;
  initialize: () => Promise<boolean>;
  logOut: () => Promise<boolean>;
  logIn: () => Promise<boolean>;
};

// create the context
export const AuthContext = React.createContext<MyContextInterface | undefined>(
  undefined
);

// create the context provider, we are using use state to ensure that
// we get reactive values from the context...
type Props = {
  children: React.ReactNode;
};
export const AuthProvider: React.FC = (props: any) => {
  // the reactive values
  const [authInfo, setAuthInfo] = React.useState<UserDataInterface>();
 

  return <AuthContext.Provider {...props} />;
};

export const useAuth = () => React.useContext(AuthContext);
