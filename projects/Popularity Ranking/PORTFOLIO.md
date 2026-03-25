# Urban Popularity Score

## What Problem It Solves

Relocation decisions are often made with incomplete information. People compare jobs, salaries, or rent, but they may not have a good way to compare how accessible, active, or convenient different cities and neighborhoods actually feel.

## Why This Project Matters

This project reflects the analytical foundation behind the rest of the portfolio. Before the more agentic products, it shows comfort with data extraction, feature engineering, clustering, scoring, and turning raw data into decision support.

## Product Direction

The project calculates a city popularity score based on venue accessibility and neighborhood characteristics, using New York City and Toronto as a case study.

- Venue data is collected for city neighborhoods.
- Locations are categorized into buckets such as scenic, parks, entertainment, and necessities.
- Scores are normalized using distance and access patterns.
- Clustering and mapping are used to compare urban experience.

## How The Solution Works

- Geopy is used for location data.
- Foursquare APIs provide venue information.
- pandas and numpy are used for transformation and scoring.
- KMeans clustering helps group neighborhoods by venue access patterns.
- Folium and other visual tools are used to map the results.

## Technologies Used

- Python
- pandas
- numpy
- geopy
- Foursquare API
- Folium
- matplotlib
- scikit-learn

## Key Decisions And Tradeoffs

- A scoring model makes city comparison easier, but all weighting choices introduce bias.
- Venue accessibility is a useful signal, but it is only one dimension of relocation quality.
- Clustering helps structure the data, but interpretation still requires human judgment.
- This is a strong example of making messy real-world data useful for a real decision.

## Outcomes And Learnings

- New York City scored higher than Toronto in the project's case study.
- The project demonstrates feature engineering and scoring logic rather than generic dashboarding.
- It shows how I approach ambiguous decision problems with measurable proxies and interpretable outputs.
- This work forms a useful foundation for later AI-assisted decision-support products.

## Evals

- Stability of the popularity score under different weighting assumptions
- Sensitivity to venue category choices
- Interpretability of clustering outputs
- Practical usefulness for relocation-style decisions

## Status

Completed analytical project that demonstrates applied data science, geospatial reasoning, and decision-support design.
