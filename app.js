const btns= document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if( id !== undefined){
        // remove active from other btns
        btns.forEach((btn) => btn.classList.remove('active'));
        // add active to the clicked btn
        event.target.classList.add('active');
        // hide other contens
        articles.forEach((article) => article.classList.remove('active'))
        // show the targeted content
        document.getElementById(id).classList.add('active');
    }
});
