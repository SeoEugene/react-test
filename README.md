npm i --force
npx create-react-app .
npm install --save typescript @types/react @types/react-dom
npm install react-router-dom => 종속성 충돌 오류 존재
```
ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: react-scripts@5.0.1
npm ERR! Found: typescript@5.3.3
npm ERR! node_modules/typescript
npm ERR!   peer typescript@">= 2.7" from fork-ts-checker-webpack-plugin@6.5.3
npm ERR!   node_modules/fork-ts-checker-webpack-plugin
npm ERR!     fork-ts-checker-webpack-plugin@"^6.5.0" from react-dev-utils@12.0.1
npm ERR!     node_modules/react-dev-utils
npm ERR!       react-dev-utils@"^12.0.1" from react-scripts@5.0.1
npm ERR!       node_modules/react-scripts
npm ERR!         react-scripts@"5.0.1" from the root project
npm ERR!   peer typescript@">=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta" from tsutils@3.21.0
npm ERR!   node_modules/tsutils
npm ERR!     tsutils@"^3.21.0" from @typescript-eslint/eslint-plugin@5.62.0    
npm ERR!     node_modules/@typescript-eslint/eslint-plugin
npm ERR!       @typescript-eslint/eslint-plugin@"^5.5.0" from eslint-config-react-app@7.0.1
npm ERR!       node_modules/eslint-config-react-app
npm ERR!         eslint-config-react-app@"^7.0.1" from react-scripts@5.0.1     
npm ERR!         node_modules/react-scripts
npm ERR!       1 more (eslint-plugin-jest)
npm ERR!     tsutils@"^3.21.0" from @typescript-eslint/type-utils@5.62.0       
npm ERR!     node_modules/@typescript-eslint/type-utils
npm ERR!       @typescript-eslint/type-utils@"5.62.0" from @typescript-eslint/eslint-plugin@5.62.0
npm ERR!       node_modules/@typescript-eslint/eslint-plugin
npm ERR!         @typescript-eslint/eslint-plugin@"^5.5.0" from eslint-config-react-app@7.0.1
npm ERR!         node_modules/eslint-config-react-app
npm ERR!         1 more (eslint-plugin-jest)
npm ERR!     1 more (@typescript-eslint/typescript-estree)
npm ERR!   1 more (the root project)
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR!   react-scripts@"5.0.1" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: typescript@4.9.5
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry   
npm ERR! this command with --force or --legacy-peer-deps  
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! C:\Users\82102\AppData\Local\npm-cache\_logs\2024-01-29T13_58_08_585Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in:      
npm ERR!     C:\Users\82102\AppData\Local\npm-cache\_logs\2024-01-29T13_58_08_585Z-debug-0.log
```

npm install react-router-dom --force 혹은 npm install react-router-dom --legacy-peer-deps 명령어로 종속성 충돌 해결#   r e a c t - t e s t  
 