/* =========================================
   JANGIRA E MITRA
   APP.JS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("open");

        });

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("open");

            });

        });

    }


    /* =========================================
       CURRENT PAGE
    ========================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();

    document
        .querySelectorAll(".desktop-nav a")
        .forEach(function (link) {

            const linkPage =
                link.getAttribute("href");

            if (linkPage === currentPage) {

                link.classList.add("active");

            }

        });


    /* =========================================
       GLOBAL SERVICE SEARCH
    ========================================= */

    const searchInput =
        document.getElementById("serviceSearch");

    const searchResults =
        document.getElementById("searchResults");


    if (searchInput && searchResults && typeof services !== "undefined") {

        searchInput.addEventListener("input", function () {

            const query =
                searchInput.value
                    .toLowerCase()
                    .trim();


            searchResults.innerHTML = "";


            if (!query) {

                searchResults.style.display = "none";

                return;

            }


            const results =
                services.filter(function (service) {

                    const searchableText = [

                        service.name,

                        service.englishName,

                        service.category,

                        ...(service.keywords || [])

                    ]
                        .join(" ")
                        .toLowerCase();


                    return searchableText.includes(query);

                });


            if (!results.length) {

                searchResults.innerHTML = `
                    <div class="search-no-result">
                        कोई सेवा नहीं मिली
                    </div>
                `;

                searchResults.style.display = "block";

                return;

            }


            results.forEach(function (service) {

                const item =
                    document.createElement("a");

                item.href =
                    "documents.html?service=" +
                    encodeURIComponent(service.id);

                item.className =
                    "search-result-item";


                item.innerHTML = `

                    <strong>
                        ${escapeHTML(service.name)}
                    </strong>

                    <small>
                        ${escapeHTML(service.englishName)}
                    </small>

                `;


                searchResults.appendChild(item);

            });


            searchResults.style.display = "block";

        });


        /* Close search when clicking outside */

        document.addEventListener("click", function (event) {

            if (
                !searchInput.contains(event.target) &&
                !searchResults.contains(event.target)
            ) {

                searchResults.style.display = "none";

            }

        });

    }


    /* =========================================
       ESCAPE HTML
    ========================================= */

    window.escapeHTML = function (text) {

        if (text === null || text === undefined) {
            return "";
        }

        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    };


    /* =========================================
       SERVICE URL HELPER
    ========================================= */

    window.openService =
        function (serviceId) {

            if (!serviceId) {
                return;
            }

            window.location.href =
                "documents.html?service=" +
                encodeURIComponent(serviceId);

        };


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener("click", function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(targetId);

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            });

        });

});
