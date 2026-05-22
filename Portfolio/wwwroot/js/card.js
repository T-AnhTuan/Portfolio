(function () {
    const personData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Trần Anh Tuấn",
        "givenName": "Tuấn",
        "familyName": "Trần Anh",
        "image": "https://trantuan.io.vn/images/tran-anh-tuan.webp",
        "jobTitle": "Management Information Systems Specialist & Project Management Intern",
        "url": "https://trantuan.io.vn",
        "sameAs": [
            "https://linkedin.com/in/anh-tuan-hvtc",
            "https://github.com/T-AnhTuan",
            "https://facebook.com/trantuan.io.vn",
            "https://instagram.com/trantuan.io.vn"
        ],
        "description": "Sinh viên chuyên ngành Tin học Tài chính Kế toán tại Học viện Tài chính, thành thạo về nghiệp vụ Kế toán tài chính, hiểu biết về các hệ quản thị CSDL như SQL Server và lập trình ứng dụng  C# .NET và quản trị dự án công nghệ.",
        "knowsAbout": [
            "Management Information Systems",
            "Hệ thống thông tin quản lý MIS",
            "Project Management",
            "SQL Server",
            "C# .NET",
            "Accounting Software",
            "Kế toán Tài chính",
            "Business Analyst"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hà Nội",
            "addressRegion": "Hanoi",
            "addressCountry": "VN"
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Học viện Tài chính",
            "alternateName": "Academy of Finance",
            "url": "https://hvtc.edu.vn"
        }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(personData);
    document.head.appendChild(script);
})();