import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
const KEY = "needhelp.demo-session";
const privatePages = [
  "buat-postingan.html",
  "chat.html",
  "aktivitas.html",
  "rating.html",
  "sukses-postingan.html",
];
const page = location.pathname.split("/").pop() || "index.html";
function readSession() {
  try {
    return JSON.parse(
      localStorage.getItem(KEY) || sessionStorage.getItem(KEY) || "null",
    );
  } catch {
    return null;
  }
}
function clearSession() {
  try {
    localStorage.removeItem(KEY);
    sessionStorage.removeItem(KEY);
  } catch {}
}
if (privatePages.includes(page) && !readSession())
  location.replace(`login.html?next=${encodeURIComponent(page)}`);
const header = document.querySelector("body > header"),
  nav = header?.querySelector("nav");
if (nav && page !== "login.html") {
  nav.id = "main-nav";
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "menu-toggle";
  toggle.textContent = "Menu";
  toggle.setAttribute("aria-controls", nav.id);
  toggle.setAttribute("aria-expanded", "false");
  function close() {
    nav.dataset.open = "false";
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", () => {
    const open = nav.dataset.open !== "true";
    nav.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  header.insertBefore(toggle, nav);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });
}
if (readSession() && header) {
  const logout = document.createElement("button");
  logout.type = "button";
  logout.textContent = "Keluar";
  logout.addEventListener("click", () => {
    clearSession();
    location.href = "index.html";
  });
  header.append(logout);
}
const form = document.getElementById("login-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("user-email"),
      password = document.getElementById("user-password"),
      errors = {};
    if (!email.value.trim()) errors.email = "Email wajib diisi.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))
      errors.email = "Masukkan format email yang benar.";
    if (!password.value) errors.password = "Password wajib diisi.";
    else if (password.value.length < 8)
      errors.password = "Password minimal 8 karakter.";
    const status = document.getElementById("login-status");
    for (const [name, input] of [
      ["email", email],
      ["password", password],
    ]) {
      const node = document.getElementById(`${name}-error`);
      node.textContent = errors[name] || "";
      node.hidden = !errors[name];
      input.setAttribute("aria-invalid", String(Boolean(errors[name])));
      if (errors[name]) input.setAttribute("aria-describedby", node.id);
      else input.removeAttribute("aria-describedby");
    }
    const wrong =
      !Object.keys(errors).length &&
      (email.value.trim() !== "demo@needhelp.test" ||
        password.value !== "NeedHelp123!");
    if (Object.keys(errors).length || wrong) {
      status.textContent = wrong
        ? "Email atau password demo tidak sesuai."
        : "Periksa kembali email dan password.";
      status.hidden = false;
      if (errors.email) email.focus();
      else if (errors.password) password.focus();
      return;
    }
    try {
      clearSession();
      const storage = document.getElementById("remember-me").checked
        ? localStorage
        : sessionStorage;
      storage.setItem(KEY, JSON.stringify({ email: email.value.trim() }));
    } catch {
      status.textContent =
        "Penyimpanan browser diblokir. Aktifkan penyimpanan untuk mencoba sesi demo.";
      status.hidden = false;
      return;
    }
    const next = new URLSearchParams(location.search).get("next");
    location.href = privatePages.includes(next) ? next : "index.html";
  });
  const dialog = document.getElementById("info-modal"),
    copy = {
      forgot: [
        "Lupa password?",
        "Pemulihan email belum terhubung. Akun demo: demo@needhelp.test / NeedHelp123!",
      ],
      google: [
        "Lanjutkan dengan Google",
        "Login Google belum tersedia dalam paket awal. Gunakan akun demo untuk mencoba alur.",
      ],
      register: [
        "Daftar sekarang",
        "Pendaftaran disebut dalam user flow, tetapi belum memiliki layar tersendiri di Final UI. Tim perlu menyepakati desain dan implementasinya.",
      ],
    };
  document.querySelectorAll("[data-info]").forEach((button) =>
    button.addEventListener("click", () => {
      const [title, body] = copy[button.dataset.info];
      document.getElementById("modal-title").textContent = title;
      document.getElementById("modal-body").textContent = body;
      dialog.showModal();
    }),
  );
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}
// Pengaman sementara untuk form Modul 6; anggota 2 menggantinya dengan logika per fitur.
if (page !== "login.html")
  document.querySelectorAll('form:not([method="dialog"])').forEach((form) =>
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let status = form.querySelector("[data-pending-status]");
      if (!status) {
        status = document.createElement("p");
        status.dataset.pendingStatus = "";
        status.setAttribute("role", "status");
        form.append(status);
      }
      status.textContent =
        "Fungsi ini masih menunggu implementasi anggota 2. Data belum dikirim atau disimpan.";
    }),
  );
