const language = ['javaScript', 'python', 'c++', "c"];
// built map function by me
function mapBuilt(arr, func){
    const newArray = [];
    for(let i = 0; i<arr.length; i++){
        newArray.push(func(arr[i]));
    }
    return newArray;
}

const lang = mapBuilt(language, function(langu){
    return langu.length;
})
console.log(lang);