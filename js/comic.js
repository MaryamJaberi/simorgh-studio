(function () {
  var board = document.getElementById("board");
  if (!board) return;
  fetch("data/pages.json")
    .then(function (r) { return r.json(); })
    .then(function (pages) {
      board.innerHTML = "";
      pages.forEach(function (p) {
        var el = document.createElement("article");
        el.className = "page " + (p.status || "empty");
        el.innerHTML =
          "<strong>" + p.n + " · " + p.title + "</strong>" +
          "<span class=\"st\">" + label(p.status) + "</span>" +
          "<p>" + (p.note || "—") + "</p>";
        board.appendChild(el);
      });
    })
    .catch(function () {
      board.textContent = "فهرست صفحه‌ها باز نشد.";
    });
  function label(s) {
    if (s === "ok") return "تأیید";
    if (s === "wait") return "منتظر";
    return "خالی";
  }
})();
