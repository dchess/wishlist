$(function () {


    // Grab the template script
    var wishlistTemplate = $("#list-template").html();
    var itemCard = $("#card-template").html();
    var amazonList = $("#amazon-items").html();

    // Compile the template
    var theTemplate = Handlebars.compile(wishlistTemplate);
    Handlebars.registerPartial("card", itemCard);


    var context = {
        "cards": [
            {
                "title": "Snow Boots",
                "text": "Boys Snow Boots for Boys Little Big Kids Size Cold Weather Waterproof Outdoor Warm Winte Faux Fur Lined Winter Flat Riding Boots Shoes(Little Kid/Big Kid)",
                "price": "$29.98",
                "link": "https://www.amazon.com/dp/B08JYYLK4B/?coliid=IRJ4SIIDC072D&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41J6osna4qL._SS135_.jpg"
            },
            {
                "title": "Balance Board",
                "text": "Wooden Wobble Balance Board, Gentle Monster 35 Inch Rocker Board Natural Wood, Kids Toddler Open Ended Learning Toy , Yoga Curvy Board for Classroom & Office Adult",
                "price": "$79.99",
                "link": "https://www.amazon.com/dp/B083KFHKZR/?coliid=IKN44J2B8WT3B&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41f+fsRHOiL._SS135_.jpg"
            },
            {
                "title": "Cubcoat Tiger",
                "text": "Cubcoats Tomo The Tiger - 2-in-1 Transforming Hoodie and Soft Plushie - Orange",
                "price": "$44.00",
                "link": "https://www.amazon.com/dp/B07NXD7PYL/?coliid=I274O6VFLIB31A&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41Fnru1brTL._SS135_.jpg"
            },
            {
                "title": "Konario",
                "text": "Konario Memory Game - A Unique Matching Game for Every Sense - Board Games for Adults and Family (Ages 6-99) with Fun Scratch and Sniff Stickers & Taste Candies - Great for Kids Educational Activities",
                "price": "$29.98",
                "link": "https://www.amazon.com/dp/B08FGC9JKV/?coliid=I1OXHORHLB4STC&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/51h1DDdyvVL._SS135_.jpg"
            },
            {
                "title": "The Darkest Hour (Book)",
                "text": "The Darkest Dark",
                "price": "$14.49",
                "link": "https://www.amazon.com/dp/0316394726/?coliid=I14YSWYDF9M8I1&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/51le1D5yalL._SS135_.jpg"
            },
            {
                "title": "Cinnamon (Book)",
                "text": "Cinnamon",
                "price": "$5.99",
                "link": "https://www.amazon.com/dp/B01KT0V9TQ/?coliid=I2PHJ70Z0V29S4&colid=1OER7C2WQUMUB&psc=0&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/51FJE5eKMcL._SS135_.jpg"
            },
            {
                "title": "Stormy Weather (Book)",
                "text": "Stormy Weather",
                "price": "$12.32",
                "link": "https://www.amazon.com/dp/0747599726/?coliid=I3PIB8TO1N14Y7&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/61FuSR4I+nL._SS135_.jpg"
            },
            {
                "title": "Moon! Earth's Best Friend (Book)",
                "text": "Moon! Earth's Best Friend (Our Universe, 3)",
                "price": "$14.29",
                "link": "https://www.amazon.com/dp/1250199344/?coliid=IQC0J4EUT7Y0C&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/418gKvF-jxL._SS135_.jpg"
            },
            {
                "title": "Marvel Heroes",
                "text": "Playskool Heroes Mega Mighties Marvel Super Hero Adventures Web Warriors 3 Pack, Spider-Man, Kid Arachnid, Marvel’s Rhino, 10in Figures, Kids Ages 3 & Up",
                "price": "$22.36",
                "link": "https://www.amazon.com/dp/B07QX8SPXT/?coliid=IJOSGWD3M5J15&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41feLQNuLhL._SS135_.jpg"
            },
            {
                "title": "Activity Doll",
                "text": "Playskool Dressy Kids Boy Activity Plush Stuffed Doll Toy for Kids and Preschoolers 2 Years and Up",
                "price": "$21.49",
                "link": "https://www.amazon.com/dp/B082N75D6J/?coliid=I26SXNC1CZ7X3U&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41yDmqEy9GL._SS135_.jpg"
            },
            {
                "title": "Bath Bobbers",
                "text": "Munchkin Bath Bobbers Toy",
                "price": "$7.49",
                "link": "https://www.amazon.com/dp/B01G1JQY2G/?coliid=IPKBACD52XTDQ&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/31kyMfSb5sL._SS135_.jpg"
            },
            {
                "title": "Shark Grabber Bath Toy",
                "text": "Hoovy Bath Toys Fun Baby Bathtub Toy Shark Bath Toy for Toddlers Boys & Girls Shark Grabber with 4 Toy Fish Included (Shark Grabber)",
                "price": "$12.97",
                "link": "https://www.amazon.com/dp/B07XLPN6CT/?coliid=I2494V09TKSRIB&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/413+03Wl9vL._SS135_.jpg"
            },
            {
                "title": "Fishing Bath Toy",
                "text": "Munchkin Fishin' Bath Toy",
                "price": "$7.73",
                "link": "https://www.amazon.com/dp/B01N52DUNK/?coliid=I32H9GBT5TD9HO&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/31lcHMtaImL._SS135_.jpg"
            },
            {
                "title": "Globe",
                "text": "TTKTK Illuminated World Globe for Kids with Wooden Base - Night View Stars Constellation Pattern Globe with Detailed Colorful World Map,Built-in LED Bulb, Educational Gift, Night Stand Decor 8inch",
                "price": "$41.99",
                "link": "https://www.amazon.com/dp/B0791JHHLQ/?coliid=I23KXWT742RX4D&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/51jKmCeT8iL._SS135_.jpg"
            },
            {
                "title": "Caspar Babypants CD",
                "text": "Keep It Real!",
                "price": "$13.59",
                "link": "https://www.amazon.com/dp/B07FTS2LGN/?coliid=I2IWOTNX6K2BFR&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/51l4niohO8L._SS135_.jpg"
            },
            {
                "title": "Terrarium",
                "text": "Light-up Terrarium Kit for Kids with LED Light on Lid - Create Your Own Customized Mini Garden in a Jar That Glows at Night - Science Kits for Boys & Girls - Gardening Gifts for Kids - Children Toys",
                "price": "$24.99",
                "link": "https://www.amazon.com/dp/B0763TLL6V/?coliid=I178F8Z3MCD9KZ&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/513TKtOBkPL._SS135_.jpg"
            },
            {
                "title": "Winne the Pooh Matching Game",
                "text": "Wonder Forge Disney Winnie the Pooh Matching Game for Girls & Boys",
                "price": "$9.99",
                "link": "https://www.amazon.com/dp/B07QN8VT5Q/?coliid=I2SNR0JNACDNP9&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/51nUuLqc6TL._SS135_.jpg"
            },
            {
                "title": "Puppet",
                "text": "Hashtag Collectibles Potoo Puppet",
                "price": "$19.99",
                "link": "https://www.amazon.com/dp/B0754LQT9F/?coliid=I34XOA240HHN0O&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41cdHHwK+SL._SS135_.jpg"
            },
            {
                "title": "Dragon Toy",
                "text": "Dungeons & Dragons E-86990 Ultra Pro Figurines of Adorable Power-Red Dragon",
                "price": "$15.99",
                "link": "https://www.amazon.com/dp/B07WJ31LB9/?coliid=I38SPJ0W0STO1A&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41HvRwGoNeL._SS135_.jpg"
            },
            {
                "title": "Spider-Man Action Figure",
                "text": "Spider-Man Hasbro Marvel Legends Series 6-inch Collectible Action Figure Velocity Sui",
                "price": "$29.99",
                "link": "https://www.amazon.com/dp/B07Z8KW3BK/?coliid=IRV4JZ493BLD2&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41w5uSUuxxL._SS135_.jpg"
            },
            {
                "title": "Rainstick Musical Instrument",
                "text": "20in Chilean Cactus Rainstick Musical Instrument with yarn wrap and sealant - Authentic Rain Stick Shaker from Africa Heartwood Project (TM)",
                "price": "$18.50",
                "link": "https://www.amazon.com/dp/B0149J2WYO/?coliid=I1TCHKHT0LCP9T&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/31WAV7O4jlL._SS135_.jpg"
            },
            {
                "title": "Taco Toys",
                "text": "Melissa & Doug Taco & Tortilla Set",
                "price": "$20.24",
                "link": "https://www.amazon.com/dp/B07HM95PP1/?coliid=I1RAQ2J2GK2N7&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/51srPgaYtAL._SS135_.jpg"
            },
            {
                "title": "Buzz Lightyear Action Figure",
                "text": "Disney Pixar Toy Story Blast-Off Buzz Lightyear Figure",
                "price": "$24.99",
                "link": "https://www.amazon.com/dp/B07FWJ1JFZ/?coliid=I2BLU1ZQM0KJFA&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41tCM6D-EXL._SS135_.jpg"
            },
            {
                "title": "Cat Puppet",
                "text": "Folkmanis Fluffy Cat Hand Puppet",
                "price": "$30.59",
                "link": "https://www.amazon.com/dp/B000N56U88/?coliid=IKKVRUA1208XR&colid=1OER7C2WQUMUB&psc=1&ref_=lv_ov_lig_dp_it",
                "img": "https://m.media-amazon.com/images/I/41WlbCrRFBL._SS135_.jpg"
            }
        ]
    };

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
    });
});
