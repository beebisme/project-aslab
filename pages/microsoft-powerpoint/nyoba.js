const data = [{
        id: 0,
        soal: "1. Format penyimpanan powerpoint adalah...",
        jawaban: "B",
        pilihan_1: " .XLSX",
        pilihan_2: " .PPTX",
        pilihan_3: " .DOCX",
        pilihan_4: " .JPG",
        status: "Salah",
        result: 0
    },
    {
        id: 1,
        soal: "2. Tool pada grup fonts yang digunakan untuk memberikan efek bayangan pada teks adalah ?...",
        jawaban: "B",
        pilihan_1: " Text Line",
        pilihan_2: " Text Shadow",
        pilihan_3: " Text Indent",
        pilihan_4: " Text Align",
        status: "Salah",
        result: 0
    },
    {
        id: 2,
        soal: "3. Icon yang digunakan untuk menambahkan daftar berpoin atau bernomor disebut ?",
        jawaban: "B",
        pilihan_1: " Number atau Circle",
        pilihan_2: " Bullets atau Numbering ",
        pilihan_3: " List atau Table of contens",
        pilihan_4: " Increase atau Decrease ",
        status: "Salah",
        result: 0
    },
    {
        id: 3,
        soal: "4. Hal pertama kali yang dilakukan ketika ingin menambahkan gambar pada slide adalah ?",
        jawaban: "C",
        pilihan_1: " Klik pada tab layout",
        pilihan_2: " Klik pada tab References",
        pilihan_3: " Klik pada tab Insert",
        pilihan_4: " Klik pada tab review",
        status: "Salah",
        result: 0
    },
    {
        id: 4,
        soal: "5. Tab menu yang digunakan untuk menambahkan animasi pada slide adalah ? ",
        jawaban: "D",
        pilihan_1: " Design",
        pilihan_2: " Transitions",
        pilihan_3: " Insert",
        pilihan_4: " Animations",
        status: "Salah",
        result: 0
    },
]

// const arr = Array(10).fill().map(() => Math.round(Math.random() * 20))
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const arr = [0, 1, 2, 3]
shuffle(arr)

const data2 = [{}]

for (let i = 0; i < arr.length; i++) {
    data2.push(data[arr[i]])
}
console.log(arr)
console.log(data2[1].soal)