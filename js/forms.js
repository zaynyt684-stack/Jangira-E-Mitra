/* =========================================
   JANGIRA E MITRA
   FORMS MASTER DATA + UI
========================================= */

const forms = [

    {
        id: "aay-praman-patra",
        name: "आय प्रमाण पत्र फॉर्म",
        englishName: "Income Certificate Form",
        category: "Certificates",
        file: "assets/AAY PARMAN PATRA FORM.pdf",
        keywords: ["आय", "income", "aay", "aay praman", "आय प्रमाण पत्र"]
    },

    {
        id: "aay-pension",
        name: "आय प्रमाण पत्र पेंशन फॉर्म",
        englishName: "Income Certificate Pension Form",
        category: "Pension",
        file: "assets/AAY PARMAN PATRA PENSION FORM.pdf",
        keywords: ["आय", "income", "पेंशन", "pension"]
    },

    {
        id: "birth-after-30-days",
        name: "30 दिन बाद जन्म प्रमाण पत्र शपथ पत्र",
        englishName: "Birth Certificate After 30 Days Affidavit",
        category: "Certificates",
        file: "assets/AFTER 30 DAY BIRTH SAPATH.pdf",
        keywords: ["जन्म", "birth", "30 days", "शपथ", "sapath"]
    },

    {
        id: "fasal-beema",
        name: "फसल बीमा आवेदन फॉर्म",
        englishName: "Crop Insurance Application Form",
        category: "Rajasthan Services",
        file: "assets/APPLICATION FORM FASAL BEEMA.pdf",
        keywords: ["फसल", "बीमा", "fasal", "beema", "crop insurance"]
    },

    {
        id: "birth-within-21-days",
        name: "21 दिन के अंदर जन्म प्रमाण पत्र आवेदन फॉर्म",
        englishName: "Birth Certificate Application Within 21 Days",
        category: "Certificates",
        file: "assets/BIRTH CERTIFICATE APPLICATION WITHIN 21 DAYS.pdf",
        keywords: ["जन्म", "birth", "21 days", "birth certificate"]
    },

    {
        id: "jan-aadhaar-aay",
        name: "जन आधार आय प्रमाण पत्र फॉर्म",
        englishName: "Jan Aadhaar Income Certificate Form",
        category: "Rajasthan Services",
        file: "assets/JAN AADHAR AAY PARMAN PATRA FORM.pdf",
        keywords: ["जन आधार", "jan aadhaar", "आय", "income"]
    },

    {
        id: "labour-card",
        name: "लेबर कार्ड फॉर्म",
        englishName: "Labour Card Form",
        category: "Rajasthan Services",
        file: "assets/LABOUR CARD FORM.pdf",
        keywords: ["लेबर", "labour", "श्रम", "labour card"]
    },

    {
        id: "marriage-obc-sapath",
        name: "विवाह OBC शपथ पत्र",
        englishName: "Marriage OBC Affidavit",
        category: "Certificates",
        file: "assets/MARRIAGE FORM OBC sapath.pdf",
        keywords: ["विवाह", "शादी", "marriage", "obc", "शपथ"]
    },

    {
        id: "marriage-obc",
        name: "विवाह OBC फॉर्म",
        englishName: "Marriage OBC Form",
        category: "Certificates",
        file: "assets/MARRIAGE FORM OBC.pdf",
        keywords: ["विवाह", "शादी", "marriage", "obc"]
    },

    {
        id: "moolnivas",
        name: "मूल निवास प्रमाण पत्र फॉर्म",
        englishName: "Domicile Certificate Form",
        category: "Certificates",
        file: "assets/MOOLNIVAS FORM.pdf",
        keywords: ["मूल निवास", "निवास", "domicile", "moolnivas", "residence"]
    },

    {
        id: "obc-jati",
        name: "OBC जाति प्रमाण पत्र फॉर्म",
        englishName: "OBC Caste Certificate Form",
        category: "Certificates",
        file: "assets/OBC JATI FORM.pdf",
        keywords: ["जाति", "caste", "obc", "jati", "OBC"]
    },

    {
        id: "palanhar-aavedan",
        name: "पालनहार आवेदन फॉर्म",
        englishName: "Palanhar Application Form",
        category: "Rajasthan Services",
        file: "assets/PALANHAR AAVEDAN FORM.pdf",
        keywords: ["पालनहार", "palanhar", "आवेदन", "application"]
    },

    {
        id: "palanhar-renewal",
        name: "पालनहार नवीनीकरण फॉर्म",
        englishName: "Palanhar Renewal Application Form",
        category: "Rajasthan Services",
        file: "assets/PALANHAR RENEWAL APPLICATION FORM.pdf",
        keywords: ["पालनहार", "palanhar", "renewal", "नवीनीकरण"]
    },

    {
        id: "ration-application",
        name: "राशन कार्ड आवेदन फॉर्म",
        englishName: "Ration Card Application Form",
        category: "Ration Card",
        file: "assets/RATION APL FORM.pdf",
        keywords: ["राशन", "ration", "ration card", "apl"]
    },

    {
        id: "ration-deletion",
        name: "राशन कार्ड नाम हटाने का फॉर्म",
        englishName: "Ration Card Deletion Form",
        category: "Ration Card",
        file: "assets/RATION CARD DELETION FORM.pdf",
        keywords: ["राशन", "ration", "नाम हटाना", "deletion"]
    },

    {
        id: "ration-correction",
        name: "राशन कार्ड संशोधन फॉर्म",
        englishName: "Ration Card Correction Form",
        category: "Ration Card",
        file: "assets/RATION CORRECTION FORM.pdf",
        keywords: ["राशन", "ration", "correction", "संशोधन", "सुधार"]
    },

    {
        id: "ration-name-add",
        name: "राशन कार्ड नाम जोड़ने का शपथ पत्र",
        englishName: "Ration Card Name Addition Affidavit",
        category: "Ration Card",
        file: "assets/RATION NAME ADD SAPATH.pdf",
        keywords: ["राशन", "ration", "नाम जोड़ना", "add name", "sapath"]
    },

    {
        id: "ration-name-delete",
        name: "राशन कार्ड नाम हटाने का शपथ पत्र",
        englishName: "Ration Card Name Deletion Affidavit",
        category: "Ration Card",
        file: "assets/RATION NAME DELETE SAPATH.pdf",
        keywords: ["राशन", "ration", "नाम हटाना", "delete name", "sapath"]
    },

    {
        id: "social-security-pension",
        name: "सामाजिक सुरक्षा पेंशन फॉर्म",
        englishName: "Social Security Pension Form",
        category: "Pension",
        file: "assets/SOCIAL SECURTY PENSION FORM.pdf",
        keywords: [
            "पेंशन",
            "pension",
            "social security",
            "सामाजिक सुरक्षा"
        ]
    }

];


/* =========================================
   GET FORM
========================================= */

function getFormById(id) {

    return forms.find(function (form) {
        return form.id === id;
    });

}


/* =========================================
   SEARCH
========================================= */

function searchForms(query) {

    const q = String(query || "")
        .toLowerCase()
        .trim();

    if (!q) {
        return forms;
    }

    return forms.filter(function (form) {

        const text = [
            form.name,
            form.englishName,
            form.category,
            ...(form.keywords || [])
        ]
            .join(" ")
            .toLowerCase();

        return text.includes(q);

    });

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================
   OPEN FORM
========================================= */

function openForm(id) {

    const form = getFormById(id);

    if (!form) {
        return;
    }

    window.open(
        encodeURI(form.file),
        "_blank"
    );

}


/* =========================================
   DOWNLOAD FORM
========================================= */

function downloadForm(id) {

    const form = getFormById(id);

    if (!form) {
        return;
    }

    const link = document.createElement("a");

    link.href = encodeURI(form.file);

    link.download = form.file
        .split("/")
        .pop();

    link.target = "_blank";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}


/* =========================================
   RENDER FORMS
========================================= */

function renderForms(formArray) {

    const grid =
        document.getElementById("formsGrid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    if (!formArray || formArray.length === 0) {

        grid.innerHTML = `
            <div class="forms-empty">

                <h2>
                    कोई फॉर्म नहीं मिला
                </h2>

                <p>
                    कृपया दूसरा नाम या keyword search करें।
                </p>

            </div>
        `;

        return;
    }


    formArray.forEach(function (form) {

        const card =
            document.createElement("article");

        card.className = "form-card";

        card.innerHTML = `

            <div class="form-card-content">

                <span class="form-category">
                    ${escapeHTML(form.category)}
                </span>

                <h3>
                    ${escapeHTML(form.name)}
                </h3>

                <p class="form-english">
                    ${escapeHTML(form.englishName)}
                </p>

            </div>

            <div class="form-actions">

                <button
                    type="button"
                    class="btn btn-dark"
                    data-action="open"
                    data-id="${escapeHTML(form.id)}">

                    Open PDF

                </button>

                <button
                    type="button"
                    class="btn"
                    data-action="download"
                    data-id="${escapeHTML(form.id)}">

                    Download

                </button>

            </div>

        `;

        grid.appendChild(card);

    });

}


/* =========================================
   FILTER FORMS
========================================= */

function filterForms() {

    const searchInput =
        document.getElementById("formSearch");

    const categorySelect =
        document.getElementById("formCategory");


    const query =
        searchInput
            ? searchInput.value
            : "";


    const category =
        categorySelect
            ? categorySelect.value
            : "";


    let result =
        searchForms(query);


    if (category) {

        result =
            result.filter(function (form) {

                return form.category === category;

            });

    }


    renderForms(result);

}


/* =========================================
   INITIALIZE FORMS PAGE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const searchInput =
            document.getElementById("formSearch");

        const searchButton =
            document.getElementById("formSearchBtn");

        const categorySelect =
            document.getElementById("formCategory");

        const grid =
            document.getElementById("formsGrid");


        /* INITIAL LOAD */

        renderForms(forms);


        /* SEARCH WHILE TYPING */

        if (searchInput) {

            searchInput.addEventListener(
                "input",
                function () {

                    filterForms();

                }
            );


            /* ENTER KEY */

            searchInput.addEventListener(
                "keydown",
                function (event) {

                    if (event.key === "Enter") {

                        event.preventDefault();

                        filterForms();

                    }

                }
            );

        }


        /* SEARCH BUTTON */

        if (searchButton) {

            searchButton.addEventListener(
                "click",
                function () {

                    filterForms();

                }
            );

        }


        /* CATEGORY */

        if (categorySelect) {

            categorySelect.addEventListener(
                "change",
                function () {

                    filterForms();

                }
            );

        }


        /* OPEN + DOWNLOAD */

        if (grid) {

            grid.addEventListener(
                "click",
                function (event) {

                    const button =
                        event.target.closest(
                            "button[data-action]"
                        );


                    if (!button) {
                        return;
                    }


                    const id =
                        button.dataset.id;


                    const action =
                        button.dataset.action;


                    if (action === "open") {

                        openForm(id);

                    }


                    if (action === "download") {

                        downloadForm(id);

                    }

                }
            );

        }

    }
);
