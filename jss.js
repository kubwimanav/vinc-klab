(function () {
  "use strict";

  const store = {
    inputToEl: document.getElementById("inputTo"),
    inputFromEl: document.getElementById("inputFrom"),
    inputOccationEl: document.getElementById("inputOccation"),
    inputMessageEl: document.getElementById("inputMessage"),
    cardToEl: document.getElementById("cardTo"),
    cardFromEl: document.getElementById("cardFrom"),
    cardMessageEl: document.getElementById("cardMessage"),
    get to() {
      return this.inputToEl.value || "Someone Special";
    },
    get from() {
      return this.inputFromEl.value || "Yours Truely";
    },
    get occasion() {
      return this.inputOccationEl.value;
    },
    get personalMessage() {
      return this.inputMessageEl.value;
    },
    get message() {
      let occasionMessage = messageGenerator(this.occasion);
      return occasionMessage(this.personalMessage);
    },
  };

  function messageGenerator(occasion) {
    return function (message) {
      return `<h1>Happy! ${occasion}!</h1>
      <h2>We are Happy to have You<h2>
        <p class="font-color"><b> ${message}</b></p>`;
    };
  }

  function updateView() {
    store.cardToEl.innerHTML = store.to;
    store.cardFromEl.innerHTML = store.from;
    store.cardMessageEl.innerHTML = store.message;
    // store.inputOccationEl.innerHTML=store.occasion;
  }

  function addEventListeners() {
    const btn = document.getElementById("createCard");
    btn.addEventListener("click", updateView);
  }

  function app() {
    addEventListeners();
  }

  app();
})();
