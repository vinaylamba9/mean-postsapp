// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:3000/api",
  firebaseConfig : {
    apiKey: "AIzaSyCJ1E5DhuJ3KxIWe4N_m6-qiDwTxtNxzfY",
    authDomain: "mean-postsapp.firebaseapp.com",
    databaseURL: "https://mean-postsapp.firebaseio.com",
    projectId: "mean-postsapp",
    storageBucket: "mean-postsapp.appspot.com",
    messagingSenderId: "147712366232",
    appId: "1:147712366232:web:9d48e2c115fd4067"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
