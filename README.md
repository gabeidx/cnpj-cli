# cnpj-cli

> A command line interface for generating, validating and formatting CNPJs

## Install

```bash
$ npm install -g cnpj-cli
```

Or, if you prefer to use `yarn`, ou can run:

```bash
$ yarn global add cnpj-cli
```

## Usage

### Generate a valid CNPJ (formatted)

```bash
$ cpnj
$ cnpj --generate
$ cnpj -g
```

### Validate a CNPJ

```bash
$ cnpj --validate 29.709.817/0001-15
$ cnpj -v 29709817000115
```

### Format a CNPJ

```bash
$ cnpj --format 29709817000115
```

## License

MIT &copy; [Gabriel Izaias](https://izaias.co)
