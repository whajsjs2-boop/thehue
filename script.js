const CONTACT_CONFIG = {
    phone: "010-5184-9085",
    kakaoId: "godduck9",
    kakaoUrl: "http://qr.kakao.com/talk/CpJlwh7fsAUiuZpEtHqcjV7cPss-"
};

const COURSE_OPTIONS = {
    sportsMassage: {
        label: "스포츠마사지",
        aliases: ["스포츠마사지", "스포츠", "sportsMassage", "sports massage"],
        prices: { "60": "80,000원", "90": "100,000원", "120": "120,000원" }
    },
    oil: {
        label: "오일",
        aliases: ["오일", "oil", "아로마"],
        prices: { "60": "90,000원", "90": "110,000원", "120": "130,000원" }
    },
    healing: {
        label: "감성힐링",
        aliases: ["감성", "힐링", "감성힐링", "healing"],
        prices: { "60": "100,000원", "90": "120,000원", "120": "140,000원" }
    },
    sportsMassageOil: {
        label: "스포츠마사지 + 오일",
        aliases: ["스포츠마사지오일", "스포츠마사지+오일", "스포츠오일", "스포츠+오일", "sportsMassage oil", "sports massage oil"],
        prices: { "90": "120,000원", "120": "140,000원" }
    },
    sportsMassageHealing: {
        label: "스포츠마사지 + 감성힐링",
        aliases: ["스포츠마사지감성", "스포츠마사지힐링", "스포츠마사지+감성힐링", "스포츠마사지+힐링", "스포츠감성", "스포츠힐링", "스포츠+감성힐링", "스포츠+힐링"],
        prices: { "90": "140,000원", "120": "160,000원" }
    },
    sportsMassageHealingFoot: {
        label: "스포츠마사지 + 감성힐링 + 발",
        aliases: ["스포츠마사지감성발", "스포츠마사지힐링발", "스포츠마사지+감성힐링+발", "스포츠마사지+힐링+발", "스포츠감성발", "스포츠힐링발", "스포츠+감성힐링+발", "스포츠+힐링+발", "발"],
        prices: { "90": "160,000원", "120": "180,000원" }
    },
    vvipOilFoot: {
        label: "VVIP 스포츠마사지 + 오일 + 발",
        aliases: ["vvip오일발", "스포츠마사지오일발", "오일발", "150오일"],
        prices: { "150": "200,000원" }
    },
    vvipHealingFoot: {
        label: "VVIP 스포츠마사지 + 감성힐링 + 발",
        aliases: ["vvip감성발", "vvip힐링발", "감성발", "힐링발", "150감성", "150힐링"],
        prices: { "150": "220,000원" }
    }
};

const PRICE_BUTTONS = [
    ["스포츠마사지", "sportsMassage"],
    ["오일", "oil"],
    ["감성힐링", "healing"],
    ["스포츠마사지+오일", "sportsMassageOil"],
    ["스포츠마사지+감성힐링", "sportsMassageHealing"],
    ["스포츠마사지+감성힐링+발", "sportsMassageHealingFoot"],
    ["VVIP 스포츠마사지+오일+발", "vvipOilFoot"],
    ["VVIP 스포츠마사지+감성힐링+발", "vvipHealingFoot"]
];

const chatState = {
    mode: null,
    courseKey: null
};

let VIRTUAL_REVIEWS = [
    ["mk_1207", "VIP 120분 스포츠마사지+감성힐링+발", "120분 조합으로 받으니 시간이 딱 맞고 전체적으로 만족도가 높았습니다."],
    ["june88", "VIP 120분 스포츠마사지+오일", "오일이랑 스포츠마사지 조합이 좋아서 다음에도 같은 코스로 볼 것 같습니다."],
    ["neo_41", "VIP 120분 스포츠마사지+감성힐링", "상담 답변이 빠르고 코스 설명이 깔끔해서 선택하기 쉬웠습니다."],
    ["yoon77", "VVIP 150분 스포츠마사지+감성힐링+발", "긴 코스라 여유가 있고 발 관리까지 들어가서 구성이 좋았습니다."],
    ["river02", "VIP 120분 스포츠마사지+감성힐링+발", "피곤한 날 보기 좋은 구성입니다. 120분이 제일 무난했습니다."],
    ["han_904", "오일 90분", "부담 없이 고르기 좋고 가격 안내도 명확했습니다."],
    ["k_calm", "VIP 120분 스포츠마사지+오일", "상담에서 말이 잘 통해서 예약까지 빠르게 진행됐습니다."],
    ["mori35", "스포츠마사지 120분", "시원한 느낌을 원하면 스포츠마사지 120분도 괜찮았습니다."],
    ["sol_19", "VIP 120분 스포츠마사지+감성힐링", "코스 설명이 복잡하지 않아서 좋았습니다."],
    ["blue91", "VVIP 150분 스포츠마사지+오일+발", "시간 여유가 있으면 150분 조합이 확실히 편합니다."]
];

const REVIEW_SERVICES = [
    "VIP 120분 스포츠마사지+감성힐링+발",
    "VIP 120분 스포츠마사지+감성힐링",
    "VIP 120분 스포츠마사지+오일",
    "VVIP 150분 스포츠마사지+감성힐링+발",
    "VVIP 150분 스포츠마사지+오일+발",
    "스포츠마사지+감성힐링 120분",
    "오일 120분",
    "스포츠마사지 120분"
];

const REVIEW_TEXTS = [
    "120분 구성이 가장 균형이 좋았고 다음에도 같은 코스로 볼 생각입니다.",
    "상담 답변이 빠르고 필요한 내용만 정리돼서 예약이 편했습니다.",
    "코스 차이를 이해하기 쉬웠고 시간 선택도 어렵지 않았습니다.",
    "스포츠마사지와 감성힐링 조합이 잘 맞아서 만족도가 높았습니다.",
    "발 관리까지 포함된 구성이 확실히 편했습니다.",
    "처음 문의했는데 설명이 깔끔해서 바로 결정했습니다.",
    "가격과 시간이 명확하게 안내돼서 비교하기 좋았습니다.",
    "120분 VIP 조합이 가장 무난하고 만족스럽게 느껴졌습니다."
];

VIRTUAL_REVIEWS = VIRTUAL_REVIEWS.concat(Array.from({ length: 86 }, (_, index) => {
    const service = REVIEW_SERVICES[index % REVIEW_SERVICES.length];
    const text = REVIEW_TEXTS[index % REVIEW_TEXTS.length];
    const suffix = String(index + 11).padStart(2, "0");
    return [`user_${suffix}`, service, text];
}));

let BOARD_POSTS = [
    { no: 108, title: "VIP 120분 스포츠마사지+감성힐링+발 예약 문의", writer: "mk_1207", date: "2026-06-12", locked: true, replied: true },
    { no: 107, title: "오늘 저녁 상담 가능 시간 문의", writer: "calm_41", date: "2026-06-10", locked: true, replied: true },
    { no: 106, title: "스포츠마사지+오일 120분 이용 가능 지역 안내", writer: "river02", date: "2026-05-28", locked: false, replied: true, preview: "문의 감사합니다. 가능 지역은 당일 일정에 따라 달라질 수 있어 카카오톡으로 지역명을 남겨주시면 빠르게 안내드립니다." },
    { no: 105, title: "VVIP 150분 코스 구성 문의", writer: "blue91", date: "2026-05-04", locked: true, replied: true },
    { no: 104, title: "감성힐링 코스 시간 추천", writer: "sol_19", date: "2026-04-22", locked: false, replied: true, preview: "처음 이용하시는 경우 90분 또는 120분 코스를 많이 확인하십니다. 원하시는 관리 흐름에 따라 상담에서 자세히 안내드립니다." },
    { no: 103, title: "예약 변경 문의드립니다", writer: "han_904", date: "2026-04-07", locked: true, replied: true },
    { no: 102, title: "VIP 120분 스포츠마사지+오일 문의", writer: "k_calm", date: "2026-03-18", locked: false, replied: true, preview: "VIP 120분 스포츠마사지+오일 코스는 140,000원입니다. 예약 가능 시간은 상담으로 확인 부탁드립니다." },
    { no: 101, title: "상담 후 예약하려고 합니다", writer: "june88", date: "2026-02-26", locked: true, replied: true },
    { no: 100, title: "오일 90분 가격 확인", writer: "mori35", date: "2026-02-11", locked: false, replied: true, preview: "오일 90분 코스는 110,000원입니다. 전화 또는 카카오톡으로 희망 시간과 지역을 남겨주세요." },
    { no: 99, title: "비공개 상담 문의", writer: "neo_41", date: "2026-01-24", locked: true, replied: true }
];

const BOARD_TITLES = [
    "VIP 120분 스포츠마사지+감성힐링+발 문의",
    "예약 가능 시간 확인 부탁드립니다",
    "스포츠마사지+오일 120분 지역 문의",
    "VVIP 150분 구성 확인",
    "오늘 상담 가능한가요",
    "카카오톡 상담 남겼습니다",
    "오일 120분 예약 문의",
    "스포츠마사지 120분 가격 확인",
    "감성힐링 코스 추천 문의",
    "비공개 일정 문의"
];

const BOARD_WRITERS = ["mint44", "sun_92", "hoya17", "real_24", "j_park", "mono8", "luna55", "koko31", "daon7", "navi20"];

BOARD_POSTS = BOARD_POSTS.concat(Array.from({ length: 90 }, (_, index) => {
    const no = 98 - index;
    const month = Math.max(1, 6 - Math.floor(index / 15));
    const day = 28 - (index % 15);
    const locked = index % 6 !== 2 && index % 7 !== 4;
    const title = BOARD_TITLES[index % BOARD_TITLES.length];
    return {
        no,
        title,
        writer: BOARD_WRITERS[index % BOARD_WRITERS.length],
        date: `2026-${String(month).padStart(2, "0")}-${String(Math.max(1, day)).padStart(2, "0")}`,
        locked,
        replied: true,
        preview: `${title}에 대한 답변입니다. 가능 시간과 지역은 상담 채널에서 최종 확인 부탁드립니다.`
    };
}));

document.addEventListener("DOMContentLoaded", () => {
    ensureChatbotShell();

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const chatLauncher = document.querySelector(".chat-launcher");
    const chatbot = document.querySelector(".chatbot");
    const chatClose = document.querySelector(".chat-close");
    const chatMessages = document.getElementById("chatMessages");
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const quickReplies = document.querySelectorAll(".quick-replies button");
    const phoneLink = document.getElementById("phoneLink");
    const phoneText = document.getElementById("phoneText");
    const kakaoText = document.getElementById("kakaoText");
    const kakaoLink = document.getElementById("kakaoLink");
    const reviewMount = document.getElementById("reviewMount");
    const boardTable = document.getElementById("boardTable");
    const boardModal = document.getElementById("boardModal");
    const boardModalClose = document.getElementById("boardModalClose");
    const boardModalLabel = document.getElementById("boardModalLabel");
    const boardModalTitle = document.getElementById("boardModalTitle");
    const boardModalText = document.getElementById("boardModalText");
    const joinButton = document.getElementById("joinButton");
    const writeButton = document.getElementById("writeButton");
    const boardWriteButton = document.getElementById("boardWriteButton");
    const loginForm = document.getElementById("loginForm");
    const memberNotice = document.getElementById("memberNotice");
    const headerLoginButtons = document.querySelectorAll(".header-login");
    const headerJoinButtons = document.querySelectorAll(".header-join");
    const reviewWriteButtons = document.querySelectorAll(".review-write");

    if (phoneText) phoneText.textContent = CONTACT_CONFIG.phone;
    if (phoneLink) phoneLink.href = `tel:${CONTACT_CONFIG.phone}`;
    if (kakaoText) kakaoText.textContent = CONTACT_CONFIG.kakaoId;
    if (kakaoLink) kakaoLink.href = CONTACT_CONFIG.kakaoUrl;

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener("click", () => mobileNav.classList.toggle("is-open"));
        mobileNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => mobileNav.classList.remove("is-open"));
        });
    }

    renderVirtualReviews(reviewMount);
    renderBoard(boardTable);
    ensureLoginModal();

    headerLoginButtons.forEach((button) => {
        button.addEventListener("click", openLoginModal);
    });

    headerJoinButtons.forEach((button) => {
        button.addEventListener("click", () => showSiteNotice("회원가입 안내", "관리자에게 문의하세요."));
    });

    reviewWriteButtons.forEach((button) => {
        button.addEventListener("click", () => showSiteNotice("글쓰기", "회원만 가능합니다."));
    });

    if (joinButton) {
        joinButton.addEventListener("click", () => openBoardModal("회원가입 안내", "회원가입은 관리자에게 문의하세요.", "Member"));
    }

    [writeButton, boardWriteButton].forEach((button) => {
        if (button) {
            button.addEventListener("click", () => openBoardModal("글쓰기", "회원만 가능합니다.", "Write"));
        }
    });

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (memberNotice) memberNotice.textContent = "아이디 또는 비밀번호를 확인할 수 없습니다.";
            openBoardModal("로그인 실패", "아이디 또는 비밀번호를 확인할 수 없습니다.", "Login");
        });
    }

    if (boardModalClose && boardModal) {
        boardModalClose.addEventListener("click", closeBoardModal);
        boardModal.addEventListener("click", (event) => {
            if (event.target === boardModal) closeBoardModal();
        });
    }

    function addMessage(text, type, actions = []) {
        if (!chatMessages) return;

        const message = document.createElement("div");
        message.className = `message ${type}`;
        message.textContent = text;
        chatMessages.appendChild(message);

        if (actions.length) {
            const actionWrap = document.createElement("div");
            actionWrap.className = "message-actions";
            actions.forEach((action) => {
                const item = action.href ? document.createElement("a") : document.createElement("button");
                item.textContent = action.label;
                if (action.href) {
                    item.href = action.href;
                    if (action.external) {
                        item.target = "_blank";
                        item.rel = "noopener";
                    }
                } else {
                    item.type = "button";
                    item.addEventListener("click", () => sendMessage(action.value || action.label));
                }
                actionWrap.appendChild(item);
            });
            chatMessages.appendChild(actionWrap);
        }

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotReply(input) {
        const normalized = normalizeText(input);

        if (["가격", "금액", "비용", "코스", "price"].some((trigger) => normalized.includes(normalizeText(trigger)))) {
            return {
                text: "어떤 코스 가격을 확인할까요? 아래 버튼을 선택하거나 직접 입력해주세요.",
                actions: PRICE_BUTTONS.map(([label, key]) => ({ label, value: key }))
            };
        }

        const directCourseKey = resolveCourseKey(input);
        const directTime = resolveTime(input);
        if (directCourseKey && directTime && COURSE_OPTIONS[directCourseKey].prices[directTime]) {
            clearPriceFlow();
            return { text: formatPriceAnswer(directCourseKey, directTime) };
        }

        if (directCourseKey) {
            chatState.mode = "askTime";
            chatState.courseKey = directCourseKey;
            return askTime(directCourseKey);
        }

        if (chatState.mode === "askTime") {
            const selected = COURSE_OPTIONS[chatState.courseKey];
            if (!directTime || !selected.prices[directTime]) {
                return {
                    text: `${selected.label}에서 선택 가능한 시간을 눌러주세요.`,
                    actions: Object.keys(selected.prices).map((time) => ({ label: `${time}분`, value: `${time}분` }))
                };
            }
            const courseKey = chatState.courseKey;
            clearPriceFlow();
            return { text: formatPriceAnswer(courseKey, directTime) };
        }

        if (["전화", "번호", "연락", "상담"].some((trigger) => normalized.includes(normalizeText(trigger)))) {
            return {
                text: `상담 번호는 ${CONTACT_CONFIG.phone}입니다.`,
                actions: [{ label: "전화 바로 연결", href: `tel:${CONTACT_CONFIG.phone}` }]
            };
        }

        if (["카톡", "카카오", "카카오톡", "아이디"].some((trigger) => normalized.includes(normalizeText(trigger)))) {
            return {
                text: `카카오톡 아이디는 ${CONTACT_CONFIG.kakaoId}입니다.`,
                actions: [{ label: "카카오톡 바로 연결", href: CONTACT_CONFIG.kakaoUrl, external: true }]
            };
        }

        if (["예약", "가능", "시간", "오늘", "내일"].some((trigger) => normalized.includes(normalizeText(trigger)))) {
            return {
                text: "예약 가능 여부는 실시간 확인이 필요합니다. 전화 또는 카카오톡으로 희망 지역, 시간, 코스를 남겨주세요.",
                actions: [
                    { label: "전화 바로 연결", href: `tel:${CONTACT_CONFIG.phone}` },
                    { label: "카카오톡 바로 연결", href: CONTACT_CONFIG.kakaoUrl, external: true }
                ]
            };
        }

        if (["지역", "위치", "방문"].some((trigger) => normalized.includes(normalizeText(trigger)))) {
            return { text: "방문 가능 지역은 일정에 따라 달라질 수 있습니다. 현재 계신 지역명을 보내주시면 가능 여부를 확인해드리겠습니다." };
        }

        return {
            text: `문의 감사합니다. 상담 번호는 ${CONTACT_CONFIG.phone}, 카카오톡 아이디는 ${CONTACT_CONFIG.kakaoId}입니다.`,
            actions: [
                { label: "전화 바로 연결", href: `tel:${CONTACT_CONFIG.phone}` },
                { label: "카카오톡 바로 연결", href: CONTACT_CONFIG.kakaoUrl, external: true }
            ]
        };
    }

    function askTime(courseKey) {
        const course = COURSE_OPTIONS[courseKey];
        return {
            text: `${course.label}을 선택하셨습니다. 시간을 선택해주세요.`,
            actions: Object.keys(course.prices).map((time) => ({ label: `${time}분`, value: `${time}분` }))
        };
    }

    function resolveCourseKey(input) {
        if (COURSE_OPTIONS[input]) return input;

        const normalized = normalizeText(input);
        const time = resolveTime(input);
        const hasSportsMassage = normalized.includes("스포츠마사지") || normalized.includes("스포츠") || normalized.includes("sportsmassage");
        const hasOil = normalized.includes("오일") || normalized.includes("oil");
        const hasHealing = normalized.includes("감성") || normalized.includes("힐링") || normalized.includes("healing");
        const hasFoot = normalized.includes("발") || normalized.includes("foot");
        const hasVvip = normalized.includes("vvip") || time === "150";

        if (hasVvip && hasOil && hasFoot) return "vvipOilFoot";
        if (hasVvip && hasHealing && hasFoot) return "vvipHealingFoot";
        if (hasSportsMassage && hasHealing && hasFoot) return "sportsMassageHealingFoot";
        if (hasSportsMassage && hasHealing) return "sportsMassageHealing";
        if (hasSportsMassage && hasOil) return "sportsMassageOil";

        return Object.keys(COURSE_OPTIONS).find((key) =>
            COURSE_OPTIONS[key].aliases.some((alias) => normalized.includes(normalizeText(alias)))
        );
    }

    function resolveTime(input) {
        const match = input.match(/(60|90|120|150)\s*분?/);
        return match ? match[1] : null;
    }

    function formatPriceAnswer(courseKey, time) {
        const course = COURSE_OPTIONS[courseKey];
        return `${course.label} ${time}분 가격은 ${course.prices[time]}입니다.`;
    }

    function clearPriceFlow() {
        chatState.mode = null;
        chatState.courseKey = null;
    }

    function normalizeText(value) {
        return String(value).toLowerCase().replace(/[\s+]/g, "").replace(/분/g, "");
    }

    function sendMessage(text) {
        const value = String(text || "").trim();
        if (!value || !chatMessages) return;

        addMessage(labelForValue(value), "user");
        window.setTimeout(() => {
            const reply = getBotReply(value);
            addMessage(reply.text, "bot", reply.actions || []);
        }, 180);
    }

    function labelForValue(value) {
        return COURSE_OPTIONS[value]?.label || value;
    }

    function openChatbot() {
        if (!chatbot || !chatInput || !chatMessages) return;

        chatbot.classList.add("is-open");
        chatInput.focus();

        if (!chatMessages.dataset.ready) {
            addMessage("안녕하세요. THE HUE 상담봇입니다. 가격, 상담 번호, 카카오톡, 예약 문의를 선택하거나 입력해주세요.", "bot");
            chatMessages.dataset.ready = "true";
        }
    }

    if (chatLauncher) chatLauncher.addEventListener("click", openChatbot);
    if (chatClose && chatbot) chatClose.addEventListener("click", () => chatbot.classList.remove("is-open"));

    if (chatForm && chatInput) {
        chatForm.addEventListener("submit", (event) => {
            event.preventDefault();
            sendMessage(chatInput.value);
            chatInput.value = "";
        });
    }

    quickReplies.forEach((button) => {
        button.addEventListener("click", () => {
            openChatbot();
            sendMessage(button.dataset.message);
        });
    });

    function renderVirtualReviews(mount) {
        if (!mount) return;

        let page = 1;
        const pageSize = 6;
        const totalPages = Math.ceil(VIRTUAL_REVIEWS.length / pageSize);
        const controls = createPager("후기 페이지");
        mount.insertAdjacentElement("afterend", controls.wrap);

        const render = () => {
            const start = (page - 1) * pageSize;
            const visible = VIRTUAL_REVIEWS.slice(start, start + pageSize);
            mount.innerHTML = visible.map(([id, service, text], cardIndex) => `
                <article class="review-card ${cardIndex === 0 && page === 1 ? "is-new" : ""}">
                    <p>${text}</p>
                    <div class="review-service">${service}</div>
                    <div class="review-meta">
                        <span>${id}</span>
                        <span class="review-stars">★★★★★</span>
                    </div>
                </article>
            `).join("");
            controls.page.textContent = `${page} / ${totalPages}`;
            controls.prev.disabled = page === 1;
            controls.next.disabled = page === totalPages;
        };

        controls.prev.addEventListener("click", () => {
            if (page > 1) {
                page -= 1;
                render();
            }
        });

        controls.next.addEventListener("click", () => {
            if (page < totalPages) {
                page += 1;
                render();
            }
        });

        render();
    }

    function ensureChatbotShell() {
        if (document.querySelector(".chatbot")) return;

        document.body.insertAdjacentHTML("beforeend", `
            <button class="chat-launcher" type="button" aria-label="상담 챗봇 열기"><span>상담</span></button>
            <aside class="chatbot" aria-label="상담 챗봇">
                <header class="chatbot-header">
                    <div><strong>THE HUE 상담봇</strong><span>간단 문의 자동 응답</span></div>
                    <button class="chat-close" type="button" aria-label="상담 챗봇 닫기">×</button>
                </header>
                <div class="chat-messages" id="chatMessages"></div>
                <div class="quick-replies" aria-label="빠른 질문">
                    <button type="button" data-message="상담">상담 번호</button>
                    <button type="button" data-message="카카오톡">카카오톡</button>
                    <button type="button" data-message="가격">가격</button>
                    <button type="button" data-message="예약">예약</button>
                </div>
                <form class="chat-form" id="chatForm">
                    <input id="chatInput" type="text" placeholder="문의 내용을 입력하세요" autocomplete="off">
                    <button type="submit">전송</button>
                </form>
            </aside>
        `);
    }

    function showSiteNotice(title, text) {
        let modal = document.getElementById("siteNoticeModal");

        if (!modal) {
            document.body.insertAdjacentHTML("beforeend", `
                <div class="site-notice-modal" id="siteNoticeModal" aria-hidden="true">
                    <div class="site-notice-box">
                        <button type="button" class="site-notice-close" id="siteNoticeClose">×</button>
                        <p class="eyebrow">Notice</p>
                        <h2 id="siteNoticeTitle"></h2>
                        <p id="siteNoticeText"></p>
                    </div>
                </div>
            `);
            modal = document.getElementById("siteNoticeModal");
            document.getElementById("siteNoticeClose").addEventListener("click", () => {
                modal.classList.remove("is-open");
                modal.setAttribute("aria-hidden", "true");
            });
            modal.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.classList.remove("is-open");
                    modal.setAttribute("aria-hidden", "true");
                }
            });
        }

        document.getElementById("siteNoticeTitle").textContent = title;
        document.getElementById("siteNoticeText").textContent = text;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
    }

    function ensureLoginModal() {
        if (document.getElementById("loginModal")) return;

        document.body.insertAdjacentHTML("beforeend", `
            <div class="login-modal" id="loginModal" aria-hidden="true">
                <div class="login-modal-box">
                    <button type="button" class="login-modal-close" id="loginModalClose">×</button>
                    <p class="eyebrow">Member Login</p>
                    <h2>회원 로그인</h2>
                    <form class="header-login-form" id="headerLoginForm">
                        <label>
                            아이디
                            <input type="text" name="loginId" placeholder="아이디를 입력하세요" autocomplete="username">
                        </label>
                        <label>
                            비밀번호
                            <input type="password" name="loginPassword" placeholder="비밀번호를 입력하세요" autocomplete="current-password">
                        </label>
                        <button type="submit">로그인</button>
                    </form>
                    <div class="login-sub-actions">
                        <button type="button" id="findIdButton">아이디 찾기</button>
                        <button type="button" id="findPasswordButton">비밀번호 찾기</button>
                    </div>
                    <p class="login-result" id="loginResult"></p>
                </div>
            </div>
        `);

        const modal = document.getElementById("loginModal");
        const close = document.getElementById("loginModalClose");
        const form = document.getElementById("headerLoginForm");
        const result = document.getElementById("loginResult");
        const findId = document.getElementById("findIdButton");
        const findPassword = document.getElementById("findPasswordButton");

        close.addEventListener("click", closeLoginModal);
        modal.addEventListener("click", (event) => {
            if (event.target === modal) closeLoginModal();
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            result.textContent = "아이디 또는 비밀번호를 확인할 수 없습니다.";
        });

        findId.addEventListener("click", () => {
            result.textContent = "아이디 찾기는 관리자에게 문의하세요.";
        });

        findPassword.addEventListener("click", () => {
            result.textContent = "비밀번호 찾기는 관리자에게 문의하세요.";
        });
    }

    function openLoginModal() {
        const modal = document.getElementById("loginModal");
        const result = document.getElementById("loginResult");
        const input = modal ? modal.querySelector("input") : null;

        if (!modal) return;
        if (result) result.textContent = "";
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        if (input) input.focus();
    }

    function closeLoginModal() {
        const modal = document.getElementById("loginModal");
        if (!modal) return;
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
    }

    function renderBoard(mount) {
        if (!mount) return;

        let page = 1;
        const pageSize = 10;
        const totalPages = Math.ceil(BOARD_POSTS.length / pageSize);
        const controls = createPager("게시판 페이지");
        mount.insertAdjacentElement("afterend", controls.wrap);

        const render = () => {
            const start = (page - 1) * pageSize;
            const visible = BOARD_POSTS.slice(start, start + pageSize);

            mount.innerHTML = visible.map((post) => `
            <div class="board-row ${post.locked ? "is-locked" : "is-open"}" data-no="${post.no}">
                <span class="board-no">#${post.no}</span>
                <span class="board-title">
                    ${post.locked ? '<span class="lock-badge">잠금</span>' : '<span class="reply-badge">공개</span>'}
                    <span>${post.title}</span>
                </span>
                <span class="board-writer">${post.writer}</span>
                <span class="board-date">${post.date}</span>
            </div>
            ${post.locked ? "" : `<div class="board-preview"><strong>답변완료</strong><br>${post.preview}</div>`}
        `).join("");

            controls.page.textContent = `${page} / ${totalPages}`;
            controls.prev.disabled = page === 1;
            controls.next.disabled = page === totalPages;

            mount.querySelectorAll(".board-row").forEach((row) => {
                row.addEventListener("click", () => {
                    const post = BOARD_POSTS.find((item) => String(item.no) === row.dataset.no);
                    if (!post) return;

                    if (post.locked) {
                        openBoardModal(post.title, "잠금 게시글입니다.", "Locked");
                    } else {
                        openBoardModal(post.title, post.preview, "Answer");
                    }
                });
            });
        };

        controls.prev.addEventListener("click", () => {
            if (page > 1) {
                page -= 1;
                render();
            }
        });

        controls.next.addEventListener("click", () => {
            if (page < totalPages) {
                page += 1;
                render();
            }
        });

        render();
    }

    function createPager(label) {
        const wrap = document.createElement("div");
        const prev = document.createElement("button");
        const page = document.createElement("span");
        const next = document.createElement("button");

        wrap.className = "pager";
        wrap.setAttribute("aria-label", label);
        prev.type = "button";
        next.type = "button";
        prev.textContent = "<";
        next.textContent = ">";
        page.className = "pager-current";

        wrap.appendChild(prev);
        wrap.appendChild(page);
        wrap.appendChild(next);

        return { wrap, prev, page, next };
    }

    function openBoardModal(title, text, label = "Notice") {
        if (!boardModal || !boardModalTitle || !boardModalText || !boardModalLabel) return;

        boardModalLabel.textContent = label;
        boardModalTitle.textContent = title;
        boardModalText.textContent = text;
        boardModal.classList.add("is-open");
        boardModal.setAttribute("aria-hidden", "false");
    }

    function closeBoardModal() {
        if (!boardModal) return;

        boardModal.classList.remove("is-open");
        boardModal.setAttribute("aria-hidden", "true");
    }
});
