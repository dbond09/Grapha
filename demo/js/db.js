var a1_0x5c0e=['message','signInWithEmailAndPassword','createUserWithEmailAndPassword','setPersistence','email','E-mail','<i\x20class=\x27arrow\x20left\x27></i>Log\x20in','LOCAL','scrollable','querySelector','learnt','div','mergeSaveData','text','button','attr','selectAll','merged','signOut','classed','clear','setTimeout','collection','.menu-overlay:not(#overlay)','saveData','then','login-button','Password','select','Persistence','type','menu-overlay','doc','set','password','alert','body','Log\x20in','auth','input','remove','currentUser','#email','touchend','stringify','catch','firestore','register-button','Auth','Sign\x20up','placeholder','append','html','value','exists'];(function(_0x4c9a34,_0x5c0ec1){var _0x944f17=function(_0x3f8c48){while(--_0x3f8c48){_0x4c9a34['push'](_0x4c9a34['shift']());}};_0x944f17(++_0x5c0ec1);}(a1_0x5c0e,0x1a6));var a1_0x944f=function(_0x4c9a34,_0x5c0ec1){_0x4c9a34=_0x4c9a34-0x0;var _0x944f17=a1_0x5c0e[_0x4c9a34];return _0x944f17;};function login(_0x11bfbb,_0x53e235){firebase[a1_0x944f('0x1')]()[a1_0x944f('0x15')](firebase['auth']['Auth'][a1_0x944f('0x2f')][a1_0x944f('0x19')]);firebase[a1_0x944f('0x1')]()[a1_0x944f('0x13')](_0x11bfbb,_0x53e235)[a1_0x944f('0x2b')](_0x505304=>{d3[a1_0x944f('0x22')](a1_0x944f('0x29'))['remove']();getUserSaveData();window[a1_0x944f('0x27')](()=>{showMenu();},0x7d0);})[a1_0x944f('0x8')](_0x52795e=>{window[a1_0x944f('0x35')](_0x52795e[a1_0x944f('0x12')]);});}function register(_0x3039fe,_0x467b19){firebase['auth']()[a1_0x944f('0x15')](firebase[a1_0x944f('0x1')][a1_0x944f('0xb')]['Persistence'][a1_0x944f('0x19')]);firebase[a1_0x944f('0x1')]()[a1_0x944f('0x14')](_0x3039fe,_0x467b19)[a1_0x944f('0x2b')](_0x2b6d35=>{d3[a1_0x944f('0x22')](a1_0x944f('0x29'))[a1_0x944f('0x3')]();})[a1_0x944f('0x8')](_0x587e2f=>{window[a1_0x944f('0x35')](_0x587e2f[a1_0x944f('0x12')]);});}function logout(){firebase[a1_0x944f('0x1')]()[a1_0x944f('0x24')]();localStorage[a1_0x944f('0x26')](a1_0x944f('0x1c'));graphaApp=new Grapha();}function saveUserData(_0xbfd065){if(!firebase[a1_0x944f('0x1')]()['currentUser']||!graphaApp[a1_0x944f('0x23')]){return;}var _0x700016=firebase['auth']()['getUid']();var _0x529bea=firebase[a1_0x944f('0x9')]();_0x529bea[a1_0x944f('0x28')]('saveData')[a1_0x944f('0x32')](_0x700016)[a1_0x944f('0x33')]({'learnt':JSON[a1_0x944f('0x7')](_0xbfd065)});}function getUserSaveData(){if(!isLoggedIn()){return;}var _0x43fd47=firebase[a1_0x944f('0x1')]()['getUid']();var _0x37e70d=firebase[a1_0x944f('0x9')]();_0x37e70d[a1_0x944f('0x28')](a1_0x944f('0x2a'))[a1_0x944f('0x32')](_0x43fd47)['get']()[a1_0x944f('0x2b')](_0x4db345=>{if(_0x4db345[a1_0x944f('0x11')]){graphaApp[a1_0x944f('0x1e')](_0x4db345['data']()['learnt']);}else{graphaApp['merged']=!![];}});}function showLogin(){d3[a1_0x944f('0x22')](a1_0x944f('0x29'))[a1_0x944f('0x3')]();var _0x59b75b=d3[a1_0x944f('0x2e')](a1_0x944f('0x36'))[a1_0x944f('0xe')]('div')[a1_0x944f('0x25')](a1_0x944f('0x31'),!![]);_0x59b75b['append']('h1')[a1_0x944f('0x25')]('header-title',!![])['html'](a1_0x944f('0x18'))['on'](a1_0x944f('0x6'),()=>{d3[a1_0x944f('0x2e')](a1_0x944f('0x29'))[a1_0x944f('0x3')]();});_0x59b75b=_0x59b75b['append'](a1_0x944f('0x1d'))[a1_0x944f('0x25')](a1_0x944f('0x1a'),!![]);_0x59b75b[a1_0x944f('0xe')](a1_0x944f('0x2'))[a1_0x944f('0x21')](a1_0x944f('0x30'),a1_0x944f('0x16'))[a1_0x944f('0x21')]('id',a1_0x944f('0x16'))[a1_0x944f('0x21')](a1_0x944f('0xd'),a1_0x944f('0x17'));_0x59b75b[a1_0x944f('0xe')]('input')[a1_0x944f('0x21')]('type',a1_0x944f('0x34'))[a1_0x944f('0x21')]('id',a1_0x944f('0x34'))[a1_0x944f('0x21')](a1_0x944f('0xd'),a1_0x944f('0x2d'));_0x59b75b[a1_0x944f('0xe')](a1_0x944f('0x20'))[a1_0x944f('0x25')](a1_0x944f('0x2c'),!![])['text'](a1_0x944f('0x0'))['on'](CLICKTYPE,()=>{var _0x463388=document[a1_0x944f('0x1b')]('#email')['value'];var _0x12920e=document[a1_0x944f('0x1b')]('#password')[a1_0x944f('0x10')];login(_0x463388,_0x12920e);});_0x59b75b[a1_0x944f('0xe')]('button')['classed'](a1_0x944f('0xa'),!![])[a1_0x944f('0x1f')]('Sign\x20up')['on'](CLICKTYPE,()=>{showSignup();});handleBackButton=function(){d3[a1_0x944f('0x2e')](a1_0x944f('0x29'))[a1_0x944f('0x3')]();handleBackButton=function(){};};}function showSignup(){d3[a1_0x944f('0x22')]('.menu-overlay:not(#overlay)')[a1_0x944f('0x3')]();var _0x7789b4=d3[a1_0x944f('0x2e')]('body')[a1_0x944f('0xe')](a1_0x944f('0x1d'))[a1_0x944f('0x25')](a1_0x944f('0x31'),!![]);_0x7789b4['append']('h1')['classed']('header-title',!![])[a1_0x944f('0xf')]('<i\x20class=\x27arrow\x20left\x27></i>Sign\x20up')['on'](a1_0x944f('0x6'),()=>{d3[a1_0x944f('0x2e')](a1_0x944f('0x29'))[a1_0x944f('0x3')]();});_0x7789b4=_0x7789b4[a1_0x944f('0xe')](a1_0x944f('0x1d'))[a1_0x944f('0x25')](a1_0x944f('0x1a'),!![]);_0x7789b4[a1_0x944f('0xe')]('input')[a1_0x944f('0x21')]('type','email')['attr']('id',a1_0x944f('0x16'))[a1_0x944f('0x21')](a1_0x944f('0xd'),a1_0x944f('0x17'));_0x7789b4[a1_0x944f('0xe')](a1_0x944f('0x2'))[a1_0x944f('0x21')](a1_0x944f('0x30'),a1_0x944f('0x34'))['attr']('id',a1_0x944f('0x34'))[a1_0x944f('0x21')]('placeholder',a1_0x944f('0x2d'));_0x7789b4['append']('button')[a1_0x944f('0x25')](a1_0x944f('0x2c'),!![])[a1_0x944f('0x1f')](a1_0x944f('0xc'))['on'](CLICKTYPE,()=>{var _0x30ed77=document['querySelector'](a1_0x944f('0x5'))[a1_0x944f('0x10')];var _0x466bf1=document[a1_0x944f('0x1b')]('#password')['value'];register(_0x30ed77,_0x466bf1);});handleBackButton=function(){d3[a1_0x944f('0x2e')](a1_0x944f('0x29'))['remove']();handleBackButton=function(){};};}function isLoggedIn(){try{if(firebase[a1_0x944f('0x1')]()[a1_0x944f('0x4')]){return!![];}else{return![];}}catch{return![];}}