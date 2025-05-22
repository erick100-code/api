const URL = 'http://localhost:5000/ident'

async function chamarApi() {
    const res = await fetch(URL)

    if (res.status === 200) {
        const obj = await res.json()
        console.log(obj)
    }
}

chamarApi()