var job_details = {
    "acn": {
        role: "",
        name: ""
    },
    "smn": {
        role: "",
        name: ""
    },
    "arc": {
        role: "",
        name: ""
    },
    "brd": {
        role: "",
        name: ""
    },
    "blm": {
        role: "",
        name: ""
    },
    "thm": {
        role: "",
        name: ""
    },
    "drg": {
        role: "",
        name: ""
    },
    "lnc": {
        role: "",
        name: ""
    },
    "pgl": {
        role: "",
        name: ""
    },
    "mnk": {
        role: "",
        name: ""
    },
    "mch": {
        role: "",
        name: ""
    },
    "rog": {
        role: "",
        name: ""
    },
    "nin": {
        role: "",
        name: ""
    },
    "rdm": {
        role: "",
        name: ""
    },
    "sam": {
        role: "",
        name: ""
    },
    "ast": {
        role: "",
        name: ""
    },
    "cnj": {
        role: "",
        name: ""
    },
    "whm": {
        role: "",
        name: ""
    },
    "sch": {
        role: "",
        name: ""
    },
    "drk": {
        role: "",
        name: ""
    },
    "mrd": {
        role: "",
        name: ""
    },
    "war": {
        role: "",
        name: ""
    },
    "gla": {
        role: "",
        name: ""
    },
    "pld": {
        role: "",
        name: ""
    }
};
var dataMapping = {
    f: {
        b: "<b>",
        eb: "</b>",
        nl: "\n"
    },
    name: function (db) {
        if (typeof db["name"] !== "undefined") {
            if (pSettings.current.config.general.jobNames.enable && (pSettings.current.config.general.jobNames.self || db["name"] !== "YOU")) {
                if (typeof db["Job"] !== "undefined" && db["Job"] != "") {
                    return job_details[db["Job"].toLowerCase()].name;
                } else if (typeof db["name"] !== "undefined" && db["name"].indexOf("(") != -1) {
                    return "Chocobo";
                } else {
                    return db["name"];
                }
            } else {
                if (db["name"] === "YOU" && pSettings.current.config.general.customName.enable) {
                    return pSettings.current.config.general.customName.name;
                } else {
                    return db["name"];
                }
            }
        }
    },
    name15: function (db) {
        if (typeof db["name"] !== "undefined") {
            var str = "";
            if (pSettings.current.config.general.jobNames.enable && (pSettings.current.config.general.jobNames.self || db["name"] !== "YOU")) {
                if (typeof db["Job"] !== "undefined" && db["Job"] != "") {
                    str = job_details[db["Job"].toLowerCase()].name;
                } else if (typeof db["name"] !== "undefined" && db["name"].indexOf("(") != -1) {
                    str = "Chocobo";
                } else {
                    str = db["name"];
                }
            } else {
                if (db["name"] === "YOU" && pSettings.current.config.general.customName.enable) {
                    str = pSettings.current.config.general.customName.name;
                } else {
                    str = db["name"];
                }
            }
            return str.substring(0, 15);
        }
    },
    job: function (db) {
        if (typeof db["Job"] !== "undefined" && db["Job"] != "") {
            return db["Job"].toLowerCase();
        } else if (typeof db["name"] !== "undefined" && db["name"].indexOf("(") != -1) {
            return "pet";
        } else {
            return db["name"].replace(" ", "").toLowerCase();
        }
    },
    longjob: function (db) {
        if (typeof db["Job"] !== "undefined" && db["Job"] != "") {
            return job_details[db["Job"].toLowerCase()].name;
        } else if (typeof db["name"] !== "undefined" && db["name"].indexOf("(") != -1) {
            return "Chocobo";
        } else {
            return db["name"];
        }
    },
    role: function (db) {
        if (db["Job"] != "") {
            return job_details[db["Job"].toLowerCase()].role;
        }
    },
    title: "title",
    duration: "duration",
    currentZone: "CurrentZoneName",
    damage: {
        raw: function (db) {
            return parseFloat(db["damage"]);
        },
        total: function (db) {
            return parseFloat(db["damage"]).toLocaleString();
        },
        totalk: function (db) {
            return parseFloat(db["DAMAGE-K"]).toLocaleString();
        },
        ps: function (db) {
            return parseFloat(db["encdps"]).toLocaleString();
        },
        psraw: function (db) {
            return parseFloat(db["encdps"]);
        },
        count: "swings",
        percent: "damage%",
        highest: {
            full: "maxhit",
            value: "MAXHIT"
        },
        accuracy: {
            hits: "hits",
            misses: "misses",
            percent: "tohit"
        },
        criticals: {
            count: "crithits",
            percent: "crithit%"
        },
        directhit: {
            count: "DirectHitCount",
            percent: "DirectHitPct"
        },
        critdirecthit: {
            percent: "CritDirectHitPct"
        }
    },
    healing: {
        raw: function (db) {
            return parseFloat(db["healed"]);
        },
        total: function (db) {
            return parseFloat(db["healed"]).toLocaleString();
        },
        ps: function (db) {
            return parseFloat(db["enchps"]).toLocaleString();
        },
        psraw: function (db) {
            return parseFloat(db["enchps"]);
        },
        count: "heals",
        percent: "healed%",
        over: "OverHealPct",
        highest: {
            full: "maxheal",
            value: "MAXHEAL"
        },
        criticals: {
            count: "critheals",
            percent: "critheal%"
        }
    },
    tanking: {
        raw: function (db) {
            return parseFloat(db["damagetaken"]);
        },
        total: function (db) {
            return parseFloat(db["damagetaken"]).toLocaleString();
        },
        parry: "ParryPct",
        block: "BlockPct",
    },
    kills: "kills",
    deaths: "deaths"
}
function parseData(str, db) {
    var re = /\{([^}]+)\}/g;
    var matches = [], loop;
    var result = str;
    
    while ((loop = re.exec(str)) !== null) {
        matches.push(loop[1]);
    }
    
    for (var i = 0; i < matches.length; i++) {
        var value = "";
        var split = matches[i].split(".");

        result = result.replace("{"+matches[i]+"}", parseDataDeep(split, dataMapping, db));
    }
    
    return result;
}
function parseDataDeep(arr, map, db) {
    var result = "";
    if (typeof map[arr[0]] !== "undefined") {
        if (typeof map[arr[0]] == "string") {
            result = db[map[arr[0]]];
        } else if (typeof map[arr[0]] == "function") {
            result = map[arr[0]](db);
        } else if (typeof map[arr[0]] == "object") {
            if (arr[0] !== "f") {
                result = parseDataDeep(arr.splice(1), map[arr[0]], db);
            } else {
                result = map[arr[0]][arr[1]];
            }
        }
    } else {
        result = "ERR";
    }
    
    return result;
}
