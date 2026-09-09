(function () {
  var rooms = {
    hayat: ["حیاط", "فرش دوازده‌متری. در سبز ورقه."],
    hoz: ["حوض", "بی‌ماهی. آب را حدس نزن."],
    dayi: ["اتاق دایی", "بو دارد. اتاق می‌ماند."],
    "12": ["دوازده کیلومتر", "دست تکان نخورد."],
    "300": ["سیصد کیلومتر", "طلای عروسی. کتاب ناتمام."],
    "4000": ["چهار هزار", "هوا هیچ."],
    divar: ["دیوار", "زادهٔ بعد فقط این را می‌بیند."],
    bam: ["بام", "لحاف. آنتن. دعوا."],
    sabt: ["اداره ثبت", "سه بار متر. همان سند قبلی."]
  };
  var panel = document.getElementById("panel");
  var title = document.getElementById("panel-title");
  var body = document.getElementById("panel-body");
  document.querySelectorAll(".cell").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var data = rooms[btn.getAttribute("data-id")];
      if (!data) return;
      document.querySelectorAll(".cell").forEach(function (b) { b.classList.remove("on"); });
      btn.classList.add("on");
      title.textContent = data[0];
      body.textContent = data[1];
      panel.hidden = false;
    });
  });
})();
