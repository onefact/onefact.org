---
name: "[Blog post, interactive visualization, data model & documentation] Final homework"
about: blog.datathinking.org post, `parquet` file analysis from data.datathinking.org
  bucket with altair (vega), duckdb, embeddings.
title: "[Blog post] ~insert your title of choice here for the story you want to tell
  with the visualization you make for the blog post / result of answering research
  question (or not answering it!)~"
labels: homework
assignees: ''

---

# Doing
- [ ] Create a pull request at https://github.com/onefact/blog.datathinking.org (see an example blog post here: https://github.com/onefact/blog.datathinking.org/blob/main/pages/understanding-3-1-1-service-requests.md):
  - [ ] ✍️ Write a draft of the blog post starting with your 🧘 experience report for the first class (or elements of it)
  - [ ] 💽 + 🤔 Describe the research question from the previous homework that you have edited with feedback from the class. Describe the rationale: what is known about this question, what is unknown, what decisions need to be made and by whom. 
  - [ ] 🧐💰 Describe the stakes of the research question -- who has skin in the game? Who bears material consequences if decisions are made one way or another? What systems are involved or have power?
  - [ ] 💽 + 🤔 Describe the context of the data (what was included or excluded and why, or what is unknown about the provenance or governance of the data or models or systems involved), and create a diagram in Figma to document this (export diagram in svg format). Or, use https://reactflow.dev/ or https://mermaid.live to make the diagram and embed it in your blog post for the data journey from measurement, collection, experience, standardization, etc (categories up to you!).
  - [ ] 📐💄 Write the mathematics for the model (and visualization) you choose to use: write the mathematics in LaTeX or https://typst.app/ as we have been doing in class.
  - [ ] 💽 + 🤔 Assess the analysis you have done: did you answer the research question you sought to answer? Could someone, just from reading your blog post, reproduce -- and, better yet -- replicate your work to understand what you did and why you did it? If you have not answered the research question to your satisfaction, what would you or someone else need to do to answer it more completely?
  - [ ] 💽 + 🤔 Reflect on the 🧘 social, emotional, technical, legal (?) journeys that were par for the course of this data thinking endeavor.
  - [ ] 📈 Include the interactive Altair visualization following the principles from the Visualization guest lecture in the blog post. Please refer to the resources Ismael sent us over email on best practices such as the visual grammar and using the story you want to tell as the title of visualizations, and the subtitle to convey the details!
  - [ ] 💽 Include the metadata for the dataset you analyzed to answer, in accord with the principles from Pascal Heus' guest lecture -- see the notes here from Pascal: https://www.datathinking.org/university-of-tartu#%F0%9F%8E%AD-march-23,-2023-
  - [ ] 📓 Include code snippets in `python`, `SQL` (`duckdb`), `dbt` necessary to download the data, standardize it, analyze it, visualize it, especially any parts that were difficult or led you down a rabbithole
  - [ ] 💬 Include all the ways in which you used (or decided not to use) a large language model to help you complete these steps, and add a https://gist.github.com/ public gist link documenting the prompts and responses you used along the way. If you decide to use a large language model such as Claude, GPT-4, etc to help you edit, please list it as an editor.
  - [ ] 💻 Include a link to the repository needed to replicate this blog post and visualization using the code snippets.
  - [ ] 🤔🧘🙏 Include any feedback about the learning journey you have experienced, especially through implicit or indirect instruction, or through other means than through the resources, skills, and mental models you have learned during explicit instruction. If you received help from a friend or stranger or lucky coincidence, document it here for the benefit of future learners!
  - [ ] 💽 In your pull request, make sure to add your blog post shortlink to the side navigation: https://github.com/onefact/blog.datathinking.org/blob/main/components/Shell/SideNav.js
  - [ ] 💄 Include any images or visuals that are copyright-free, creative commons, or midjourney-generated that you think help tell the story you want to tell!
  - [ ] 🔗 Congratulations! You can now share your blog post with the world after it has been merged :) and your completion of the course will mean a certificate issued to your email, and you can add this to your LinkedIn profile or anywhere else you feel data thinking credit could help!
