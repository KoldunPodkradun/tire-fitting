$('div[data-target="#calendar"]').on('shown.bs.tab', function (event) {
    $('.items-time').removeClass('hidden');
});

$('div[data-target="#clients-list"]').on('shown.bs.tab', function (event) {
    $('.items-time').addClass('hidden');
});

$('.calendar').slick();