let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;

desiredCaps = {
  // Set your BrowserStack access credentials
  'browserstack.user' : '',
  'browserstack.key' : '',

  // Set URL of the application under test
  'app' : 'bs://75bc72c7995bceee9e780aa530ce06a85c1a017b',

  // Specify device and os_version for testing
  'device' : 'Google Pixel 6 Pro',
  'os_version' : '13.0',

  // Set other BrowserStack capabilities
  'project' : 'Second NodeJS project',
  'build' : 'Node with Appuim',
  'name': 'automate_workflow'
};

// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

// Test case for the BrowserStack sample Android app. 
// If you have uploaded your app, update the test case here. 
driver.init(desiredCaps)
.then(function () {
  return driver.waitForElementById(
    'com.android.permissioncontroller:id/permission_allow_button', asserters.isDisplayed 
    && asserters.isEnabled, 30000);
})
.then(function (allowBtn) {
  return allowBtn.click();
})
  .then(function () {
    return driver.waitForElementByXPath(
      '(//android.view.ViewGroup[@content-desc="COUNTRY"])[6]', asserters.isDisplayed 
      && asserters.isEnabled, 30000);
  })
  .then(function (country) {
    return country.click();
  }) 
  .then(function () {
    return driver.waitForElementByAccessibilityId(
      'LANGUAGE', asserters.isDisplayed 
      && asserters.isEnabled, 30000);
  })
  .then(function (english){
    return english.click()
  })
  .then(function () {
    return driver.waitForElementByXPath(
      '(//android.view.ViewGroup[@content-desc="BTN_LOGIN"])[2]/android.widget.TextView', asserters.isDisplayed 
      && asserters.isEnabled, 30000);
  })
  .then(function (login) {
    return login.click();
  }) 
  .then(function () {
    return driver.waitForElementByAccessibilityId(
      'fld-username', asserters.isDisplayed 
      && asserters.isEnabled, 30000);
  })
  .then(function (searchInput) {
    return searchInput.sendKeys("username");
  })
  .then(function () {
    return driver.waitForElementByAccessibilityId(
      'fld-password', asserters.isDisplayed 
      && asserters.isEnabled, 30000);
  })
  .then(function (searchInput) {
    return searchInput.sendKeys("password");
  })
  .then(function () {
    return driver.waitForElementByXPath(
      '//android.view.ViewGroup[@content-desc="btn-login"]/android.view.ViewGroup/android.widget.TextView', asserters.isDisplayed 
      && asserters.isEnabled, 30000);
  })
  .then(function (login) {
    return login.click();
  }) 
  .fin(function() { 
    // Invoke driver.quit() after the test is done to indicate that the test is completed.
    return driver.quit(); 
  })
  .done();
