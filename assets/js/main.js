window.addEventListener('scroll', () => {
    let content1 = document.querySelector('.section1');
    let contentPosition1 = content1.getBoundingClientRect().top;
    let content2 = document.querySelector('.section2');
    let contentPosition2 = content2.getBoundingClientRect().top;
    let content3 = document.querySelector('.section3');
    let contentPosition3 = content3.getBoundingClientRect().top;
    let content4 = document.querySelector('.section4');
    let contentPosition4 = content4.getBoundingClientRect().top;
    let content5 = document.querySelector('.section5')
    let contentPosition5 = content5.getBoundingClientRect().top;
    let content6 = document.querySelector('#contact');
    let contentPosition6 = content6.getBoundingClientRect().top;
    let content7 = document.querySelector('#footer');
    let contentPostion7 = content7.getBoundingClientRect().top;
    let secList1 = document.querySelector('.sec-text1');
    let secList2 = document.querySelector('.sec-text2');
    let secList3 = document.querySelector('.sec-text3');
    let secList4 = document.querySelector('.sec-text4');
    let secList5 = document.querySelector('.sec-text5');
    let secList6 = document.querySelector('.sec-text6')
    let secList7 = document.querySelector('.sec-text7')
    let screenPosition = window.innerHeight;
    
    if (contentPosition1 < screenPosition) {
      secList1.classList.add('active');
    } else {
      secList1.classList.remove('active');
    }
    
    if (contentPosition2 < screenPosition) {
      secList2.classList.add('active');
      secList1.classList.remove('active');  
    } else {
      secList2.classList.remove('active');
    }
    
    if (contentPosition3 < screenPosition) {
      secList3.classList.add('active');
      secList2.classList.remove('active');
    } else {
      secList3.classList.remove('active');
    }
    
    if (contentPosition4 < screenPosition) {
      secList4.classList.add('active');
      secList3.classList.remove('active');
    } else {
      secList4.classList.remove('active');
    }
    
    if (contentPosition5 < screenPosition) {
      secList5.classList.add('active');
      secList4.classList.remove('active');
    } else {
      secList5.classList.remove('active');
    }
    
    if (contentPosition6 < screenPosition) {
      secList6.classList.add('active');
      secList5.classList.remove('active');
    } else {
      secList6.classList.remove('active'); 
    }
    
    if (contentPostion7 < screenPosition) {
      secList7.classList.add('active');
      secList6.classList.remove('active');
    } else {
      secList7.classList.remove('active');
    }
  })
  
  let mainQuestionSelectors = document.querySelectorAll('.questions-text-selector');
  let mainQuestionSelector1 = document.querySelector('.questions-text-selector1');
  let mainQuestionSelector2 = document.querySelector('.questions-text-selector2');
  let mainQuestionTextWrapper1 = document.getElementById('mainListText1');
  let mainQuestionTextWrapper2 = document.getElementById('mainListText2');
  let mainQuestionLists = document.querySelectorAll('.main-question-text-list');
  
  mainQuestionSelector1.addEventListener('click', e => {
    mainQuestionSelector1.classList.add('active');
    mainQuestionSelector2.classList.remove('active');
    mainQuestionTextWrapper1.classList.add('active');
    mainQuestionTextWrapper2.classList.remove('active');
  })
  
  mainQuestionSelector2.addEventListener('click', e => {
    mainQuestionSelector2.classList.add('active');
    mainQuestionSelector1.classList.remove('active');
    mainQuestionTextWrapper2.classList.add('active');
    mainQuestionTextWrapper1.classList.remove('active');
  })
  
  let knowledgeSelectors = document.querySelectorAll('.knowledge-selector');
  let knowledgeLists = document.querySelectorAll('.knowledge-list ');
  let knowledgeWrappers = document.querySelectorAll('.knowledge-selector-wrapper');
  
  knowledgeSelectors.forEach(function(selector) {
    knowledgeLists.forEach(function(list) {
      selector.addEventListener('click', e => {
        if (e.target.dataset.target == list.id) {
          list.classList.toggle('active');
          
        } else {
          list.classList.remove('active');
          
        }
      })
    })
  })
  
  knowledgeWrappers.forEach(function(wrapper) {
    knowledgeLists.forEach(function(list) {
      wrapper.addEventListener('click', e => {
        if (e.target.dataset.target == list.id) {
          list.classList.toggle('active');
        } else {
          list.classList.remove('active');
        }
      })
    })
  })

  let headerNavbar = document.querySelector('.assodiq-header2');
  let navbarResOpenBtn = document.querySelector('.navbar-res-opener');
  let navbarResWrapper = document.querySelector('.navbar-res-wrapper');
  let navbarResCloser = document.querySelector('.navbar-res-closer');
  let navbarResLinks = document.querySelectorAll('.navbar-res-link');
  navbarResOpenBtn.addEventListener('click', e => {
    navbarResWrapper.style.display = 'block';
    headerNavbar.style.display = 'none';
  })

  navbarResCloser.addEventListener('click', e => {
    navbarResWrapper.style.display = 'none';
    headerNavbar.style.display = 'block';
  })

  navbarResLinks.forEach(function(link) {
    window.addEventListener('click', e => {
    if (e.target == navbarResWrapper || e.target == link) {
      navbarResWrapper.style.display = 'none';
      headerNavbar.style.display = 'block';
    } else {
      
    }
  })
  })