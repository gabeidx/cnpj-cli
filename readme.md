# cnpj-cli

> A command line interface for generating, validating and formatting CNPJs

## Install

```bash
npm install -g cnpj-cli
```

## Usage

### Generate a valid CNPJ

Formatted:

```bash
cpnj
cnpj --generate
cnpj -g
```

Not formatted (numbers only):

```bash
cpnj --numbers-only
cnpj --generate --numbers-only
cnpj -n
cnpj -gn
```

### Validate a CNPJ

```bash
cnpj --validate 29.709.817/0001-15
cnpj -v 29709817000115
```

### Format a CNPJ

```bash
cnpj --format 29709817000115
```

## License

[MIT License](https://gabrielizaias.mit-license.org) &copy; [Gabriel Silva](https://gabe.id)
