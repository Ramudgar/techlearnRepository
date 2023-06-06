
// // const form = document.getElementById('myForm');
// // const passwordInput = document.getElementById('password');
// // const confirmPasswordInput = document.getElementById('confirmPassword');

// // let eyeIcon = document.querySelector('.input-icon');
// // let eyeIcon2 = document.querySelector('.input-icon1');
// // eyeIcon.addEventListener('click', function () {
// //   if(passwordInput.type === 'password') {
// //     passwordInput.type = 'text';
// //     eyeIcon.classList.remove('fa-eye');
// //     eyeIcon.classList.add('fa-eye-slash');
// //   }
// //   else{
// //     passwordInput.type = 'password';
// //     eyeIcon.classList.remove('fa-eye-slash');
// //     eyeIcon.classList.add('fa-eye');
// //   }
// // });

// // eyeIcon2.addEventListener('click', function () {
// //   if(confirmPasswordInput.type === 'password') {
// //     confirmPasswordInput.type = 'text';
// //     eyeIcon2.classList.remove('fa-eye');
// //     eyeIcon2.classList.add('fa-eye-slash');
// //   }
// //   else{
// //     confirmPasswordInput.type = 'password';
// //     eyeIcon2.classList.remove('fa-eye-slash');
// //     eyeIcon2.classList.add('fa-eye');
// //   }
// // });

// const form = document.getElementById('myForm');
// const passwordInput = document.getElementById('password');
// const confirmPasswordInput = document.getElementById('confirmPassword');
// const eyeIcon = document.querySelector('.input-icon');
// const eyeIcon2 = document.querySelector('.input-icon1');

// const togglePassword = (inputField, eyeIcon) => {
//   if (inputField.type === 'password') {
//     inputField.type = 'text';
//     eyeIcon.classList.remove('fa-eye');
//     eyeIcon.classList.add('fa-eye-slash');
//   } else {
//     inputField.type = 'password';
//     eyeIcon.classList.remove('fa-eye-slash');
//     eyeIcon.classList.add('fa-eye');
//   }
// };



// eyeIcon.addEventListener('click', function () {
//   togglePassword(passwordInput, eyeIcon);
// });

// eyeIcon2.addEventListener('click', function () {
//   togglePassword(confirmPasswordInput, eyeIcon2);
// });

 


// form.addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent form submission
//   // Perform form validation
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const password = passwordInput.value;
//   const confirmPassword = confirmPasswordInput.value;

//   if (name === '') {
//     alert('Please enter your name.');
//     return;
//   }

//   if (email === '') {
//     alert('Please enter your email.');
//     return;
//   }

//   if (password === '') {
//     alert('Please enter your password.');
//     return;
//   }
//   //write code for password validation
//   //password should be 8 characters long along with one special character, one number and one capital letter
//   //use regex for password validation

//   // ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$
//   // ^(?=.*\d) - should contain atleast one digit
//   // (?=.*[a-z]) - should contain atleast one lower case
//   // (?=.*[A-Z]) - should contain atleast one upper case
//   // (?=.*[a-zA-Z]) - should contain atleast one letter
//   // .{8,} - should contain atleast 8 characters
//   // $ - end of the string

//   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//   if(!regex.test(password)) {
//     alert('Password should be 8 characters long along with one special character, one number and one capital letter');
//     return;
//   }

//  if (password !== confirmPassword) {
//     alert('Passwords do not match.');
//     return;
//   }


//   // Form is valid, submit data or perform further actions
//   submitForm();
// });

// function submitForm() {
//   // Here, you can submit the form data using AJAX or perform any other actions
//   alert('Form submitted successfully!');
// }


const form = document.getElementById('myForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const eyeIcon = document.querySelector('.input-icon');
const eyeIcon2 = document.querySelector('.input-icon1');

const togglePassword = (inputField, eyeIcon) => {
  if (inputField.type === 'password') {
    inputField.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    inputField.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
};

eyeIcon.addEventListener('click', function () {
  togglePassword(passwordInput, eyeIcon);
});

eyeIcon2.addEventListener('click', function () {
  togglePassword(confirmPasswordInput, eyeIcon2);
});

confirmPasswordInput.addEventListener('input', function () {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    confirmPasswordInput.setCustomValidity(''); // passwords match, clear the error message
  } else {
    confirmPasswordInput.setCustomValidity('Passwords do not match');
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Rest of the form validation code...

  // Form is valid, submit data or perform further actions
  submitForm();
});

function submitForm() {
  // Here, you can submit the form data using AJAX or perform any other actions
  alert('Form submitted successfully!');
}
