const quotes=[{
  quote: `Be yourself; everyone else is already taken.`,
  writer: `- Oscar Wilde`
},{
  quote: `So many books, so little time.`,
  writer: `- Frank Zappa`
},{
  quote: `A room without books is like a body without a soul.`,
  writer: `- Marcus Tullius Cicero`
},{
  quote: `You only live once, but if you do it right, once is enough.`,
  writer: `- Mae West`
},]

let btn =document.getElementById('new-quote');
let quote = document.getElementById('text');
let writer = document.getElementById('author');

btn.addEventListener("click", () =>{
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;

  writer.innerHTML = quotes[random].writer;
});

const colors = [
  '#FF7F50', // สีแดงส้ม
  '#749da1', // สีเขียว
  '#6495ED', // สีน้ำเงิน
  '#F1C40F', // สีเหลือง
  '#A39FE1', // สีม่วง
  '#DE3163', // สีแดง
  '#3498DB', // สีน้ำเงินฟ้า
  '#2ECC71', // สีเขียวสด
];

btn.addEventListener('click', function() {
    
  // เลือกสีแบบสุ่มจากอาร์เรย์ colors
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomColorIndex];

  // เปลี่ยนสีพื้นหลังของ body และสีข้อความใน quote-box
  document.body.style.backgroundColor = selectedColor;
  document.getElementById('quote-box').style.color = selectedColor;
});