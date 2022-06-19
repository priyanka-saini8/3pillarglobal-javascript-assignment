let body = document.getElementsByTagName('body');
body[0].style.fontFamily = 'Raleway, sans-serif';

let mainContainer = document.createElement('div');

mainContainer.style.textAlign = 'center';
mainContainer.style.marginLeft = '250px';
mainContainer.style.marginRight = '250px';
mainContainer.className = 'mainContainer';

//body is the HTML Collection .
body[0].appendChild(mainContainer);  // appendChlid apply on particular element.

let headingDiv = document.createElement('div');
let tableDiv = document.createElement('div');

headingDiv.setAttribute('class', 'heading');
tableDiv.setAttribute('class', 'table-content');

mainContainer.appendChild(headingDiv);
mainContainer.appendChild(tableDiv);

headingDiv.style.marginBottom = '25px';

let head1 = document.createElement('h1');
let head2 = document.createElement('p');
let head3 = document.createElement('p');

let head1Span = document.createElement('span');

head1.innerHTML = "Priyanka Saini challenges in ";
head1Span.innerHTML = new Date().getFullYear();

head2.textContent = "30DaysOfJavaScript Challenge";

head1.style.fontSize = '40px';
head1Span.style.fontSize = '100px';
head2.style.textDecoration = 'underline';
head2.style.fontSize = '30px';
head2.style.fontWeight = 'lighter';
head3.style.display = 'inline';
head3.style.padding = '10px 20px 10px 20px';
changeColor();

headingDiv.appendChild(head1);
head1.appendChild(head1Span);
headingDiv.appendChild(head2);
headingDiv.appendChild(head3);

let index = 0;
let tableContent1Data = ["30 Days Of Python", "30 Days Of JavaScript", "30 Days Of HTML & CSS", "30 Days Of React", "30 Days Of ReactNative","30 Days Of FullStack", "30 Days Of Data Analysis", "30 Days Of Machine Learning"];
let tableContent2Data = ["Python", "JavaScript", "HTML & CSS", "React", "ReactNative", "FullStack", "Data Analysis", "Machine Learning"];
let tableContent3Data = ["Done", "Ongoing", "Coming", "Coming", "Coming", "Coming", "Coming", "Coming"]

let subTask = [['Python','Flask','Numpy','Pandas','Statistics','API','MongoDB'],['JavaScript','ES6','Promise','Async await','DOM'],['CSS','Flex','Grid','CSS Animation'],['React','React','React','React'],['React Native','React Native','React Native','React Native','React Native','React Native'],['Fullstack','Fullstack','Fullstack'],['Data','Python'],['Python','Numpy','Pandas','Linear Algebra']];

for (index = 0; index < subTask.length; index++) {
    let tableContent1 = document.createElement('div');

    tableContent1.style.display = 'flex';
    tableContent1.style.justifyContent = 'space-between';
    tableContent1.style.padding = '25px 20px 25px 20px';

    let content1 = document.createElement('div');
    let content2 = document.createElement('details');
    let content3 = document.createElement('div');

    let task = subTask[index];
    let content2Summary = document.createElement('summary');
    content2Summary.innerHTML = tableContent2Data[index];
    let content2list = document.createElement('div');
   
    content1.textContent = tableContent1Data[index];
    content3.textContent = tableContent3Data[index];

    if (tableContent3Data[index] == "Done") {
        tableContent1.style.backgroundColor = '#21bf74';
        content1.style.textDecoration = 'underline';
    }
    else if (tableContent3Data[index] == 'Ongoing') {
        tableContent1.style.backgroundColor = '#fddb3b';
        content1.style.textDecoration = 'underline';
    }
    else tableContent1.style.backgroundColor = '#ff5c53';

    tableContent1.style.marginBottom = '5px';

    tableDiv.appendChild(tableContent1);

    tableContent1.appendChild(content1);
    tableContent1.appendChild(content2);
    tableContent1.appendChild(content3);

    content2.appendChild(content2Summary);
    content2.appendChild(content2list);

    for (let i = 0; i < task.length; i++) {
        let content2Task = document.createElement('p');
        content2Task.style.textAlign = 'left';
        content2Task.style.marginBottom = '-12px';
        content2Task.innerHTML = task[i];
        content2list.appendChild(content2Task);
    }
}

function dateFormat(){
    let today = new Date();
    let monthArray  =  ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let str = "";

    let date = today.getDate();
    let hr = today.getHours();
    let mins = today.getMinutes();
    let sec = today.getSeconds();
    
    if(date < 10) date = '0' + date;
    if(hr < 10) hr = '0' + hr;
    if(mins < 10) mins = '0' + mins;
    if(sec < 10) sec = '0' + sec;

    str =  monthArray[today.getMonth()] + " " + date + ", " + today.getFullYear() + " "+  hr + ":" + mins + ":" + sec;
    head3.innerHTML = str;  
}

function changeColor() {
    let spanColorArray = ['#0307fc', '#b505fa', '#241536', '#061a03', '#a2b7fa', '#4b00cc'];
    let inlineColorArray = ['#119e14', '#0f4a0d', '#6a9130', '#87d618', '#fa4f46', '#5d00ff'];

    let index = 0;
    
    setInterval(() => {
        
         dateFormat();
        
         if (index >= spanColorArray.length) index = 0;
        head1Span.style.color = spanColorArray[index];
        head3.style.backgroundColor = inlineColorArray[index];
        index++;
    }, 1000);
}

let myInfoMainDiv = document.createElement('div');
mainContainer.appendChild(myInfoMainDiv);

let myInfoDiv1 = document.createElement('div');
let myInfoDiv2 = document.createElement('div');
let myInfoDiv3 = document.createElement('div');

myInfoMainDiv.appendChild(myInfoDiv1);
myInfoMainDiv.appendChild(myInfoDiv2);
myInfoMainDiv.appendChild(myInfoDiv3);

let myInfoDiv1Header = document.createElement('div');
let myInfoDiv1Info = document.createElement('p');

let myInfoDiv1Heading = document.createElement('div');
let myInfoDiv1SocialIcons = document.createElement('div');

myInfoDiv1.appendChild(myInfoDiv1Header);
myInfoDiv1.appendChild(myInfoDiv1Info);

myInfoDiv1Header.appendChild(myInfoDiv1Heading);
myInfoDiv1Header.appendChild(myInfoDiv1SocialIcons);

myInfoDiv1Heading.innerHTML = "Priyanka Saini"; 
myInfoDiv1Heading.style.marginBottom = '10px';
myInfoDiv1Heading.style.fontSize = '35px';
myInfoDiv1Heading.style.fontWeight = 'bold';
myInfoDiv1.style.marginTop = '30px';

myInfoDiv1SocialIcons.style.width = "110px";

myInfoDiv1SocialIcons.style.display = 'flex';
myInfoDiv1SocialIcons.style.justifyContent = "space-between";
myInfoDiv1SocialIcons.style.margin = "0px auto";

myInfoDiv1SocialIcons.innerHTML = '<img width="30px" src="icons\\linkedin.svg"><img width="30px" src="icons\\twitter.svg"><img width="30px" src="icons\\github.svg">';

myInfoDiv1Info.innerHTML = 'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my Linkedin or Github profile. Thank you so much for joining in my quest of changing everyone to developer.';

myInfoDiv1Info.style.margin = '55px 0px';
myInfoDiv1Info.style.fontSize = '19px';

myInfoDiv2.style.display = 'flex';

let myInfoDiv2Titles = document.createElement('div');
let myInfoDiv2Skills = document.createElement('div');
let myInfoDiv2Qualifications = document.createElement('div');

myInfoDiv2.appendChild(myInfoDiv2Titles);
myInfoDiv2.appendChild(myInfoDiv2Skills);
myInfoDiv2.appendChild(myInfoDiv2Qualifications);

myInfoDiv2.style.textAlign = 'left';
myInfoDiv2Titles.style.width = '30%';
myInfoDiv2Skills.style.width = '30%';
myInfoDiv2Qualifications.style.flex = '1';

let myInfoDiv2TitlesHead = document.createElement('h3');
let myInfoDiv2SkillsHead = document.createElement('h3');
let myInfoDiv2QualificationsHead = document.createElement('h3');

myInfoDiv2Titles.appendChild(myInfoDiv2TitlesHead);
myInfoDiv2Skills.appendChild(myInfoDiv2SkillsHead);
myInfoDiv2Qualifications.appendChild(myInfoDiv2QualificationsHead);

myInfoDiv2TitlesHead.innerHTML = "Titles";
myInfoDiv2SkillsHead.innerHTML = "Skills";
myInfoDiv2QualificationsHead.innerHTML = "Qualifications";

let myInfoDiv2TitlesList = document.createElement('p');
let myInfoDiv2SkillsList = document.createElement('p');
let myInfoDiv2QualificationsList = document.createElement('p');

myInfoDiv2Titles.appendChild(myInfoDiv2TitlesList);
myInfoDiv2Skills.appendChild(myInfoDiv2SkillsList);
myInfoDiv2Qualifications.appendChild(myInfoDiv2QualificationsList)


myInfoDiv2TitlesList.innerHTML = `&#127793; Educator<br>
&#128187; Programmer<br>
&#127760; Developer<br>
&#128293; Motivator<br>
&#128210; Content Creator<br>`;

myInfoDiv2SkillsList.innerHTML = `&#9989; Web Development<br>
&#9989; Data Analysis<br>
&#9989; Data Visualization<br>
&#9989; Programming<br>
&#9989; Databases<br>
&#9989; Developing API<br>`;

myInfoDiv2QualificationsList.innerHTML = `
&#128214; MSc. Computer Science Ongoing<br>
&#127891; BSc. Information and Communication Eng.<br>
&#127891; MSC. Food Technology<br>
&#127891; BSc Food Technology<br>
`;

let myInfoDiv3Header = document.createElement('h3');
myInfoDiv3.appendChild(myInfoDiv3Header);

myInfoDiv3Header.innerHTML = 'Keywords';
myInfoDiv3Header.style.textAlign = 'left';

let keywordsArray = ['# HTML','# HTML5','# CSS','# CSS3','# JS','# JavaScript','# ES6','# Promise','# async await','# Database','# React','# React Hooks','# Context API','# React Router','# Redux','# Node','# MongoDB','# SQL','# API','# DOM','# data science','# MERN','# Python','# Flask','# Statistics','# Linear Algebra','# Numpy','# Pandas','# Scipy','# Scikit-learn','# Visualization','# D3.js'];

let keywordsColorArray = ["#693860", "#009841", "#E2EC4E", "#CB577C", "#E74D58", "#E74D58", "#DEFD8D", "#E3E114", "#D91892", "#E0A9CB",
"#F0D349", "#2BAF07", "#CABE66", "#1535BD", "#01A20F", "#21F0BC", "#6C9284", "#F05167", "#757C7F", "#5D9E6F",
"#C94B65", "#265712", "#B8C9DB", "#A79AE2", "#844445", "#10C619", "#A2552D", "#509EA7", "#9B8A68", "#FCE84C",
"#88CCE6", "#66DE30"];

for(var i=0; i<keywordsArray.length; i++){
    let label =  document.createElement('p');
    myInfoDiv3.appendChild(label);
    label.style.display = "inline-block"
    label.innerHTML = `<i> ${keywordsArray[i]} </i>`;
    label.style.background = keywordsColorArray[i];
    label.style.fontSize = '15px';
    label.style.fontWeight = '700';
    label.style.margin = '3px 7px';
    label.style.padding = '3px 30px 5px 2px';
    label.style.borderRadius = '20px';
}




  
    
    
