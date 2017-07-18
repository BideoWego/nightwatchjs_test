const path = require('path');
const serverPath = path.resolve('./bin/selenium-server-standalone-3.4.0.jar');

const SAFARI = {
  "desiredCapabilities": {
    "browserName" : "safari",
    "javascriptEnabled" : true,
    "acceptSslCerts" : true
  }
};

const FIREFOX = {
  "browserName": "firefox",
  "marionette": true
};

const CHROME = {
  "desiredCapabilities": {
    "browserName": "chrome"
  }
};


module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : serverPath,
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost:4000",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": FIREFOX
    },

    "firefox": {
      "desiredCapabilities": FIREFOX
    },

    "safari" : SAFARI,

    "chrome" : CHROME,

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
};










