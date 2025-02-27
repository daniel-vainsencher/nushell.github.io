---
title: save
categories: |
  filesystem
version: 0.73.1
filesystem: |
  Save a file.
usage: |
  Save a file.
---

# <code>{{ $frontmatter.title }}</code> for filesystem

<div class='command-title'>{{ $frontmatter.filesystem }}</div>

## Signature

```> save (filename) --stderr --raw --append --force```

## Parameters

 -  `filename`: the filename to use
 -  `--stderr {path}`: the filename used to save stderr, only works with `-r` flag
 -  `--raw`: save file as raw binary
 -  `--append`: append input to the end of the file
 -  `--force`: overwrite the destination

## Examples

Save a string to foo.txt in the current directory
```shell
> 'save me' | save foo.txt
```

Append a string to the end of foo.txt
```shell
> 'append me' | save --append foo.txt
```

Save a record to foo.json in the current directory
```shell
> { a: 1, b: 2 } | save foo.json
```

Save a running program's stderr to foo.txt
```shell
> do -i {} | save foo.txt --stderr foo.txt
```

Save a running program's stderr to separate file
```shell
> do -i {} | save foo.txt --stderr bar.txt
```
