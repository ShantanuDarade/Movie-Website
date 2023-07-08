const POPULAR ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=acdddbb8585017b2c96fac2d36993020&page=1"
const IMGPATH = "https://image.tmdb.org/t/p/w1280"
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=acdddbb8585017b2c96fac2d36993020&query="
const TOPRATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=acdddbb8585017b2c96fac2d36993020"
const UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=acdddbb8585017b2c96fac2d36993020"
const popular = document.querySelector("#popular")
const topRated = document.querySelector("#top-rated")
const upComing = document.querySelector("#upcoming")

const getPopularMovies = async (POPULAR) => {
    const res = await fetch(POPULAR)
    const data = await res.json()
    popularMovies(data)
}

const toprated = async () => {
    const res = await fetch(TOPRATED)
    const data = await res.json()
    topRatedMovies(data)
}

const upcoming = async () => {
    const res = await fetch(UPCOMING)
    const data = await res.json()
    upcomingMovies(data)
}


const popularMovies = (data) => {
    popular.innerHTML=""
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
            
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            popular.appendChild(box)
        }
    )
}

const topRatedMovies = (data) => {
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            topRated.appendChild(box)
        }
    )
}

const upcomingMovies = (data) => {
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            upComing.appendChild(box)
        }
    )
}

getPopularMovies(POPULAR);
toprated()
upcoming()

document.querySelector("#input").addEventListener(
    "keyup",
    function (e) {
        if (e.target.value != "") {
            getPopularMovies(SEARCHAPI + e.target.value)
        } else {
            getPopularMovies(POPULAR);
        }
    }
    )
