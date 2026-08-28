/*
========================================
JANGIRA E MITRA
SERVICE DATABASE
========================================

यह file सभी services और उनके required
documents को manage करती है।

नई service जोड़ने या existing service
update करने के लिए मुख्यतः इसी file को edit करें.
*/

const services = [

    {
        id: "caste",
        name: "जाति प्रमाण पत्र",
        englishName: "Caste Certificate",
        category: "Certificates",
        keywords: [
            "जाति",
            "जाति प्रमाण पत्र",
            "caste",
            "caste certificate"
        ],

        description:
            "जाति प्रमाण पत्र के लिए आवश्यक दस्तावेज और आवेदन की जानकारी।",

        documents: [
            "खुद का आधार कार्ड",
            "पिता का आधार कार्ड",
            "जन आधार",
            "राशन कार्ड",
            "जाति का proof: जमाबंदी, घर का पट्टा या कोई पुराना जाति प्रमाण पत्र",
            "1 पासपोर्ट साइज फोटो",
            "जन आधार से मोबाइल OTP"
        ],

        onlineAvailable: true,
        offlineFormAvailable: true,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "domicile",
        name: "मूल निवास प्रमाण पत्र",
        englishName: "Domicile Certificate",
        category: "Certificates",

        keywords: [
            "मूल निवास",
            "निवास",
            "domicile",
            "residence",
            "residence certificate"
        ],

        description:
            "मूल निवास प्रमाण पत्र के लिए आवश्यक दस्तावेज।",

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

        onlineAvailable: true,
        offlineFormAvailable: true,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "birth",
        name: "जन्म प्रमाण पत्र",
        englishName: "Birth Certificate",
        category: "Certificates",

        keywords: [
            "जन्म",
            "जन्म प्रमाण पत्र",
            "birth",
            "birth certificate"
        ],

        description:
            "1 वर्ष से अधिक पुराने जन्म प्रमाण पत्र के लिए आवश्यक दस्तावेज।",

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

        onlineAvailable: true,
        offlineFormAvailable: true,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "marriage",
        name: "विवाह प्रमाण पत्र",
        englishName: "Marriage Certificate",
        category: "Certificates",

        keywords: [
            "विवाह",
            "शादी",
            "विवाह प्रमाण पत्र",
            "marriage",
            "marriage certificate"
        ],

        description:
            "विवाह प्रमाण पत्र के लिए आवश्यक दस्तावेज।",

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

        onlineAvailable: true,
        offlineFormAvailable: true,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "jan-aadhaar",
        name: "जन आधार बनाना",
        englishName: "Jan Aadhaar",
        category: "Rajasthan Services",

        keywords: [
            "जन आधार",
            "janaadhaar",
            "jan aadhaar",
            "janadhar"
        ],

        description:
            "नया जन आधार बनाने के लिए आवश्यक दस्तावेज।",

        documents: [
            "Marriage Certificate",
            "पुराना जन आधार, जिसमें पहले पिता वाले परिवार में पति-पत्नी दोनों के नाम हों",
            "Bank Passbook",
            "Mobile OTP"
        ],

        onlineAvailable: true,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "pan",
        name: "PAN Card",
        englishName: "Permanent Account Number",
        category: "Government IDs",

        keywords: [
            "pan",
            "pan card",
            "पैन",
            "पैन कार्ड"
        ],

        description:
            "PAN Card के लिए आवश्यक दस्तावेज।",

        documents: [
            "खुद का आधार कार्ड",
            "पिता का आधार कार्ड या पिता का नाम",
            "आधार से लिंक मोबाइल नंबर",
            "Date of Birth Proof: Birth Certificate, Voter ID आदि"
        ],

        onlineAvailable: true,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "voter",
        name: "Voter ID Card",
        englishName: "Voter ID",
        category: "Government IDs",

        keywords: [
            "voter",
            "voter id",
            "voter card",
            "वोटर",
            "वोटर आईडी"
        ],

        description:
            "Voter ID Card के लिए आवश्यक दस्तावेज।",

        documents: [
            "आधार कार्ड",
            "माता-पिता के आधार कार्ड",
            "राशन कार्ड",
            "1 Passport Size Photo या Digital Photo",
            "मोबाइल नंबर",
            "आधार से लिंक मोबाइल नंबर का OTP",
            "दिए गए मोबाइल नंबर पर OTP"
        ],

        onlineAvailable: true,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "income",
        name: "आय प्रमाण पत्र",
        englishName: "Income Certificate",
        category: "Certificates",

        keywords: [
            "आय",
            "आय प्रमाण पत्र",
            "income",
            "income certificate"
        ],

        description:
            "आय प्रमाण पत्र के लिए आवश्यक दस्तावेज।",

        documents: [
            "आधार कार्ड",
            "जन आधार",
            "Passport Size Photo",
            "Signature / Thumb",
            "आधार से लिंक मोबाइल नंबर पर OTP"
        ],

        onlineAvailable: true,
        offlineFormAvailable: true,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "eshram",
        name: "ई-श्रम कार्ड",
        englishName: "e-Shram Card",
        category: "Digital Services",

        keywords: [
            "ई-श्रम",
            "e shram",
            "eshram",
            "e-shram"
        ],

        description:
            "ई-श्रम कार्ड के लिए आवश्यक दस्तावेज।",

        documents: [
            "आधार कार्ड",
            "जन आधार",
            "Bank Passbook",
            "Passport Size Photo",
            "आधार से लिंक मोबाइल नंबर पर OTP"
        ],

        onlineAvailable: true,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "ayushman",
        name: "आयुष्मान कार्ड",
        englishName: "Ayushman Card",
        category: "Government Services",

        keywords: [
            "आयुष्मान",
            "ayushman",
            "ayushman card"
        ],

        description:
            "आयुष्मान कार्ड बनाने के लिए आवश्यक दस्तावेज।",

        documents: [
            "आधार कार्ड",
            "जन आधार",
            "Passport Size Photo",
            "आधार से लिंक मोबाइल नंबर पर OTP",
            "Face Authentication"
        ],

        onlineAvailable: true,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "ration",
        name: "नया राशन कार्ड",
        englishName: "New Ration Card",
        category: "Rajasthan Services",

        keywords: [
            "राशन",
            "राशन कार्ड",
            "ration",
            "ration card",
            "new ration card"
        ],

        description:
            "नया राशन कार्ड बनाने के लिए आवश्यक दस्तावेज।",

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

        onlineAvailable: true,
        offlineFormAvailable: true,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "jan-aadhaar-correction",
        name: "जन आधार संशोधन",
        englishName: "Jan Aadhaar Correction",
        category: "Rajasthan Services",

        keywords: [
            "जन आधार संशोधन",
            "जन आधार correction",
            "jan aadhaar correction",
            "correction"
        ],

        description:
            "जन आधार में अलग-अलग प्रकार के संशोधन के लिए संबंधित प्रमाण।",

        documents: [
            "नाम correction: सही नाम वाला दस्तावेज",
            "जन्म तारीख correction: संबंधित DOB Proof",
            "पिता / पति का नाम: संबंधित प्रमाण",
            "पता correction: Address Proof",
            "मोबाइल / Bank Details: संबंधित मोबाइल या Bank document",
            "परिवार के सदस्य जोड़ना / हटाना: संबंधित प्रमाण"
        ],

        onlineAvailable: true,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "aadhaar-mobile",
        name: "आधार में मोबाइल नंबर बदलना",
        englishName: "Aadhaar Mobile Number Update",
        category: "Aadhaar Services",

        keywords: [
            "आधार मोबाइल",
            "मोबाइल नंबर बदलना",
            "aadhaar mobile",
            "aadhaar mobile number",
            "mobile update"
        ],

        description:
            "आधार में मोबाइल नंबर बदलने की सेवा।",

        documents: [
            "आधार कार्ड",
            "Face Authentication",
            "पुराने नंबर पर OTP"
        ],

        note:
            "नया नंबर link नहीं, केवल मोबाइल नंबर change किया जाता है।",

        onlineAvailable: false,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "aadhaar-address",
        name: "आधार में पता अपडेट",
        englishName: "Aadhaar Address Update",
        category: "Aadhaar Services",

        keywords: [
            "आधार पता",
            "पता अपडेट",
            "aadhaar address",
            "address update"
        ],

        description:
            "आधार में पता अपडेट करने की सेवा।",

        documents: [
            "आधार कार्ड",
            "OTP",
            "Address Proof: Voter ID Card, मूल निवास आदि"
        ],

        onlineAvailable: true,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "aadhaar-bank",
        name: "आधार बैंक सीडिंग",
        englishName: "Aadhaar Bank Seeding",
        category: "Aadhaar Services",

        keywords: [
            "आधार बैंक",
            "बैंक सीडिंग",
            "aadhaar bank",
            "bank seeding",
            "dbt"
        ],

        description:
            "आधार को बैंक खाते से सीड करने के लिए आवश्यक दस्तावेज।",

        documents: [
            "आधार कार्ड",
            "Bank Passbook",
            "OTP"
        ],

        onlineAvailable: false,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "online-form",
        name: "ऑनलाइन फॉर्म भरना",
        englishName: "Online Form Filling",
        category: "Digital Services",

        keywords: [
            "ऑनलाइन फॉर्म",
            "form",
            "online form",
            "form filling"
        ],

        description:
            "विभिन्न सरकारी एवं अन्य ऑनलाइन आवेदन फॉर्म भरने की सुविधा।",

        documents: [
            "संबंधित आवेदन के जरूरी दस्तावेज",
            "मोबाइल नंबर",
            "OTP के लिए मोबाइल"
        ],

        onlineAvailable: false,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "document-scan",
        name: "डॉक्यूमेंट स्कैन / PDF / अपलोड",
        englishName: "Document Scan / PDF / Upload",
        category: "Digital Services",

        keywords: [
            "स्कैन",
            "pdf",
            "upload",
            "document scan",
            "pdf बनाना",
            "डॉक्यूमेंट"
        ],

        description:
            "दस्तावेज स्कैन, PDF बनाने और ऑनलाइन अपलोड करने की सुविधा।",

        documents: [
            "Original documents साथ लाएं",
            "दस्तावेज साफ और पूरे होने चाहिए"
        ],

        services: [
            "Document Scan",
            "PDF बनाना",
            "Online Upload"
        ],

        onlineAvailable: false,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    },


    {
        id: "photo-sign-print",
        name: "फोटो / सिग्नेचर / प्रिंट",
        englishName: "Photo / Signature / Print",
        category: "Digital Services",

        keywords: [
            "फोटो",
            "सिग्नेचर",
            "signature",
            "photo",
            "print",
            "passport photo",
            "digital photo"
        ],

        description:
            "फोटो, डिजिटल फोटो, सिग्नेचर और प्रिंट से संबंधित सेवाएं।",

        documents: [
            "Passport Size Photo तैयार करना",
            "Digital Photo तैयार करना",
            "Signature तैयार करना",
            "दस्तावेज Print करना",
            "जरूरत के अनुसार PDF / Copy तैयार करना"
        ],

        onlineAvailable: false,
        offlineFormAvailable: false,

        onlineUrl: "",
        formUrl: ""
    }

];


/*
========================================
HELPER FUNCTIONS
========================================
*/

function getServiceById(id) {
    return services.find(service => service.id === id);
}


function searchServices(query) {

    const searchTerm = query
        .toLowerCase()
        .trim();

    if (!searchTerm) {
        return [];
    }

    return services.filter(service => {

        const searchableText = [
            service.name,
            service.englishName,
            service.category,
            ...(service.keywords || [])
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(searchTerm);
    });
}


function getServicesByCategory(category) {

    return services.filter(
        service => service.category === category
    );

}


function getCategories() {

    return [
        ...new Set(
            services.map(service => service.category)
        )
    ];

}
