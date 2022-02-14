(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{771:function(e,n,a){"use strict";a.r(n);var t=a(56),o=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),a("p",[e._v("A common task in a shell is to control the environment that external applications will use. This is often done automatically, as the environment is packaged up and given to the external application as it launches. Sometimes, though, we want to have more precise control over what environment variables an application sees.")]),e._v(" "),a("p",[e._v("You can see the current environment variables that will be sent to applications by echoing the value for "),a("code",[e._v("$nu.env")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> echo $nu.env\n──────────────────────────┬──────────────────────────────\n COLORTERM                │ truecolor \n DBUS_SESSION_BUS_ADDRESS │ unix:path=/run/user/1000/bus \n DESKTOP_SESSION          │ gnome \n DISPLAY                  │ :1 \n")])])]),a("h2",{attrs:{id:"single-use-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-use-environment-variables"}},[e._v("#")]),e._v(" Single-use environment variables")]),e._v(" "),a("p",[e._v("The environment is created from the settings in the Nu configuration and from the environment that Nu is run inside of.  You can updated the environment permanently using the techniques listed in "),a("RouterLink",{attrs:{to:"/book/configuration.html"}},[e._v("configuration")]),e._v(" chapter.")],1),e._v(" "),a("p",[e._v("You can also temporarily update an environment variable when you run a command or pipeline of commands.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> with-env [FOO BAR] { echo $nu.env.FOO }\nBAR\n")])])]),a("p",[e._v("The "),a("code",[e._v("with-env")]),e._v(' command will temporarily set the environment variable to the value given (here: the variable "FOO" is given the value "BAR").  Once this is done, the block will run with this new environment variable set.')]),e._v(" "),a("p",[e._v("A common shorthand, inspired by Bash and others, is also available. You can write the above example as:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> FOO=BAR echo $nu.env.FOO\nBAR\n")])])]),a("h2",{attrs:{id:"scoped-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoped-environment-variables"}},[e._v("#")]),e._v(" Scoped environment variables")]),e._v(" "),a("p",[e._v("You can also set environment variables that will be available in the current scope (the block you're in and any block inside of it).")]),e._v(" "),a("p",[e._v("To do so, you can use the "),a("code",[e._v("let-env")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> let-env FOO = BAR\n")])])]),a("p",[e._v("let-env is similar to the "),a("strong",[e._v("export")]),e._v(" command in bash.")]),e._v(" "),a("p",[e._v("If you have more than one environment variable you'd like to set, you can create a table of name/value pairs and load multiple variables at the same time.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> load-env [[name, value]; ["BOB", "FOO"] ["JAY", "BAR"]]\n')])])]),a("h2",{attrs:{id:"permanent-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permanent-environment-variables"}},[e._v("#")]),e._v(" Permanent environment variables")]),e._v(" "),a("p",[e._v("You can also set environment variables that are set at startup and are available for the duration of Nushell running. These can be set in the "),a("code",[e._v("env")]),e._v(" section of the "),a("RouterLink",{attrs:{to:"/book/configuration.html"}},[e._v("config")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"removing-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-environment-variables"}},[e._v("#")]),e._v(" Removing environment variables")]),e._v(" "),a("p",[e._v("You can remove an environment variable only if it was set in the current scope:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> let-env FOO = BAR\n...\n> unlet-env FOO\n")])])]),a("p",[e._v("If you want to remove an environment variable stemming from a parent scope, you can do so by shadowing its value with "),a("code",[e._v("$nothing")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> let-env FOO = BAR\n> do {\n    let-env FOO = $nothing\n    # $nu.env.FOO does not exist\n  }\n> $nu.env.FOO\nBAR\n")])])]),a("p",[e._v("The same approach works with "),a("code",[e._v("load-env")]),e._v(". If you use "),a("code",[e._v("load-env")]),e._v(", you can simultaneously set some variables to a proper string value, while setting others to "),a("code",[e._v("$nothing")]),e._v(", and thus remove them.")]),e._v(" "),a("p",[e._v("You can also use this approach in your "),a("code",[e._v("config.toml")]),e._v(" to remove an environment variable from all future Nu sessions, but this is only possible by using "),a("code",[e._v("let-env")]),e._v(" or "),a("code",[e._v("load-env")]),e._v(" as part of the "),a("code",[e._v("startup")]),e._v(" section. All values in the "),a("code",[e._v("env")]),e._v(" section are literal strings:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# in config.toml\nstartup = [\n    "let-env FOO = $nothing"\n]\n\n[env]\nBAZ="$nothing"\n')])])]),a("p",[e._v("In the above example, any Nu session would start with no defined "),a("code",[e._v("FOO")]),e._v(" environment variable, while "),a("code",[e._v("BAZ")]),e._v(" would have a string value of "),a("code",[e._v('"$nothing"')]),e._v(".")]),e._v(" "),a("p",[e._v("You can use the same approach with the long form of "),a("code",[e._v("with-env")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> with-env [FOO $nothing] { echo $nu.env.FOO }\nerror: Unknown column  # FOO is not seen in the block scope\n")])])]),a("p",[e._v("Beware that the short form does not work with this feature, it treats the value as a string:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> FOO=$nothing echo $nu.env.FOO\n$nothing\n")])])]),a("p",[e._v("Finally, be aware that environment variables set to "),a("code",[e._v("$nothing")]),e._v(" can also be fully removed with "),a("code",[e._v("unlet-env")]),e._v(" from the scope in which they are set. If a parent scope has an environment variable with the same name, this value will then be visible in the current scope.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> let-env FOO = BAR\n> do {\n    # FOO == BAR\n\n    let-env FOO = $nothing\n    # FOO does not exist\n\n    unlet-env FOO\n    # FOO == BAR (FOO from above this scope is seen again)\n\n    unlet-env FOO\n    # error: Not an environment variable\n    # the command finds FOO in the parent scope and can not remove it\n  }\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);