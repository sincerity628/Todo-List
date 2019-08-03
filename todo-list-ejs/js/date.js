//jshint esversion: 6

//references:
// How to format a JavaScript date
// https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date

// 6 Ways to Declare JavaScript Functions
// https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/#2functionexpression

// use "module.exports" as well
exports.getDate = function() {
    let today = new Date();
    let options = {weekday: "long", day: "numeric", month: "long"};
    return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
    let today = new Date();
    let options = {weekday: "long"};
    return today.toLocaleDateString("en-US", options);
};

// console.log(module);
// Module {
//     id: '/Users/xushuangyu/Desktop/TodoList-v2/js/date.js',
//     exports: { getDate: [Function: getDate], getDay: [Function: getDay] },
//     parent:
//      Module {
//        id: '.',
//        exports: {},
//        parent: null,
//        filename: '/Users/xushuangyu/Desktop/TodoList-v2/app.js',
//        loaded: false,
//        children: [ [Module], [Module], [Circular] ],
//        paths:
//         [ '/Users/xushuangyu/Desktop/TodoList-v2/node_modules',
//           '/Users/xushuangyu/Desktop/node_modules',
//           '/Users/xushuangyu/node_modules',
//           '/Users/node_modules',
//           '/node_modules' ] },
//     filename: '/Users/xushuangyu/Desktop/TodoList-v2/js/date.js',
//     loaded: false,
//     children: [],
//     paths:
//      [ '/Users/xushuangyu/Desktop/TodoList-v2/js/node_modules',
//        '/Users/xushuangyu/Desktop/TodoList-v2/node_modules',
//        '/Users/xushuangyu/Desktop/node_modules',
//        '/Users/xushuangyu/node_modules',
//        '/Users/node_modules',
//        '/node_modules' ] }