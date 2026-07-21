/* ============================================================
   apply-content.js  —  ENGINE. DO NOT EDIT.
   This reads the files in /content and fills them into the page.
   To change what the site says, edit the files in /content,
   NOT this file.
   ============================================================ */
(function () {
  "use strict";
  var S = window.SITE || {}, NAV = window.NAV || [], P = window.PROJECTS || [], F = window.FEATURED || [];

  /* email (every mailto link on the page) */
  if (S.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
      a.setAttribute("href", "mailto:" + S.email);
      if (/@/.test(a.textContent)) a.textContent = S.email;
    });
  }

  /* name + copyright (footer meta) */
  if (S.name) {
    document.querySelectorAll(".footer-meta span").forEach(function (sp) {
      if (/\u00a9/.test(sp.textContent)) sp.textContent = S.name.toUpperCase() + " \u00a9 " + (S.copyrightYear || "");
    });
  }

  /* social links (footer) */
  var soc = document.querySelector(".footer-social");
  if (soc && S.social && S.social.length) {
    soc.innerHTML = "";
    S.social.forEach(function (l) {
      var a = document.createElement("a");
      a.setAttribute("href", l.url);
      a.textContent = l.label;
      if (/^https?:/.test(l.url)) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); }
      soc.appendChild(a);
    });
  }

  /* footer navigation cards (fill the five existing cards) */
  var navLinks = document.querySelectorAll(".footer-nav a");
  if (navLinks.length && NAV.length) {
    navLinks.forEach(function (a, i) {
      var n = NAV[i]; if (!n) return;
      a.setAttribute("href", n.href);
      if (n.work) a.setAttribute("data-work", "");
      var id = a.querySelector(".fn-id"), nm = a.querySelector(".fn-name"), ds = a.querySelector(".fn-desc");
      if (id) id.textContent = n.id;
      if (nm) nm.textContent = n.name;
      if (ds) ds.textContent = n.desc;
    });
  }

  /* homepage featured folders (fill the three existing folders) */
  if (document.getElementById("deck") && P.length && F.length) {
    var bySlug = {}; P.forEach(function (p) { bySlug[p.slug] = p; });
    F.slice(0, 4).forEach(function (slug, i) {
      var p = bySlug[slug], f = document.getElementById("fold" + (i + 1));
      if (!p || !f) return;
      f.setAttribute("data-href", "project.html?p=" + slug);
      f.setAttribute("data-pj", slug);
      var tab = f.querySelector(".folder-tab");
      if (tab && tab.lastChild) tab.lastChild.nodeValue = "PROJECT_0" + (i + 1) + " \u00b7 " + (p.tag || "");
      var nm = f.querySelector(".fi-name"); if (nm) nm.textContent = p.title;
      var mt = f.querySelector(".fi-meta"); if (mt) mt.innerHTML = (p.discipline || "") + "<br>" + (p.year || "");
      f.setAttribute("aria-label", "Open case study: " + p.title + ", PROJECT_0" + (i + 1) + " \u00b7 " + (p.tag || ""));
      var pv = f.querySelector(".folder-preview"); if (pv) pv.className = "folder-preview " + (p.thumbnail || "");
    });
  }
})();
