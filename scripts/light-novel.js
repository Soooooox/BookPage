/*=============== SHOW MENU ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* Menu show */
if(searchButton){
  searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* Menu hidden */
if(searchClose){
  searchClose.addEventListener('click', () =>{
    searchContent.classList.remove('show-search')
    })
}
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('shadow-header') 
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '40px',
	duration: 2500,
	delay: 400,
	// reset: true, //Animations repeat
})

sr.reveal('.book-container')
sr.reveal('.book-container',{delay: 300})

/*=============== CREATE HTML ===============*/
const IMG_PATH = './images/cover/';

const container = document.getElementById("book-container");
const detailClose = document.getElementById('detail-close')
const detailContent = document.getElementById('book-detail')
const info = document.getElementById('info')

fetch('./db/lightnovel.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    data.forEach(element => {
      
        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');
        div_row.setAttribute('id', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'book-card');
		    div_card.setAttribute('id', 'book-card');

        const center = document.createElement('center');

        const image = document.createElement('img');
        image.setAttribute('class', 'book-img');
        image.setAttribute('id', 'img');

        const title = document.createElement('h2');
        title.setAttribute('class', 'book-title');

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.img_path;

        container.appendChild(div_row);
        div_row.appendChild(div_column);
        div_column.appendChild(div_card);
        div_card.appendChild(center);
        center.appendChild(image);
        div_card.appendChild(title);


		/* Detail show */
		// 信息
		// const infotitle = document.createElement('h2');
		// infotitle.setAttribute('class', 'title');
		// infotitle.innerHTML = `${element.title}`;
		
		// const totalvol = document.createElement('div');
		// totalvol.setAttribute('class', 'total-vol');
		// totalvol.setAttribute('class', 'detail');
		// totalvol.innerHTML = "总共卷数: " + element.total_vol;
		
		// const  readingvol= document.createElement('div');
		// readingvol.setAttribute('class', 'reading-vol');
		// readingvol.setAttribute('class', 'detail');
		// readingvol.innerHTML = "已读卷数: " + element.reading_vol;

		// const publishedyear = document.createElement('div');
		// publishedyear.setAttribute('class', 'published-year');
		// publishedyear.setAttribute('class', 'detail');
		// publishedyear.innerHTML = "出版年代: " + element.published_year;

		// const serialstatus = document.createElement('div');
		// serialstatus.setAttribute('class', 'serial-status');
		// serialstatus.setAttribute('class', 'detail');
		// serialstatus.innerHTML = "连载状态: " + `${element.serial_status}`;
		
		// const classf = document.createElement('div');
		// classf.setAttribute('class', 'classification');
		// classf.setAttribute('class', 'detail');
		// classf.innerHTML = "分类: " + `${element.classification}`;
		
		// const type = document.createElement('div');
		// type.setAttribute('class', 'type');
		// type.setAttribute('class', 'detail');
		// type.innerHTML = "类型: " + `${element.type}`;

		// const author = document.createElement('div');
		// author.setAttribute('class', 'author');
		// author.setAttribute('class', 'detail');
		// author.innerHTML = "作者: " + `${element.author}`;

		// const readingstatus = document.createElement('div');
		// readingstatus.setAttribute('class', 'reading-status');
		// readingstatus.setAttribute('class', 'detail');
		// readingstatus.innerHTML = "阅读状态: " + `${element.reading_status}`;

		// const evaluate = document.createElement('div');
		// evaluate.setAttribute('class', 'evaluate');
		// evaluate.setAttribute('class', 'detail');
		// evaluate.innerHTML = "作品评价: " + `${element.evaluate}`;

		// const comment = document.createElement('div');
		// comment.setAttribute('class', 'comment');
		// comment.setAttribute('class', 'detail');
		// comment.innerHTML = "作品评论: " + `${element.comment}`;


		
		// if(div_card){
		// 	div_card.addEventListener('click', () =>{
		// 		info.appendChild(infotitle);
		// 		info.appendChild(totalvol);
		// 		info.appendChild(readingvol);
		// 		info.appendChild(publishedyear);
		// 		info.appendChild(serialstatus);
		// 		info.appendChild(classf);
		// 		info.appendChild(type);
		// 		info.appendChild(author);
		// 		info.appendChild(readingstatus);
		// 		info.appendChild(evaluate);
		// 		info.appendChild(comment);
		// 		detailContent.classList.add('show-detail');

		// 	})
		// }

		// /* Detail hidden */
		// if(detailClose){
		// 	detailClose.addEventListener('click', () =>{
		// 		detailContent.classList.remove('show-detail');
		// 		info.removeChild(infotitle);
		// 		info.removeChild(totalvol);
		// 		info.removeChild(readingvol);
		// 		info.removeChild(publishedyear);
		// 		info.removeChild(serialstatus);
		// 		info.removeChild(classf);
		// 		info.removeChild(type);
		// 		info.removeChild(author);
		// 		info.removeChild(readingstatus);
		// 		info.removeChild(evaluate);
		// 		info.removeChild(comment);
		// 		detailContent.classList.add('show-detail');
		// 	})
		// }

    });
  })

const homebutton = document.getElementById('home-button');

homebutton.addEventListener(
'click', () =>{
	window.location.href = "https://soooooox.github.io/HomePage/"
})