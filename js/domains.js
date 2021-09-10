const domains = document.querySelectorAll(".domain-toggler");
domains.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("unselected");
  })
);