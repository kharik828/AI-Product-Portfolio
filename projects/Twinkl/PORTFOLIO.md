# Twinkl

## What Problem It Solves

Most alarms optimize for time, not for biology. Waking someone during the wrong sleep phase often causes sleep inertia, leaving them groggy and mentally slow for the first part of the day.

## Why This Project Matters

Twinkl shows product thinking in a constrained, high-stakes environment: limited APIs, time-sensitive workflows, wearable integrations, and the need for safe fallbacks. Even at the PRD and architecture stage, it demonstrates serious systems thinking.

## Product Direction

Twinkl is a sleep and wake optimization concept that uses wearable health data to trigger alarms during a more favorable wake window.

- The user connects a health tracker such as Fitbit.
- The system collects heart-rate-based sleep signals during the wake window.
- A classification engine estimates likely sleep stage and wake suitability.
- The product triggers the alarm during a better moment when possible, with a hard fallback at the latest wake time.

## How The Solution Would Work

- User authentication and profile management anchor the experience.
- Fitbit and Apple Health integrations provide biometric data.
- A backend polling and classification pipeline monitors the active alarm window.
- Push notifications and device alarms handle wake delivery.
- A post-wake review layer explains why the user was woken and can later support coaching.
- A future Python-based agentic AI chat layer can interpret sleep history, answer follow-up questions, and provide context-aware coaching.

## AI And Decision Architecture

- Real-time classifier: estimates sleep stage using heart rate and HRV rather than raw accelerometer data.
- Wake trigger engine: decides when to fire the alarm within the allowed window.
- Fallback system: guarantees the user is still woken by the latest time even if classification is uncertain.
- Sleep coach layer: future conversational system that interprets trends and explains outcomes.
- Product reasoning layer: uses explicit constraints and measurable acceptance criteria, not vague AI claims.

## Technologies Used

- React and TypeScript direction
- Python for future agentic AI chat
- Supabase-style backend architecture
- Fitbit API
- Apple Health integration path
- Push notification infrastructure
- AI-assisted conversational sleep coach concept

## Key Decisions And Tradeoffs

- Fitbit API constraints forced the design away from accelerometer-based assumptions and toward heart-rate-derived proxies.
- Reliability is more important than novelty because missed alarms are unacceptable.
- Real-time biometric optimization is valuable, but only when backed by a strong fallback strategy.
- This is a domain where product design, API constraints, and operations matter as much as model quality.

## Outcomes And Learnings

- Strong upfront product thinking can save multiple rounds of implementation churn.
- API capability audits are part of serious AI product development.
- Some of the best product work is not just shipping code quickly. It is identifying the right architecture before building the wrong one.
- This project adds health-tech and real-time decisioning depth to the portfolio.

## Evals

- Agreement between classifier output and post-sleep stage labels
- Wake trigger latency
- Alarm success rate
- API rate-limit compliance
- User-reported grogginess improvement

## Status

Detailed PRD and solution architecture defined. This project is valuable in the portfolio because it demonstrates disciplined product and systems thinking before implementation.
