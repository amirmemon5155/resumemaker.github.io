var fname = document.querySelector(".form-container-list-item .seconddiv #fname");
var lname = document.querySelector(".form-container-list-item .seconddiv #lname");
var fullName = document.querySelectorAll(".heading-container h1 span");
var pnum = document.querySelector(".form-container-list-item .seconddiv #pnum");
var email = document.querySelector(".form-container-list-item .seconddiv #email");
var city = document.querySelector(".form-container-list-item .seconddiv #city");
var country = document.querySelector(".form-container-list-item .seconddiv #country");
var address = document.querySelector(".form-container-list-item .seconddiv #address");
var objective = document.querySelector(".form-container-list-item .seconddiv #objective");
var dob = document.querySelector(".form-container-list-item .seconddiv #dob");
var skill = document.querySelector(".form-container-list-item .seconddiv #skill1");
var martial = document.querySelector(".form-container-list-item .seconddiv #martial");
var sk = document.querySelector('.skill_btn span');
var skillCont = document.querySelector('.skills');
var skillList = document.querySelector(".skill-container .skill-list-group");


var loader = document.getElementById('loader');
var myfun2 = () =>{    
loader.style.display= 'none';    
fullName[0].innerHTML = "student";   
fullName[1].innerHTML = "name";    
document.querySelector("#phoneNumber").innerHTML = "91-9999999999";
document.querySelector("#emailBox").innerHTML = "xyz.xyz@gmail.com";
document.querySelector("#objectiveBox").innerHTML = "Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.Seeking an entry-level position to begin my career in a high-level professional environment.";
document.querySelector("#dobBox").innerHTML = "YYYY-MM-DD";
};

document.querySelector('#fontStyle').addEventListener('change' , () => {
    var x = document.querySelector('#fontStyle').options;            
    var y = document.querySelector('#fontStyle').selectedIndex;            
    // console.log(x[y].value);
    document.querySelector('#fontStyle').value = x[y].value;
    console.log(document.querySelector('#fontStyle').value);

})

document.querySelector('#print-btn').addEventListener('click' , () => {            
    // document.querySelector('nav').style.display = 'none';
    // document.querySelector('.nav-bar').style.display = 'none';
    // document.querySelector('.resume-box').style.margin = '0px';
    // document.querySelector('.resume-box').style.width = '100%';
    // window.print();
    // document.querySelector('nav').style.display = '';
    // document.querySelector('.nav-bar').style.display = '';
    // document.querySelector('.resume-box').style.margin = '70px auto';
    // document.querySelector('.resume-box').style.width = '74%';

    var backup = document.body.innerHTML;
    var divcontent = document.querySelector('.resume-box').innerHTML;
    document.body.innerHTML = divcontent;
    window.print(); 
    // document.body.innerHTML = backup;    
});

var li = document.querySelectorAll(".nav-container-list-item");

// li[1].addEventListener('click' , () => {
    
    
// })

function myform(j){
    
        if (document.querySelectorAll(".form-container-list-item .seconddiv")[j].style.display=='none') {
            document.querySelectorAll(".form-container-list-item .seconddiv")[j].style.display='';
            document.querySelectorAll(".form-container-list-item .arrow-icon i")[j].style.transform='rotate(180deg)';
        }
        else{
            document.querySelectorAll(".form-container-list-item .seconddiv")[j].style.display='none';
            document.querySelectorAll(".form-container-list-item .arrow-icon i")[j].style.transform='rotate(0deg)';
        }
    }


function myfun(i){

    if (document.querySelectorAll(".nav-container-list-item .seconddiv")[i].style.display=='none') {
        document.querySelectorAll(".nav-container-list-item .seconddiv")[i].style.display='';
        document.querySelectorAll(".nav-container-list-item .arrow-icon i")[i].style.transform = 'rotate(180deg)';
    }
    else{
        document.querySelectorAll(".nav-container-list-item .seconddiv")[i].style.display='none';
        document.querySelectorAll(".nav-container-list-item .arrow-icon i")[i].style.transform = 'rotate(0deg)';
    }
};

fname.addEventListener('input',() => {
    fullName[0].innerHTML = fname.value;

});

lname.addEventListener('input',() => {
    fullName[1].innerHTML = lname.value;
    // fullName.innerHTML = `${fname.value} ${lname.value}` ;

});

pnum.addEventListener('input',() => {
    document.querySelector("#phoneNumber").innerHTML = pnum.value;
});

email.addEventListener('input',() => {
    document.querySelector("#emailBox").innerHTML = email.value;
});

address.addEventListener('input',() => {
    document.querySelector("#addressBox").innerHTML = address.value;
});

city.addEventListener('input',() => {
    document.querySelector("#cityBox").innerHTML = city.value;
});

country.addEventListener('input',() => {
    document.querySelector("#countryBox").innerHTML = country.value;
});

objective.addEventListener('input',() => {
    document.querySelector("#objectiveBox").innerHTML = objective.value;
});

dob.addEventListener('input',() => {
    document.querySelector("#dobBox").innerHTML = dob.value;
});

martial.addEventListener('input',() => {
    document.querySelector("#martialBox").innerHTML = martial.value;
});

// document.querySelector(".nav-bar div").addEventListener('click' , ()=> {

//     if(document.querySelector("nav").style.width == '25%'){

//         document.querySelector("nav").style.width='0%';

//     }
//     else{
//         document.querySelector("nav").style.width='25%';   
//     }
// })    
var k=1;
var skillk=0;
var skarr = new Array();
sk.addEventListener('click' , () =>{

    
    
    // skarr.push(skvalue);

    
    const innode = document.createElement('div');
    innode.classList.add('skill-input');
    innode.classList.add('d-inline-block');
    innode.classList.add('form-group');
    innode.style.width = '100%';    
    k++;        
    
    var skillContent = `<div class=" d-flex " style="cursor: pointer;">
    <input id="skill" type="text" name="skill${k}" placeholder="skill${k}" class="form-control ">                                                                                           
    </div>  `;    
    innode.insertAdjacentHTML('afterbegin', skillContent);
    
    skillCont.appendChild(innode);

    skillDoneBtn(skillk);
    skillk++;
})

// document.querySelector('#skillDoneBtn').addEventListener('click' , skillDoneBtn);
var skillDoneBtn = (skillk) => {
    
    console.log(document.querySelectorAll('#skill').length);
    // while(skillk<document.querySelectorAll('#skill').length){
        const skc = document.createElement('li');
        skc.classList.add('skill-list-item');
        skc.id = `skillBox`;    
        document.querySelector('.skill-list-group').appendChild(skc);
        document.querySelectorAll('#skillBox')[skillk].innerHTML = document.querySelectorAll('#skill')[skillk].value;        
        // skillk++;
    // }
};

var langk = 0;
var l=1;
document.querySelector('.language_btn_container .language_btn').addEventListener('click' , () =>{    
    const innode = document.createElement('div');
    innode.classList.add('language-input');
    innode.classList.add('d-inline-block');
    innode.classList.add('form-group');
    innode.style.width = '100%';    
    l++;        
    
    var Content = `<div class=" d-flex " style="cursor: pointer;">
    <input id="language" type="text" name="language${l}" placeholder="language${l}" class="form-control ">                                                                                           
    </div>  `;    
    innode.insertAdjacentHTML('afterbegin', Content);
    
    document.querySelector('.languages').appendChild(innode);

    languageDoneBtn(langk);
    langk++;
})

var languageDoneBtn = (langk) => {
    
    // console.log(document.querySelectorAll('#language').length);
    // while(skillk<document.querySelectorAll('#skill').length){
        const skc = document.createElement('li');
        skc.classList.add('language-list-item');
        skc.id = `languageBox`;    
        document.querySelector('.language-list-group').appendChild(skc);
        document.querySelectorAll('#languageBox')[langk].innerHTML = document.querySelectorAll('#language')[langk].value;
        // skillk++;
    // }
};

var educ = 0;

document.querySelector('.education_btn_container .education_btn').addEventListener('click' , () =>{    
    const innode = document.createElement('div');
    innode.classList.add('exam-container-item');    
    innode.style.width = '100%';    
          
    
    var Content = `<hr> <div class="form-group d-inline-block" style="width: 100% !important;">
    <label for="">course/degree:</label>
    <input type="text" id="course" placeholder="E.g. BCA" class="form-control">
 </div>
                                                                         
 <div class="form-group d-inline-block" style="width: 100% !important;">
      <label for="">university/school:</label>
      <input type="text" id="university" placeholder="E.g. DAVV" class="form-control ">                                                      
 </div>

 <div class="form-group d-inline-block " style="width: 50% !important;">
     <label for="">year:</label>                               
      <input type="text" id="year" min="0" placeholder="E.g. 2021" class="form-control ">                                                      
  </div>  

 <div class="form-group d-inline-block " style="width: 50% !important;">
     <label for="">percentage</label>                            
      <div class="d-flex " style="align-items: center;">
         <input type="number" id="grade" placeholder="E.g. 70" class="form-control " style="margin-right: 5px; "> <span>%</span>
      </div>                                                
 </div> `;    
    innode.insertAdjacentHTML('afterbegin', Content);
    
    document.querySelector('.exam-container-items').appendChild(innode);

    educationDoneBtn(educ);
    educ++;
})

var educationDoneBtn = (educ) => {
    
    // console.log(document.querySelectorAll('#language').length);
    // while(skillk<document.querySelectorAll('#skill').length){
        const skc = document.createElement('li');
        skc.classList.add('education-list-item');
        const content = `<div class="row" style="z-index: -111 !important;">
            <div class="col-lg-3 col-md-3 col-sm-3" style="font-weight: bold;font-size: 18px;">
                <p class="yearBox py-1 secondHeader"></p>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9 text-left" style="font-weight: bold;font-size: 18px;padding: 0 !important;margin: 0">
                <p class="courseBox"></p>
                <p class="schlBox " ></p>        
                <p class="gradeBox"></p>
            </div>
        </div>`;
        skc.id = `educationBox`;
        skc.insertAdjacentHTML('afterbegin' , content);
        document.querySelector('.education-list-group').appendChild(skc);
        document.querySelectorAll('#educationBox .courseBox')[educ].innerHTML = document.querySelectorAll('.exam-container-item #course')[educ].value;
        document.querySelectorAll('#educationBox .schlBox')[educ].innerHTML = document.querySelectorAll('.exam-container-item #university')[educ].value;
        document.querySelectorAll('#educationBox .yearBox')[educ].innerHTML = document.querySelectorAll('.exam-container-item #year')[educ].value;
        document.querySelectorAll('#educationBox .gradeBox')[educ].innerHTML = `${document.querySelectorAll('.exam-container-item #grade')[educ].value}<span>%</span>`;
        // skillk++;
    // }
};

var project = 0;

document.querySelector('.project_btn_container .project_btn').addEventListener('click' , () =>{    
    const innode = document.createElement('div');
    innode.classList.add('project-container-item');    
    innode.style.width = '100%';    
          
    
    var Content = `<hr> <div class="form-group d-inline-block" style="width: 100% !important;">
    <label for="">project name:</label>
    <input type="text" id="projectName" placeholder="E.g. project name" class="form-control ">
 </div>
                                                                         
 <div class="form-group d-inline-block" style="width: 100% !important;">
      <label for="">project detail:</label>
      <textarea name="objective" placeholder="E.g. project detail" id="projectDetail" cols="50" rows="5" class="form-control"></textarea>
 </div> `;    
    innode.insertAdjacentHTML('afterbegin', Content);
    
    document.querySelector('.project-container-items').appendChild(innode);

    projectDoneBtn(project);
    project++;
})

var projectDoneBtn = (project) => {
    
        const skc = document.createElement('li');
        skc.classList.add('project-list-item');
        const content = `<h6 class="projectNameBox py-1 secondHeader" id=""></h6>
            <p class="projectDetailBox " id=""></p>`;
        skc.id = `projectBox`;
        skc.insertAdjacentHTML('afterbegin' , content);
        document.querySelector('.project-list-group').appendChild(skc);
        document.querySelectorAll('#projectBox .projectNameBox')[project].innerHTML = document.querySelectorAll('.project-container-item #projectName')[project].value;
        document.querySelectorAll('#projectBox .projectDetailBox')[project].innerHTML = document.querySelectorAll('.project-container-item #projectDetail')[project].value;        
    
};

var exp = 0;

document.querySelector('.exp_btn_container .exp_btn').addEventListener('click' , () =>{    
    const innode = document.createElement('div');
    innode.classList.add('experiance-container-item');    
    innode.style.width = '100%';                  
    var Content = `<hr> <div class="form-group d-inline-block" style="width: 100% !important;">
    <label for="">company name:</label>
    <input type="text" id="companyName" placeholder="E.g. infotech" class="form-control">
 </div>
 <div class="form-group d-inline-block" style="width: 100% !important;">
    <label for="">job title:</label>
    <input type="text" id="jobTitle" placeholder="E.g. python developer" class="form-control">
 </div>
 <div class="d-flex">
    <div class="form-group d-inline-block" style="width: 50% !important;">
        <label for="">start date:</label>
        <input type="text" id="startDate" min="0" placeholder="E.g. 2018" class="form-control">
     </div>
     <div class="form-group d-inline-block ml-3" style="width: 50% !important;">
        <label for="">end date:</label>
        <input type="text" id="endDate" min="0" placeholder="E.g. 2021" class="form-control">
     </div>
 </div>
 <div class="form-group d-inline-block " style="width: 100% !important;">
    <label for="">job detail:</label>                    
    <textarea name="" id="jobDetail" cols="50" rows="4" class="form-control"></textarea>
</div>`;    
    innode.insertAdjacentHTML('afterbegin', Content);
    
    document.querySelector('.experiance-container-items').appendChild(innode);
    expDoneBtn(exp);
    exp++;
})

var expDoneBtn = (exp) => {
    
        const skc = document.createElement('li');
        skc.classList.add('exp-list-item');
        const content = `<div class="row" style="z-index: -111 !important;">
        <div class="col-lg-3 col-md-3 col-sm-3" style="font-weight: bold;font-size: 18px;">
            <p class="py-1 secondHeader"><span class="startYearBox"></span>-<span class="endYearBox"></span></p>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-9" style="font-size: 18px;padding: 0 !important;margin: 0">
            <h5 class="companyNameBox pb-2"></h5>
            <p class="jobTitleBox py-0"></p>        
            <p class="jobDetailBox"></p>
        </div>
        </div>`;
        skc.id = `expBox`;
        skc.insertAdjacentHTML('afterbegin' , content);
        document.querySelector('.experiance-list-group').appendChild(skc);        
        document.querySelectorAll('#expBox .startYearBox')[exp].innerHTML = document.querySelectorAll('.experiance-container-item #startDate')[exp].value;
        document.querySelectorAll('#expBox .endYearBox')[exp].innerHTML = document.querySelectorAll('.experiance-container-item #endDate')[exp].value;        
        document.querySelectorAll('#expBox .companyNameBox')[exp].innerHTML = document.querySelectorAll('.experiance-container-item #companyName')[exp].value;
        document.querySelectorAll('#expBox .jobTitleBox')[exp].innerHTML = document.querySelectorAll('.experiance-container-item #jobTitle')[exp].value;
        document.querySelectorAll('#expBox .jobDetailBox')[exp].innerHTML = document.querySelectorAll('.experiance-container-item #jobDetail')[exp].value;            
};

document.querySelector("#themecolor").addEventListener('change' , () => {
    document.querySelector("header").style.background = document.querySelector("#themecolor").value;
    var h=0;
    while(h<(document.querySelectorAll(".main-section h4").length)){
        document.querySelectorAll(".main-section h4")[h].style.color = document.querySelector("#themecolor").value;
        h++;
    }
    h=0;
    while(h<(document.querySelectorAll("aside h5").length)){
        document.querySelectorAll("aside h5")[h].style.color = document.querySelector("#themecolor").value;
        h++;
    }
    
    // document.querySelectorAll("h5").style.color = document.querySelector("#themecolor").value;
})

document.querySelector('body').addEventListener('load' , () => {
    
}) 

var chk = document.querySelector('#fr-checkbox');
var xp = document.querySelector(".experiance-container-items");

chk.addEventListener('click' , () =>{

    if(chk.checked == true){
        xp.style.display = 'none';
        chk.value = 'fresher';
    }
    else
       if(chk.checked == false){
        xp.style.display = '';
       }
    
    

})

