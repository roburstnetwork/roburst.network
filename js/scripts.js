/*v0.29.6 at 2017-05-18 © 2017 GetSiteControl*/ ! function(e, t) {
  var s = e.document,
    a = t.widgets;
  if (e._gscq = e._gscq || [], 1 === e._gscq.loaded) return void(e.gscwidgets && e.gscwidgets.runtime && (e.gscwidgets.runtime.destroy(), e.gscwidgets.start(t)));
  if (e._gscq.loaded = 1, !s.all || s.querySelector)
    for (var d = 0; d < a.length; d++)
      if (a[d] && !a[d].disabled) {
        e.gscwidgets ? e.gscwidgets.start(t) : ! function() {
          var a, d, g;
          d = s.createElement("script"), a = !1, g = s.getElementsByTagName("script")[0], d.type = "text/javascript", d.async = !0, d.src = t.settings.RUNTIME_URL, d.onload = d.onreadystatechange = function() {
            var s = this.readyState;
            a || s && "complete" !== s && "loaded" !== s || (a = !0, e.gscwidgets.start(t))
          }, g && g.parentNode ? g.parentNode.insertBefore(d, g) : (g = s.body || s.getElementsByTagName("body")[0] || s.getElementsByTagName("head")[0], g.appendChild(d))
        }();
        break
      }
}(window, {
  "widgets": [{
    "sort_order": -1,
    "layout": "bottomBar",
    "data": {
      "mobileLabel": "Advantages of Plant over others",
      "description": "Add a description of your offer, ad or promotion, explain its features, benefits and advantages.",
      "title": "How Plant is different from other version control tools?",
      "url": "https://blog.prototypr.io/8-reasons-why-designers-use-plant-for-version-control-795c72a61c27",
      "buttonText": "Learn Now",
      "newWindow": true,
      "note": "",
      "label": "Check this out!"
    },
    "id": 248467,
    "style": {
      "minimizeColor": "#5e5e5e",
      "barLogoColor": "#75797b",
      "animationDurationOut": "500ms",
      "barButtonHoverColor": "#208dfe",
      "separatorColor": "#616669",
      "animationOrigin": "center center",
      "buttonHoverTextColor": "#ffffff",
      "labelTextColor": "#ffffff",
      "accentTextColor": "#ffffff",
      "animationIn": "slideIn",
      "labelHoverColor": "#4e5356",
      "buttonTextColor": "#ffffff",
      "animationRepeat": 1,
      "buttonHoverColor": "#208dfe",
      "backColor": "#3a4043",
      "barButtonHoverTextColor": "#ffffff",
      "font": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
      "animationBackface": "initial",
      "secondaryAccentTextColor": "#ffffff",
      "headerTextColor": "#ffffff",
      "labelHoverTextColor": "#ffffff",
      "inputTextColor": "#333333",
      "validationErrorTextColor": "#ffffff",
      "animationDurationIn": "800ms",
      "accentColor": "#0780fe",
      "labelColor": "#3a4043",
      "theme": false,
      "animation": "slideIn",
      "inputBackColor": "#ffffff",
      "animationDelay": "0ms",
      "animationOut": "fadeOut",
      "textColor": "#ffffff",
      "closeHoverColor": "#ffffff",
      "minimizeHoverColor": "#444444",
      "inactiveInputTextColor": "#ffffff",
      "baseColor": "#3a4043",
      "buttonColor": "#0780fe",
      "barBackColor": "#3a4043",
      "secondaryTextColor": "#ffffff",
      "validationErrorBackColor": "#f16645",
      "inputPlaceholderColor": "#cacaca",
      "logoColor": "#75797b",
      "animationDirectionOut": "normal",
      "barButtonColor": "#0780fe",
      "animationDirectionIn": "normal",
      "barTextColor": "#ffffff",
      "inputBorderColor": "#3a4043",
      "barLogoHoverColor": "#898c8e",
      "panelColor": "#616669",
      "panelHoverColor": "#4e5356",
      "noteTextColor": "#ffffff",
      "inactiveInputBackColor": "#75797b",
      "logoHoverColor": "#898c8e",
      "secondaryAccentColor": "#707173",
      "closeColor": "#ffffff",
      "inactiveInputBorderColor": "#3a4043",
      "barButtonTextColor": "#ffffff",
      "secondaryColor": "#323437"
    },
    "tracking": {},
    "targeting": {
      "url": [{
        "include": true,
        "value": "/*"
      }],
      "ab": 100
    },
    "name": "Promo widget",
    "settings": {
      "pushBody": true,
      "scrollWithBody": true,
      "mobileAlign": "right",
      "storage": {
        "action": 30,
        "close": 1
      },
      "mobileBottom": false
    },
    "template": "normal",
    "type": "promo",
    "display": {
      "start": {
        "immediate": true
      },
      "stop": {},
      "schedule": {
        "weekdays": [0, 1, 2, 3, 4, 5, 6]
      }
    }
  }, {
    "disabled": true,
    "id": 237512
  }],
  "runtime": {
    "status": "offline",
    "shareByEmailUrl": "https://app.getsitecontrol.com/api/v1/share-by-email?u={url}&t={title}&d={description}&logo={logo}",
    "trackUrl": "https://app.getsitecontrol.com/api/v1/stat",
    "logoUrl": "https://getsitecontrol.com/{type}-widget/?utm_content={type}&utm_source={site}&utm_medium=referral&utm_term={layout}&utm_campaign=Widgets Logo",
    "responsive": {
      "enabled": true,
      "breakpoint": 640
    },
    "sessionLength": 20,
    "removeLogo": false,
    "fbAppId": "1700939563493347",
    "chatUrl": "https://app.getsitecontrol.com/api/v1/chat/init?widget={id}&uid={uid}",
    "removeLogoNotCool": false,
    "fbRedirectUri": "https://getsitecontrol.com/close",
    "targetingUrl": "https://app.getsitecontrol.com/api/v1/targeting",
    "doTrack": true,
    "chatPageUrl": "https://app.getsitecontrol.com/api/v1/embedded-chat?widget={id}&gscuid={uid}",
    "submitUrl": "https://app.getsitecontrol.com/api/v1/submit"
  },
  "settings": {
    "RUNTIME_URL": "//st.getsitecontrol.com/main/runtime/runtime.2.8.5.js"
  }
});
