const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    // let result = await axios(APIURL + username)
    // console.log(result)
    try {
        // @ts-ignore
        const {data} = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)
    } catch(err) {
        if (err.response.status === 404) {
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    // let result = await axios(APIURL + username + '/repos?sort=created')
    // console.log(result)
    try {
        // @ts-ignore
        const {data} = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data)
    } catch (error) {
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ?  `<p>${user.bio}</p>` : ''
    const cardHTML = `
        <div class='card'>
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${userID}</h2>
                <p>${userBio}</p>
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong> </li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `
    // @ts-ignore
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    // @ts-ignore
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos.slice(0,5).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        // @ts-ignore
        reposEl.appendChild(repoEl)
    })
}

form?.addEventListener('submit', (e) => {
    e.preventDefault()

    // @ts-ignore
    const user = search.value

    if (user) {
        getUser(user)

        // @ts-ignore
        search.value = ''
    }
})