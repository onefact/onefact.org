--- 
title: Understanding the Story Behind 3-1-1 Service Requests
authors: Jaan Altosaar, PhD
editor: GPT-4
---

# {% $markdoc.frontmatter.title %}

Authors: {% $markdoc.frontmatter.authors %}
Editor: {% $markdoc.frontmatter.editor %}

[Edit this page](https://github.com/onefact/blog.datathinking.org/edit/main/pages/understanding-3-1-1-service-requests.md)

New York City's 3-1-1 service acts as a vital lifeline for residents to report non-emergency issues, from noise complaints to potholes. But did you know that the data from these calls tells a fascinating story about the city?

## The Data and What It Represents

Each service request contains a wealth of information. When a call is made, the data is recorded and categorized by various parameters such as:

- The date the request was created and closed
- The agency responsible
- The type of complaint
- The location of the incident

And much more. All these details provide a comprehensive snapshot of the incident, allowing us to understand the types of issues city dwellers face and how effectively they are resolved.

## The Story Unfolds: Identifying Common Complaints

By examining the 'Complaint Type' field in our data, we can start to see trends emerge. Perhaps we find that noise complaints spike during the summer months, or that a specific borough has a high incidence of pothole reports. This analysis can provide insights that help shape city policy and resource allocation.

## Response Time: A Measure of Efficiency

The 'Created Date' and 'Closed Date' fields can tell us a lot about how responsive the city is to these service requests. By calculating the difference between these dates, we can measure the efficiency of each agency and even identify patterns that might be affecting performance.

## Location, Location, Location

With 'Incident Zip' and 'Borough' fields, we can plot service requests geographically. This visualization can highlight areas with high service demand or places where certain types of complaints are more prevalent. This information is invaluable for city planners and policymakers.

## Wrapping Up

The data from 3-1-1 service requests tells a story that goes beyond mere numbers. It's a narrative about the city's responsiveness, its challenges, and its ongoing journey to improve the lives of its residents. As we continue to analyze this data, we can help create a more responsive and efficient city.

---

Thanks for reading. Stay tuned for more data-driven stories!



> GPT-4 prompt to generate this page (execpt for this sentence and the below prompt):

```
please give me the raw markdown for an example blog post about data from 3-1-1 service requests with a clear storyline following these principles 

 	column_name 	column_type 	null 	key 	default 	extra
0 	Unique Key 	BIGINT 	YES 	None 	None 	None
1 	Created Date 	VARCHAR 	YES 	None 	None 	None
2 	Closed Date 	VARCHAR 	YES 	None 	None 	None
3 	Agency 	VARCHAR 	YES 	None 	None 	None
4 	Agency Name 	VARCHAR 	YES 	None 	None 	None
5 	Complaint Type 	VARCHAR 	YES 	None 	None 	None
6 	Descriptor 	VARCHAR 	YES 	None 	None 	None
7 	Location Type 	VARCHAR 	YES 	None 	None 	None
8 	Incident Zip 	VARCHAR 	YES 	None 	None 	None
9 	Incident Address 	VARCHAR 	YES 	None 	None 	None
10 	Street Name 	VARCHAR 	YES 	None 	None 	None
11 	Cross Street 1 	VARCHAR 	YES 	None 	None 	None
12 	Cross Street 2 	VARCHAR 	YES 	None 	None 	None
13 	Intersection Street 1 	VARCHAR 	YES 	None 	None 	None
14 	Intersection Street 2 	VARCHAR 	YES 	None 	None 	None
15 	Address Type 	VARCHAR 	YES 	None 	None 	None
16 	City 	VARCHAR 	YES 	None 	None 	None
17 	Landmark 	VARCHAR 	YES 	None 	None 	None
18 	Facility Type 	VARCHAR 	YES 	None 	None 	None
19 	Status 	VARCHAR 	YES 	None 	None 	None
20 	Due Date 	VARCHAR 	YES 	None 	None 	None
21 	Resolution Description 	VARCHAR 	YES 	None 	None 	None
22 	Resolution Action Updated Date 	VARCHAR 	YES 	None 	None 	None
23 	Community Board 	VARCHAR 	YES 	None 	None 	None
24 	BBL 	VARCHAR 	YES 	None 	None 	None
25 	Borough 	VARCHAR 	YES 	None 	None 	None
26 	X Coordinate (State Plane) 	VARCHAR 	YES 	None 	None 	None
27 	Y Coordinate (State Plane) 	VARCHAR 	YES 	None 	None 	None
28 	Open Data Channel Type 	VARCHAR 	YES 	None 	None 	None
29 	Park Facility Name 	VARCHAR 	YES 	None 	None 	None
30 	Park Borough 	VARCHAR 	YES 	None 	None 	None
31 	Vehicle Type 	VARCHAR 	YES 	None 	None 	None
32 	Taxi Company Borough 	VARCHAR 	YES 	None 	None 	None
33 	Taxi Pick Up Location 	VARCHAR 	YES 	None 	None 	None
34 	Bridge Highway Name 	VARCHAR 	YES 	None 	None 	None
35 	Bridge Highway Direction 	VARCHAR 	YES 	None 	None 	None
36 	Road Ramp 	VARCHAR 	YES 	None 	None 	None
37 	Bridge Highway Segment 	VARCHAR 	YES 	None 	None 	None
38 	Latitude 	DOUBLE 	YES 	None 	None 	None
39 	Longitude 	DOUBLE 	YES 	None 	None 	None
40 	Location 	VARCHAR 	YES 	None 	None 	None


https://styleguide.mailchimp.com/writing-principles/
```

