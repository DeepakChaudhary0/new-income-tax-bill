document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
    fetchAds();
});

const newsArticles = [
    {
        img: "image1.jpg",
        title_en: "New Income Tax Bill 2025 vs Income Tax Act 1961: What all has changed under the new bill; check FAQs",
        title_hi: "नया आयकर विधेयक 2025 बनाम आयकर अधिनियम 1961: नए विधेयक के तहत क्या-क्या बदल गया है; अक्सर पूछे जाने वाले प्रश्न",
        summary_en: "The objective of the new Bill is to streamline the Income Tax Act, making it more succinct, understandable, and user-friendly.",
        summary_hi: "नए विधेयक का उद्देश्य आयकर अधिनियम को सुव्यवस्थित करना है, इसे अधिक संक्षिप्त, समझने योग्य और उपयोगकर्ता के अनुकूल बनाना है।",
        content_en: "The new Income Tax Bill 2025 introduces several significant changes aimed at simplifying the tax code. Key changes include...",
        content_hi: "नया आयकर विधेयक 2025 कर संहिता को सरल बनाने के उद्देश्य से कई महत्वपूर्ण बदलाव पेश करता है। प्रमुख बदलावों में शामिल हैं..."
    },
    {
        img: "image2.jpg",
        title_en: "New Income Tax Bill 2025 vs current Income Tax Act 1961: What is really new?",
        title_hi: "नया आयकर विधेयक 2025 बनाम वर्तमान आयकर अधिनियम 1961: वास्तव में नया क्या है?",
        summary_en: "The new Income Tax Bill will replace the Income Tax Act. However, not many people are able to understand how the new tax bill is different from the current Act. Here is how the new Income Tax Bill differs from the current Act and what is really new in it.",
        summary_hi: "नया आयकर विधेयक आयकर अधिनियम की जगह लेगा। हालांकि, कई लोग यह समझने में सक्षम नहीं हैं कि नया कर विधेयक वर्तमान अधिनियम से कैसे भिन्न है। यहां बताया गया है कि नया आयकर विधेयक वर्तमान अधिनियम से कैसे भिन्न है और इसमें वास्तव में नया क्या है।",
        content_en: "This article delves into the specific differences between the new Income Tax Bill 2025 and the existing Income Tax Act 1961...",
        content_hi: "यह लेख नए आयकर विधेयक 2025 और मौजूदा आयकर अधिनियम 1961 के बीच विशिष्ट अंतर पर चर्चा करता है..."
    },
    {
        img: "image3.jpg",
        title_en: "New Income Tax Bill 2025 LIVE Updates: FM Nirmala Sitharaman introduces new I-T Bill in Lok Sabha",
        title_hi: "नया आयकर विधेयक 2025 लाइव अपडेट: एफएम निर्मला सीतारमण ने लोकसभा में नया आई-टी विधेयक पेश किया",
        summary_en: "Finance Minister Nirmala Sitharaman has moved the new I-T Bill 2025 in Parliament today. The I-T bill was announced during her Budget Speech on February 1, and was approved by the Cabinet on February 7.",
        summary_hi: "वित्त मंत्री निर्मला सीतारमण ने आज संसद में नया आई-टी विधेयक 2025 पेश किया है। आई-टी विधेयक की घोषणा 1 फरवरी को उनके बजट भाषण के दौरान की गई थी और 7 फरवरी को कैबिनेट द्वारा इसे मंजूरी दी गई थी।",
        content_en: "Stay updated with the latest developments as FM Nirmala Sitharaman introduces the new I-T Bill 2025 in the Lok Sabha...",
        content_hi: "लोकसभा में नया आई-टी विधेयक 2025 पेश करते समय एफएम निर्मला सीतारमण द्वारा नवीनतम विकास के साथ अपडेट रहें..."
    }
];

function fetchNews() {
    const newsContainer = document.querySelector('#news-content');
    newsContainer.innerHTML = ''; // Clear previous news articles

    newsArticles.forEach((article, index) => {
        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');
        newsArticle.innerHTML = `
            <img src="${article.img}" alt="${article.title_en}">
            <h3 class="en">${article.title_en}</h3>
            <h3 class="hi" style="display: none;">${article.title_hi}</h3>
            <p class="en">${article.summary_en}</p>
            <p class="hi" style="display: none;">${article.summary_hi}</p>
            <a href="details.html?index=${index}" class="en">Read more</a>
            <a href="details.html?index=${index}" class="hi" style="display: none;">अधिक पढ़ें</a>
        `;
        newsContainer.appendChild(newsArticle);
    });
}

function fetchAds() {
    fetch('https://api.example.com/ads')
        .then(response => response.json())
        .then(data => {
            const adContainer = document.querySelector('#ads .container');
            adContainer.innerHTML = ''; // Clear previous ads
            data.ads.forEach(ad => {
                const adElement = document.createElement('div');
                adElement.classList.add('ad');
                adElement.innerHTML = `<a href="${ad.url}">${ad.title}</a>`;
                adContainer.appendChild(adElement);
            });
        })
        .catch(error => console.error('Error fetching ads:', error));
}

function toggleLanguage() {
    const enElements = document.querySelectorAll('.en');
    const hiElements = document.querySelectorAll('.hi');
    const toggleButton = document.getElementById('toggle-lang');
    
    enElements.forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });
    hiElements.forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });

    toggleButton.textContent = toggleButton.textContent === 'Switch to Hindi' ? 'Switch to English' : 'Switch to Hindi';
}
