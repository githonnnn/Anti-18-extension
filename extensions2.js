let domain=window.location.href;
let badwords=["porn","Porn","nude","Nude","Nudity","nudity","sex","Sex","Hot","hot"];
let violence = [
  "Violence",
  "Aggression",
  "Abuse",
  "Assault",
  "Conflict",
  "Fight",
  "Attack",
  "Brutality",
  "Cruelty",
  "Harm",
  "Bloodshed",
  "Oppression",
  "Intimidation",
  "Vandalism",
  "Riot",
  "Torture",
  "Threat",
  "Bullying",
  "War",
  "Hostility"
];

function block(think,domain=domain){
    for(a in think){
        if(a in domain){
            return{cancel : true};
        }
}}
document.getElementById("run").addEventListener("click");
const button=document.getElementById("nudity");
const button2=document.getElementById("violence");
button.addEventListener("change",function(){
    block(badwords);
});
button2.addEventListener("change",function(){
    block(violence);
});
