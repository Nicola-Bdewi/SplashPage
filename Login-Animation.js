const waveOfLetters = document.querySelectorAll('.whole-sign-in-form label');

waveOfLetters.forEach(waveOfLetters => {
    waveOfLetters.innerHTML = waveOfLetters.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})