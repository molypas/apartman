// Početni jezik je HR (Hrvatski)
let currentLanguage = 'hr';

// Rječnik za prijevode
const translations = {
    hr: {
        title: "Global Cherry Apartman",
        description: "Elegantno, moderno i udobno mjesto za opuštanje u srcu grada.",
        galleryTitle: "Galerija",
        about: "O Apartmanu",
        welcomeText: "Dobrodošli u naš apartman u srcu Zagreba! 🌆\n" +
            "Neka vaš boravak u Zagrebu bude nezaboravan uz naš svježe renovirani apartman smješten u četvrti Trešnjevka, nedaleko od centra grada. Uživajte u udobnosti i miru u ovom dvosobnom apartmanu koji je nedavno renoviran i potpuno novouređen.\n" +
            "Apartman se nalazi na prvom katu zgrade iz 2000. godine, koja je opremljena liftom za vašu praktičnost. Uživajte u miru s obzirom na to da se zgrada nalazi u slijepoj ulici, a parking je besplatan ispred zgrade. Okruženi livadom koja pruža osjećaj oaze u gradu, osjetit ćete mir tijekom svog boravka.\n" +
            "Apartman se sastoji od predsoblja, prostrane spavaće sobe s udobnim bračnim krevetom, moderne kuhinje i dnevnog boravka u stilu open space-a, balkona za opuštanje te elegantne kupaonice. Svi uređaji u apartmanu su potpuno novi, pružajući vam sav komfor na dohvat ruke.\n" +
            "Uživajte u superbrzom internetu, širokom izboru TV kanala sa Netflixom i HBO MAX-om, Play Stationu za zabavu te frižideru opremljenom sustavom hladne vode koji će osigurati vaše osvježenje u svakom trenutku.\n" +
            "Ovdje, u našem apartmanu, pružit ćemo vam savršen spoj udobnosti i praktičnosti kako biste se osjećali kao kod kuće, dok istovremeno istražujete čarobni grad Zagreb. Rezervirajte sada i započnite svoje uzbudljivo putovanje!",
        featuresTitle: "Sadržaji:",
        feature1: "1 spavaća soba s bračnim krevetom i krevetićem za djecu",
        feature2: "Dnevni boravak s kožnim kaučem na rasklapanje",
        feature3: "Balkon",
        feature4: "Nova kuhinja s pripadajućim aparatima ( indukcijska ploča, napa, kuhalo, mikrovalna pećnica, hladnjak sa sustavom za hladnu vodu za piće)",
        feature5: "Moderna kupaonica s walk-in tušem (sušilo za kosu)",
        feature6: "Superbrzi Wi-Fi, TV s 200+ kanala, Netflix, HBO MAX, PlayStation",
        feature7: "Klima uređaj",
        feature8: "Garažno parkirno mjesto na -1 etaži, lift",
        location: "Lokacija:",
        locationText: "Apartman je smješten u četvrti Trešnjevka, u mirnoj i slijepoj ulici. Nalazi se nadomak centra grada sa puno opcija javnog prijevoza u blizini.",

        contact: "Kontaktirajte nas",
        nameLabel: "Ime i prezime:",
        emailLabel: "Email / broj telefona:",
        messageLabel: "Poruka:",
        arrivalLabel: "Datum dolaska:",
        departureLabel: "Datum odlaska:",
        guestsLabel: "Broj osoba:",
        submitBtn: "Pošaljite podatke",
        footerText: "&copy; 2024 Global Cherry Apartman | Kontakt: global.cherry.gold@gmail.com"
    },
    en: {
        title: "Global Cherry Apartment",
        description: "Elegant, modern, and comfortable place to relax in the heart of the city.",
        galleryTitle: "Gallery",
        about: "About the Apartment",
        welcomeText: " Welcome to GLOBAL CHERRY - Your Cozy Oasis in the Heart of Zagreb \n" +
            "Immerse yourself in the vibrant city life of Zagreb and make Global Cherry your home away from home during your stay in Croatia's capital. Located in the charming Trešnjevka neighborhood, just a stone's throw away from the bustling city center, this newly renovated apartment offers the perfect blend of comfort and convenience.\n" +
            "Step into the welcoming entrance hall that leads you into a stylishly decorated living space, where the kitchen seamlessly merges with the cozy living room, creating a perfect setting for relaxation. The apartment features a tranquil bedroom with a plush double bed for a restful night's sleep, a modern bathroom, and a private balcony where you can unwind with a cup of coffee or a glass of wine.\n" +
            "Enjoy the convenience of high-speed internet, a TV with over 200 programs including popular streaming services like Netflix and HBO MAX, Play Station and a fridge equipped with a cold water system for pure refreshment.\n" +
            "Exploring the cultural gems near Global Cherry is a breeze, as you'll find yourself within easy reach of museums, art galleries, and historical landmarks that offer a glimpse into Zagreb's rich heritage. Indulge in the culinary delights of the neighborhood at renowned restaurants and cafes serving up traditional Croatian dishes and international cuisine that will tantalize your taste buds.\n" +
            "For the active traveler, Trešnjevka offers a variety of sport activities, from jogging in nearby parks to cycling along scenic trails. Whether you're a culture enthusiast, a foodie, or a sports lover, there's something for everyone near Global Cherry.\n" +
            "Book your stay at Global Cherry now and experience the best of Zagreb right at your doorstep. Your unforgettable Croatian adventure awaits!",
        featuresTitle: "Features:",
        feature1: "1 bedroom with a double bed and a crib for children",
        feature2: "Living room with a fold-out leather sofa",
        feature3: "Balcony",
        feature4: "New kitchen with built-in appliances (induction cooktop, range hood, kettle, microwave oven, refrigerator with a chilled drinking water system)",
        feature5: "Modern bathroom with a walk-in shower (hairdryer included)",
        feature6: "Ultra-fast Wi-Fi, TV with 200+ channels, Netflix, HBO Max, PlayStation",
        feature7: "Air conditioning",
        feature8: "Garage parking space on level -1, elevator",
        location: "Location:",
        locationText: "The apartment is situated in the Trešnjevka district, in a peaceful dead-end street. It is near the city center, with many public transport options nearby.",


        contact: "Contact Us",
        nameLabel: "Full Name:",
        emailLabel: "Email / phone number:",
        messageLabel: "Message:",
        arrivalLabel: "Arrival Date:",
        departureLabel: "Departure Date:",
        guestsLabel: "Number of People:",
        submitBtn: "Submit Information",
        footerText: "&copy; 2024 Global Cherry Apartment | Contact: global.cherry.gold@gmail.com"
    }
};

// Funkcija za prebacivanje jezika
function toggleLanguage() {
    // Prebaci između jezika
    currentLanguage = (currentLanguage === 'hr') ? 'en' : 'hr';

    // Ažuriraj tekstove na stranici prema odabranom jeziku
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerHTML = translations[currentLanguage][key];
        // Također mijenjamo "title" tag
        if (key === 'title') {
            document.title = translations[currentLanguage][key];
        }
    });
}
let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.getElementById('slider');
    const slides = slider.querySelectorAll('img');
    const totalSlides = slides.length;

    // Update current index
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Move slider to show the correct image
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function initMap() {
    const apartmentLocation = { lat: 45.808444, lng: 15.941056 }; // Koordinate apartmana

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: apartmentLocation,
    });

    const marker = new google.maps.Marker({
        position: apartmentLocation,
        map: map,
        title: "Gold Cherry Apartman",
    });
}
window.initMap = initMap;