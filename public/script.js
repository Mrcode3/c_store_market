// const icons = document.querySelectorAll('.section-1-icons i')
// let i = 1;
//
// setInterval(() => {
//   i++
//
//   const icon = document.querySelector('.section-1-icons .change')
//   icon.classList.remove('change')
//
//   if (i > icons.length) {
//     icons[0].classList.add('change')
//     i = 1
//   } else {
//     icon.nextElementSibling.classList.add('change')
//   }
//
// }, 1000)
//         Javasript version above
//--------------------------------------

// Handle menu effect
$('.menu').click(function() {
  $('.target').each(function() {
    $(this).toggleClass('change')
  })
})

// Handle icons switching
const iconsHome = $('.section-1-icons i')
const iconsAbout = $('.section-5-icons i')
let i = 1;
let j = 1;

setInterval(() => {
  i++
  j++

  const iconSection1 = $('.section-1-icons .change')
  const iconSection5 = $('.section-5-icons .change')
  iconsHome.removeClass('change')
  iconsAbout.removeClass('change')

  if (i > iconsHome.length) {
    iconsHome.first().addClass('change')
    i = 1
  } else {
    iconSection1.next().addClass('change')
  }
  if (j > iconsAbout.length) {
    iconsAbout.first().addClass('change')
    j = 1
  } else {
    iconSection5.next().addClass('change')
  }

}, 4000)

// Handle panel switching
$('.panel').each(function() {
  $(this).click(function() {
    removeActive()
    $(this).addClass('active')
  })
})

function removeActive() {
  $('.panel').each(function() {
    $(this).removeClass('active')
  })
}