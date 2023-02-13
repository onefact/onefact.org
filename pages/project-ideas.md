---
title: Join us!
description: We are hiring for internships and part-time opportunities.
---

{% section .value-props %}

# Ideas List

This is a sampling of the ideas available for open source contributors - feel free to propose your own! 

The goal is to start from a basic fact about the world, and use data analysis, infrastructure, and open source software to make that fact accessible to the public, researchers, and policymakers, to help them create systematic change and improve health and education through better policy and decision-making.


A sampling of our mentors' past open source work:
* Contributions to first version of TensorFlow Probability, such as a numerically stable Bernoulli log-likelihood that has been widely used (https://www.tensorflow.org/probability/; LDAP: @jaana; [3.6k stars](https://github.com/tensorflow/probability))
* Canonical open source variational autoencoder implementation ([1000+ stars](https://github.com/altosaar/variational-autoencoder/))
* Open source bioinformatics and data science for public health: [first public dataset](https://github.com/onefact/assisted-living) of 44k assisted living facilities in the US - published at the peer-reviewed NeurIPS [Machine Learning for Public Health](https://sites.google.com/nyu.edu/mlph2021) conference in December 2021 and selected for oral presentation
* We worked with [The Browser](https://thebrowser.com) to build the first open source machine learning powered newsfeed framework, and published the source code on [GitHub](https://github.com/the-browser/recommending-interesting-writing) and the [whitepaper](http://ceur-ws.org/Vol-2682/short2.pdf) describing the architecture at an Association for Computing Machinery workshop on recommender systems 
* The first open source language model validated against clinician judgment: https://arxiv.org/abs/1904.05342 ([200+ stars and 400+ citations](https://github.com/kexinhuang12345/clinicalBERT))
* The first public database of 5000 hospitals and their prices: https://www.dolthub.com/repositories/onefact/paylesshealth/ (got to #1 on Hacker News! https://news.ycombinator.com/item?id=33882506)
* [Parrot Report](http://parrot.report), an open-access tool to study disinformation and coordinated activity promoting news from unreliable outlets on social media, built with The Sunday Times (UK) for the JournalismAI Festival, 2022. We provide a [detailed problem description and data dictionary](https://docs.google.com/document/d/1FSVBhtfw9p8ChREA0ANN4gSav6GntZvgwnyynv2zcfQ/edit?usp=sharing) to access the data and expand the system we have built, that has been used in a recent hackathon with the team that worked on it winning the 2nd place!

## Public Map and Geospatial Analysis of Hospital Prices in the US

### Detailed Description

We have built the first public database of hospital prices in the US (https://www.dolthub.com/repositories/onefact/paylesshealth/) and have built demos of maps for people to search through.

### Expected Outcomes

A map extending the prototype we built that enables users to query the data and search through it.

### Skills Required / Preferred

* MapBox
* Kepler.gl
* JavaScript

### Possible Mentors

* Dr. Jaan Altosaar (Chief Executive Officer, One Fact Foundation)
* Tim Harris (Chief Design Officer, One Fact Foundation)

### Expected Size of Project

* 350 hours

### Difficulty Rating

* Medium (prototype exists)

## Public Map and Geospatial Analysis of Assisted Living Facilities

### Detailed Description

Our intern Anton Stengel (Princeton '23) developed several open source tools for helping bioinformatics, epidemiology, and public health policy research. First, we built and open-sourced the only dataset of assisted living facilities in the United States. These group homes are where the elderly, poor, or people with disabilities or mental illness can live and receive support for food and shelter through Medicaid. We work with policymakers, professors, and their research teams to build open source software to make this data accessible to the public and for research.

The next step of this project requires extending the visualization library that Anton built (at https://github.com/onefact/assisted-living/). The deliverable is one step toward giving access to this data to the millions of Americans eligible for governmental housing support through Medicaid.

By building software to overlay various measures onto the map of assisted living facilities, such as the [area disadvantage index](https://www.neighborhoodatlas.medicine.wisc.edu/), our open source software will help people and policymakers access this data, understand patterns in it (such as which states or counties or cities have less density of group homes), and help people navigate the broken US health care system using open source technology. The open source analysis can then be readily extended by others working on this data. 

### Expected Outcomes

* This open source web development work will be the only place where millions of Americans can access the dataset of 45k group homes that we have assembled and find a place to live that the government will pay for. It will lay the foundation for the public, policymakers, and machine learning researchers to build off of to better inform policy, understand health disparity, and help people navigate which housing is available for their elderly relatives, loved ones, or people in their lives with mental illness who need stable housing.

* In addition to the open source library, all contributors will be given co-author credit on the results that will be published at a peer-reviewed public health/machine learning/HCI conference (we have submitted peer-reviewed papers with 10 out of 10 of the past interns doing open source development).

### Skills Required / Preferred

* MapBox, OpenStreetMap, Google Maps APIs (we have platform credits on Google Maps) 
* We are building off of this open source library for mapping health facilities: https://github.com/healthsites/healthsites/

### Possible Mentors

* Dr. Jaan Altosaar (Chief Executive Officer, One Fact Foundation)
* Kakuyon Mataeh (Chief Cartographer, One Fact Foundation)
* Collaborators at nonprofits helping us gather more data. 

### Expected Size of Project
* 350 hours

### Difficulty Rating

* Medium (we have prototyped the initial version based on this [library](https://github.com/healthsites/healthsites/), what remains is to convert our [dataset](onefact.org/assisted-living) to interoperate with this)

## Public Map of Nuclear Test Sites

We are modeling this open source development work after https://projects.propublica.org/toxmap/ - we are working with partner institutions that have collected data on every nuclear testing and fallout site in the United States. The nuclear testing has had severe repercussions on tens of thousands' of families, through cancers and other health conditions. Building an interactive map with open source technologies such as leaflet.js will help anyone affected connect to other surviors and understand what factors may have influenced their health. For a description of some of the political issues surrounding this, see [this article](https://harpers.org/archive/2022/01/spent-fuel-the-risky-resurgence-of-nuclear-power/).

### Expected Outcomes

* An interactive map such as https://projects.propublica.org/toxmap/ that is open source and navigable for the lay public, policymakers, data scientists, journalists, and other stakeholders 

### Skills Required / Preferred 

* Experience with open source map libraries such as Leaflet, OpenStreetMap
* Experience with Django

### Possible Mentors

* Dr. Jaan Altosaar (Chief Executive Officer, One Fact Foundation)
* Kakuyon Mataeh (Chief Cartographer, One Fact Foundation)
* Collaborators at nonprofits helping us gather more data. 

### Expected Size of Project

* 350 hours

### Difficulty Rating

* Medium (there are several open source libraries we have used to prototype, such as [this one](https://github.com/healthsites/healthsites/), so the tricky bits are getting the data on the nuclear testing and fallout sites in the right format to interoperate with these technologies)


Reach out to hello@onefact.org to sign up :)


{% section %}
