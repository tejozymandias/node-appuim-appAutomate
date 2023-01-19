# node-appium-app-browserstack


### Git clone and Install the dependencies

```
git clone https://github.com/tejozymandias/node-appuim-appAutomate.git

cd node-appuim-appAutomate

npm install
```

## Getting Started

Getting Started with Appium tests in NodeJS on BrowserStack couldn't be easier!

### Run your first test :

**1. Upoad your Android or iOS App**

Upload your Android app (.apk or .aab file) or iOS app (.ipa file) to BrowserStack servers using our REST API. Here is an example cURL request :

```
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/upload" \
-F "file=@/path/to/apk/file"
```

**2. Configure and run your first test**

Open `BrowserStackSample.js` file in `Android` or in `ios` folder

- Replace `YOUR_USERNAME` & `YOUR_ACCESS_KEY` with your BrowserStack access credentials. Get your BrowserStack access credentials from [here](https://www.browserstack.com/accounts/settings)

- Replace `bs://<app-id>` wkth the URL obtained from app upload step

- Set the device and OS version

- If you have uploaded your own app update the test case

- Run `npm run parallel`


