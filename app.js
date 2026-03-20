// access elements
const firstPara = document.getElementById("n1")
const secondPara =document.getElementById("n2")
const thirdPara =document.getElementById("n3")
// counters for tasks
let i=0,j=0,k=0;


// main var
const add   = document.getElementById("add");
const btn   = document.getElementById("btn");
const alertBox = document.getElementById("all");
const input = document.getElementById("in");
const firstTask = document.getElementById("tasks1");
const topic = document.getElementById("topic");
const color = document.getElementById("color");
const del =document.getElementById("del")

// opening alert//

btn.addEventListener("click",()=>{
    alertBox.style.display="flex";
});

add.addEventListener("click",()=>{
    
    if (input.value === "") return;

    // adding div

    const div = document.createElement("div");
    div.draggable=true;
    div.classList.add("added");
    div.style.backgroundColor=color.value


    // adding paragraph
    const para = document.createElement("p");
    para.textContent=input.value;

    // adding span
    const span = document.createElement("span");
    span.classList.add("t");
    span.textContent=topic.value;

    // appending element (and hopping it works)
    div.appendChild(para);
    div.appendChild(span);
    firstTask.appendChild(div);

    // empty the input
    topic.value="";
    input.value="";
    alertBox.style.display="none";
});

// draggin tasks
let rightBox = document.getElementById("right");
let midBox = document.getElementById("mid");
let leftBox = document.getElementById("left");




// select all sections

let Task=document.getElementsByClassName("task");

for(task of Task){
    // when dragstar it select the current div
    task.addEventListener("dragstart",(e)=>{
        let selected = e.target
        del.style.display="flex";

    // when drag over it stopped
    rightBox.addEventListener("dragover",(e)=>{ e.preventDefault() });

    // now when it dropped in another div it appended
    rightBox.addEventListener("drop",(e)=>{
        rightBox.appendChild(selected)
        selected=null;
    });

    // same with others
    midBox.addEventListener("dragover",(e)=>{ e.preventDefault()});

    midBox.addEventListener("drop",(e)=>{
        midBox.appendChild(selected)
        selected=null;
    });

    leftBox.addEventListener("dragover",(e)=>{ e.preventDefault()});

    leftBox.addEventListener("drop",(e)=>{
        leftBox.appendChild(selected)
        selected=null;
    });
    del.addEventListener("dragover", (e) => e.preventDefault());
    del.addEventListener("drop",(e)=>{
        selected.remove();
        del.style.display="none";
    });
    });

    task.addEventListener("dragend",(e)=>{del.style.display="none"});
};




