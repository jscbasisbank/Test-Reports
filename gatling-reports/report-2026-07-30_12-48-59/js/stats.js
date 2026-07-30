var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1121",
        "ok": "1121",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2019",
        "ok": "2019",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1526",
        "ok": "1526",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "251",
        "ok": "251",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1489",
        "ok": "1489",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1742",
        "ok": "1742",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1937",
        "ok": "1937",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2019",
        "ok": "2019",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 8.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 46,
    "percentage": 92.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.67",
        "ok": "16.67",
        "ko": "-"
    }
},
contents: {
"req_first-sign-in-1969104293": {
        type: "REQUEST",
        name: "First Sign-In",
path: "First Sign-In",
pathFormatted: "req_first-sign-in-1969104293",
stats: {
    "name": "First Sign-In",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1121",
        "ok": "1121",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2019",
        "ok": "2019",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1526",
        "ok": "1526",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "251",
        "ok": "251",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1489",
        "ok": "1489",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1742",
        "ok": "1742",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1937",
        "ok": "1937",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2019",
        "ok": "2019",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 8.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 46,
    "percentage": 92.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.67",
        "ok": "16.67",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
