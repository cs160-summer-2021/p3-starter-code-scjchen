// library bav buttons interaction
$('#places-btn').on('click', function() {
  $('#places-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
  $('#patterns-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#floras-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#animals-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#people-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('.nav-tab').css('left', '2.5%')
  $('.lib-header').css('background', '#6a4066')
})

$('#patterns-btn').on('click', function() {
  $('#places-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#patterns-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
  $('#floras-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#animals-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#people-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('.nav-tab').css('left', '21.5%')
  $('.lib-header').css('background', '#A06D03')
})

$('#floras-btn').on('click', function() {
  $('#places-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#patterns-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#floras-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
  $('#animals-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#people-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('.nav-tab').css('left', '40.5%')
  $('.lib-header').css('background', '#365871')
})

$('#animals-btn').on('click', function() {
  $('#places-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#patterns-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#floras-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#animals-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
  $('#people-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('.nav-tab').css('left', '59.5%')
  $('.lib-header').css('background', ' #3F5453')
})

$('#people-btn').on('click', function() {
  $('#places-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#patterns-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#floras-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#animals-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
  $('#people-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
  $('.nav-tab').css('left', '78.5%')
  $('.lib-header').css('background', '#A41834')
})