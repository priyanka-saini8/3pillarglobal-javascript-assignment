let body = document.getElementsByTagName('body');
body[0].style.fontFamily = 'Raleway, sans-serif';
let mainContainer = document.createElement('div');
mainContainer.style.textAlign = 'center';
mainContainer.style.marginLeft = '250px';
mainContainer.style.marginRight = '250px';
mainContainer.className = 'mainContainer';
//mainContainer.style.fontFamily = 'inherit';


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
// head1.style.fontFamily = 'inherit';
let head2 = document.createElement('p');
let head3 = document.createElement('p');

let head1Span = document.createElement('span');



head1.innerHTML = "Priyanka Saini challenges in ";
head1Span.innerHTML = '2020';
head2.textContent = "30DaysOfJavaScript Challenge";
head3.innerHTML = "Jan 22";

head1.style.fontSize = '40px';
head1Span.style.fontSize = '100px';
head2.style.textDecoration = 'underline';
head2.style.fontSize = '30px';
head2.style.fontWeight = 'lighter';
head3.style.display = 'inline';
//head3.style.backgroundColor = '#5a3f99';
head3.style.padding = '10px 20px 10px 20px';
changeColor();


headingDiv.appendChild(head1);
head1.appendChild(head1Span);
headingDiv.appendChild(head2);
headingDiv.appendChild(head3);

let index = 0;
let tableContent1Data = ["30 Days Of Python", "30 Days Of JavaScript", "30 Days Of HTML & CSS", "30 Days Of React", "30 Days Of ReactNative",
    "30 Days Of FullStack", "30 Days Of Data Analysis", "30 Days Of Machine Learning"];
let tableContent2Data = ["Python", "JavaScript", "HTML & CSS", "React", "ReactNative", "FullStack", "Data Analysis", "Machine Learning"];
let tableContent3Data = ["Done", "Ongoing", "Coming", "Coming", "Coming", "Coming", "Coming", "Coming"]
for (index = 0; index <= 7; index++) {
    let tableContent1 = document.createElement('div');

    tableContent1.style.display = 'flex';
    tableContent1.style.justifyContent = 'space-between';
    tableContent1.style.padding = '25px 20px 25px 20px';

    let content1 = document.createElement('div');
    let content2 = document.createElement('details');
    let content3 = document.createElement('div');

    let subTask = ['task1', 'task2', 'task3', 'task4'];
    let content2Summary = document.createElement('summary');
    content2Summary.innerHTML = tableContent2Data[index];
    let content2list = document.createElement('ul');
    content2list.style.listStyle = 'none';

    content1.textContent = tableContent1Data[index];
    content3.textContent = tableContent3Data[index];

    if (tableContent3Data[index] == "Done") {
        tableContent1.style.backgroundColor = '#21bf74'
        content1.style.textDecoration = 'underline'
    }
    else if (tableContent3Data[index] == 'Ongoing') {
        tableContent1.style.backgroundColor = '#fddb3b'
        content1.style.textDecoration = 'underline'
    }
    else
        tableContent1.style.backgroundColor = '#ff5c53';

    tableContent1.style.marginBottom = '5px';

    tableDiv.appendChild(tableContent1);

    tableContent1.appendChild(content1);
    tableContent1.appendChild(content2);
    tableContent1.appendChild(content3);

    content2.appendChild(content2Summary);
    content2.appendChild(content2list);
    for (let i = 0; i < subTask.length; i++) {
        let content2Task = document.createElement('li');
        content2Task.innerHTML = subTask[i];
        content2list.appendChild(content2Task);
    }
}

function changeColor() {
    let spanColorArray = ['#0307fc', '#b505fa', '#241536', '#061a03', '#a2b7fa', '#4b00cc']
    let inlineColorArray = ['#119e14', '#0f4a0d', '#6a9130', '#87d618', '#fa4f46', '#5d00ff']

    let index = 0;

    setInterval(() => {
        if (index >= spanColorArray.length) index = 0;
        head1Span.style.color = spanColorArray[index];
        head3.style.backgroundColor = inlineColorArray[index];
        index++;
    }, 1000);
}

  
    
    
