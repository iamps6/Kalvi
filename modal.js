const emailSubmit = document.querySelector(".email-submit");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const email = document.getElementById("email");
const modalOverlay = document.getElementById("modal-overlay");
const signupForm = document.getElementById("mc-embedded-subscribe-form");
const subscribe = document.getElementById("mc-embedded-subscribe");

subscribe.onclick= () => {
  setTimeout(()=>{document.querySelector(".response").scrollIntoView()},1000)
}

// const content = document.querySelector(".content");

emailSubmit.onclick = () => {
  modal.style.display = "flex";
  document.getElementById("mce-EMAIL").value = email.value;
  modalOverlay.style.display = "block";
  // content.style.overflow = "hidden";
  // disableScroll();
};

modalClose.onclick = () => {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
  // content.style.overflow = "auto";
  // enableScroll();
};


