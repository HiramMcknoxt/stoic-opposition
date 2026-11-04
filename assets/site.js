/* The Stoic Opposition — prototype tools.
   Everything runs locally in the browser. Nothing is sent or stored. */

(function () {
  "use strict";

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------------- Quorum calculator ---------------- */

  function quorumFor(rule, total, vacant) {
    if (rule === "seats") {
      return Math.floor(total / 2) + 1;
    }
    if (rule === "members") {
      var filled = total - vacant;
      return Math.floor(filled / 2) + 1;
    }
    /* "third" — one-third of seats, rounded up */
    return Math.ceil(total / 3);
  }

  var qForm = document.getElementById("quorum-form");
  if (qForm) {
    qForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var sizeEl = document.getElementById("qc-size");
      var vacantEl = document.getElementById("qc-vacant");
      var ruleEl = document.getElementById("qc-rule");
      var heldEl = document.getElementById("qc-held");
      var errEl = document.getElementById("qc-error");
      var outEl = document.getElementById("qc-output");

      var total = parseInt(sizeEl.value, 10);
      var vacant = vacantEl.value === "" ? 0 : parseInt(vacantEl.value, 10);
      var held = parseInt(heldEl.value, 10);
      var rule = ruleEl.value;

      function fail(msg) {
        errEl.textContent = msg;
        errEl.hidden = false;
        outEl.innerHTML = "";
      }

      if (isNaN(total) || total < 1) {
        fail("Enter the committee size — the total number of seats, at least 1.");
        return;
      }
      if (isNaN(vacant) || vacant < 0 || vacant >= total) {
        fail("Vacant seats must be 0 or more, and fewer than the total seats.");
        return;
      }
      if (isNaN(held) || held < 0) {
        fail("Enter how many seats your group holds (0 is a fine answer).");
        return;
      }
      if (held > total) {
        fail("Your group cannot hold more seats than the committee has.");
        return;
      }

      errEl.hidden = true;
      var quorum = quorumFor(rule, total, vacant);
      var needed = Math.max(0, quorum - held);
      var ruleLabel = ruleEl.options[ruleEl.selectedIndex].text;

      var verdict;
      if (needed === 0) {
        verdict =
          "YOUR GROUP MEETS QUORUM ON ITS OWN. With proper notice, you can " +
          "hold a valid meeting and pass motions. That is the whole strategy " +
          "in one line of arithmetic.";
      } else {
        verdict =
          "YOU NEED " + needed + " MORE " + (needed === 1 ? "PERSON" : "PEOPLE") +
          " IN THE ROOM. Not a movement. Not a mailing list. " + needed +
          " more " + (needed === 1 ? "human being" : "human beings") +
          " willing to sit in a folding chair.";
      }

      outEl.innerHTML =
        '<p class="r-head">QUORUM WORKSHEET</p>' +
        "<p>Committee size: " + total + " seats<br>" +
        "Vacant seats: " + vacant + "<br>" +
        "Rule: " + escapeHtml(ruleLabel) + "<br>" +
        "Quorum: " + quorum + " members present<br>" +
        "Your group holds: " + held + " seats</p>" +
        '<p class="r-result">' + verdict + "</p>";
    });
  }

  /* ---------------- First-meeting packet builder ---------------- */

  var pForm = document.getElementById("packet-form");
  if (pForm) {
    var pOut = document.getElementById("packet-output");
    var pPrint = document.getElementById("packet-print");

    pForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var name = document.getElementById("pk-name").value.trim() || "Your name";
      var state = document.getElementById("pk-state").value.trim() || "Your state";
      var county = document.getElementById("pk-county").value.trim() || "Your county";
      var party = document.getElementById("pk-party").value;

      var steps = [
        "Verify your voter registration and precinct number — the seat you claim is tied to where you live.",
        "Find the " + county + " County " + party + " committee: meeting time, meeting place, and who the chair and secretary are.",
        "Get the roster and the bylaws. Ask politely; ask in writing if you have to. Both documents are the map of the room.",
        "Count the chairs: total seats, filled seats, vacant seats. Run the quorum math above with the real numbers.",
        "Attend one meeting as an observer. Take notes on the observation sheet (see the Print page). Say little; learn the procedure.",
        "Introduce yourself to the chair and secretary afterward. Ask what it takes to fill a vacant seat in your precinct.",
        "File whatever form the bylaws and state law require to claim the seat. Keep a copy of everything.",
        "Come back with the quorum: bring the number of people the math says you need, and put the clean-money rule under New Business."
      ];

      var items = "";
      for (var i = 0; i < steps.length; i++) {
        items += "<li>" + escapeHtml(steps[i]) + "</li>";
      }

      pOut.innerHTML =
        '<p class="r-head">FIRST-MEETING PACKET</p>' +
        "<p>Prepared for: " + escapeHtml(name) + "<br>" +
        "Home ground: " + escapeHtml(county) + " County, " + escapeHtml(state) + "<br>" +
        "Operational home: " + escapeHtml(party) + " committee</p>" +
        "<ol>" + items + "</ol>" +
        '<p class="r-result">BRING: this packet, the bylaws, the roster, a pen, and one more person than feels necessary.</p>';

      if (pPrint) {
        pPrint.hidden = false;
      }
    });

    if (pPrint) {
      pPrint.addEventListener("click", function () {
        document.body.classList.add("printing-packet");
        window.print();
      });
      window.addEventListener("afterprint", function () {
        document.body.classList.remove("printing-packet");
      });
    }
  }
})();
