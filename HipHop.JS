/*
 Copyright (c) 2012-2013 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
TERMS OF REPRODUCTION USE
 
Failure to follow these terms will result in me getting very angry at you
and having your software tweaked or removed if possible. Either way, you're
still an idiot for not following such a basic rule.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 
 
 * NOTE:  PLEASE CONTACT DJ-NEON FOR THIS SCRIPT (DO NOT CHANGE ANYTHING ON THIS SCRIPT OR USE THIS SCRIPT WHICH
 * WAS WRITTEN BY IT'S RIGHTFUL OWNER: DJ NOEN)
 *
 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 * @Member:    MV1 - MV1 (Owner. of HipHop TT)
 *
 */
 
var baseUrl = "http://i.imgur.com/";
var wooting = true;
 
function startWooting() {
        stopWooting();
 
        API.on(API.DJ_ADVANCE, DJ_ADVANCE_LISTENER);
        wootSong();
 
        var css = document.createElement("style");
        css.type = "text/css";
        css.setAttribute('id', 'autowooter-css');
        css.innerHTML = "#autowooter-button { left: 213px; } .autowooter-icon-on { position: absolute; width: 30px; height: 30px; background: url("+ baseUrl + "6KE0NZT.png); } .autowooter-icon-off { position: absolute; width: 30px; height: 30px; background: url("+ baseUrl + "b5SXH20.png); }";
        document.body.appendChild(css);
 
        $('#chat-header').append('<div id="autowooter-button" class="chat-header-button"><i class="autowooter-icon autowooter-icon-on"></i></div>');
       
        API.chatLog();
 
        $("#autowooter-button").click(function() {
                if(wooting) {
                        $("#autowooter-button").html('<i class="autowooter-icon autowooter-icon-off"></i>');
                } else {
                        $("#autowooter-button").html('<i class="autowooter-icon autowooter-icon-on"></i>');
                }
                wooting = !wooting;
                wootSong();
        });
}
 
function stopWooting() {
        API.off(API.DJ_ADVANCE, DJ_ADVANCE_LISTENER);
        wootSong();
        $('#autowooter-js').remove();
        $('#autowooter-css').remove();
        $('#autowooter-button').remove();
}
 
function DJ_ADVANCE_LISTENER(obj) {
        wootSong();
}
 
function wootSong() {
        if(wooting) {
                $("#woot").click();
        }
}
 
startWooting();
 
 
var mubBot = {};
var ruleSkip = {};
mubBot.misc = {};
mubBot.settings = {};
mubBot.moderators = {};
mubBot.filters = {};
botMethods = {};
mubBot.pubVars = {};
 
toSave = {};
toSave.settings = mubBot.settings;
toSave.moderators = mubBot.moderators;

mubBot.misc.version = "2.0.27";
mubBot.misc.origin = "This bot was created by MV1 and Neon alone, and it is copyrighted!";
mubBot.misc.changelog = "Added a secondary check for history";
mubBot.misc.ready = true;
mubBot.misc.lockSkipping = false;
mubBot.misc.lockSkipped = "0";
mubBot.misc.tacos = new Array();
mubBot.misc.tacos = ["blunt","cush","Chemo","Locoweed","marijuana","Ganja"];
mubBot.misc.cookie = new Array();
mubBot.misc.cookie = ["a chocolate chip cookie", "a sugar cookie", "an oatmeal raisin cookie", "a 'special' brownie", "an animal cracker", "a scooby snack", "a blueberry muffin", "a cupcake"];
mubBot.misc.commands = " !songlink, !linkify, !source, !rules, !theme, !creator, !download, !prop, !weed, !hug, !cookie, !reward, !wiki, !maxlength, !commands";
mubBot.misc.modcommands = " !test, !status, !skip, !bansong 1, !cancel, !save, !changelog, !trvf, !thf, !maxlength, !cooldown";
mubBot.misc.admincommands =", !tsf, !trf, !tbf";
 
 
joined = new Date().getTime();
 
cancel = false;
 
mubBot.filters.swearWords = new Array();
mubBot.filters.racistWords = new Array();
mubBot.filters.beggerWords = new Array();
 
mubBot.settings.maxLength = 5; //minutes
mubBot.settings.cooldown = 10; //seconds
mubBot.settings.staffMeansAccess = true;
mubBot.settings.historyFilter = true;
mubBot.settings.swearFilter = true;
mubBot.settings.racismFilter = true;
mubBot.settings.beggerFilter = true;
mubBot.settings.interactive = true;
mubBot.settings.ruleSkip = true;
mubBot.settings.removedFilter = true;
 
mubBot.admins = ["50aeaeb6c3b97a2cb4c25bd2"];
 
mubBot.filters.swearWords = ["slut","mofo","penis","penus","fuck","shit","bitch","cunt","twat","faggot","queer","dumb ass","pussy","dick","cocksucker","asshole","vagina","tit","mangina","tits","cock","jerk","puta","puto","cum","sperm"];
 
mubBot.filters.racistWords = ["nigger","kike","spick","porchmonkey","camel jockey","towelhead","towel head","chink","gook","porch monkey"];
 
mubBot.filters.beggerWords = ["fan4fan","fan me","fan pls","fans please","fan please","fan 4 fan","fan back","give me fans","gimme fans","fan back"];
 
mubBot.misc.tacos = ["blunt","cush","Chemo","Locoweed","marijuana","Ganja"];
mubBot.misc.cookie = ["a chocolate chip cookie", "a sugar cookie", "an oatmeal raisin cookie", "a 'special' brownie", "an animal cracker", "a scooby snack", "a blueberry muffin", "a cupcake"];

 
mubBot.pubVars.skipOnExceed;
mubBot.pubVars.command = false;
 
Array.prototype.remove=function(){var c,f=arguments,d=f.length,e;while(d&&this.length){c=f[--d];while((e=this.indexOf(c))!==-1){this.splice(e,1)}}return this};
 
API.on(API.DJ_ADVANCE, djAdvanceEvent);
 
function djAdvanceEvent(data){
    setTimeout(function(){ botMethods.djAdvanceEvent(data); }, 500);
}
 
API.on(API.USER_JOIN, UserJoin);
function UserJoin(user)
{
API.sendChat("Welcome to Hip Hop Turntable. To favorite/save the room just bookmark the webpage on your browser @" + user.username);
}
 
API.on(API.CURATE_UPDATE, callback);
function callback(obj)
{
var media = API.getMedia();
API.sendChat(obj.user.username + " Loves this song!");
}
 
botMethods.skip = function(){
    setTimeout(function(){
        if(!cancel) API.moderateForceSkip();
    }, 3500);
};
 
botMethods.load = function(){
    toSave = JSON.parse(localStorage.getItem("mubBotSave"));
    mubBot.settings = toSave.settings;
    ruleSkip = toSave.ruleSkip;
};
 
botMethods.save = function(){localStorage.setItem("mubBotSave", JSON.stringify(toSave))};
 
botMethods.loadStorage = function(){
    if(localStorage.getItem("mubBotSave") !== null){
        botMethods.load();
    }else{
        botMethods.save();
    }
};
 
botMethods.checkHistory = function(){
    currentlyPlaying = API.getMedia(), history = API.getHistory();
    caught = 0;
    for(var i = 0; i < history.length; i++){
        if(currentlyPlaying.cid === history[i].media.cid){
            caught++;
        }
    }
    caught--;
    return caught;
};
 
botMethods.getID = function(username){
    var users = API.getUsers();
    var result = "";
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            result = users[i].id;
            return result;
        }
    }
 
    return "notFound";
};
 
botMethods.cleanString = function(string){
    return string.replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/&#34;/g, "\"").replace(/&#59;/g, ";").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
 
botMethods.djAdvanceEvent = function(data){
    clearTimeout(mubBot.pubVars.skipOnExceed);
    if(mubBot.misc.lockSkipping){
        API.moderateAddDJ(mubBot.misc.lockSkipped);
        mubBot.misc.lockSkipped = "0";
        mubBot.misc.lockSkipping = false;
        setTimeout(function(){ API.moderateRoomProps(false, true); }, 500);
    }
    var song = API.getMedia();
    if(botMethods.checkHistory() > 0 && mubBot.settings.historyFilter){
        if(API.getUser().permission < 2){
            //API.sendChat("This song is in the history! You should make me a mod so that I could skip it!");
        }else if(API.getUser().permission > 1){
           // API.sendChat("@" + API.getDJs()[0].username + ", playing songs that are in the history isn't allowed, please check next time! Skipping..");
            //botMethods.skip()
        }else if(song.duration > mubBot.settings.maxLength * 60){
            mubBot.pubVars.skipOnExceed = setTimeout( function(){
               // API.sendChat("@"+API.getDJs()[0].username+" You have now played for as long as this room allows, time to let someone else have the booth!");
               // botMethods.skip();
            }, mubBot.settings.maxLength * 60000);
           // API.sendChat("@"+API.getDJs()[0].username+" This song will be skipped " + mubBot.settings.maxLength + " minutes from now because it exceeds the max song length.");
                //botMethods.skip();
        }else{
            setTimeout(function(){
                if(botMethods.checkHistory() > 0 && mubBot.settings.historyFilter){
                    //API.sendChat("@" + API.getDJs()[0].username + ", playing songs that are in the history isn't allowed, please check next time! Skipping..");
                    //botMethods.skip()
                };
            }, 1500);
        }
    }
};
 
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('!') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(mubBot.misc.ready || mubBot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1){
                switch(command[0].toLowerCase()){
                    case "test":
                        API.sendChat("/me Test Successful!");
                        if(mubBot.admins.indexOf(fromID) == -1){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
                    case "rules":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Rules: 1) Play mostly hip hop. 2) Avoid mainstream hip hop. 3) Trolls well be force to be booted.");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Rules: 1) Play mostly hip hop. 2) Avoid mainstream hip hop. 3) Trolls well be force to be booted.");
                        }else{
                            API.sendChat("Rules: 1) Play mostly hip hop. 2) Avoid mainstream hip hop. 3) Trolls well be force to be booted.");
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "theme":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Themes aren't available atm sorry :(");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Themes aren't available atm sorry :(");
                        }else{
                            API.sendChat("Themes aren't available atm sorry :(");
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "commands":
                        if(typeof command[1] == "undefined"){
                            API.sendChat(mubBot.misc.commands);
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+ mubBot.misc.commands);
                        }else{
                            API.sendChat(mubBot.misc.commands);
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "wiki":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@"+data.from+" https://en.wikipedia.org/wiki/Special:Random");
                        }else{
                            var r = data.message.substring(6).replace(g, "_");
                            $.getJSON("http://jsonp.appspot.com/?callback=?&url=" + escape("http://en.wikipedia.org/w/api.php?action=query&prop=links&format=json&titles="+r.replace(g,"_")),
                                function(wikiData){
                                    if (!wikiData || !wikiData.query || !wikiData.query.pages);
                                        return API.sendChat("@"+data.from+" http://en.wikipedia.org/wiki/"+r+" (NOT GUARANTEED TO BE CORRECT)");
                                    if (wikiData.query.pages[-1]) {
                                        API.sendChat("@"+data.from+" article not found");
                                    }else{
                                        for (var i in wikiData.query.pages)
                                            // note: the #... is just to make the url look nicer
                                            return API.sendChat("@"+data.from+" https://en.wikipedia.org/wiki/?curid="+i+"#"+escape(wikiData.query.pages[i].title) );
                                    }
                                }
                            );
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "linkify":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " You need to put a link!");
                        }else if(command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1){
                            API.sendChat("http://"+command[1]);
                        }else{
                            API.sendChat("Nice try! Advertising is not allowed in this room.");
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "songlink":
                        if(API.getMedia().format == 1){
                            API.sendChat("@" + data.from + " " + "http://youtu.be/" + API.getMedia().cid);
                        }else{
                            var id = API.getMedia().cid;
                            SC.get('/tracks', { ids: id,}, function(tracks) {
                                API.sendChat("@"+data.from+" "+tracks[0].permalink_url);
                            });
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "download":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Download your song free here: http://www.vebsi.com/");
                        }else{
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "source":
                        API.sendChat("http://goo.gl/VjPC3N");
                        if(mubBot.admins.indexOf(fromID) == -1){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                }
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('!') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(mubBot.misc.ready || mubBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
                switch(command[0].toLowerCase()){
                
                    case "say":
                    if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === " "){
                            }else{
                            API.sendChat(command[1]);
                        }
                    }
                   
                    case "skip":
                        if(API.getUser(data.fromID).permission > 1){
                        if(typeof command[1] === "undefined"){
                            API.moderateForceSkip();
                        }else{
                            API.sendChat('@'+API.getDJs()[0].username+' '+command[1]);
                            API.moderateForceSkip();
                        }
                    }
                        break;
 
                    case 'cancel':
                        cancel = true;
                        API.sendChat('AutoSkip cancelled');
                        break;
 
                    case "lockskip":
                        if( API.getUser(data.fromID).permission > 1){
                            API.moderateRoomProps(true, true);
                            mubBot.misc.lockSkipping = true;
                            mubBot.misc.lockSkipped = API.getDJs()[0].id;
                            setTimeout(function(){ API.moderateRemoveDJ(mubBot.misc.lockSkipped); }, 500);
                        }else{
                            API.sendChat("This command requires bouncer or higher!");
                        }
                        break;
 
                    case 'commands':
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1
                        var randomSentence = Math.floor(Math.random() * 3);
                        switch(randomSentence){
                        API.sendChat(mubBot.misc.modcommands + mubBot.misc.admincommands);
                        }, 1000);
                        break;
 
                    case "historyfilter":
                    case "hf":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1) mubBot.settings.historyFilter ? API.sendChat("History filter is enabled") : API.sendChat("History filter is disabled");
                        botMethods.save();
                        break;
 
                    case "swearfilter":
                    case "sf":
                        if(mubBot.admins.indexOf(fromID) > -1) mubBot.settings.swearFilter ? API.sendChat("Swearing filter is enabled") : API.sendChat("Swearing filter is disabled");
                        botMethods.save();
                        break;
 
                    case "racismfilter":
                    case "rf":
                        if(mubBot.admins.indexOf(fromID) > -1) mubBot.settings.racismFilter ? API.sendChat("Racism filter is enabled") : API.sendChat("Racism filter is disabled");
                        botMethods.save();
                        break;
 
                    case "beggerfilter":
                    case "bf":
                        if(mubBot.admins.indexOf(fromID) > -1) mubBot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
                        botMethods.save();
                        break;
 
                    case "tsf":
                        if(mubBot.admins.indexOf(fromID) > -1){
                            if(mubBot.settings.swearFilter){
                                mubBot.settings.swearFilter = false;
                                API.sendChat("Bot will no longer filter swearing.");
                            }else{
                                mubBot.settings.swearFilter = true;
                                API.sendChat("Bot will now filter swearing.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "trf":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            if(mubBot.settings.racismFilter){
                                mubBot.settings.racismFilter = false;
                                API.sendChat("Bot will no longer filter racism.");
                            }else{
                                mubBot.settings.racismFilter = true;
                                API.sendChat("Bot will now filter racism.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "tbf":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            if(mubBot.settings.beggerFilter){
                                mubBot.settings.beggerFilter = false;
                                API.sendChat("Bot will no longer filter fan begging.");
                            }else{
                                mubBot.settings.beggerFilter = true;
                                API.sendChat("Bot will now filter fan begging.");
                            }
                        }
                        botMethods.save();
                        break;
                    case "thf":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            if(mubBot.settings.historyFilter){
                                mubBot.settings.historyFilter = false;!
                                    API.sendChat("Bot will no longer skip songs that are in the room history.");
                            }else{
                                mubBot.settings.historyFilter = true;
                                API.sendChat("Bot will now skip songs that are in the room history.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "version":
                        API.sendChat("HipHop-Script version " + mubBot.misc.version);
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "origin":
                    case "author":
                    case "authors":
                    case "creator":
                        API.sendChat(mubBot.misc.origin);
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "status":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while(minutes > 60){
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Running for " + minutes + "m " : response = "Running for " + hours + "h " + minutes + "m";
                            response = response + " | Begger filter: "+mubBot.settings.beggerFilter;
                            response = response + " | Swear filter: "+mubBot.settings.swearFilter;
                            response = response + " | Racism filter: "+mubBot.settings.racismFilter;
                            response = response + " | History filter: "+mubBot.settings.historyFilter;
                            response = response + " | MaxLength: " + mubBot.settings.maxLength + "m";
                            response = response + " | Cooldown: " + mubBot.settings.cooldown + "s";
                            response = response + " | RuleSkip: "+ mubBot.settings.ruleSkip;
                            response = response + " | Removed Video Filter: "+ mubBot.settings.removedFilter;
                            API.sendChat(response);
                        }
                        break;
 
                    case "cooldown":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(mubBot.settings.cooldown != 0.0001){
                                    API.sendChat('Cooldown is '+mubBot.settings.cooldown+' seconds');
                                }else{
                                    API.sendChat('Cooldown is disabled');
                                }
                            }else if(command[1] == "disable"){
                                mubBot.settings.cooldown = 0.0001;
                                API.sendChat('Cooldown disabled');
                            }else{
                                mubBot.settings.cooldown = command[1];
                                API.sendChat('New cooldown is '+mubBot.settings.cooldown+' seconds');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "maxlength":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(mubBot.settings.maxLength != 1e+50){
                                    API.sendChat('Maxlength is '+mubBot.settings.maxLength+' minutes');
                                }else{
                                    API.sendChat('Maxlength is disabled');
                                }
                            }else if(command[1] == "disable"){
                                mubBot.settings.maxLength = Infinity;
                                API.sendChat('Maxlength disabled');
                            }else{
                                mubBot.settings.maxLength = command[1];
                                API.sendChat('New maxlength is '+mubBot.settings.maxLength+' minutes');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "interactive":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            mubBot.settings.interactive ? API.sendChat("Bot is interactive.") : API.sendChat("Bot is not interactive.");
                        }
                        break;
 
                    case "toggleinteractive":
                    case "ti":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            if(mubBot.settings.interactive){
                                mubBot.settings.interactive = false;
                                API.sendChat("Bot will no longer interact.");
                            }else{
                                mubBot.settings.interactive = true;
                                API.sendChat("Bot will now interact.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "save":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            botMethods.save();
                            API.sendChat("Settings saved.");
                        }
                        break;
 
                    case "stfu":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            mubBot.settings.interactive = false;
                            API.sendChat("Yessir!");
                        }
                        botMethods.save();
                        break;
 
                    case "changelog":
                        if(API.getUser(fromID).permission > 1 || mubBot.admins.indexOf(fromID) > -1){
                            API.sendChat("New in version " + mubBot.misc.version + " - " + mubBot.misc.changelog)
                        }
                        break;
 
                }
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('!') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(mubBot.misc.ready || mubBot.admins.indexOf(fromID) > -1 ||API.getUser(fromID).permission > 1){
                switch(command[0].toLowerCase()){
                
                   case "weed":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomTaco = Math.floor(Math.random() * mubBot.misc.tacos.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + crowd[randomUser].username + ", take this " + mubBot.misc.tacos[randomTaco] + ", you bum!");
                                    break;
                                case 1:
                                    API.sendChat("@" + crowd[randomUser].username + ", quickly! Smoke this " + mubBot.misc.tacos[randomTaco] + " before I do!");
                                    break;
                                case 2:
                                    API.sendChat("One free " + mubBot.misc.tacos[randomTaco] + " for you, @" + crowd[randomUser].username + ".");
                                    break;
                                case 3:
                                    API.sendChat("/me throws a " + mubBot.misc.tacos[randomTaco] + " at @" + crowd[randomUser].username + "!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomTaco = Math.floor(Math.random() * mubBot.misc.tacos.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + botMethods.cleanString(command[1]) + ", take this " + mubBot.misc.tacos[randomTaco] + ", you bum!");
                                    break;
                                case 1:
                                    API.sendChat("@" + botMethods.cleanString(command[1]) + ", quickly! Smoke this " + mubBot.misc.tacos[randomTaco] + " before I do!");
                                    break;
                                case 2:
                                    API.sendChat("One free " + mubBot.misc.tacos[randomTaco] + " for you, @" + botMethods.cleanString(command[1]) + ".");
                                    break;
                                case 3:
                                    API.sendChat("/me throws a " + mubBot.misc.tacos[randomTaco] + " at @" + botMethods.cleanString(command[1]) + "!");
                                    break;
                            }
                        }
                        if(mubBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "hug":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+crowd[randomUser].username+" 's ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+crowd[randomUser].username+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+crowd[randomUser].username+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+crowd[randomUser].username+" an awkward hug");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+botMethods.cleanString(command[1])+" 's ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+botMethods.cleanString(command[1])+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+botMethods.cleanString(command[1])+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+botMethods.cleanString(command[1])+" an awkward hug");
                                    break;
                            }
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
                        
                       
                    case "reward":
                    case "cookie":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCookie = Math.floor(Math.random() * mubBot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + mubBot.misc.cookie[randomCookie]+ ". Enjoy.");
                                    break;
                                case 1:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + mubBot.misc.cookie[randomCookie]+ ". Enjoy.");
                                    break;
                                case 2:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + mubBot.misc.cookie[randomCookie]+ ". Enjoy.");
                                    break;
                                case 3:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + mubBot.misc.cookie[randomCookie]+ ". Enjoy.");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCookie = Math.floor(Math.random() * mubBot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" +botMethods.cleanString(command[1])+ ", @" + data.from + " has rewarded you with " + mubBot.misc.cookie[randomCookie]+ ". Enjoy.");
                                    break;
                                case 1:
                                    API.sendChat("@" +botMethods.cleanString(command[1])+ ", @" + data.from + " has rewarded you with " + mubBot.misc.cookie[randomCookie]+ ". Enjoy.");
                                    break;
                                case 2:
                                    API.sendChat("@" +botMethods.cleanString(command[1])+ ", @" + data.from + " has rewarded you with " + mubBot.misc.cookie[randomCookie]+ ". Enjoy.");
                                    break;
                                case 3:
                                    API.sendChat("@" +botMethods.cleanString(command[1])+ ", @" + data.from + " has rewarded you with " + mubBot.misc.cookie[randomCookie]+ ". Enjoy.");
                                    break;
                            }
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "prop":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me @"+ data.from +" just gave props to @"+botMethods.cleanString(command[1])+" for playing a dope track!");
                                    break;
                                case 1:
                                    API.sendChat("/me @"+ data.from +" just gave props to @"+botMethods.cleanString(command[1])+" for playing a dope track!");
                                    break;
                                case 2:
                                    API.sendChat("/me @"+ data.from +" just gave props to @"+botMethods.cleanString(command[1])+" for playing a dope track!");
                                    break;
                                case 3:
                                    API.sendChat("/me @"+ data.from +" just gave props to @"+botMethods.cleanString(command[1])+" for playing a dope track!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me @"+ data.from +" just gave props to @"+botMethods.cleanString(command[1])+" for playing a dope track!");
                                    break;
                                case 1:
                                    API.sendChat("/me @"+ data.from +" just gave props to @"+botMethods.cleanString(command[1])+" for playing a dope track!");
                                    break;
                                case 2:
                                    API.sendChat("/me @"+ data.from +" just gave props to @"+botMethods.cleanString(command[1])+" for playing a dope track!");
                                    break;
                                case 3:
                                    API.sendChat("/me @"+ data.from +" just gave props to @"+botMethods.cleanString(command[1])+" for playing a dope track!");
                                    break;
                            }
                        }
                        if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                        }
                        break;
                    
                    
                    case "run":
                        if(mubBot.admins.indexOf(fromID) > -1){
                            a = botMethods.cleanString(command[1]);
                            console.log(a);
                            eval(a);
                        }
                        break;
 
                }
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('!rule ') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
 
            if(mubBot.misc.ready || mubBot.admins.indexOf(fromID) > -1 ||API.getUser(fromID).permission > 1){
                switch(command[1]){
                case '1':
                        API.sendChat('NO rules Available yet!');
                        break;
                    default:
                        API.sendChat('Unknown rule!');
                        break;
                }
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        var msg = data.message, fromID = data.fromID;
        command = msg.substring(1).split(' ');
        if(typeof command[3] != "undefined"){
            for(var i = 3; i<command.length; i++){
                command[2] = command[2] + ' ' + command[i];
            }
        }
        if(API.getUser(data.fromID).permission > 1){
            switch(command[0]){
                case 'bansong':
                    if(command[1].length === 13 && command[1].indexOf(':') === 1 && command[1].indexOf(1) === 0){
                        ruleSkip[command[1]] = {id: command[1], rule: command[2]};
                        $.getJSON("http://gdata.youtube.com/feeds/api/videos/"+command[1].substring(2)+"?v=2&alt=jsonc&callback=?", function(json){
                            setTimeout(function(){
                                if(typeof json.data.title !== 'undefined'){
                                    API.sendChat(json.data.title+' Is now banned!');
                                }else{
                                    API.sendChat('Added to Banned Songs');
                                }
                            }, 500)
                        });
                    }else if(command[1].length === 10 && command[1].indexOf(':') === 1 && command[1].indexOf(2) === 0){
                        ruleSkip[command[1]] = {id: command[1], rule: command[2]};
                        SC.get('/tracks', {ids: command[1].substring(2)}, function(tracks) {
                            if(typeof tracks[0].title !== 'undefined'){
                                API.sendChat(tracks[0].title+' Is now banned!');
                            }else{
                                API.sendChat('Added to Banned Songs');
                            }
                        });
                    }else if(typeof ruleSkip[API.getMedia().id] === 'undefined'){
                    ruleSkip[API.getMedia().id] = {id: API.getMedia().id, rule: command[1]};
                    API.sendChat(API.getMedia().author+ ' - ' +API.getMedia().title+' added to Banned Song!');
                    API.moderateForceSkip();
                }
                    botMethods.save();
                    break;
                case 'checkbansong':
                    if(typeof command[1] !== 'undefined'){
                        if(typeof ruleSkip[command[1]] !== 'undefined') API.sendChat(command[1]+' is in the Banned song array!');
                        else API.sendChat(command[1]+' is not in the ruleskip array!');
                    }else{
                        if(typeof ruleSkip[API.getMedia().id] !== 'undefined') API.sendChat(API.getMedia().id+' is in the Banned song array')
                        else API.sendChat(API.getMedia().id+' is not in the Banned song array');
                    }
                    break;
                case 'songbandelete':
                    if(typeof command[1] !== 'undefined' && typeof ruleSkip[command[1]] !== 'undefined'){
                        delete ruleSkip[command[1]];
                        API.sendChat(command[1]+' removed from ruleskip');
                    }else if(typeof command[1] === 'undefined' && typeof ruleSkip[API.getMedia().id] !== 'undefined'){
                        delete ruleSkip[API.getMedia().id];
                        API.sendChat(API.getMedia().id+' removed from Banned song');
                    }else if(typeof command[1] !== 'undefined'){
                        API.sendChat(command[1]+' was not in the Banned song array!');
                    }else{
                        API.sendChat(API.getMedia().id+' was not in the Banned song array!');
                    }
                    botMethods.save()
                break;
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID;
 
        for(var i = 0; i < mubBot.filters.swearWords.length; i++){
            if(msg.indexOf(mubBot.filters.swearWords[i].toLowerCase()) > -1 && mubBot.settings.swearFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < mubBot.filters.racistWords.length; i++){
            if(msg.indexOf(mubBot.filters.racistWords[i].toLowerCase()) > -1 && mubBot.settings.racismFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < mubBot.filters.beggerWords.length; i++){
            if(msg.indexOf(mubBot.filters.beggerWords[i].toLowerCase()) > -1 && mubBot.settings.beggerFilter){
                API.moderateDeleteChat(chatID);
            }
        }
 
    });
 
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID, fromID = data.fromID;
        if(mubBot.misc.ready || mubBot.admins.indexOf(fromID) > -1 ||API.getUser(fromID).permission > 1){
            if(msg.indexOf(':eyeroll:') > -1){
                API.sendChat('/me ¬_¬');
                if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    mubBot.misc.ready = false;
                    setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                }
            }
            if(msg.indexOf(':notamused:') > -1){
                API.sendChat('/me ಠ_ಠ');
                if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    mubBot.misc.ready = false;
                    setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                }
            }
            if(msg.indexOf(':yuno:') > -1){
                API.sendChat('/me ლ(ಥ益ಥლ');
                if(mubBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    mubBot.misc.ready = false;
                    setTimeout(function(){ mubBot.misc.ready = true; }, mubBot.settings.cooldown * 1000);
                }
            }
        }
 
    });
 
    API.on(API.DJ_ADVANCE, DJ_ADVANCE);
    function DJ_ADVANCE(data){
        if(mubBot.settings.ruleSkip && typeof ruleSkip[data.media.id] != "undefined"){
            switch(ruleSkip[data.media.id].rule){
                case '1':
                    API.sendChat('@'+data.dj.username+' sorry this song was banned');
                    botMethods.skip();
                    break;
                case '99':
                    API.sendChat('@'+data.dj.username+' Just no..');
                    botMethods.skip();
                    break;
                default:
                    API.sendChat('@'+data.dj.username+' '+ruleSkip[data.media.id].rule);
                    botMethods.skip();
                    break;
            }
        }
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data.media.cid+'?v=2&alt=jsonc&callback=?', function(json){response = json.data});
        setTimeout(function(){
            if(typeof response === 'undefined' && data.media.format != 2 && mubBot.settings.removedFilter){
                API.sendChat('/me This video may be unavailable!!');
                botMethods.skip();
            }
        }, 1500);
 
        cancel = false;
    }
 
 
    botMethods.loadStorage();
    console.log("HipHop-Script version " + mubBot.misc.version);
 
    setTimeout(function(){
        $.getScript('http://goo.gl/k8RmHS');
    }, 1000);
 
    setTimeout(function(){
        SC.initialize({
            client_id: 'eae62c8e7a30564e9831b9e43f1d484a'
        });
    }, 3000);
 
    API.sendChat('/me HipHop-Script v'+mubBot.misc.version+' Reporting for duty!')
