let month = document.getElementById('month');
let out = document.getElementById('out');
let headline = 'Your horoscope is '

function horoskop() {
  out.classList.add('out');

  switch (month.value) {
    case 'january':
    case 'January':
    case 'januar':
    case 'Januar':
    case 'jan':
    case 'Jan':
      out.innerHTML = `
        <img src="assets/images/icon_aquarius.png" alt="-">
        <h1 class="jan">${headline}Aquarius</h1>
        <p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…</p>
      `
      break;
    case 'february':
    case 'February':
    case 'februar':
    case 'Februar':
    case 'feb':
    case 'Feb':
      out.innerHTML = `
        <img class="feb" src="assets/images/icon_pisces.png" alt="-">
        <h1 class="jan">${headline}Pisces</h1>
        <p>Communication is very important today—written, spoken, and even nonverbal body language will all…</p>
      `
      break;
    case 'march':
    case 'March':
    case 'märz':
    case 'März':
    case 'mar':
    case 'Mar':
    case 'mär':
    case 'Mär':
      out.innerHTML = `
        <img class="mar" src="assets/images/icon_aries.png" alt="-">
        <h1 class="jan">${headline}Aries</h1>
        <p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p>
      `
      break;
    case 'april':
    case 'April':
    case 'apr':
    case 'Apr':
      out.innerHTML = `
        <img class="apr" src="assets/images/icon_taurus.png" alt="-">
        <h1 class="jan">${headline}Taurus</h1>
        <p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p>
      `
      break;
    case 'may':
    case 'May':
    case 'mai':
    case 'Mai':
      out.innerHTML = `
        <img class="may" src="assets/images/icon_gemini.png" alt="-">
        <h1 class="jan">${headline}Gemini</h1>
        <p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…</p>
      `
      break;
    case 'june':
    case 'June':
    case 'juni':
    case 'Juni':
    case 'jun':
    case 'Jun':
      out.innerHTML = `
        <img class="jun" src="assets/images/icon_cancer.png" alt="-">
        <h1 class="jan">${headline}Cancer</h1>
        <p>Too many different elements in your life are overlapping with each other right now—and it's your…</p>
      `
      break;
    case 'july':
    case 'July':
    case 'juli':
    case 'Juli':
    case 'jul':
    case 'Jul':
      out.innerHTML = `
        <img class="jul" src="assets/images/icon_leo.png" alt="-">
        <h1 class="jan">${headline}Leo</h1>
        <p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…</p>
      `
      break;
    case 'august':
    case 'Augst':
    case 'aug':
    case 'Aug':
      out.innerHTML = `
        <img class="aug" src="assets/images/icon_virgo.png" alt="-">
        <h1 class="jan">${headline}Virgo</h1>
        <p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…</p>
      `
      break;
    case 'september':
    case 'September':
    case 'sep':
    case 'Sep':
      out.innerHTML = `
        <img class="sep" src="assets/images/icon_libra.png" alt="-">
        <h1 class="jan">${headline}Libra</h1>
        <p>Pick a cultural event that's coming up and get some tickets for it today.</p>
      `
      break;
    case 'october':
    case 'October':
    case 'oktober':
    case 'Oktober':
    case 'oct':
    case 'Oct':
    case 'okt':
    case 'Okt':
      out.innerHTML = `
        <img class="oct" src="assets/images/icon_scorpio.png" alt="-">
        <h1 class="jan">${headline}Scorpio</h1>
        <p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p>
      `
      break;
    case 'november':
    case 'November':
    case 'nov':
    case 'Nov':
      out.innerHTML = `
        <img class="nov" src="assets/images/icon_sagittarius.png" alt="-">
        <h1 class="jan">${headline}Sagittarius</h1>
        <p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....</p>
      `
      break;
    case 'december':
    case 'December':
    case 'dezember':
    case 'Dezember':
    case 'dec':
    case 'Dec':
    case 'dez':
    case 'Dez':
      out.innerHTML = `
        <img class="dec" src="assets/images/icon_capricorn.png" alt="-">
        <h1 class="jan">${headline}Capricorn</h1>
        <p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity.</p>
      `
      break;
  
    default:
      out.classList.remove('out');
      out.innerHTML = `
        <h1>Please give a month</h1>
      `
      break;
  }
}