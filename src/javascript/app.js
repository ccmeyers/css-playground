var $ = require('jquery-browserify'),
    home = require('./includes/home');

var app = {

  documentWindow: $(window),
  modalBtn: $('#modal-btn'),
    
  init: function() {
  },

}

$(document).ready( app.init() );