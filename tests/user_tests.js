module.exports = {
  "Home flash message": (browser) => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('div.alert', 1000)
      .assert.containsText('.alert', 'Welcome')
      .end();
  },


  "User creation": (browser) => {
    browser
      .url(browser.launchUrl + '/users/new')
      .waitForElementVisible('input[type="submit"]', 1000)
      .setValue('input[name="user[fname]"]', 'Vlad')
      .setValue('input[name="user[lname]"]', 'Last Name')
      .setValue('input[name="user[email]"]', 'asdf@asdf.com')
      .submitForm('#user-form')
      .waitForElementVisible('header.page-header', 1000)
      .assert.containsText('header.page-header h1', 'Vlad')
      .end();
  }
};



// browser.setValue('input[type=text]', 'nightwatch');






