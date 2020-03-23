$('#popupOne').modal('show');

$('div[data-target="#calendar"]').on('shown.bs.tab', function (event) {
    $('.items-time').removeClass('hidden');
});

$('div[data-target="#clients-list"]').on('shown.bs.tab', function (event) {
    $('.items-time').addClass('hidden');
});

$('.popup-purple-btn').on('click', function (event) {
    $('#tireFitting').removeClass('opacity');
});

$('.calendar').slick();