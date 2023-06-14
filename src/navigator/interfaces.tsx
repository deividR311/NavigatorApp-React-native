export enum NavigationRoute {
    Page1Screen = 'Page1Screen',
    Page2Screen = 'Page2Screen',
    Page3Screen = 'Page3Screen',
    PeopleScreen = 'PeopleScreen',
  }

  export type NavigationParams = {
    [NavigationRoute.Page1Screen]: undefined;
    [NavigationRoute.Page2Screen]: undefined;
    [NavigationRoute.Page3Screen]: undefined;
    [NavigationRoute.PeopleScreen]: {
      id     : number;
      nombre : string;
    };
  };
