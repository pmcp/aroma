<template>
  <div
    class="modal js-modal modal--search .modal--search.modal--searchbg-primary--opacity"
    id="modalForm1"
    data-animation="on"
  >

    <div class="newsletter-card bg-white padding-xl">
      <div class="newsletter-card__inner">
        <div class="margin-bottom-xs">
          <svg
            class="icon newsletter-card__icon"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <g
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            >
              <path d="M15.5,6.5l-7.5,4 l-7.5-4v8c0,0.552,0.448,1,1,1h13c0.552,0,1-0.448,1-1V6.5z"></path>
              <polyline points="2.5,5 2.5,0.5 13.5,0.5 13.5,5 "></polyline>
              <line
                opacity="0.5"
                x1="5.5"
                y1="3.5"
                x2="10.5"
                y2="3.5"
              ></line>
              <line
                opacity="0.5"
                x1="5.5"
                y1="6.5"
                x2="10.5"
                y2="6.5"
              ></line>
            </g>
          </svg>
        </div>

        <div class="text-component margin-bottom-md">
          <h3>Newsletter</h3>
        </div>

        
            
        <form
          class="flex flex-column flex-gap-xxs "
          id="theform"
          name="theform"
          action="https://my.sendinblue.com/users/subscribeembed/js_id/3q1l8/id/1"
          method="POST"
        > <input
            type="hidden"
            name="js_id"
            id="js_id"
            value="3q1l8"
          ><input
            type="hidden"
            name="from_url"
            id="from_url"
            value="yes"
          ><input
            type="hidden"
            name="hdn_email_txt"
            id="hdn_email_txt"
            value=""
          > <input
            type="hidden"
            name="sib_simple"
            value="simple"
          > <input
            type="hidden"
            name="sib_forward_url"
            value="http://localhost:8080/newsletter"
            id="sib_forward_url"
          >
          <div
            
            style=""
          > <input
              type="hidden"
              name="req_hid"
              id="req_hid"
              value=""
              
            >

            <div
              
              style=""
            >
              <div
                class="row mandatory-email"
                
              >
                <div
                   class="color-contrast-medium text-sm padding-bottom-sm"
                  
                >Enter your email address to subscribe. <span style="color:#ff0000;">*</span>
                </div> <input
                  required
                   class="form-control width-100% padding-sm"
                  type="text"
                  name="email"
                  id="email"
                  value=""
                  
                  data-com.onepassword.iv=""
                >
                <div style="clear:both;"></div>
                <div class="hidden-btns"> <br>
                  <!---->
                </div>
              </div>
            </div>
            <div class="captcha forms-builder-group">
              <div
                
                
              >
                <div
                  id="gcaptcha"
                  style="transform: scale(1); margin-left: 0px;"
                ></div>
              </div>
            </div> <!-- end of primary -->
            <div
              
              
            > <button
                class="btn btn--primary width-100%"
                type="submit"
                data-editfield="subscribe"
                style="font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; color: rgb(255, 255, 255); background: rgb(5, 5, 5) none repeat scroll 0% 0%; display: inline-block; white-space: nowrap; min-height: 40px; margin: 0px 5px 0px 0px; padding: 0px 22px; text-decoration: none; text-transform: uppercase; text-align: center; font-weight: bold; font-style: normal; font-size: 14px; cursor: pointer; border: 0px none; border-radius: 4px; vertical-align: top; height: auto; line-height: 150%;"
              >Subscribe</button></div>
            <div style="clear:both;"></div>
          </div>


          
        </form>

       
      </div>
    </div>



  </div>

</template>

<static-query>
query {
  index: storyblokEntry(id: "story-4122641-default") {
    content 
  }
}
</static-query>


<style scoped>
.modal__content {
  height: 100%;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>