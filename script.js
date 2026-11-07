
// =====================================
// GLOWÉ BEAUTY – PRODUCTS
// =====================================

const products = [

    // FOUNDATION
   
      {  id: 1,
        name: "Soft Matte Foundation",
        brand: "GLOWÉ BEAUTY",
        category: "Foundation",
        price: 35,
        oldPrice: 0,
        tag: "",
        shade: "Warm Sand",
        description: "A comfortable matte foundation with an even finish for everyday wear.",
       image: "https://assets.icanet.se/image/upload/v1734523823/1036091_1.webp"
    },

    // CONCEALER
    {
        id: 2,
        name: "Shape Tape Concealer",
        brand: "TARTE",
        category: "Concealer",
        price: 32,
        oldPrice: 38,
        tag: "BESTSELLER",
        shade: "Light Medium",
        description: "A full-coverage concealer with a natural matte finish that smooths and brightens the under-eye area.",
        image: "https://media.ulta.com/i/ulta/2304918?fmt=auto&h=1400&w=1400"
    },
    {
        id: 3,
        name: "Full Cover Concealer",
        brand: "GLOWÉ BEAUTY",
        category: "Concealer",
        price: 19,
        oldPrice: 0,
        tag: "NEW",
        shade: "Medium Beige",
        description: "A smooth, buildable concealer that blends easily and gives comfortable coverage.",
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=85"
    },

    // MASCARA
    {
        id: 4,
        name: "Lash Drama Mascara",
        brand: "GLOWÉ BEAUTY",
        category: "Mascara",
        price: 22,
        oldPrice: 27,
        tag: "BESTSELLER",
        shade: "Intense Black",
        description: "Add volume and definition to your lashes with a rich black formula.",
        image: "https://www.cf.com.lb/cdn/shop/files/3600531143619.jpg?v=1747213257&width=2048"
    },
    {
        id: 5,
        name: "Length & Lift Mascara",
        brand: "GLOWÉ BEAUTY",
        category: "Mascara",
        price: 20,
        oldPrice: 0,
        tag: "",
        shade: "Black",
        description: "A lengthening mascara that helps create lifted, defined-looking lashes.",
        image: "https://img.pikbest.com/png-images/20250210/sleek-black-mascara-tube-and-wand-white-background_11511494.png%21bw700"
    },

    // EYESHADOW
    {
        id: 6,
        name: "Nude Dreams Eyeshadow Palette",
        brand: "GLOWÉ BEAUTY",
        category: "Eyeshadow",
        price: 38,
        oldPrice: 45,
        tag: "-15%",
        shade: "Nude Collection",
        description: "A versatile palette of wearable neutral shades for soft daytime and evening looks.",
        image: "https://static.thcdn.com/productimg/original/15452558-1695172181988082.jpg"
    },
    {
        id: 7,
        name: "Rose Glow Eyeshadow Palette",
        brand: "GLOWÉ BEAUTY",
        category: "Eyeshadow",
        price: 32,
        oldPrice: 0,
        tag: "NEW",
        shade: "Rose Collection",
        description: "Beautiful rosy shades with matte and shimmer finishes for creative eye looks.",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=85"
    },

    // BLUSH
    {
        id: 8,
        name: "Soft Flush Powder Blush",
        brand: "GLOWÉ BEAUTY",
        category: "Blush",
        price: 21,
        oldPrice: 0,
        tag: "",
        shade: "Peach Bloom",
        description: "A silky powder blush that adds a natural-looking touch of color to your cheeks.",
        image: "https://www.narscosmetics.es/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw3944ed40/hi-res/2023/TOA/NARS_SU23_Sampling_Soldier_TOA_Blush_Behave_GLBL_K.jpg?sh=1600&sm=fit&sw=1600"
    },
    {
        id: 9,
        name: "Dewy Liquid Blush",
        brand: "GLOWÉ BEAUTY",
        category: "Blush",
        price: 25,
        oldPrice: 30,
        tag: "-16%",
        shade: "Pink Rose",
        description: "A blendable liquid blush that gives cheeks a fresh, dewy flush.",
        image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=85"
    },

    // LIPSTICK
    {
        id: 10,
        name: "Velvet Matte Lipstick",
        brand: "GLOWÉ BEAUTY",
        category: "Lipstick",
        price: 18,
        oldPrice: 0,
        tag: "",
        shade: "Classic Nude",
        description: "A rich lipstick with a soft matte finish and comfortable color payoff.",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 11,
        name: "Glossy Lip Shine",
        brand: "GLOWÉ BEAUTY",
        category: "Lipstick",
        price: 16,
        oldPrice: 20,
        tag: "-20%",
        shade: "Rose Shine",
        description: "A glossy lip color that adds shine and a soft wash of beautiful color.",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85"
    },

    // HIGHLIGHTER
    {
        id: 12,
        name: "Golden Hour Highlighter",
        brand: "GLOWÉ BEAUTY",
        category: "Highlighter",
        price: 26,
        oldPrice: 0,
        tag: "",
        shade: "Champagne Glow",
        description: "A finely milled highlighter that creates a luminous glow.",
        image: "https://kuypersshop.nl/cdn/shop/files/Ontwerp_zonder_titel_-_2024-11-04T153649.851.png?v=1730731031"
    },
    {
        id: 13,
        name: "Liquid Glow Drops",
        brand: "GLOWÉ BEAUTY",
        category: "Highlighter",
        price: 29,
        oldPrice: 34,
        tag: "-15%",
        shade: "Soft Gold",
        description: "Lightweight glow drops that can be worn alone or mixed with your foundation.",
        image: "https://trustfundbeauty.com/cdn/shop/products/tfb-tgt-lit-af-duo_99dbeb35-670e-4f44-9b89-653f6d64760d.png?v=1674437667"
    },

    // SKINCARE
    {
        id: 14,
        name: "Hydrating Face Serum",
        brand: "GLOWÉ BEAUTY",
        category: "Skincare",
        price: 28,
        oldPrice: 0,
        tag: "BESTSELLER",
        shade: "30 ml",
        description: "A daily hydrating serum that leaves skin feeling soft and refreshed.",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 15,
        name: "Daily Moisturizing Cream",
        brand: "GLOWÉ BEAUTY",
        category: "Skincare",
        price: 32,
        oldPrice: 38,
        tag: "-15%",
        shade: "50 ml",
        description: "A nourishing daily moisturizer for soft, smooth and hydrated-looking skin.",
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=85"
    },

    // PERFUME
    {
        id: 16,
        name: "Signature Eau de Parfum",
        brand: "GLOWÉ BEAUTY",
        category: "Perfume",
        price: 55,
        oldPrice: 65,
        tag: "POPULAR",
        shade: "50 ml",
        description: "A memorable fragrance with a beautiful balance of warm and fresh notes.",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 17,
        name: "Blooming Rose Perfume",
        brand: "GLOWÉ BEAUTY",
        category: "Perfume",
        price: 48,
        oldPrice: 0,
        tag: "NEW",
        shade: "50 ml",
        description: "A soft floral fragrance inspired by fresh flowers and elegant moments.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=85"
    },

    // BEAUTY SETS
    {
        id: 18,
        name: "Everyday Beauty Set",
        brand: "GLOWÉ BEAUTY",
        category: "Beauty Sets",
        price: 65,
        oldPrice: 82,
        tag: "-20%",
        shade: "Makeup Set",
        description: "A curated collection of everyday makeup essentials in one beautiful set.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=85",
        contents: ["Everyday Foundation", "Volume Mascara", "Velvet Matte Lipstick", "Soft Flush Blush"]
    },
    {
        id: 19,
        name: "Self Care Essentials Set",
        brand: "GLOWÉ BEAUTY",
        category: "Beauty Sets",
        price: 49,
        oldPrice: 59,
        tag: "SPECIAL OFFER",
        shade: "Skincare Set",
        description: "A thoughtful skincare collection for a simple and relaxing self-care routine.",
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=85",
        contents: ["Gentle Face Cleanser", "Hydrating Face Serum", "Daily Moisturizing Cream", "Refreshing Face Mask"]
    },
    {
        id: 20,
        name: "The Makeup Edit Set",
        brand: "GLOWÉ BEAUTY",
        category: "Beauty Sets",
        price: 49,
        oldPrice: 65,
        tag: "SPECIAL OFFER",
        shade: "Complete Makeup Set",
        description: "Your everyday makeup favorites in one beautiful collection. Perfect for creating effortless looks from day to night.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85",
        contents: ["Nude Eyeshadow Palette", "Volume Mascara", "Velvet Matte Lipstick", "Soft Flush Blush"]
    },
    {
        id: 21,
        name: "Perfect Manicure Set",
        brand: "GLOWÉ BEAUTY",
        category: "Beauty Sets",
        price: 29,
        oldPrice: 39,
        tag: "SAVE 25%",
        shade: "Nail Care Set",
        description: "Everything you need for a simple at-home manicure and beautifully cared-for nails.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=85",
        contents: ["3 Nail Polish Colors", "Nourishing Hand Cream", "Professional Nail File", "Cuticle Oil"]
    },
    {
        id: 22,
        name: "Daily Glow Skincare Set",
        brand: "GLOWÉ BEAUTY",
        category: "Beauty Sets",
        price: 55,
        oldPrice: 72,
        tag: "BEST VALUE",
        shade: "Skincare Routine",
        description: "A simple daily skincare routine designed to leave your skin feeling fresh, soft and hydrated.",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85",
        contents: ["Gentle Face Cleanser", "Hydrating Face Serum", "Daily Moisturizing Cream", "Refreshing Face Mask"]
    },
    {
        id: 23,
        name: "Hair Repair Ritual Set",
        brand: "GLOWÉ BEAUTY",
        category: "Beauty Sets",
        price: 42,
        oldPrice: 55,
        tag: "SPECIAL OFFER",
        shade: "Hair Care Set",
        description: "A nourishing hair care collection for a smooth, soft and healthy-looking finish.",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85",
        contents: ["Nourishing Shampoo", "Daily Conditioner", "Repair Hair Mask", "Nourishing Hair Oil"]
    }
];


const categories = [
    "Foundation", "Concealer", "Mascara", "Eyeshadow", "Blush",
    "Lipstick", "Highlighter", "Skincare", "Perfume", "Beauty Sets"
];


// =====================================
// LOCAL STORAGE
// =====================================

const getSaved = key => {
    try {
        return JSON.parse(localStorage.getItem(key) || "[]");
    } catch {
        return [];
    }
};

const save = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


// =====================================
// CART & WISHLIST
// =====================================

function updateCounters() {
    const cart = getSaved("gloweCart");
    const wishlist = getSaved("gloweWishlist");

    const cartCount = document.getElementById("cartCount");
    const wishlistCount = document.getElementById("wishlistCount");

    if (cartCount) {
        cartCount.textContent = cart.reduce(
            (sum, item) => sum + item.quantity, 0
        );
    }

    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

function addToCart(id, quantity = 1) {
    const cart = getSaved("gloweCart");
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ id, quantity });
    }

    save("gloweCart", cart);
    updateCounters();

    alert("Added to your bag!");
}

function toggleWishlist(id) {
    let wishlist = getSaved("gloweWishlist");

    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
    } else {
        wishlist.push(id);
    }

    save("gloweWishlist", wishlist);
    updateCounters();
    renderProductSections();
}


// =====================================
// PRODUCT CARD
// =====================================

function productCard(product) {
    const wishlist = getSaved("gloweWishlist");
    const selected = wishlist.includes(product.id);

    return `
        <article class="product-card">
            <div class="product-image">

                ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}

                <button class="wishlist-btn ${selected ? "selected" : ""}"
                    data-wishlist="${product.id}" aria-label="Add to wishlist">
                    ${selected ? "♥" : "♡"}
                </button>

                <a href="product.html?id=${product.id}" class="product-photo-link">
                    <img src="${product.image}"
                         alt="${product.name}"
                         loading="lazy"
                         onerror="this.onerror=null;this.src='https://placehold.co/600x750/f4eee9/555?text=GLOW%C3%89+Beauty';">
                </a>

                <button class="quick-add" data-add="${product.id}">
                    ADD TO BAG +
                </button>
            </div>

            <div class="product-info">
                <span>${product.brand} · ${product.category.toUpperCase()}</span>

                <a href="product.html?id=${product.id}">
                    <h3>${product.name}</h3>
                </a>

                <p>
                    ${product.oldPrice ? `<del>$${product.oldPrice.toFixed(2)}</del>` : ""}
                    $${product.price.toFixed(2)}
                </p>
            </div>
        </article>
    `;
}


// =====================================
// RENDER PRODUCTS & SPECIAL OFFERS
// =====================================

function renderProductSections() {

    const saleSets = document.getElementById("saleSets");

    if (saleSets) {
        const offers = products.filter(product =>
            product.category === "Beauty Sets"
        );

        saleSets.innerHTML = offers.map(productCard).join("");
    }

    let container = document.getElementById("allCategorySections");

    const promo = document.querySelector(".promo-banner");

    if (!container && promo) {
        container = document.createElement("div");
        container.id = "allCategorySections";
        promo.before(container);
    }

    if (container) {
        container.innerHTML = categories
            .filter(category => category !== "Beauty Sets")
            .map(category => {

                const items = products.filter(product =>
                    product.category === category
                );

                const sectionId = category.toLowerCase().replaceAll(" ", "-");

                return `
                    <section class="category-products section-padding"
                        id="section-${sectionId}">

                        <div class="category-section-heading">
                            <div>
                                <span>GLOWÉ COLLECTION</span>
                                <h2>Shop ${category}</h2>
                            </div>

                            <a href="#section-${sectionId}" class="category-view-all">
                                VIEW ALL ↗
                            </a>
                        </div>

                        <div class="product-grid">
                            ${items.map(productCard).join("")}
                        </div>

                    </section>
                `;

            }).join("");
    }

    // ADD TO BAG
    document.querySelectorAll("[data-add]").forEach(button => {
        button.onclick = () => {
            addToCart(Number(button.dataset.add));
        };
    });

    // WISHLIST
    document.querySelectorAll("[data-wishlist]").forEach(button => {
        button.onclick = () => {
            toggleWishlist(Number(button.dataset.wishlist));
        };
    });
}


// =====================================
// CATEGORY LINKS
// =====================================

function setupCategoryLinks() {

    document.querySelectorAll(".category-card").forEach(card => {
        const category = card.querySelector("h3")?.textContent.trim();

        if (category) {
            const section = category.toLowerCase().replaceAll(" ", "-");
            card.href = `#section-${section}`;
        }
    });

    document.querySelectorAll(".category-nav a").forEach(link => {

        const label = link.textContent.trim().toLowerCase();

        const mapping = {
            "makeup": "Foundation",
            "skin care": "Skincare",
            "hair care": "Skincare",
            "perfume": "Perfume",
            "body care": "Skincare",
            "beauty sets": "Beauty Sets"
        };

        if (mapping[label]) {
            link.href = `#section-${mapping[label].toLowerCase().replaceAll(" ", "-")}`;
        }
    });
}


// =====================================
// HERO SLIDER
// =====================================

function setupSlider() {

    const slides = [...document.querySelectorAll(".hero-slide")];
    const dots = [...document.querySelectorAll(".dot")];

    if (!slides.length) return;

    let current = 0;
    let timer;

    function showSlide(index) {
        current = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === current);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === current);
        });
    }

    function restart() {
        clearInterval(timer);
        timer = setInterval(() => showSlide(current + 1), 5000);
    }

    document.getElementById("prevSlide")?.addEventListener("click", () => {
        showSlide(current - 1);
        restart();
    });

    document.getElementById("nextSlide")?.addEventListener("click", () => {
        showSlide(current + 1);
        restart();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            restart();
        });
    });

    showSlide(0);
    restart();
}


// =====================================
// HEADER, MOBILE MENU & SEARCH
// =====================================

function setupHeader() {

    document.getElementById("menuToggle")?.addEventListener("click", () => {
        document.getElementById("categoryNav")?.classList.toggle("open");
    });

    document.querySelectorAll("#categoryNav a").forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("categoryNav")?.classList.remove("open");
        });
    });

    document.getElementById("searchToggle")?.addEventListener("click", () => {
        document.getElementById("searchArea")?.classList.toggle("show");
        document.getElementById("searchInput")?.focus();
    });

    document.getElementById("closeSearch")?.addEventListener("click", () => {
        document.getElementById("searchArea")?.classList.remove("show");

        const input = document.getElementById("searchInput");

        if (input) input.value = "";

        document.querySelectorAll(".product-card").forEach(card => {
            card.style.display = "";
        });
    });

    document.getElementById("searchInput")?.addEventListener("input", event => {

        const query = event.target.value.toLowerCase().trim();

        document.querySelectorAll(".product-card").forEach(card => {
            card.style.display = card.textContent.toLowerCase().includes(query)
                ? ""
                : "none";
        });
    });
}


// =====================================
// PRODUCT DETAILS PAGE
// =====================================

function renderProductPage() {

    const productPage = document.getElementById("productDetails");

    if (!productPage) return;

    const id = Number(new URLSearchParams(location.search).get("id"));
    const product = products.find(item => item.id === id);

    if (!product) {
        productPage.innerHTML = `
            <div class="product-not-found">
                <h2>Product not found</h2>
                <a href="index.html">Back to shop</a>
            </div>
        `;
        return;
    }

    const contentsHTML = product.contents
        ? `
            <div class="set-contents">
                <h3>WHAT'S INSIDE THE SET?</h3>
                <ul>
                    ${product.contents.map(item => `<li>✓ ${item}</li>`).join("")}
                </ul>
            </div>
        `
        : `
            <div class="detail-option">
                <label>OPTION / SHADE</label>
                <div>${product.shade}</div>
            </div>
        `;

    productPage.innerHTML = `

        <div class="product-detail-image">
            <img src="${product.image}"
                 alt="${product.name}"
                 onerror="this.onerror=null;this.src='https://placehold.co/600x750/f4eee9/555?text=GLOW%C3%89+Beauty';">
        </div>

        <div class="product-detail-info">

            <span class="detail-brand">${product.brand}</span>
            <p class="detail-category">${product.category}</p>
            <h1>${product.name}</h1>

            <div class="detail-price">
                ${product.oldPrice ? `<del>$${product.oldPrice.toFixed(2)}</del>` : ""}
                <strong>$${product.price.toFixed(2)}</strong>
            </div>

            <p class="detail-description">${product.description}</p>

            ${contentsHTML}

            <div class="detail-quantity">
                <label for="productQuantity">QUANTITY</label>

                <div class="quantity-control">
                    <button id="minusQty">−</button>
                    <input id="productQuantity" type="number" min="1" max="20" value="1">
                    <button id="plusQty">+</button>
                </div>
            </div>

            <button class="detail-add-cart" id="detailAddCart">
                ADD TO BAG
            </button>

            <button class="detail-wishlist" id="detailWishlist">
                ♡ ADD TO WISHLIST
            </button>

            <div class="detail-extra">
                <p>✓ Carefully selected beauty essentials</p>
                <p>✓ Delivery across Lebanon</p>
                <p>✓ Contact us for product information</p>
            </div>

        </div>
    `;

    const quantity = document.getElementById("productQuantity");

    document.getElementById("minusQty").onclick = () => {
        quantity.value = Math.max(1, Number(quantity.value) - 1);
    };

    document.getElementById("plusQty").onclick = () => {
        quantity.value = Math.min(20, Number(quantity.value) + 1);
    };

    document.getElementById("detailAddCart").onclick = () => {
        addToCart(
            product.id,
            Math.max(1, Number(quantity.value) || 1)
        );
    };

    document.getElementById("detailWishlist").onclick = () => {

        toggleWishlist(product.id);

        document.getElementById("detailWishlist").textContent =
            getSaved("gloweWishlist").includes(product.id)
                ? "♥ ADDED TO WISHLIST"
                : "♡ ADD TO WISHLIST";
    };

    // RELATED PRODUCTS
    const relatedSection = document.getElementById("relatedProducts");

    if (relatedSection) {

        const related = products.filter(item =>
            item.category === product.category && item.id !== product.id
        );

        relatedSection.innerHTML = `
            <div class="section-heading">
                <span>YOU MAY ALSO LIKE</span>
                <h2>More <i>${product.category}.</i></h2>
            </div>

            <div class="product-grid">
                ${related.map(productCard).join("")}
            </div>
        `;

        relatedSection.querySelectorAll("[data-add]").forEach(button => {
            button.onclick = () => addToCart(Number(button.dataset.add));
        });

        relatedSection.querySelectorAll("[data-wishlist]").forEach(button => {
            button.onclick = () => toggleWishlist(Number(button.dataset.wishlist));
        });
    }
}


// =====================================
// START
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    setupSlider();
    setupHeader();
    renderProductSections();
    setupCategoryLinks();
    renderProductPage();
    updateCounters();

});
