# AngularMeteorCli

## Instructions

`meteor create angular-meteorcli; cd angular-meteorcli; npm install`  
`meteor remove blaze-html-templates`  
`meteor add angular2-compilers`  
`Create tsconfig.json`  
`Create declarations.d.ts`  
`npm install --save @angular/common @angular/compiler @angular/compiler-cli @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @ionic/storage ionic-angular ionicons rxjs sw-toolbox zone.js`  
`npm install --save ionic-native-core-4.2.1.tgz ionic-native-splash-screen-4.2.1.tgz ionic-native-status-bar-4.2.1.tgz`  
`npm install --save meteor-rxjs`  
`npm install --save reflect-metadata`  
`npm install --save moment`  
`npm install --save angular2-moment`  
`npm install --save-dev @types/meteor`  
`npm install --save-dev @types/underscore`  
`meteor add mys:fonts`  
`Create fonts.json`  
`meteor remove mobile-experience; meteor add mobile-status-bar; meteor add launch-screen`  
`meteor add cordova:cordova-plugin-whitelist@1.3.2`  
`meteor add cordova:cordova-plugin-console@1.0.7`  
`meteor add cordova:cordova-plugin-statusbar@2.2.3`  
`meteor add cordova:cordova-plugin-device@1.1.6`  
`meteor add cordova:ionic-plugin-keyboard@2.2.1`  
`meteor add cordova:cordova-plugin-splashscreen@4.0.3`  
`mv server/main.js server/main.ts; mv client/main.js client/main.ts; mv client/main.css client/main.scss`  
`Add Ionic theming`  
`Initialize client`  
`Initialize server`  
`Initialize client-server`  

## Known issues

Meteor doesn't work with `ionic-native` >=3, the issue is that they switched to `es2015` modules syntax and somehow Meteor (even 1.6) doesn't seem to support it: https://pastebin.com/3vnMRWQ6  
I compiled a local copy of `ionic-native` 4.2.1 with `commonjs` modules and it works flawlessly (I included the tarballs in the repo), so the issue is indeed due to `es2015` modules.  
Since Meteor is supposed to support `es2015` imports (especially Meteor 1.6), maybe the issue lies in `barbatus:typescript`?  

Meteor isn't compatible with Angular 5 (even 1.6): https://pastebin.com/7mteYTS0  
Angular 4 works flawlessly and this is the reason why the repo is based on 4.3.6.  

Another bug is specific to Meteor 1.6, somehow it doesn't want to install Cordova plugins (like `meteor add cordova:cordova-plugin-whitelist@1.3.2`): https://pastebin.com/5mmCU89z  
Meteor 1.5 works flawlessly and this is the reason why the repo is based on 1.5.2.  
