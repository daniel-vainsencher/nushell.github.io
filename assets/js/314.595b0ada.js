(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{774:function(e,t,a){"use strict";a.r(t);var s=a(56),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"loading-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-data"}},[e._v("#")]),e._v(" Loading data")]),e._v(" "),a("p",[e._v("Earlier, we saw how you can use commands like "),a("code",[e._v("ls")]),e._v(", "),a("code",[e._v("ps")]),e._v(", "),a("code",[e._v("date")]),e._v(", and "),a("code",[e._v("sys")]),e._v(" to load information about your files, processes, time of date, and the system itself. Each command gives us a table of information that we can explore. There are other ways we can load in a table of data to work with.")]),e._v(" "),a("h2",{attrs:{id:"opening-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opening-files"}},[e._v("#")]),e._v(" Opening files")]),e._v(" "),a("p",[e._v("One of Nu's most powerful assets in working with data is the "),a("code",[e._v("open")]),e._v(" command. It is a multi-tool that can work with a number of different data formats. To see what this means, let's try opening a json file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open editors/vscode/package.json\n──────────────────┬───────────────────────────────────────────────────────────────────────────────\n name             │ lark \n description      │ Lark support for VS Code \n author           │ Lark developers \n license          │ MIT \n version          │ 1.0.0 \n repository       │ [row type url] \n publisher        │ vscode \n categories       │ [table 0 rows] \n keywords         │ [table 1 rows] \n engines          │ [row vscode] \n activationEvents │ [table 1 rows] \n main             │ ./out/extension \n contributes      │ [row configuration grammars languages] \n scripts          │ [row compile postinstall test vscode:prepublish watch] \n devDependencies  │ [row @types/mocha @types/node tslint typescript vscode vscode-languageclient] \n──────────────────┴───────────────────────────────────────────────────────────────────────────────\n")])])]),a("p",[e._v("In a similar way to "),a("code",[e._v("ls")]),e._v(', opening a file type that Nu understands will give us back something that is more than just text (or a stream of bytes). Here we open a "package.json" file from a JavaScript project. Nu can recognize and open the JSON text and give back a table of data.')]),e._v(" "),a("p",[e._v("If we wanted to check the version of the project we were looking at, we can use the "),a("code",[e._v("get")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open editors/vscode/package.json | get version\n1.0.0\n")])])]),a("p",[e._v("Nu currently supports the following formats for loading data directly into tables:")]),e._v(" "),a("ul",[a("li",[e._v("json")]),e._v(" "),a("li",[e._v("yaml")]),e._v(" "),a("li",[e._v("toml")]),e._v(" "),a("li",[e._v("xml")]),e._v(" "),a("li",[e._v("csv")]),e._v(" "),a("li",[e._v("ini")]),e._v(" "),a("li",[e._v("xls")]),e._v(" "),a("li",[e._v("xlsx")])]),e._v(" "),a("p",[e._v("But what happens if you load a text file that isn't one of these? Let's try it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open README.md\n")])])]),a("p",[e._v("We're shown the contents of the file. If the file is too large, we get a handy scroll-view to look at the file and then jump back to the terminal. To help with readability, Nu will also syntax-highlight common file formats like source files, markdown, and more.")]),e._v(" "),a("p",[e._v("Below the surface, what Nu sees in these text files is one large string. Next, we'll talk about how to work with these strings to get the data we need out of them.")]),e._v(" "),a("h2",{attrs:{id:"working-with-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-strings"}},[e._v("#")]),e._v(" Working with strings")]),e._v(" "),a("p",[e._v("An important part of working with data coming from outside Nu is that it's not always in a format that Nu understands. Often this data is given to us as a string.")]),e._v(" "),a("p",[e._v("Let's imagine that we're given this data file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open people.txt\nOctavia | Butler | Writer\nBob | Ross | Painter\nAntonio | Vivaldi | Composer\n")])])]),a("p",[e._v("Each bit of data we want is separated by the pipe ('|') symbol, and each person is on a separate line. Nu doesn't have a pipe-delimited file format by default, so we'll have to parse this ourselves.")]),e._v(" "),a("p",[e._v("The first thing we want to do when bringing in the file is to work with it a line at a time:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open people.txt | lines\n───┬──────────────────────────────\n 0 │ Octavia | Butler | Writer \n 1 │ Bob | Ross | Painter\n 2 │ Antonio | Vivaldi | Composer \n───┴──────────────────────────────\n")])])]),a("p",[e._v("We can see that we're working with the lines because we're back into a table. Our next step is to see if we can split up the rows into something a little more useful. For that, we'll use the "),a("code",[e._v("split")]),e._v(" command. "),a("code",[e._v("split")]),e._v(", as the name implies, gives us a way to split a delimited string. We will use "),a("code",[e._v("split")]),e._v("'s "),a("code",[e._v("column")]),e._v(" subcommand to split the contents across multiple columns. We tell it what the delimiter is, and it does the rest:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> open people.txt | lines | split column "|"\n───┬──────────┬───────────┬───────────\n # │ Column1  │ Column2   │ Column3 \n───┼──────────┼───────────┼───────────\n 0 │ Octavia  │  Butler   │  Writer \n 1 │ Bob      │  Ross     │  Painter\n 2 │ Antonio  │  Vivaldi  │  Composer \n───┴──────────┴───────────┴───────────\n')])])]),a("p",[e._v("That "),a("em",[e._v("almost")]),e._v(" looks correct. It looks like there's an extra space there. Let's "),a("code",[e._v("trim")]),e._v(" that extra space:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> open people.txt | lines | split column "|" | str trim\n───┬─────────┬─────────┬──────────\n # │ Column1 │ Column2 │ Column3 \n───┼─────────┼─────────┼──────────\n 0 │ Octavia │ Butler  │ Writer \n 1 │ Bob     │ Ross    │ Painter\n 2 │ Antonio │ Vivaldi │ Composer \n───┴─────────┴─────────┴──────────\n')])])]),a("p",[e._v("Not bad. The "),a("code",[e._v("split")]),e._v(" command gives us data we can use. It also goes ahead and gives us default column names:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> open people.txt | lines | split column "|" | str trim | get Column1\n───┬─────────\n 0 │ Octavia \n 1 │ Bob \n 2 │ Antonio \n───┴─────────\n')])])]),a("p",[e._v("We can also name our columns instead of using the default names:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> open people.txt | lines | split column "|" first_name last_name job | str trim \n───┬────────────┬───────────┬──────────\n # │ first_name │ last_name │ job \n───┼────────────┼───────────┼──────────\n 0 │ Octavia    │ Butler    │ Writer \n 1 │ Bob        │ Ross      │ Painter\n 2 │ Antonio    │ Vivaldi   │ Composer \n───┴────────────┴───────────┴──────────\n')])])]),a("p",[e._v("Now that our data is in a table, we can use all the commands we've used on tables before:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> open people.txt | lines | split column "|" first_name last_name job | str trim | sort-by first_name\n───┬────────────┬───────────┬──────────\n # │ first_name │ last_name │ job \n───┼────────────┼───────────┼──────────\n 0 │ Antonio    │ Vivaldi   │ Composer \n 1 │ Bob        │ Ross      │ Painter\n 2 │ Octavia    │ Butler    │ Writer \n───┴────────────┴───────────┴──────────\n')])])]),a("p",[e._v("There are other commands you can use to work with strings:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("str")])]),e._v(" "),a("li",[a("code",[e._v("lines")])]),e._v(" "),a("li",[a("code",[e._v("size")])])]),e._v(" "),a("p",[e._v("There is also a set of helper commands we can call if we know the data has a structure that Nu should be able to understand. For example, let's open a Rust lock file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> open Cargo.lock\n# This file is automatically @generated by Cargo.\n# It is not intended for manual editing.\n[[package]]\nname = "adhoc_derive"\nversion = "0.1.2"\n')])])]),a("p",[e._v("The \"Cargo.lock\" file is actually a .toml file, but the file extension isn't .toml. That's okay, we can use the "),a("code",[e._v("from")]),e._v(" command using the "),a("code",[e._v("toml")]),e._v(" subcommand:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> open Cargo.lock | from toml\n──────────┬───────────────────\n metadata │ [row 107 columns] \n package  │ [table 130 rows] \n──────────┴───────────────────\n")])])]),a("p",[e._v("The "),a("code",[e._v("from")]),e._v(" command can be used for each of the structured data text formats that Nu can open and understand by passing it the supported format as a subcommand.")]),e._v(" "),a("h2",{attrs:{id:"opening-in-raw-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opening-in-raw-mode"}},[e._v("#")]),e._v(" Opening in raw mode")]),e._v(" "),a("p",[e._v("While it's helpful to be able to open a file and immediately work with a table of its data, this is not always what you want to do. To get to the underlying text, the "),a("code",[e._v("open")]),e._v(" command can take an optional "),a("code",[e._v("--raw")]),e._v(" flag:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> open Cargo.toml --raw\n[package]                                                                                        name = "nu"\nversion = "0.1.3"\nauthors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]\ndescription = "A shell for the GitHub era"\nlicense = "MIT"\n')])])]),a("h2",{attrs:{id:"fetching-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetching-urls"}},[e._v("#")]),e._v(" Fetching URLs")]),e._v(" "),a("p",[e._v("In addition to loading files from your filesystem, you can also load URLs by using the "),a("code",[e._v("fetch")]),e._v(" command. This will fetch the contents of the URL from the internet and return it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> fetch https://www.jonathanturner.org/feed.xml\n─────┬───────────────────────────\n rss │ [row attributes children] \n─────┴───────────────────────────\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);