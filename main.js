const template = document.createElement("template");
template.innerHTML = `
    <section class="product-card">
            <section class="image">
              <img src="./assets/images/image-creme-brulee-desktop.jpg" alt="" srcset="">
              <section class="cart-actions">
                <label for="add-to-cart">
                  <svg id="icon-add-to-cart" fill="" viewBox="0 0 21 20">
                    <g fill="#C73B0F" clip-path="url(#a)">
                      <path
                        d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                      <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M.333 0h20v20h-20z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>
                    Add to Cart
                  </span>
                  <input type="checkbox" name="add-to-cart" id="add-to-cart">
                </label>
                <section class="quantity">
                  <button class="decrement-quantity">
                    <svg id="icon-decrement-quantity" viewBox="0 0 10 2">
                      <path fill="" d="M0 .375h10v1.25H0V.375Z" />
                    </svg>
                  </button>
                  <span class="qty">1</span>
                  <button class="increment-quantity">
                    <svg id="icon-increment-quantity" fill="" viewBox="0 0 10 10">
                      <path fill="" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                    </svg>
                  </button>
                </section>
              </section>
            </section>

            <span class="category">

            </span>
            <span class="name"></span>
            <span class="price"></span>
          </section>
          <style>
            section[class="product-card"] {
              display: grid;
              gap: 20px;
            }

            section[class="image"] img {
              width: 100%;
              height: 100%;
            }

            section[class="image"] {
              position: relative;
              width: 300px;
              height: 300px;
            }

            span[class="category"] {
              color: var(--rose-400);
            }

            span[class="name"] {
              color: var(--rose-900);
              font-weight: 700;
            }

            span[class="price"] {
              color: var(--red);
              font-weight: 700;
            }


            input[name="add-to-cart"] {
              display: none;
            }

            label[for="add-to-cart"] {
              display: grid;
              grid-template-columns: 20px 1fr;
              background-color: var(--rose-50);
              gap: 10px;
              place-items: center;
              text-wrap: nowrap;
            }

            label[for="add-to-cart"] svg {
              height: 20px;
              width: 20px;
            }

            section[class="quantity"] {
              background: gainsboro;
              display: grid;
              align-items: center;
              justify-content: space-around;
              grid-auto-flow: column;
            }

            section[class="quantity"],
            label[for="add-to-cart"] {
              padding: 5px 15px;
              border-radius: 30px;
              width: 100px;
              height: 30px;
              border: 1px solid var(--rose-900);
              position: absolute;
              left: 75px;
              bottom: -15px;
              cursor: pointer;
            }

            button[class="increment-quantity"],
            button[class="decrement-quantity"] {
              appearance: none;
              background-color: transparent;
              border-color: transparent;
              cursor: pointer;
            }

            svg[id="icon-decrement-quantity"],
            svg[id="icon-increment-quantity"] {
              height: 10px;
              width: 10px;
              background-color: var(--red);
              border-radius: 50%;
              fill: white;
              padding: 2px;
              border: 2px solid white;
            }

            button[class="decrement-quantity"]:hover svg[id="icon-decrement-quantity"],
            button[class="increment-quantity"]:hover svg[id="icon-increment-quantity"] {
              height: 10px;
              width: 10px;
              background-color: white;
              border-radius: 50%;
              fill: var(--red);
              padding: 2px;
              border: 2px solid var(--red);
            }

            section[class="product-card"]:has(input[name="add-to-cart"]:checked) {
              label[for="add-to-cart"] {
                display: none;
              }

              section[class="quantity"] {
                display: grid;
              }
            }

            section[class="quantity"] {
              display: none;
            }
          </style>


`
class ProductCard extends HTMLElement {
  #internals;
  constructor() {

    super();
    this.#internals = this.attachInternals();

  }
  connectedCallback(
  ) {
    const shadowRoot = this.attachShadow({ mode: "open" })
    shadowRoot.appendChild(template.content.cloneNode(true))
    if (this.hasAttribute('img')) {
      this.#internals.shadowRoot.querySelector('section[class="image"] img').src = this.getAttribute('img');
    }
     if (this.hasAttribute('name')) {
      this.#internals.shadowRoot.querySelector('span[class="name"]').innerHTML=this.getAttribute('name'); 
     }
     if (this.hasAttribute('category')) {
      this.#internals.shadowRoot.querySelector('span[class="category"]').innerHTML=this.getAttribute('category'); 
     }
     if (this.hasAttribute('price')) {
      this.#internals.shadowRoot.querySelector('span[class="price"]').innerHTML=this.getAttribute('price'); 
     }
     this.#internals.shadowRoot.querySelector('button[class="increment-quantity"]').addEventListener('click',(event)=>{
      this.onIncrementQuantityButtonClicked();
    })
    this.#internals.shadowRoot.querySelector('button[class="decrement-quantity"]').addEventListener('click',(event)=>{
      this.onDecrementQuantityButtonClicked();
    })
    
  }
  onIncrementQuantityButtonClicked=()=>{
    const name=this.getAttribute('name');
    if(localStorage.getItem(name)){
      let val=JSON.parse(localStorage.getItem(name));
      localStorage.setItem(name,`{"${name}":{"qty":"${Number(val[name].qty) +1}" }}`);
    }else{
      localStorage.setItem(name,`{"${name}":{"qty":"1" }}`);
    }
  }
  onDecrementQuantityButtonClicked=()=>{
    const name=this.getAttribute('name');
    if(localStorage.getItem(name)){
      let val=JSON.parse(localStorage.getItem(name));
      localStorage.setItem(name,`{"${name}":{"qty":"${Number(val[name].qty) -1}" }}`);
    }else{
      localStorage.setItem(name,`{"${name}":{"qty":"0" }}`);
    }
  }
  static get observedAttributes() {
    return [
      'img',
      'name',
      'category',
      'price'
    ];
  }

}

if (!customElements.get("product-card")) {
  customElements.define("product-card", ProductCard);
}
class ProductsComponent extends HTMLElement {
  #internals;
  constructor() {
    super();
  }
  connectedCallback(
  ) {

    this.#internals = this.attachInternals();

    let html = '<section class="products">'

    fetch('data.json').then((response) => {
      response.text().then((response) => {
        return JSON.parse(response);
      }).then(data => {
        data.forEach(element => {
          html += `
          <product-card 
            img="${element.image.desktop}" 
            name="${element.name}" 
            category="${element.category}" 
            price="$${element.price}">
          </product-card>`
        });
        html += `
          </section>
          <style>
            section[class="products"] {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              max-width: 100svw;
              gap: 10px;
            }
         </style>`
        this.#internals.shadowRoot.innerHTML = html;

      }
      )

    });
  }

}
if (!customElements.get("products-component")) {
  customElements.define("products-component", ProductsComponent);
}
