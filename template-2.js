var iframe = document.querySelector(".resume-box iframe");
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
    document.querySelector("#cityBox").innerHTML = `${city.value},`;
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


var k=0;

sk.addEventListener('click' , () =>{

    
    
    // skarr.push(skvalue);

    
    const innode = document.createElement('div');
    innode.classList.add('skill-input');
    innode.classList.add('d-inline-block');
    innode.classList.add('form-group');
    innode.style.width = '100%';    
           
    k++; 
    var skillContent = `<div class=" d-flex " style="cursor: pointer;">
    <input id="${k}" type="text" name="skill${k+1}" oninput="skillDoneBtn(this.id)" placeholder="skill${k+1}" class="form-control skillInput">
    </div>  `;    
    innode.insertAdjacentHTML('afterbegin', skillContent);
    
    skillCont.appendChild(innode);

    const skc = document.createElement('li');
        skc.classList.add('skill-list-item');
        skc.classList.add('skillBox');    
        document.querySelector('.skill-list-group').appendChild(skc);
        
    // skillDoneBtn(skillk);
    
    
})


var skillDoneBtn = (skillk) => {
    
    // c onsole.log(document.querySelectorAll('#skill').length);
        // console.log(skillk);
        // const skc = document.createElement('li');
        // skc.classList.add('skill-list-item');
        // skc.id = `skillBox`;    
        // document.querySelector('.skill-list-group').appendChild(skc);
        document.querySelectorAll('.skillBox')[skillk].innerHTML = document.querySelectorAll('.skillInput')[skillk].value;
};

var langk = 0;
var l=0;
document.querySelector('.language_btn_container .language_btn').addEventListener('click' , () =>{    
    const innode = document.createElement('div');
    innode.classList.add('language-input');
    innode.classList.add('d-inline-block');
    innode.classList.add('form-group');
    innode.style.width = '100%';    
    l++;
    
    var Content = `<div class=" d-flex " style="cursor: pointer;">
    <input id="${l}" oninput="languageDoneBtn(this.id)" type="text" name="language${l+1}" placeholder="language${l+1}" class="form-control language"> 
    </div>  `;    
    innode.insertAdjacentHTML('afterbegin', Content);
    
    document.querySelector('.languages').appendChild(innode);

    const skc = document.createElement('li');
    skc.classList.add('language-list-item');
    skc.id = `languageBox`;    
    document.querySelector('.language-list-group').appendChild(skc);
            
    // languageDoneBtn(langk);
    // langk++;
})

var languageDoneBtn = (langk) => {
    
    // console.log(document.querySelectorAll('#language').length);
    // while(skillk<document.querySelectorAll('#skill').length){
        
        document.querySelectorAll('#languageBox')[langk].innerHTML = document.querySelectorAll('.language-input .language')[langk].value;
        // skillk++;
    // }
};

var e=0;

document.querySelector('.education_btn_container .education_btn').addEventListener('click' , () =>{    
    const innode = document.createElement('div');
    innode.classList.add('exam-container-item');    
    innode.style.width = '100%';    
    e++;      
    var Content = `<hr> <div class="form-group d-inline-block" style="width: 100% !important;">
    <label for="">course/degree:</label>
    <input type="text" id="${e}" name="course${e}" oninput="educationDoneBtn(this.id)" placeholder="E.g. BCA" class="form-control course">
 </div>
                                                                         
 <div class="form-group d-inline-block" style="width: 100% !important;">
      <label for="">university/school:</label>
      <input type="text" id="${e}" name="university${e}" oninput="educationDoneBtn(this.id)" placeholder="E.g. DAVV" class="form-control university">                                                      
 </div>

 <div class="form-group d-inline-block " style="width: 50% !important;">
     <label for="">year:</label>                               
      <input type="text" id="${e}" name="year${e}" oninput="educationDoneBtn(this.id)" min="0" placeholder="E.g. 2021" class="form-control year">                                                      
  </div>  

 <div class="form-group d-inline-block " style="width: 50% !important;">
     <label for="">percentage</label>                            
      <div class="d-flex " style="align-items: center;">
         <input type="number" id="${e}" name="grade${e}" oninput="educationDoneBtn(this.id)" placeholder="E.g. 70" class="form-control grade" style="margin-right: 5px; "> <span>%</span>
      </div>                                                
 </div> `;    
    innode.insertAdjacentHTML('afterbegin', Content);
    
    document.querySelector('.exam-container-items').appendChild(innode);


    const skc = document.createElement('li');
        skc.classList.add('education-list-item');
        
        skc.id = `educationBox`;
        skc.insertAdjacentHTML('afterbegin' , `<div class="row" style="z-index: -111 !important;">
        <div class="col-lg-3 col-md-3 col-sm-3" style="font-weight: bold;font-size: 18px;">
            <p class="yearBox py-1 secondHeader"></p>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 text-left" style="font-weight: bold;font-size: 18px;padding: 0 !important;margin: 0">
            <p class="courseBox"></p>
            <p class="schlBox " ></p>        
            <p class="gradeBox"></p>
        </div>
    </div>`);
        document.querySelector('.education-list-group').appendChild(skc);


    // educationDoneBtn(educ);
    // educ++;
})

var educationDoneBtn = (educ) => {
    
    // console.log(document.querySelectorAll('#language').length);
    // while(skillk<document.querySelectorAll('#skill').length){
        
        document.querySelectorAll('#educationBox .courseBox')[educ].innerHTML = document.querySelectorAll('.exam-container-item .course')[educ].value;
        document.querySelectorAll('#educationBox .schlBox')[educ].innerHTML = document.querySelectorAll('.exam-container-item .university')[educ].value;
        document.querySelectorAll('#educationBox .yearBox')[educ].innerHTML = document.querySelectorAll('.exam-container-item .year')[educ].value;
        document.querySelectorAll('#educationBox .gradeBox')[educ].innerHTML = `${document.querySelectorAll('.exam-container-item .grade')[educ].value}<span>%</span>`;
        // skillk++;
    // }
};

var project = 0;

document.querySelector('.project_btn_container .project_btn').addEventListener('click' , () =>{    
    const innode = document.createElement('div');
    innode.classList.add('project-container-item');    
    innode.style.width = '100%';    
     project++;       
    var Content = `<hr> <div class="form-group d-inline-block" style="width: 100% !important;">
    <label for="">project name:</label>
    <input type="text" id="${project}" oninput="projectDoneBtn(this.id)"  placeholder="E.g. project name" name="project${project}" class="form-control projectName">
 </div>
 <div class="form-group d-inline-block" style="width: 100% !important;">
     <label for="">technology used:</label>
     <input type="text" id="${project}" name="project0" oninput="projectDoneBtn(this.id)"  placeholder="E.g. Html, css, jquery" class="form-control technologyUsed">
 </div>                                                                
 <div class="form-group d-inline-block" style="width: 100% !important;">
      <label for="">project detail:</label>
      <textarea name="objective" placeholder="E.g. project detail" id="${project}" oninput="projectDoneBtn(this.id)" cols="50" rows="5" class="form-control projectDetail"></textarea>
 </div> `;    
    innode.insertAdjacentHTML('afterbegin', Content);
    
    document.querySelector('.project-container-items').appendChild(innode);


        const skc = document.createElement('li');
        skc.classList.add('project-list-item');
         
        skc.id = `projectBox`;
        skc.insertAdjacentHTML('afterbegin' , `<h5 class="projectNameBox py-1 secondHeader" id=""></h5>
        <p class=" py-1"  id=""><span style="font-weight: 600;">  <span class="technologyUsedBox"></span> </p>
        <p class="projectDetailBox " id=""></p>`);
        document.querySelector('.project-list-group').appendChild(skc);

    // projectDoneBtn(project);
    // project++;
})

var projectDoneBtn = (project1) => {
            
        document.querySelectorAll('#projectBox .projectNameBox')[project1].innerHTML = document.querySelectorAll('.project-container-item .projectName')[project1].value;
        document.querySelectorAll('#projectBox .technologyUsedBox')[project1].innerHTML =`technology used: ${document.querySelectorAll('.project-container-item .technologyUsed')[project1].value}`;
        document.querySelectorAll('#projectBox .projectDetailBox')[project1].innerHTML = document.querySelectorAll('.project-container-item .projectDetail')[project1].value;        
    
};

var exp = 0;
document.querySelector('.exp_btn_container .exp_btn').addEventListener('click' , () =>{    
    const innode = document.createElement('div');
    innode.classList.add('experiance-container-item');    
    innode.style.width = '100%';   
    exp++;               
    var Content = `<hr> <div class="form-group d-inline-block" style="width: 100% !important;">
    <label for="">company name:</label>
    <input type="text" id="${exp}" oninput="expDoneBtn(this.id)" placeholder="E.g. infotech" class="form-control companyName">
 </div>
 <div class="form-group d-inline-block" style="width: 100% !important;">
    <label for="">job title:</label>
    <input type="text" id="${exp}" oninput="expDoneBtn(this.id)" placeholder="E.g. python developer" class="form-control jobTitle">
 </div>
 <div class="d-flex">
    <div class="form-group d-inline-block" style="width: 50% !important;">
        <label for="">start date:</label>
        <input type="text" id="${exp}" oninput="expDoneBtn(this.id)" min="0" placeholder="E.g. 2018" class="form-control startDate">
     </div>
     <div class="form-group d-inline-block ml-3" style="width: 50% !important;">
        <label for="">end date:</label>
        <input type="text" id="${exp}" oninput="expDoneBtn(this.id)" min="0" placeholder="E.g. 2021" class="form-control endDate">
     </div>
 </div>
 <div class="form-group d-inline-block " style="width: 100% !important;">
    <label for="">job detail:</label>                    
    <textarea name="" id="${exp}" oninput="expDoneBtn(this.id)" cols="50" rows="4" class="form-control jobDetail"></textarea>
</div>`;    
    innode.insertAdjacentHTML('afterbegin', Content);    
    document.querySelector('.experiance-container-items').appendChild(innode);

    const skc = document.createElement('li');
        skc.classList.add('exp-list-item');
        
        skc.id = `expBox`;
        skc.insertAdjacentHTML('afterbegin' , `<div class="row" style="z-index: -111 !important;">
        <div class="col-lg-3 col-md-3 col-sm-3" style="font-weight: bold;font-size: 18px;">
            <p class="py-1 secondHeader"><span class="startYearBox"></span>-<span class="endYearBox"></span></p>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-9" style="font-size: 18px;padding: 0 !important;margin: 0">
            <h5 class="companyNameBox pb-2"></h5>
            <p class="jobTitleBox py-0"></p>        
            <p class="jobDetailBox"></p>
        </div>
        </div>`);
        document.querySelector('.experiance-list-group').appendChild(skc);        

    // expDoneBtn(exp);
    // exp++;
})

var expDoneBtn = (exp1) => {
    
        
        document.querySelectorAll('#expBox .startYearBox')[exp1].innerHTML = document.querySelectorAll('.experiance-container-item .startDate')[exp1].value;
        document.querySelectorAll('#expBox .endYearBox')[exp1].innerHTML = document.querySelectorAll('.experiance-container-item .endDate')[exp1].value;        
        document.querySelectorAll('#expBox .companyNameBox')[exp1].innerHTML = document.querySelectorAll('.experiance-container-item .companyName')[exp1].value;
        document.querySelectorAll('#expBox .jobTitleBox')[exp1].innerHTML = document.querySelectorAll('.experiance-container-item .jobTitle')[exp1].value;
        document.querySelectorAll('#expBox .jobDetailBox')[exp1].innerHTML = document.querySelectorAll('.experiance-container-item .jobDetail')[exp1].value;            
};

var tskill = 0;
document.querySelector('.tskill_btn_container .tskill_btn').addEventListener('click' , () =>{    
    const innode = document.createElement('div');
    innode.classList.add('tskill');    
    innode.style.width = '100%';                  

    tskill++;
    var Content = `<hr> <div class="form-group d-inline-block skill-input " style="width: 100% !important;">                                       
    <div class=" d-flex " style="cursor: pointer;">
       <input id="${tskill}" oninput="tskillDoneBtn(this.id)" type="text" name="tskill1" placeholder="skill 1" class="form-control tskillName">
    </div>                                                                                                                                                                                                               
</div>`;    
    innode.insertAdjacentHTML('afterbegin', Content);    
    document.querySelector('.tskill-container').appendChild(innode);

    
    const skc = document.createElement('div');
    skc.classList.add('tskills-list-item');    
    skc.id = `tskillsBox`;
    skc.insertAdjacentHTML('afterbegin' , `<button class="btn techBtn tskillNameBox"></button>`);
    document.querySelector('.tskills-list-group').appendChild(skc);        

    // tskillDoneBtn(tskill);
    // tskill++;
})

var tskillDoneBtn = (tskill1) => {
        
        document.querySelectorAll('.tskills-list-item .tskillNameBox')[tskill1].innerHTML = document.querySelectorAll('.tskill .tskillName')[tskill1].value;
        
        
};



document.querySelector("#themechange").addEventListener('click' , () => {
    document.querySelector("header").style.background = document.querySelector("#themecolor").value;
    var h=0;    
    while(h<(document.querySelectorAll(".resume-box h4").length)){
        document.querySelectorAll(".resume-box h4")[h].style.color = document.querySelector("#themecolor").value;
        h++;
    }    
    h=0;
    while(h<(document.querySelectorAll(".progress-bar").length)){
        document.querySelectorAll(".progress-bar")[h].style.background = document.querySelector("#themecolor").value;
        h++;
    }  
    h=0;
    while(h<(document.querySelectorAll(".techBtn").length)){
        document.querySelectorAll(".techBtn")[h].style.background = document.querySelector("#themecolor").value;
        h++;
    }    
    
    // document.querySelectorAll("h5").style.color = document.querySelector("#themecolor").value;
})


document.querySelector("#bgChange").addEventListener('click' , () => {
    document.querySelector(".resume-box").style.background = document.querySelector("#bgcolorBox").value;
    
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
var sectionAdd = (id) => {
    var section = document.querySelectorAll('.sectionContainerItems input');
            switch(id){
                case '0':
                    if(section[id].checked == true ){
                        document.querySelector('.objective-container').style.display ='';
                    }                    
                    else{
                        document.querySelector('.objective-container').style.display ='none';
                    }
                    break;

                case '1':
                    if(section[id].checked == true ){
                        document.querySelector('.experiance-container').style.display ='';
                    }                    
                    else{
                        document.querySelector('.experiance-container').style.display ='none';
                    }
                    break;
                case '2':
                    if(section[id].checked == true ){
                        document.querySelector('.project-container').style.display ='';
                    }                    
                    else{
                        document.querySelector('.project-container').style.display ='none';
                    }
                    break;
                case '3':
                    if(section[id].checked == true ){
                        document.querySelector('.education-container').style.display ='';
                    }                    
                    else{
                        document.querySelector('.education-container').style.display ='none';
                    }
                    break;
                case '4':
                    if(section[id].checked == true ){
                        document.querySelector('.address-container').style.display ='';
                    }                    
                    else{
                        document.querySelector('.address-container').style.display ='none';
                    }
                    break;
                case '5':
                    if(section[id].checked == true ){
                        document.querySelector('.personalDetailContainer').style.display ='';
                    }                    
                    else{
                        document.querySelector('.personalDetailContainer').style.display ='none';
                    }
                    break;
                case '6':
                    if(section[id].checked == true ){
                        document.querySelector('.skillContainer').style.display ='';
                    }                    
                    else{
                        document.querySelector('.skillContainer').style.display ='none';
                    }
                    break;
                case '7':
                    if(section[id].checked == true ){
                        document.querySelector('.languageContainer').style.display ='';
                    }                    
                    else{
                        document.querySelector('.languageContainer').style.display ='none';
                    }
                    break;   
                case '8':
                    if(section[id].checked == true ){
                        document.querySelector('.tskillContainer').style.display ='';
                    }                    
                    else{
                        document.querySelector('.tskillContainer').style.display ='none';
                    }
                    break;                 
            }
            
    
}

var showSectionContainer = () => {    
    if(document.querySelector(".sectionContainer").style.display=="none"){
        
        document.querySelector(".sectionContainer").style.display='';
    }
    else{
        document.querySelector(".sectionContainer").style.display = "none";
    }
    
}

var showtemplatesContainer = () =>{
    if(document.querySelector(".templatesContainer").style.display=="none"){
        
        document.querySelector(".templatesContainer").style.display='';
    }
    else{
        document.querySelector(".templatesContainer").style.display = "none";
    }
}