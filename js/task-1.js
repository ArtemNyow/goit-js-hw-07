const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Numbers of  categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li');
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements.length}`);
    
})
