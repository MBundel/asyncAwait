const twelveDataA = {
    production: false,
    apiKey: 'dbe20b66d19244e7b4f2d0990d059782'
};

        typeOfInformation = 'time_series' ;
        symbol = 'AAPL'; // frima, hier apple
        interval = '1day'

let resultsOfClose = new Map();
myFirstApi = async () => {
    try{
        const response = await fetch(`https://api.twelvedata.com/${typeOfInformation}?symbol=${symbol}&interval=${interval}&format=JSON&apikey=${twelveDataA.apiKey}`)
        // console.log(data)
        return await response.json();
    } catch (err){
        console.log(err);
    }
}
// myFirstApi();

mySecondAPI = async (typeOfInformation, companySymbol, interval, apiKey) => {
    const url = `https://api.twelvedata.com/${typeOfInformation}`;
    const headers = {
        "Content-Type": "application/json"
    };
    const queryParams = new  URLSearchParams({
        symbol: companySymbol,
        interval: interval,
        format: "JSON",
        apikey: apiKey
    })

   return  fetch(`${url}?${queryParams}`,{
        method: 'GET',
        headers: headers
    }).then(res => res.json())
        .then(data => {
        // console.log(data)
        return data
        })
        .catch(err => {console.log(err)});

}

// console.log("____________________________________________________")
// mySecondAPI(typeOfInformation, symbol, interval, twelveDataA.apiKey);

allResults =  async (typeOfInformation, companySymbol, interval, apiKey) =>{
    const  results = await Promise.all([myFirstApi(), mySecondAPI(typeOfInformation, "IBM", interval, apiKey)]);

    for (const result of results) {
        const dataOfClose =  new Map();
        for (const entry of result.values) {
            dataOfClose.set(entry.datetime, entry.close)

        }
        resultsOfClose.set(result.meta.symbol, dataOfClose)
        // console.log(result)
        // console.log("_______________________________")

    }

}
// allResults(typeOfInformation, "IBM", interval, twelveDataA.apiKey)

getResult = async (callback) =>{
    await callback()
    console.log(resultsOfClose)

}

getResult(() => allResults(typeOfInformation, "IBM", interval, twelveDataA.apiKey));
