
document.addEventListener("DOMContentLoaded", function() {
    // Llamamos a la función con el segmento por defecto al cargar la página
    changeContent("agricultor"); // Cambia a "agricultor" si deseas mostrar contenido por defecto para agricultores
});

function changeContent(segment){
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");

    if (segment === "comerciante"){
        const func_1 = `
        <span><strong>Product Catalog</strong></span>
        <div class="ui-component-card--pricing-price">
          <img src="img/func-1c.svg" alt="">
        </div>
        <span><small>We show you and provide information on a wide variety of quality products.</small></span>
        <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
          <li class="ui-component-list--item ui-component-list--item-check">Displays a wide variety of agricultural products available.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Provides detailed descriptions, photos and specifications.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Provides detailed descriptions, photos and specifications.</li>
        </ul>
        <a href=https://ayni-web-app.netlify.app/signin class="ui-component-button ui-component-button-big ui-component-button-primary" role="link" aria-label="#">Start now</a>
        `;
        const func_2 = `
        <span><strong>Order Tracking</strong></span>
        <div class="ui-component-card--pricing-price">
          <img src="img/func-2c.svg" alt="">
        </div>
        <span><small>Real time information on the status and location of your order.</small></span>
        <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
          <li class="ui-component-list--item ui-component-list--item-check">Provides real-time updates on order status.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Notifies about the preparation, shipment and delivery of the products.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Facilitates logistical coordination and avoids delays in operations.</li>
        </ul>
        <a href=https://ayni-web-app.netlify.app/signin class="ui-component-button ui-component-button-big ui-component-button-primary" role="link" aria-label="#">Start now</a>
        `;
        const func_3 = `
        <span><strong>Ratings and Reviews</strong></span>
        <div class="ui-component-card--pricing-price">
          <img src="img/func-3c.svg" alt="">
        </div>
        <span><small>Rate and help in our amazing community.</small></span>
        <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
          <li class="ui-component-list--item ui-component-list--item-check">Allows merchants to rate and leave comments on purchased products.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Help other traders make informed decisions.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Promotes transparency and confidence in product quality.</li>
        </ul>
        <a href=https://ayni-web-app.netlify.app/signin class="ui-component-button ui-component-button-big ui-component-button-primary" role="link" aria-label="#">Start now</a>
        `;

        card1.innerHTML = func_1;
        card2.innerHTML = func_2;
        card3.innerHTML = func_3;
    } else if (segment === "agricultor"){
        const func_1 = `
        <span><strong>Crop planner</strong></span>
              <div class="ui-component-card--pricing-price">
                <img src="img/func-1.svg" alt="">
              </div>
              <span><small>It allows you to organize your sowing, harvesting and agricultural activities efficiently, maximizing your results.</small></span>
              <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
                <li class="ui-component-list--item ui-component-list--item-check">Create customized planting and harvesting calendars.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Recommendations based on climatic and soil data.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Reminders for important tasks, such as watering and fertilizing.</li>
              </ul>
              <a href=https://ayni-web-app.netlify.app/signin class="ui-component-button ui-component-button-big ui-component-button-secondary" role="link" aria-label="#">Start now</a>
        `;
        const func_2 = `
        <span><strong>Pest and Disease Monitoring</strong></span>
        <div class="ui-component-card--pricing-price">
          <img src="img/func-2.svg" alt="">
        </div>
        <span><small>It provides you with information and tips to keep your crops healthy.</small></span>
        <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
          <li class="ui-component-list--item ui-component-list--item-check">Database of common pests and diseases.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Prevention and control tips to maintain healthy crops.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Record observations and symptoms for accurate diagnosis.</li>
        </ul>
        <a href=https://ayni-web-app.netlify.app/signin class="ui-component-button ui-component-button-big ui-component-button-primary" role="link" aria-label="#">Start now</a>
        `;
        const func_3 = `
        <span><strong>Registration of Inputs</strong></span>
              <div class="ui-component-card--pricing-price">
                <img src="img/func-3.svg" alt="">
              </div>
              <span><small>Our tool helps you manage your resources and make informed decisions.</small></span>
              <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
                <li class="ui-component-list--item ui-component-list--item-check">Stores detailed information on each input used.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Keeps track of quantities, dates and suppliers.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Calculate total input costs by crop and season.</li>
              </ul>
              <a href=https://ayni-web-app.netlify.app/signin class="ui-component-button ui-component-button-big ui-component-button-secondary" role="link" aria-label="#">Start now</a>
        
        `
        card1.innerHTML = func_1;
        card2.innerHTML = func_2;
        card3.innerHTML = func_3;
    }
}
