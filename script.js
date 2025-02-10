
function downloadFile() {
    const link = document.createElement("a");
    link.href = "Ahmed Abdel Fatah Fathi CV.docx"; // مسار الملف
    link.download = "Ahmed Abdel Fatah Fathi CV"; // اسم الملف عند التحميل
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

