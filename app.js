/* EAN RTC 2026 exam prep — cheat sheet + quiz. Data comes from data.js (CHEAT, QUESTIONS). */
(function () {
  var view = document.getElementById("view");
  var tabs = document.querySelectorAll(".tab");
  var state = { tab: "cheat", quiz: null, search: "" };

  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      state.tab = t.dataset.tab;
      tabs.forEach(function (x) { x.classList.toggle("active", x === t); });
      render();
      window.scrollTo(0, 0);
    });
  });

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- cheat sheet ---------- */
  function renderCheat() {
    var q = state.search.trim().toLowerCase();
    var html = '<input class="search" type="search" placeholder="Search… (e.g. MOG, kappa, NfL, LGI1)" value="' + esc(state.search) + '">';
    CHEAT.forEach(function (day) {
      var topics = day.topics.filter(function (t) {
        if (!q) return true;
        return (t.title + " " + t.html).toLowerCase().indexOf(q) !== -1;
      });
      if (!topics.length) return;
      html += '<section class="day-block"><div class="day-title">' + day.day + "</div>";
      topics.forEach(function (t, i) {
        var open = q ? " open" : "";
        html += '<details class="topic"' + open + "><summary>" + t.title + '</summary><div class="topic-body">' + t.html + "</div></details>";
      });
      html += "</section>";
    });
    view.innerHTML = html;
    var input = view.querySelector(".search");
    input.addEventListener("input", function () {
      state.search = input.value;
      var pos = input.selectionStart;
      renderCheat();
      var ni = view.querySelector(".search");
      ni.focus();
      ni.setSelectionRange(pos, pos);
    });
  }

  /* ---------- quiz ---------- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function startQuiz(cat) {
    var pool = cat === "all" ? QUESTIONS : QUESTIONS.filter(function (x) { return x.cat === cat; });
    state.quiz = { qs: shuffle(pool), idx: 0, score: 0, answered: false };
    render();
    window.scrollTo(0, 0);
  }

  function renderQuizSetup() {
    var cats = [
      { id: "all", label: "🎲 All questions (mixed)" },
      { id: "ms", label: "🧠 Day 1 — MS: biomarkers & imaging" },
      { id: "nmosd", label: "👁️ Day 2 — NMOSD, MOGAD & AQP4" },
      { id: "ae", label: "🔬 Day 3 — Autoimmune & paraneoplastic encephalitis" }
    ];
    var best = localStorage.getItem("ean-best");
    var html = '<div class="quiz-setup"><p class="intro">Pick a question set. Instant feedback after each answer, with an explanation.' +
      (best ? " Best score: <b>" + esc(best) + "</b>" : "") + "</p>";
    cats.forEach(function (c) {
      var n = c.id === "all" ? QUESTIONS.length : QUESTIONS.filter(function (x) { return x.cat === c.id; }).length;
      html += '<button class="set-btn" data-cat="' + c.id + '">' + c.label + '<span class="count">' + n + " q</span></button>";
    });
    html += "</div>";
    view.innerHTML = html;
    view.querySelectorAll(".set-btn").forEach(function (b) {
      b.addEventListener("click", function () { startQuiz(b.dataset.cat); });
    });
  }

  function renderQuestion() {
    var qz = state.quiz;
    if (qz.idx >= qz.qs.length) return renderResult();
    var q = qz.qs[qz.idx];
    var catNames = { ms: "MS", nmosd: "NMOSD / MOGAD", ae: "Encephalitis" };
    var html =
      '<div class="quiz-head"><span>Question ' + (qz.idx + 1) + " / " + qz.qs.length +
      '</span><span class="score">Score: ' + qz.score + "</span></div>" +
      '<div class="progressbar"><div style="width:' + (100 * qz.idx / qz.qs.length) + '%"></div></div>' +
      '<div class="qcard"><span class="qtag">' + (catNames[q.cat] || "") + "</span>" +
      '<p class="qtext">' + q.q + '</p><div id="opts">';
    q.opts.forEach(function (o, i) {
      html += '<button class="opt" data-i="' + i + '">' + String.fromCharCode(65 + i) + ". " + o + "</button>";
    });
    html += '</div><div id="fb"></div></div><button class="ghost-btn" id="quit">End quiz</button>';
    view.innerHTML = html;

    view.querySelectorAll(".opt").forEach(function (b) {
      b.addEventListener("click", function () { answer(parseInt(b.dataset.i, 10)); });
    });
    document.getElementById("quit").addEventListener("click", function () {
      state.quiz = null; render();
    });
  }

  function answer(i) {
    var qz = state.quiz;
    if (qz.answered) return;
    qz.answered = true;
    var q = qz.qs[qz.idx];
    var ok = i === q.a;
    if (ok) qz.score++;
    view.querySelectorAll(".opt").forEach(function (b, bi) {
      b.disabled = true;
      if (bi === q.a) b.classList.add("correct");
      else if (bi === i) b.classList.add("wrong");
    });
    var fb = document.getElementById("fb");
    fb.innerHTML =
      '<div class="explain"><div class="verdict ' + (ok ? "ok" : "no") + '">' +
      (ok ? "✓ Correct" : "✗ Incorrect — answer: " + String.fromCharCode(65 + q.a)) +
      "</div>" + q.ex + "</div>" +
      '<button class="next-btn" id="next">' + (qz.idx + 1 >= qz.qs.length ? "See result" : "Next question") + "</button>";
    document.querySelector(".quiz-head .score").textContent = "Score: " + qz.score;
    document.getElementById("next").addEventListener("click", function () {
      qz.idx++; qz.answered = false; render(); window.scrollTo(0, 0);
    });
  }

  function renderResult() {
    var qz = state.quiz;
    var pct = Math.round(100 * qz.score / qz.qs.length);
    var emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚";
    var prev = parseInt(localStorage.getItem("ean-best-pct") || "0", 10);
    if (pct > prev) {
      localStorage.setItem("ean-best-pct", String(pct));
      localStorage.setItem("ean-best", qz.score + "/" + qz.qs.length + " (" + pct + "%)");
    }
    view.innerHTML =
      '<div class="result"><div class="big">' + emoji + "</div>" +
      "<h2>" + qz.score + " / " + qz.qs.length + " (" + pct + "%)</h2>" +
      "<p>" + (pct >= 80 ? "Excellent — you are ready." : pct >= 60 ? "Good — review the missed topics in the cheat sheet." : "Go over the cheat sheet once more, then retry.") + "</p>" +
      '<button class="primary-btn" id="again">Try again</button>' +
      '<button class="ghost-btn" id="back">Choose another set</button></div>';
    document.getElementById("again").addEventListener("click", function () {
      state.quiz = { qs: shuffle(qz.qs), idx: 0, score: 0, answered: false }; render();
    });
    document.getElementById("back").addEventListener("click", function () {
      state.quiz = null; render();
    });
  }

  function render() {
    if (state.tab === "cheat") renderCheat();
    else if (!state.quiz) renderQuizSetup();
    else renderQuestion();
  }

  render();
})();
