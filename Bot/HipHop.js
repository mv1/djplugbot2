/*

 Copyright (c) 2014-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
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
 
 
  @Author:   Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
  @Admin:    Myles - MV1 (Owner. on Hip Hop Turntable)
 
 
 * [NOTE]: THERE IS NOTHING HERE FOR YOU! COPYING ANY PART OF THIS SCRIPT AND USING "IT" or "AS" (yours) WELL
 *         SERIOUSLY GET YOU TO FACE THE CONSEQUENCES!
 */
 
 
 
var HipHopBot = {};
var ruleSkip = {};
HipHopBot.misc = {};
HipHopBot.settings = {};
HipHopBot.moderators = {};
HipHopBot.filters = {};
botMethods = {};
HipHopBot.pubVars = {};
 
toSave = {};
toSave.settings = HipHopBot.settings;
toSave.moderators = HipHopBot.moderators;
 
HipHopBot.misc.version = "2.0.5";
HipHopBot.misc.origin = "This bot was created by MV1 and Neon alone, and it is copyrighted!";
HipHopBot.misc.changelog = "Added a secondary check for history";
HipHopBot.misc.ready = true;
HipHopBot.misc.lockSkipping = false;
HipHopBot.misc.lockSkipped = "0";
HipHopBot.misc.tacos = new Array();
var lobby = "hip-hop-tt";
 
 
joined = new Date().getTime();
 
cancel = false;
 
HipHopBot.filters.swearWords = new Array();
HipHopBot.filters.commandWords = new Array();
HipHopBot.filters.racistWords = new Array();
HipHopBot.filters.beggerWords = new Array();
 
HipHopBot.settings.maxLength = 10; //minutes
HipHopBot.settings.cooldown = 10; //seconds
HipHopBot.settings.staffMeansAccess = true;
HipHopBot.settings.historyFilter = true;
HipHopBot.settings.swearFilter = true;
HipHopBot.settings.commandFilter = true;
HipHopBot.settings.racismFilter = true;
HipHopBot.settings.beggerFilter = true;
HipHopBot.settings.interactive = true;
HipHopBot.settings.ruleSkip = true;
HipHopBot.settings.removedFilter = true;
 
//Admins                [Dj-Neon-TFL]                   [MV1]
HipHopBot.admins = ["50aeaeb6c3b97a2cb4c25bd2","528c1f3396fba53b813d216a"];
 
HipHopBot.filters.swearWords = ["slut","mofo","penis","penus","fuck","shit","bitch","cunt","twat","faggot","queer","dumb ass","pussy","dick","cocksucker","asshole","vagina","tit","mangina","tits","cock","jerk","puta","puto","cum","sperm","ass-hat","ass-jabber","assbanger","assfuck","assfucker","assnigger","butt plug","bollox","blowJob","Blow job","bampot","cameltoe","chode","clitfuck","cunt","cracker","dildo","douche","doochbag","dike","dyke","fatass","fat ass","fuckass","fuckbag","fuckboy","fuckbrain","gay","gaylord","handjob","hoe","Jizz","jerk off","kunt","lesbian","lesbo","lezzie","minge","munging","nut sack","nutsack","queer","queef","rimjob","scrote","schlong","titfuck","twat","unclefucker","va-j-j","vajayjay","vjayjay","wankjob","whore"];
HipHopBot.filters.commandWords = ["!say","!catfact","!dogfact","!fortune","!songlink","!commands","!bansong 1","!down","!join","!woot","!meh","!status","!tcf","!cf","!rules","!version","!test"];
HipHopBot.filters.racistWords = ["nigger","kike","spick","porchmonkey","camel jockey","towelhead","towel head","chink","gook","porch monkey","cracker","Coolie","nigga","nigguh","black shit","black monkey","you ape","you monkey","you gorilla","black ass","assnigger","honkey","White bread","white ass","jungle bunny","niglet","nigaboo","paki","ruski","sand nigger","sandnigger","wetback","wet back"];
HipHopBot.filters.beggerWords = ["fanme","fan me","fan4fan","fan 4 fan","fan pls","fans please","need fan","more fan","fan back","give me fans","gimme fans"];
 
//Fun commands for misc below.
 
HipHopBot.misc.tacos = ["blunt","kush","Chemo","Locoweed","marijuana","Ganja"];
HipHopBot.misc.cookie = ["a chocolate chip cookie", "a sugar cookie", "an oatmeal raisin cookie", "a 'special' brownie", "an animal cracker", "a scooby snack", "a blueberry muffin", "a cupcake"];
 
HipHopBot.misc.ball = [
" It is certain",
" It is decidedly so",
" Without a doubt",
" Yes definitely",
" You may rely on it",
" As I see it yes",
" Most likely",
" Outlook good",
" Yes",
" Signs point to yes :trollface:",
" Reply hazy try again",
" Ask again later",
" Better not tell you now",
" Cannot predict now",
" Concentrate and ask again",
" Don't count on it",
" My reply is no",
" My sources say no",
" Outlook not so good",
" Very doubtful"];
 
HipHopBot.misc.ht = ["My magic coins says: Tails", "My magic coin says: Heads"];
 
HipHopBot.misc.roll = [
"You rolled A 1. Bummer :(",
"You rolled A 2. Bummer :(",
"You rolled A 3. Bummer :("];
 
HipHopBot.misc.roll2 = [
"4. Awesome!",
"5. Awesome!",
"6. Awesome!"];
 
HipHopBot.misc.catfact = ["Cats have five toes on each front paw, but only four toes on each back paw.","Cats have true fur, in that they have both an undercoat and an outer coat.",
"Newborn kittens have closed ear canals that don''t begin to open for nine days.When the eyes open, they are always blue at first. They change color over a period of months to the final eye color.",
"Most cats have no eyelashes.","A cat cannot see directly under its nose.",
"You can tell a cat's mood by looking into its eyes. A frightened or excited cat will have large, round pupils. An angry cat will have narrow pupils. The pupil size is related as much to the cat's emotions as to the degree of light.",
"It is a common belief that cats are color blind. However, recent studies have shown that cats can see blue, green and red.",
"A cat can jump even seven times as high as it is tall.",
"The cat's foot-pads absorb the shocks of the landing when the cat jumps.",
"A cat is pregnant for about 58-65 days.",
"When well treated, a cat can live twenty or more years but the average life span of a domestic cat is 14 years.",
"Neutering a cat extends its life span by two or three years.",
"Cats can't taste sweets.",
"Cats must have fat in their diet because they can't produce it on their own.",
"Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
"Tylenol and chocolate are both poisonous to cats.",
"Many cats cannot properly digest cow's milk.",
"The average cat food meal is the equivalent to about five mice.",
"Cats have AB blood groups just like people.",
 "The color of the points in Siamese cats is heat related. Cool areas are darker.",
"The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
"Today there are about 100 distinct breeds of the domestic cat.",
"The first cat show was in 1871 at the Crystal Palace in London.",
"In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
"In ancient Egypt, killing a cat was a crime punishable by death.",
"The ancestor of all domestic cats is the African Wild Cat which still exists today.",
"Cats do not think that they are little people. They think that we are big cats. This influences their behavior in many ways.",
"Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
"Julius Caesar, Henri II, Charles XI, and Napoleon were all afraid of cats.",
"Cats have an average of 24 whiskers, arranged in four horizontal rows on each side.",
"Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.",
"Jaguars are the only big cats that don't roar.",
"A cat's field of vision is about 185 degrees.",
"The Maine Coon is 4 to 5 times larger than the Cingapura, the smallest breed of cat.",
"Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. In the cat family, only cheetahs cannot retract their claws.",
"A cat can sprint at about thirty-one miles per hour.",
"A cat can spend five or more hours a day grooming themselves.",
"The cat has been living in close association with humans for somewhere between 3,500 and 8,000 years.",
"The domestic house cat is a small carnivorous mammal. Its most immediate ancestor is believed to be the African wild cat.",
"Cats usually weigh between 2.5 and 7 kg (5.5–16 pounds), although some breeds can exceed 11.3 kg (25 pounds).",
"Domestic cats tend to live longer if they are not permitted to go outdoors.",
"Cats, in some cases, can sleep as much as 20 hours in a 24-hour period. The term cat nap refers to the cat's ability to fall asleep (lightly) for a brief period.",
"Cats dislike citrus scent.",
"A cat's tongue has tiny barbs on it.",
"Cats can be right-pawed or left-pawed.",
"It has been scientifically proven that stroking a cat can lower one's blood pressure.",
"Six-toed kittens are so common in Boston and surrounding areas of Massachusetts that experts consider it an established mutation.",
"Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible."];
 
HipHopBot.misc.dogfact = [
"Three dogs (from First Class cabins!) survived the sinking of the Titanic – two Pomeranian and one Pekingese.",
"It’s rumored that, at the end of the Beatles song, A Day in the Life, Paul McCartney recorded an ultrasonic whistle, audible only to dogs, just for his Shetland sheepdog.",
"Puppies have 28 teeth and normal adult dogs have 42.",
"Dogs chase their tails for a variety of reasons: curiosity, exercise, anxiety, predatory instinct or, they might have fleas! If your dog is chasing his tail excessively, talk with your vet.",
"Dalmatian puppies are pure white when they are born and develop their spots as they grow older.",
"Dogs and humans have the same type of slow wave sleep (SWS) and rapid eye movement (REM) and during this REM stage dogs can dream. The twitching and paw movements that occur during their sleep are signs that your pet is dreaming",
"Dogs’ eyes contain a special membrane, called the tapetum lucidum, which allows them to see in the dark.",
"A large breed dog’s resting heart beats between 60 and 100 times per minute, and a small dog breed’s heart beats between 100-140. Comparatively, a resting human heart beats 60-100 times per minute.",
"According to a petfinder.com - Press poll, 72% of dog owners believe their dog can detect when stormy weather is on the way.",
"A dog’s normal temperature is between 101 and 102.5 degrees Fahrenheit.",
"Unlike humans who sweat everywhere, dogs only sweat through the pads of their feet.",
"Dogs have three eyelids, an upper lid, a lower lid and the third lid, called a nictitating membrane or “haw,” which helps keep the eye moist and protected.",
"Americans love dogs! 62% of U.S. households own a pet, which equates to 72.9 million homes",
"45% of dogs sleep in their owner’s bed (we’re pretty sure a large percentage also hogs the blankets!)",
"Why are dogs’ noses so wet? Dogs’ noses secrete a thin layer of mucous that helps them absorb scent. They then lick their noses to sample the scent through their mouth.",
"Dogs have about 1,700 taste buds. Humans have approximately 9,000 and cats have around 473.",
"A Dog’s sense of smell is 10,000 – 100,000 times more acute as that of humans.",
"It’s a myth that dogs only see in black and white. In fact, it’s believed that dogs see primarily in blue, greenish-yellow, yellow and various shades of gray.",
"Sound frequency is measured in Hertz (Hz). The higher the Hertz, the higher-pitched the sound. Dogs hear best at 8,000 Hz, while humans hear best at around 2,000 Hz.",
"Dogs’ ears are extremely expressive. It’s no wonder! There are more than a dozen separate muscles that control a dog’s ear movements.",
"While the Chow Chow dogs are well known for their distinctive blue-black tongues, they’re actually born with pink tongues. They turn blue-black at 8-10 weeks of age.",
"When dogs kick after going to the bathroom, they are using the scent glands on their paws to further mark their territory.",
"Dogs curl up in a ball when they sleep due to an age-old instinct to keep themselves warm and protect their abdomen and vital organs from predators.",
"Dogs are capable of understanding up to 250 words and gestures, can count up to five and can perform simple mathematical calculations. The average dog is as intelligent as a two-year-old child.",
"Some stray Russian dogs have figured out how to use the subway system in order to travel to more populated areas in search of food.",
"Dogs don’t enjoy being hugged as much as humans and other primates.",
"Two stray dogs in Afghanistan saved 50 American soldiers. A Facebook group raised $21,000 to bring the dogs back to the US and reunite them with the soldiers.",
"Service dogs are trained to know when they are on duty. When their harness is on, they know it’s business time. When you take it off, the pups immediately become playful and energetic.",
"Tiger Woods stuttered as a child and used to talk to his dog until he fell asleep in an effort to get rid of it.",
"Seeing eye dogs pee and poo on command so that their owners can clean up after them."];
 
HipHopBot.misc.fortune = [
" There is a true and sincere friendship between you and your friends.",
" You find beauty in ordinary things, do not lose this ability.",
" Ideas are like children; there are none so wonderful as your own.",
" It takes more than good memory to have good memories.",
" A thrilling time is in your immediate future.",
" Plan for many pleasures ahead.",
" The joyfulness of a man prolongeth his days.",
" Your everlasting patience will be rewarded sooner or later.",
" Make two grins grow where there was only a grouch before.",
" Something you lost will soon turn up.",
" Your heart is pure, and your mind clear, and your soul devout.",
" Excitement and intrigue follow you closely wherever you go!",
" A pleasant surprise is in store for you.",
" May life throw you a pleasant curve.",
" As the purse is emptied the heart is filled.",
" Be mischievous and you will not be lonesome.",
" You have a deep appreciation of the arts and music.",
" Your flair for the creative takes an important place in your life.",
" Your artistic talents win the approval and applause of others.",
" Pray for what you want, but work for the things you need.",
" Your many hidden talents will become obvious to those around you.",
" Don't forget, you are always on our minds.",
" Don't forget, you are always on our minds.",
" Your greatest fortune is the large number of friends you have.",
" A firm friendship will prove the foundation on your success in life.",
" Don't ask, don't say. Everything lies in silence.",
" Look for new outlets for your own creative abilities.",
" Be prepared to accept a wondrous opportunity in the days ahead!",
" Fame, riches and romance are yours for the asking.",
" Good luck is the result of good planning.",
" Good things are being said about you.",
" Smiling often can make you look and feel younger.",
" Someone is speaking well of you.",
" The time is right to make new friends.",
" You will inherit some money or a small piece of land.",
" Your life will be happy and peaceful.",
" A friend is a present you give yourself.",
" A member of your family will soon do something that will make you proud.",
" A quiet evening with friends is the best tonic for a long day.",
" A single kind word will keep one warm for years.",
" Anger begins with folly, and ends with regret.",
" Generosity and perfection are your everlasting goals.",
" Happy news is on its way to you.",
" He who laughs at himself never runs out of things to laugh at.",
" If your desires are not extravagant they will be granted.",
" Let there be magic in your smile and firmness in your handshake.",
" If you want the rainbow, you must to put up with the rain. D. Parton",
" Nature, time and patience are the three best physicians.",
" Strong and bitter words indicate a weak cause.",
" The beginning of wisdom is to desire it.",
" You will have a very pleasant experience.",
" You will inherit some money or a small piece of land.",
" You will live a long, happy life.",
" You will spend old age in comfort and material wealth.",
" You will step on the soil of many countries.",
" You will take a chance in something in the near future.",
" You will witness a special ceremony.",
" Your everlasting patience will be rewarded sooner or later.",
" Your great attention to detail is both a blessing and a curse.",
" Your heart is a place to draw true happiness.",
" Your ability to juggle many tasks will take you far.",
" A friend asks only for your time, not your money.",
" You will be invited to an exciting event."];
 
 
HipHopBot.pubVars.skipOnExceed;
HipHopBot.pubVars.command = false;
 
Array.prototype.remove=function(){var c,f=arguments,d=f.length,e;while(d&&this.length){c=f[--d];while((e=this.indexOf(c))!==-1){this.splice(e,1)}}return this};
if(window.location.href === "http://plug.dj/"+lobby+"/"){
API.on(API.DJ_ADVANCE, djAdvanceEvent);
API.on(API.USER_JOIN, UserJoin);
API.on(API.CURATE_UPDATE, curated);
API.on(API.DJ_ADVANCE, DJ_ADVANCE);

function UserJoin(user)
{
var JoinMsg = ["Welcome to HipHop TurnTable @user", "@user, Yo welcome to Hip Hop TurnTable!"];
r = Math.floor(Math.random() * JoinMsg.length);
API.sendChat(JoinMsg[r].replace("user", user.username));
}
 
function curated(obj)
{
var media = API.getMedia();
API.sendChat(obj.user.username + " Added this song!");
}
 
function djAdvanceEvent(data){
    setTimeout(function(){ botMethods.data }, 500);
}

botMethods.skip = function(){
    setTimeout(function(){
    API.moderateForceSkip();
    }, 500);
};

HipHopBot.unhook = function(){
setTimeout(function(){
API.off(API.DJ_ADVANCE, djAdvanceEvent);
API.off(API.DJ_ADVANCE, woot);
API.off(API.USER_JOIN, UserJoin);
API.off(API.DJ_ADVANCE, listener);
API.off(API.CURATE_UPDATE, curated);
API.off(API.DJ_ADVANCE, DJ_ADVANCE);
API.off(API.CHAT);
}, 100);
};

HipHopBot.hook = function(){
setTimeout(function(){
(function(){$.getScript('http://goo.gl/5A2IaF');}());
}, 100);
};

botMethods.load = function(){
    toSave = JSON.parse(localStorage.getItem("HipHopBotSave"));
    HipHopBot.settings = toSave.settings;
    ruleSkip = toSave.ruleSkip;
};
 
botMethods.save = function(){localStorage.setItem("HipHopBotSave", JSON.stringify(toSave))};
 
botMethods.loadStorage = function(){
    if(localStorage.getItem("HipHopBotSave") !== null){
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
    clearTimeout(HipHopBot.pubVars.skipOnExceed);
    if(HipHopBot.misc.lockSkipping){
        API.moderateAddDJ(HipHopBot.misc.lockSkipped);
        HipHopBot.misc.lockSkipped = "0";
        HipHopBot.misc.lockSkipping = false;
        setTimeout(function(){ API.moderateRoomProps(false, true); }, 500);
    }
    var song = API.getMedia();
    if(botMethods.checkHistory() > 0 && HipHopBot.settings.historyFilter){
        if(API.getUser().permission < 2){
            API.sendChat("This song is in the history! You should make me a mod so that I could skip it!");
        }else if(API.getUser().permission > 1){
            API.sendChat("@" + API.getDJ().username + ", playing songs that are in the history isn't allowed, please check next time! Skipping..");
            API.moderateForceSkip();
        }else if(song.duration > HipHopBot.settings.maxLength * 60){
            HipHopBot.pubVars.skipOnExceed = setTimeout( function(){
                API.sendChat("@"+ API.getDJ().username +" You have now played for as long as this room allows, time to let someone else have the booth!");
                API.moderateForceSkip();
            }, HipHopBot.settings.maxLength * 60000);
            API.sendChat("@"+ API.getDJ().username +" This song will be skipped " + HipHopBot.settings.maxLength + " minutes from now because it exceeds the max song length.");
        }else{
            setTimeout(function(){
                if(botMethods.checkHistory() > 0 && HipHopBot.settings.historyFilter){
                    API.sendChat("@" + API.getDJ().username + ", playing songs that are in the history isn't allowed, please check next time! Skipping..");
                    API.moderateForceSkip();
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
            if(HipHopBot.misc.ready || HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1){
                switch(command[0].toLowerCase()){
 
                    case "votes":
                        if(API.getUser(fromID).permission < 2 || HipHopBot.admins.indexOf(fromID) > -1){
                            API.sendChat("Users vote:  :+1: " + API.getRoomScore().positive + " | :purple_heart: " + API.getRoomScore().curates+" | :-1: " + API.getRoomScore().negative);
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
               
                    case "djinfo":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                        var total = API.getDJ().djPoints + API.getDJ().listenerPoints + API.getDJ().curatorPoints;
                            API.sendChat("Current dj is: "+ API.getDJ().username +". Points: "+ total +" | Fans: "+ API.getDJ().fans +" | Curated: "+ API.getDJ().curatorPoints +".");
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "bot":
                        if(API.getUser(fromID).permission < 2 || HipHopBot.admins.indexOf(fromID) > -1){
                            API.sendChat("What faggot? @"+ data.from);
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "ping":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("@"+ data.from +" Pong!");
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "marco":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("@"+ data.from +" POLO!");
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "rules":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Rules: 1) Play mostly hip hop. 2) Avoid mainstream hip hop. 3) Trolls well be force to be booted. 4) No auto join. 5) No songs over "+ HipHopBot.settings.maxLength +" minutes. 6) No swag hip-pop. 7) Woot while on waitlist.");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Rules: 1) Play mostly hip hop. 2) Avoid mainstream hip hop. 3) Trolls well be force to be booted. 4) No auto join. 5) No songs over "+ HipHopBot.settings.maxLength +" minutes. 6) No swag hip-pop. 7) Woot while on waitlist.");
                        }else{
                            API.sendChat("Rules: 1) Play mostly hip hop. 2) Avoid mainstream hip hop. 3) Trolls well be force to be booted. 4) No auto join. 5) No songs over "+ HipHopBot.settings.maxLength +" minutes. 6) No swag hip-pop. 7) Woot while on waitlist.");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "theme":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Play Mostly Hip Hop");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Play Mostly Hip Hop");
                        }else{
                            API.sendChat("Play Mostly Hip Hop");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
               
                    case "commands":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("My commands can be found here: http://goo.gl/rzCrcL");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" My commands can be found here: http://goo.gl/rzCrcL");
                        }else{
                            API.sendChat("My commands can be found here: http://goo.gl/rzCrcL");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "issue":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("You think i have issues? : http://goo.gl/LVVapN");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" You think i have issues? : http://goo.gl/LVVapN");
                        }else{
                            API.sendChat("You think i have issues? : http://goo.gl/LVVapN");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "contact":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("You can contact my admins here : http://goo.gl/hnajX8");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" You can contact my admins here : http://goo.gl/hnajX8");
                        }else{
                            API.sendChat("You can contact my admins here : http://goo.gl/hnajX8");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "installs":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("You can install our new theme script here: http://goo.gl/LVSfOA");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" You can install our new theme script here: http://goo.gl/LVSfOA");
                        }else{
                            API.sendChat("You can install our new theme script here: http://goo.gl/LVSfOA");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "whywoot":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else{
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "props":
                    case "bonus":
                        if(typeof command[1] == "undefined"){
                        API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                        }
                        break;
 
                    case "whymeh":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else{
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "help":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Welcome to the Hip Hop Turntable! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music. Most Hip Hip music allowed.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+ "Welcome to the Dubstep Den! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music. Most Hip Hop music is allowed.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
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
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "link":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Put a link starting off from www.");
                        }else if(command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("http://"+command[1]);
                        }else{
                            API.sendChat("@"+ data.from +" What are you an idiot?");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "define":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Define what?!");
                        }else if(command[1].toLowerCase().indexOf("xxx") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("@"+ data.from +" http://www.urbandictionary.com/define.php?term="+command[1]);
                        }else{
                            API.sendChat("@"+ data.from +" What are you an idiot?");
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
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
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
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
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
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
            if(HipHopBot.misc.ready || HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
                switch(command[0].toLowerCase()){
 
                    case "add":
                    if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                    $(".icon-curate").click();
                    $($(".curate").children(".menu").children().children()[0]).mousedown();
                }
                        break;
 
                    case "say":
                    if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            }else{
                            API.sendChat(command[1]);
                        }
                    }
                        break;
 
                    case "skip":
                    if(API.getUser(data.fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.moderateForceSkip();
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                    }
                        break;
                        
                    case "reload":
                    if(API.getUser(data.fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("Now reloading HipHop Bot script...")
                        setTimeout(function(){
                           HipHopBot.unhook();
                        }, 150);
                        setTimeout(function(){
                           HipHopBot.hook();
                        }, 550);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                    }
                        break;
                        
                    case "die":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                           API.sendChat('Unhooking Events...');
                        setTimeout(function(){
                           API.sendChat('Deleting bot data...');
                        }, 150);
                        setTimeout(function(){
                           API.sendChat('Consider me dead');
                        }, 475);
                        setTimeout(function(){
                           HipHopBot.unhook();
                        }, 700);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                    case "unlock":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.moderateLockWaitList(false);
                        }
                    }
                        break;
               
                    case "lock":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.moderateLockWaitList(true);
                        }
                    }
                        break;
 
                    case "meh":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                           API.sendChat("Bummer, A meh has been requested!!");
                        setTimeout(function(){
                           document.getElementById("meh").click()
                        }, 650);
                        }else{
                           API.sendChat("This command requires bouncer +");
                    }
                        break;
 
                    case "woot":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                           API.sendChat("One woot coming up!");
                        setTimeout(function(){
                           document.getElementById("woot").click()
                        }, 650);
                        }else {
                           API.sendChat("This command requires bouncer +");
                     }
                        break;
                   
                    case "join":
                    case "stepup":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djJoin();
                        }
                    }
                        break;
 
                    case "leave":
                    case "down":
                    case "dive":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djLeave();
                        }
                    }
                        break;
                        
                    case "lockskip":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(true);
                            API.moderateForceSkip();
                        setTimeout(function(){
                           API.moderateLockWaitList(false);
                        }, 650);
                        }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "test":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +" Test Successful");
                            }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "source":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                            API.sendChat("Sup Admin "+ data.from +"! My source is located here: http://goo.gl/VjPC3N");
                            }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "historyfilter":
                    case "hf":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1) HipHopBot.settings.historyFilter ? API.sendChat("History filter is enabled") : API.sendChat("History filter is disabled");
                        botMethods.save();
                        break;
 
                    case "swearfilter":
                    case "sf":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1) HipHopBot.settings.swearFilter ? API.sendChat("Swearing filter is enabled") : API.sendChat("Swearing filter is disabled");
                        botMethods.save();
                        break;
 
                    case "commandfilter":
                    case "cf":
                        if(HipHopBot.admins.indexOf(fromID) > -1) HipHopBot.settings.commandFilter ? API.sendChat("Commands filter is enabled") : API.sendChat("Commands filter is disabled");
                        botMethods.save();
                        break;
 
                    case "racismfilter":
                    case "rf":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1) HipHopBot.settings.racismFilter ? API.sendChat("Racism filter is enabled") : API.sendChat("Racism filter is disabled");
                        botMethods.save();
                        break;
 
                    case "beggerfilter":
                    case "bf":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1) HipHopBot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
                        botMethods.save();
                        break;
 
                    case "tsf":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                            if(HipHopBot.settings.swearFilter){
                                HipHopBot.settings.swearFilter = false;
                                API.sendChat("Bot will no longer filter swearing.");
                            }else{
                                HipHopBot.settings.swearFilter = true;
                                API.sendChat("Bot will now filter swearing.");
                            }
                        }
                        botMethods.save();
                        break;
       
                    case "tcf":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                            if(HipHopBot.settings.commandFilter){
                                HipHopBot.settings.commandFilter = false;
                                API.sendChat("Bot will no longer filter commands.");
                            }else{
                                HipHopBot.settings.commandFilter = true;
                                API.sendChat("Bot will now filter commands.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "trf":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                            if(HipHopBot.settings.racismFilter){
                                HipHopBot.settings.racismFilter = false;
                                API.sendChat("Bot will no longer filter racism.");
                            }else{
                                HipHopBot.settings.racismFilter = true;
                                API.sendChat("Bot will now filter racism.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "tbf":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                            if(HipHopBot.settings.beggerFilter){
                                HipHopBot.settings.beggerFilter = false;
                                API.sendChat("Bot will no longer filter fan begging.");
                            }else{
                                HipHopBot.settings.beggerFilter = true;
                                API.sendChat("Bot will now filter fan begging.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "thf":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                            if(HipHopBot.settings.historyFilter){
                                HipHopBot.settings.historyFilter = false;!
                                    API.sendChat("Bot will no longer skip songs that are in the room history.");
                            }else{
                                HipHopBot.settings.historyFilter = true;
                                API.sendChat("Bot will now skip songs that are in the room history.");
                            }
                        }
                        botMethods.save();
                        break;
                 
                    case "version":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                            API.sendChat("HipHop-Script version " + HipHopBot.misc.version);
                            }else{
                                API.sendChat("This command requires Admins only!");
                            }
                        break;
 
                    case "origin":
                    case "author":
                    case "authors":
                    case "creator":
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                           API.sendChat(HipHopBot.misc.origin);
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "status":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while(minutes > 60){
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Running for " + minutes + "m " : response = "Running for " + hours + "h " + minutes + "m";
                            response = response + " | Begger filter: "+HipHopBot.settings.beggerFilter;
                            response = response + " | Swear filter: "+HipHopBot.settings.swearFilter;
                            response = response + " | Command filter: "+HipHopBot.settings.commandFilter;
                            response = response + " | Racism filter: "+HipHopBot.settings.racismFilter;
                            response = response + " | History filter: "+HipHopBot.settings.historyFilter;
                            response = response + " | MaxLength: " + HipHopBot.settings.maxLength + "m";
                            response = response + " | Cooldown: " + HipHopBot.settings.cooldown + "s";
                            response = response + " | Removed Video Filter: "+ HipHopBot.settings.removedFilter;
                            API.sendChat(response);
                        }
                        break;
 
                    case "cooldown":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(HipHopBot.settings.cooldown != 0.0001){
                                    API.sendChat('Cooldown is '+HipHopBot.settings.cooldown+' seconds');
                                }else{
                                    API.sendChat('Cooldown is disabled');
                                }
                            }else if(command[1] == "disable"){
                                HipHopBot.settings.cooldown = 0.0001;
                                API.sendChat('Cooldown disabled');
                            }else{
                                HipHopBot.settings.cooldown = command[1];
                                API.sendChat('New cooldown is '+HipHopBot.settings.cooldown+' seconds');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "maxlength":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(HipHopBot.settings.maxLength != 1e+50){
                                    API.sendChat('Maxlength is '+HipHopBot.settings.maxLength+' minutes');
                                }else{
                                    API.sendChat('Maxlength is disabled');
                                }
                            }else if(command[1] == "disable"){
                                HipHopBot.settings.maxLength = Infinity;
                                API.sendChat('Maxlength disabled');
                            }else{
                                HipHopBot.settings.maxLength = command[1];
                                API.sendChat('New maxlength is '+HipHopBot.settings.maxLength+' minutes');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "interactive":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                            HipHopBot.settings.interactive ? API.sendChat("Bot is interactive.") : API.sendChat("Bot is not interactive.");
                        }
                        break;
 
                    case "toggleinteractive":
                    case "ti":
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                            if(HipHopBot.settings.interactive){
                                HipHopBot.settings.interactive = false;
                                API.sendChat("Bot will no longer interact.");
                            }else{
                                HipHopBot.settings.interactive = true;
                                API.sendChat("Bot will now interact.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "save":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                            botMethods.save();
                            API.sendChat("Settings saved.");
                        }else{
                             API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "stfu":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                            API.sendChat("Yessir!");
                        }else{
                             API.sendChat("No you stfu Faggot!");
                        }
                        break;
 
                    case "changelog":
                        if(HipHopBot.admins.indexOf(fromID) > -1){
                            API.sendChat("New in version " + HipHopBot.misc.version + " - " + HipHopBot.misc.changelog)
                        }else{
                             API.sendChat("This command requires Admins only!");
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
        if(HipHopBot.misc.ready || HipHopBot.admins.indexOf(fromID) > -1 ||API.getUser(fromID).permission > 1){
                switch(command[1]){
                    case '1':
                        API.sendChat("Play mostly hip hop.");
                        break;
                    case '2':
                        API.sendChat("Avoid mainstream hip hop.");
                        break;
                    case '3':
                        API.sendChat("Trolls well be force to be booted.");
                        break;
                    case '4':
                        API.sendChat("No auto join.");
                        break;
                    case '5':
                        API.sendChat("No songs over "+ HipHopBot.settings.maxLength +" minutes.");
                        break;
                    case '6':
                        API.sendChat("No swag hip-pop.");
                        break;
                    case '7':
                        API.sendChat("Woot while on waitlist.");
                        break;
                    default:
                        API.sendChat("You faggot that's an Unknown rule!");
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
            if(HipHopBot.misc.ready || HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1){
                switch(command[0].toLowerCase()){
 
                case "punish":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches "+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
 
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches "+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
 
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
                            }
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
 
                case "roll":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomRoll = Math.floor(Math.random() * HipHopBot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ HipHopBot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.roll[randomRoll]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomRoll = Math.floor(Math.random() * HipHopBot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ HipHopBot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.roll[randomRoll]);
                                    break;
                           }
                        }
                        if(HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
               
 
                case "fortune":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFortune = Math.floor(Math.random() * HipHopBot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ HipHopBot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ HipHopBot.misc.fortune[randomFortune]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomFortune = Math.floor(Math.random() * HipHopBot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ HipHopBot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ HipHopBot.misc.fortune[randomFortune]);
                                    break;
                           }
                        }
                        if(HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "8ball":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * HipHopBot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.ball[randomBall]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomBall = Math.floor(Math.random() * HipHopBot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.ball[randomBall]);
                                    break;
                           }
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
 
 
                    case "cookie":
                    case "reward":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCookie = Math.floor(Math.random() * HipHopBot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + HipHopBot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + HipHopBot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCookie = Math.floor(Math.random() * HipHopBot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+command[1]+", " + data.from + " has rewarded you with " + boombot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat("@"+command[1]+", " + data.from + " has rewarded you with " + boombot.misc.cookie[randomCookie] + ". Enjoy!");
                                    break;
                            }
                        }
                        if(HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
                       
                       
                     case "weed":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomWeed = Math.floor(Math.random() * HipHopBot.misc.weed.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Aye kid want some weed?");
                                    setTimeout(function(){
                                    API.sendChat("Gives "+HipHopBot.misc.weed[randomWeed]+" to @"+command[1]+" Enjoy!");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("Gives "+HipHopBot.misc.weed[randomWeed]+" to @"+command[1]+" Enjoy.");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomWeed = Math.floor(Math.random() * HipHopBot.misc.weed.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Aye kid want some weed?");
                                    setTimeout(function(){
                                    API.sendChat("Gives "+HipHopBot.misc.weed[randomWeed]+" to @"+command[1]+" Enjoy!");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("Gives "+HipHopBot.misc.weed[randomWeed]+" to @"+command[1]+" Enjoy.");
                                    break;
                            }
                        }
                        if(HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
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
                                        API.sendChat("/me grabs @"+crowd[randomUser].username+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+crowd[randomUser].username+" a big bear hug");
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
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" an awkward hug");
                                    break;
                            }
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
                       
                     case "beer":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hey kid want beer?");
                                    setTimeout(function(){
                                        API.sendChat("Gives :beer: to @"+crowd[randomUser].username);
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@"+crowd[randomUser].username+", take this cold one, to refresh your mind !");
                                    break;
                                case 2:
                                    API.sendChat("@"+crowd[randomUser].username+", quickly! Drink this liquid gold before I do!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hey kid want beer?");
                                    setTimeout(function(){
                                        API.sendChat("Gives :beer: to @"+command[1]);
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@"+command[1]+", take this cold one, to refresh your mind !");
                                    break;
                                case 2:
                                    API.sendChat("@"+command[1]+", quickly! Drink this liquid gold before I do!");
                                    break;
                            }
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;  
                       
 
                     case "dogfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomDogfact = Math.floor(Math.random() * HipHopBot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.dogfact[randomDogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.dogfact[randomDogfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomDogfact = Math.floor(Math.random() * HipHopBot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.dogfact[randomdogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.dogfact[randomDogfact]);
                                    break;
                           }
                        }
                        if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot * 1000);
                        }
                        break;
                       
                    case "catfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCatfact = Math.floor(Math.random() * HipHopBot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.catfact[randomCatfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCatfact = Math.floor(Math.random() * HipHopBot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ HipHopBot.misc.catfact[randomCatfact]);
                                    break;
                           }
                        }
                        if(HipHopBot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            HipHopBot.misc.ready = false;
                            setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                        }
                        break;
                }
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID;
 
        for(var i = 0; i < HipHopBot.filters.swearWords.length; i++){
            if(msg.indexOf(HipHopBot.filters.swearWords[i].toLowerCase()) > -1 && HipHopBot.settings.swearFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < HipHopBot.filters.commandWords.length; i++){
            if(msg.indexOf(HipHopBot.filters.commandWords[i].toLowerCase()) > -1 && HipHopBot.settings.commandFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < HipHopBot.filters.racistWords.length; i++){
            if(msg.indexOf(HipHopBot.filters.racistWords[i].toLowerCase()) > -1 && HipHopBot.settings.racismFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < HipHopBot.filters.beggerWords.length; i++){
            if(msg.indexOf(HipHopBot.filters.beggerWords[i].toLowerCase()) > -1 && HipHopBot.settings.beggerFilter){
               API.moderateDeleteChat(chatID);
                responses = ["Good idea @{beggar}!  Don't earn your fans or anything thats so yesterday", "Guys @{beggar} asked us to fan him!  Lets all totally do it! ಠ_ಠ", "srsly @{beggar}? ಠ_ಠ", "@{beggar}.  Earning his fans the good old fashioned way.  Hard work and elbow grease.  A true american."];
                r = Math.floor(Math.random() * responses.length);
                API.sendChat(responses[r].replace("{beggar}", data.from));
            }
        }
 
    });
 
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID, fromID = data.fromID;
        if(HipHopBot.misc.ready || HipHopBot.admins.indexOf(fromID) > -1 ||API.getUser(fromID).permission > 1){
            if(msg.indexOf(':eyeroll:') > -1){
                API.sendChat('/me ¬_¬');
                if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    HipHopBot.misc.ready = false;
                    setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                }
            }
            if(msg.indexOf(':notamused:') > -1){
                API.sendChat('/me ಠ_ಠ');
                if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    HipHopBot.misc.ready = false;
                    setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                }
            }
            if(msg.indexOf(':yuno:') > -1){
                API.sendChat('/me ლ(ಥ益ಥლ');
                if(HipHopBot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    HipHopBot.misc.ready = false;
                    setTimeout(function(){ HipHopBot.misc.ready = true; }, HipHopBot.settings.cooldown * 1000);
                }
            }
        }
 
    });
 
    function DJ_ADVANCE(data){
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data.media.cid+'?v=2&alt=jsonc&callback=?', function(json){response = json.data});
        setTimeout(function(){
            if(typeof response === 'undefined' && data.media.format != 2 && HipHopBot.settings.removedFilter){
                API.sendChat('/me This video may be unavailable!!');
                //botMethods.skip();
            }
        }, 1500);
 
        cancel = false;
    }
 
 
    botMethods.loadStorage();
    console.log("HipHop-Script version " + HipHopBot.misc.version);
 
    setTimeout(function(){
        $.getScript('http://goo.gl/OZQv0m');
    }, 1000);
 
    setTimeout(function(){
        SC.initialize({
            client_id: 'eae62c8e7a30564e9831b9e43f1d484a'
        });
    }, 3000);
 
    API.sendChat('HipHop-Script v'+HipHopBot.misc.version+' Reporting for duty!');
   }else{
   API.sendChat("This bot cannot work in this lobby! Now alerting socket!");
   };
