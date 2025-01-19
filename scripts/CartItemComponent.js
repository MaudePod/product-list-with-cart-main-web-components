const template = document.createElement("template");
template.innerHTML = `
      <section class="cart-item">
        <h3 class="cart-item-name">

        </h3>
        <section class="cart-item-subtotal">
          <span class="cart-item-amount"></span>
          <span class="cart-item-unit-price"></span>
          <span class="cart-item-subtotal-price"></span>
          <button id="remove-item">
            <svg viewBox="0 0 10 10">
              <path  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
            </svg>
          </button>
        </section>
    <style>
    section[class="cart-item"] {
        display: grid;
        grid-template-rows: min-content;
        height: max-content;
    }

    h3[class="cart-item-name"] {
        color: var(--rose-900);
        margin: 5px 0px;
    }

    section[class="cart-item-subtotal"] {
        display: grid;
        grid-template-columns: max-content max-content max-content auto;
        width: 100%;
        gap: 10px;
    }

    button[id="remove-item"] {
        display: grid;
        place-items: center;
        border-radius: 50%;
        height: 15px;
        width: 15px;
        background-color: transparent;
        border-width: thin;
        padding: 1px;
        border-color: var(--rose-300);
        fill: #CAAFA7;
        justify-self: end;
        grid-column: -1;
        cursor: pointer;
    }

    button[id="remove-item"]:hover {
        fill: black;
        border-color: black;
    }

    span[class="cart-item-amount"] {
        color: var(--red);
    }

    span[class="cart-item-unit-price"] {
        color: var(--rose-500);
    }

    span[class="cart-item-subtotal-price"] {
      color: var(--rose-500);
      font-weight: 700;
    }
    </style>
`;
export default class CartItemComponent extends HTMLElement {
    #internals;
    constructor() {
      super();
      this.#internals = this.attachInternals();
    }
    connectedCallback(
    ) {
      const shadowRoot = this.attachShadow({ mode: "open" })
      shadowRoot.appendChild(template.content.cloneNode(true));
      if (this.hasAttribute('cart-item-name')) {
        this.#internals.shadowRoot.querySelector('h3[class="cart-item-name"]').innerHTML = this.getAttribute('cart-item-name');
      }
      if (this.hasAttribute('cart-item-amount')) {
        this.#internals.shadowRoot.querySelector('span[class="cart-item-amount"]').innerHTML = this.getAttribute('cart-item-amount');
      }
      if (this.hasAttribute('cart-item-unit-price')) {
        this.#internals.shadowRoot.querySelector('span[class="cart-item-unit-price"]').innerHTML = this.getAttribute('cart-item-unit-price');
      }
      if (this.hasAttribute('cart-item-subtotal-price')) {
        this.#internals.shadowRoot.querySelector('span[class="cart-item-subtotal-price"]').innerHTML = this.getAttribute('cart-item-subtotal-price');
      }
      this.#internals.shadowRoot.querySelector('button[id="remove-item"]').addEventListener('click',(event)=>{
        localStorage.removeItem(this.getAttribute('cart-item-name'));
        window.dispatchEvent(new StorageEvent('storage', {}));
      });

    }
    disconnectedCallback(){
      this.#internals.shadowRoot.querySelector('button[id="remove-item"]').removeEventListener('click',(event)=>{});
    }
   
    static get observedAttributes() {
        return [
          'cart-item-name"',
          'cart-item-amount',
          'cart-item-unit-price',
          'cart-item-subtotal-price'
        ];
      }
}
if (!customElements.get("cart-item")) {
    customElements.define("cart-item", CartItemComponent);
  } 