var dataTagsGeneral = [
    {
        tag: "f.b",
        name: "蓝色文本",
        desc: "蓝色文本开始代码符"
    },
    {
        tag: "f.eb",
        name: "蓝色文本 - 结束",
        desc: "蓝色文本结束代码符"
    },
    {
        tag: "f.nl",
        name: "新分隔线",
        desc: "插入新分隔线"
    },
    {
        tag: "duration",
        name: "持续时间",
        desc: "战斗的持续时间"
    },
    {
        tag: "damage.raw",
        name: "伤害数据条",
        desc: "伤害数据条显示伤害数据内容,显示板必须要有一种数据条(无格式)"
    },
    {
        tag: "damage.total",
        name: "伤害",
        desc: "造成的总伤害量(直播模式格式)"
    },
    {
        tag: "damage.totalk",
        name: "伤害 - 千",
        desc: "以千为单位的伤害总量"
    },
    {
        tag: "damage.ps",
        name: "DPS",
        desc: "每秒造成的伤害量(直播模式格式)"
    },
    {
        tag: "damage.psraw",
        name: "DPS",
        desc: "每秒造成的伤害量(无格式)"
    },
    {
        tag: "damage.count",
        name: "伤害次数",
        desc: "造成的伤害次数"
    },
    {
        tag: "damage.highest.full",
        name: "最强伤害",
        desc: "造成最高一次伤害量的技能(完整技能名)"
    },
    {
        tag: "damage.highest.value",
        name: "最强伤害 - 数值",
        desc: "造成最高一次伤害的伤害量(无技能名)"
    },
    {
        tag: "damage.accuracy.hits",
        name: "击中次数",
        desc: "所造成的击中次数"
    },
    {
        tag: "damage.accuracy.misses",
        name: "Miss次数",
        desc: "所造成的未命中次数"
    },
    {
        tag: "damage.accuracy.percent",
        name: "命中率",
        desc: "所攻击次数中的命中%"
    },
    {
        tag: "damage.criticals.count",
        name: "暴击次数",
        desc: "所造成伤害次数的暴击次数"
    },
    {
        tag: "damage.criticals.percent",
        name: "暴击率",
        desc: "所造成的伤害次数的暴击%"
    },
    {
        tag: "healing.raw",
        name: "治疗数据条",
        desc: "治疗数据条显示治疗数据内容,显示板必须要有一种数据条(无格式)"
    },
    {
        tag: "healing.total",
        name: "治疗量",
        desc: "所造成的治疗总量(直播模式格式)"
    },
    {
        tag: "healing.ps",
        name: "HPS",
        desc: "每秒造成的治疗量(直播模式格式)"
    },
    {
        tag: "healing.psraw",
        name: "HPS",
        desc: "每秒造成的治疗量(无格式)"
    },
    {
        tag: "healing.count",
        name: "治疗次数",
        desc: "所造成的治疗总次数"
    },
    {
        tag: "healing.highest.full",
        name: "最强治疗",
        desc: "造成最高一次治疗量的技能(完整技能名)"
    },
    {
        tag: "healing.highest.value",
        name: "最强治疗 - 值",
        desc: "造成最高一次治疗的治疗量(无技能名)"
    },
    {
        tag: "healing.criticals.count",
        name: "暴击次数",
        desc: "所造成治疗次数中的暴击次数"
    },
    {
        tag: "healing.criticals.percent",
        name: "暴击率",
        desc: "所造成治疗次数中的暴击%"
    },
    {
        tag: "tanking.raw",
        name: "承伤数据条",
        desc: "承伤数据条显示承受伤害数据内容，显示板必须要有一种数据条(无格式)"
    },
    {
        tag: "tanking.total",
        name: "承受伤害",
        desc: "所承受的伤害总量(直播模式格式)"
    },
    {
        tag: "kills",
        name: "击杀",
        desc: "所击杀的敌人数量"
    },
    {
        tag: "deaths",
        name: "死亡",
        desc: "嗝屁次数"
    },
]
var dataTagsEncounter = [
    {
        tag: "title",
        name: "标题",
        desc: "本场的战斗名称"
    },
    {
        tag: "currentZone",
        name: "当前区域",
        desc: "所处于的当前地图"
    },
].concat(dataTagsGeneral);

var dataTagsCombatant = [
    {
        tag: "name",
        name: "玩家名称",
        desc: "玩家完整名称"
    },
    {
        tag: "name15",
        name: "玩家名称15",
        desc: "玩家名称缩写到15字符"
    },
    {
        tag: "job",
        name: "职业",
        desc: "玩家职业缩写"
    },
    {
        tag: "longjob",
        name: "职业(全)",
        desc: "玩家职业的完整名称(中文)"
    },
    {
        tag: "role",
        name: "职责",
        desc: "玩家战斗中所担任的位置"
    },
    {
        tag: "damage.percent",
        name: "伤害%",
        desc: "该玩家在团队中所造成的伤害%"
    },
    {
        tag: "damage.directhit.count",
        name: "直击",
        desc: "所造成的直击次数"
    },
    {
        tag: "damage.directhit.percent",
        name: "直击率",
        desc: "所造成伤害中的直击%"
    },
    {
        tag: "damage.critdirecthit.percent",
        name: "直击暴击率",
        desc: "所造成直击次数中的暴击%"
    },
    {
        tag: "healing.percent",
        name: "治疗%",
        desc: "该玩家在团队中造成的治疗%"
    },
    {
        tag: "healing.over",
        name: "过量治疗",
        desc: "该玩家造成的过量治疗%"
    },
    {
        tag: "tanking.parry",
        name: "躲闪",
        desc: "所受到伤害中的躲闪%"
    },
    {
        tag: "tanking.block",
        name: "格挡",
        desc: "所受到伤害中的格挡%"
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
