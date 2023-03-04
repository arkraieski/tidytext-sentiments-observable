library(tidytext)
library(jsonlite)

bing <- get_sentiments("bing")
afinn <- get_sentiments("afinn")
loughran <- get_sentiments("loughran")
nrc <- get_sentiments("nrc")

sentiments <- list(bing = bing, afinn = afinn, loughran = loughran , nrc = nrc)
sentiments_json <- toJSON(sentiments)

fileconn <- file("sentiments.json")
writeLines(text = sentiments_json, fileconn)
close(fileconn)
