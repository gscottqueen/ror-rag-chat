---
mode: agent
---

# New Feature Request

1. Mandatory pre-steps:
	- Open and read `.github/instructions/features.instructions.md` and obey it for all planning and implementation decisions.
	- If the feature touches backend/frontend/migrations/tests, list the affected areas in the plan.
	- **Always** generate the feature doc first
	- **Always** ask for approval of the feature doc before proceeding to planning and implementation.

2. Planning (required):
	- Use the repository `manage_todo_list` tool to create a plan with 3-8 concise steps.
	- Mark one step as `in-progress` before editing files.
	- After completing each step, immediately mark it `completed`.

3. Clarifying Questions:
	- If any placeholder or acceptance criterion is ambiguous, ask targeted clarifying questions before making code changes.

4. Implementation:
	- Make the smallest, safest changes to satisfy the acceptance criteria.
	- Add or update tests and documentation where applicable.
	- Follow the coding guidelines in `.github/copilot-instructions.md` and backend/frontend instruction files.

5. Deliverables (response format):
	- Short summary of changes and rationale.
	- List of modified files (paths).
	- Any new commands to run or tests to execute.
	- Remaining questions or known limitations.

6. Finalization:
	- Run repository tests related to changed code if available and report results.
	- Leave the `manage_todo_list` fully updated with all steps completed.

Always ask for clarification if the request is not fully specified.
