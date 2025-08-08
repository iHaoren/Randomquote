// Array that store a list of quotes and their author
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Imagination is more important than knowledge.",
    author: "Albert Einstein"
  },
  {
    text: "Idealisme adalah kemewahan terakhir yang dimiliki pemuda.",
    author: "Tan Malaka"
  },
  {
    text: "People are slaves to this world, and as long as they live favorable lives, they are loyal to religious principles.",
    author: "Ali bin Abi Thalib"
  },
  {
    text: "Al-‘ilm lā yanfad, wa innamā yanfad ash-shakhs idzā taraka at-ta‘allum. (Ilmu tidak akan pernah habis, yang habis hanyalah seseorang yang berhenti belajar.)",
    author: "Al-Khawarizmi"
  },
  {
    text: "The knowledge which is not acted upon is like a tree without fruit.",
    author: "Ibnu Sina (Avicenna)"
  },
  {
    text: "Hidup adalah keberanian untuk mengambil risiko atau tidak sama sekali.",
    author: "Soe Hok Gie"
  },
  {
    text: "Ketika kamu merasa paling sendiri, saat itu Tuhan sedang sangat dekat.",
    author: "Habiburrahman El Shirazy"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "You become what you believe.",
    author: "Oprah Winfrey"
  },
  {
    text: "Don’t count the days, make the days count.",
    author: "Muhammad Ali"
  },
  {
    text: "Man jadda wa jada. (Siapa yang bersungguh-sungguh akan berhasil.)",
    author: "Peribahasa Arab"
  },
  {
    text: "Al-‘ilmu nūr(un), wal-jahlu ẓulmah. (Ilmu adalah cahaya, dan kebodohan adalah kegelapan.)",
    author: "Peribahasa Arab"
  },
  {
    text: "Shippai wa seikō no haha de aru. (Kegagalan adalah ibu dari keberhasilan.)",
    author: "Peribahasa Jepang"
  },
  {
    text: "Ore wa Pirate King ni naru! (Aku akan menjadi Raja Bajak Laut!)",
    author: "Monkey D. Luffy – One Piece"
  },
  {
    text: "Yamete kudasai! Watashi wa hito wo koroshitakunai... (Berhenti! Aku tidak ingin membunuh siapa pun...)",
    author: "Ken Kaneki – Tokyo Ghoul"
  },
  {
    text: "Power comes in response to a need, not a desire. You have to create that need.",
    author: "Goku – Dragon Ball Z"
  },
  {
    text: "Hard work is worthless for those that don’t believe in themselves.",
    author: "Naruto Uzumaki – Naruto"
  },
  {
    text: "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something else.",
    author: "Edward Elric – Fullmetal Alchemist"
  },
  {
    text: "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
    author: "Gildarts Clive – Fairy Tail"
  }
];

//Get HTML Element
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const newQuoteButton = document.getElementById('new-quote')

// function for generate random quote
function generateQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]

  // Update the quote text and author in the element HTML
  quoteText.textContent = `"${randomQuote.text}"`
  quoteAuthor.textContent = `- ${randomQuote.author}`
}

// Add event listener for the button
newQuoteButton.addEventListener('click', generateQuote)

// Call generate quote when page first loaded
generateQuote()

// Sountrack audio
window.addEventListener('DOMContentLoaded', function() {
  const audio = this.document.getElementById('soundtrack')
  if (audio) {
    audio.play().catch(() => {
    })
  }
})
