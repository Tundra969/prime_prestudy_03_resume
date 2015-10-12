$(document).ready(function() {
	$('#all').hide();
    $('#show').on('click', function() {
        $('#all').slideDown('slow');
        $('button').remove();
    });
});