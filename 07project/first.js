
// ==========================================
// CELESTIA — HOROSCOPE GENERATOR
// ==========================================

const form = document.getElementById("astroform");
const result = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");
const dobInput = document.getElementById("dob");

// Prevent selecting a future date of birth.
dobInput.max = new Date().toLocaleDateString("en-CA");

// Zodiac information.
const zodiacSigns = [
    {
        name: "Capricorn",
        symbol: "♑",
        start: [12, 22],
        end: [1, 19],
        element: "Earth",
        description: "Steady, ambitious, and thoughtful. You value meaningful progress and long-term goals."
    },
    {
        name: "Aquarius",
        symbol: "♒",
        start: [1, 20],
        end: [2, 18],
        element: "Air",
        description: "Independent, imaginative, and curious. You enjoy exploring fresh perspectives."
    },
    {
        name: "Pisces",
        symbol: "♓",
        start: [2, 19],
        end: [3, 20],
        element: "Water",
        description: "Creative, intuitive, and compassionate. You often appreciate the emotional side of life."
    },
    {
        name: "Aries",
        symbol: "♈",
        start: [3, 21],
        end: [4, 19],
        element: "Fire",
        description: "Energetic, courageous, and enthusiastic. You enjoy taking initiative and exploring possibilities."
    },
    {
        name: "Taurus",
        symbol: "♉",
        start: [4, 20],
        end: [5, 20],
        element: "Earth",
        description: "Patient, dependable, and grounded. You appreciate consistency and the things that matter to you."
    },
    {
        name: "Gemini",
        symbol: "♊",
        start: [5, 21],
        end: [6, 20],
        element: "Air",
        description: "Curious, expressive, and adaptable. Learning and conversation can bring you inspiration."
    },
    {
        name: "Cancer",
        symbol: "♋",
        start: [6, 21],
        end: [7, 22],
        element: "Water",
        description: "Caring, reflective, and perceptive. You value emotional connection and a sense of belonging."
    },
    {
        name: "Leo",
        symbol: "♌",
        start: [7, 23],
        end: [8, 22],
        element: "Fire",
        description: "Expressive, warm, and creative. You enjoy opportunities to share your ideas and talents."
    },
    {
        name: "Virgo",
        symbol: "♍",
        start: [8, 23],
        end: [9, 22],
        element: "Earth",
        description: "Observant, practical, and thoughtful. You appreciate useful details and continuous learning."
    },
    {
        name: "Libra",
        symbol: "♎",
        start: [9, 23],
        end: [10, 22],
        element: "Air",
        description: "Diplomatic, considerate, and creative. You appreciate balance, fairness, and meaningful connections."
    },
    {
        name: "Scorpio",
        symbol: "♏",
        start: [10, 23],
        end: [11, 21],
        element: "Water",
        description: "Determined, reflective, and perceptive. You value sincerity and exploring ideas deeply."
    },
    {
        name: "Sagittarius",
        symbol: "♐",
        start: [11, 22],
        end: [12, 21],
        element: "Fire",
        description: "Adventurous, optimistic, and open-minded. New experiences can offer valuable perspectives."
    }
];

// Reading content.
const compliments = [
    "Your curiosity can help you discover opportunities others might overlook.",
    "You have the potential to make a positive difference through small, thoughtful actions.",
    "Your willingness to learn can become one of your greatest strengths.",
    "Your individuality gives you a perspective worth sharing.",
    "You can bring warmth and encouragement to the people around you.",
    "Your creativity can help you find new ways to approach familiar challenges.",
    "You have room to grow while still appreciating who you are today.",
    "Your determination can help you make progress one step at a time.",
    "Thoughtful listening can be one of your most valuable qualities.",
    "Your ability to adapt can help you navigate unfamiliar situations.",
    "You can build meaningful connections by being sincere and considerate.",
    "Your ideas deserve the opportunity to be explored.",
    "Patience with yourself can make learning feel more rewarding.",
    "You can find strength in asking questions and staying curious.",
    "Your perspective can add something valuable to a group.",
    "You can approach new challenges with openness and courage.",
    "Your sense of responsibility can help you follow through on your goals.",
    "You can balance ambition with kindness toward yourself.",
    "Your interests can lead you toward exciting learning experiences.",
    "Every thoughtful step can contribute to your personal growth."
];

const empathyMessages = [
    "You deserve kindness and respect, including from yourself.",
    "It is okay to take a break when life feels demanding.",
    "You do not have to solve every problem all at once.",
    "Your feelings matter, even when you are still figuring them out.",
    "Healthy boundaries can help you protect your time and energy.",
    "You deserve relationships where you can communicate honestly.",
    "Asking someone trustworthy for support can be a positive step.",
    "You can learn from a difficult experience without blaming yourself.",
    "You are allowed to change your mind as you grow.",
    "Rest and reflection can be valuable parts of making progress.",
    "You can acknowledge a mistake without defining yourself by it.",
    "You deserve space to explore your interests and individuality.",
    "You can say no to things that do not feel right for you.",
    "You do not need to compare your journey with someone else's.",
    "It is reasonable to ask for clarity when something feels confusing.",
    "Small steps count, even when progress seems slow.",
    "You can make thoughtful choices without having every answer.",
    "Your past experiences do not determine every future possibility.",
    "You can give yourself the same patience you offer others.",
    "You deserve encouragement while working toward your goals."
];

const recommendations = [
    "Set aside a little time this week to explore a hobby you enjoy.",
    "Write down one goal and identify a small first step toward it.",
    "Reconnect with an activity that makes you feel curious and engaged.",
    "Try keeping a short journal of ideas, experiences, or reflections.",
    "Make time for a conversation with someone you trust.",
    "Break a demanding task into smaller, manageable parts.",
    "Learn something new without worrying about mastering it immediately.",
    "Take a moment to review your priorities before making a decision.",
    "Try a creative activity that gives you room to experiment.",
    "Create a daily routine that leaves space for both work and rest.",
    "Practice expressing your needs clearly and respectfully.",
    "Spend some time outdoors and notice the world around you.",
    "Celebrate a small achievement that you might otherwise overlook.",
    "Explore a book, subject, or skill that has recently interested you.",
    "Give yourself time to think before committing to a big decision.",
    "Focus on what you can influence rather than what you cannot control.",
    "Try approaching a familiar problem from a different perspective.",
    "Make room for activities that help you recharge.",
    "Ask for feedback from someone whose judgment you trust.",
    "Choose one positive habit you would like to develop gradually."
];

const predictions = [
    "An upcoming conversation may give you a fresh perspective on something familiar.",
    "You may find a new reason to explore an interest you have been putting aside.",
    "A small change in your routine could open up room for something enjoyable.",
    "The next few weeks could be a useful time to revisit a personal goal.",
    "You might discover a helpful idea by listening to a different point of view.",
    "A new learning opportunity may encourage you to build confidence.",
    "You may find that steady effort helps clarify your next steps.",
    "An ordinary day could bring an interesting opportunity to connect with someone.",
    "You might discover a creative approach to a problem you have been considering.",
    "A little extra planning could help you feel more prepared for a decision.",
    "You may become interested in a subject you had not previously explored.",
    "The coming period could be a good time to organize your priorities.",
    "A thoughtful conversation may help you understand a situation differently.",
    "You might find satisfaction in making progress on a small personal project.",
    "An unfamiliar experience could offer a useful lesson about your preferences.",
    "You may feel motivated to develop a skill that matters to you.",
    "A change of perspective could help you see more options than before.",
    "You might find a new way to balance your responsibilities and interests.",
    "An opportunity to collaborate could introduce you to useful ideas.",
    "The next chapter can be an opportunity to reflect, learn, and grow."
];

// Helper: select a random item.
function chooseRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}

// Find the Western zodiac sun sign from the birth date.
function getZodiacSign(dateString) {
    const [, monthString, dayString] =
        dateString.split("-");

    const month = Number(monthString);
    const day = Number(dayString);

    return zodiacSigns.find(sign => {
        const [startMonth, startDay] = sign.start;
        const [endMonth, endDay] = sign.end;

        // Capricorn crosses the end of the calendar year.
        if (sign.name === "Capricorn") {
            return (
                (month === 12 && day >= startDay) ||
                (month === 1 && day <= endDay)
            );
        }

        const afterStart =
            month > startMonth ||
            (month === startMonth && day >= startDay);

        const beforeEnd =
            month < endMonth ||
            (month === endMonth && day <= endDay);

        return afterStart && beforeEnd;
    });
}

// Helper: create text elements safely.
function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

// Create one reading card.
function createReadingCard(icon, title, description) {
    const card = createElement("article", "reading-card");

    card.append(
        createElement("div", "reading-icon", icon),
        createElement("h3", "", title),
        createElement("p", "", description)
    );

    return card;
}

// Build the horoscope results.
function displayHoroscope(name, dateString, sign) {
    result.replaceChildren();

    const header = createElement("div", "result-header");

    header.append(
        createElement(
            "div",
            "result-eyebrow",
            "✦ YOUR COSMIC READING"
        ),
        createElement("h2", "", "Hello, " + name + "."),
        createElement(
            "p",
            "",
            "Here is your astrology-inspired reading. Take what resonates and leave what doesn't."
        )
    );

    const badge = createElement("div", "zodiac-badge");

    badge.append(
        createElement("span", "zodiac-symbol", sign.symbol)
    );

    const badgeText = document.createElement("div");

    badgeText.append(
        createElement("small", "", "YOUR SUN SIGN"),
        createElement("strong", "", sign.name)
    );

    badge.append(badgeText);
    header.append(badge);

    const cards = createElement("div", "reading-grid");

    cards.append(
        createReadingCard(
            "✧",
            "Your cosmic identity",
            sign.description
        ),
        createReadingCard(
            "♡",
            "A little reminder",
            chooseRandom(compliments) + " " +
            chooseRandom(empathyMessages)
        ),
        createReadingCard(
            "☼",
            "Your guiding light",
            chooseRandom(recommendations)
        ),
        createReadingCard(
            "✦",
            "Looking ahead",
            chooseRandom(predictions)
        )
    );

    const note = createElement(
        "p",
        "result-note",
        "A note on your reading: this is a lighthearted, astrology-inspired reflection, not a guaranteed prediction. Your sun sign is based on your date of birth; a full birth chart would require astronomical calculations using your birth time and location."
    );

    result.append(header, cards, note);
    result.hidden = false;

    // Bring the result into view after generation.
    result.scrollIntoView({
        behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches ? "auto" : "smooth",
        block: "start"
    });
}

// Form submission.
form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    const name = document.getElementById("name")
        .value.trim();

    const dob = dobInput.value;
    const birthTime = document.getElementById("tob").value;
    const birthPlace = document.getElementById("place")
        .value.trim();
    const gender = document.getElementById("gender").value;

    if (!name || !dob || !birthTime || !birthPlace || !gender) {
        return;
    }

    // Validate the date without timezone-related date shifts.
    const dateParts = dob.split("-").map(Number);

    const [year, month, day] = dateParts;
    const parsedDate = new Date(year, month - 1, day);

    const validDate =
        parsedDate.getFullYear() === year &&
        parsedDate.getMonth() === month - 1 &&
        parsedDate.getDate() === day;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!validDate || parsedDate > today) {
        alert("Please enter a valid date of birth.");
        return;
    }

    const sign = getZodiacSign(dob);

    if (!sign) {
        alert("We couldn't determine your zodiac sign.");
        return;
    }

    displayHoroscope(name, dob, sign);
});
