const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btn-login-popup');
const btnClose = document.querySelector('.icon-close');

registerLink.addEventListener("click", () => {
  wrapper.classList.add('active')
})
loginLink.addEventListener("click", () => {
  wrapper.classList.remove('active')
})
btnLoginPopup.addEventListener("click", () => {
  wrapper.classList.add('active-popup')
})
btnClose.addEventListener("click", () => {
  wrapper.classList.remove('active-popup')
})