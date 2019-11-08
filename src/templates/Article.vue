
<template>
  <Layout>
    <section class="sticky-hero sticky-hero--overlay-layer margin-bottom-xl js-sticky-hero">
      <div
        class="sticky-hero__media"
        style="background-image:url(../2.jpg)"
        aria-hidden="true"
      ></div>

      <div class="sticky-hero__content">
        <div class="container max-width-sm text-component text-center">
          <h1>{{ $context.title }}</h1>
        </div>
      </div>
    </section>

    <article class="article text-component container max-width-sm margin-bottom-xl">
      <!-- <h1>Lorem ipsum dolor sit amet consectetur.</h1> -->

      <p class="text-md color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, temporibus, aut officia minus sequi quae <a href="#0">molestias beatae</a>, qui ipsa mollitia alias accusamus voluptate ratione provident numquam iure quia aliquam tempore possimus consequatur vel. Iure atque enim in? Magnam quis cupiditate quia labore quaerat, eligendi nobis, ab similique harum nostrum nulla aliquam dolore adipisci ut. Eaque doloremque iure veniam nobis asperiores!</p>

      <figure class="text-component__block text-component__block--outset">
        <g-image src="~/assets/img/1.jpg" width="1000" alt="Image description here"/>
      
        <figcaption>Image caption</figcaption>
      </figure>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto doloribus perspiciatis.</p>

      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, animi. <mark>Praesentium esse magnam sequi aut, repellat pariatur beatae quis</mark>. Quidem harum dolores ab velit neque suscipit vitae pariatur, perspiciatis voluptatum molestiae facere ad tempora. Non omnis fugiat libero magnam sapiente vel. Optio a, enim explicabo totam amet omnis accusantium! Quod.</p>

      <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta similique quia.</blockquote>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga architecto accusamus?</p>

      <ul>
        <li>Lorem, ipsum.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem, ipsum.</li>
      </ul>

      <ol>
        <li>Lorem, ipsum.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem, ipsum.</li>
      </ol>

      <hr>

      <div class="text-component__block text-component__block--outset">
        <h3 class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae officiis similique enim?</h3>
      </div>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic autem consequatur libero, impedit fugiat facere ex! Fugit, cumque minus!</p>

      <figure class="text-component__block">
        <g-image src="~/assets/img/2.jpg" width="1000" alt="Image description here"/>
        <figcaption>Image caption</figcaption>
      </figure>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto odit incidunt nobis cumque, assumenda quidem ducimus! Architecto, molestias reiciendis tempora pariatur nobis nam quibusdam, nemo repellendus rerum rem quam soluta.</p>

      <figure class="text-component__block text-component__block--left">
       <g-image src="~/assets/img/1.jpg" width="1000" alt="Image description here"/>
        <figcaption>Image caption</figcaption>
      </figure>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt minus vero deserunt illum perspiciatis sed sit. Officia, quia at? Nisi dolores quis culpa nulla eveniet? Rem vel numquam ipsa voluptatum voluptate illo minima, temporibus atque officia soluta magnam laborum neque alias consequuntur enim aliquid consequatur non accusamus exercitationem. Perspiciatis dolorem a commodi alias, ad corporis iusto magnam in quae deleniti incidunt facilis voluptatibus. Aliquid reprehenderit, provident, totam necessitatibus cumque vel veniam consequuntur maxime iure accusamus explicabo recusandae neque quas?</p>

      <figure class="text-component__block text-component__block--outset text-component__block--right">
        <g-image src="~/assets/img/2.jpg" width="1000" alt="Image description here"/>
        <figcaption>Image caption</figcaption>
      </figure>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt provident aspernatur quibusdam expedita soluta voluptas, sapiente ipsa praesentium eum earum, modi necessitatibus a eveniet quidem doloribus, sequi sed tenetur nesciunt consectetur totam asperiores assumenda inventore porro. Enim beatae iure ullam consequuntur, quibusdam similique quae doloribus delectus ipsa, cumque odit voluptatem? Natus, dolorem quaerat! Magni fugit enim nam quam beatae facilis, consequuntur sunt totam pariatur aperiam sequi laboriosam similique dolores aspernatur alias consectetur maxime voluptas, ut tempore. Ipsam vel, id repellat maiores non fuga unde modi voluptates nam reiciendis blanditiis. At veniam odit illum porro maiores magni quasi deserunt est?</p>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vitae, sequi officia dignissimos laboriosam atque esse omnis. Perspiciatis, ratione eius.</p>

      <div class="text-component__block text-component__block--outset">
        <div class="grid grid-gap-xs">
          <figure class="col">
           <g-image src="~/assets/img/1.jpg" width="1000" alt="Image description here"/>
            <figcaption>Image caption</figcaption>
          </figure>

          <figure class="col">
           <g-image src="~/assets/img/2.jpg" width="1000" alt="Image description here"/>
            <figcaption>Image caption</figcaption>
          </figure>
        </div>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam voluptatem dolore fugiat facilis sint quidem obcaecati voluptas ut quae aliquam dolorem omnis, odit nihil! Sint doloremque voluptates laborum illo excepturi eligendi asperiores corporis voluptatem iusto? Voluptatem repellendus consectetur exercitationem, quisquam corrupti rem reiciendis maiores aspernatur quaerat impedit aliquid minus voluptate, incidunt eveniet, et numquam non eligendi! Officiis suscipit ad illo.</p>
    </article>

    <!-- <div class="text-divider container max-width-lg"><span>The story continues...</span></div> -->

    <!-- Back to top -->

    <a
      class="back-to-top js-back-to-top"
      href="#"
      data-offset="100"
      data-duration="300"
    >
      <svg
        class="icon"
        viewBox="0 0 16 16"
      >
        <title>Go to top of page</title>
        <g
          stroke-width="1"
          stroke="currentColor"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="15.5,11.5 8,4 0.5,11.5 "
          ></polyline>
        </g>
      </svg>
    </a>

    <div class="margin-bottom-lg">
      <h2 class="text-center">Keep on reading</h2>
    </div>

    <section class="container max-width-adaptive-lg padding-top-xl padding-bottom-xxl">

      <ul class="features-v3__cards grid grid-gap-lg">
        <li class="col-4@md">
          <a
            href="#0"
            class="card-v8"
          >
            <figure>
              <img
                src="/assets/img/1.jpg"
                alt="Image description"
              >
            </figure>

            <footer class="padding-sm">
              <p class="text-sm color-contrast-medium margin-bottom-sm">Label</p>
              <div class="text-component">
                <h4><span class="card-v8__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span></h4>
              </div>
            </footer>
          </a>
        </li>

        <li class="col-4@md">
          <a
            href="#0"
            class="card-v8"
          >
            <figure>
              <img
                src="/assets/img/1.jpg"
                alt="Image description"
              >
            </figure>

            <footer class="padding-sm">
              <p class="text-sm color-contrast-medium margin-bottom-sm">Label</p>
              <div class="text-component">
                <h4><span class="card-v8__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span></h4>
              </div>
            </footer>
          </a>
        </li>

        <li class="col-4@md">
          <a
            href="#0"
            class="card-v8"
          >
            <figure>
              <img
                src="/assets/img/1.jpg"
                alt="Image description"
              >
            </figure>

            <footer class="padding-sm">
              <p class="text-sm color-contrast-medium margin-bottom-sm">Label</p>
              <div class="text-component">
                <h4><span class="card-v8__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span></h4>
              </div>
            </footer>
          </a>
        </li>
      </ul>

    </section>

    <div class="margin-bottom-lg">
      <h2 class="text-center">Stay in touch</h2>
    </div>
    <section class="socials-v5 padding-y-xxl">

      <div class="socials-v5__grid container max-width-adaptive-lg">
        <div class="socials-v5__grid-item">
          <form class="socials-v5__form">
            <div class="flex flex-column flex-gap-xxxs">
              <input
                aria-label="Email"
                class="form-control"
                type="email"
                placeholder="Email Address"
              >
              <button class="btn btn--primary">Join our Newsletter</button>
            </div>
          </form>
        </div>

        <div class="socials-v5__grid-item">
          <ul class="socials-v5__btns flex flex-gap-xs flex-wrap">
            <li>
              <a
                href="#0"
                class="socials-v5__btn"
              >
                <svg
                  class="icon"
                  viewBox="0 0 32 32"
                >
                  <title>Follow us on Twitter</title>
                  <g>
                    <path d="M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3 c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5 c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C30,8.5,31.1,7.4,32,6.1z"></path>
                  </g>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#0"
                class="socials-v5__btn"
              >
                <svg
                  class="icon"
                  viewBox="0 0 32 32"
                >
                  <title>Follow us on Facebook</title>
                  <path d="M32,16A16,16,0,1,0,13.5,31.806V20.625H9.438V16H13.5V12.475c0-4.01,2.389-6.225,6.043-6.225a24.644,24.644,0,0,1,3.582.312V10.5H21.107A2.312,2.312,0,0,0,18.5,13v3h4.438l-.71,4.625H18.5V31.806A16,16,0,0,0,32,16Z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#0"
                class="socials-v5__btn"
              >
                <svg
                  class="icon"
                  viewBox="0 0 32 32"
                >
                  <title>Follow us on Youtube</title>
                  <path d="M31.7,9.6c0,0-0.3-2.2-1.3-3.2c-1.2-1.3-2.6-1.3-3.2-1.4C22.7,4.7,16,4.7,16,4.7h0c0,0-6.7,0-11.2,0.3 c-0.6,0.1-2,0.1-3.2,1.4c-1,1-1.3,3.2-1.3,3.2S0,12.2,0,14.8v2.4c0,2.6,0.3,5.2,0.3,5.2s0.3,2.2,1.3,3.2c1.2,1.3,2.8,1.2,3.5,1.4 C7.7,27.2,16,27.3,16,27.3s6.7,0,11.2-0.3c0.6-0.1,2-0.1,3.2-1.4c1-1,1.3-3.2,1.3-3.2s0.3-2.6,0.3-5.2v-2.4 C32,12.2,31.7,9.6,31.7,9.6z M12.7,20.2l0-9l8.6,4.5L12.7,20.2z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#0"
                class="socials-v5__btn"
              >
                <svg
                  class="icon"
                  viewBox="0 0 32 32"
                >
                  <title>Join our Slack channel</title>
                  <rect
                    x="17"
                    y="1"
                    width="6"
                    height="14"
                    rx="3"
                  ></rect>
                  <rect
                    x="1"
                    y="9"
                    width="14"
                    height="6"
                    rx="3"
                  ></rect>
                  <rect
                    x="17"
                    y="17"
                    width="14"
                    height="6"
                    rx="3"
                  ></rect>
                  <rect
                    x="9"
                    y="17"
                    width="6"
                    height="14"
                    rx="3"
                  ></rect>
                  <path d="M12,1a3,3,0,0,0,0,6h3V4A3,3,0,0,0,12,1Z"></path>
                  <path d="M1,20a3,3,0,0,0,6,0V17H4A3,3,0,0,0,1,20Z"></path>
                  <path d="M31,12a3,3,0,0,0-6,0v3h3A3,3,0,0,0,31,12Z"></path>
                  <path d="M20,31a3,3,0,0,0,0-6H17v3A3,3,0,0,0,20,31Z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#0"
                class="socials-v5__btn"
              >
                <svg
                  class="icon"
                  viewBox="0 0 32 32"
                >
                  <title>Follow us on Instagram</title>
                  <path d="M16,3.7c4,0,4.479.015,6.061.087a6.426,6.426,0,0,1,4.51,1.639,6.426,6.426,0,0,1,1.639,4.51C28.282,11.521,28.3,12,28.3,16s-.015,4.479-.087,6.061a6.426,6.426,0,0,1-1.639,4.51,6.425,6.425,0,0,1-4.51,1.639c-1.582.072-2.056.087-6.061.087s-4.479-.015-6.061-.087a6.426,6.426,0,0,1-4.51-1.639,6.425,6.425,0,0,1-1.639-4.51C3.718,20.479,3.7,20.005,3.7,16s.015-4.479.087-6.061a6.426,6.426,0,0,1,1.639-4.51A6.426,6.426,0,0,1,9.939,3.79C11.521,3.718,12,3.7,16,3.7M16,1c-4.073,0-4.584.017-6.185.09a8.974,8.974,0,0,0-6.3,2.427,8.971,8.971,0,0,0-2.427,6.3C1.017,11.416,1,11.927,1,16s.017,4.584.09,6.185a8.974,8.974,0,0,0,2.427,6.3,8.971,8.971,0,0,0,6.3,2.427c1.6.073,2.112.09,6.185.09s4.584-.017,6.185-.09a8.974,8.974,0,0,0,6.3-2.427,8.971,8.971,0,0,0,2.427-6.3c.073-1.6.09-2.112.09-6.185s-.017-4.584-.09-6.185a8.974,8.974,0,0,0-2.427-6.3,8.971,8.971,0,0,0-6.3-2.427C20.584,1.017,20.073,1,16,1Z"></path>
                  <path d="M16,8.3A7.7,7.7,0,1,0,23.7,16,7.7,7.7,0,0,0,16,8.3ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"></path>
                  <circle
                    cx="24.007"
                    cy="7.993"
                    r="1.8"
                  ></circle>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </Layout>
</template>