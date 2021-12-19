$(function () {

    // Grab the template script
    var wishlistTemplate = $("#list-template").html();
    var itemCard = $("#card-template").html();
    var wishList = $("#wishlist-template").html();
    var choiceTemplate = $("#choices-template").html();

    // Compile the template
    var theTemplate = Handlebars.compile(wishlistTemplate);
    Handlebars.registerPartial("card", itemCard);
    Handlebars.registerPartial("wishlist", wishList);
    Handlebars.registerPartial("choices", choiceTemplate);


    let context;
    fetch('./data.json').then(function (u) {
        return u.json();
    }).then(function (json) {
        context = json;
        for (i = 0; i < context["cards"].length; i++) {
            context["cards"][i]["id"] = i + 1;
        }
        // Pass our data to the template
        var theCompiledHtml = theTemplate(context);

        // Add the compiled html to the page
        $('.content-placeholder').html(theCompiledHtml);

        $(".card").click(function () {
            var card = $(this).attr("id");
            $('#' + card).toggleClass("bg-danger", "");
            $('#btn-' + card).toggleClass("btn-danger", "btn-success");
            var button = $("#btn-" + card);
            button.text() == button.data("text-swap") ? button.text(button.data("text-original")) : button.text(button.data("text-swap"));
            $("#text-" + card).toggle();
            $("#price-" + card).toggle();
            $("#img-" + card).toggle();
            var choice = context.cards[card - 1];
            if (context.selections.includes(choice)) {
                var index = context.selections.indexOf(choice);
                if (index > -1) {
                    context.selections.splice(index, 1);
                    context.total = (context.total - choice.price).toFixed(2);
                }
            }
            else {
                context.selections.push(choice);
                context.total = (context.total + choice.price).toFixed(2);
            }
            var thePartial = Handlebars.compile(choiceTemplate);
            var compiledPartial = thePartial(context);
            $('.choices-placeholder').html(compiledPartial);
        });
    });
});