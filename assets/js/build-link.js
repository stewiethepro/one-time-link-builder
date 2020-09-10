
// Declare constants

const demoForm = document.getElementById("demoForm");
const dynamicOneTimeLinkModal = document.getElementById("dynamicOneTimeLinkModal");
const oneTimeLinkToCopy = document.getElementById("oneTimeLinkToCopy");


// Select form

demoForm.addEventListener("submit", function(e) {

// Prevent default behaviour

  e.preventDefault();

// Grab values, encode form fields for the URL

  oneTimeLink = demoForm.oneTimeLink.value;
  name = encodeURIComponent(demoForm.name.value);
  email = encodeURIComponent(demoForm.email.value);
  company = encodeURIComponent(demoForm.company.value);
  budget = encodeURIComponent(demoForm.budget.value);

// Log a data object to check

  data = [oneTimeLink, name, email, company, budget];
  console.log(data);

// Clear Form
  demoForm.reset();

// Create a dynamic One Time Link

  dynamicOneTimeLink = oneTimeLink + "?soskip=1&name=" + name + "&email=" + email + "&company=" + company + "&budget=" + budget
  console.log(dynamicOneTimeLink)

// Set the link and load the modal

  oneTimeLinkToCopy.innerHTML = dynamicOneTimeLink;
  oneTimeLinkToCopy.setAttribute('href',dynamicOneTimeLink);
  $('#dynamicOneTimeLinkModal').modal('show');

});


// Invoke tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Set tooltip

$('#copyButton').tooltip({
  trigger: 'click hover',
  placement: 'right',
});

function setTooltip(btn, message) {
  $(btn).tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

// Hide Tooltip

function hideTooltip(btn, message) {
  $(btn).tooltip('hide')
    .attr('data-original-title', message);
};

// Mouseleave copy button - reset tooltip

$('#copyButton').mouseleave(function(){
  hideTooltip($(this), 'Copy to clipboard')
});
