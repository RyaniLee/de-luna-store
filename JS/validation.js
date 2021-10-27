// Register Page
function getGenderValue(){
    let userGender = "";
    if(document.getElementById('malegender').checked == true){
        userGender = document.getElementById('malegender').value;
    }else if(document.getElementById('femalegender').checked == true){
        userGender = document.getElementById('femalegender').value;
    }
    return userGender;
}

function checkInput(){
    let uName = ((document.getElementById('user-name') || {} ).value ||"");
    let fName = ((document.getElementById('full-name') || {} ).value ||"");
    let uGender = getGenderValue();
    let userAge = ((document.getElementById('age') || {} ).value ||"");
    let userEmail = ((document.getElementById('email') || {} ).value ||"");
    let userPass = ((document.getElementById('password') || {} ).value ||"");
    let userConPass = ((document.getElementById('confirm-password') || {} ).value ||"");
    
    if(uName.length == 0){
        alert('Your username is empty!');
    }else if(uName.length < 5 || uName.length > 30){
        alert('Username must be 5-30 characters!');
    }
    else if(fName.length == 0){
        alert('Your fullname is empty!');
    }else if(document.getElementById('malegender').checked == false && document.getElementById('femalegender').checked == false){
        alert('Select your gender!');
    }else if(userAge == 0){
        alert('Select your age!');
    }else if(!userEmail.includes('@') ){
        alert("Your email doesn't content '@' !");
    }else if(userPass.length < 8){
        alert("Password at least 8 characters!");
    }else if(userConPass != userPass){
        alert("The password doesn't match!");
    }else if(document.getElementById('agreecheckbox').checked == false){
        alert("Please check the Agreement of Terms & Condition!");
    }
    else{
        var con = confirm("Account Info:\nUser Name: " +uName + "\nFull Name: " + fName + "\nGender: " + uGender + "\nAge: " + userAge);
        if(con == true){
            console.log("Your account was created!");
        }else{
            console.log("Acoount Registeration canceled!");
        }
    }
}

// Catalog Page
function showMaleGroup(){
    var mGroup = document.getElementById("male-category");
    var fGroup = document.getElementById("female-category");
    var solo = document.getElementById("soloist-category");

    var groupBP = document.getElementById("Blackpink");
    var groupMM = document.getElementById("Mamamoo");
    var groupTwice = document.getElementById("Twice");
    var soloIU = document.getElementById("IU");
    var soloSunmi = document.getElementById("Sunmi");
    var soloZico = document.getElementById("Zico");

    if (groupBP.style.display === "block") {
        groupBP.style.display = "none";
    }else if (groupMM.style.display === "block") {
        groupMM.style.display = "none";
    }else if (groupTwice.style.display === "block") {
        groupTwice.style.display = "none";
    }else if (soloIU.style.display === "block") {
        soloIU.style.display = "none"
    }else if (soloSunmi.style.display === "block") {
        soloSunmi.style.display = "none"
    }else if (soloZico.style.display === "block") {
        soloZico.style.display = "none"
    }

    mGroup.style.display = "block";
    fGroup.style.display = "none";
    solo.style.display = "none";
}

function showFemaleGroup(){
    var mGroup = document.getElementById("male-category");
    var fGroup = document.getElementById("female-category");
    var solo = document.getElementById("soloist-category");

    var groupBTS = document.getElementById("BTS");
    var groupEXO = document.getElementById("EXO");
    var group17 = document.getElementById("Seventeen");
    var soloIU = document.getElementById("IU");
    var soloSunmi = document.getElementById("Sunmi");
    var soloZico = document.getElementById("Zico");

    if (groupBTS.style.display === "block") {
        groupBTS.style.display = "none";
    }else if (groupEXO.style.display === "block") {
        groupEXO.style.display = "none";
    }else if (group17.style.display === "block") {
        group17.style.display = "none";
    }else if (soloIU.style.display === "block") {
        soloIU.style.display = "none"
    }else if (soloSunmi.style.display === "block") {
        soloSunmi.style.display = "none"
    }else if (soloZico.style.display === "block") {
        soloZico.style.display = "none"
    }

    mGroup.style.display = "none";
    fGroup.style.display = "block";
    solo.style.display = "none";
}

function showSoloist(){
    var mGroup = document.getElementById("male-category");
    var fGroup = document.getElementById("female-category");
    var solo = document.getElementById("soloist-category");

    var groupBTS = document.getElementById("BTS");
    var groupEXO = document.getElementById("EXO");
    var group17 = document.getElementById("Seventeen");
    var groupBP = document.getElementById("Blackpink");
    var groupMM = document.getElementById("Mamamoo");
    var groupTwice = document.getElementById("Twice");

    if (groupBTS.style.display === "block") {
        groupBTS.style.display = "none";
    }else if (groupEXO.style.display === "block") {
        groupEXO.style.display = "none";
    }else if (group17.style.display === "block") {
        group17.style.display = "none";
    }else if (groupBP.style.display === "block") {
        groupBP.style.display = "none";
    }else if (groupMM.style.display === "block") {
        groupMM.style.display = "none";
    }else if (groupTwice.style.display === "block") {
        groupTwice.style.display = "none";
    }

    mGroup.style.display = "none";
    fGroup.style.display = "none";
    solo.style.display = "block";
}

function showBTS(){
    var groupBTS = document.getElementById("BTS");
    var groupEXO = document.getElementById("EXO");
    var group17 = document.getElementById("Seventeen");

    groupBTS.style.display = "block";
    groupEXO.style.display = "none";
    group17.style.display = "none";
}

function showEXO(){
    var groupBTS = document.getElementById("BTS");
    var groupEXO = document.getElementById("EXO");
    var group17 = document.getElementById("Seventeen");

    groupBTS.style.display = "none";
    groupEXO.style.display = "block";
    group17.style.display = "none";
}

function show17(){
    var groupBTS = document.getElementById("BTS");
    var groupEXO = document.getElementById("EXO");
    var group17 = document.getElementById("Seventeen");

    groupBTS.style.display = "none";
    groupEXO.style.display = "none";
    group17.style.display = "block";
}

function showBlackpink(){
    var groupBP = document.getElementById("Blackpink");
    var groupMM = document.getElementById("Mamamoo");
    var groupTwice = document.getElementById("Twice");

    groupBP.style.display = "block";
    groupMM.style.display = "none";
    groupTwice.style.display = "none";
}

function showMamamoo(){
    var groupBP = document.getElementById("Blackpink");
    var groupMM = document.getElementById("Mamamoo");
    var groupTwice = document.getElementById("Twice");

    groupBP.style.display = "none";
    groupMM.style.display = "block";
    groupTwice.style.display = "none";
}

function showTwice(){
    var groupBP = document.getElementById("Blackpink");
    var groupMM = document.getElementById("Mamamoo");
    var groupTwice = document.getElementById("Twice");

    groupBP.style.display = "none";
    groupMM.style.display = "none";
    groupTwice.style.display = "block";
}

function showIU(){
    var soloIU = document.getElementById("IU");
    var soloSunmi = document.getElementById("Sunmi");
    var soloZico = document.getElementById("Zico");

    soloIU.style.display = "block";
    soloSunmi.style.display = "none";
    soloZico.style.display = "none";
}

function showSunmi(){
    var soloIU = document.getElementById("IU");
    var soloSunmi = document.getElementById("Sunmi");
    var soloZico = document.getElementById("Zico");

    soloIU.style.display = "none";
    soloSunmi.style.display = "block";
    soloZico.style.display = "none";
}

function showZico(){
    var soloIU = document.getElementById("IU");
    var soloSunmi = document.getElementById("Sunmi");
    var soloZico = document.getElementById("Zico");

    soloIU.style.display = "none";
    soloSunmi.style.display = "none";
    soloZico.style.display = "block";
}