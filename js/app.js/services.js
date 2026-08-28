/*
========================================
JANGIRA E MITRA
SERVICES MASTER DATA
PART 1 / 2
========================================
*/

const services = [

    /* ===================================
       1. जाति प्रमाण पत्र
    =================================== */

    {
        id: "caste",
        name: "जाति प्रमाण पत्र",
        englishName: "Caste Certificate",
        category: "Certificates",

        description:
            "जाति प्रमाण पत्र के लिए आवश्यक दस्तावेजों की पूरी checklist।",

        keywords: [
            "जाति",
            "caste",
            "caste certificate",
            "sc",
            "st",
            "obc"
        ],

        documents: [
            "खुद का आधार कार्ड",
            "पिता का आधार कार्ड",
            "जन आधार",
            "राशन कार्ड",
            "जाति का proof: जमाबंदी, घर का पट्टा या कोई पुराना जाति प्रमाण पत्र",
            "1 पासपोर्ट साइज फोटो",
            "जन आधार से मोबाइल OTP"
        ],

        note:
            "आवेदन करने से पहले सभी आवश्यक दस्तावेज साथ लेकर आएं।",

        onlineAvailable: false,
        onlineUrl: "",

        offlineFormAvailable: false,
        formUrl: ""
    },


    /* ===================================
       2. मूल निवास प्रमाण पत्र
    =================================== */

    {
        id: "domicile",
        name: "मूल निवास प्रमाण पत्र",
        englishName: "Domicile Certificate",
        category: "Certificates",

        description:
            "मूल निवास प्रमाण पत्र के लिए आवश्यक दस्तावेजों की checklist।",

        keywords: [
            "मूल निवास",
            "निवास",
            "domicile",
            "residence",
            "mool niwas"
        ],

        documents: [
            "खुद का आधार कार्ड",
            "पिता का आधार कार्ड",
            "जन आधार",
            "राशन कार्ड",
            "मूल निवास का proof: 10 साल पुराना Voter ID या पुराना मूल निवास",
            "दोनों उपलब्ध हों तो दोनों लेकर आएं",
            "1 पासपोर्ट साइज फोटो",
            "जन आधार से मोबाइल OTP"
        ],

        note:
            "यदि 10 साल पुराना Voter ID और पुराना मूल निवास दोनों उपलब्ध हों तो दोनों साथ लेकर आएं।",

        onlineAvailable: false,
        onlineUrl: "",

        offlineFormAvailable: false,
        formUrl: ""
    },


    /* ===================================
       3. जन्म प्रमाण पत्र
    =================================== */

    {
        id: "birth-certificate",
        name: "जन्म प्रमाण पत्र",
        englishName: "Birth Certificate",
        category: "Certificates",

        description:
            "1 वर्ष से अधिक पुराने जन्म प्रमाण पत्र के लिए आवश्यक दस्तावेज।",

        keywords: [
            "जन्म",
            "birth",
            "birth certificate",
            "जन्म प्रमाण पत्र"
        ],

        documents: [
            "खुद का आधार कार्ड",
            "खुद का कोई Birth Proof: Marksheet, PAN Card, Driving Licence, Student Certificate आदि",
            "जन आधार",
            "राशन कार्ड",
            "पिता की 2 फोटो",
            "पिता का Signature / Thumb",
            "2 गवाहों के आधार कार्ड",
            "2 गवाहों के Signature / Thumb",
            "माता-पिता दोनों के आधार कार्ड"
        ],

        note:
            "यह checklist 1 वर्ष से अधिक पुराने जन्म प्रमाण पत्र के लिए है।",

        onlineAvailable: false,
        onlineUrl: "",

        offlineFormAvailable: false,
        formUrl: ""
    },


    /* ===================================
       4. विवाह प्रमाण पत्र
    =================================== */

    {
        id: "marriage-certificate",
        name: "विवाह प्रमाण पत्र",
        englishName: "Marriage Certificate",
        category: "Certificates",

        description:
            "विवाह प्रमाण पत्र के लिए पति-पत्नी, माता-पिता और गवाहों से संबंधित आवश्यक दस्तावेज।",

        keywords: [
            "विवाह",
            "शादी",
            "marriage",
            "marriage certificate",
            "निकाह"
        ],

        documents: [
            "पति-पत्नी दोनों के आधार कार्ड",
            "पति-पत्नी के माता-पिता के आधार कार्ड",
            "पति-पत्नी के माता-पिता के जन आधार",
            "पति की तरफ से 1 गवाह और पत्नी की तरफ से 1 गवाह",
            "काजी / मौलवी / पंडित का आधार और Signature",
            "पति-पत्नी का 1 Joint Photo",
            "पति-पत्नी के Passport Size Photo 2-2",
            "पति-पत्नी के Signature / Thumb"
        ],

        note:
            "आवेदन से पहले पति-पत्नी और संबंधित गवाहों के आवश्यक documents साथ लेकर आएं।",

        onlineAvailable: false,
        onlineUrl: "",

        offlineFormAvailable: false,
        formUrl: ""
    },


    /* ===================================
       5. जन आधार बनाना
    =================================== */

    {
        id: "jan-aadhaar",
        name: "जन आधार बनाना",
        englishName: "Jan Aadhaar Enrollment",
        category: "Rajasthan Services",

        description:
            "नया जन आधार बनाने के लिए आवश्यक दस्तावेज और जानकारी।",

        keywords: [
            "जन आधार",
            "jan aadhaar",
            "janaadhaar",
            "janadhar",
            "नया जन आधार"
        ],

        documents: [
            "Marriage Certificate",
            "पुराना जन आधार, जिसमें पहले पिता वाले परिवार में पति-पत्नी दोनों के नाम हों",
            "Bank Passbook",
            "Mobile OTP"
        ],

        note:
            "आवेदन के समय आवश्यक documents और मोबाइल OTP उपलब्ध रखें।",

        onlineAvailable: false,
        onlineUrl: "",

        offlineFormAvailable: false,
        formUrl: ""
    },


    /* ===================================
       6. PAN CARD
    =================================== */

    {
        id: "pan-card",
        name: "PAN Card",
        englishName: "Permanent Account Number",
        category: "Government IDs",

        description:
            "PAN Card आवेदन के लिए आवश्यक documents और जानकारी।",

        keywords: [
            "pan",
            "pan card",
            "पैन",
            "पैन कार्ड"
        ],

        documents: [
            "खुद का आधार कार्ड",
            "पिता का आधार कार्ड या पिता का नाम",
            "आधार से लिंक मोबाइल नंबर",
            "Date of Birth Proof: Birth Certificate, Voter ID आदि"
        ],

        note:
            "आवेदन से पहले Date of Birth proof और आधार से लिंक मोबाइल नंबर उपलब्ध रखें।",

        onlineAvailable: false,
        onlineUrl: "",

        offlineFormAvailable: false,
        formUrl: ""
    },


    /* ===================================
       7. VOTER ID
    =================================== */

    {
        id: "voter-id",
        name: "वोटर ID कार्ड",
        englishName: "Voter ID Card",
        category: "Government IDs",

        description:
            "वोटर ID कार्ड के लिए आवश्यक documents और OTP verification।",

        keywords: [
            "voter",
            "voter id",
            "voter card",
            "वोटर",
            "वोटर आईडी",
            "मतदाता पहचान पत्र"
        ],

        documents: [
            "आधार कार्ड",
            "माता-पिता के आधार कार्ड",
            "राशन कार्ड",
            "1 Passport Size Photo या Digital Photo",
            "मोबाइल नंबर",
            "आधार से लिंक मोबाइल नंबर का OTP",
            "दिए गए मोबाइल नंबर पर OTP"
        ],

        note:
            "OTP verification के लिए मोबाइल नंबर उपलब्ध होना आवश्यक है।",

        onlineAvailable: false,
        onlineUrl: "",

        offlineFormAvailable: false,
        formUrl: ""
    },


    /* ===================================
       8. आय प्रमाण पत्र
    =================================== */

    {
        id: "income-certificate",
        name: "आय प्रमाण पत्र",
        englishName: "Income Certificate",
        category: "Certificates",

        description:
            "आय प्रमाण पत्र के लिए आवश्यक documents और OTP verification।",

        keywords: [
            "आय",
            "income",
            "income certificate",
            "आय प्रमाण पत्र"
        ],

        documents: [
            "आधार कार्ड",
            "जन आधार",
            "Passport Size Photo",
            "Signature / Thumb",
            "आधार से लिंक मोबाइल नंबर पर OTP"
        ],

        note:
            "आवेदन के समय आधार से लिंक मोबाइल नंबर उपलब्ध रखें।",

        onlineAvailable: false,
        onlineUrl: "",

        offlineFormAvailable: false,
        formUrl: ""
    },


    /* ===================================
       9. ई-श्रम कार्ड
    =================================== */

    {
        id: "e-shram",
        name: "ई-श्रम कार्ड",
        englishName: "e-Shram Card",
        category: "Digital Services",

        description:
            "ई-श्रम कार्ड बनाने के लिए आवश्यक documents और OTP verification।",

        keywords: [
            "e shram",
            "e-shram",
            "ई श्रम",
            "ई-श्रम",
            "shram card"
        ],

        documents: [
            "आधार कार्ड",
            "जन आधार",
            "Bank Passbook",
            "Passport Size Photo",
            "आधार से लिंक मोबाइल नंबर पर OTP"
        ],

        note:
            "आवेदन के समय आधार से लिंक मोबाइल नंबर और Bank Passbook साथ रखें।",

        onlineAvailable: false,
        onlineUrl: "",

        offlineFormAvailable: false,
        formUrl: ""
    },

    /* ===================================
   10. आयुष्मान कार्ड
=================================== */

{
    id: "ayushman",
    name: "आयुष्मान कार्ड",
    englishName: "Ayushman Bharat Card",
    category: "Government Services",

    description:
        "आयुष्मान कार्ड के लिए आवश्यक documents और Face Authentication।",

    keywords: [
        "आयुष्मान",
        "ayushman",
        "ayushman card",
        "pmjay",
        "आयुष्मान कार्ड"
    ],

    documents: [
        "आधार कार्ड",
        "जन आधार",
        "Passport Size Photo",
        "आधार से लिंक मोबाइल नंबर पर OTP",
        "Face Authentication"
    ],

    note:
        "आवेदन के समय Face Authentication और OTP verification की आवश्यकता हो सकती है।",

    onlineAvailable: false,
    onlineUrl: "",

    offlineFormAvailable: false,
    formUrl: ""
},


/* ===================================
   11. नया राशन कार्ड
=================================== */

{
    id: "new-ration-card",
    name: "नया राशन कार्ड",
    englishName: "New Ration Card",
    category: "Rajasthan Services",

    description:
        "नया राशन कार्ड बनवाने के लिए आवश्यक documents।",

    keywords: [
        "राशन",
        "ration",
        "ration card",
        "new ration card",
        "नया राशन कार्ड"
    ],

    documents: [
        "आधार कार्ड",
        "परिवार के सदस्यों के आधार कार्ड",
        "जन आधार",
        "Passport Size Photo",
        "Signature / Thumb",
        "पुराने राशन कार्ड से नाम हटाने की NOC",
        "Marriage Certificate",
        "बच्चा हो तो उसका Birth Certificate"
    ],

    note:
        "परिवार के सदस्यों के अनुसार संबंधित documents साथ लेकर आएं।",

    onlineAvailable: false,
    onlineUrl: "",

    offlineFormAvailable: false,
    formUrl: ""
},


/* ===================================
   12. जन आधार संशोधन
=================================== */

{
    id: "jan-aadhaar-correction",
    name: "जन आधार संशोधन",
    englishName: "Jan Aadhaar Correction",
    category: "Rajasthan Services",

    description:
        "जन आधार में नाम, जन्म तारीख, पता, परिवार के सदस्य और अन्य विवरणों में correction।",

    keywords: [
        "जन आधार correction",
        "jan aadhaar correction",
        "jan aadhaar update",
        "नाम correction",
        "DOB correction",
        "पता correction"
    ],

    documents: [
        "नाम correction: सही नाम वाला दस्तावेज",
        "जन्म तारीख correction: संबंधित DOB Proof",
        "पिता / पति का नाम: संबंधित प्रमाण",
        "पता correction: Address Proof",
        "मोबाइल / Bank Details: संबंधित मोबाइल या Bank document",
        "परिवार के सदस्य जोड़ना / हटाना: संबंधित प्रमाण"
    ],

    note:
        "Correction के प्रकार के अनुसार संबंधित प्रमाण साथ लेकर आएं।",

    onlineAvailable: false,
    onlineUrl: "",

    offlineFormAvailable: false,
    formUrl: ""
},


/* ===================================
   13. आधार में मोबाइल नंबर बदलना
=================================== */

{
    id: "aadhaar-mobile-change",
    name: "आधार में मोबाइल नंबर बदलना",
    englishName: "Aadhaar Mobile Number Change",
    category: "Aadhaar Services",

    description:
        "आधार में registered mobile number change करने की सेवा।",

    keywords: [
        "आधार",
        "aadhar",
        "aadhaar",
        "mobile number",
        "mobile change",
        "आधार मोबाइल नंबर"
    ],

    documents: [
        "आधार कार्ड",
        "Face Authentication",
        "पुराने नंबर पर OTP"
    ],

    note:
        "नया नंबर link नहीं, केवल मोबाइल नंबर change किया जाता है।",

    onlineAvailable: false,
    onlineUrl: "",

    offlineFormAvailable: false,
    formUrl: ""
},


/* ===================================
   14. आधार में पता अपडेट
=================================== */

{
    id: "aadhaar-address-update",
    name: "आधार में पता अपडेट",
    englishName: "Aadhaar Address Update",
    category: "Aadhaar Services",

    description:
        "आधार में address update करने के लिए आवश्यक documents।",

    keywords: [
        "आधार पता",
        "aadhar address",
        "aadhaar address",
        "address update",
        "पता अपडेट"
    ],

    documents: [
        "आधार कार्ड",
        "OTP",
        "Address Proof: Voter ID Card, मूल निवास आदि"
    ],

    note:
        "Address update के लिए मान्य Address Proof उपलब्ध रखें।",

    onlineAvailable: false,
    onlineUrl: "",

    offlineFormAvailable: false,
    formUrl: ""
},


/* ===================================
   15. आधार बैंक सीडिंग
=================================== */

{
    id: "aadhaar-bank-seeding",
    name: "आधार में बैंक सीडिंग",
    englishName: "Aadhaar Bank Seeding",
    category: "Aadhaar Services",

    description:
        "आधार को बैंक खाते से seed/link करने की सेवा।",

    keywords: [
        "आधार बैंक",
        "bank seeding",
        "aadhaar seeding",
        "aadhar bank link",
        "bank link"
    ],

    documents: [
        "आधार कार्ड",
        "Bank Passbook",
        "OTP"
    ],

    note:
        "Bank Passbook और आवश्यक OTP verification के लिए मोबाइल उपलब्ध रखें।",

    onlineAvailable: false,
    onlineUrl: "",

    offlineFormAvailable: false,
    formUrl: ""
},


/* ===================================
   16. ऑनलाइन फॉर्म भरना
=================================== */

{
    id: "online-form",
    name: "ऑनलाइन फॉर्म भरना",
    englishName: "Online Form Filling",
    category: "Digital Services",

    description:
        "विभिन्न सरकारी और अन्य ऑनलाइन applications के forms भरने की सुविधा।",

    keywords: [
        "online form",
        "form filling",
        "ऑनलाइन फॉर्म",
        "फॉर्म भरना",
        "application"
    ],

    documents: [
        "संबंधित आवेदन के जरूरी दस्तावेज",
        "मोबाइल नंबर",
        "OTP के लिए मोबाइल"
    ],

    note:
        "हर application के लिए documents अलग हो सकते हैं। संबंधित सेवा की checklist जरूर देखें।",

    onlineAvailable: false,
    onlineUrl: "",

    offlineFormAvailable: false,
    formUrl: ""
},


/* ===================================
   17. डॉक्यूमेंट स्कैन / PDF / अपलोड
=================================== */

{
    id: "document-scan-pdf-upload",
    name: "डॉक्यूमेंट स्कैन / PDF / अपलोड",
    englishName: "Document Scan, PDF & Upload",
    category: "Digital Services",

    description:
        "Documents को scan करके PDF बनाना और online portal पर upload करने की सुविधा।",

    keywords: [
        "scan",
        "document scan",
        "pdf",
        "upload",
        "document upload",
        "स्कैन",
        "पीडीएफ",
        "अपलोड"
    ],

    documents: [
        "Original documents साथ लाएं",
        "दस्तावेज साफ और पूरे होने चाहिए",
        "Document Scan करना",
        "PDF बनाना",
        "Online Upload करना"
    ],

    services: [
        "Original Document Scan",
        "PDF बनाना",
        "Document Upload"
    ],

    note:
        "Online upload के लिए documents साफ और पूरे होने चाहिए।",

    onlineAvailable: false,
    onlineUrl: "",

    offlineFormAvailable: false,
    formUrl: ""
},


/* ===================================
   18. फोटो / सिग्नेचर / प्रिंट
=================================== */

{
    id: "photo-signature-print",
    name: "फोटो / सिग्नेचर / प्रिंट",
    englishName: "Photo, Signature & Printing",
    category: "Digital Services",

    description:
        "Passport size photo, digital photo, signature और document printing की सुविधा।",

    keywords: [
        "photo",
        "passport photo",
        "signature",
        "print",
        "printing",
        "फोटो",
        "सिग्नेचर",
        "प्रिंट"
    ],

    documents: [
        "Passport Size Photo तैयार करना",
        "Digital Photo तैयार करना",
        "Signature तैयार करना",
        "दस्तावेज Print करना",
        "जरूरत के अनुसार PDF / Copy तैयार करना"
    ],

    services: [
        "Passport Size Photo",
        "Digital Photo",
        "Digital Signature",
        "Document Printing",
        "PDF / Copy"
    ],

    note:
        "आवश्यकता के अनुसार photo, signature, print या PDF तैयार किया जाएगा।",

    onlineAvailable: false,
    onlineUrl: "",

    offlineFormAvailable: false,
    formUrl: ""
}

];


/*
========================================
SERVICE FUNCTIONS
========================================
*/


function getServiceById(id) {

    return services.find(
        function (service) {
            return service.id === id;
        }
    );

}


function searchServices(query) {

    const searchQuery =
        String(query)
            .toLowerCase()
            .trim();


    if (!searchQuery) {
        return services;
    }


    return services.filter(
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
                searchQuery
            );

        }
    );

}
