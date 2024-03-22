$(document).ready(function () {
    setCheckboxSelectLabels();
    $('.event-type-title input').change(function () {
        setCheckboxSelectLabels();
        if ($('.event-radio-btn:checked').length > 0) {
            // console.log('At least one checkbox is checked');
            $(this).closest('.filter-dropdown-wrapper').addClass('active');
        } else {
            // console.log('No checkbox is checked');
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

    // setTimeout(function () {
    function setCheckboxSelectLabels(elem) {
        var wrappers = $('.w-dropdown');
        $.each(wrappers, function (key, wrapper) {
            var checkboxes = $(wrapper).find('.w-checkbox-input');
            var label = $(wrapper).find('.event-list-wrapper-cms').attr('id');
            var prevText = '';
            $.each(checkboxes, function (i, checkbox) {
                var button = $(wrappers).find('.filter-text');
                // console.log(button);
                // var button = $(wrapper).find('.filter-text');
                if ($(checkbox).prop('checked') == true) {
                    var text = $(checkbox).next().html();
                    var btnText = prevText + text;
                    var numberOfChecked = $(wrapper).find('input.w-checkbox-input:checkbox:checked').length;
                    if (numberOfChecked >= 3) {
                        btnText = numberOfChecked + ' ' + label + ' selected';
                    }
                    $(button).text(btnText);
                    prevText = btnText + ', ';
                }
            });
            // console.log(button)
        });
    }
    // }, 500);


});
