// 20 Compliments
const compliments = [
    "You have a naturally positive energy.",
    "Your confidence makes you stand out.",
    "You have a thoughtful and caring personality.",
    "You bring a calm presence wherever you go.",
    "Your creativity is one of your strongest qualities.",
    "You have a strong sense of determination.",
    "People appreciate your honesty and sincerity.",
    "You have an impressive ability to adapt.",
    "Your kindness leaves a lasting impression.",
    "You have a unique way of looking at life.",
    "Your patience is one of your greatest strengths.",
    "You have a naturally curious mind.",
    "Your sense of humor makes you enjoyable to be around.",
    "You are more capable than you sometimes realize.",
    "Your ambition can take you far.",
    "You have a strong and independent spirit.",
    "Your loyalty makes you a valuable friend.",
    "You have excellent potential for personal growth.",
    "Your intuition often guides you well.",
    "You have a personality that people remember."
];


// 20 Victim-Card / Empathy Compliments
const victimCardCompliments = [
    "You have been through difficult moments, but you continue moving forward.",
    "Your feelings are valid, and your experiences matter.",
    "You deserve to be treated with kindness and respect.",
    "You have shown remarkable resilience.",
    "It is okay to set boundaries when something does not feel right.",
    "You do not have to carry every problem by yourself.",
    "Your ability to keep going is a real strength.",
    "You deserve relationships built on trust and respect.",
    "It is okay to take time for yourself.",
    "You can learn from difficult experiences without blaming yourself.",
    "Your voice deserves to be heard.",
    "You are allowed to say no when something crosses your boundaries.",
    "You deserve supportive people around you.",
    "Difficult experiences do not define your entire future.",
    "You can choose healthier patterns moving forward.",
    "Asking for help can be a sign of strength.",
    "You deserve patience while you work through challenges.",
    "You can protect your peace without feeling guilty.",
    "Your past does not determine everything about your future.",
    "You have the ability to grow stronger from challenging experiences."
];


// 20 Recommendations
const recommendations = [
    "Spend some time developing a skill you enjoy.",
    "Try keeping a journal to organize your thoughts.",
    "Make time for hobbies that help you relax.",
    "Stay connected with people who support you.",
    "Set one small goal and work toward it consistently.",
    "Take regular breaks when you feel overwhelmed.",
    "Explore something new outside your usual routine.",
    "Practice communicating your feelings clearly.",
    "Create a simple routine that works for you.",
    "Give yourself enough time to make important decisions.",
    "Focus on progress instead of perfection.",
    "Make time for learning and personal development.",
    "Keep your priorities clear when making decisions.",
    "Spend less time comparing yourself with others.",
    "Celebrate small achievements along the way.",
    "Be patient with yourself when learning something new.",
    "Try balancing responsibilities with activities you enjoy.",
    "Listen carefully before making important decisions.",
    "Keep an open mind when facing new opportunities.",
    "Surround yourself with positive and encouraging people."
];


// 20 Predictions
const predictions = [
    "A new opportunity may appear when you least expect it.",
    "You may soon discover a new interest or talent.",
    "A conversation could give you a fresh perspective.",
    "The coming period may bring positive changes to your routine.",
    "Someone from your circle may offer useful advice.",
    "You may find yourself becoming more confident in your decisions.",
    "A small opportunity could develop into something meaningful.",
    "You may have a chance to learn something valuable soon.",
    "Your patience may pay off in an important situation.",
    "A change in your routine could lead to an interesting experience.",
    "You may reconnect with someone you have not spoken to recently.",
    "A creative idea could become worth exploring.",
    "You may feel more motivated to work toward a personal goal.",
    "An unexpected piece of good news may brighten your day.",
    "You could discover a better way to handle an old problem.",
    "The near future may encourage you to try something different.",
    "You may gain clarity about an important decision.",
    "A new responsibility could help you develop confidence.",
    "You may find greater balance between work and personal interests.",
    "The coming weeks may bring opportunities for personal growth."
];

const form = document.getElementById("astroform");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const tob = document.getElementById("tob").value;
    const pob = document.getElementById("place").value.trim();
    const gender = document.getElementById("gender").value;

    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    const date = new Date(dob);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    function getZodiacSign(dateOfBirth) {
        const date = new Date(dateOfBirth);

        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;

        if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
            return "Aries";

        if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
            return "Taurus";

        if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
            return "Gemini";

        if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
            return "Cancer";

        if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
            return "Leo";

        if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
            return "Virgo";

        if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
            return "Libra";

        if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
            return "Scorpio";

        if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
            return "Sagittarius";

        if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
            return "Capricorn";

        if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
            return "Aquarius";

        return "Pisces";
    }

    const zodiac = getZodiacSign(dob);

    // Always generate indexes from 0 to 19
    const compliment = compliments[day % 20];
    const victimCompliment = victimCardCompliments[year % 20];
    const recommendation = recommendations[(day * month) % 20];
    const prediction = predictions[name.length % 20];

    const text = `
        Hi ${name}! ✨

        Your zodiac sign is ${zodiac}.

        💫 ${compliment}

        ❤️ ${victimCompliment}

        🌟 Recommendation:
        ${recommendation}

        🔮 Prediction:
        ${prediction}
    `;

    document.getElementById("result").textContent = text;
});
