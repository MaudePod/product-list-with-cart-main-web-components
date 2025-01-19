const template = document.createElement("template");
template.innerHTML = `  
        <section class="ordered-item">
            <section class="thumbnail-container">
            <img src="" alt="">
            </section>
            <section class="ordered-item-info">
            <section class="name"></section>
            <section class="price">
                <span class="ordered-item-amount"></span>
                <span class="ordered-item-unit-price"></span>
            </section>
            </section>
            <span class="ordered-price"></span>
        </section>
    <style>

:host{
    display: grid;
    width: 400px;
    background-color: white;
    border-radius: 30px;
}
section[class="thumbnail-container"] img{
    width:50px;
    height:50px;
}
section[class="ordered-item"]{
    display: grid;
    grid-template-columns: 50px 1fr auto;
    place-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    background-color: var(--rose-100);
}

span[class="ordered-price"]{
    color: var(--rose-900);
    font-weight: 700;
}
section[class="name"]{
    color: var(--rose-900);
    font-weight: 700;
}
span[class="ordered-item-amount"] {
    color: var(--red);
}
span[class="ordered-item-unit-price"] {
    color: var(--rose-500);
}
@container (inline-size < 1100px) {

    section[class="ordered-item"] {
        width: 80%;
        align-self: start;
    }
}
    </style>
`;
export default class OrderedItemComponent extends HTMLElement {
    #internals;
    constructor() {
        super();
        this.#internals = this.attachInternals();
    }
    connectedCallback(
    ) {
        const shadowRoot = this.attachShadow({ mode: "open" })
        shadowRoot.appendChild(template.content.cloneNode(true));
        if (this.hasAttribute('name')) {
            this.#internals.shadowRoot.querySelector('section[class="name"]').innerHTML = this.getAttribute('name');
        }
        if (this.hasAttribute('thumbnail')) {
            this.#internals.shadowRoot.querySelector('section[class="thumbnail-container"] img').src = this.getAttribute('thumbnail');
        }
        if (this.hasAttribute('ordered-item-amount')) {
            this.#internals.shadowRoot.querySelector('span[class="ordered-item-amount"]').innerHTML = this.getAttribute('ordered-item-amount');
        }
        if (this.hasAttribute('ordered-item-unit-price')) {
            this.#internals.shadowRoot.querySelector('span[class="ordered-item-unit-price"]').innerHTML = this.getAttribute('ordered-item-unit-price');
        }
        if (this.hasAttribute('ordered-price')) {
            this.#internals.shadowRoot.querySelector('span[class="ordered-price"]').innerHTML = this.getAttribute('ordered-price');
        }
    }

    static get observedAttributes() {
        return [
            'name',
            'thumbnail"',
            'ordered-item-amount',
            'ordered-item-unit-price',
            'ordered-price'
        ];
    }
}
if (!customElements.get("ordered-item")) {
    customElements.define("ordered-item", OrderedItemComponent);
} 