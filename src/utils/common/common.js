import anime from 'animejs'


// function to filter the number of text to render
export function filterDesc (txt, width) {
  let t;
  if(width < 368){
    t = sortText(txt, 18)
  } else if (width < 468) {
    t = sortText(txt, 24)
  } else if (width < 568) {
    t = sortText(txt, 30)
  } else if (width < 668) {
    t = sortText(txt, 35)
  } else if (width < 768) {
    t = sortText(txt, 40)
  } else if (width < 868) {
    t = sortText(txt, 45)
  } else if (width < 968) {
    t = sortText(txt, 50)
  } else {
    t = txt
  }
  return t
}

// sort text according to its number of words
function sortText(txt, num){
  let t;
  const length = txt.split(' ').length
  if(length > num) {
    t = txt.split(" ").splice(0, num).join(' ')
    return t + ' . . .'
  } else {
    t = txt
  }
  return t
}

// function to filter the length of the title
export function filterTitle(text, width) {
  let t;
  if (width < 468) {
    t = sortString(text, 13)
  } else if (width < 1168) {
    t = sortString(text, 16)
  } else if(width < 1368) {
    t = sortString(text, 18)
  } else if (width >= 1368){
    t = sortString(text, 21)
  }
  return t
}

// function to filter the year string
function sortString (text, num){
  if(text.length > num) {
    return text.slice(0, num) + '...'
  } else {
    return text
  }
}

export function filterYear(year) {
  return year.slice(0,4)
}

// function to filter to data result to 
// 10 arrays
export function filterData (data){
  let d = data.filter((data, i)=>{
    return i < 10
  }) 
  return d
}


export function addComma (num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


export function scrollTop() {
  const html = document.querySelector('html')
  const body = document.querySelector('body')
  const moveTo = window.innerHeight
  anime({
    targets: [html, body],
    scrollTop: 0,
    duration: 300,
    easing: 'easeInSine'
  })
}

// check if the poster has a value 
export function findPoster(data) {
  let poster
  if (isTrue(data.poster_path)) {
    if (isTrue(data.profile_path)) {
      poster = null
    } else {
      poster = data.profile_path
    }
  } else {
    poster = data.poster_path
  }
  return poster
}

function isTrue(poster) {
  if (poster === null || poster === undefined) {
    return true
  }
}