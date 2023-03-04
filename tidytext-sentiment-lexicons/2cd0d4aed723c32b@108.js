import define1 from "./79750b3b8e929d9d@239.js";

function _1(md){return(
md`# Tidytext Sentiment Lexicons`
)}

function _2(md){return(
md`This notebooks is inspired by the book [Text Mining in R](https://www.tidytextmining.com/tidytext.html) by Julia Silge and David Robinson. It is designed to be imported in Observable so sentiment lexicons referenced in the book can be used for text analysis and visualization in JavaScript.`
)}

function _3(md){return(
md`The 'sentiments' object has one array for each of the lexicons that can be downloaded in R with "_tidytext::getsentiments()"_`
)}

function _sentiments(FileAttachment){return(
FileAttachment("sentiments@1.json").json()
)}

function _5(md){return(
md`To use that object in your own notebooks, add a cell with the following code:
~~~ js
import { sentiments } from '@akraieski/tidytext-sentiment-lexicons'
~~~
`
)}

function _6(md){return(
md`Alternatively, you can import the 'tt' object for access to each of the lexicons as \`arquero\` tables:`
)}

function _tt(sentiments,aq)
{
  const arqueroTables = {};

for (let key in sentiments) {
  const table = aq.from(sentiments[key]);
  arqueroTables[key] = table;
}
  return arqueroTables
}


function _8(md){return(
md`In _Text Mining With R_, the general approach for sentiment analysis is to take a data.frame with 1 row per word and do an inner join with one of the sentiment lexicons, then calculate summary statistics. Naturally, a lot of this can be done with \`arquero\` in JavaScript. In the future, I may add a function in this notebook analogous to \`tidytext::unnest_tokens()\` in R.`
)}

function _9(md){return(
md`You can examine each of the included lexicons below:`
)}

function _selectedLexicon(Inputs,sentiments){return(
Inputs.select(Object.keys(sentiments), {label: "Lexicon"})
)}

function _11(__query,datatoView,invalidation){return(
__query(datatoView,{from:{table:"datatoView"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"datatoView")
)}

function _datatoView(sentiments,selectedLexicon){return(
sentiments[selectedLexicon]
)}

function _14(md){return(
md`[Github repo](https://github.com/arkraieski/tidytext-sentiments-observable) for all code/data required to build this notebook`
)}

function _15(md){return(
md`## Citations and License disclaimers`
)}

function _16(md){return(
md`Some of these datasets explicitly require a license for commercial use and/or request that you cite it if you use it:`
)}

function _17(md){return(
md`### NRC Word-Emotion Association Lexicon`
)}

function _18(md){return(
md`License: License required for commercial use. Please contact Saif M. Mohammad (saif.mohammad@nrc-cnrc.gc.ca). `
)}

function _19(md){return(
md`Citation info:

This dataset was published in Saif M. Mohammad and Peter Turney. (2013), \`\`Crowdsourcing a Word-Emotion Association Lexicon.'' Computational Intelligence, 29(3): 436-465.`
)}

function _20(md){return(
md`### Loughran-McDonald Sentiment lexicon`
)}

function _21(md){return(
md`URL: https://sraf.nd.edu/textual-analysis/resources/ `
)}

function _22(md){return(
md`License: License required for commercial use. Please contact tloughra@nd.edu. `
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["sentiments@1.json", {url: new URL("./files/244f1c12b8feaccf7bb96572d6f58b99bd6d22e9b607ca12647fc8a1c808e362815bc68960fc8c25c10fa23d8eeb1dc247d99506452665d53224c23ea8a1fd0b.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("sentiments")).define("sentiments", ["FileAttachment"], _sentiments);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("tt")).define("tt", ["sentiments","aq"], _tt);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("viewof selectedLexicon")).define("viewof selectedLexicon", ["Inputs","sentiments"], _selectedLexicon);
  main.variable(observer("selectedLexicon")).define("selectedLexicon", ["Generators", "viewof selectedLexicon"], (G, _) => G.input(_));
  main.variable(observer()).define(["__query","datatoView","invalidation"], _11);
  main.variable(observer("datatoView")).define("datatoView", ["sentiments","selectedLexicon"], _datatoView);
  const child1 = runtime.module(define1);
  main.import("aq", child1);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer()).define(["md"], _22);
  return main;
}
