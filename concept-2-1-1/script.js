'use strict';

// let flag = false;

const mouseOver = function(id, background) {
  cleanOut(['#gastrobar', '#catering', '#dacha'], ['.saxophone-milk', '.saxophone-sandwiches', '.saxophone-meat', '.header-background-default']);
  $(id).removeClass('hidden');
  $(id).delay(500).animate({'opacity': '1'});
  $('.header-logo__logo-img').animate({'opacity': '0.2'})
  $('.header-background-default').animate({'opacity': '0'}, 500);
  $(background).delay(500).animate({'opacity': '1'});
}

const mouseOut = function(id, background) {
  cleanOut(['#gastrobar', '#catering', '#dacha'], ['.saxophone-milk', '.saxophone-sandwiches', '.saxophone-meat', '.header-background-default']);
  $(id).addClass('hidden');
  $('.header-logo__logo-img').delay(500).animate({'opacity': '1'});
  $(background).animate({'opacity': '0'});
  $('.header-background-default').delay(500).animate({'opacity': '1'});

};
function cleanOut(arrayId, arrayBackground) {
  for (let i = 0; i < arrayId.length; ++i) {
      $(arrayId[i]).animate({'opacity': '0'});
      $(arrayId[i]).addClass('hidden');
      $(arrayBackground[i]).animate({'opacity': '0'});
  }
};
function define(e) {

  if (e.target.innerHTML === 'dacha') {
    if (e.type=== "mouseover") {
      mouseOver('#dacha', '.saxophone-meat');
    } else {
      mouseOut('#dacha', '.saxophone-meat');
    }
  } else if (e.target.innerHTML === 'gastrobar') {
    if (e.type === "mouseover") {
     mouseOver('#gastrobar', '.saxophone-milk');
    } else {
     mouseOut('#gastrobar', '.saxophone-milk');
    }
  } else if (e.target.innerHTML === 'catering'){
    if (e.type === "mouseover") {
     mouseOver('#catering', '.saxophone-sandwiches');
    } else {
     mouseOut('#catering', '.saxophone-sandwiches');
    }
  }
}


const debounce = function(func, wait) {
  let timeout;

  return function() {
    let context = this,
        args = arguments;

    const later = function() {
      timeout = null;
      func.apply(context, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}




$(document).on("mouseover", ".three-categories__category-en", debounce( (e) => define(e), 500));
$(document).on("mouseout", ".three-categories__category-en", debounce( (e) => define(e), 500));




(function() {
  $(".form-input-tel").mask("+7(999)-999-9999");
})();


(function quantityProducts() {
  const buttonMinus = $(".form-btn-prev");
  const buttonPlus = $(".form-btn-next");
  const quantityNum = $(".form-input-number");

  buttonMinus.click(quantityMinus);
  buttonPlus.click(quantityPlus);

  function quantityMinus() {
    if (quantityNum.val() > 1) {
      quantityNum.val(+quantityNum.val() - 1);
    }
  }

 function quantityPlus() {
    if (quantityNum.val() < 12) {
      quantityNum.val(+quantityNum.val() + 1);
  }
}
})();