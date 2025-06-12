import CartItemComponent from "./CartItemComponent.js";
import OrderedItemComponent from "./OrderdItem.js";
const template = document.createElement("template");
template.innerHTML = `
  <section class="cart-details">
      <h2>
        Your Cart (<span class="cart-total">0</span>)
      </h2>
        <slot name='cart-items'></slot>
      </section>
      <section class="order-total">
        <span>Order Total</span> <span class="order-price">$0.00</span>
      </section>
      <section class="carbon-neutral-note">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
        <span>
          This is a <span>carbon-neutral</span> delivery
        </span>
      </section>
      <button id="confirm-order" popovertarget="order-confirmed">Confirm Order</button>
        <section id="order-confirmed" popover="manual">
           <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z" fill="#1EA575"/>
        <path d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z" fill="#1EA575"/>
        </svg>
        <h1>Order Confirmed</h1>
        <p>
          We hope you enjoy your food!
        </p>
            <slot name="ordered-items"></slot>
            <section class="summary">
            <span class="summary-info">Order Total</span>
            <span class="summary-total"></span>
            </section>
        <button id="start-new-order"  popovertarget="order-confirmed" popovertargetaction="hide">
            Start New Order
        </button>
        </section>
    
    </section>
    <style>
        :host {
        display: grid;
        background: white;
        grid-column: 2;
        height: max-content;
        min-height: 40%;
        border-radius: 30px;
        box-sizing: border-box;
        padding: 30px;
        grid-row: 1 / 3;
        grid-template-rows: min-content;
    }

    section[class="cart-details"] h2 {
        color: var(--red);
    }  

    hr {
        width: 100%;
        border: 0;
        border-bottom: 1px solid var(--rose-400);
    }
    slot[name="ordered-items"] hr{
        width: 100%;
        border: 0;
        margin: 0;
        border-bottom: 1px solid var(--rose-400);
    }
    button[id="confirm-order"] {
        display: grid;
        background-color: var(--rose-900);
        color: white;
        align-self: end;
        border-radius: 30px;
        padding: 15px;
        font-weight: 700;
        user-select: none;
        -webkit-user-select: none;
        border-color: transparent;
        cursor: pointer;
    }
    button[id="start-new-order"] {
        display: grid;
        background-color: var(--red);
        color: white;
        align-self: end;
        border-radius: 30px;
        padding: 15px;
        font-weight: 700;
        user-select: none;
        -webkit-user-select: none;
        border-color: transparent;
        cursor: pointer;
        width:100%;
        margin-top:10px;    
    }

    button[id="start-new-order"]:hover,
    button[id="confirm-order"]:hover {
        background-color: red;
    }

    section[class="order-total"] {
        display: grid;
        place-items: center;
        color: var(--rose-500);
        grid-template-columns: 1fr auto;
        justify-items: baseline;
        align-self: end;
    }

    span[class="order-price"] {
        font-size: x-large;
        color: var(--rose-900);
    }

    section[class="carbon-neutral-note"] {
        display: grid;
        grid-auto-flow: column;
        background-color: var(--rose-50);
        color: var(--rose-500);
        padding: 5px;
        place-content: center;
    }

    section[class="carbon-neutral-note"] span span {
        color: var(--rose-900);
    }
    section[id="order-confirmed"] {
        border-radius: 30px;
        border-color: transparent;
        box-sizing: border-box;
        padding: 25px;
    }
    section[id="order-confirmed"] p{
        color: var(--rose-500);
    }
    section[id="order-confirmed"] h1{
       color: var(--rose-900);
        font-weight: 700;
    }
    section[class="summary"]{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 10px;
        background-color: var(--rose-100);
    }
    span[class="summary-info"]{
        color: var(--rose-500);
    }
    span[class="summary-total"]{
        font-size:1.5em;
        color: var(--rose-900);
        font-weight: 700;
    }
    ordered-item:first-of-type {
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }
    @container (1100px < inline-size <=1280px) {
        section[class="cart-details"] {
            justify-self: end;
        }
    }

    @container (inline-size < 1100px) {
        :host {
            grid-column: unset;
            grid-row: unset;
        }
        section[class="summary"] {
            width:80%;
            padding:0;
        }
        button[id="start-new-order"] {
            width:80%;
        }
    }
    </style>
`;

export default class CartDetailsComponent extends HTMLElement {
    #internals;
    constructor() {

        super();
        this.#internals = this.attachInternals();

    }
    connectedCallback(
    ) {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));
        if (this.hasAttribute('cart-total')) {
            this.#internals.shadowRoot.querySelector('span[class="cart-total"]').innerHTML = this.getAttribute('cart-total');
            if (this.hasAttribute('order-price"')) {
        }
            this.#internals.shadowRoot.querySelector('span[class="order-price"]').innerHTML = this.getAttribute('order-price"');
        }
        this.#internals.shadowRoot.querySelector('span[class="cart-total"]').innerHTML = this.getTotalNumberOfItemsInCart();
        this.#internals.shadowRoot.querySelector('span[class="order-price"]').innerHTML = this.getOrderTotal();
        this.#internals.shadowRoot.querySelector('slot[name="cart-items"]').innerHTML = this.getCartItems();
        this.#internals.shadowRoot.querySelector('slot[name="ordered-items"]').innerHTML = this.getOrderedItems();
        this.#internals.shadowRoot.querySelector('span[class="summary-total"]').innerHTML = this.getOrderTotal();
        this.#internals.shadowRoot.querySelector('button[id="start-new-order"]').addEventListener('click',(event)=>{
            sessionStorage.clear();
            window.dispatchEvent(new StorageEvent('storage', {}));
        });
        window.addEventListener('storage', (event) => {
            this.#internals.shadowRoot.querySelector('span[class="cart-total"]').innerHTML = this.getTotalNumberOfItemsInCart();
            this.#internals.shadowRoot.querySelector('slot[name="cart-items"]').innerHTML = this.getCartItems();
            this.#internals.shadowRoot.querySelector('slot[name="ordered-items"]').innerHTML = this.getOrderedItems();
            this.#internals.shadowRoot.querySelector('span[class="order-price"]').innerHTML = this.getOrderTotal();
            this.#internals.shadowRoot.querySelector('span[class="summary-total"]').innerHTML = this.getOrderTotal();
        });

        
    }
    disconnectedCallback(){
        this.#internals.shadowRoot.querySelector('button[id="start-new-order"]').removeEventListener('click',(event)=>{});
    }
     
    getCartItems = () => {
        let html = "";

        Object.keys(sessionStorage).forEach(function (key) {
            let item = JSON.parse(sessionStorage.getItem(key));
            const amount = Number(item[key].qty);
            const unitPrice = Number(item[key].price);
            const subTotal = Number(item[key].qty) * Number(item[key].price);
            html += `
                    <cart-item
                        cart-item-name = "${key}"
                        cart-item-amount = "${amount}x"
                        cart-item-unit-price = "@ $${unitPrice}"
                        cart-item-subtotal-price = "$${subTotal}"
                    >   
                    </cart-item>
                    <hr>
            `
        });
        return html;
    }
    getOrderedItems = () => {
        let html = "";

        Object.keys(sessionStorage).forEach(function (key) {
            let item = JSON.parse(sessionStorage.getItem(key));
            const amount = Number(item[key].qty);
            const unitPrice = Number(item[key].price);
            const total = Number(item[key].qty) * Number(item[key].price);
            const thumbnail=item[key].thumbnail;
            html += `
                    <ordered-item
                        name="${key}"
                        thumbnail = "${thumbnail}"
                        ordered-item-amount = "${amount}x"
                        ordered-item-unit-price = "@ $${unitPrice}"
                        ordered-price = "$${total}"
                    >   
                    </ordered-item>
                    <hr>
            `
        });
        return html;
    }
    getTotalNumberOfItemsInCart = () => {
        let totalNumberOfItems = 0;
        Object.keys(sessionStorage).forEach(function (key) {
            let item = JSON.parse(sessionStorage.getItem(key));
            totalNumberOfItems += Number(item[key].qty) || 0;
        });
        return totalNumberOfItems;
    }

    getOrderTotal = () => {
        let orderTotal = 0;
        Object.keys(sessionStorage).forEach(function (key) {
            let item = JSON.parse(sessionStorage.getItem(key));
            orderTotal += (Number(item[key].qty) * Number(item[key].price));
        });
        return orderTotal;
    }
    static get observedAttributes() {
        return [
            'cart-total',
            'order-price',
        ];
    }
}

if (!customElements.get("cart-details")) {
    customElements.define("cart-details", CartDetailsComponent);
} 