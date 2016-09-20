var LoginComponent = pakka({
    name: 'login-component',
    html: '<div click-handle="clicked">' +
        '<label bind-text="toptext">Usename</label>' +
        '<input type="text" change-handle="changetext" >' +
        '<label bind-text="password"></label>' +
        '<input type="password" bind-property="password" >' +
        '<span bind-text="use.name[0].first"></span>' +
        '</div>',
    css: '.login-component{ padding:10px; } .login-component label{ display: block;}',
    controller: function(that) {
        that.$set('toptext', 'bhaskara');
        that.$set('use', { name: [{ first: ' mann this is cool! ' }] });

        that.changetext = function(event) {
            that.$set('toptext', event.target.value);
        }
        that.clicked = function(event) {
            alert('clicked');
        }
        setTimeout(function() {
            that.$set('password', 'bhaskara');
        }, 3000);
    }
});

var bodyEl = document.getElementsByTagName('body')[0];
var login = new LoginComponent();
login.$setCss('.' + login.$componentId + ' {background-color: red;}');
var len = login.$elements.length;
for (var i = 0; i < len; i++) {
    bodyEl.appendChild(login.$elements[i]);
}
var login1 = new LoginComponent();
var len1 = login1.$elements.length;
for (i = 0; i < len1; i++) {
    bodyEl.appendChild(login1.$elements[i]);
}

var SomeComponent = pakka({
    name: 'some-component-name',
    elements: document.querySelectorAll('.some-component'),
    // css: '.some-component-name{ padding:20px; background-color:green; } .some-component-name label{ display: block;}',
    controller: function(that) {
        setTimeout(function() {
            that.$set('helloWorld', 'hello world');
        }, 2000);
    }
});

var sc = new SomeComponent();

setTimeout(function() {
    sc.$destroy();

}, 4000);
