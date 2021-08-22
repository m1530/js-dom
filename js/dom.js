var firstArticle = document.getElementById('first-article');
firstArticle.style.backgroundColor = 'LightGreen';
firstArticle.style.padding = '20px';


//select main section
var blogSection = document.getElementById('blog-section');
//create new article
var newArticle = document.createElement('article');

var h2 = document.createElement('h2');
h2.innerText = "Dom section - 5";
h2.classList.add('section-title')
newArticle.appendChild(h2);

var p = document.createElement('p');
p.innerText = "Nihil est quaerat, provident deserunt enim asperiores! Voluptas dolorem recusandae, similique non autem unde illum, at consequuntur magni laborum deserunt delectus accusantium tempore! Dignissimos est, temporibus eaque incidunt adipisci, nisi aut quisquam voluptates non accusantium necessitatibus cupiditate ex sapiente laborum dolor nemo iusto! Voluptatibus laudantium suscipit corporis illum aut";

newArticle.appendChild(p);

blogSection.appendChild(newArticle);
//select main section
var blogSection = document.getElementById('blog-section');
//create new article
var newArticle = document.createElement('article');

var h3 = document.createElement('h2');
h3.innerText = "Dom section - 6";
h3.classList.add('section-title')
newArticle.appendChild(h3);

var p2 = document.createElement('p');
p2.innerText = "Nihil est quaerat, provident deserunt enim asperiores! Voluptas dolorem recusandae, similique non autem unde illum, at consequuntur magni laborum deserunt delectus accusantium tempore! Dignissimos est, temporibus eaque incidunt adipisci, nisi aut quisquam voluptates non accusantium necessitatibus cupiditate ex sapiente laborum dolor nemo iusto! Voluptatibus laudantium suscipit corporis illum aut";

newArticle.appendChild(p2);

blogSection.appendChild(newArticle);

//common style for all section

var sectionTitle = document.getElementsByClassName('section-title');

for (let item of sectionTitle) {
    item.style.color = 'green';
}

var tagName = document.getElementsByTagName('p');

for (const paragraph of tagName) {
    paragraph.style.fontWeight = 'bold';
    paragraph.style.color = 'coral';
    paragraph.style.textAlign = 'justify';
}