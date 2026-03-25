# Image Classification and Grading

## What Problem It Solves

Image classification projects often fail not because the idea is weak, but because data collection, labeling, model training, and iteration are expensive and slow. This project explores whether multimodal LLMs can reduce that overhead for practical business problems.

## Why This Project Matters

This work shows that I can compare classical machine learning and newer multimodal AI approaches in a grounded, outcome-oriented way. It is not just about model novelty. It is about choosing the right tool for the business problem.

## Product Direction

The project compares two solution paths for image classification and grading:

- a traditional CNN-based approach using a more classical deep learning workflow
- a serverless multimodal LLM workflow using Google Gemini on AWS

The intent is to show when LLM-powered approaches can dramatically reduce effort while still producing useful performance.

## How The Solution Works

- A Hugging Face dataset is used for training and validation.
- The CNN path uses a conventional training and deployment approach.
- The multimodal LLM path uses prompt-driven classification and grading through Google Gemini.
- AWS Lambda is used for serverless execution.
- SageMaker and S3 support the model-training path and data storage.

## AI And Solution Architecture

- Classical AI path: dataset preparation, CNN training, evaluation, deployment.
- Multimodal path: image input plus prompt-based classification and grading through Gemini.
- Serverless inference path: Lambda wrappers and lightweight orchestration around the LLM API.
- Comparative evaluation path: accuracy and grading outputs are compared across approaches.

## Technologies Used

- Python
- TensorFlow or CNN-oriented notebook workflow
- Google Gemini
- AWS Lambda
- AWS SageMaker
- AWS S3
- Jupyter notebooks

## Key Decisions And Tradeoffs

- CNN path offers more traditional control, but depends heavily on labeled data and training effort.
- Multimodal LLM path is much faster to stand up, but performance depends heavily on prompt quality.
- Serverless AI lowers operational overhead, but shifts part of the challenge to prompt design and response consistency.
- This project prioritizes business usefulness and time-to-signal over academic purity.

## Outcomes And Learnings

- The CNN result was weak on the available image set, which reinforces how sensitive classical vision projects are to data quality and dataset size.
- The Gemini-based wrapper produced dramatically stronger classification accuracy in this experiment.
- Multimodal LLMs can be a serious alternative when the business needs fast iteration and acceptable accuracy without a long model-training cycle.
- This project demonstrates practical evaluation and technology selection, not just experimentation.

## Evals

- Compare classification accuracy between the CNN and Gemini approaches
- Compare grading quality, not just label prediction
- Track operating cost and iteration speed
- Evaluate how prompt changes affect outcome stability
- Identify which problem types still justify a fully trained custom model

## Status

Completed comparative project with strong evidence that multimodal LLMs can materially shorten the path from business problem to usable solution.
