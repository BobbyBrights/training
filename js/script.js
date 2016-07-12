//$(document).ready(function() {
//    var el = $(".social");
//    $(".header_language").click(function() {
//        el.toggle();
//    })
//});

$(document).ready(function() {
var item = $(".h-menu_item"),
    line = $(".item-line");

    item.mouseenter(function() {
        $(this).find(line).animate ({
            'width':'100%',
            'opacity': 1
        }, 1000, "linear");
    });
    item.mouseleave(function() {
        $(this).find(line).animate({
            'width':'0%',
            'opacity': 0
        }, 1000, "linear");
    });
    var button = $(".header_language"),
        drop = $(".language_drop-item");

    button.click(function() {
        drop.toggle("slow");
    })

});

//function getKeys(obj) {
//    var result = [];
//    for (var key in obj) {
//        result.push(key);
//    }
//    return result;
//}
//
//console.log(getKeys({one: 1, two: 2, three: 3}));
//
//function values(obj) {
//    var result = [];
//    for (var key in obj) {
//        result.push(obj[key]);
//    }
//   return result;
//}
//
//console.log(values({one: 1, two: 2, three: 3}));
//
//function pairs(object) {
//    var result = [];
//    for (var key in object) {
//        result.push([key, object[key]]);
//    }
//    return result;
//}
//
//console.log(pairs({one: 1, two: 2, three: 3}));

//function invert(obj) {
//    var newObject = {};
//    for (var key in obj) {
//        newObject[obj[key]] = key;
//    }
//    return newObject;
//}
//
//console.log(invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"}));

//function extend(destination, source) {
//    for (var i = 1; i <= arguments.length; i++) {
//        for (var key in arguments[i]) {
//           destination[key] = arguments[i][key];
//        }
//    }
//    return destination;
//}
//
//console.log(extend({name: 'moe'}, {age: 50, sex: 'female', name: 'tvoe'}, {city: 'kherson'}));

