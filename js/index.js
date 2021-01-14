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
// Nav Links
let firstLink = document.querySelector('a')
firstLink.textContent = siteContent["nav"]["nav-item-1"]
let secondLink = firstLink.nextElementSibling
secondLink.textContent = siteContent["nav"]["nav-item-2"]
let thirdLink = secondLink.nextElementSibling
thirdLink.textContent = siteContent["nav"]["nav-item-3"]
let fourthLink = thirdLink.nextElementSibling
fourthLink.textContent = siteContent["nav"]["nav-item-4"]
let fifthLink = fourthLink.nextElementSibling
fifthLink.textContent = siteContent["nav"]["nav-item-5"]
let sixthLink = fifthLink.nextElementSibling
sixthLink.textContent = siteContent["nav"]["nav-item-6"]

// Header Img
document.querySelector('#cta-img')
.src= siteContent["cta"]["img-src"]
// CTA Header and Button
let h1 = document.querySelector('h1').textContent = siteContent["cta"]["h1"]
let button = document.querySelector('button').textContent = siteContent["cta"]["button"]

// top text-content
let content = document.querySelectorAll('.text-content')
let firstH4 = content[0]["firstElementChild"]['textContent'] = siteContent["main-content"]["features-h4"]
content[0].childNodes[3].textContent = siteContent["main-content"]["features-content"]
// about
let aboutH4 = content[1].childNodes[1].textContent = siteContent["main-content"]["about-h4"]
content[1].childNodes[3].textContent = siteContent["main-content"]["about-content"]
console.log(content)

// Middle img
document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"]

// bottom content
let servicesH4 = content[2].childNodes[1].textContent = siteContent["main-content"]["services-h4"]
content[2].childNodes[3].textContent = siteContent["main-content"]["services-content"]
// product
let productH4 = content[3].childNodes[1].textContent = siteContent["main-content"]["product-h4"]
content[3].childNodes[3].textContent = siteContent["main-content"]["product-content"]
// vision
let visionH4 = content[4].childNodes[1].textContent = siteContent["main-content"]["vision-h4"]
content[4].childNodes[3].textContent = siteContent["main-content"]["vision-content"]
// contact
let contact = document.querySelector('.contact')
let contactH4 = contact.firstElementChild.textContent = siteContent["contact"]["contact-h4"]
address = contact.childNodes[3].textContent = siteContent["contact"]["address"]
let phone = contact.childNodes[5].textContent = siteContent["contact"]["phone"]
let email = contact.childNodes[7].textContent = siteContent["contact"]["email"]
// footer

document.querySelector('footer').firstElementChild.textContent = siteContent["footer"]["copyright"]
