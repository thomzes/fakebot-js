const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');

let init = 0;

const botSay = (data) => {
    return [
        'Hallo perkenalkan saya Thomzbot, siapa nama kamu?',
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia}, hobi kamu apa?`,
        `Sama dong kamu suka ${data?.hobi}, btw punya pacara ngga?`,
        `Ohh ${data?.pacar}, ya udah kalau gitu, udahan ya?`
    ]
}

pertanyaan.innerHTML = botSay()[0];

function botStart() {
    init++
    if (init === 1) {
        setTimeout(botDelay({nama: jawaban.value}), 5500);
    } else if (init === 2) {
        setTimeout(botDelay({usia: jawaban.value}), 5500);
    } else if (init === 3) {
        setTimeout(botDelay({hobi: jawaban.value}), 5500);
    } else if (init === 4) {
        setTimeout(botDelay({pacar: jawaban.value}), 5500);
    } else if (init === 5) {
        finishing()
    }else {
        botEnd();
    }
    
    function botDelay(jawabanUser) {
        pertanyaan.innerHTML = botSay(jawabanUser)[init];
    }

    function finishing() {
        console.log('Finish!');
    }

    function botEnd() {
        console.log('Ended!')
    }

}





