// JavaScript source code
var Converter = (function () {
    // private stuff goes here


    return {

        convertFromImperialToMetric: function (weight) {
            return (weight * 2.2);
        },

        convertFromMetricToImperial: function (weight) {
            return (weight / 2.2);
        }

    }


})();
