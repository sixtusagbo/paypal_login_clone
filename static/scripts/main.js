$('#passwordToggler').click(function (e) { 
  e.preventDefault();
  
  $(this).text() == 'Show' ? $(this).text('Hide') : $(this).text('Show');

  $('input#password').attr('type') == 'password' ? $('input#password').attr('type', 'text') : $('input#password').attr('type', 'password');
});

function showPasswordToggler() {
  if ($('input#password').val().length > 0) {
    $('#passwordToggler').removeClass('hide');
  }
}

function hidePasswordToggler() {
  $('#passwordToggler').addClass('hide');
}

$('input#password').focus(function (e) { 
  e.preventDefault();
  showPasswordToggler();
});

$('input#password').keyup(function (e) { 
  e.preventDefault();
  showPasswordToggler();
});

$('input#password').click(function (e) { 
  e.stopPropagation();
  e.preventDefault();
});

window.onclick = function (e) { 
  if (e.target.id != 'passwordToggler') {
    hidePasswordToggler();
  }
};
