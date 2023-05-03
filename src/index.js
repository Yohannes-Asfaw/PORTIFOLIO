const skillsSection= document.getElementById('skills')
const progressBars =document.querySelectorAll('.progress-bar')
const storySection=document.getElementById('story')
const projectsection=document.getElementById('projectes')
const projectcards=document.querySelectorAll('.card')
function showprogress(){
    progressBars.forEach(progressBar=>{
        const  value = progressBar.dataset.progress;
        progressBar.style.opacity=1;
        progressBar.style.width=`${value}%`
        
        
    })

}
function hideprogress(){
    progressBars.forEach(progressBar=>{
        progressBar.style.opacity=0;
        progressBar.style.width=0;

        
        
    })
}
function showstory(){
    storySection.style.opacity=1;
    storySection.style.transform="translateY(0px)";
    storySection.style.transition="opacity 1s ease";
    storySection.style.transform="1s ease";
    
    
    
    
}
function hidestory(){
    storySection.style.opacity=0.01;
    storySection.style.transform="translateY(20px)";
    storySection.style.transition="opacity 1s ease";
    storySection.style.transform="1s ease";
    
    
}
function showprojectes(){
    projectcards.forEach(projectcard=>{
        projectcard.style.opacity=1;
        projectcard.style.filter='blur(0)';
        
        projectcard.style.transform='translateX(0)';
        
        
        
    })
    
    
    
    
    
}
function hideprojectes(){
    projectcards.forEach(projectcard=>{
        projectcard.style.opacity=0;
        projectcard.style.filter='blur(5px)';
        
        projectcard.style.transform='translateX(-600%)';
        
        
        
    })
    
    
    
}



window.addEventListener('scroll',()=>{
    const sectionpos=skillsSection.getBoundingClientRect().top;
    const  storypos=storySection.getBoundingClientRect().top;
    const projectpos=projectsection.getBoundingClientRect().top;
    const screenpos=window.innerHeight/3;
    const screenpos1=window.innerHeight/2;
    
    if(sectionpos<screenpos){
        showprogress();
    }else{
        hideprogress();
    }

    if (storypos<screenpos1){
        // showstory();
    }
    else{
        // hidestory();
    }
    if (projectpos<screenpos1){
        showprojectes();
    }
    else{
        hideprojectes();
    }
})













