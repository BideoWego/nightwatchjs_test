module.exports = {
  "Testing": function(browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('div.alert', 1000)
      .assert.containsText('.alert', 'Welcome')
      .end();
  }
};










