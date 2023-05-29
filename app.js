const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = [];
    const lowerCaseStr = str.toLowerCase();
    fruit.forEach((element) => {
        let lowerCaseElement = element.toLowerCase();
        if (lowerCaseElement.includes(lowerCaseStr)) {
            results.push(element)
        }
    })
    return results;
}

function searchHandler(e) {
    let userSearch = e.target.value;
    let searchResults = search(userSearch);
    showSuggestions(searchResults, userSearch);
}

function showSuggestions(results, inputVal) {
    if (results.length === 0) {
        suggestions.parentElement.classList.add('hidden');
    } else {
        suggestions.parentElement.classList.remove('hidden');
    } 
    suggestions.innerHTML = "";
    results.forEach((fruit) => {
        const lowerCaseFruit = fruit.toLowerCase();
        const index = lowerCaseFruit.indexOf(inputVal);
        if (index !== -1) {
            const li = document.createElement('li');
            li.innerHTML = fruit.replace(new RegExp(`(${inputVal})`, 'i'), '<strong class="match" style="color: red">$1</strong>')
            suggestions.append(li);
        }
    })
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.innerText;
        suggestions.innerHTML = "";
        suggestions.parentElement.classList.add('hidden');
    }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);