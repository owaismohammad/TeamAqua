document.addEventListener("DOMContentLoaded", function () {
    const newsSContainer = document.getElementById('newsTabs-1');
    const newsIContainer=document.getElementById('newsTabs-2');
    const cardsDataS = [
        
        { title: "Preserving Paradise: Goa's urgent call for water conservation"},
        { title: "'Save 600 litres per day with small steps': Bengaluru doctor's watr saving tips go viral"},
        { title: "Coimbatore to get water from Nilgiris to tide over scarcity"},
        
        { title: "Delhi Jal Board sets target of 1,000 MGD water supply during summer"},
        { title: "Philippines summons China envoy over water cannon attack in South China Sea"},
        { title: "[Water Plant Updates] Water Treatment Industry to Reach $489.07 Billion by 2029"},
        { title: "Israel ties up with IIT-M to set up water technology centre"},
        { title: "Water conservation measures announced for Grand Canyon National Park"},
        { title: "Las Vegas becomes unlikely model for water conservation"},
        { title: "Ice Shelves Fracture Under Weight of Meltwater LakesSalem District Collector instructs officials to prioritise drinking water related works"},
        { title: "Improving access to water, sanitation and hygiene can save 1.4 million lives per year, says new WHO report"},
        { title: "7 Best Water Stocks and ETFs to Buy"},
    ];
    const cardsDataI = [
        { title: "L’Oréal to acquire Gjosa, environmental water tech startup behind breakthrough Water Saver innovations", text: "" },
        { title: "IndiGo partners with Altered for water conservation on its flights"},
        { title: "Salad grower trials new water-saving technology"},
        { title: "Catalytic membranes for water treatment: Perspectives and challenges"},
        { title: "Spiral Water Technologies introduces new filtration system for biogas production"},
        { title: "India, Israel to jointly develop Center of Water Technology at IIT Madras"},
        { title: "Murugappa Water Technology & Solutions, Scalene Livprotec Launch 'Aquatron'"},
        { title: "New water treatment approach helps to avoid harmful chemicals"},
        { title: "Bacteria made to turn sewage into clean water – and electricity"},
        { title: "Voltea Named Breakthrough Water Technology Company of the Year "},
        { title: "New tech could one day scrub ‘forever chemicals’ from your tap water"},
        { title: "New nontoxic powder uses sunlight to quickly disinfect contaminated drinking water"},
        { title: "How Singapore is turning sewage into ultra-clean water"},
        { title: "GE's Water & Process Technologies Invests in Demonstrating 'Energy Neutral' Wastewater Solutions in Conjunction with Ontario's University of Guelph"},
        { title: "New permanent water conservation rules are coming to California — see how your city will be affected"},
        { title: "Seven regions in England will face severe water stress by 2030 as Brits significantly underestimate their daily water usage"},
        { title: "SRP hosting FREE Water Conservation Expo with classes, freebies and discounts"},
        { title: "Niti panel likely to propose incentives for efficient use of water"},
    ];
    let i = 0;
    let j=0;
    const linksListS = [
        
        "https://www.gomantaktimes.com/opinion/preserving-paradise-goas-urgent-call-for-water-conservation",
        "https://www.timesofindia.indiatimes.com/city/bengaluru/save-600-liters-per-day-with-small-steps-bengaluru-doctors-water-saving-tips-go-viral/articleshow/108615141.cms",
        "https://timesofindia.indiatimes.com/city/coimbatore/coimbatore-to-get-water-from-nilgiris-to-tide-over-scarcity/articleshow/109741724.cms",
        
        "https://timesofindia.indiatimes.com/city/chennai/israel-ties-up-with-iit-m-to-set-up-water-technology-centre/articleshow/100316448.cms",
        "https://www.fox10phoenix.com/news/water-conservation-measures-announced-for-grand-canyon-national-park",
        "https://www.cbsnews.com/news/las-vegas-water-conservation-grass/",
        "https://www.hindustantimes.com/cities/delhi-news/delhi-jal-board-sets-target-of-1-000-mgd-water-supply-during-summer-101714587455470.html",
        "https://www.aljazeera.com/news/2024/5/2/philippines-summons-china-envoy-over-water-cannon-attack-in-south-china-sea",
        "https://www.globenewswire.com/en/news-release/2023/06/12/2685992/0/en/Water-Plant-Updates-Water-Treatment-Industry-to-Reach-489-07-Billion-by-2029.html"
    ];
    
    const linksListI = [
        "https://www.loreal-finance.com/eng/news-release/loreal-acquire-gjosa-environmental-water-tech-startup-behind-breakthrough-water-saver",
        "https://timesofindia.indiatimes.com/business/india-business/indigo-partners-with-altered-for-water-conservation-on-flights/articleshow/107115576.cms",
        "https://www.bbc.co.uk/news/articles/ckve938gnv7o",
        "https://www.sciencedirect.com/science/article/pii/S2772416624000159",
        "https://www.watertechonline.com/industry/article/14302475/spiral-water-technologies-introduces-new-filtration-system-for-biogas-production",
        "https://www.business-standard.com/india-news/india-israel-to-jointly-develop-center-of-water-technology-at-iit-madras-123051700758_1.html",
        "https://www.aninews.in/news/business/business/murugappa-water-technology-amp-solutions-scalene-livprotec-launch-aquatron20231018103158",
        "https://phys.org/news/2023-09-treatment-approach-chemicals.html",
        "https://www.newscientist.com/article/mg23130840-100-bacteria-made-to-turn-sewage-into-clean-water-and-electricity/",
        "https://americanlaundrynews.com/node/83267",
        "https://www.washingtonpost.com/climate-solutions/2023/04/16/pfas-water-treatment-filter/",
        "https://news.stanford.edu/2023/05/18/new-technology-uses-ordinary-sunlight-disinfect-drinking-water/",
        "https://www.livemint.com/science/news/how-singapore-is-turning-sewage-into-ultra-clean-water-11628564552806.html",
        "https://www.ge.com/news/press-releases/ges-water-process-technologies-invests-demonstrating-energy-neutral-wastewater",
        "https://www.mercurynews.com/2023/08/31/new-permanent-water-conservation-rules-are-coming-to-california-see-how-your-city-will-be-affected/",
        "https://www.kingfisher.com/en/media/news/kingfisher-news/2023/seven-regions-in-england-will-face-severe-water-stress-by-2030-a.html",
        "https://www.abc15.com/news/local-news/srp-hosting-free-water-conservation-expo-with-classes-freebies-and-discounts",
        "https://m.economictimes.com/news/economy/policy/niti-panel-likely-to-propose-incentives-for-efficient-use-of-water/articleshow/99444101.cms"
    ];
    const imagesListS = [
        "https://admin-cires.colorado.edu/sites/default/files/2024-04/Timeplase%20camera%20install-Antarctica-Banwell-2019.jpeg",
        "https://cmp.smu.edu.sg/sites/cmp.smu.edu.sg/files/styles/large/public/articles/Washing_hands.jpg?itok=4MyNX_XH",
        "https://www.usnews.com/object/image/0000018e-d3ab-d4e4-a39e-f7bffb6c0000/gettyimages-726771493-1.jpg?update-time=1712948296033&size=responsive970",
        "https://media.assettype.com/gomantaktimes%2F2024-03%2F19adfbfd-56bd-4786-a97e-cfb806809c47%2FImp_template_for_GT____2024_03_18T152704_714.jpg?w=1200&auto=format%2Ccompress&fit=max",
        "https://static.toiimg.com/thumb/msid-108615496,imgsize-505490,width-400,height-225,resizemode-72/108615496.jpg",
        "https://img.locationscout.net/images/2018-10/nailing-nilgiri-bangladesh_l.jpeg",
        "https://www.hindustantimes.com/ht-img/img/2024/05/01/550x309/A-reservoir-and-treatment-plant-of-the-Delhi-Jal-B_1714587411162.jpg",
        "https://www.aljazeera.com/wp-content/uploads/2024/05/12196825-1714695301.jpg?resize=770%2C513&quality=80",
        "https://ecoprotection.in/wp-content/uploads/2020/09/3.NPCIlindus.jpeg",
        "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/05/23114251/India-Israel-Relations.jpg",
        "https://th.bing.com/th/id/OIP.ORgzmjJEDYgKXi1tCHVwbQAAAA?pid=ImgDetMain",
        "https://assets2.cbsnewsstatic.com/hub/i/r/2022/06/01/59740208-eda2-4bb5-8e63-7e83467b39ce/thumbnail/1280x720/df3bf5616500083e1722bd132824cfba/0601-ctm-vegaswater-tracy-1041077-640x360.jpg?v=1d6c78a71b7b6252b543a329b3a5744d"
    ];

    const imagesListI=[
      "https://th.bing.com/th/id/OIP.PKAmt1NdldpIkkECaAIdpAHaE8?rs=1&pid=ImgDetMain",
      "https://static.toiimg.com/thumb/msid-107115558,width-1280,height-720,resizemode-4/107115558.jpg",
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/ccfc/live/984ed700-ba14-11ee-896d-39d9bd3cadbb.jpg.webp",
      "https://th.bing.com/th/id/OIP.krBLEQn8JmOkSe7Y8N4nXAHaHa?pid=ImgDetMain",
      "https://img.watertechonline.com/files/base/ebm/wto/image/2023/12/65722a53b3b16b001e3a55ed-dairy_farm_spiral_water_t1000_qpx_systems.png?auto=format,compress&fit=max&q=45&w=250&width=250",
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/17/full/1684322625-0666.jpg?im=FeatureCrop,size=(826,465)",
      "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20231018050054.jpg",
      "https://scx1.b-cdn.net/csz/news/800a/2023/new-water-treatment-ap.jpg",
      "https://images.newscientist.com/wp-content/uploads/2016/07/27180000/gettyimages-85641887.jpg?width=900",
      "https://th.bing.com/th/id/OIP.KhFMXGCMvVwtWegLOA51QgHaHa?pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.TmJIZBd5qYKtx-mZOoqPHQHaEK?pcl=1b1a19&pid=ImgDetMain",
      "https://news.stanford.edu/wp-content/uploads/2023/05/Cui-water-disinfection-may-2023-705x470.jpg",
      "https://images.livemint.com/img/2021/08/10/600x338/AFP_9GV88W_1628564796428_1628564814522.jpg",
      "https://th.bing.com/th/id/OIP.t6Qla2ZUfjp-9_Y4K2ZInwHaFj?pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.9EDG4ho0nFJRtv-OW0k5kwHaFK?pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.x8DlZebFX0iVvdiHwKptEwHaHa?pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.AyvEG-JDUwCEqEOtKdSSyAHaEF?pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.TcodSITw9yLGYSEl78Fn7wHaD4?pid=ImgDetMain"
    ];
    
    function createCardsS(cardData) {
        const card = document.createElement('div');
        card.className = 'card';
        card.classList.add(`card-${i}`);
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${cardData.title}</h5>
                <img src="${imagesListS[i]}" height="200" width="200"><br>
                <a href="${linksListS[i]}" class="btn btn-outline-secondary">Go to Article</a>
            </div>
        `;
        i++;
        return card;
    }
    function createCardsI(cardData) {
        const card = document.createElement('div');
        card.className = 'card';
        card.classList.add(`card-${j}`);
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${cardData.title}</h5>
                <img src="${imagesListI[j]}" height="200" width="200"><br>
                <a href="${linksListI[j]}" class="btn btn-outline-secondary">Go to Article</a>
            </div>
        `;
        j++;
        return card;
    }

    // Function to show cards for newsTabs-2
    function showPageI(pageNumber) {
        newsIContainer.innerHTML = ''; // Clear existing cards

        const startIndex = (pageNumber - 1) * 3;
        const endIndex = Math.min(startIndex + 3, cardsDataI.length);

        for (let i = startIndex; i < endIndex; i++) {
            const card = createCardsI(cardsDataI[i]);
            newsIContainer.appendChild(card);
        }

        // Enable/disable pagination buttons based on page number and total pages
        const prevPageButton = document.getElementById('prevPage-I');
        const nextPageButton = document.getElementById('nextPage-I');

        if (pageNumber === 1) {
            prevPageButton.disabled = true;
            prevPageButton.classList.add('disabled');
        } else {
            prevPageButton.disabled = false;
            prevPageButton.classList.remove('disabled');
        }

        if (pageNumber === totalPagesI) {
            nextPageButton.disabled = true;
            nextPageButton.classList.add('disabled');
        } else {
            nextPageButton.disabled = false;
            nextPageButton.classList.remove('disabled');
        }
    }

    const totalPagesI = Math.ceil(cardsDataI.length / 3);
    let currentPageI = 1;

    // Show initial page for newsTabs-2
    showPageI(currentPageI);

    // Add event listener for next page button
    document.getElementById('nextPage-I').addEventListener('click', () => {
        if (currentPageI < totalPagesI) {
            currentPageI++;
            showPageI(currentPageI);
        }
    });

    // Add event listener for previous page button
    document.getElementById('prevPage-I').addEventListener('click', () => {
        if (currentPageI > 1) {
            currentPageI--;
            showPageI(currentPageI);
        }
    });

    function showPage(pageNumber) {
        newsSContainer.innerHTML = ''; // Clear existing cards

        const startIndex = (pageNumber - 1) * 3;
        const endIndex = Math.min(startIndex + 3, cardsDataS.length);

        for (let i = startIndex; i < endIndex; i++) {
            const card = createCardsS(cardsDataS[i]);
            newsSContainer.appendChild(card);
        }
        const prevPageButton = document.getElementById('prevPage');
        const nextPageButton = document.getElementById('nextPage');

        if (currentPage === 1) {
            prevPageButton.disabled = true;
            prevPageButton.classList.add('disabled');
        } else {
            prevPageButton.disabled = false;
            prevPageButton.classList.remove('disabled');
        }

        if (currentPage === totalPages) {
            nextPageButton.disabled = true;
            nextPageButton.classList.add('disabled');
        } else {
            nextPageButton.disabled = false;
            nextPageButton.classList.remove('disabled');
        }
    }

    const totalPages = Math.ceil(cardsDataS.length / 3);
    let currentPage = 1;
    showPage(currentPage);

    document.getElementById('nextPage').addEventListener('click', () => {
        console.log('Next page clicked'); // Debugging
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    document.getElementById('prevPage').addEventListener('click', () => {
        console.log('Previous page clicked'); // Debugging
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
});
