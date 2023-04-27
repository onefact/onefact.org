---
name: "[homework: asking, writing, thinking, doing, \U0001F534 red-teaming \U0001F608]
  Critique what you have built; Real-World Data; Historiography of Data, Incentives,
  & AI"
about: Second-to-last homework
title: "[homework: asking, writing, thinking, doing, \U0001F534 red-teaming \U0001F608]
  Critique what you have built; Real-World Data; Historiography of Data, Incentives,
  & AI"
labels: homework
assignees: ''

---

# Reading
Pro tip: try using an app on your phone or computer to read aloud to you at 1.5x speed! This can save time and make it easier to absorb information while not being tied down to a computer or device visually.
- [ ] Review the bug report we submitted: https://github.com/duckdb/duckdb/issues/7015 and the fix to avoid the bug we ran into for analyzing Zulip data: https://github.com/onefact/datathinking.org-codespace/blob/main/notebooks/in-class-notebooks/230420-zulip-chat-duckdb-loading.ipynb
- [ ] Review several editions of Style, Clarity and Grace (https://bookshop.org/p/books/style-lessons-in-clarity-and-grace-joseph-williams/8980182 - [Libgen](libgen.rs/search.php?req=style+clarity+grace))
- [ ] [climate harms] Read https://arxiv.org/ftp/arxiv/papers/2104/2104.10350.pdf
- [ ] [global context thanks to `@indrekromet`] Read https://www.palladiummag.com/2023/02/23/the-west-lives-on-in-the-talibans-afghanistan/ 
- Preparation for guest lecture
  - [ ] Read https://arxiv.org/abs/2302.10329
  - [ ] https://www.economist.com/science-and-technology/2023/04/05/it-doesnt-take-much-to-make-machine-learning-algorithms-go-awry (https://archive.ph/5l1k3#selection-1038.0-1038.1)
- [ ] [David Foster Wallace on Consumption] https://harpers.org/wp-content/uploads/2008/09/HarpersMagazine-1996-01-0007859.pdf
- [ ] [Cross-Cultural Research and Ethnography] Read excerpt from https://www.thefieldstudyhandbook.com/ - https://drive.google.com/file/d/1F9zr1pHesGPSOTtXLQu4hTxOGu7zoIRx/view?usp=sharing
- [ ] [Status games, social engineering] Read the chapter on status games in Impro (https://bookshop.org/p/books/impro-improvisation-and-the-theatre-keith-johnstone/11721204 or [Libgen](libgen.rs/search.php?req=+impro))
- [ ] [Closure on the data journey begun in the first class on COVID] https://www.wsj.com/articles/covid-origin-china-lab-leak-807b7b0a
- [ ] [History of Computing and Data Thinking] Read the _Epilogue_ of Computer Age Statistical Inference by Hastie _et al._, https://hastie.su.domains/CASI_files/PDF/casi.pdf
- [ ] [Basics of GitHub] https://github.com/onefact/github-starter-course
- Systems Thinking and Incentives:
  - [ ] [Context on how big 4 consulting firms may/may not be replaced by AI] https://www.lrb.co.uk/the-paper/v44/n24/laleh-khalili/in-clover (https://archive.ph/yC1YQ)
  - [ ] [High finance & geopolitics] https://www.theguardian.com/world/2016/jul/28/1mdb-inside-story-worlds-biggest-financial-scandal-malaysia
  - [ ] [High finance & geopolitics] https://www.bloomberg.com/news/articles/2014-08-21/mugabes-bailout-och-ziff-investment-linked-to-zimbabwe-despot#xj4y7vzkg?leadSource=uverify%20wall
  - [ ] [Predatory Investing] https://www.newyorker.com/magazine/2018/08/27/paul-singer-doomsday-investor
  - [ ] [Global Geopolitics of AI] Chapter 1 - China's Sputnik Moment - and Chapter 4 - A Tale of Two Countries - of Kai-Fu Lee's AI Superpowers (https://bookshop.org/p/books/ai-superpowers-china-silicon-valley-and-the-new-world-order-kai-fu-lee/6960836 or [Libgen](http://libgen.rs/search.php?req=ai+superpowers))


# Doing
- [ ] Edit https://en.wikipedia.org/wiki/Data_thinking using the learner definitions of data thinking
- [ ] Try playing one round of https://lost-at-sql.therobinlord.com/
- [ ] Install https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff and read the documentation, and activate the extension for python files opened in Visual Studio Code: https://beta.ruff.rs/docs/tutorial/
- [ ] **Red-teaming Previous Homework**: 
  - [ ] [`Set timer: 10 minutes maximum`] Before asking GPT (to avoid biasing yourself!), write your own critique of your homework. Questions to consider could be: what could be improved? What doesn’t make sense in the visualization? What doesn’t make sense in the writing?
  - [ ] [`Set timer: 10 minutes maximum`] Ask GPT-4 to critique the homework or the visual using your favorite data thinking definition we have so far.
  - [ ] [`Set timer: 10 minutes maximum`] Add this critique as a comment on the homework’s github issue, and link to the critique in Zulip.
  - [ ] [`Set timer: 10 minutes maximum`] Repeat this exercise for the previous homework of one other person in the class
  
# Creating
- [ ] Generate art or diagrams or logos using https://beta.dreamstudio.ai/generate and post on Zulip chat
- [ ] Use https://poly.cam/ to scan an object or location of your choosing; share the link on Zulip (bonus: feel free to try BlenderGPT: https://github.com/gd3kr/BlenderGPT to modify the 3D scan)
- [ ] Use `duckdb` to load the Zulip data into a SQL database, and use `altair` to visualize the data, following https://github.com/onefact/datathinking.org-codespace/blob/main/notebooks/in-class-notebooks/230420-debugging-duckdb-altair-falcon-3-1-1-service-requests.ipynb (run this notebook with this data: https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9 - and try changing the data source to be the Zulip data and post a visualization of the chat data on Zulip)

# Thinking
- [ ] In a comment on this issue, propose a research question that you will aim to answer the upcoming final homework (and cross-post it on Zulip for feedback); include a rationale for why this topic matters to you, and decisions you need to make, and a clear articulation of the stakes. This can be a paragraph or several. Perhaps start with your experience report from the first homework.

# Listening
- [ ] Listen to this podcast with Emily Bender: https://open.spotify.com/episode/2ILGlkAXAt4xfuKHwIV2on

# Large Language Model Access Checklist
- [ ] Try GPT-4 at https://chat.openai.com/chat (ask on Zulip if you need access)
- [ ] Try https://serge.chat/
- [ ] Try https://bard.google.com
- [ ] Try https://console.anthropic.com/claude (ask on Zulip if you have not received an invite)
- [ ] Try https://www.phind.com/
- [ ] Try Copilot (https://github.com/features/copilot; free with GitHub Education Pack)
- [ ] Try Bing Chat (https://bing.com/chat)
- [ ] Try Huggingface Chat (hf.co/chat)
