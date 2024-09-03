const baseUrl = 'https://api.quotable.io'

export default async function getRandomQuote(limiti = 1){
    const response =  await fetch ('${baseUrl}/quotes/random?limit=${limit}')

    if (!response.ok){
        throw new Error ("failed to fetch quote")
    }
    return await response

}