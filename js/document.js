/* =========================================
   JANGIRA E MITRA
   DOCUMENT.JS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const serviceSelect =
        document.getElementById("serviceSelect");

    const serviceList =
        document.getElementById("serviceList");

    const documentSearch =
        document.getElementById("documentSearch");

    const documentContent =
        document.getElementById("documentContent");


    /* =========================================
       CHECK SERVICES DATA
    ========================================= */

    if (typeof services === "undefined") {

        if (documentContent) {

            documentContent.innerHTML = `
                <div class="document-card empty-state">
                    <h2>Services Data नहीं मिला</h2>
                    <p>
                        services.js सही folder में है या नहीं,
                        कृपया check करें।
                    </p>
                </div>
            `;

        }

        return;
    }


    /* =========================================
       ESCAPE HTML
    ========================================= */

    function safeHTML(text) {

        if (
            typeof window.escapeHTML === "function"
        ) {
            return window.escapeHTML(text);
        }

        return String(text || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================================
       LOAD SERVICES INTO DROPDOWN
    ========================================= */

    function loadDropdown() {

        if (!serviceSelect) {
            return;
        }

        serviceSelect.innerHTML = `
            <option value="">
                -- सेवा चुनें --
            </option>
        `;


        services.forEach(function (service) {

            const option =
                document.createElement("option");

            option.value = service.id;

            option.textContent =
                service.name;

            serviceSelect.appendChild(option);

        });

    }


    /* =========================================
       SERVICE LIST
    ========================================= */

    function renderServiceList(serviceArray) {

        if (!serviceList) {
            return;
        }

        serviceList.innerHTML = "";


        if (!serviceArray.length) {

            serviceList.innerHTML = `
                <div style="
                    padding:15px;
                    text-align:center;
                    color:#777;
                    font-size:13px;
                ">
                    कोई सेवा नहीं मिली
                </div>
            `;

            return;
        }


        serviceArray.forEach(function (service) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.dataset.id =
                service.id;

            button.textContent =
                service.name;


            button.addEventListener(
                "click",
                function () {

                    loadService(service.id);

                }
            );


            serviceList.appendChild(button);

        });


        updateActiveService();

    }


    /* =========================================
       ACTIVE SERVICE
    ========================================= */

    function updateActiveService() {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const currentId =
            params.get("service");


        document
            .querySelectorAll(
                "#serviceList button"
            )
            .forEach(function (button) {

                button.classList.toggle(
                    "active",
                    button.dataset.id === currentId
                );

            });

    }


    /* =========================================
       LOAD SERVICE
    ========================================= */

    function loadService(serviceId) {

        const service =
            services.find(function (item) {

                return item.id === serviceId;

            });


        if (!service) {

            showEmptyState(
                "सेवा नहीं मिली",
                "कृपया कोई दूसरी सेवा चुनें।"
            );

            return;

        }


        /* Update URL */

        const newUrl =
            "documents.html?service=" +
            encodeURIComponent(service.id);

        window.history.replaceState(
            {},
            "",
            newUrl
        );


        /* Update dropdown */

        if (serviceSelect) {

            serviceSelect.value =
                service.id;

        }


        /* Update active button */

        updateActiveService();


        /* =====================================
           DOCUMENTS
        ===================================== */

        let checklistHTML = "";


        if (
            service.documents &&
            service.documents.length
        ) {

            checklistHTML =
                service.documents
                    .map(function (documentName) {

                        return `
                            <li>

                                <span class="check-icon">
                                    ✓
                                </span>

                                <span>
                                    ${safeHTML(
                                        documentName
                                    )}
                                </span>

                            </li>
                        `;

                    })
                    .join("");

        } else {

            checklistHTML = `
                <li>

                    <span class="check-icon">
                        ✓
                    </span>

                    <span>
                        इस सेवा के लिए documents
                        उपलब्ध नहीं हैं।
                    </span>

                </li>
            `;

        }


        /* =====================================
           OPTIONAL SERVICES
        ===================================== */

        let extraServicesHTML = "";


        if (
            service.services &&
            service.services.length
        ) {

            extraServicesHTML = `

                <div class="checklist-title">
                    उपलब्ध सेवाएं
                </div>

                <ul class="checklist">

                    ${service.services
                        .map(function (item) {

                            return `
                                <li>

                                    <span class="check-icon">
                                        ✓
                                    </span>

                                    <span>
                                        ${safeHTML(item)}
                                    </span>

                                </li>
                            `;

                        })
                        .join("")}

                </ul>

            `;

        }


        /* =====================================
           ONLINE BUTTON
        ===================================== */

        let onlineButton = "";


        if (
            service.onlineAvailable &&
            service.onlineUrl
        ) {

            onlineButton = `

                <a
                    href="${safeHTML(service.onlineUrl)}"
                    class="btn btn-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Online Apply
                </a>

            `;

        }


        /* =====================================
           OFFLINE FORM BUTTON
        ===================================== */

        let formButton = "";


        if (
            service.offlineFormAvailable &&
            service.formUrl
        ) {

            formButton = `

                <a
                    href="${safeHTML(service.formUrl)}"
                    class="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Offline Form
                </a>

            `;

        }


        /* =====================================
           PRINT BUTTON
        ===================================== */

        const printButton = `

            <button
                type="button"
                class="btn btn-dark"
                onclick="window.print()"
            >
                🖨 Print Checklist
            </button>

        `;


        /* =====================================
           MAIN CONTENT
        ===================================== */

        documentContent.innerHTML = `

            <div class="document-card">

                <div class="document-header">

                    <span class="document-category">
                        ${safeHTML(
                            service.category || "SERVICE"
                        ).toUpperCase()}
                    </span>

                    <h2>
                        ${safeHTML(service.name)}
                    </h2>

                    <div class="english-name">
                        ${safeHTML(
                            service.englishName || ""
                        )}
                    </div>

                    <p class="document-description">
                        ${safeHTML(
                            service.description || ""
                        )}
                    </p>

                </div>


                <h3 class="checklist-title">
                    इस सेवा के लिए आवश्यक दस्तावेज
                </h3>


                <ul class="checklist">

                    ${checklistHTML}

                </ul>


                ${extraServicesHTML}


                ${
                    service.note
                    ? `
                        <div class="document-note">

                            <strong>
                                जरूरी सूचना:
                            </strong>

                            ${safeHTML(
                                service.note
                            )}

                        </div>
                    `
                    : ""
                }


                <div class="document-actions">

                    ${onlineButton}

                    ${formButton}

                    ${printButton}

                </div>

            </div>

        `;


        /* Scroll to document on mobile */

        if (
            window.innerWidth <= 800 &&
            documentContent
        ) {

            setTimeout(function () {

                documentContent.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }

    }


    /* =========================================
       EMPTY STATE
    ========================================= */

    function showEmptyState(title, message) {

        if (!documentContent) {
            return;
        }

        documentContent.innerHTML = `

            <div class="document-card empty-state">

                <h2>
                    ${safeHTML(title)}
                </h2>

                <p>
                    ${safeHTML(message)}
                </p>

            </div>

        `;

    }


    /* =========================================
       DROPDOWN CHANGE
    ========================================= */

    if (serviceSelect) {

        serviceSelect.addEventListener(
            "change",
            function () {

                const id =
                    serviceSelect.value;


                if (!id) {

                    showEmptyState(
                        "सेवा चुनें",
                        "बाईं तरफ से कोई service select करें और उसके required documents देखें।"
                    );

                    return;

                }


                loadService(id);

            }
        );

    }


    /* =========================================
       SEARCH
    ========================================= */

    if (documentSearch) {

        documentSearch.addEventListener(
            "input",
            function () {

                const query =
                    documentSearch.value
                        .toLowerCase()
                        .trim();


                if (!query) {

                    renderServiceList(
                        services
                    );

                    return;

                }


                const filtered =
                    services.filter(
                        function (service) {

                            const searchableText = [

                                service.name,

                                service.englishName,

                                service.category,

                                ...(service.keywords || [])

                            ]
                                .join(" ")
                                .toLowerCase();


                            return searchableText.includes(
                                query
                            );

                        }
                    );


                renderServiceList(
                    filtered
                );

            }
        );

    }


    /* =========================================
       INITIALIZE
    ========================================= */

    loadDropdown();

    renderServiceList(services);


    /* =========================================
       LOAD SERVICE FROM URL
       Example:
       documents.html?service=caste
    ========================================= */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const requestedService =
        params.get("service");


    if (requestedService) {

        loadService(
            requestedService
        );

    }

});
