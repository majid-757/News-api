class News {
    constructor() {
        this.APIkey = '396fda7fa24f44919e5703af163b043c' 
    }


    // send url to api 
    queryAPI(newsName, country, category) {
        // build url
        let url = 'https://newsapi.org/v2/'

        // check the country and category value
        if (country === '' && category === '') {
            url += 'everything?'
        } else {
            url += 'top-headlines?'
        }

        // if newsname exist
        if (newsName !== '') {
            url += `q=${newsName}&`
        }
        
        // if country exist
        if (country !== '') {
            url += `country=${country}&`
        }

        // if category exist
        if (category !== '') {
            url += `category=${category}&`
        }

        // complete url with key
        url += `apiKey=${this.APIkey}`

        console.log(url)
    }

}










