jQuery(document).ready(function ($) {// Readying jquery code

    // Lightbox script
    $('.lightbox-trigger').click(function (e) {
        e.preventDefault(); //prevent default actions like open in new window

        var image_href = $(this).attr("src"); //get image from img clicked
        var image_alt = $(this).attr("alt"); //get image alt text
        console.log(image_href);
        console.log(image_alt);

        if ($('#lightbox').length > 0) { // #lightbox exists

            //insert img tag with clicked link's href as src value
            $('#content').html('<img src="' + image_href + '" />');

            //show lightbox window - you can use a transition here if you want, i.e. .show('fast')
            $('#lightbox').show();
        } else { //#lightbox does not exist 

            //create HTML markup for lightbox window
            var lightbox =
                '<div id="lightbox">' +
                '<p>Click anywhere to close</p>' +
                '<div id="content">' + //insert clicked link's href into img src
                '<img src="' + image_href + '" />' +
                '</div>' +
                '</div>';

            //insert lightbox HTML into page
            $('body').append(lightbox);
        }

        $('#lightbox').live('click', function () {
            $('#lightbox').hide();
        });

    });

    //Skill proficiency chip script
    $('.chip').click(function (e) {
        e.preventDefault();

        var anchorID = $(this).attr("href"); //get chip anchor link id
        console.log(anchorID);

        if ( $(anchorID).hasClass('highlighted')){

        } else {
            $(anchorID).addClass('highlighted');
            setTimeout(function()  {
                $(anchorID).removeClass('highlighted');
            }, 3000);
        }
    });
});