   document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("ampharmacyUser");
    const userDisplay = document.getElementById("user-display");
    const logoutItem = document.getElementById("logout-nav-item");
    const logoutBtn = document.getElementById("logout-btn");

    if (username && userDisplay) {
      userDisplay.textContent = username;
      logoutItem.classList.remove("d-none");
    }

    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("ampharmacyUser");
        window.location.href = "login.html";
      });
    }
  });
