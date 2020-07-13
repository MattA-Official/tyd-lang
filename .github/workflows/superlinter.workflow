name: SuperLinter
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
jobs:
  markdown:
    name: Lint Markdown
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v2
      - name: Lint Code Base
        uses: docker://github/super-linter:v3
        env:
          VALIDATE_MD: true
  json:
    name: Lint json
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v2
      - name: Lint Code Base
        uses: docker://github/super-linter:v3
        env:
          VALIDATE_JSON: true
