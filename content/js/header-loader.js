(function () {
  var HEADER_TEMPLATE = [
    '<nav>',
    '  <div class="nav-inner">',
    '    <a class="logo" data-nav-href="index.html" aria-label="Về trang chủ SID"><div class="logo-mark"></div>SID</a>',
    '    <ul class="nav-links">',
    '      <li><a data-nav-href="index.html#problem">Vấn đề</a></li>',
    '      <li><a data-nav-href="index.html#solution">Giải pháp</a></li>',
    '      <li><a data-nav-href="index.html#path">Chương trình</a></li>',
    '      <li><a data-nav-href="libs/index.html">Thư viện</a></li>',
    '      <li><a data-nav-href="demo.html">Demo</a></li>',
    '      <li><a data-nav-href="index.html#pricing">Học phí</a></li>',
    '      <li><a data-nav-href="index.html#trainer">Giảng viên</a></li>',
    '    </ul>',
    '    <button class="nav-cta" type="button" data-nav-cta>Về Trang Chủ</button>',
    '  </div>',
    '</nav>'
  ].join('');

  function withTrailingSlash(path) {
    if (!path) {
      return "";
    }
    return path.endsWith("/") ? path : path + "/";
  }

  function setNavLinks(container, basePath) {
    var links = container.querySelectorAll("[data-nav-href]");
    links.forEach(function (link) {
      var target = link.getAttribute("data-nav-href");
      if (!target) {
        return;
      }
      link.setAttribute("href", basePath + target);
    });
  }

  function setNavCta(container, basePath, ctaMode) {
    var cta = container.querySelector("[data-nav-cta]");
    if (!cta) {
      return;
    }

    if (ctaMode === "register") {
      cta.textContent = "Đăng ký ngay";
      cta.addEventListener("click", function () {
        if (typeof window.openModal === "function") {
          window.openModal("");
          return;
        }
        window.location.href = basePath + "index.html#pricing";
      });
      return;
    }

    if (ctaMode === "curriculum") {
      cta.textContent = "Xem lộ trình học";
      cta.addEventListener("click", function () {
        window.location.href = basePath + "sid-curriculumn.html";
      });
      return;
    }

    cta.textContent = "Về Trang Chủ";
    cta.addEventListener("click", function () {
      window.location.href = basePath + "index.html";
    });
  }

  function renderHeader(node) {
    var rawBase = node.getAttribute("base") || node.getAttribute("data-header-base") || "";
    var ctaMode = node.getAttribute("cta") || node.getAttribute("data-header-cta") || "home";
    var basePath = withTrailingSlash(rawBase);

    node.innerHTML = HEADER_TEMPLATE;
    setNavLinks(node, basePath);
    setNavCta(node, basePath, ctaMode);
  }

  if (!customElements.get("site-header")) {
    customElements.define(
      "site-header",
      class SiteHeader extends HTMLElement {
        connectedCallback() {
          if (this.dataset.rendered === "1") {
            return;
          }
          this.dataset.rendered = "1";
          renderHeader(this);
        }
      }
    );
  }

  // Backward compatible for old mount nodes.
  document.addEventListener("DOMContentLoaded", function () {
    var oldMounts = document.querySelectorAll("[data-site-header]");
    oldMounts.forEach(function (node) {
      if (node.tagName.toLowerCase() === "site-header") {
        return;
      }
      renderHeader(node);
    });
  });
})();
