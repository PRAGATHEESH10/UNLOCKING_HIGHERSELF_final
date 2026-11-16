/* ═══════════════════════════════════════════════════════════════
   ★ UNLOCKING YOUR HIGHER SELF — THIS IS THE ONLY FILE YOU EDIT ★

   HOW TO ADD A NEW VIDEO (30 seconds):
   1. Copy this line:
        { title: "Your video name", link: "https://www.youtube.com/watch?v=XXXX" },
   2. Paste it inside the "lessons" list of the module below.
   3. Save / commit. Done — the thumbnail appears on the website
      automatically, and clicking it opens the video on YouTube.

   • Both link styles work:
       https://www.youtube.com/watch?v=XXXX   ✓
       https://youtu.be/XXXX                  ✓
   • No link yet? Use  link: ""  → it will show as "Coming soon".
   • To add a practice/meditation under a lesson, put it inside
     that lesson's "exercises" list, like this:
        {
          title: "Lesson name",
          link: "https://www.youtube.com/watch?v=XXXX",
          exercises: [
            { title: "Meditation name", link: "https://www.youtube.com/watch?v=YYYY" },
          ],
        },
   • To add Module B videos later: replace its lessons: [] with
     real lesson lines, and delete the comingSoon: true line.
   ═══════════════════════════════════════════════════════════════ */

const SETTINGS = {
  // Access code your paid clients must type to open the course.
  // Change it anytime. Make it "" (empty) to remove the lock fully.
  // Note: not case-sensitive, so "higher2026" and "HIGHER2026" both work.
  passcode: "HIGHER2026",

  courseName: "Unlocking Your Higher Self",
  teacher: "Mokia Praga",
  tagline:
    "A 40-day space to become conscious and reprogram your subconscious, one session at a time.",

  youtube: "https://www.youtube.com/@Mokia_praga",
  instagram: "https://www.instagram.com/mokia_praga/",
};

const COURSE = [
  {
    module: "A",
    title: "Consciousness Awakening",
    lessons: [
      {
        title: "Why You Get Attached towards Physical Reality",
        link: "https://www.youtube.com/watch?v=mcdLl7zQ280",
      },
      {
        title: "How the Ego Self Destroys Your Life",
        link: "https://www.youtube.com/watch?v=zrL9gN3KjSA",
      },
      {
        title: "Consciousness & Killing the Ego Self",
        link: "https://www.youtube.com/watch?v=JFj0OTWAfrA",
        exercises: [
          {
            title: "Observer State Meditation",
            link: "https://www.youtube.com/watch?v=dZyRFMY8kx8",
          },
          {
            title: "Present Moment Practice",
            link: "https://youtu.be/A2Iko-IBwss?si=RU-XiSVMNBmz5vWC",
          },
        ],
      },
      {
        title: "Detachment",
        link: "https://www.youtube.com/watch?v=Gz9Z2pOZatM",
      },
      {
        title: "Painbody effects",
        link: "https://youtu.be/DfWQPk2xie8?si=-88NaL_AXv5mWpmS",
        exercises: [
          {
            title: "Let go your emotions",
            link: "https://www.youtube.com/watch?v=LwkRxOgmBwI",
          },
        ],
      },
    ],
  },
  {
    module: "B",
    title: "Identity Shifting",
    comingSoon: true,
    lessons: [
      {
        title: "How belief system works?",
        link: "https://www.youtube.com/watch?v=R_sa5n2DNWo",
      },
      {
        title: "How do I detach from an old belief?",
        link: "https://www.youtube.com/watch?v=oip5nSxv1pY",
      },
      {
        title: "Belief System! & (Energy, Frequency & Vibration)",
        link: "https://www.youtube.com/watch?v=F3YdSt2x7xE",
      },
      {
        title: "How to Do Visualization Properly",
        link: "https://www.youtube.com/watch?v=sMWJYFcgzP4",
      },
    ],
  },
];
