function expandTextarea(element) {
    var $el = $(element),
        height = element.scrollHeight,
        $container = $('.masonry-wrapper');

    $el.css({
        'height': 'auto',
        'overflow-y': 'hidden'
    });

    if (height > 0) {
        $el.height(element.scrollHeight);
    } else {
        window.setTimeout(function() {
            $el.height(element.scrollHeight);
        }, 1);
    }

    if (window.masonry) {
        window.masonry.layout();
    }
}
