$('#uc-calculate-button').click(function() {
  var val = $('#uc-user-input').val();
  var type = $("#uc-user-select").val();

  var html = '';
  html += '<div class="response">';
  html += '<ul>';
  html += getUnits(val, type);
  html += '</ul>';
  html += '</div>';

  $('#uc-response-area').html(html);
});

function getUnits(val, type) {
  if (type === 'ft') {
    return fromFeet(val);
  }
  if (type == 'm') {
    return fromMeter(val);
  }
  if (type == 'in') {
    return fromInch(val);
  }
  if (type == 'cm') {
    return fromCentimeter(val);
  }
  if (type == 'yd') {
    return fromYard(val);
  }
  if (type == 'km') {
    return fromKilometer(val);
  }
  if (type == 'mi') {
    return fromMile(val);
  }
}

function fromFeet(val) {
  var html = '<li><span class="uc-strong">Meters: </span> ' + (val / 3.2808).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Inches: </span> ' + (val * 12).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Centimeters: </span>' + (val / 0.032808).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Yards: </span>' + (val * 0.33333).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Kilometers: </span>' + (val / 3280.8).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Miles: </span>' + (val * 0.00018939).toFixed(5) + '</li>';
  return html;
}

function fromMeter(val) {
  var html = '<li><span class="uc-strong">Feet: </span>' + (val * 3.2808).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Inches: </span>' + (val * 39.370).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Centimeters: </span>' + (val / 0.1).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Yards: </span>' + (val * 1.0936).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Kilometers: </span>' + (val / 1000).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Miles: </span>' + (val / 0.00062137).toFixed(5) + '</li>';
  return html;
}

function fromInch(val) {
  var html = '<li><span class="uc-strong">Feet: </span>' + (val * 0.083333).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Meters: </span>' + (val / 39.370).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Centimeters: </span>' + (val / 0.39370).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Yards: </span>' + (val * 0.027778).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Kilometers: </span>' + (val / 39370).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Miles: </span>' + (val / 0.000015783).toFixed(5) + '</li>';
  return html;
}

function fromCentimeter(val) {
  var html = '<li><span class="uc-strong">Feet: </span>' + (val * 0.032808).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Meters: </span>' + (val / 100).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Inches: </span>' + (val * 0.39370).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Yards: </span>' + (val * 0.010936).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Kilometers: </span>' + (val / 100000).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Miles: </span>' + (val * 0.0000062137).toFixed(5) + '</li>';
  return html;
}

function fromYard(val) {
  var html = '<li><span class="uc-strong">Feet: </span>' + (val * 3).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Meters: </span>' + (val / 1.0936).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Inches: </span>' + (val * 36).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Centimeters: </span>' + (val / 0.010936).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Kilometers: </span>' + (val / 1093.6).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Miles: </span>' + (val * 0.00056818).toFixed(5) + '</li>';
  return html;
}

function fromKilometer(val) {
  var html = '<li><span class="uc-strong">Feet: </span>' + (val * 3280.8).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Meters: </span>' + (val * 1000).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Inches: </span>' + (val * 39370).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Centimeters: </span>' + (val * 100000).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Yards: </span>' + (val * 1093.6).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Miles: </span>' + (val * 0.62137).toFixed(5) + '</li>';
  return html;
}

function fromMile(val) {
  var html = '<li><span class="uc-strong">Feet: </span>' + (val * 5280).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Meters: </span>' + (val / 0.00062137).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Inches: </span>' + (val * 63360).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Centimeters: </span>' + (val / 0.0000062137).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Yards: </span>' + (val * 1760).toFixed(5) + '</li>';
  html += '<li><span class="uc-strong">Kilometers: </span>' + (val / 0.62137).toFixed(5) + '</li>';
  return html;
}
$('#rgb-to-hex-button').click(function() {
  var r = $('#rgb-r').val();
  var g = $('#rgb-g').val();
  var b = $('#rgb-b').val();

  var hex = '#' + rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
  $('#rgb-number-result').val(hex);
});

function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

$('#hex-to-rgb-button').click(function(){
  var hex = $('#hex-number').val();
  hex = hexToRgb(hex);

  $('#hex-number-result').val('(' + hex.r + ', ' + hex.g + ', ' + hex.b + ')');
});
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
