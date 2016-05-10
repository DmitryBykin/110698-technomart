                             /*   Обратная связь          */
    
    var modalFeedback = document.querySelector(".modal-feedback");                 
    var btnWriteUs = document.querySelector(".map .btn-write-us");
    var btnCloseWindowFeedback = modalFeedback.querySelector(".close-window");
    var userName = modalFeedback.querySelector("[name=user-name]");
    var eMail = modalFeedback.querySelector("[name=e-mail]");
    var letterContent = modalFeedback.querySelector("[name=letter-content]");
		var form = modalFeedback.querySelector("form");
        
    var savedUserName = localStorage.getItem("user-name");
    var savedEMail = localStorage.getItem("e-mail");
        
    if(savedUserName){
      userName.value = savedUserName;          /* если есть сохраненные данные */
    }
    if(savedEMail){
      eMail.value = savedEMail;
    }
    
    btnWriteUs.addEventListener("click", function(event){
      event.preventDefault();
      modalFeedback.classList.add("show-modal-feedback");
			/*userName.focus();*/
    });
    
    btnCloseWindowFeedback.addEventListener("click", function(event){
      event.preventDefault();
      if(modalFeedback.classList.contains("show-modal-feedback"))
        modalFeedback.classList.remove("show-modal-feedback");
      if(modalFeedback.classList.contains("modal-error"))
        modalFeedback.classList.remove("modal-error");
    });
		
    form.addEventListener("submit", function(event){
      event.preventDefault();
      
     /* if(modalFeedback.classList.contains("modal-error"))
        modalFeedback.classList.remove("modal-error");*/
      
      if(!userName.value || !eMail.value || !letterContent.value){     /* трясем форму если какое-либо поле пустое */      
        modalFeedback.classList.remove("modal-error");
        modalFeedback.offsetWidth = modalFeedback.offsetWidth;
        modalFeedback.classList.add("modal-error");        
      }      
      else {
        localStorage.setItem("user-name",userName.value);
        localStorage.setItem("e-mail",eMail.value);        
      }
			
	});
		
	window.addEventListener("keydown", function(event) {                           /* Выход по ESC */
        if (event.keyCode === 27) {
          if (modalFeedback.classList.contains("show-modal-feedback")) 
            modalFeedback.classList.remove("show-modal-feedback");
          if(modalFeedback.classList.contains("modal-error"))
            modalFeedback.classList.remove("modal-error");                      
        }
    });
    							          /* Карта */
    
    var modalMap = document.querySelector(".modal-map");							 
    var btnShowMap = document.querySelector(".map .show-map");
    var btnCloseWindowMap = modalMap.querySelector(".close-window");
    
    btnShowMap.addEventListener("click", function(event){
      event.preventDefault();
      modalMap.classList.add("show-modal-map");
    });
    
    btnCloseWindowMap.addEventListener("click", function(event){
      event.preventDefault();
      if(modalMap.classList.contains("show-modal-map"))
        modalMap.classList.remove("show-modal-map");    
		});
		
    window.addEventListener("keydown", function(event) {                           /* Выход по ESC */
      if (event.keyCode === 27) {
        if (modalMap.classList.contains("show-modal-map")) {
          modalMap.classList.remove("show-modal-map");            
        }
      }
    });
		
		                       /* Товар добавлен в корзину */
    
  var modalAddToCart = document.querySelector(".modal-add-to-cart");          
	var btnAddToCart = document.querySelectorAll(".products-item .btn-buy");     	
	var btnCloseWindowCart = modalAddToCart.querySelector(".close-window");
	var btnContinuePurchase = modalAddToCart.querySelector(".continue-purchase");        
	/*var btnMakeOrder = modalAddToCart.querySelector(".make-order");*/  
    
	for(var i=0; i < btnAddToCart.length; i++){
      btnCurrent = btnAddToCart[i];
      btnCurrent.addEventListener("click", function(event){
        event.preventDefault();
        modalAddToCart.classList.add("show-modal-add-to-cart");
      });
    }
    
    btnCloseWindowCart.addEventListener("click", function(event){
      event.preventDefault();
      if(modalAddToCart.classList.contains("show-modal-add-to-cart"))
        modalAddToCart.classList.remove("show-modal-add-to-cart");
    });
		
	btnContinuePurchase.addEventListener("click", function(event){         /* при нажатии "продолжить покупки"  */
      event.preventDefault();																									        			                                                  /* закрываем окно   			       */
      if(modalAddToCart.classList.contains("show-modal-add-to-cart"))
        modalAddToCart.classList.remove("show-modal-add-to-cart");
    });
		
    window.addEventListener("keydown", function(event) {                           /* Выход по ESC */
        if (event.keyCode === 27) {
          if (modalAddToCart.classList.contains("show-modal-add-to-cart")) {
                modalAddToCart.classList.remove("show-modal-add-to-cart");            
          }
        }
      });

