$(document).ready(function () {
    setCheckboxSelectLabels();
    $('.event-type-title input').change(function () {
        setCheckboxSelectLabels();
        if ($('.event-radio-btn:checked').length > 0) {
            console.log('At least one checkbox is checked');
            $(this).closest('.filter-dropdown-wrapper').addClass('active');
        } else {
            console.log('No checkbox is checked');
            $(this).closest('.filter-dropdown-wrapper').removeClass('active');
        }
    });

    $('.search-by-class').keyup(function () {
        $(this).closest('.filter-dropdown-wrapper').addClass('active');
    });

    $('.clear-btn').click(function (event) {
        event.stopPropagation();
        if ($('.filter-dropdown-wrapper').hasClass('active')) {

            $('.filter-dropdown-wrapper').removeClass('active');
        }
    });
});

function setCheckboxSelectLabels(elem) {
    var wrappers = $('.filter-dropdown');
    $.each(wrappers, function (key, wrapper) {
        var checkboxes = $(wrapper).find('.ckkBox');
        var label = $(wrapper).find('.common-dropdown-list').attr('id');
        var prevText = '';
        $.each(checkboxes, function (i, checkbox) {
            var button = $(wrapper).find('.filter-text');
            if ($(checkbox).prop('checked') == true) {
                var text = $(checkbox).next().html();
                var btnText = prevText + text;
                var numberOfChecked = $(wrapper).find('input.val:checkbox:checked').length;
                if (numberOfChecked >= 3) {
                    btnText = numberOfChecked + ' ' + label + ' selected';
                }
                $(button).text(btnText);
                prevText = btnText + ', ';
            }
        });
    });
}
function toggleCheckedAll(checkbox) {
    var val = $(checkbox).closest('.checkboxes').find('.val');
    var ckkBox = $(checkbox).closest('.checkboxes').find('.ckkBox');


    if ($(checkbox).hasClass('all')) {
        $(val).prop('checked', false);
    }
}