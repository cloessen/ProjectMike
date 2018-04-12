// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCxth7_MP-oK-cvM-wW2m5p9gjdgI3ojmg',
    authDomain: 'projektmikecms.firebaseapp.com',
    databaseURL: 'https://projektmikecms.firebaseio.com',
    projectId: 'projektmikecms',
    storageBucket: '',
    messagingSenderId: '377230994925'
  },
  contentful: {
    spaceId: '6wsw3mwdz1ta',
    token: '3454ed6471b49dc9c3da8188e650bb72c1e0b0a76a4d10f7c186e0609413712f',
  }
};
