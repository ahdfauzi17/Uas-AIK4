document.addEventListener("DOMContentLoaded", function () {
    const acc = document.querySelectorAll(".accordion");

    acc.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    const pageId = document.body.id;
    const panels = document.querySelectorAll(".panel");

    panels.forEach(panel => {
        const text = panel.innerText.trim();
        if (!text.match(/Latin:/) && !panel.querySelector("em")) {
            const arabic = text.split("\n")[0].trim(); // Ambil baris pertama
            const latinText = getLatinTransliteration(arabic, pageId);
            if (latinText !== "(Latin belum tersedia)") {
                const latin = document.createElement("p");
                latin.style.marginTop = "5px";
                latin.style.fontStyle = "italic";
                latin.innerText = "Latin: " + latinText;
                panel.appendChild(latin);
            }
        }
    });

    function getLatinTransliteration(text, page) {
        const dict = {
            "اللّٰهُ أَكْبَرُ": "Allahu Akbar",
            "أُصَلِّي فَرْضَ الصُّبْحِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى": "Ushallī farḍa aṣ-ṣubḥi rak‘ataini lillāhi ta‘ālā",
            "أُصَلِّي فَرْضَ الظُّهْرِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى": "Ushallī farḍa aẓ-ẓuḥri rak‘ataini lillāhi ta‘ālā",
            "أُصَلِّي فَرْضَ العَصْرِ أَرْبَعَ رَكَعَاتٍ لِلّٰهِ تَعَالَى": "Ushallī farḍa al-‘aṣri arba‘a raka‘ātin lillāhi ta‘ālā",
            "أُصَلِّي فَرْضَ المَغْرِبِ ثَلاَثَ رَكَعَاتٍ لِلّٰهِ تَعَالَى": "Ushallī farḍa al-maghribi ṯalātha raka‘ātin lillāhi ta‘ālā",
            "أُصَلِّي فَرْضَ العِشَاءِ أَرْبَعَ رَكَعَاتٍ لِلّٰهِ تَعَالَى": "Ushallī farḍa al-‘ishā’i arba‘a raka‘ātin lillāhi ta‘ālā",
            "اللّٰهُ أَكْبَرُ كَبِيْرًا، وَالْحَمْدُ لِلّٰهِ كَثِيْرًا، وَسُبْحَانَ اللّٰهِ بُكْرَةً وَأَصِيْلًا":
                "Allāhu akbaru kabīrā, wal-ḥamdu lillāhi kathīrā, wa subḥānallāhi bukratan wa aṣīlā",
            "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ... (hingga akhir surat)": "Bismillāhir-Raḥmānir-Raḥīm... (hingga akhir surat)",
            "قُلْ هُوَ اللّٰهُ أَحَدٌ": "Qul huwallāhu Aḥad",
            "سُبْحَانَ رَبِّيَ الْعَظِيمِ": "Subḥāna Rabbiyal-‘Aẓīm",
            "سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ": "Sami‘allāhu liman ḥamidah",
            "سُبْحَانَ رَبِّيَ الأَعْلَى": "Subḥāna Rabbiyal-A‘lā",
            "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي":
                "Rabbighfir lī warḥamnī wajburnī warfa‘nī wahdinī wa ‘āfinī warzuqnī",
            "التَّحِيَّاتُ لِلّٰهِ... وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ":
                "At-taḥiyyātu lillāh... wa ash-hadu anna Muḥammadan ‘abduhu wa rasūluh",
            "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ... إِنَّكَ حَمِيدٌ مَجِيدٌ":
                "Allāhumma ṣalli ‘alā Muḥammad... innaka ḥamīdun majīd",
            "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ": "As-salāmu ‘alaikum wa raḥmatullāh"
        };

        return dict[text] || "(Latin belum tersedia)";
    }
});
