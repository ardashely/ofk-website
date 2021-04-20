!(function() {
  let e = !1;
  function n() {
    if (!e) {
      const n = document.createElement("meta");
      (n.name = "dapp-detected"), document.head.appendChild(n), (e = !0);
    }
  }
  if (window.hasOwnProperty("ethereum")) {
    if (
      ((window.__disableDappDetectionInsertion = !0),
      void 0 === window.ethereum)
    )
      return;
    n();
  } else {
    var t = window.ethereum;
    Object.defineProperty(window, "ethereum", {
      configurable: !0,
      enumerable: !1,
      set: function(e) {
        window.__disableDappDetectionInsertion || n(), (t = e);
      },
      get: function() {
        if (!window.__disableDappDetectionInsertion) {
          const e = arguments.callee;
          (e &&
            e.caller &&
            e.caller.toString &&
            -1 !== e.caller.toString().indexOf("getOwnPropertyNames")) ||
            n();
        }
        return t;
      }
    });
  }
})();

 $(window).load(function(){
       $(document).ready(function() {
        var interval = setInterval(function() {
        var momentNow = moment();
            $('#dd').html(momentNow.format('DD.MM.YYYY'));
            $('#ss').html(momentNow.format('hh:mm:ss'));
            $('#global').html(momentNow.format('MMMM Do YYYY • h:mm:ss a'));
            }, 100);
        });    
      });