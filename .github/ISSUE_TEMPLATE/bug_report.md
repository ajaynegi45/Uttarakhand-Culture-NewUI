---
name: Report a bug 🐞
about: Report an issue to help improve the project.
title: "[BUG] <description>"
labels: ["status: awaiting triage"]
body:
  - type: checkboxes
    id: duplicates
    attributes:
        label: Has this bug been raised before?
        description: Increase the chances of your issue being accepted by making sure it has not been raised before.
        options:
            - label: I have checked "open" AND "closed" issues and this is not a duplicate
              required: true
              
# Description
  - type: textarea
    id: description
    attributes:
        label: Description
        description: A clear description of the bug you have found. Please include relevant information and resources (for example the steps to reproduce the bug)
    validations:
        required: true
        
# Ask for screenshots if applicable.
  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots
      description: Please add screenshots if applicable
    validations:
      required: false
      
# Ask if the issue creator wants to work on it.
  - type: dropdown
    id: assignee
    attributes:
      label: Do you want to work on this issue?
      multiple: false
      options:
        - "No"
        - "Yes"
      default: 0
    validations:
      required: true

  - type: dropdown
    id: assign
    attributes:
      label: "Would you like to work on this issue?"
      options:
        - "Yes"
        

        
  - type: markdown
    attributes:
      value: |
        Please fill out the sections below to help everyone identify and fix the bug
        
  - type: upload
    id: description
    attributes:
      label: Describe your issue
      placeholder: When I click here this happens
    validations:
      required: true

---