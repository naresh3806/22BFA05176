function shortenUrl() {
  const urlInput = document.getElementById("urlInput");
  const urlList = document.getElementById("urlList");
  const url = urlInput.value.trim();

  if (!url) {
    alert("Please enter a valid URL");
    return;
  }

  const shortCode = Math.random().toString(36).substring(2, 8);
  const shortUrl = `http://short.ly/${shortCode}`;
  const createdAt = new Date().toLocaleString();

  const li = document.createElement("li");
  li.innerHTML = `
    <p><strong>Original:</strong> <a href="${url}" target="_blank">${url}</a></p>
    <p><strong>Shortened:</strong> <a href="${url}" target="_blank">${shortUrl}</a></p>
    <p><small>Created: ${createdAt}</small></p>
  `;

  urlList.prepend(li);
  urlInput.value = "";
}
