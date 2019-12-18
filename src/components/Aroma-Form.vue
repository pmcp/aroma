<template>

  <section
    class="hero hero--boxed padding-y-xxl"
    :style="{ backgroundImage: 'url('+ content.background +')'}"
  >
    <div class="container max-width-adaptive-lg">
      <div class="hero__content max-width-xs">

        <form
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <fieldset class="margin-bottom-md">
            
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <legend class="form-legend padding-bottom-xs">{{ content.title }}</legend>
            <div class="margin-bottom-xs">
              <div class="grid grid-gap-xs">
                <div class="col-6@md">
                  <label
                    for="name"
                    class="form-label margin-bottom-xxs"
                  >{{ content.name }}</label>
                  <input
                    class="form-control width-100%"
                    type="text"
                    name="name"
                    v-model="formData.name"
                  />
                </div>

                <div class="col-6@md">

                  <label
                    class="form-label margin-bottom-xxs"
                    for="email"
                  >{{ content.email }}</label>
                  <input
                    type="email"
                    class="form-control width-100%"
                    name="email"
                    v-model="formData.email"
                  />

                </div>
              </div>
            </div>

            <div>

              <label
                class="form-label margin-bottom-xxs"
                for="message"
              >{{ content.message }}</label>
              <textarea
                class="form-control width-100%"
                name="message"
                v-model="formData.message"
              ></textarea>
              <p class="text-xs color-contrast-medium margin-top-xxs">
                <aroma-content-text :content="content.helptext"></aroma-content-text>
              </p>
            </div>
          </fieldset>

          <!-- <fieldset class="margin-bottom-md">
          <legend class="form-legend">Checkboxes</legend>
      
          <div class="checkbox-list flex flex-wrap flex-gap-md">
            <div>
              <input class="checkbox" type="checkbox" id="checkbox1">
              <label for="checkbox1">Option 1</label>
            </div>
      
            <div>
              <input class="checkbox" type="checkbox" id="checkbox2">
              <label for="checkbox2">Option 2</label>
            </div>
          </div>
        </fieldset> -->

          <div class="text-right padding-top-sm border-top">

            <button class="btn btn-color btn--primary padding-x-md padding-y-xs" type="submit">{{ content.submit }}</button>
          </div>
        </form>
      </div>
    </div>
  </section>

</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/home"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style >
button.btn-color {
  background-color: var(--color-primary);
  color: var(--color-white);
}
</style>