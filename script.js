const allQuestions = [
    // I. BUHAY NI FRANCISCO BALAGTAS
    { q: "Kailan ipinanganak si Francisco Balagtas?", a: ["Abril 2, 1788", "Hulyo 22, 1842", "Abril 2, 1955", "Marso 28, 1788"], c: 0, h: "Ipinanganak siya sa huling bahagi ng ika-18 siglo." },
    { q: "Saang bayan sa Bulacan isinilang si Balagtas?", a: ["Udyong", "Pandacan", "Bigaa", "Balanga"], c: 2, h: "Ang bayan na ito ay ipinangalan na rin sa kanya ngayon." },
    { q: "Ano ang pangalan ng ama ni Francisco Balagtas?", a: ["Lope K. Santos", "Juan Balagtas", "Francisco Baltazar", "Juan Tiambeng"], c: 1, h: "Siya ay isang panday." },
    { q: "Bakit ipinadala si Balagtas sa Tondo, Maynila?", a: ["Magbakasyon", "Maghanap ng trabaho", "Mag-aral kapalit ng paninilbihan", "Iwasan ang kaaway"], c: 2, h: "Nagsilbi siya sa bahay ni Doña Trinidad." },
    { q: "Saang mga paaralan nag-aral si Balagtas?", a: ["San Jose at San Juan de Letran", "Ateneo at UST", "Santa Isabel at San Jose", "UP at Letran"], c: 0, h: "Dalawang tanyag na paaralan sa loob ng Intramuros." },
    { q: "Sino ang pinag-alayan ng 'Kay Celia'?", a: ["Juana Tiambeng", "Juana Cruz", "Maria Asuncion Rivera", "Magdalena Ramos"], c: 2, h: "Ang kanyang initials ay M.A.R." },
    { q: "Dahilan ng unang pagkakakulong sa Pandacan?", a: ["Pagmamarunong", "Karibal sa pag-ibig", "Pagnanakaw", "Paglaban sa gobyerno"], c: 1, h: "May kinalaman ito sa kanyang karibal na si Nanong Capule." },
    { q: "Sino ang naging asawa ni Balagtas sa Bataan?", a: ["Maria Asuncion Rivera", "Juana Cruz", "Juana Tiambeng", "Magdalena Tiambeng"], c: 2, h: "Ikinasal sila noong Hulyo 22, 1842." },
    { q: "Bakit muling nakulong si Balagtas noong 1856?", a: ["Subersibong libro", "Ginupitan ng buhok ang katulong", "Buwis", "Pag-alis ng walang paalam"], c: 1, h: "Isang reklamo mula sa isang Alferez." },
    { q: "Ilan ang naging supling nina Francisco at Juana?", a: ["5", "8", "11", "12"], c: 2, h: "Labing-isa ang kanilang naging anak ngunit ilan lang ang nabuhay." },

    // II. APAT NA HIMAGSIK
    { q: "Sino ang naglagom ng 'Apat na Himagsik' noong 1955?", a: ["Jose Rizal", "Lope K. Santos", "Juan Luna", "Marcelo H. Del Pilar"], c: 1, h: "Siya ang Ama ng Balarilang Tagalog." },
    { q: "Alin ang HINDI kabilang sa apat na himagsik?", a: ["Malupit na pamahalaan", "Hidwang pananampalataya", "Dayuhang mangangalakal", "Mababang uri ng panitikan"], c: 2, h: "Ang apat na himagsik ay tungkol sa gobyerno, relihiyon, asal, at panitikan." },
    { q: "Tulang pasalaysay hango sa panitikang Europeo?", a: ["Haiku", "Metriko Romanse", "Soneto", "Tanaga"], c: 1, h: "Isang mahabang tula tungkol sa pakikipagsapalaran." },
    { q: "Anong metriko romanse ang may 12 pantig?", a: ["Korido", "Dalit", "Awit", "Epiko"], c: 2, h: "Ang Florante at Laura ay isang halimbawa nito." },
    { q: "Alin ang halimbawa ng isang Korido?", a: ["Florante at Laura", "Ibong Adarna", "Noli Me Tangere", "Kay Celia"], c: 1, h: "Mayroon itong 8 pantig bawat taludtod." },
    { q: "Ano ang katangian ng himig ng isang Korido?", a: ["Mabagal", "Mabilis", "Malungkot", "Walang indayog"], c: 1, h: "Tinatawag din itong 'allegro'." },
    { q: "Ilang pantig sa bawat taludtod ng Korido?", a: ["8", "10", "12", "14"], c: 0, h: "Mas maikli ito kaysa sa Awit." },
    { q: "Bakit itinuturing na 'malikhaing balatkayo' ang akda?", a: ["Nakatago ang tunay na adhikain", "Mahilig sa maskara", "Hindi totoong tao", "Ibang wika"], c: 0, h: "Ginamit ito para makaiwas sa sensura ng Kastila." },
    { q: "Alin ang katangian ng Awit?", a: ["Kababalaghan", "Mas makatotohanan", "7 pantig", "Mabilis bigkasin"], c: 1, h: "Ang himig nito ay mabagal o 'andante'." },
    { q: "Layunin ng Metriko Romanse noong kolonyalismo?", a: ["Mang-aliw at magturo ng aral", "Magturo ng Espanyol", "Manghikayat ng himagsikan", "Sining"], c: 0, h: "Ginamit ito ng simbahan at manunulat sa pagpapalaganap ng turo." },

    // III. ELEMENTO NG KUWENTO
    { q: "Ito ay tumutukoy sa mga panauhin o gumaganap.", a: ["Tagpuan", "Banghay", "Tauhan", "Estilo"], c: 2, h: "Sila ang nagbibigay-buhay sa kwento." },
    { q: "Saan at kailan naganap ang kwento?", a: ["Simula", "Tagpuan", "Wakas", "Banghay"], c: 1, h: "Halimbawa: Gubat na Mapanglaw." },
    { q: "Pagkakasunod-sunod ng mga pangyayari?", a: ["Elemento", "Banghay", "Tunggalian", "Paksa"], c: 1, h: "Dito makikita ang daloy ng istorya." },
    { q: "Bahagi kung saan makikita ang suliranin?", a: ["Wakas", "Gitna", "Simula", "Kasukdulan"], c: 2, h: "Dito ipinapakilala ang problema." },
    { q: "Pahiwatig sa magaganap sa hinaharap?", a: ["Parallelism", "Foreshadowing", "In medias res", "Simultaneity"], c: 1, h: "Tinatawag din itong pagyuyugto." },
    { q: "Ano ang ibig sabihin ng 'In medias res'?", a: ["Simula sa dulo", "Simula sa gitna", "Simula sa bata", "Walang dulo"], c: 1, h: "Latin term para sa 'sa gitna ng mga bagay'." },
    { q: "Paggamit ng magkakatulad na estruktura?", a: ["Pagkakasabay", "Paralelismo", "Alegorya", "Sukat"], c: 1, h: "Ginagamit para sa emphasis o diin." },
    { q: "Pagsasalaysay ng dalawang magkasabay na pangyayari?", a: ["Simultaneity", "Foreshadowing", "In medias res", "Flashback"], c: 0, h: "Sabay na nagaganap ang aksyon." },
    { q: "Naglalahad ng resulta ng mga pangyayari?", a: ["Simula", "Gitna", "Wakas", "Tunggalian"], c: 2, h: "Dito nagtatapos ang kwento." },
    { q: "Labanan sa pagitan ng dalawang panig?", a: ["Banghay", "Tunggalian", "Kasukdulan", "Kakalasan"], c: 1, h: "Maaring panlabas o panloob na labanan." },

    // IV. ELEMENTONG PANLINGGUWISTIKA
    { q: "Bilang ng pantig sa bawat taludtod?", a: ["Tugma", "Sukat", "Talinghaga", "Estilo"], c: 1, h: "Halimbawa nito ay 12 pantig sa bawat linya." },
    { q: "Pagkakapare-pareho ng dulong tunog?", a: ["Sukat", "Estilo", "Tugma", "Aliterasyon"], c: 2, h: "Nagbibigay ito ng indayog sa tula." },
    { q: "Uri ng tugmang katinig sa b, k, d, g, p, s, t?", a: ["Mahina", "Malakas", "Patinig", "May impit"], c: 1, h: "Tinatawag itong tugmang malakas." },
    { q: "Tugmang katinig sa l, m, n, ng, r, w, y?", a: ["Mahina", "Malakas", "Walang impit", "Patinig"], c: 0, h: "Tinatawag itong tugmang mahina." },
    { q: "Tinig ay tila ba musikang kay sarap pakinggan.", a: ["Pagwawangis", "Personipikasyon", "Pagtutulad", "Pagmamalabis"], c: 2, h: "Gumagamit ng salitang 'tila ba'." },
    { q: "Si Rica ay Venus ng kagandahan.", a: ["Pagtutulad", "Pagwawangis", "Pagmamalabis", "Personipikasyon"], c: 1, h: "Direktang paghahambing (Metaphor)." },
    { q: "Sumasayaw ang mga dahon.", a: ["Pagmamalabis", "Pagtutulad", "Personipikasyon", "Pagwawangis"], c: 2, h: "Pagbibigay-buhay sa mga bagay na walang buhay." },
    { q: "Bumaha ng luha sa kanilang paghihiwalay.", a: ["Pagmamalabis", "Personipikasyon", "Pagwawangis", "Pagtutulad"], c: 0, h: "Sobra-sobrang paglalarawan (Hyperbole)." },
    { q: "Salaysay na may malalim o nakatagong kahulugan?", a: ["Tayutay", "Alegorya", "Banghay", "Imahen"], c: 1, h: "Ang gubat ay alegorya ng Pilipinas." },
    { q: "Diyos ng pagbabaka sa mitolohiyang Romano?", a: ["Pluton", "Marte", "Apolo", "Piton"], c: 1, h: "Siya ang kinakatawan ng digmaan." },

    // V. TALASALITAAN AT KAALAMAN
    { q: "Ano ang kahulugan ng 'Ginsa'?", a: ["Unti-unti", "Bigla", "Maingay", "Masaya"], c: 1, h: "Kasingkahulugan ng 'kaginsa-ginsa'." },
    { q: "Ano ang 'Sipres'?", a: ["Halaman", "Hayop", "Kahoy na malaki at tuwid", "Ibon"], c: 2, h: "Isang uri ng puno na madalas sa sementeryo." },
    { q: "Diyosa sa impiyerno, anak ni Aqueronte?", a: ["Ninfas", "Harpias", "Furias", "Parcas"], c: 2, h: "Sila ang mga tagapagparusa sa kabilang buhay." },
    { q: "Katangian ng isang tiyak na kategorya ng tao?", a: ["Alegorya", "Estereotipo", "Imahen", "Panitikan"], c: 1, h: "Isang fixed na tingin sa isang grupo." },
    { q: "Larawan o anyo ng isang tao o santo?", a: ["Pagkain", "Imahen", "Tunog", "Tula"], c: 1, h: "Visual representation." },
    { q: "Tunggalian sa isipan ni Florante?", a: ["Tao vs Tao", "Tao vs Sarili", "Tao vs Kalikasan", "Tao vs Lipunan"], c: 1, h: "Labanan sa loob ng sariling damdamin." },
    { q: "Alitan nina Florante at Adolfo?", a: ["Tao vs Tao", "Tao vs Sarili", "Tao vs Lipunan", "Tao vs Kalikasan"], c: 0, h: "Labanan ng dalawang magkaibang tao." },
    { q: "Ano ang ibig sabihin ng 'Lingguwistika'?", a: ["Bituin", "Siyentipikong pag-aaral ng wika", "Kasaysayan", "Halaman"], c: 1, h: "Mula sa salitang Latin na 'lingua'." },
    { q: "Ang 'Harpias' ay may katawan na parang ____.", a: ["Isda", "Ibon", "Leon", "Ahas"], c: 1, h: "Sila ay mga nilalang na may pakpak." },
    { q: "Ano ang kinakatawan ni 'Marte' sa alegorya?", a: ["Pag-ibig", "Digmaan at kaguluhan", "Katalinuhan", "Pag-asa"], c: 1, h: "Siya ang simbolo ng karahasan sa akda." }
];

let currentIdx = 0;
let score = 0;

function initQuiz() {
    const data = allQuestions[currentIdx];
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('hint-text').innerText = data.h;
    document.getElementById('hint-text').style.display = 'none';
    
    const optionsBox = document.getElementById('options-box');
    optionsBox.innerHTML = '';

    data.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerHTML = `<b>${String.fromCharCode(65 + i)}.</b> ${opt}`;
        btn.onclick = () => selectOption(i, btn);
        optionsBox.appendChild(btn);
    });

    updateProgress();
}

function selectOption(idx, btn) {
    const correctIdx = allQuestions[currentIdx].c;
    const allBtns = document.querySelectorAll('.opt-btn');
    allBtns.forEach(b => b.disabled = true);

    if (idx === correctIdx) {
        btn.classList.add('correct');
        score++;
        document.getElementById('score-text').innerText = score;
    } else {
        btn.classList.add('wrong');
        allBtns[correctIdx].classList.add('correct');
    }
    document.getElementById('next-btn').style.display = 'block';
}

function updateProgress() {
    const percent = ((currentIdx + 1) / allQuestions.length) * 100;
    document.getElementById('bar-fill').style.width = percent + '%';
    document.getElementById('q-count').innerText = `${currentIdx + 1}/${allQuestions.length}`;
}

function toggleHint() {
    const hint = document.getElementById('hint-text');
    hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
}

function handleNext() {
    currentIdx++;
    if (currentIdx < allQuestions.length) {
        document.getElementById('next-btn').style.display = 'none';
        initQuiz();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    document.getElementById('quiz-box').innerHTML = `
        <h1 style="font-size: 2.5rem;">Tapos na! 🏆</h1>
        <p style="font-size: 1.2rem;">Ang iyong huling score ay:</p>
        <div style="font-size: 4rem; color: var(--pink-glow); margin: 20px 0;">${score} / ${allQuestions.length}</div>
        <button class="opt-btn" style="width: 100%; text-align: center;" onclick="location.reload()">Ulitin ang Quiz</button>
    `;
}

initQuiz();