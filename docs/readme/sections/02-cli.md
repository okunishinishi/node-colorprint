Using via cli
-------

### CLI Usage

```bash
#!/bin/bash

{{#each usages}}{{#each samples}}colorpint {{../name}} "{{src}} from CLI" # Pipe to {{pipe}} with {{color}} color.
{{/each}}{{/each}}
```

Fore more detail, see [API Guide of colorpint functions][my_lib_apiguide_url].



### Install global for CLI usage.

```
$ npm install colorprint --g
```
