const pas = 'taj'
while(true){
    const userInput = prompt('>taj<لطفا رمز ورود را وارد کنید')
    if(userInput==pas){
        alert('خوش امدید')
        break
    }
}


const mohamad=[
    {
     name:'من نمی خواهم از رویاهای خود صحبت کنم. من می خواهم آنها را نشان دهم',
     h:'رونالدو'
    },{
    name:'ما نمی توانیم به آنچه دیگران در مورد ما فکر می کنند وسواس داشته باشیم و زندگی کنیم',
    h:'رونالدو'},{
     name:'ما می توانیم به دیگران کمک کنیم ، همه می توانیم کمک کنیم',
     h:'رونالدو'},{
    name:'قوی بمان. شجاع باش. فراتر از همه',
    h:'رونالدو'},{
    name:'من فکر می کنم بچه داشتن بهترین چیز در زندگی است',
    h:'رونالدو'},{
     name:'من عیب هایم را هم دارم',
     h:'رونالدو'},{
     name:'من می خواهم به طور مداوم خوب بازی کنم و عناوین کسب کنم',
     h:'رونالدو'},{
      name:'آنقدر خوب باش که کسی نتونه نادیده ات بگیره',
      h:'رونالدو'},{
      name:'برنده شدن,این برای من مهمترین است. به همین سادگی',
      h:'رونالدو'},{
      name:'بعضی ها در خواب میبینند که موفق شده اند اما بعضی ها نمی خوابند تا موفق شوند ',
      h:'رونالدو'},{
      name:'برای من بهترین کار اثبات خودم در مسابقات مختلف است',
      h:'رونالدو'},{
      name: 'وقتی استعداد دارید می توانید به هر چیزی برسید و اگر استعداد ندارید ، نمی توانید هیچ چیزی را بدست آورید',
      h:'رونالدو'},{
     name:'من می خواهم به عنوان بخشی از بزرگترین بازیکنان تاریخ باشم',
     h:'رونالدو'},{
     name: 'این شادترین احساس را در جهان به من می دهد. من فقط دوست دارم گلزنی کنم. مهم نیست که این یک هدف ساده از فاصله نزدیک ، یک شوت بلند یا یک دریبل در اطراف چندین بازیکن باشد ، من فقط دوست دارم همه گل ها را بزنم',
     h:'رونالدو'},{
     name:'برای من مهم نیست که دیگران در موردم چی فکر میکنن مهم اینه که تو ذهن خودم بهترینم ',
     h:'رونالدو'},{
     name:'من هنوز یاد می گیرم',
     h:'رونالدو'},{
    name:'در خواب فکر کردن به بهترین بازیکن جهان کار سختی نیست. همه چیز در مورد تلاش برای بهترین بودن است. من برای رسیدن به آن سخت تلاش خواهم کرد ، اما این در توانمندی های من است',
    h:'رونالدو'},{
     name:'نه پدر پولدار داشتم و نه کسی که بهم کمک کنه و نه پارتی , فقط من بودم و تلاش هایم',
     h:'رونالدو'},{
     name:'امروز فرصتهایی وجود دارد که هیچ کس نمی داند که آیا در آینده دوباره می آیند',
     h:'رونالدو'},{
      name:'من مجبور نیستم چیزی را به کسی نشان دهم. هیچ چیز برای اثبات وجود ندارد',
      h:'رونالدو'},{
     name:' اگر فکر می کنید که از قبل کامل هستید ، دیگر هرگز کریستیانو رونالدو نخواهید بود ',
     h:'رونالدو'},{
    name:'من رویایی را زندگی می کنم که هرگز نمی خواهم از آن بیدار شوم',
    h:'رونالدو'},{
     name:'اجازه ندهید که موانع کوچک در راه پیروزی شما مانعی ایجاد کند. به یاد داشته باشید که شما از چالش های پیش روی خود قوی تر هستید',
     h:'رونالدو'},{
     name:'چرا دروغ می گویی؟ من نمی خواهم منافق باشم و برعکس آنچه فکر می کنم مثل برخی دیگر این کار زشت را انجام دهم',
     h:'رونالدو'},{
      name:'شاید خیلی ها از من متنفر باشند چون من خیلی خوب هستم',
      h:'رونالدو'},{
     name:'من هرگز سعی نکردم این واقعیت را پنهان کنم که تنها هدف من بهترین بودن است',
     h:'رونالدو'},{
    name:'من کمال گرا نیستم ، اما دوست دارم احساس کنم که کارها به خوبی انجام شده است',
    h:'رونالدو'},{
    name:'من خسته نخواهم شد',
    h:'رونالدو'},{
    name:'عشق شما من رو قوی میکنه و تنفر شما من رو قوی تر میکنه!',
    h:'رونالدو'},{
    name:'رویاها همان چیزی نیستند که در خواب می بینید ، رویاها چیزهایی هستند که به شما اجازه نمی دهند بخوابید',
    h:'رونالدو'}
]
const orange = document.getElementById("best")
const h2cris=document.getElementById("cris")
function blue(){ 
    let nini = Math.floor(Math.random() * mohamad.length)
    h2cris.innerText=mohamad[nini].h
    orange.innerText = mohamad[nini].name
}





















