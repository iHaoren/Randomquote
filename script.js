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
    text: "Al-'ilm lā yanfad, wa innamā yanfad ash-shakhs idzā taraka at-ta'allum. (Ilmu tidak akan pernah habis, yang habis hanyalah seseorang yang berhenti belajar.)",
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
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali"
  },
  {
    text: "Man jadda wa jada. (Siapa yang bersungguh-sungguh akan berhasil.)",
    author: "Peribahasa Arab"
  },
  {
    text: "Al-'ilmu nūr(un), wal-jahlu ẓulmah. (Ilmu adalah cahaya, dan kebodohan adalah kegelapan.)",
    author: "Peribahasa Arab"
  },
  {
    text: "Kesuksesan tidak datang dari apa yang diberikan oleh orang lain, tapi dari keyakinan dan kerja keras.",
    author: "Chairul Tanjung"
  },
  {
    text: "Pendidikan adalah senjata paling mematikan di dunia, karena dengan itu Anda dapat mengubah dunia.",
    author: "Nelson Mandela"
  },
  {
    text: "Hidup ini adalah petualangan yang berani atau bukan apa-apa sama sekali.",
    author: "Helen Keller"
  },
  {
    text: "Masa muda adalah masa yang berapi-api.",
    author: "Sutan Sjahrir"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "Excellence is not being the best; it is doing your best.",
    author: "Paulo Coelho"
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso"
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
newQuoteButton.addEventListener('click', function() {
  generateQuote()
  playAudio()
})
// Sountrack audio
function playAudio() {
  const audio = document.getElementById('soundtrack')
  if (audio) {
    //play audio
    audio.play().catch(function(error) {
      console.log('audio error:', error)
    })
  }
}
// Call generate quote when page first loaded
generateQuote()