let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

switch(month)
      {
        case 1:
          month="January";
          break;
        case 2:
          month="February";
          break;
        case 3:
          month="March";
          break;
        case 4:
          month="April";
          break;
        case 5:
          month="May";
          break;
        case 6:
          month="June";
          break;
        case 7:
          month="July";
          break;
        case 8:
          month="August";
          break;
        case 9:
          month="September";
          break;
        case 10:
          month="October";
          break;
        case 11:
          month="November";
          break;
        case 12:
          month="December";
          break;
        default:
          month="Invalid month";
      }

let showDate = `${day} / ${month} / ${year}`;

const dateDiv = document.getElementById('date');

dateDiv.innerHTML = showDate;

let vidIndex = 1;

const scrollRight = document.querySelector('.scroll-right');
const scrollLeft = document.querySelector('.scroll-left');
const video = document.querySelector('.scroll-vid');

scrollRight.addEventListener("click", function () {
    vidIndex += 1;
    let vidLink = `Vids/Hospital Videos- ${vidIndex}.mp4`;
    video.src = vidLink;
    if (vidIndex == 5) {
        vidIndex = 0;
    } 
})

scrollLeft.addEventListener("click", function () { 
    if (vidIndex == 1) {
        vidIndex = 6;
    }
    vidIndex -= 1;
    let vidLink = `Vids/Hospital Videos- ${vidIndex}.mp4`;
    video.src = vidLink;
})

video.addEventListener("ended", function () {
    vidIndex += 1;
    let vidLink = `Vids/Hospital Videos- ${vidIndex}.mp4`;
    video.src = vidLink;
    if (vidIndex == 5) {
        vidIndex = 0;
    } 
}, false)


const gallery0 = document.querySelector("#gallery-box8");
const gallery1 = document.querySelector("#gallery-box7");
const gallery2 = document.querySelector("#gallery-box6");
const gallery3 = document.querySelector("#gallery-box5");
const gallery4 = document.querySelector("#gallery-box4");
const gallery5 = document.querySelector("#gallery-box3");
const gallery6 = document.querySelector("#gallery-box2");
const gallery7 = document.querySelector("#gallery-box1");

const hotelName = document.querySelector(".gallery-info h1");
const hotelInfo = document.querySelector(".gallery-info p");
const hotelReserve = document.querySelector(".gallery-info a");

gallery0.addEventListener("click", function (){
  hotelName.innerHTML = "هتل بین المللی آذین";
  hotelInfo.innerHTML = "هتل بین المللی آذین اولین هتل 4 ستاره استانداردسازی شده در استان سرسبز گلستان و در شهرستان زیبای گرگان و در مسیر جاده تهران گرگان و مدخل ورودی شهر قرار دارد . این هتل از شمال به دشت زیبای ترکمن و از جنوب به کوهها و جنگل سرسبز گلستان و از غرب به دشت زیبای ترکمن و جاده تهران گرگان و از شرق به شهر گرگان مشرف می باشد و با محيطي آرام و دلنشين و پرسنلي با تجربه، ميزبان شما ميهمانان گرامي مي‌باشد. اکنون اين هتل داراي پذيرش 24 ساعته مسلط به زبان انگليسي ، انواع اتاق ها و سوئيت ، wifi رايگان پرسرعت ، باشگاه بدنسازي ، پاركينگ اختصاصي مسقف ، سالن هايي با ظرفيت بالا براي برگزاري مراسم وهمايش و سمينار و ... ميباشد و با داشتن پرسنلی آموزش‌ ديده و مجرب و امکاناتی همچون رستوران ، کافی شاپ 24 ساعته ، فروشگاه وسايل سنتي و فروشگاه شيريني سنتي گرگان،تاکسی تلفنی و طرف قرار دار با استخر و بزرگترين مجموعه سواركاري و زمين تنيس ...در امر خدمت‌رساني ، آماده پذيرايي از مسافرين محترم و همشهريان گرامي مي‌باشد.";
  hotelReserve.style.display = "block";
})
gallery1.addEventListener("click", function (){
  hotelName.innerHTML = "مرکز آموزشی رفاهی فرهنگیان";
  hotelInfo.innerHTML = "زمین این بنا از باب ثلث سهم مرحوم حاج یحیی دارویی توسط حضرت آیت الله سید ضیاالدین استرآبادی امام جماعت مسجد جامع تهران جهت استفاده فرهنگیان به آموزش و پرورش اهدا گردید. عملیات احداث این بنای آموزشی و رفاهی از مهر ماه سال ١٣٧٨ آغاز و در اردیبهشت ماه سال ١٣٨٠ همزمان با سالروز شهادت استاد مرتضی مطهری و هفته بزرگداشت مقام والای معلم، باحضور جناب آقای مظفری وزیر محترم آموزش و پرورش افتتاح گردید.";
  hotelReserve.style.display = "block";
})
gallery2.addEventListener("click", function (){
  hotelName.innerHTML = "هتل زیارت گرگان";
  hotelInfo.innerHTML = "هتل زیارت با مساحت ۲۰۰۰ متر مربع در روستای خوش آب و هوای زیارت در انتهای جاده زیبا و خاطر انگیز ناهار خوران گرگان واقع شده است. روستای زیارت به دلیل وجود آب و هوایی روح انگیز موجب جذابیت بیشتر این هتل شده است. از امتیازات این هتل اتاق های رو به مناظر زیبای طبیعی و امکان گشت های تفریحی می باشد. این هتل با کارکنان مجرب آماده پذیرایی از شما مهمانان گرامی می باشند تا اقامتی خاطره انگیز را برایتان رقم بزنند.";
  hotelReserve.style.display = "block";
})
gallery3.addEventListener("click", function (){
  hotelName.innerHTML = "هتل جهانگردی ناهارخوران گرگان";
  hotelInfo.innerHTML = "هتل جهانگردی ناهارخوران در سال ۱۳۵۴ افتتاح و جهت ارتقا کیفیت خدمات در سال ۱۳۸۹ بازسازی انجام داده است. این هتل در بلوار ناهارخوران گرگان در دل جنگل های هیرکانی و فاصله ۸ کیلومتری از مرکز شهر واقع شده است. از مزایای این مجموعه می‌توان به دسترسی آسان به پارک جنگلی النگدره و روستای توریستی زیارت اشاره نمود. هتل جهانگردی در ۳ طبقه و ۱۵۰ باب اتاق، کلبه و سوئیت با دارا بودن کادر مجرب و آموزش دیده پذیرای شما میهمانان عزیز می‌باشد.";
  hotelReserve.style.display = "block";
})
gallery4.addEventListener("click", function (){
  hotelName.innerHTML = "هتل بوتانیک گرگان";
  hotelInfo.innerHTML = "این هتل مجلل 5 ستاره در یک باغ 4 هکتاری با امکانات منحصر بفرد دارای سالن های ورزش برای خانم ها و آقایان بطور جداگانه هر کدام شامل استخر ، سونای خشک و بخار ، جکوزی ، سالن ماساز و آرایش می باشد .";
  hotelReserve.style.display = "block";
})
gallery5.addEventListener("click", function (){
  hotelName.innerHTML = "هتل آپارتمان گل نرگس گرگان";
  hotelInfo.innerHTML = "هتل گل نرگس در سال ۱۳۹۵ افتتاح و در نزدیکی مرکز شهر گرگان واقع گردیده است. موقعیت مکانی مناسب هتل و دسترسی آسان مهمانان به مقاصد گردشگری شهر گرگان از جمله پارک جنگلی نهارخوران، کاخ موزه گرگان، مسجد جامع، بازار نعلبندان، پارک جنگلی النگدره و منطقه جنگلی ناهارخوران از امتیازات این هتل می‌باشد. این هتل در ۶ طبقه و ۲۳ واحد آماده میزبانی از میهمانان گرامی می‌باشد.";
  hotelReserve.style.display = "block";
})
gallery6.addEventListener("click", function (){
  hotelName.innerHTML = "هتل شهاب ناهارخوران گرگان";
  hotelInfo.innerHTML = "هتل شهاب ناهار خوران گرگان در سال ۱۳۹۲ در ۴ طبقه و ۴۳ واحد اقامتی در یکی از بهترین مناطق گرگان مورد بهره برداری قرار گرفت. نزدیگی این هتل به جنگل‌های حفاظت شده و زیبای گرگان فضای مناسبی را برای علاقه مندان به طبیعت ایجاد کرده است. همچنین این هتل با بهره گیری از امکانات رفاهی و خدمات ویژه با کادری مجرب و آموزش دیده آماده ی پذیرایی از میهمانان گرامی در تمام فصول می‌باشد.";
  hotelReserve.style.display = "block";
})
gallery7.addEventListener("click", function (){
  hotelName.innerHTML = "هتل پارتیا گرگان";
  hotelInfo.innerHTML = "مجموعه چند منظوره پارتیا گرگان با کاربری تجاری، تفریحی، اقامتی یکی از بهترین های کشور از نظر زیبایی و تجهیزات و از بزرگترین های شمال کشور است. احداث این مجموعه در خیابان ناهار خوران گرگان که معروفترین منطقه این شهر می‌باشد، توجه بسیاری را به خود جلب خواهد کرد.";
  hotelReserve.style.display = "block";
})

const partName = document.querySelector(".introduce h2");
const partInfo = document.querySelector(".introduce p");
const partimg = document.querySelector(".all-parts");

const parts1 = document.querySelector("#parts1");
const parts2 = document.querySelector("#parts2");
const parts3 = document.querySelector("#parts3");
const parts4 = document.querySelector("#parts4");
const parts5 = document.querySelector("#parts5");
const parts6 = document.querySelector("#parts6");
const parts7 = document.querySelector("#parts7");
const parts8 = document.querySelector("#parts8");
const parts9 = document.querySelector("#parts9");

parts1.addEventListener("click", function () {
  partName.innerHTML = "هتلینگ";
  partInfo.innerText = "امروزه، برخی از افراد به‌دلیل شرایط کاری و مسافرت‌های پی‌درپی، تمایل دارند در ساختمان‌هایی اقامت کنند که در کنار ارائه خدمات در بالاترین سطح، امکان اقامت به‌صورت بلندمدت نیز در آن‌ها وجود داشته باشد. البته بعضی از هتل‌ها، چنین شرایطی را برای ساکنان فراهم می‌کنند، اما شاید بهترین گزینه برای این دسته از افراد، اقامت در برج‌های لوکس مسکونی باشد. این دسته از برج‌های مسکونی که در کنار فراهم آوردن تمام امکانات لازم برای زندگی، اجازه اقامت برای یک دوره طولانی را به شما می‌دهند به هتلینگ آپارتمان معروف هستند. در این مطلب قصد داریم در مورد امکانات هتلینگ آپارتمان و قیمت واحدهای آن صحبت کنیم، بنابراین تا انتهای مطلب همراه هومتیک باشید.";
  partimg.style.backgroundImage = "url(pics/parts/hoteling.jpg)";
  partlink.href = "#";
})

parts2.addEventListener("click", function () {
  partName.innerHTML = "حمل و نقل";
  partInfo.innerText = "حمل و نقل، پیوند ضروری بین نواحی مبدأ و مقصد را برای گردشگر‌ فراهم آورده و حرکت را برای سفرهای گوناگون از جمله سفرهای آخر هفته، سفرهای تجاری، سفرهای سیاحتی، ملاقات با دوستان و اقوام و حتی سفرهای خدماتی، آموزشی و درمانی تسهیل ‌می‌نماید. حمل و نقل یک عنصر اساسی از تجربه گردشگر است که بعضی از مفسرین آن را به عنوان یک مکمل برای صنعت گردشگری در نظر گرفته‌اند. حمل و نقل ‌می‌تواند محور مرکزی فعالیت‌های گردشگر در نظر گرفته شود چرا که این عامل خود یکی از مهمترین اجزاء سفر را شامل ‌می‌شود. در این راستا نحوه حمل و نقل نقش مؤثر و بسزایی در ساختار جابجایی گردشگر و جذابیت‌های سفر ایفا ‌می‌کند.";
  partimg.style.backgroundImage = "url(pics/parts/hamlonaql.png)";
  partlink.href = "#";
})

parts3.addEventListener("click", function () {
  partName.innerHTML = "مشاوره تلفنی";
  partInfo.innerText = "بخش مهمی از مشاوره تلفنی این است که شما احساس می کنید توسط مشاور خود شنیده و درک می کنید. اکثر مشاورانی که جلسات تلفنی ارائه می دهند، ارزیابی را از طریق تلفن ارائه می دهند. این یک فرصت ارزشمند برای شما است تا در مورد نحوه کار آن مشاور بیشتر بدانید و برای شما احساس مشاوره تلفنی داشته باشید. امیدواریم در پایان ارزیابی، شما تصوری داشته باشید که آیا از کار کردن با مشاور احساس راحتی می کنید یا خیر. اگر تصمیم بگیرید که می‌خواهید ادامه دهید، این کار را انجام دهید: با مشاور خود در مورد نحوه همکاری با یکدیگر توافق کنید، تعداد جلسات را تعیین کنید، پرداخت را انجام دهید و یک جلسه مشاوره تلفنی منظم، معمولاً به صورت هفتگی، برنامه‌ریزی کنید. به طور متوسط ​​جلسات معمولاً حداقل 6 تا 15 هفته طول می کشد.";
  partimg.style.backgroundImage = "url(pics/parts/call_center_Vac.jpg)";
  partlink.href = "#";
})

parts4.addEventListener("click", function () {
  partName.innerHTML = "جواب آزمایشات";
  partInfo.innerText = "آیا پس از انجام خدمت آزمایش در منزل با هومکا، نیاز به تفسیر نتیجه آزمایش خود پیدا کرده‌اید؟ آیا تا به حال بعد از بررسی و تفسیر آزمایش خون گیج شده‌اید؟ شما تنها نیستید.  چیزی که سبب که می‌شود خواندن جواب آزمایش برای ما سخت باشد، اصطلاحات و اعداد ارقامی است که در برگه آزمایش می‌بینیم. در این مقاله هومکا سعی کرده است تا بخشی از مهم‌ترین و پرکاربردترین فاکتورهای آزمایش را بررسی نماید. با مطالعه این مقاله می‌توانید تا حدودی متوجه نتیجه آزمایشات مختلف شوید. برای تفسیر آنلاین آزمایش خون توسط پزشک هومکا بر روی بنر زیر کلیک کنید.";
  partimg.style.backgroundImage = "url(pics/parts/Lab-Organization-Chemists.webp)";
  partlink.href = "#";
})

parts5.addEventListener("click", function () {
  partName.innerHTML = "رسیدگی به شکایات";
  partInfo.innerText = "همانطور که در قسمت قبل توضیح داده شد ، نحوه شکایت و رسیدگی در سازمان بازرسی کل کشور از طریق سایت سازمان بازرسی کل کشور است و هر فردی می تواند با ورود به سایت و تکمیل اطلاعات لازم ، شکایت های خود را که به موجب ماده 2 قانون سازمان بازرسی کل کشور در صلاحیت سازمان بازرسی است ، در سامانه ثبت نموده و برای پیگیری رسیدگی به شکایات خود ، از طریق همین سامانه اقدامات لازم را انجام دهند . با این حال ، سازمان بازرسی کل کشور یک شماره تلفن نیز برای ثبت شکایات و اعلام گزارش های مربوط به تخلف و فساد در سازمان های دولتی اختصاص داده است . شماره تلفن 136 ، تلفن اختصاصی سازمان بازرسی کل کشور است که از طریق این شماره تلفن خواهید توانست در صورت عدم دسترسی به اینترنت اقدام به اعلام موارد تخلف نمایید . همچنین اگر قبلا شکایت های خود را در سایت سازمان بازرسی کل کشور وارد نموده اید ، از طریق تماس با تلفن 136 می توانید شکایات خود را پیگیری نمایید .";
  partimg.style.backgroundImage = "url(pics/parts/Rule-Of-Law-Application-Of-The-Doctrine-Detailed-Overview.jpg)";
  partlink.href = "#";
})

parts6.addEventListener("click", function () {
  partName.innerHTML = "رضایت سنجی";
  partInfo.innerText = "برخلاف باور عمومِ مدیران کسب‌وکارها، همیشه ارائه برترین و عالی‌ترین خدمات به مشتری، تامین کننده رضایت مشتری نیست! در واقع، برای جلب رضایت کامل و عالی مشتری، الزاما نیازی به «عالی بودن» هم نیست. مجله هاروارد بیزنس در مقاله‌ای می‌گوید که مشتریان اغلب می‌دانند که ممکن است در ارائه خدمات یا کیفیت محصولات برندی مشکلاتی وجود داشته باشد؛ اما چیزی که برایشان مهم است ارتباط دوستانه مسئولان ارائه خدمات مشتری است. چیزی که اغلب مشتریان پس از حل شدن مشکلشان در محصولات یا خدمات برندها به یاد می‌آورند، پاسخگویی سریع و متواضعانه مسئولان خدمات مشتری است نه خود آن مشکل! البته به دست آوردن رضایت مشتریان همیشه هم به همین سادگی نیست؛ اما می‌توان به طور کلی گفت سازمان‌ها و کسب‌وکارهایی که در پی جلب رضایت مشتریان هستند باید رضایت سنجی مشتری را به خوبی درک کنند چراکه آن‌ها می‌دانند درگیر کردن احساسی مشتریان با برند و ایجاد وفاداری به برند، از ۲۵ درصد تا ۱۰۰ درصد می‌تواند مشتریان ارزشمندتری برای آن‌ها در ایجاد درآمد و سود به ارمغان آورد.";
  partimg.style.backgroundImage = "url(pics/parts/iStock-1086151354.webp)";
  partlink.href = "#";
})

parts7.addEventListener("click", function () {
  partName.innerHTML = "بیمارستان انلاین";
  partInfo.innerText = "بیمارستان مجازی یک سامانه کاملاً خودکار است که به صورت آنلاین به معاینه و تشخیص بیماری کاربران پرداخته و راهنمایی لازم را تا حد امکان به آنان ارائه می دهد. بیماران با مراجعه به این سامانه، علائم و مشاهدات خود را وارد نموده و سامانه با بررسی شرح حال و سابقه بیمار، و با پرسیدن سؤالات مرتبط بیشتر درست مانند یک پرشک ـ بیماری احتمالی شخص را تشخیص می دهد و با توجه به نوع بیماری، شخص را برای مراحل بعدی از قبیل اطلاعات عمومی، مراقبت و مراجعه به پزشک هدایت می کند. بیمارستان مجازی دستاوردی است از تلفیق و همکاری سه حوزه پزشکیIT و انفورماتیک پزشکی. بومی سازی دانش پزشکی، کاهش مراجعات غیر ضروری، افزایش استفاده عمومی، کمک به پزشکان، و توریسم سلامت از اهداف این مقاله است  یک بیمارستان مجازی در واقع سیستم اطلاعاتی کاربردی است که براساس مدل‌سازی سه بعدی یک بیمارستان واقعی طراحی شده است. این امر برای آشنایی بیماران با بیمارستانی است که قرار است در آنجا تحت درمان قرار گیرند. به بیانی دیگر بیمارستان مجازی یک محیط الکترونیکی است که پزشکان و اساتید علوم پزشکی قادرند تیم پزشکی را تحت آموزش قرار دهند و این تیم حتی می‌تواند خارج از آن کشور نیز باشد و دانشجویان پزشکی می‌توانند در یک شرایط شبیه سازی شده، مواردی را تحت آزمایش و آموزش قراردهند. این بیمارستان‌های مجازی مبتنی بر کامپیوتر هستند در واقع سعی شده که بیمارستان شبیه سازی شود. گاهی این بیمارستان‌ها فقط شامل مخزن و کتابخانه‌ای از اطلاعات مرتبط با بیماری‌ها و درمان است. از نگاهی دیگر بیمارستان مجازی یک کتابخانه دیجیتال است که اطلاعات سلامت (بهداشت و درمان) را بر دارد. هدف اصلی این است که یک مرجع و منبع پزشکی برای پیشرفت در سطح سلامت فراهم آورده شود که این امکان هم برای پزشکان و هم برای بیماران قابل دستیابی است. تجسم فکری سه بعدی، انیمیشن و تکنیک‌‌های تداخلی می‌توانند به کارگرفته شوند تا به کاربر یک احساس واقعی را بدهنددر سطحی پیشرفته تر یک بیمارستان مجازی، بیماران را در خانه هایشان مونیتور خواهد کرد. این مراکز، مراکزی برای کنترل دارند که در سطح کشور گسترش می‌یابند تا بتوانند هر ناحیه را تحت کنترل خود درآورند. ";
  partimg.style.backgroundImage = "url(pics/parts/cr=t_16.webp)";
  partlink.href = "#";
})

parts8.addEventListener("click", function () {
  partName.innerHTML = "نوبت دهی اینترنتی";
  partInfo.innerText = "هر سامانه و نرم افزار سازوکار مخصوص به خودش را دارد اما بطور کلی زمان‌های فعالیت سازمان در سامانه تعریف شده و بر اساس استاندارد زمانی به مشتریان وقت داده می‌شود. از طریق ارسال پیامک یادآوری زمان مناسب حضور مشتری به او اطلاع داده می‌شود سیستم به صورت کاملا هوشمند عمل می‌کند و امکان بروز خطای انسانی در آن به صفر می‌رسد. در سیستم‌های سنتی و دستی ثبت نوبت، این امکان وجود داشت که یک زمان به اشتباه برای دو مشتری ثبت شود یا اینکه در روزهای نامناسب وقت مراجعه داده شود. سیستم نوبت دهی بسیار دقیق است و چه کارکنان و چه مشتریان نمی‌توانند یک نوبت را برای دونفر ثبت کنند. برخی سیستم‌های نوبت دهی که بر بستر ابری و اینترنت مشغول فعالیت هستند، همه‌جا در دسترس مدیران هستند و آن‌ها در هر زمانی می‌توانند عملکرد سازمان و کارکنان را بررسی کنید. امکان ثبت سابقه مراجعه هر شخص و دریافت اطلاعات مشتری برای ایجاد پروفایل اختصاصی مشتریان هم وجود دارد. پلنوین یک سامانه هوشمند است که قابلیت ارسال پیامک و ایمیل یادآوری را هم برای کارفرما در نظر گرفته است. استفاده از این سامانه‌ها برای کسب‌وکار و مشتریان عملکرد برد برد دارد و در زمان و هزینه‌های آن‌ها صرفه‌جویی می‌کند. با ارتقای سطح نوبت دهی کسب‌وکار شما منعطف شده و با نیازهای مشتری سازگار می‌شود و سرعت پیشرفت شما افزایش چشمگیری پیدا می‌کند.";
  partimg.style.backgroundImage = "url(pics/parts/online-hotel-bookings-1.77.jpeg)";
  partlink.href = "#";
})

parts9.addEventListener("click", function () {
  partName.innerHTML = "قرارداد با بیمه ها";
  partInfo.innerText = "در این نوع بیمه، مبلغ مشخصی در قرارداد تعیین شده و فرد به شرکت بیمه تعهد می‌دهد که این مبلغ را به‌صورت ماهانه و در یک بازه زمانی معین، به شرکت بیمه پرداخت کند و در عوض آن، تسهیلات مختلفی را در زمان حیات و یا در صورت فوت، برای بازمانده‌های خود دریافت کند. مبلغ پرداختی از سوی فرد و البته بازه زمانی پرداخت حق بیمه، در طی قرارداد و با توجه به بندهای مختلف آن تعیین خواهد شد. عوامل مختلفی هم‌چون سن فرد، جنسیت، وضعیت سلامت و تاریخچه سلامت خانوادگی او، شغل و محیط کار، همه جزو موارد مهم تاثیرگذار بر مبلغ بیمه و نحوه تعهد شرکت بیمه به فرد خواهند بود. بیمه عمر خود به بخش‌های فرعی‌تری هم‌چون بیمه تمام عمر، بیمه عمر زمانی، بیمه عمر انفرادی و مشترک و چندین مورد دیگر تقسیم می‌شود که می‌توانید با توجه به نوع نیاز خود، مناسب‌ترین نوع را برگزینید.";
  partimg.style.backgroundImage = "url(pics/parts/shutterstock_373492012-health-insurance-e1491415000969.jpg)";
  partlink.href = "#";
})


const fixchat = document.querySelector(".fix-chat img");
const dingsound = document.querySelector(".fix-chat audio");

fixchat.addEventListener("mouseover", function () {
  dingsound.play();
})

const chatBox = document.querySelector("#chat-box");
const maleOp = document.getElementById("male-op");
const femaleOp = document.getElementById("female-op");
const fastOp = document.getElementById("fast-op");
const chatt = document.querySelector(".chat-place");

fixchat.addEventListener("click", function () {
  chatBox.classList.add("displayOn");
})

maleOp.addEventListener("click", function(){
  chatBox.classList.remove("displayOn");
  chatt.classList.add("displayOn");
})

window.addEventListener('click', function(e){
	
	if (chatBox.contains(e.target)){
  	chatBox.classList.remove("displayOn");
    chatt.classList.add("displayOn");
  }
  else if (fixchat.contains(e.target)) {

  }
  else{
  	chatBox.classList.remove("displayOn");
  }
})

const crossbtn = document.querySelector("#close-chat img")

crossbtn.addEventListener('click', function () {
  chatt.classList.remove("displayOn");
})



function sends(){
  const text = document.querySelector("#send-cont input")
  const node = document.createElement("li");
  const textnode = document.createTextNode(text.value);

if(text.value !== "") {
  node.appendChild(textnode);
  document.getElementById("c-message-ul").appendChild(node);
  text.value = "";
  }
}


var inputt = document.querySelector("#send-cont input");

inputt.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#send-cont button").click();
  }
});
