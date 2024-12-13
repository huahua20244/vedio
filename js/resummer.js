function loadProgressBars() {
  $('.progress').each(function () {
    const progress = $(this).data('progress');
    $(this).css('width', progress + '%');
  });
}

loadProgressBars();

function goBack() {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
}

const scrollButton = document.querySelector('.description-box');

scrollButton.addEventListener('click', function () {
  window.scrollTo({
    top: 300,
    behavior: 'smooth'
  });
});