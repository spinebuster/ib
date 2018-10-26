// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.

// Load libs
//= require ../commons/libs/jquery
//= require ../commons/libs/amplify
//= require ../commons/libs/signals
//= require ../commons/libs/crossroads
//= require ../commons/libs/handlebars
//= require ../commons/libs/hasher
//= require ../commons/libs/namespaces
//= require ../commons/libs/scaleApp
//= require ../commons/libs/backbone
//= require ../commons/libs/bluebird
//= require ../commons/libs/ramda
//= require ../commons/libs/lodash

// Load taslations
//= require ../commons/libs/i18n/translations

// Load templates
//= require_tree ../commons/templates
//= require_tree ./templates/

// Load common js modules
//= require_tree ../commons/utils

// Load base modules
//= require ../commons/modules/base_module

// Load application
//= require ./src/application
//= require_tree ../commons/scaleapp
//= require ./src/scaleapp
//= require ../commons/handlebars_helpers
//= require ./src/handlebars_helpers
//= require_tree ../commons/services
//= require ./src/services
//= require_tree ./src/services
//= require ./src/global_configurations
//= require ./src/modules
//= require ../commons/router
//= require ./src/router
//= require_tree ../commons/events
//= require ./src/events
//= require_tree ./src/events

// Load scaleApp modules
//= require_tree ../commons/modules/layout
//= require_tree ../commons/modules/pagination
//= require_tree ../commons/modules/spinner
//= require_tree ./src/modules/facts
