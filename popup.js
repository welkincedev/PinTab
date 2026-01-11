const saveBtn = document.getElementById("saveBtn");
const listEl = document.getElementById("websiteList");
const searchInput = document.getElementById("searchInput");
const folderInput = document.getElementById("folderInput");
const folderFilter = document.getElementById("folderFilter");

/* ---------------- SAVE WEBSITE ---------------- */
saveBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const folderName = folderInput.value.trim() || "Uncategorized";
    const website = {
      title: tabs[0].title,
      url: tabs[0].url,
      folder: folderName,
      savedAt: Date.now()
    };

    chrome.storage.local.get({ websites: [] }, (result) => {
      result.websites.push(website);
      chrome.storage.local.set({ websites: result.websites }, () => {
        folderInput.value = "";
        loadWebsites();
      });
    });
  });
});

/* ---------------- LOAD & RENDER ---------------- */
function loadWebsites() {
  chrome.storage.local.get({ websites: [] }, (result) => {
    populateFolderFilter(result.websites);
    renderList(result.websites);
  });
}

/* ---------------- FOLDER FILTER ---------------- */
function populateFolderFilter(websites) {
  const folders = [...new Set(websites.map(w => w.folder))];
  folderFilter.innerHTML = `<option value="">📁 All</option>`;
  folders.forEach(f => {
    const option = document.createElement("option");
    option.value = f;
    option.textContent = f;
    folderFilter.appendChild(option);
  });
}

/* ---------------- RENDER LIST ---------------- */
function renderList(websites) {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedFolder = folderFilter.value;

  listEl.innerHTML = "";

  websites
    .filter(site =>
      (!selectedFolder || site.folder === selectedFolder) &&
      (site.title.toLowerCase().includes(searchQuery) ||
       site.url.toLowerCase().includes(searchQuery))
    )
    .forEach((site, index) => {
      const li = document.createElement("li");

      const folder = document.createElement("span");
      folder.className = "folder";
      folder.textContent = site.folder;

      const link = document.createElement("a");
      link.href = site.url;
      link.target = "_blank";
      link.textContent = site.title;

      const del = document.createElement("span");
      del.className = "delete";
      del.textContent = "🗑️";
      del.onclick = () => deleteWebsite(index);

      li.appendChild(folder);
      li.appendChild(link);
      li.appendChild(del);
      listEl.appendChild(li);
    });
}

/* ---------------- DELETE ---------------- */
function deleteWebsite(index) {
  chrome.storage.local.get({ websites: [] }, (result) => {
    result.websites.splice(index, 1);
    chrome.storage.local.set({ websites: result.websites }, loadWebsites);
  });
}

/* ---------------- EVENTS ---------------- */
searchInput.addEventListener("input", loadWebsites);
folderFilter.addEventListener("change", loadWebsites);
document.addEventListener("DOMContentLoaded", loadWebsites);
