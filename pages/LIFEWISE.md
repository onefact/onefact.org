
# LIFEWISE 🏡
## ✅ Life Index for Well-being and Expense Sustainability

- Authors: Kateryna Pantiukh
- Co-author: ChatGPT 3.5

[Data]() | [Analysis](/Analysis) | [Conclusion](/)


# Project Overview

**LIFEWISE** _(Life Index for Well-being and Expense Sustainability)_ project utilizes regression analysis to identify optimal places to live, considering the balance between well-being and expenses. It offers actionable insights for individuals seeking high-quality living within their budget, while providing decision-making support for policymakers, urban planners, and real estate developers. The project aims to empower individuals and communities to make informed choices that enhance their overall quality of life and long-term sustainability. 

# Importance

🇺🇦 The topic of LIFEWISE holds deep personal significance to me, as it is rooted in my own journey of seeking a new home in Europe. Having been forced to move because of war, I found myself faced with the daunting task of deciding where to rebuild my life. With limited knowledge about European countries and their living conditions, I yearned for a data-driven approach to guide my decision-making process. It was this pivotal moment that sparked my interest in exploring the balance between quality of life and cost of living. Through the LIFEWISE project, I aim to empower individuals like myself, who seek a fresh start in unfamiliar territories, by providing actionable insights that enable informed choices.

# Input Data

The data regarding the cost of living featured in the LIFEWISE project is sourced from [NUMBEO](https://www.numbeo.com/cost-of-living/rankings_by_country.jsp). 

**Numbeo** is the world’s largest cost of living database. Numbeo is also a crowd-sourced global database of quality of life data: housing indicators, perceived crime rates, healthcare quality, transport quality, and other statistics. By utilizing Numbeo's data, LIFEWISE ensures the accuracy and relevance of the cost-related information.

The **input files** used in the LIFEWISE project are stored in the following location: input/data.xlsx. These files serve as the foundation of the analysis, containing the relevant data on cost of living, quality of life, counry and region.

**Quality of Life Index** _(higher is better)_ is an estimation of overall quality of life by using an empirical formula which takes into account purchasing power index (higher is better), pollution index (lower is better), house price to income ratio (lower is better), cost of living index (lower is better), safety index (higher is better), health care index (higher is better), traffic commute time index (lower is better) and climate index (higher is better).


$$ \text{QLI} = \max \left(0,100+ \frac{pPIR +HltI}{\text{2,5}} - hPIR + \frac{SafI + TrfI}{\text{2,0}} + \frac{PolI * 2 + ClmI}{\text{3,0}}  \right)  $$

where:
- QLI - Quality of Life Index;
- pPIR - purchasingPowerInclRentIndex;
- hPIR - housePriceToIncomeRatio;
- SafI - safetyIndex;
- HltI - healthIndex;
- TrfI - trafficTimeIndex;
- PolI - pollutionIndex;
- ClmI - climateIndex.


These indices are relative to New York City (NYC). Which means that for New York City, each index should be 100(%). If a city has a Traffic Commute Time Index of 120, it means Numbeo has estimated it is 20% more expensive than New York.

## Part 1. Analysis of the correlation between the quality of life and the cost of living

The primary objective of this research is to investigate the correlation between the cost of living and the quality of life in various countries. The research aims to address two fundamental questions: 

1) Does a positive correlation exist between the cost of living and the quality of life?
2) Are there countries that offer a higher quality of life than expected based on their cost of living? 

On first step we explore the relationship between the quality of life and the cost of living indices. To visualize this relationship, we generated a plot (Figure 1A) that clearly illustrates a positive correlation between the quality of life and the cost of living. 

![Fig1](https://github.com/Chartiza/LIFEWISE_DataThinking_final_HW/assets/15068419/d1cccc24-eaa1-4dc3-b73b-8284c653bc5e)

Furthermore, we divided the countries into quantiles based on their Cost_vs_quality_ratio (CQR) and visualized this distribution (Figure 1B). From this analysis, we specifically focused on countries in the first quantile, which we labeled as "good-high" in terms of their cost quality index. This selection allows us to identify countries that offer a higher quality of life compared to their cost of living.

$$ \text{CQR} = \frac{QLI}{LivI}  $$

where:
- CQR - Cost_vs_quality_ratio;
- QLI - Quality of Life Index;
- LivI - costOfLivingIndex;

Next we refined the selection process by filtering countries based on two key parameters. Firstly, we considered countries falling within the "good-low" or "good-high" quartile of the cost quality index. This criterion ensured that we focused on countries with favorable cost-quality ratios. Secondly, we established a minimum threshold of 160 for the Quality_of_Life_Index. By applying these filters, we were able to identify a subset of countries that meet both criteria, indicating a higher quality of life relative to their cost of living.

Based on our analysis, the top countries that emerged as having a higher quality of life relative to their cost of living include the **Netherlands, Finland, Oman, Germany, United Arab Emirates, Spain, Estonia, Slovenia, Portugal, Croatia, Lithuania, and the Czech Republic**. These countries demonstrate a favorable balance between quality of life and expenses, making them attractive options for individuals seeking an enhanced standard of living within their budget.


## Script. Part 1.
```python
# import packages
import pandas as pd
import plotly.express as px
import numpy as np
from sklearn import datasets, linear_model
import matplotlib.pyplot as plt
from scipy.stats import linregress
import scipy.stats as stats

# read data
rank = pd.read_csv('input/rank.csv', sep='\t')
reg = pd.read_csv('input/regions.csv', sep='\t')
mrg = pd.merge(rank, reg, on='Country')
# read custom correct data
mrg = pd.read_excel('results/merged_m.xlsx')

# define colors for regions
region_colors = {'Oceania': '#f4a259',
                 'Western_Asia': '#F44336',
                 'Northern_Europe': '#9ed0ab',
                 'Northern_America': '#4b6d8f',
                 'South-eastern_Asia': '#E57373',
                 'Australia': '#aa79d1',
                 'Central_America': '#6d8dc3',
                 'Southern_Asia': '#f9d6b8',
                 'Eastern_Asia': '#EF9A9A',
                 'Southern_Europe': '#bde3c5',
                 'Eastern_Europe': '#d0f0dc',
                 'South_America': '#6d8dc3',
                 'Northern_Africa': '#f9d9a0',
                 'Eastern_Africa': '#f7c36d',
                 'Western_Europe': '#7fcd91',
                 'Southern_Africa': '#e5981d',
                 'Western_Africa': '#edb880',
                 'Central_Asia': '#FFCDD2'}

# Create interactive scatterplot using Plotly Express
custom_order = ['Western_Europe', 'Northern_Europe', 'Eastern_Europe', 'Southern_Europe',
                'Western_Asia', 'Central_Asia', 'Eastern_Asia', 'Southern_Asia',
                'Northern_Africa', 'Western_Africa', 'Eastern_Africa', 'Southern_Africa',
                'South_America', 'Central_America', 'South-eastern_Asia', 'Australia',
                'Northern_America']

fig = px.scatter(mrg, x='Quality_of_Life_Index', y='Cost_of_Living_Index', color='Region',
                 color_discrete_map=region_colors, symbol='Region', hover_name='Country',
                 width=800, height=600, category_orders={'Region': ['Australia', 'Central_America', 'Northern_America', 'South_America',
                                             'Eastern_Africa', 'Northern_Africa', 'Southern_Africa', 'Western_Africa',
                                             'Eastern_Asia', 'Southern_Asia', 'South-eastern_Asia', 'Western_Asia','Central_Asia',
                                             'Eastern_Europe', 'Northern_Europe', 'Southern_Europe', 'Western_Europe']})

# Modify the legend and layout
fig.update_traces(marker=dict(size=10, line=dict(width=0.5, color='Gray')),
                  selector=dict(mode='markers'))
fig.update_layout(legend=dict(title='', orientation='v', yanchor='top', y=0.99, xanchor='left', x=1.02),
                  font=dict(family='Arial', size=14),
                  margin=dict(l=40, r=40, t=20, b=20), 
                  xaxis_title='Quality of Life Index', yaxis_title='Cost of Living Index',
                  width=900, height=600, template='plotly_white')

import plotly.io as pio
pio.write_html(fig, file='results/Cost_vs_quality.html', auto_open=True)

# Add to data information about Cost to quality ratio and quantiles
mrg['Cost_vs_quality_ratio'] = mrg['Quality_of_Life_Index']/mrg['Cost_of_Living_Index']
mrg['quantiles'] = pd.qcut(mrg['Cost_vs_quality_ratio'], q=4, labels=['bad_high','bad_low','good_low', 'good_high'])
mrg.to_excel('results/LQI_quantiles.xlsx', index=False)

# Visualize quantiles information
quantiles_colors = {'good_high': '#759116',
                 'good_low': '#056517',
                 'bad_low': '#f57a9b',
                 'bad_high': '#de1a24'}

fig = px.scatter(mrg, x='Quality_of_Life_Index', y='Cost_of_Living_Index', color='quantiles',
                 symbol='quantiles', hover_name='Country', color_discrete_map=quantiles_colors,
                 category_orders={'quantiles': ['good_high', 'good_low','bad_low','bad_high']},
                 width=800, height=600)

# Modify the legend and layout
fig.update_traces(marker=dict(size=10, line=dict(width=0.5, color='Gray')),
                  selector=dict(mode='markers'))
fig.update_layout(legend=dict(title='', orientation='v', yanchor='top', y=0.99, xanchor='left', x=1.02),
                  font=dict(family='Arial', size=14),
                  margin=dict(l=40, r=40, t=20, b=20), 
                  xaxis_title='Quality of Life Index', yaxis_title='Cost of Living Index',
                  width=900, height=600, template='plotly_white')

pio.write_html(fig, file='results/Quantiles.html', auto_open=True)

# Choose top countries with hight life quality index and good Cost to quality ratio 
mrg1 = mrg[(mrg['Quality_of_Life_Index'] >= 160) & 
           ((mrg['quantiles'] == 'good_high') | (mrg['quantiles'] == 'good_low'))]

mrg1.to_excel('results/top_counties.xlsx')
```

## Part 2. Prediction Life quality based on Life cost

In the second part of our analysis, we focused on making predictions. We built a linear regression model using the data from our merged dataset. The formula for the model is

$$ \text{y} = \text{slope} * \text{x} + \text{intercept}$$
 
where:
- y - the Quality of Life Index and 
- x - the Cost of Living Index. 
  
The model's coefficients indicate the relationship between these variables. The coefficient of determination (r-squared) for the model is 51.6%, indicating that 51.6% of the variance in the Quality of Life Index can be explained by the Cost of Living Index. The extremely low p-value (1.51e-14) suggests that the relationship between these variables is statistically significant.

As an example of our prediction capabilities, let's consider a scenario where the life cost is 2400 EUR. Using our regression model, we predicted the corresponding life quality index to be 134.1. This index indicates that the predicted standard of living aligns with the 50% best countries in our dataset.

It's important to note that this prediction is based on the relationship between the cost of living and quality of life established by our model. However, as mentioned earlier, the model has a moderate predictive power with an r-squared value of 51.6%. Therefore, while the prediction provides valuable insights, it should be interpreted with caution and considered alongside other factors when making decisions related to choosing a living destination.

The percentile bin analysis further supports our prediction, categorizing the index within the 50% best countries in terms of their standard of living. This means that the predicted life quality index of 134.1 indicates a relatively high standard of living compared to other countries.

It's important to keep in mind that these results are based on the available data and the assumptions made by our regression model. Individual preferences and specific circumstances may vary, so it's recommended to conduct further research and consider additional factors before making any final decisions regarding living choices.


## Script. Part 2.
```python
# Part 2. Predictions
# import packages
import pandas as pd
import plotly.express as px
import numpy as np
from sklearn import datasets, linear_model
import matplotlib.pyplot as plt
from scipy.stats import linregress

mrg = pd.read_excel('results/merged_m.xlsx')

# build a model
# extract the columns you need
X = mrg['Cost_of_Living_Index'].values.reshape(-1,1)
y = mrg['Quality_of_Life_Index'].values.reshape(-1,1)
# create a linear regression model
regr = linear_model.LinearRegression()
regr.fit(X, y)

# Print the formula and coefficients
from scipy import stats

X1 = mrg['Cost_of_Living_Index']
y1 = mrg['Quality_of_Life_Index']
slope, intercept, r_value, p_value, std_err = stats.linregress(X1, y1)

print('Formula is: y = ', slope.round(1), 'x + ', intercept.round(1))
print('Where y is the Quality of Life Index and x is the Cost of Living Index','\n')
print("r-squared:", (r_value**2*100).round(1))
print("p_value:", p_value)
print("p_value:", std_err)

cost = 2400
# in EUR per month
NY_cost_of_living = 4900
lcost_index = cost/NY_cost_of_living*100
lqual_index = regr.predict(lcost_index)[0][0]

print('The predicted life quality index for '
      +str(cost)+' EUR life cost is', str(lqual_index.round(1)))
bins = np.percentile(mrg['Quality_of_Life_Index'], np.arange(0, 101, 10))
new_value_bin = np.digitize(lqual_index, bins) 

d = {
  10: "top 10% best",
  9: "top 20% best",
  8: "top 30% best",
  7: "40% best",
  6: "50% best",
  5: "50% worst",
  4: "40% worst",
  3: "top 30% worst",
  2: "top 20% worst",
  1: "top 10% worst"
}

print(f'This index refers to the {d[new_value_bin]} countries in terms of standard of living','\n')
print('REMEMBER! r2=0.51 for this model. That means the model has quite low predictive power.')
```

# Conclusion

The LIFEWISE (Life Index for Well-being and Expense Sustainability) project has successfully utilized regression analysis to identify optimal places to live based on the balance between well-being and expenses. By analyzing data on quality of life and cost of living, we aimed to provide actionable insights for individuals seeking high-quality living within their budget, while also offering decision-making support for policymakers, urban planners, and real estate developers.

Through our analysis, we discovered a positive correlation between life cost and life quality, indicating that countries with higher costs tend to offer better quality of life. However, our project went beyond this correlation by identifying countries that exceeded expectations in terms of their life quality based on their cost. By filtering countries based on the quantiles of the cost quality index and setting a threshold of 160 for the Quality_of_Life_Index, we identified several top countries, including the Netherlands, Finland, Oman, Germany, United Arab Emirates, Spain, Estonia, Slovenia, Portugal, Croatia, Lithuania, and the Czech Republic.

Furthermore, we developed a predictive model to estimate the life quality index based on the cost of living. Our model, although with a moderate predictive power of 51.6% (r-squared), provided insights into the expected standard of living for a given life cost. For instance, in our example prediction, a life cost of 2400 EUR corresponded to a predicted life quality index of 134.1, indicating a relatively high standard of living comparable to the 50% best countries in our dataset.

It is crucial to acknowledge the limitations of our project, such as the simplifications made in the regression model and the subjective nature of quality of life assessments. Therefore, the results should be considered as one aspect among many when making decisions regarding living choices. It is recommended to conduct further research, consider individual preferences and circumstances, and consult additional factors before making any final decisions.

Overall, the LIFEWISE project aims to empower individuals and communities to make informed choices that enhance their overall quality of life and long-term sustainability. By combining data thinking principles with real-life decision-making scenarios, we have provided a valuable tool for individuals seeking a balance between well-being and expenses, while also contributing insights to policymakers and urban planners for creating livable and sustainable environments.

---

Thanks for reading. Stay tuned for more data-driven stories!

[Edit this page](https://github.com/onefact/blog.datathinking.org/edit/main/pages/understanding-3-1-1-service-requests.md)
