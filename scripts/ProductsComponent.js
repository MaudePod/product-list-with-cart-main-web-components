export default class ProductsComponent extends HTMLElement {
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
              price="$${element.price}"
              thumbnail="${element.image.thumbnail}"
              >
            </product-card>`
          });
          html += `
            </section>
            <style>
              :host{
                grid-column:1;  
              }
              section[class="products"] {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                max-width: 900px;
                column-gap: 10px;
                row-gap: 20px;
              }
          @container (inline-size > 1440px) {
           section[class="products"] {
                grid-template-columns: repeat(5 ,1fr);
              }
          }
          @container (inline-size < 1100px) {
          :host{
              grid-column:unset;
              place-items: center;
          }
           section[class="products"] {
                grid-template-columns: 1fr;
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
  