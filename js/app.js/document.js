/*
========================================
JANGIRA E MITRA
DOCUMENTS PAGE
========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    const serviceSelect =
        document.getElementById("serviceSelect");

    const serviceList =
        document.getElementById("serviceList");

    const documentContent =
        document.getElementById("documentContent");

    const documentSearch =
        document.getElementById("documentSearch");


    /*
    ========================================
    CHECK REQUIRED ELEMENTS
    ========================================
    */

    if (
        !serviceSelect ||
        !serviceList ||
        !documentContent
    ) {
        console.error(
            "Documents page elements not found."
        );

        return;
    }


    /*
    ========================================
    ESCAPE HTML
    ========================================
    */

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /*
    ========================================
    LOAD SERVICE
    ========================================
    */

    function loadService(serviceId) {

        const service =
            getServiceById(serviceId);


        if (!service) {

            documentContent.innerHTML = `

                <div class="document-card empty-state">

                    <h2>
                        Service नहीं मिली
                    </h2>

                    <p>
                        कृपया नीचे दी गई list में से
                        कोई दूसरी service चुनें।
                    </p>

                </div>

            `;

            return;
        }


        /*
        ====================================
        CHECKLIST
        ====================================
        */

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
                                    ${escapeHTML(
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
                        इस सेवा के लिए documents की जानकारी
                        अभी उपलब्ध नहीं है।
                    </span>

                </li>

            `;

        }


        /*
        ====================================
        ONLINE BUTTON
        ====================================
        */

        let onlineButton = "";


        if (
            service.onlineAvailable &&
            service.onlineUrl
        ) {

            onlineButton = `

                <a
                    href="${escapeHTML(
                        service.onlineUrl
                    )}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary"
                >
                    Online Apply
                </a>

            `;

        }


        /*
        ====================================
        OFFLINE FORM BUTTON
        ====================================
        */

        let formButton = "";


        if (
            service.offlineFormAvailable &&
            service.formUrl
        ) {

            formButton = `

                <a
                    href="${escapeHTML(
                        service.formUrl
                    )}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline"
                >
                    Download Form
                </a>

            `;

        }


        /*
        ====================================
        DOCUMENT CONTENT
        ====================================
        */

        documentContent.innerHTML = `

            <div class="document-card">

                <div class="document-header">

                    <span class="document-category">

                        ${escapeHTML(
                            service.category ||
                            "SERVICE"
                        ).toUpperCase()}

                    </span>


                    <h2>

                        ${escapeHTML(
                            service.name
                        )}

                    </h2>


                    <div class="english-name">

                        ${escapeHTML(
                            service.englishName || ""
                        )}

                    </div>


                    <p class="document-description">

                        ${escapeHTML(
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


                ${
                    service.note
                    ? `

                        <div class="document-note">

                            <strong>
                                जरूरी सूचना:
                            </strong>

                            ${escapeHTML(
                                service.note
                            )}

                        </div>

                    `
                    : ""
                }


                <div class="document-actions">

                    <button
                        type="button"
                        class="btn btn-dark"
                        id="printChecklistBtn"
                    >
                        Print Checklist
                    </button>


                    ${onlineButton}


                    ${formButton}

                </div>

            </div>

        `;


        /*
        ====================================
        DROPDOWN UPDATE
        ====================================
        */

        serviceSelect.value =
            service.id;


        /*
        ====================================
        ACTIVE LIST BUTTON
        ====================================
        */

        document
            .querySelectorAll(
                "#serviceList button"
            )
            .forEach(function (button) {

                button.classList.toggle(
                    "active",
                    button.dataset.id ===
                    service.id
                );

            });


        /*
        ====================================
        PRINT BUTTON
        ====================================
        */

        const printButton =
            document.getElementById(
                "printChecklistBtn"
            );


        if (printButton) {

            printButton.addEventListener(
                "click",
                function () {

                    window.print();

                }
            );

        }


        /*
        ====================================
        UPDATE URL
        ====================================
        */

        const url =
            new URL(
                window.location.href
            );


        url.searchParams.set(
            "service",
            service.id
        );


        window.history.replaceState(
            {},
            "",
            url
        );


        /*
        ====================================
        MOBILE SCROLL
        ====================================
        */

        if (
            window.innerWidth <= 800
        ) {

            setTimeout(function () {

                documentContent.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }

    }


    /*
    ========================================
    ADD SERVICES TO DROPDOWN
    ========================================
    */

    serviceSelect.innerHTML = `

        <option value="">
            -- सेवा चुनें --
        </option>

    `;


    services.forEach(function (service) {

        const option =
            document.createElement("option");


        option.value =
            service.id;


        option.textContent =
            service.name;


        serviceSelect.appendChild(
            option
        );

    });


    /*
    ========================================
    RENDER SERVICE LIST
    ========================================
    */

    function renderServiceList(
        serviceArray
    ) {

        serviceList.innerHTML = "";


        if (
            !serviceArray ||
            serviceArray.length === 0
        ) {

            serviceList.innerHTML = `

                <div
                    style="
                        padding:15px;
                        color:#777;
                        font-size:13px;
                        text-align:center;
                    "
                >
                    कोई service नहीं मिली।
                </div>

            `;

            return;

        }


        serviceArray.forEach(function (service) {

            const button =
                document.createElement(
                    "button"
                );


            button.type = "button";


            button.dataset.id =
                service.id;


            button.textContent =
                service.name;


            button.addEventListener(
                "click",
                function () {

                    loadService(
                        service.id
                    );

                }
            );


            serviceList.appendChild(
                button
            );

        });


        updateActiveService();

    }


    /*
    ========================================
    ACTIVE SERVICE
    ========================================
    */

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
                    button.dataset.id ===
                    currentId
                );

            });

    }


    /*
    ========================================
    SEARCH
    ========================================
    */

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
                    searchServices(query);


                renderServiceList(
                    filtered
                );

            }
        );

    }


    /*
    ========================================
    DROPDOWN CHANGE
    ========================================
    */

    serviceSelect.addEventListener(
        "change",
        function () {

            const serviceId =
                this.value;


            if (!serviceId) {

                documentContent.innerHTML = `

                    <div class="document-card empty-state">

                        <h2>
                            सेवा चुनें
                        </h2>

                        <p>
                            सेवा चुनने के बाद
                            required documents यहां दिखाई देंगे।
                        </p>

                    </div>

                `;

                return;

            }


            loadService(
                serviceId
            );

        }
    );


    /*
    ========================================
    INITIAL SERVICE LIST
    ========================================
    */

    renderServiceList(
        services
    );


    /*
    ========================================
    LOAD SERVICE FROM URL
    Example:
    documents.html?service=caste
    ========================================
    */

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
