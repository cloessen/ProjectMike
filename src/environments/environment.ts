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
    spaceId: 'gg487pew0xv8',
    token: 'e20394a3220973573499b21793b621224863a71f15c9c0066cbcebe00d2193d6',
  }
};
