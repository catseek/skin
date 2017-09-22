var dataTagsGeneral = [
    {
        tag: "f.b",
        name: "蓝色字体符",
        desc: "蓝色文本开始代码符"
    },
    {
        tag: "f.eb",
        name: " - ",
        desc: ""
    },
    {
        tag: "f.nl",
        name: "",
        desc: ""
    },
    {
        tag: "duration",
        name: "",
        desc: ""
    },
    {
        tag: "damage.raw",
        name: "",
        desc: "-"
    },
    {
        tag: "damage.total",
        name: "",
        desc: ","
    },
    {
        tag: "damage.totalk",
        name: "-",
        desc: ""
    },
    {
        tag: "damage.ps",
        name: "DPS",
        desc: ""
    },
    {
        tag: "damage.psraw",
        name: "DPS",
        desc: ""
    },
    {
        tag: "damage.count",
        name: "",
        desc: "()"
    },
    {
        tag: "damage.highest.full",
        name: "",
        desc: "-"
    },
    {
        tag: "damage.highest.value",
        name: " - ",
        desc: ""
    },
    {
        tag: "damage.accuracy.hits",
        name: "",
        desc: ""
    },
    {
        tag: "damage.accuracy.misses",
        name: "Miss",
        desc: ""
    },
    {
        tag: "damage.accuracy.percent",
        name: "",
        desc: "%"
    },
    {
        tag: "damage.criticals.count",
        name: "",
        desc: ""
    },
    {
        tag: "damage.criticals.percent",
        name: "",
        desc: "%"
    },
    {
        tag: "healing.raw",
        name: "",
        desc: ",-"
    },
    {
        tag: "healing.total",
        name: "",
        desc: ", "
    },
    {
        tag: "healing.ps",
        name: "HPS",
        desc: ", "
    },
    {
        tag: "healing.psraw",
        name: "HPS",
        desc: ", "
    },
    {
        tag: "healing.count",
        name: "",
        desc: ""
    },
    {
        tag: "healing.highest.full",
        name: "",
        desc: "-"
    },
    {
        tag: "healing.highest.value",
        name: " - ",
        desc: ", "
    },
    {
        tag: "healing.criticals.count",
        name: "",
        desc: ""
    },
    {
        tag: "healing.criticals.percent",
        name: "",
        desc: "%"
    },
    {
        tag: "tanking.raw",
        name: "",
        desc: "-"
    },
    {
        tag: "tanking.total",
        name: "",
        desc: "-"
    },
    {
        tag: "kills",
        name: "",
        desc: ""
    },
    {
        tag: "deaths",
        name: "",
        desc: ""
    },
]
var dataTagsEncounter = [
    {
        tag: "title",
        name: "",
        desc: ""
    },
    {
        tag: "currentZone",
        name: "",
        desc: ""
    },
].concat(dataTagsGeneral);

var dataTagsCombatant = [
    {
        tag: "name",
        name: "",
        desc: ""
    },
    {
        tag: "name15",
        name: "15",
        desc: "15"
    },
    {
        tag: "job",
        name: "",
        desc: "3"
    },
    {
        tag: "longjob",
        name: "()",
        desc: ""
    },
    {
        tag: "role",
        name: "",
        desc: "tank"
    },
    {
        tag: "damage.percent",
        name: "%",
        desc: "%"
    },
    {
        tag: "damage.directhit.count",
        name: "",
        desc: ""
    },
    {
        tag: "damage.directhit.percent",
        name: "%",
        desc: "%"
    },
    {
        tag: "damage.critdirecthit.percent",
        name: "",
        desc: "%"
    },
    {
        tag: "healing.percent",
        name: "%",
        desc: "%"
    },
    {
        tag: "healing.over",
        name: "%",
        desc: "%"
    },
    {
        tag: "tanking.parry",
        name: "%",
        desc: "%"
    },
    {
        tag: "tanking.block",
        name: "%",
        desc: "%"
    },
].concat(dataTagsGeneral);

// Probably should move these to their own file
function padLeft(s, n) {
    s = s + "";
    return ((s.length >= n) ? s.slice(0, n) : (new Array(n - s.length + 1)).join(" ") + s);
}
function padRight(s, n) {
    s = s + "";
    return ((s.length >= n) ? s.slice(0, n) : s + (new Array(n - s.length + 1)).join(" "));
}

var dataTagsDiscord = {
    "Job": {
        display: function (db) {
            var str = parseData("{job}", db);
            if (str.length > 3) {
                str = str.slice(0, 3);
            }
            return "[" + str.toUpperCase() + "]";
        },
        column: "Job",
        width: 5,
        desc: "Job"
    },
    "Name": {
        tag: "{name15}",
        display: "%s",
        column: "Name",
        minWidth: 15,
        width: 15,
        desc: "Name"
    },
    "JobAndName": {
        display: function (db) {
            var job = parseData("{job}", db);
            var name = parseData("{name15}", db);
            var str = "";
            if (job.length <= 3) {
                str += "[" + job.toUpperCase() + "]";
            }
            str += name;
            str = padRight(str, 20);
            
            return str;
        },
        column: "Name",
        width: 20,
        desc: "Job and Name"
    },
    "DPS": {
        tag: "{damage.psraw}",
        display: "<%s>",
        column: "dps",
        minWidth: 4,
        width: 6,
        padLeft: true,
        desc: "DPS"
    },
    "DamagePercent": {
        tag: "{damage.percent}",
        display: "<%s>",
        column: "dmg%",
        minWidth: 3,
        width: 5,
        padLeft: true,
        desc: "Damage percent"
    },
    "CritPercent": {
        tag: "{damage.criticals.percent}",
        display: "<%s>",
        column: "crit%",
        minWidth: 3,
        width: 5,
        padLeft: true,
        desc: "Critical Hit rate"
    },
    "DirectHitPercent": {
        tag: "{damage.directhit.percent}",
        display: "<%s>",
        column: "dh%",
        minWidth: 3,
        width: 5,
        padLeft: true,
        desc: "Direct Hit rate"
    },
    "CritDirectHitPercent": {
        tag: "{damage.critdirecthit.percent}",
        display: "<%s>",
        column: "critdh%",
        minWidth: 3,
        width: 7,
        padLeft: true,
        desc: "Critical Direct Hit rate"
    },
    "AccuracyPercent": {
        tag: "{damage.accuracy.percent}",
        display: "<%s>",
        column: "acc%",
        minWidth: 3,
        width: 5,
        padLeft: true,
        desc: "Accuracy rate"
    },
    "MaxHit": {
        display: function (db) {
            var hit = parseData("{damage.highest.full}", db).split("-");
            if (hit[0].length > 15) {
                hit[0] = hit[0].slice(0, 12) + "...";
            }                       
            return "[" + padRight(hit[0], 15) + "][" + padLeft(hit[1], 6) + "]";
        },
        column: "max hit",
        width: 25,
        desc: "Highest damage"
    }
};