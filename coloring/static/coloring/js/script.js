function navCommunity() {
  window.location = 'art_community_main_page'
}

$(document).ready(function() {
  // library nav buttons interaction
  $('#places-btn').on('click', function() {
    $('#places-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
    $('#patterns-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#floras-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#animals-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#people-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('.nav-tab').css('left', '2.5%')
    $('.lib-header').css('background', '#6a4066')

    // change artwork
    $('#img-1').attr(
        'src', '/static/coloring/images/library-art/places/place1.svg')
    $('#img-2').attr(
        'src', '/static/coloring/images/library-art/places/place2.svg')
    $('#img-3').attr(
        'src', '/static/coloring/images/library-art/places/place3.svg')
    $('#img-4').attr(
        'src', '/static/coloring/images/library-art/places/place4.svg')
    $('#img-5').attr(
        'src', '/static/coloring/images/library-art/places/place5.svg')
    $('#img-6').attr(
        'src', '/static/coloring/images/library-art/places/place6.svg')
    $('#img-7').attr(
        'src', '/static/coloring/images/library-art/places/place7.svg')
    $('#img-8').attr(
        'src', '/static/coloring/images/library-art/places/place8.svg')
  })

  $('#patterns-btn').on('click', function() {
    $('#places-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#patterns-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
    $('#floras-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#animals-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#people-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('.nav-tab').css('left', '21.5%')
    $('.lib-header').css('background', '#A06D03')

    // change artwork
    $('#img-1').attr(
        'src', '/static/coloring/images/library-art/patterns/pattern1.svg')
    $('#img-2').attr(
        'src', '/static/coloring/images/library-art/patterns/pattern2.svg')
    $('#img-3').attr(
        'src', '/static/coloring/images/library-art/patterns/pattern3.svg')
    $('#img-4').attr(
        'src', '/static/coloring/images/library-art/patterns/pattern4.svg')
    $('#img-5').attr(
        'src', '/static/coloring/images/library-art/patterns/pattern5.svg')
    $('#img-6').attr(
        'src', '/static/coloring/images/library-art/patterns/pattern6.svg')
    $('#img-7').attr(
        'src', '/static/coloring/images/library-art/patterns/pattern7.svg')
    $('#img-8').attr(
        'src', '/static/coloring/images/library-art/patterns/pattern8.svg')
  })

  $('#floras-btn').on('click', function() {
    $('#places-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#patterns-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#floras-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
    $('#animals-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#people-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('.nav-tab').css('left', '40.5%')
    $('.lib-header').css('background', '#365871')

    // change artwork
    $('#img-1').attr(
        'src', '/static/coloring/images/library-art/floras/flora1.svg')
    $('#img-2').attr(
        'src', '/static/coloring/images/library-art/floras/flora2.svg')
    $('#img-3').attr(
        'src', '/static/coloring/images/library-art/floras/flora3.svg')
    $('#img-4').attr(
        'src', '/static/coloring/images/library-art/floras/flora4.svg')
    $('#img-5').attr(
        'src', '/static/coloring/images/library-art/floras/flora5.svg')
    $('#img-6').attr(
        'src', '/static/coloring/images/library-art/floras/flora6.svg')
    $('#img-7').attr(
        'src', '/static/coloring/images/library-art/floras/flora7.svg')
    $('#img-8').attr(
        'src', '/static/coloring/images/library-art/floras/flora8.svg')
  })

  $('#animals-btn').on('click', function() {
    $('#places-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#patterns-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#floras-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#animals-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
    $('#people-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('.nav-tab').css('left', '59.5%')
    $('.lib-header').css('background', ' #3F5453')

    // change artwork
    $('#img-1').attr(
        'src', '/static/coloring/images/library-art/animals/animal1.svg')
    $('#img-2').attr(
        'src', '/static/coloring/images/library-art/animals/animal2.svg')
    $('#img-3').attr(
        'src', '/static/coloring/images/library-art/animals/animal3.svg')
    $('#img-4').attr(
        'src', '/static/coloring/images/library-art/animals/animal4.svg')
    $('#img-5').attr(
        'src', '/static/coloring/images/library-art/animals/animal5.svg')
    $('#img-6').attr(
        'src', '/static/coloring/images/library-art/animals/animal6.svg')
    $('#img-7').attr(
        'src', '/static/coloring/images/library-art/animals/animal7.svg')
    $('#img-8').attr(
        'src', '/static/coloring/images/library-art/animals/animal8.svg')
  })

  $('#people-btn').on('click', function() {
    $('#places-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#patterns-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#floras-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#animals-btn').switchClass('lib-btn-active', 'lib-btn-inactive', 200)
    $('#people-btn').switchClass('lib-btn-inactive', 'lib-btn-active', 200)
    $('.nav-tab').css('left', '78.5%')
    $('.lib-header').css('background', '#A41834')

    // change artwork
    $('#img-1').attr(
        'src', '/static/coloring/images/library-art/people/people1.svg')
    $('#img-2').attr(
        'src', '/static/coloring/images/library-art/people/people2.svg')
    $('#img-3').attr(
        'src', '/static/coloring/images/library-art/people/people3.svg')
    $('#img-4').attr(
        'src', '/static/coloring/images/library-art/people/people4.svg')
    $('#img-5').attr(
        'src', '/static/coloring/images/library-art/people/people5.svg')
    $('#img-6').attr(
        'src', '/static/coloring/images/library-art/people/people6.svg')
    $('#img-7').attr(
        'src', '/static/coloring/images/library-art/people/people7.svg')
    $('#img-8').attr(
        'src', '/static/coloring/images/library-art/people/people8.svg')
  })
})