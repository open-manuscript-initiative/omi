---
title: OMI Agents AI Provider Setup
sidebar_label: OMI Agents AI Provider Setup
---

# OMI Agents AI Provider Setup

OMI Agents can use an external AI provider for language editing, metadata assistance, summarization, and citation checking. The Studio stores provider API secrets encrypted on the Studio API server and does not return the secret to the client after it has been saved.

The current Studio UI provides presets for:

- OpenAI
- Mistral AI
- Groq
- OpenRouter
- custom OpenAI-compatible HTTPS endpoints

OpenAI uses its native **Responses API**. The other built-in providers and custom OpenAI-compatible providers use a **Chat Completions** style API.

## OpenAI setup

### 1. Create an OpenAI API key

Open the OpenAI Platform API key settings and create a dedicated project secret key for OMI Agents. A descriptive name such as `OMI-Agent` is recommended.

ChatGPT subscriptions and OpenAI API billing are separate. A ChatGPT Plus subscription does not by itself provide API credit, so API billing must be configured separately for the OpenAI Platform account or project that owns the key.

For a dedicated OMI key, use **Restricted** permissions instead of granting access to all API capabilities.

### 2. Restrict the key to the Responses API

For the current OpenAI integration, the minimum required model capability is:

- **Responses (`/v1/responses`) → Request**

The following permissions are not required by OMI Agents when OpenAI is selected and may remain set to **None**:

- Chat Completions
- Text-to-speech
- Realtime
- Embeddings
- Images
- Moderations
- Assistants
- Threads
- Evals
- Fine-tuning
- Files
- Videos
- Vector Stores
- Prompts
- Batch
- Tunnels
- Datasets

`List models` is also optional because Studio sends the configured model name directly rather than querying the model catalogue.

After changing a restricted key's permissions, OpenAI may need a few minutes before the new scope becomes effective. During that propagation period Studio can temporarily return an HTTP 401 response containing:

```text
Missing scopes: api.responses.write
```

If the key was configured correctly, wait a few minutes and run the connection test again before replacing the key.

### 3. Configure the provider in Studio

In Studio open:

**Manuscript menu → Integrations → OMI Agents → AI provider**

Then:

1. Select **OpenAI** as the provider.
2. Studio automatically sets the endpoint to `https://api.openai.com/v1/responses`.
3. Enter the model name to use for OMI Agents.
4. Paste the OpenAI API key into the **API key** field.
5. Select **Save and test AI provider**.

The secret is sent to the Studio API and stored encrypted. After it has been saved, the UI only reports that a secret exists; it does not retrieve or display the stored key. A new key only needs to be entered when replacing the existing secret.

### 4. Verify the connection

A successful live test changes the AI provider status to **Ready**. OMI Agents then re-check their own status automatically.

If the provider is configured but not ready, Studio displays the safe error message returned by the provider. Typical examples include insufficient API-key permissions, an unavailable model, billing or quota restrictions, or an invalid provider configuration.

Once the provider status is ready, save and test the OMI Agents configuration itself. The OMI Agents status should then become **Ready**.

## Other provider presets

For Mistral AI, Groq, and OpenRouter, Studio automatically fills the provider's built-in Chat Completions endpoint. The user normally needs to provide only a model name and API key.

Custom providers can be used when they expose a credential-free HTTPS endpoint compatible with the OpenAI Chat Completions request and response structure. Studio does not allow provider URLs containing embedded credentials or local/private-network targets for agent execution.

## Security model

OMI Agents are designed around least privilege and reviewable suggestions:

- provider API secrets are encrypted at rest on the Studio API server;
- secrets are not returned to the browser or native client after storage;
- external providers receive only the content and scope needed for the requested operation;
- confidential review content requires explicit permission before it can be sent to an external service;
- direct manuscript or metadata writes require elevated permission and explicit user confirmation;
- the default workflow produces a suggestion that remains subject to user review.

For production or institutional deployments, use separate provider keys for OMI rather than reusing general-purpose administrative API keys. Restrict each key to the smallest set of provider capabilities required by the selected integration.

## Troubleshooting

### `Missing scopes: api.responses.write`

The OpenAI key does not yet have permission to call the Responses API, or the permission change has not propagated yet. Set **Responses (`/v1/responses`) → Request**, save the OpenAI key permissions, wait a few minutes, and test again.

### HTTP 401

Check the API key, project membership, organization/project role, and the restricted-key scopes. Studio includes the provider's safe error message in the test result to make permission problems diagnosable.

### HTTP 400

The provider accepted the authenticated request but rejected the request content. Check the selected model and provider configuration. For OpenAI, use the OpenAI preset so that Studio uses the Responses API rather than a Chat Completions endpoint.

### Configured but not ready

This means the OMI Agents settings exist, but the underlying AI provider has not passed its live connection test. Resolve the provider error first, then test OMI Agents again.
