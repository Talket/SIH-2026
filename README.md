# AI-Powered Criminal Network Analysis System

A Smart India Hackathon project prototype exploring how publicly available case documents can be transformed into structured, reviewable information and connected into an evidence-aware network for investigative analysis.

> **Scope:** Research and prototype software. This repository is not an operational law-enforcement product. Model-generated links are candidate leads for human review, not verified facts.

## Problem

Information relevant to a case can be distributed across long, heterogeneous documents. Manually locating, normalizing, cross-referencing and reviewing that information is time-consuming. This project explores an assisted workflow that extracts candidate entities, retains human verification, and makes potential relationships inspectable.

## Workflow

1. **Document ingestion** — register documents and organize the processing workflow.
2. **Edge OCR/HTR** — use a Raspberry Pi-oriented service for text extraction and page-level visual analysis.
3. **Human verification** — review extracted text and evidence before it is accepted as structured input.
4. **Structured extraction** — use an LLM stage to convert reviewed source material into constrained structured data.
5. **Persistence** — store cases, entities, evidence references and relationships in the application backend.
6. **Reasoning and prediction** — run a second analysis stage over stored information to propose candidate links for review.
7. **Network exploration** — inspect entities and relationships in a graph-oriented interface.
8. **Feedback** — record review outcomes to support correction and iteration.

## Repository layout

| Path | Responsibility |
|---|---|
| `web/` | Main application, API, backend services and deployment configuration |
| `web/src/components/` | Ingestion, verification, extraction, reasoning, graph and feedback interfaces |
| `web/server/` | Application orchestration, persistence, OCR adapters and LLM services |
| `web/backend/` | Python backend service |
| `Data/` | Supporting document corpus and model/data experiments |
| `Data/JSONL - Fine Tuning/` | Fine-tuning notebook, notes and JSONL material |

## Technology areas

- React and TypeScript for the application interface.
- Node.js services and Python backend components.
- LLM-assisted extraction and analysis.
- Document OCR/HTR and visual page processing.
- Data persistence and graph-based relationship exploration.
- Docker-based local orchestration and Vercel deployment configuration.

Implementation-specific dependencies are listed in `web/package.json` and `web/backend/requirements.txt`. Deployment notes are in `web/DEPLOYMENT_VERCEL.md`.

## Run locally

Start with the application-specific instructions in `web/README.md` and `web/DEPLOYMENT_VERCEL.md`.

1. Install Node.js and the Python version required by the backend.
2. Install frontend dependencies from the `web/` directory with `npm install`.
3. Configure environment variables using `web/.env.example` as a reference.
4. Install Python dependencies from `web/backend/requirements.txt`.
5. Start the frontend and backend using the commands documented in the deployment guide.

Never commit real API credentials. Use local environment files and the hosting provider's secret store.

## Data provenance and responsible use

The project team identifies the document collection as material obtained from publicly available government websites. Preserve the issuing authority, source URL and retrieval date for each item wherever available, along with any applicable reuse terms.

Public availability does not make extracted allegations independently verified. Do not treat model output as evidence, infer guilt from graph proximity, or use the prototype to make decisions about individuals without qualified human review and appropriate legal safeguards.

## Status and limitations

This is a development workspace. Components, integrations and model outputs may be experimental or incomplete. Deployment files in the repository do not by themselves prove that every service is currently live or production-ready.

AI-generated relationships must remain traceable to supporting source material and subject to human review.