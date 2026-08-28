document.addEventListener("DOMContentLoaded", function () {

    const documentContent =
        document.getElementById("documentContent");

    const serviceSelect =
        document.getElementById("serviceSelect");


    /*
    ========================================
    LOAD SERVICE
    ========================================
    */

    window.loadService = function (id) {

        const service =
            getServiceById(id);


        if (!service) {

            documentContent.innerHTML = `
                <div class="document-card empty-state">
                    <h2>सेवा नहीं मिली</h2>
                    <p>
                        कृपया कोई दूसरी service चुनें।
                    </p>
                </div>
            `;

            return;
        }


        /*
        ------------------------------------
        SELECT SERVICE
        ------------------------------------
        */

        if (serviceSelect) {
            serviceSelect.value = service.id;
        }


        /*
        ------------------------------------
        DOCUMENT LIST
        ------------------------------------
        */

        const documents =
            service.documents || [];


        let documentsHTML = "";


        if (documents.length > 0) {

            documents.forEach(
                function (documentName) {

                    documentsHTML += `
                        <li>
                            <span class="check-icon">
                                ✓
                            </span>

                            <span>
                                ${escapeHTML(documentName)}
                            </span>
                        </li>
                    `;

                }
            );

        } else {

            documentsHTML = `
                <li>
                    <span class="check-icon">
                        !
                    </span>

                    <span>
                        इस सेवा के documents की जानकारी
                        जल्द अपडेट की जाएगी।
                    </span>
                </li>
            `;

        }


        /*
        ------------------------------------
        NOTE
        ------------------------------------
        */

        let noteHTML = "";


        if (service.note) {

            noteHTML = `
                <div class="document-note">

                    <strong>
                        जरूरी सूचना:
                    </strong>

                    ${escapeHTML(service.note)}

                </div>
            `;

        }


        /*
        ------------------------------------
        EXTRA SERVICES
        ------------------------------------
        */

        let extraServicesHTML = "";


        if (
            service.services &&
            service.services.length
        ) {

            extraServicesHTML = `

                <div class="document-note">

                    <strong>
                        उपलब्ध सेवाएं:
                    </strong>

                    ${service.services
                        .map(function (item) {
                            return escapeHTML(item);
                        })
                        .join(" • ")
                    }

                </div>

            `;

        }


        /*
        ------------------------------------
        ONLINE APPLY BUTTON
        ------------------------------------
        */

        let onlineButton = "";


        if (service.onlineAvailable) {

            onlineButton = `

                <a
                    href="${service.onlineUrl || "#"}"
                    class="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Online Apply
                </a>

            `;

        }


        /*
        ------------------------------------
        OFFLINE FORM BUTTON
        ------------------------------------
        */

        let formButton = "";


        if (service.offlineFormAvailable) {

            formButton = `

                <a
                    href="${service.formUrl || "forms.html"}"
                    class="btn btn-dark"
                >
                    Offline Form
                </a>

            `;

        }


        /*
        ====================================
        DISPLAY DOCUMENT
        ====================================
        */

        documentContent.innerHTML = `

            <div class="document-card">


                <div class="document-header">

                    <span class="document-category">

                        ${escapeHTML(
                            service.category || "SERVICE"
                        )}

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

                    ${documentsHTML}

                </ul>


                ${noteHTML}

                ${extraServicesHTML}


                <div class="document-actions">


                    <button
                        type="button"
                        class="btn btn-primary"
                        onclick="window.print()"
                    >
                        Print Checklist
                    </button>


                    ${onlineButton}


                    ${formButton}


                </div>


            </div>

        `;


        /*
        ------------------------------------
        UPDATE URL
        ------------------------------------
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
        ------------------------------------
        ACTIVE BUTTON
        ------------------------------------
        */

        document
            .querySelectorAll(
                "#serviceList button"
            )
            .forEach(
                function (button) {

                    button.classList.toggle(
                        "active",
                        button.dataset.id ===
                        service.id
                    );

                }
            );

    };


    /*
    ========================================
    HTML ESCAPE
    ========================================
    */

    function escapeHTML(value) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }

});
