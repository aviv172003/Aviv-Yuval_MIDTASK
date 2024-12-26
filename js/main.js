document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.getElementById("content-container");
    const modalTitle = document.getElementById("infoModalLabel");
    const modalImg = document.getElementById("modal-img");
    const modalDescription = document.getElementById("modal-description");
    const infoModal = new bootstrap.Modal(document.getElementById("infoModal"));

    const contentItems = [
        { title: "כוויה תרמית", imgSrc: "../WhatsApp Image 2024-12-18 at 15.53.23_6S6534a54.jpg", description: "נגרמת על ידי חשיפה לחום גבוה, כמו אש, מים רותחים, שמן חם או אדים." },
        { title: "כוויה כימית", imgSrc: "../WhatsApp Image 2024-12-18 at 15.47.50_3504d8dc.jpg", description: "נגרמת מחשיפה לחומרים כימיים חריפים, כמו חומצות או בסיסים חזקים." },
        { title: "כוויה חשמלית", imgSrc: "../WhatsApp Image 2024-12-18 at 15.58.23_d949c73c.jpg", description: "נגרמת ממעבר של זרם חשמלי דרך הגוף." },
        { title: "כוויה קורנית", imgSrc: "../WhatsApp Image 2024-12-18 at 15.53.34_0d9e192b.jpg", description: "נגרמת מחשיפה לטמפרטורות נמוכות מאוד, שגורמות לקיפאון של הרקמות." },
        { title: "כוויה מקרינה", imgSrc: "../WhatsApp Image 2024-12-18 at 15.45.00_c6aaf58d.jpg", description: "נגרמת מחשיפה לקרינה, כמו קרני שמש (UV), קרינת רנטגן או קרינה רדיואקטיבית." },
        { title: "כוויה כתוצאה מחיכוך", imgSrc: "../WhatsApp Image 2024-12-18 at 15.50.19_66bc27ae.jpg", description: "נגרמת ממגע מהיר ועוצמתי בין העור לבין משטח קשה." },
        { title: "כוויה מקרינה רפואית", imgSrc: "../WhatsApp Image 2024-12-18 at 16.05.44_eeba7747.jpg", description: "נגרמת כתופעת לוואי של טיפול בקרינה לחולי סרטן." },
        { title: "כוויה ממים חמים", imgSrc: "../WhatsApp Image 2024-12-18 at 15.49.44_448aafb9.jpg", description: "תת-סוג של כוויה תרמית, נגרמת ממגע עם נוזלים חמים." },
        { title: "כוויה מקול קורתי", imgSrc: "../WhatsApp Image 2024-12-18 at 15.48.54_208fefa1.jpg", description: "נגרמת מחשיפה פתאומית לקול קורתי (ARC) או לפיצוץ, כמו ריתוך או אש מתלקחת." },
        { title: "כוויה בשאיפה", imgSrc: "../download.jpeg", description: "נגרמת משאיפת עשן או חומרים רעילים במהלך שריפה." }
    ];

    function renderContent(items) {
        contentContainer.innerHTML = ""; // מנקה את התוכן הקיים
        items.forEach((item, index) => {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

            const card = document.createElement("div");
            card.className = "card content-card";
            card.setAttribute("data-index", index);

            const img = document.createElement("img");
            img.className = "card-img-top";
            img.src = item.imgSrc;
            img.alt = item.title;

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = item.title;

            cardBody.appendChild(title);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);

            contentContainer.appendChild(col);

            // Add animation delay
            setTimeout(() => {
                card.classList.add("fade-in");
            }, index * 100);

            // Add event listener for modal
            card.addEventListener("click", () => {
                modalTitle.textContent = item.title;
                modalImg.src = item.imgSrc;
                modalDescription.textContent = item.description;
                infoModal.show();
            });

            // Add hover effect
            card.addEventListener("mouseenter", () => {
                card.classList.add("highlight");
                const dimmedOverlay = document.createElement("div");
                dimmedOverlay.className = "dimmed";
                document.body.appendChild(dimmedOverlay);
            });

            card.addEventListener("mouseleave", () => {
                card.classList.remove("highlight");
                const dimmedOverlay = document.querySelector(".dimmed");
                if (dimmedOverlay) {
                    dimmedOverlay.remove();
                }
            });
        });
    }

    // Filter content based on search
    window.filterContent = () => {
        const searchInput = document.getElementById("search-input");
        const query = searchInput.value.trim().toLowerCase();
        const filteredItems = contentItems.filter(item =>
            item.title.toLowerCase().includes(query)
        );
        renderContent(filteredItems);
    };

    // Initial content rendering
    renderContent(contentItems);
});
