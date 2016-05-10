var modalAddToCart = document.querySelector(".modal-add-to-cart");           /* Товар добавлен в корзину   */
var btnAddToCart = document.querySelectorAll(".products-item .btn-buy");     	
var btnCloseWindowCart = modalAddToCart.querySelector(".close-window");
var btnContinuePurchase = modalAddToCart.querySelector(".continue-purchase");        

		
		                       /* Товар добавлен в корзину */
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