/* =========================================
   JANGIRA E MITRA
   FORMS DATA + SEARCH + DOWNLOAD
========================================= */

const forms = [

    {
        id: "aay-praman-patra",
        name: "आय प्रमाण पत्र फॉर्म",
        englishName: "Income Certificate Form",
        file: "assets/AAY PARMAN PATRA FORM.pdf",
        keywords: ["आय", "income", "aay", "aay praman", "आय प्रमाण पत्र"]
    },

    {
        id: "aay-pension",
        name: "आय प्रमाण पत्र पेंशन फॉर्म",
        englishName: "Income Certificate Pension Form",
        file: "assets/AAY PARMAN PATRA PENSION FORM.pdf",
        keywords: ["आय", "पेंशन", "pension", "income"]
    },

    {
        id: "birth-after-30-days",
        name: "30 दिन बाद जन्म प्रमाण पत्र शपथ पत्र",
        englishName: "Birth Certificate After 30 Days Affidavit",
        file: "assets/AFTER 30 DAY BIRTH SAPATH.pdf",
        keywords: ["जन्म", "birth", "30 days", "शपथ", "sapath"]
    },

    {
        id: "fasal-beema",
        name: "फसल बीमा आवेदन फॉर्म",
        englishName: "Crop Insurance Application Form",
        file: "assets/APPLICATION FORM FASAL BEEMA.pdf",
        keywords: ["फसल", "बीमा", "fasal", "beema", "crop insurance"]
    },

    {
        id: "birth-within-21-days",
        name: "21 दिन के अंदर जन्म प्रमाण पत्र आवेदन फॉर्म",
        englishName: "Birth Certificate Application Within 21 Days",
        file: "assets/BIRTH CERTIFICATE APPLICATION WITHIN 21 DAYS.pdf",
        keywords: ["जन्म", "birth", "21 days", "birth certificate"]
    },

    {
        id: "jan-aadhaar-aay",
        name: "जन आधार आय प्रमाण पत्र फॉर्म",
        englishName: "Jan Aadhaar Income Certificate Form",
        file: "assets/JAN AADHAR AAY PARMAN PATRA FORM.pdf",
        keywords: ["जन आधार", "jan aadhaar", "आय", "income"]
    },

    {
        id: "labour-card",
        name: "लेबर कार्ड फॉर्म",
        englishName: "Labour Card Form",
        file: "assets/LABOUR CARD FORM.pdf",
        keywords: ["लेबर", "labour", "श्रम", "labour card"]
    },

    {
        id: "marriage-obc-sapath",
        name: "विवाह OBC शपथ पत्र",
        englishName: "Marriage OBC Affidavit",
        file: "assets/MARRIAGE FORM OBC sapath.pdf",
        keywords: ["विवाह", "शादी", "marriage", "obc", "शपथ"]
    },

    {
        id: "marriage-obc",
        name: "विवाह OBC फॉर्म",
        englishName: "Marriage OBC Form",
        file: "assets/MARRIAGE FORM OBC.pdf",
        keywords: ["विवाह", "शादी", "marriage", "obc"]
    },

    {
        id: "moolnivas",
        name: "मूल निवास प्रमाण पत्र फॉर्म",
        englishName: "Domicile Certificate Form",
        file: "assets/MOOLNIVAS FORM.pdf",
        keywords: ["मूल निवास", "निवास", "domicile", "moolnivas", "residence"]
    },

    {
        id: "obc-jati",
        name: "OBC जाति प्रमाण पत्र फॉर्म",
        englishName: "OBC Caste Certificate Form",
        file: "assets/OBC JATI FORM.pdf",
        keywords: ["जाति", "caste", "obc", "jati", "OBC"]
    },

    {
        id: "palanhar-aavedan",
        name: "पालनहार आवेदन फॉर्म",
        englishName: "Palanhar Application Form",
        file: "assets/PALANHAR AAVEDAN FORM.pdf",
        keywords: ["पालनहार", "palanhar", "आवेदन", "application"]
    },

    {
        id: "palanhar-renewal",
        name: "पालनहार नवीनीकरण फॉर्म",
        englishName: "Palanhar Renewal Application Form",
        file: "assets/PALANHAR RENEWAL APPLICATION FORM.pdf",
        keywords: ["पालनहार", "palanhar", "renewal", "नवीनीकरण"]
    },

    {
        id: "ration-application",
        name: "राशन कार्ड आवेदन फॉर्म",
        englishName: "Ration Card Application Form",
        file: "assets/RATION APL FORM.pdf",
        keywords: ["राशन", "ration", "ration card", "apl"]
    },

    {
        id: "ration-deletion",
        name: "राशन कार्ड नाम हटाने का फॉर्म",
        englishName: "Ration Card Deletion Form",
        file: "assets/RATION CARD DELETION FORM.pdf",
        keywords: ["राशन", "ration", "नाम हटाना", "deletion"]
    },

    {
        id: "ration-correction",
        name: "राशन कार्ड संशोधन फॉर्म",
        englishName: "Ration Card Correction Form",
        file: "assets/RATION CORRECTION FORM.pdf",
        keywords: ["राशन", "ration", "correction", "संशोधन", "सुधार"]
    },

    {
        id: "ration-name-add",
        name: "राशन कार्ड नाम जोड़ने का शपथ पत्र",
        englishName: "Ration Card Name Addition Affidavit",
        file: "assets/RATION NAME ADD SAPATH.pdf",
        keywords: ["राशन", "ration", "नाम जोड़ना", "add name", "sapath"]
    },

    {
        id: "ration-name-delete",
        name: "राशन कार्ड नाम हटाने का शपथ पत्र",
        englishName: "Ration Card Name Deletion Affidavit",
        file: "assets/RATION NAME DELETE SAPATH.pdf",
        keywords: ["राशन", "ration", "नाम हटाना", "delete name", "sapath"]
    },

    {
        id: "social-security-pension",
        name: "सामाजिक सुरक्षा पेंशन फॉर्म",
        englishName: "Social Security Pension Form",
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
   GET FORM BY ID
========================================= */

function getFormById(id) {

    return forms.find(function (form) {
        return form.id === id;
    });

}


/* =========================================
   SEARCH FORMS
========================================= */

function searchForms(query) {

    const searchQuery =
        String(query || "")
            .toLowerCase()
            .trim();

    if (!searchQuery) {
        return forms;
    }

    return forms.filter(function (form) {

        const searchableText = [

            form.name,
            form.englishName,
            ...(form.keywords || [])

        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(searchQuery);

    });

}


/* =========================================
   OPEN FORM
========================================= */

function openForm(id) {

    const form = getFormById(id);

    if (!form) {
        return;
    }

    window.open(form.file, "_blank");

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

    link.href = form.file;

    link.download = form.file
        .split("/")
        .pop();

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}
