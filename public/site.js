document.getElementById("current-year").textContent = new Date().getFullYear();

const scrollTopBtn = document.querySelector(".scroll-top-btn");
if (scrollTopBtn) {
	scrollTopBtn.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
}
