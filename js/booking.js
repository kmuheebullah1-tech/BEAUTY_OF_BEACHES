/* BeautyOfBeaches — Hut booking modal (demo)
 * Opens a small popup from every "Book this hut" button, calculates the
 * total per day (weekday Mon–Thu / weekend Fri–Sun), and collects
 * Gmail + card details. DEMO ONLY: nothing is sent or stored anywhere.
 */
(function () {
  "use strict";

  var MODAL_HTML =
    '<div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingTitle" aria-hidden="true">' +
    '<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content booking-modal">' +
    '<div class="modal-header"><h5 class="modal-title" id="bookingTitle"><i class="fa-solid fa-calendar-check me-2"></i>Book: <span id="bkHutName"></span></h5>' +
    '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>' +
    '<div class="modal-body"><form id="bookingForm" novalidate>' +
    '<div class="d-flex gap-3 align-items-center mb-3"><img id="bkHutImg" class="bk-thumb" alt="" />' +
    '<div class="small"><div>Weekday (Mon–Thu): <strong id="bkWeekdayRate"></strong> / day</div>' +
    '<div>Weekend (Fri–Sun): <strong id="bkWeekendRate"></strong> / day</div></div></div>' +
    '<div class="row g-2 mb-2"><div class="col-6"><label class="form-label small fw-semibold" for="bkIn">Check-in</label>' +
    '<input type="date" class="form-control" id="bkIn" required /><div class="invalid-feedback">Please select a valid date.</div></div>' +
    '<div class="col-6"><label class="form-label small fw-semibold" for="bkOut">Check-out</label>' +
    '<input type="date" class="form-control" id="bkOut" required /><div class="invalid-feedback">Check-out must be after check-in.</div></div></div>' +
    '<div class="bk-summary mb-3" id="bkSummary" aria-live="polite"></div>' +
    '<div class="mb-2"><label class="form-label small fw-semibold" for="bkName">Name on card</label>' +
    '<input type="text" class="form-control" id="bkName" autocomplete="cc-name" required /><div class="invalid-feedback">Please enter the name on the card.</div></div>' +
    '<div class="mb-2"><label class="form-label small fw-semibold" for="bkEmail">Gmail</label>' +
    '<input type="email" class="form-control" id="bkEmail" placeholder="yourname@gmail.com" autocomplete="email" required /><div class="invalid-feedback">Please enter a valid Gmail address (name@gmail.com).</div></div>' +
    '<div class="mb-2"><label class="form-label small fw-semibold" for="bkCard">Credit card number</label>' +
    '<input type="text" class="form-control" id="bkCard" inputmode="numeric" placeholder="1234 5678 9012 3456" autocomplete="cc-number" maxlength="23" required /><div class="invalid-feedback">Please enter a valid card number.</div></div>' +
    '<div class="row g-2 mb-2"><div class="col-6"><label class="form-label small fw-semibold" for="bkExp">Expiry (MM/YY)</label>' +
    '<input type="text" class="form-control" id="bkExp" inputmode="numeric" placeholder="MM/YY" autocomplete="cc-exp" maxlength="5" required /><div class="invalid-feedback">Invalid expiry date.</div></div>' +
    '<div class="col-6"><label class="form-label small fw-semibold" for="bkCvv">CVV</label>' +
    '<input type="password" class="form-control" id="bkCvv" inputmode="numeric" placeholder="123" autocomplete="cc-csc" maxlength="4" required /><div class="invalid-feedback">Enter a 3 or 4 digit CVV.</div></div></div>' +
    '<p class="small text-cocoa-muted mb-3"><i class="fa-solid fa-lock me-1"></i>Demo form: card details are never saved or sent anywhere.</p>' +
    '<button type="submit" class="btn btn-coral-primary w-100" id="bkSubmit"><i class="fa-solid fa-lock me-2"></i>Pay &amp; Confirm</button>' +
    '</form>' +
    '<div id="bkSuccess" class="text-center py-3 d-none"><i class="fa-solid fa-circle-check bk-ok mb-3"></i>' +
    '<h5 class="mb-2">Booking confirmed (demo)</h5><p class="mb-3" id="bkSuccessMsg"></p>' +
    '<button type="button" class="btn btn-sand" data-bs-dismiss="modal">Close</button></div>' +
    '</div></div></div></div>';

  function rs(n) { return "Rs " + n.toLocaleString("en-US"); }
  function num(txt) { return parseInt(String(txt).replace(/[^\d]/g, ""), 10) || 0; }
  function iso(d) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function parseISO(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }

  var current = null, modalInstance = null;
  var $ = function (id) { return document.getElementById(id); };

  // Weekday = Mon–Thu, Weekend = Fri–Sun. Each night from check-in up to
  // (not including) check-out counts as one day.
  function calc() {
    var a = $("bkIn").value, b = $("bkOut").value;
    if (!a || !b) return null;
    var start = parseISO(a), end = parseISO(b);
    if (end <= start) return null;
    var wd = 0, we = 0;
    for (var d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
      var g = d.getDay(); // 0 Sun, 5 Fri, 6 Sat
      if (g === 0 || g === 5 || g === 6) we++; else wd++;
    }
    return { wd: wd, we: we, days: wd + we, total: wd * current.weekday + we * current.weekend };
  }

  function renderSummary() {
    var box = $("bkSummary"), r = calc();
    if (!r) { box.innerHTML = '<span class="text-cocoa-muted">Select your dates to see the total here.</span>'; return null; }
    var lines = "";
    if (r.wd) lines += '<div class="d-flex justify-content-between"><span>' + r.wd + " weekday × " + rs(current.weekday) + "</span><span>" + rs(r.wd * current.weekday) + "</span></div>";
    if (r.we) lines += '<div class="d-flex justify-content-between"><span>' + r.we + " weekend × " + rs(current.weekend) + "</span><span>" + rs(r.we * current.weekend) + "</span></div>";
    box.innerHTML = lines +
      '<hr class="my-2"><div class="d-flex justify-content-between fw-bold"><span>Total (' + r.days + (r.days === 1 ? " day)" : " days)") + "</span><span>" + rs(r.total) + "</span></div>";
    return r;
  }

  function luhn(num) {
    var sum = 0, alt = false;
    for (var i = num.length - 1; i >= 0; i--) {
      var n = +num.charAt(i);
      if (alt) { n *= 2; if (n > 9) n -= 9; }
      sum += n; alt = !alt;
    }
    return sum % 10 === 0;
  }

  function setValid(el, ok) {
    el.classList.toggle("is-invalid", !ok);
    el.classList.toggle("is-valid", ok);
    return ok;
  }

  function validate() {
    var r = calc();
    var ok = true;
    ok = setValid($("bkIn"), !!$("bkIn").value) && ok;
    ok = setValid($("bkOut"), !!r) && ok;
    ok = setValid($("bkName"), $("bkName").value.trim().length >= 2) && ok;
    ok = setValid($("bkEmail"), /^[a-z0-9._%+-]+@gmail\.com$/i.test($("bkEmail").value.trim())) && ok;
    var digits = $("bkCard").value.replace(/\s/g, "");
    ok = setValid($("bkCard"), /^\d{13,19}$/.test(digits) && luhn(digits)) && ok;
    var m = /^(\d{2})\/(\d{2})$/.exec($("bkExp").value), expOk = false;
    if (m) {
      var mm = +m[1], yy = 2000 + +m[2], now = new Date();
      expOk = mm >= 1 && mm <= 12 && (yy > now.getFullYear() || (yy === now.getFullYear() && mm >= now.getMonth() + 1));
    }
    ok = setValid($("bkExp"), expOk) && ok;
    ok = setValid($("bkCvv"), /^\d{3,4}$/.test($("bkCvv").value)) && ok;
    return ok ? r : null;
  }

  function openFor(card) {
    var boxes = card.querySelectorAll(".price-box strong");
    current = {
      name: card.querySelector("h3").textContent.trim(),
      img: card.querySelector(".hut-img img").getAttribute("src"),
      weekday: num(boxes[0].textContent),
      weekend: num(boxes[1] ? boxes[1].textContent : boxes[0].textContent)
    };
    $("bkHutName").textContent = current.name;
    $("bkHutImg").src = current.img;
    $("bkHutImg").alt = current.name;
    $("bkWeekdayRate").textContent = rs(current.weekday);
    $("bkWeekendRate").textContent = rs(current.weekend);

    var f = $("bookingForm");
    f.reset();
    f.querySelectorAll(".is-valid,.is-invalid").forEach(function (e) { e.classList.remove("is-valid", "is-invalid"); });
    f.classList.remove("d-none");
    $("bkSuccess").classList.add("d-none");

    var today = new Date(), tomorrow = new Date(); tomorrow.setDate(today.getDate() + 1);
    $("bkIn").min = iso(today);
    $("bkOut").min = iso(tomorrow);
    renderSummary();
    modalInstance.show();
  }

  function init() {
    var buttons = document.querySelectorAll('.hut-card a[href="contact.html"].btn-coral-primary');
    if (!buttons.length || !window.bootstrap) return;

    document.body.insertAdjacentHTML("beforeend", MODAL_HTML);
    modalInstance = new bootstrap.Modal($("bookingModal"));

    buttons.forEach(function (a) {
      a.setAttribute("href", "#");
      a.addEventListener("click", function (e) {
        e.preventDefault();
        openFor(a.closest(".hut-card"));
      });
    });

    $("bkIn").addEventListener("change", function () {
      var v = $("bkIn").value;
      if (v) {
        var next = parseISO(v); next.setDate(next.getDate() + 1);
        $("bkOut").min = iso(next);
        if (!$("bkOut").value || parseISO($("bkOut").value) <= parseISO(v)) $("bkOut").value = iso(next);
      }
      renderSummary();
    });
    $("bkOut").addEventListener("change", renderSummary);

    $("bkCard").addEventListener("input", function (e) {
      var d = e.target.value.replace(/\D/g, "").slice(0, 19);
      e.target.value = d.replace(/(.{4})/g, "$1 ").trim();
    });
    $("bkExp").addEventListener("input", function (e) {
      var d = e.target.value.replace(/\D/g, "").slice(0, 4);
      e.target.value = d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
    });
    $("bkCvv").addEventListener("input", function (e) { e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4); });

    $("bookingForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var r = validate();
      if (!r) return;
      var last4 = $("bkCard").value.replace(/\s/g, "").slice(-4);
      $("bkSuccessMsg").innerHTML =
        "<strong>" + current.name + "</strong><br>" + $("bkIn").value + " → " + $("bkOut").value +
        " (" + r.days + (r.days === 1 ? " day" : " days") + ")<br>Total: <strong>" + rs(r.total) +
        "</strong><br>Card ending " + last4 + "<br>A confirmation will be sent to " + $("bkEmail").value.trim() + ".";
      // Wipe sensitive fields immediately.
      $("bkCard").value = ""; $("bkCvv").value = ""; $("bkExp").value = "";
      $("bookingForm").classList.add("d-none");
      $("bkSuccess").classList.remove("d-none");
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
