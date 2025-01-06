// ==================================== Intersection Observer ===============================
// Select the target element you want to animate
const taglineElement = document.querySelector('#tagline');
const menucard1Element = document.querySelector('#menu-card1');
const menucard2Element = document.querySelector('#menu-card2');
const menucard3Element = document.querySelector('#menu-card3');
const menucard4Element = document.querySelector('#menu-card4');
const menucard5Element = document.querySelector('#menu-card5');
const aboutpara1Element = document.querySelector('#about-para1');
const aboutpara2Element = document.querySelector('#about-para2');
const aboutpara3Element = document.querySelector('#about-para3');
const aboutimage1Element = document.querySelector('#about-image-1');
const aboutimage2Element = document.querySelector('#about-image-2');
const aboutimage3Element = document.querySelector('#about-image-3');
const taglineconElement = document.querySelector('#tagline-con');
const side1Element = document.querySelector('#sided1');
const side2Element = document.querySelector('#sided2');
const side3Element = document.querySelector('#sided3');
const side4Element = document.querySelector('#sided4');
const orderElement = document.querySelector('#order-button');
const sendElement = document.querySelector('#send-button');

// Create an IntersectionObserver
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'about-para2') {
        document.querySelector('.about-link').classList.add('active-link');
      }
      if (entry.target.id === 'menu-card1') {
        document.querySelector('.menu-link').classList.add('active-link');
      }
      if (entry.target.id === 'order-button') {
        document.querySelector('.home-link').classList.add('active-link');
      }
      if (entry.target.id === 'send-button') {
        document.querySelector('.contact-link').classList.add('active-link');
      }
      // Add the 'view-animate' class when the element enters the viewport
      entry.target.classList.add('view-animate');
    } else {
      if (entry.target.id === 'menu-card1') {
        document.querySelector('.menu-link').classList.remove('active-link');
      }
      if (entry.target.id === 'about-para2') {
        document.querySelector('.about-link').classList.remove('active-link');
      }
      if (entry.target.id === 'order-button') {
        document.querySelector('.home-link').classList.remove('active-link');
      }
      if (entry.target.id === 'send-button') {
        document.querySelector('.contact-link').classList.remove('active-link');
      }
      // Remove the 'view-animate' class when it leaves the viewport
      entry.target.classList.remove('view-animate');
    }
  });
}, {
  threshold: 0.4 // Trigger when 50% of the element is visible
});

// Start observing the target element
observer.observe(taglineElement);
observer.observe(menucard1Element);
observer.observe(menucard2Element);
observer.observe(menucard3Element);
observer.observe(menucard4Element);
observer.observe(menucard5Element);
observer.observe(aboutpara1Element);
observer.observe(aboutpara2Element);
observer.observe(aboutpara3Element);
observer.observe(aboutimage1Element);
observer.observe(aboutimage2Element);
observer.observe(aboutimage3Element);
observer.observe(taglineconElement);
observer.observe(side1Element);
observer.observe(side2Element);
observer.observe(side3Element);
observer.observe(side4Element);
observer.observe(orderElement);
observer.observe(sendElement);

// =================================================================================================
 
document.querySelectorAll('.sidebar .links').forEach(link => {
  link.addEventListener('click', () => {
      document.getElementById('toogle').checked = false;
  });
});

document.querySelectorAll('.link-box .links').forEach(link => {
  link.addEventListener('click', () => {
      document.getElementById('coogle').checked = false;
  });
});

// ======================================== Cart ==========================================

const cart = document.querySelector(".cart-menu");
const addToCartButtons = document.querySelectorAll(".buy-button");

// Attach event listeners to all "Add to Cart" buttons
addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Retrieve product details from button's data attributes
        const name = button.getAttribute("data-item-name");
        const price = button.getAttribute("data-item-price");
        const img = button.getAttribute("data-item-img");

        // Dynamically append the item to the cart
        cart.innerHTML += `
            <div class="cart-item">
                <label for="close-cart" id="label-cross"><i class="ri-close-line"></i></label>
                <h1 style="font-size: 21px; font-weight: 200;">Cart</h1>
                <h2 class="units" style="font-weight: lighter; font-size: small; grid-area: 2/1;">Items</h2>
                <h2 class="units" style="font-weight: lighter; font-size: small; grid-area: 2/2;">Price</h2>
                <h2 class="units" style="font-weight: lighter; font-size: small; grid-area: 2/3;">Quantity</h2>
                    <img src="${img}" style="width: 100px; height: auto;" alt="${name}" />
                    <p>${name}</p>
                    <p>$${price}</p>
                    <div class="qty-wrapper">
                        <span class="qty-spans minus">-</span>
                        <span class="qty-spans num">1</span>
                        <span class="qty-spans plus">+</span>
                    </div>
                </div>
            </div>
        `;
    });
});