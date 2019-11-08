<template>
  <div>
    <button
      class="btn btn--subtle btn--icon"
      aria-controls="modal-search"
    >
      <svg
        class="icon"
        viewBox="0 0 24 24"
      >
        <title>Toggle search</title>
        <g
          stroke-linecap="square"
          stroke-linejoin="miter"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-miterlimit="10"
        >
          <line
            x1="22"
            y1="22"
            x2="15.656"
            y2="15.656"
          ></line>
          <circle
            cx="10"
            cy="10"
            r="8"
          ></circle>
        </g>
      </svg>
    </button>

    <div
      class="modal js-modal modal--search"
      id="modalForm1"
      data-animation="on"
    >
      <div
        class="modal__content padding-md max-width-xs"
        role="alertdialog"
        tabindex="-1"
        aria-labelledby="modalFormTitle1"
        aria-describedby="modalFormDescription1"
      >
        <div class="text-component margin-bottom-md">
          <h3 id="modalFormTitle1">Join our Newsletter</h3>
          <p id="modalFormDescription1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit asperiores molestiae ex.</p>
        </div>

        <form class="margin-bottom-sm">
          <div class="flex flex-column flex-row@xs flex-gap-xxxs">
            <input
              aria-label="Email"
              class="form-control flex-grow"
              type="email"
              placeholder="Email"
            >
            <button class="btn btn--primary">Subscribe</button>
          </div>
        </form>

        <div class="text-component">
          <p class="text-xs color-contrast-medium">Lorem ipsum dolor sit, amet <a
              href="#0"
              class="color-contrast-high"
            >consectetur adipisicing</a> elit. Nisi molestias hic voluptatibus.</p>
        </div>
      </div>

      <button class="reset modal__close-btn js-modal__close">
        <svg
          class="icon"
          viewBox="0 0 16 16"
        >
          <title>Close modal window</title>
          <g
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
          >
            <line
              x1="13.5"
              y1="2.5"
              x2="2.5"
              y2="13.5"
            ></line>
            <line
              x1="2.5"
              y1="2.5"
              x2="13.5"
              y2="13.5"
            ></line>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {

    // Utility function
function Util () {};

/* 
	class manipulation functions
*/
Util.hasClass = function(el, className) {
	if (el.classList) return el.classList.contains(className);
	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Util.addClass = function(el, className) {
	var classList = className.split(' ');
 	if (el.classList) el.classList.add(classList[0]);
 	else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
 	if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
	var classList = className.split(' ');
	if (el.classList) el.classList.remove(classList[0]);	
	else if(Util.hasClass(el, classList[0])) {
		var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
		el.className=el.className.replace(reg, ' ');
	}
	if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
	if(bool) Util.addClass(el, className);
	else Util.removeClass(el, className);
};

Util.setAttributes = function(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

/* 
  DOM manipulation
*/
Util.getChildrenByClassName = function(el, className) {
  var children = el.children,
    childrenByClass = [];
  for (var i = 0; i < el.children.length; i++) {
    if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
  }
  return childrenByClass;
};

Util.is = function(elem, selector) {
  if(selector.nodeType){
    return elem === selector;
  }

  var qa = (typeof(selector) === 'string' ? document.querySelectorAll(selector) : selector),
    length = qa.length,
    returnArr = [];

  while(length--){
    if(qa[length] === elem){
      return true;
    }
  }

  return false;
};

/* 
	Animate height of an element
*/
Util.setHeight = function(start, to, element, duration, cb) {
	var change = to - start,
	    currentTime = null;

  var animateHeight = function(timestamp){  
    if (!currentTime) currentTime = timestamp;         
    var progress = timestamp - currentTime;
    var val = parseInt((progress/duration)*change + start);
    element.style.height = val+"px";
    if(progress < duration) {
        window.requestAnimationFrame(animateHeight);
    } else {
    	cb();
    }
  };
  
  //set the height of the element before starting animation -> fix bug on Safari
  element.style.height = start+"px";
  window.requestAnimationFrame(animateHeight);
};

/* 
	Smooth Scroll
*/

Util.scrollTo = function(final, duration, cb) {
  var start = window.scrollY || document.documentElement.scrollTop,
      currentTime = null;
      
  var animateScroll = function(timestamp){
  	if (!currentTime) currentTime = timestamp;        
    var progress = timestamp - currentTime;
    if(progress > duration) progress = duration;
    var val = Math.easeInOutQuad(progress, start, final-start, duration);
    window.scrollTo(0, val);
    if(progress < duration) {
        window.requestAnimationFrame(animateScroll);
    } else {
      cb && cb();
    }
  };

  window.requestAnimationFrame(animateScroll);
};

/* 
  Focus utility classes
*/

//Move focus to an element
Util.moveFocus = function (element) {
  if( !element ) element = document.getElementsByTagName("body")[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute('tabindex','-1');
    element.focus();
  }
};

/* 
  Misc
*/

Util.getIndexInArray = function(array, el) {
  return Array.prototype.indexOf.call(array, el);
};

Util.cssSupports = function(property, value) {
  if('CSS' in window) {
    return CSS.supports(property, value);
  } else {
    var jsProperty = property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase();});
    return jsProperty in document.body.style;
  }
};

// merge a set of user options into plugin defaults
// https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
Util.extend = function() {
  // Variables
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;

  // Check if a deep merge
  if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
    deep = arguments[0];
    i++;
  }

  // Merge the object into the extended object
  var merge = function (obj) {
    for ( var prop in obj ) {
      if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
        // If deep merge and property is an object, merge properties
        if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
          extended[prop] = extend( true, extended[prop], obj[prop] );
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  // Loop through each object and conduct a merge
  for ( ; i < length; i++ ) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
};

// Check if Reduced Motion is enabled
Util.osHasReducedMotion = function() {
  if(!window.matchMedia) return false;
  var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(matchMediaObj) return matchMediaObj.matches;
  return false; // return false if not supported
}; 

/* 
	Polyfills
*/
//Closest() method
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1); 
		return null;
	};
}

//Custom Event() constructor
if ( typeof window.CustomEvent !== "function" ) {

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

/* 
	Animation curves
*/
Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};


/* JS Utility Classes */
(function() {
  // make focus ring visible only for keyboard navigation (i.e., tab key) 
  var focusTab = document.getElementsByClassName('js-tab-focus');
  function detectClick() {
    if(focusTab.length > 0) {
      resetFocusTabs(false);
      window.addEventListener('keydown', detectTab);
    }
    window.removeEventListener('mousedown', detectClick);
  };

  function detectTab(event) {
    if(event.keyCode !== 9) return;
    resetFocusTabs(true);
    window.removeEventListener('keydown', detectTab);
    window.addEventListener('mousedown', detectClick);
  };

  function resetFocusTabs(bool) {
    var outlineStyle = bool ? '' : 'none';
    for(var i = 0; i < focusTab.length; i++) {
      focusTab[i].style.setProperty('outline', outlineStyle);
    }
  };
  window.addEventListener('mousedown', detectClick);
}());


    (
      // File#: _1_modal-window
      // Usage: codyhouse.co/license
      (function() {
        var Modal = function(element) {
          this.element = element;
          this.triggers = document.querySelectorAll(
            '[aria-controls="' + this.element.getAttribute("id") + '"]'
          );
          this.firstFocusable = null;
          this.lastFocusable = null;
          this.selectedTrigger = null;
          this.showClass = "modal--is-visible";
          this.initModal();
        };

        Modal.prototype.initModal = function() {
          var self = this;
          //open modal when clicking on trigger buttons
          if (this.triggers) {
            for (var i = 0; i < this.triggers.length; i++) {
              this.triggers[i].addEventListener("click", function(event) {
                event.preventDefault();
                self.selectedTrigger = event.target;
                self.showModal();
                self.initModalEvents();
              });
            }
          }

          // listen to the openModal event -> open modal without a trigger button
          this.element.addEventListener("openModal", function(event) {
            if (event.detail) self.selectedTrigger = event.detail;
            self.showModal();
            self.initModalEvents();
          });

          // listen to the closeModal event -> close modal without a trigger button
          this.element.addEventListener("closeModal", function(event) {
            if (event.detail) self.selectedTrigger = event.detail;
            self.closeModal();
          });
        };

        Modal.prototype.showModal = function() {
          var self = this;
          Util.addClass(this.element, this.showClass);
          this.getFocusableElements();
          this.firstFocusable.focus();
          // wait for the end of transitions before moving focus
          this.element.addEventListener("transitionend", function cb(event) {
            self.firstFocusable.focus();
            self.element.removeEventListener("transitionend", cb);
          });
          this.emitModalEvents("modalIsOpen");
        };

        Modal.prototype.closeModal = function() {
          if (!Util.hasClass(this.element, this.showClass)) return;
          Util.removeClass(this.element, this.showClass);
          this.firstFocusable = null;
          this.lastFocusable = null;
          if (this.selectedTrigger) this.selectedTrigger.focus();
          //remove listeners
          this.cancelModalEvents();
          this.emitModalEvents("modalIsClose");
        };

        Modal.prototype.initModalEvents = function() {
          //add event listeners
          this.element.addEventListener("keydown", this);
          this.element.addEventListener("click", this);
        };

        Modal.prototype.cancelModalEvents = function() {
          //remove event listeners
          this.element.removeEventListener("keydown", this);
          this.element.removeEventListener("click", this);
        };

        Modal.prototype.handleEvent = function(event) {
          switch (event.type) {
            case "click": {
              this.initClick(event);
            }
            case "keydown": {
              this.initKeyDown(event);
            }
          }
        };

        Modal.prototype.initKeyDown = function(event) {
          if (
            (event.keyCode && event.keyCode == 9) ||
            (event.key && event.key == "Tab")
          ) {
            //trap focus inside modal
            this.trapFocus(event);
          } else if (
            ((event.keyCode && event.keyCode == 13) ||
              (event.key && event.key == "Enter")) &&
            event.target.closest(".js-modal__close")
          ) {
            event.preventDefault();
            this.closeModal(); // close modal when pressing Enter on close button
          }
        };

        Modal.prototype.initClick = function(event) {
          //close modal when clicking on close button or modal bg layer
          if (
            !event.target.closest(".js-modal__close") &&
            !Util.hasClass(event.target, "js-modal")
          )
            return;
          event.preventDefault();
          this.closeModal();
        };

        Modal.prototype.trapFocus = function(event) {
          if (this.firstFocusable == document.activeElement && event.shiftKey) {
            //on Shift+Tab -> focus last focusable element when focus moves out of modal
            event.preventDefault();
            this.lastFocusable.focus();
          }
          if (this.lastFocusable == document.activeElement && !event.shiftKey) {
            //on Tab -> focus first focusable element when focus moves out of modal
            event.preventDefault();
            this.firstFocusable.focus();
          }
        };

        Modal.prototype.getFocusableElements = function() {
          //get all focusable elements inside the modal
          var allFocusable = this.element.querySelectorAll(
            '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'
          );
          this.getFirstVisible(allFocusable);
          this.getLastVisible(allFocusable);
        };

        Modal.prototype.getFirstVisible = function(elements) {
          //get first visible focusable element inside the modal
          for (var i = 0; i < elements.length; i++) {
            if (
              elements[i].offsetWidth ||
              elements[i].offsetHeight ||
              elements[i].getClientRects().length
            ) {
              this.firstFocusable = elements[i];
              return true;
            }
          }
        };

        Modal.prototype.getLastVisible = function(elements) {
          //get last visible focusable element inside the modal
          for (var i = elements.length - 1; i >= 0; i--) {
            if (
              elements[i].offsetWidth ||
              elements[i].offsetHeight ||
              elements[i].getClientRects().length
            ) {
              this.lastFocusable = elements[i];
              return true;
            }
          }
        };

        Modal.prototype.emitModalEvents = function(eventName) {
          var event = new CustomEvent(eventName, {
            detail: this.selectedTrigger
          });
          this.element.dispatchEvent(event);
        };

        //initialize the Modal objects
        var modals = document.getElementsByClassName("js-modal");
        if (modals.length > 0) {
          var modalArrays = [];
          for (var i = 0; i < modals.length; i++) {
            (function(i) {
              modalArrays.push(new Modal(modals[i]));
            })(i);
          }

          window.addEventListener("keydown", function(event) {
            //close modal window on esc
            if (
              (event.keyCode && event.keyCode == 27) ||
              (event.key && event.key.toLowerCase() == "escape")
            ) {
              for (var i = 0; i < modalArrays.length; i++) {
                (function(i) {
                  modalArrays[i].closeModal();
                })(i);
              }
            }
          });
        }
      })()
    );
  }
};
</script>