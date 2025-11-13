document.getElementById("showMessage").addEventListener("click", () => {
  const msg = "✅ Nmap scan completed successfully via GitHub Actions!";
  document.getElementById("resultArea").innerText = msg;
});
