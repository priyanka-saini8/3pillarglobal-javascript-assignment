const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    getInfomation(data);
  })
  .catch(error => console.error(error))

  const getInfomation = (array) => {
    for(object of array) {
        console.log(`Name: ${object.name}`);
        console.log(`Capital: ${object.capital}`);
        let langArray = [];
        for(langObject of object.languages) {
            langArray.push(langObject.name);
        }
        console.log(`Languages: ${langArray}`);
        console.log(`Population: ${object.population}`);
        console.log(`Area: ${object.area}`);
        console.log("");
    }
  }
//-------------------------------------------------------------------------------
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        getCatNames(data);
    })
    .catch(error => console.error(error))

const getCatNames = (data) => {
    let catNames =[] ;
    data.forEach((element) => {
        catNames.push(element.name);
    });
    console.log(catNames);
} 
//------------------------------------------------------------------------------
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        getCatMetricAvgWeight(data);
    })
    .catch(error => console.error(error))

const getCatMetricAvgWeight = (data) => {
    data.forEach((element) => {
        console.log(`${element.name} => ${element.weight.metric}`);
    });
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        getLargestCountries(data)
    })
    .catch(error => console.error(error));

const getLargestCountries = (data) =>{
    const array = creatingObj(data);
    sortArray(array);
    getTop10(array);
}

const creatingObj = (data) => {
    let newArray = [];
    data.forEach(element => {
        let obj = {};
        obj.name = element.name;
        obj.area = element.area;
        newArray.push(obj);
    });
    return newArray;
}

const sortArray = (array) =>{
    for(var i=0; i<array.length-1; i++){
        for(var j=i+1; j<array.length;j++){
        if(array[i].area < array[j].area) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }}
    }
}

const getTop10 = (array) => {
    console.log("Top 10 Largest Countries on the basis of area are as follows:");
    const top10 = array.slice(0,10);
    top10.forEach(element => {
        console.log(`${element.name} ==> ${element.area}`);
    });
}
//-------------------------------------------------------------------------------
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(countOfficialLanguages(data));
  })
  .catch(error => console.error(error))

const countOfficialLanguages = (data) => {
    let count = 0;
    let langArray = [];
    data.forEach(element => {
        element.languages.forEach(lang => {
            if((langArray.includes(lang.name)) == false)
                langArray.push(lang.name);
        });
    });
    return langArray.length;
}

