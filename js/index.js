const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLink1 = document.querySelector('nav a');
 navLink1.textContent = siteContent['nav']['nav-item-1'];

 let navLink2 = document.querySelector('nav a:nth-child(2)');
 navLink2.textContent = siteContent['nav']['nav-item-2'];

 let navLink3 = document.querySelector('nav a:nth-child(3)');
 navLink3.textContent = siteContent['nav']['nav-item-3'];

 let navLink4 = document.querySelector('nav a:nth-child(4)');
 navLink4.textContent = siteContent['nav']['nav-item-4'];

 let navLink5 = document.querySelector('nav a:nth-child(5)');
 navLink5.textContent = siteContent['nav']['nav-item-5'];

 let navLink6 = document.querySelector('nav a:nth-child(6)');
 navLink6.textContent = siteContent['nav']['nav-item-6'];


// CTA H1

let h1 = document.querySelector('h1');
  h1.textContent = siteContent.cta.h1;

// Button

let button = document.querySelector('button');
  button.textContent = siteContent.cta.button;
//  CTA image

let ctaImg = document.getElementById('cta-img');
  ctaImg.setAttribute( 'src' , siteContent.cta["img-src"]);

  // features

let feat = document.querySelector('.top-content .text-content h4');
  feat.textContent = siteContent['main-content']["features-h4"];

let featContent = document.querySelector('.top-content .text-content p');
  featContent.textContent = siteContent['main-content']["features-content"];
  // about 

let about = document.querySelector('.top-content .text-content:nth-child(2) h4');
  about.textContent = siteContent['main-content']["about-h4"];
  
let aboutContent = document.querySelectorAll('.top-content .text-content:nth-child(2) p');
  aboutContent[0].textContent = siteContent['main-content']["about-content"];

  
  // middle img

let midImg = document.querySelector('#middle-img');
  midImg.setAttribute( 'src' , siteContent['main-content']["middle-img-src"]);

  // Bottom Content 

  let services = document.querySelector('.bottom-content .text-content h4');
  services.textContent = siteContent['main-content']["services-h4"];

let servContent = document.querySelector('.bottom-content .text-content p');
  servContent.textContent = siteContent['main-content']["services-content"];

    // Product 
    let product = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
    product.textContent = siteContent['main-content']["product-h4"];
    
  let proContent = document.querySelectorAll('.bottom-content .text-content:nth-child(2) p');
    proContent[0].textContent = siteContent['main-content']["product-content"];

    // Vision 
    let vision = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
    vision.textContent = siteContent['main-content']["vision-h4"];
    
  let visContent = document.querySelectorAll('.bottom-content .text-content:nth-child(3) p');
    visContent[0].textContent = siteContent['main-content']["vision-content"];

      // Contact

  let contact = document.querySelector('.contact h4');
    contact.textContent = siteContent['contact']['contact-h4'];

  let address = document.querySelector('.contact p');
    address.textContent = siteContent['contact']['address'];

  let phone = document.querySelector('.contact p:nth-child(3)');
    phone.textContent = siteContent['contact']['phone'];

  let email = document.querySelector('.contact p:nth-child(4)');
    email.textContent = siteContent['contact']['email'];

    // Footer

  let foot = document.querySelector('footer');
    foot.textContent = siteContent['footer']['copyright'];