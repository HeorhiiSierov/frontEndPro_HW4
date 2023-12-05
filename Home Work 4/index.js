document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navItems = [
    { text: "Home", link: "#" },
    { text: "About", link: "#about" },
    { text: "Services", link: "#services" },
    { text: "Contact", link: "#contact" },
  ];

  navItems.forEach((item) => {
    const navLink = document.createElement("a");
    navLink.href = item.link;
    navLink.textContent = item.text;
    navbar.appendChild(navLink);
  });
});
