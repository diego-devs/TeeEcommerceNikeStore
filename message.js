document.addEventListener("DOMContentLoaded", function() {
  // Set the sign-in flag to false to simulate logging off on page reload
  localStorage.setItem('isSignedIn', 'false');

  // Check if the user is already signed in
  const isSignedIn = localStorage.getItem('isSignedIn');

  // Show modal after 6 seconds if not signed in
  if (isSignedIn === 'false') {
    setTimeout(function() {
      document.getElementById("modal").style.display = "block";
    }, 6000);
  }

  // Handle form submission
  document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values of the username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Get the validation message spans
    const usernameValidation = document.getElementById('usernameValidation');
    const passwordValidation = document.getElementById('passwordValidation');

    // Clear any previous validation messages
    usernameValidation.textContent = '';
    passwordValidation.textContent = '';

    // Check if the username and password are correct
    if (username === 'tee' && password === '123') {
      // Set the sign-in flag in localStorage
      localStorage.setItem('isSignedIn', 'true');
      // Close modal
      document.getElementById("modal").style.display = "none";
      
      // Display the welcome message
      const welcomeMessage = document.createElement("div");
      welcomeMessage.textContent = "Welcome " + username + "!";
      welcomeMessage.style.position = "fixed";
      welcomeMessage.style.top = "50px";
      welcomeMessage.style.left = "20px";
      welcomeMessage.style.padding = "10px";
      welcomeMessage.style.backgroundColor = "#4caf50";
      welcomeMessage.style.color = "white";
      welcomeMessage.style.borderRadius = "5px";
      document.body.appendChild(welcomeMessage);
      
      // Remove welcome message after 4 seconds
      setTimeout(function() {
          welcomeMessage.remove();
      }, 4000);
    } else {
      // Display appropriate validation messages
      if (username !== 'tee') {
        usernameValidation.textContent = 'Invalid username.';
      }
      if (password !== '123') {
        passwordValidation.textContent = 'Invalid password.';
      }
      // Keep modal open
      document.getElementById("modal").style.display = "block";
    }
  });
});

// Rest of your code
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "air.png",
      },
      {
        code: "darkblue",
        img: "air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "jordan.png",
      },
      {
        code: "green",
        img: "jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "blazer.png",
      },
      {
        code: "green",
        img: "blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "crater.png",
      },
      {
        code: "lightgray",
        img: "crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "hippie.png",
      },
      {
        code: "black",
        img: "hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
