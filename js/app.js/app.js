/*
========================================
JANGIRA E MITRA
MAIN JAVASCRIPT
========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       MOBILE MENU
    ================================= */

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("open");

            const isOpen = mobileMenu.classList.contains("open");

            menuBtn.textContent = isOpen ? "✕" : "☰";

        });


        // Mobile menu link click होने पर menu बंद करें
        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuBtn.textContent = "☰";

            });

        });

    }


    /* ================================
       HOME PAGE SEARCH
    ================================= */

    const searchInput = document.getElementById("serviceSearch");
    const searchBtn = document.getElementById("searchBtn");
    const searchResults = document.getElementById("searchResults");


    if (searchInput && searchResults) {

        function showSearchResults() {

            const query = searchInput.value.trim();

            searchResults.innerHTML = "";


            if (!query) {

                searchResults.style.display = "none";

                return;

            }


            const results = searchServices(query);


            if (results.length === 0) {

                searchResults.innerHTML = `
                    <div style="
                        padding:15px;
                        color:#707070;
                        font-size:13px;
                    ">
                        कोई सेवा नहीं मिली।
                    </div>
                `;

                searchResults.style.display = "block";

                return;

            }


            results.slice(0, 7).forEach(service => {

                const link = document.createElement("a");

                link.href =
                    `documents.html?service=${encodeURIComponent(service.id)}`;

                link.innerHTML = `
                    <strong>${service.name}</strong>
                    <small style="
                        display:block;
                        margin-top:3px;
                        color:#777;
                    ">
                        ${service.englishName}
                    </small>
                `;

                searchResults.appendChild(link);

            });


            searchResults.style.display = "block";

        }


        searchInput.addEventListener(
            "input",
            showSearchResults
        );


        searchBtn?.addEventListener("click", () => {

            const query = searchInput.value.trim();

            if (!query) {

                searchInput.focus();

                return;

            }


            const results = searchServices(query);


            if (results.length > 0) {

                window.location.href =
                    `documents.html?service=${encodeURIComponent(results[0].id)}`;

            } else {

                showSearchResults();

            }

        });


        searchInput.addEventListener("keydown", event => {

            if (event.key === "Enter") {

                event.preventDefault();

                searchBtn?.click();

            }

        });


        // Search box के बाहर click करने पर results hide
        document.addEventListener("click", event => {

            if (
                !event.target.closest(".hero-search")
            ) {

                searchResults.style.display = "none";

            }

        });

    }


    /* ================================
       CURRENT YEAR
    ================================= */

    document.querySelectorAll("[data-current-year]")
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });


    /* ================================
       EXTERNAL LINKS
    ================================= */

    document.querySelectorAll(
        'a[data-external="true"]'
    ).forEach(link => {

        link.target = "_blank";

        link.rel = "noopener noreferrer";

    });

});
