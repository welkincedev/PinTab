# 🔖 PinTab – Save & Organize Links

![PinTab Preview](ss/PinTabUI.png)  
*A modern Chrome extension to save, organize, and search your favorite websites instantly.*

---

## 🌟 Overview

**PinTab** is a lightweight, **folder-based Chrome extension** designed to help you:

- Save websites with a single click ⭐  
- Organize links into **folders / categories** 📁  
- Search through saved websites 🔍  
- Delete entries you no longer need 🗑️  
- Store data **locally and persistently** using `chrome.storage.local` 💾  

Perfect for **developers, students, and professionals** who want a clean, organized browsing experience.

---

## 🚀 Features

| Feature | Status |
|---------|--------|
| Save current tab | ✅ |
| Folder / Category support | ✅ |
| Search saved websites | ✅ |
| Delete websites | ✅ |
| Persistent local storage (`chrome.storage.local`) | ✅ |
| Icon-based modern UI | ✅ |
| Footer branding | ✅ |
| Offline usage | ✅ |

---

## 📸 Screenshots

1️⃣ **Main UI with folders**
-----------------------------
![Main UI](ss/PinTabUI.png)

2️⃣ **Saving a new website**
-----------------------------
![Save Website](ss/Pinned.png)



---

## 💻 Installation / Usage

### 1️⃣ Clone the repository
```bash
git clone https://github.com/welkthedev/PinTab.git
```

### 2️⃣ Load into Chrome
1. Open `chrome://extensions/`  
2. Enable **Developer mode** (top-right)  
3. Click **Load unpacked**  
4. Select the `PinTab` folder  

### 3️⃣ Start saving
- Open any website  
- Click the **PinTab icon** in your browser  
- Enter a **folder name (optional)**  
- Click ⭐ to save  
- Use **search & folder filter** to find saved sites

---

## 🛠️ Built With

- **HTML, CSS, JavaScript**  
- **Chrome Extensions API** (`tabs` & `storage`)  
- Icon-based, responsive UI  
- `chrome.storage.local` for **persistent local storage**

---

## 📂 Data Structure

Each saved website is stored as a JSON object:

```json
{
  "title": "Google",
  "url": "https://google.com",
  "folder": "Work",
  "savedAt": 1700000000000
}
```

- Stored in `chrome.storage.local`  
- Maximum storage: ~10MB (~30,000–50,000 websites)  
- Fully private and offline

---

## ⚡ Future Improvements

- Cloud sync for multi-device access (Firebase / Supabase) ☁️  
- Export / import saved websites (CSV / JSON) 📤  
- Dark mode toggle 🌙  
- Drag & drop folder reordering 🖱️  
- Publish to Chrome Web Store 🏪  

---

## 👤 Author

Built with ❤️ by [welkthedev](https://github.com/welkthedev)

---

## 📄 License

MIT License © 2026 welkthedev

---

## 💡 Tips for Users

- Use **folders** to keep work, study, and personal links separate  
- Search is **case-insensitive** and works on both **title & URL**  
- Deleting a website is **permanent**, so double-check before clicking 🗑️ 
