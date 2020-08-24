const options = {
   bottom: '64px', // default: '32px'
   right: '32px', // default: '32px'
   time: '0s', // default: '0.3s'
   mixColor: '#eeeeee', // default: '#fff'
   backgroundColor: '#eeeeee',  // default: '#fff'
   buttonColorDark: '#100f2c',  // default: '#100f2c'
   buttonColorLight: '#eeeeee', // default: '#fff'
   saveInCookies: true, // default: true,
   label: '🌓', // default: ''
   autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

// Process translation
$(function() {
   $('.translate').click(function() {
       var lang = $(this).attr('id');

       $('.lang').each(function(index, item) {
       $(this).text(arrLang[lang][$(this).attr('key')]);
       });
   });
});
