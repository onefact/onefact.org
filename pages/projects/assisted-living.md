---
title: Building the first public dataset of group homes in the US
description: We built and published the largest dataset of assisted living facilities in the United States.
---

This research project started as a result of spending hundreds of hours on the phone trying to find a home for someone suffering from severe schizophrenia and no income or insurance, and realizing how difficult it was to get a simple list of where Medicaid would pay for their housing. 

This fact -- that we couldn't access a comprehensive list of group homes or assisted living facilities for someone in need -- made us realize that we shouldn't gaslight ourselves. 

We had failed over and over again to find reliable housing for this person through byzantine government services designed to help people in need: this problem was therefore bigger than the hundreds of hours we'd spent on the phone for a single person. 

This meant we could start collecting such a dataset to help others in need find housing, and help policymakers access this valuable data and start increasing access and analyzing health disparity. Further, new machine learning and data science methods could then be applied to build better policy.

This website contains the first public dataset of assisted living facilities in the United States, covering over 44,000 facilities from all 50 states and the District of Columbia. 

**What is an assisted living facility?**

An assisted living facility is sometimes known as a group home. It is a place where someone can live, have access to social supports such as transportation, and receive assistance with activities of daily living. For example, an individual with serious mental
illness who lives in a group home may need staff assistance with taking medications, while an elderly person living in an assisted living facility may require help with activities of daily living, such as getting dressed or eating. 

**Why does this matter?**

In the United States, some states allow people who are disabled or have serious mental illness like schizophrenia to receive money for housing via the Medicaid program. However, to find a group home is extremely difficult and can require many phone calls to social workers, hospitals, and various other services. The fact is, until we created this dataset, there was no way someone with mental illness (or their family or care team) could access a list of addresses where they could live with government support. If we care about a social safety net, having data on what this looks like matters.  

[Here](https://github.com/onefact/assisted-living/blob/main/assisted-living-facilities.csv) is the dataset (13MB) as a CSV. [Here](https://github.com/onefact/assisted-living) is the github repo, which contains all scripts used to process, clean, and analyze the data, as well as all raw data gathered from state licensing agencies.

The data was collected over the course of summer 2021. The dataset---along with a conceptual replication of previous work and a geospatial analysis of assisted living accessibility---was accepted at NeurIPS 2021 as part of the [Machine Learning in Public](https://sites.google.com/nyu.edu/mlph2021/home) (MLPH) workshop.

:page_facing_up: [Here](/papers/stengel_2021_assisted-living.pdf) is the preprint paper.

Here is a brief presentation on the dataset that was given at the NeurIPS 2021 Machine Learning for Public Health workshop:

{{< rawhtml >}}
<center><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bm5Tpl15mn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
{{< /rawhtml >}}

Below you can see the full dataset embedded as an Excel. If you first click on the dataset, you can then `command + f` to search for anything. The dataset may take a couple seconds to load. We're currently working on making this embedding less bad, adding better search functionality, and more.

{{< rawhtml >}}
  <iframe src="https://onedrive.live.com/embed?cid=4CCCD4F04CDF0446&resid=4CCCD4F04CDF0446%21106&authkey=AAx98JTEhBMy04M&em=2" width="1500" height="450" frameborder="0" scrolling="no"></iframe>
  <br/><br/>
{{< /rawhtml >}}



If you have any questions, feel free to reach out to [Anton Stengel](https://www.linkedin.com/in/anton-stengel-339179147/) at:

*astengel* at *princeton* dot *edu*.

### Background about dataset

Since assisted living facilities are not federally regulated, there is no standardized definition of what constitutes a facility. We followed the NCAL's [2019 Assisted Living
State Regulatory Review](https://www.ahcancal.org/Assisted-Living/Policy/Documents/2019_reg_review.pdf) to define which licensing types count for each state. 

We collected data by 

1. retrieving CSVs and PDFs from state websites
1. scraping data from state websites 
1. directly contacting state licensing agencies
1. submitting Freedom of Information Act requests


Additionally, we augmented the dataset with relevent county-level metrics that were retrieved from the Census. Here are the variables for each facility instance. The **Percent Filled** column specifies what percent of facilities in the dataset contain the relevant variable.

| Variable                                  | Description                                                  | Percent Filled |
|-------------------------------------------|--------------------------------------------------------------|----------------|
| Facility Name                             | The name of the facility                                     | 100%           |
| Facility ID                               | The facility identification number                           | 65%            |
| License Number                            | The facility license number                                  | 48%            |
| Address                                   | The primary physical address of the facility                 | 100%           |
| City                                      | The city of the address                                      | 98%            |
| State                                     | The state of the address                                     | 100%           |
| Zip Code                                  | The zip code of the address                                  | 97%            |
| County                                    | The county of the address                                    | 100%           |
| County FIPS                               | The FIPS code of the county                                  | 100%           |
| Latitude                                  | Latitude of the address                                      | 100%           |
| Longitude                                 | Longitude of the address                                     | 100%           |
| Facility Type Primary                     | The primary licensing type of the facility                   | 100%           |
| Facility Type Secondary                   | The secondary licensing type of the facility                 | 41%            |
| Capacity                                  | The total capacity of the facility in beds                   | 86%            |
| Ownership Type                            | The ownership structure of the facility                      | 27%            |
| Licensee                                  | The license holder of the facility                           | 48%            |
| Phone Number                              | Primary phone number associated with facility                | 98%            |
| Email Address                             | Primary email address associated with facility               | 35%            |
| Date Accessed                             | Date that the data was retrieved from state licensing agency | 100%           |
| Total County AL Need                      | The computed need-based metric for county of facility        | 100%           |
| County Percent of Population 65 or Older  | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Median Age                         | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Homeownership Rate                 | Retrieved from 2015-2019 ACS data                            | 100%           |
| County College Education or Higher Rate   | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Percent Black Population           | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Median Home Value of Owned Homes   | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Percent Hispanic Population        | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Percent of Population 85 or Older  | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Medan Household Income             | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Unemployment Rate                  | Retrieved from 2020 ACS data                                 | 100%           |
| County Less Than High School Diploma Rate | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Percent Whilte Population          | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Gender Ratio                       | Retrieved from 2015-2019 ACS data                            | 100%           |
| County Poverty Rate                       | Retrieved from 2015-2019 ACS data                            | 100%           |





