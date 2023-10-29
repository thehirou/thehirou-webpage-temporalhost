//HEADER
const headerPromise = await fetch("/thehirou-webpage-temporalhost/projects/webcomic/header.json")
const header = await headerPromise.json()
const headerChange = document.querySelector(".header-box")

const twitterHeader = header[0];
const accessTwitterHeader = twitterHeader;
headerChange.querySelector(".twitter-header").textContent=accessTwitterHeader.name;
headerChange.querySelector(".twitter-header").href=accessTwitterHeader.destination;
headerChange.querySelector(".twitter-slash").textContent=accessTwitterHeader.slash;

const webHeader = header[1];
const accessWebHeader = webHeader;
headerChange.querySelector(".webpage-header").textContent=accessWebHeader.name;
headerChange.querySelector(".webpage-header").href=accessWebHeader.destination;
headerChange.querySelector(".webpage-slash").textContent=accessWebHeader.slash;

const kofiHeader = header[2];
const accessKofiHeader = kofiHeader;
headerChange.querySelector(".kofi-header").textContent=accessKofiHeader.name;
headerChange.querySelector(".kofi-header").href=accessKofiHeader.destination;
headerChange.querySelector(".kofi-slash").textContent=accessKofiHeader.slash;

/*
IF I WANT TO ADD MORE THINGS TO THE HEADER JUST CHANGE THIS SCRIPT ACCORDINGLY
const testHeader = header[3];
const accessTestHeader = testHeader;
headerChange.querySelector(".new-header-01").textContent=accessTestHeader.name;
headerChange.querySelector(".new-header-01").href=accessTestHeader.destination;
headerChange.querySelector(".new-header-01-slash").textContent=accessTestHeader.slash;
*/


//DATA
const dataPromise = await fetch("data.json")
const data = await dataPromise.json()



//NEWS
const newsPromise = await fetch("data.json")
const news = await newsPromise.json()
const blatherNews = document.querySelector(".blather-news")

console.log(news);

const blatherBoxContent = news[0];
const accessBlatherBoxContent = blatherBoxContent;
blatherNews.querySelector(".text-news-h1").textContent=accessBlatherBoxContent.date;
blatherNews.querySelector(".text-news-h2").textContent=accessBlatherBoxContent.message;



