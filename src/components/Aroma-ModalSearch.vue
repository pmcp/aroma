<template>

    <div
      class="modal modal--search js-modal"
      id="modal-search"
      data-animation="on"
    >
      <form class="full-screen-search">
        <label
          for="searchInputX"
          class="sr-only"
        >Search</label>
        <input
          class="reset full-screen-search__input"
          type="search"
          name="searchInputX"
          id="searchInputX"
          placeholder="Search..."
        >
        <button class="reset full-screen-search__btn">
          <svg
            class="icon"
            viewBox="0 0 24 24"
          >
            <title>Search</title>
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
      </form>

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
</template>