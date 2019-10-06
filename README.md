# CardConnect MERN App
MERN CardConnect Example
First, create payments database on localhost. 
Edit DB seeds: `server/scripts/authDB.js`

```
cd server && npm start 
cd client && npm start
```

## Sequence
1. Express server listens on port: 5000, connects to database on mongodb://localhost/payments
2. Client served on port: 3000 and proxies request to target: 'http://localhost:5000/', see `client/src/setupProxy.js` | "scripts.main" in `package.json`
3. Default values in `client/src/components/payFormTwo/payFormTwo.js`
4. Form validation is implemented through [Formik](https://jaredpalmer.com/formik/)
5. Formik Props are displayed dynamically (`client/src/components/payFormTwo/helper.js`)
6. Upon submit on 'pay' page, request is handled through axios to /auth endpoint on server `client/src/utils/API.js`
7. Server accepts request, combines with merchant details and authorization creds. see `/server/config/api-config` and `server/controller/authController.js`
8. Server forwards auth request to the CardPointe Gateway API 
9. Server handles auth response, and writes transaction response into payments database (_id is new primary key)
10. Server completes client's request with a promise (async)
11. Client displays (and logs) auth response as current state within (`client/src/components/payFormTwo/helper2.js`)
12. /report is built with [React Table](https://www.npmjs.com/package/react-table)


### Page/Component Hierarchy
http://localhost:3000/pay/
* Heading
* payformtwo (authResp as state)
    - Formik
        - calls API upon submit
        - sets response as state
        - DisplayFormikState
    - Panel
        - DisplayResponse
* Footerpage

## Server
* Server 
    * AuthRouter
        * AuthController (hits gateway)
            * API Config as API
            * DB Models as DB


### API Config
```
baseURL: "https://fts.cardconnect.com:6443/cardconnect/rest/",
timeout: 3200,
auth: {
        username: 'testing',
        password: 'testing123'
      },
headers: {'Content-Type': 'application/json'},
data: {merchid: '496160873888'}
```

### Methods
1. testConnect
2. auth
3. report

