---
title: path type
categories: |
  default
version: 0.73.1
default: |
  Get the type of the object a path refers to (e.g., file, dir, symlink)
usage: |
  Get the type of the object a path refers to (e.g., file, dir, symlink)
---

# <code>{{ $frontmatter.title }}</code> for default

<div class='command-title'>{{ $frontmatter.default }}</div>

## Signature

```> path type --columns```

## Parameters

 -  `--columns {table}`: For a record or table input, check strings at the given columns, and replace with result

## Notes
```text
This checks the file system to confirm the path's object type.
If nothing is found, an empty string will be returned.
```
## Examples

Show type of a filepath
```shell
> '.' | path type
```

Show type of a filepath in a column
```shell
> ls | path type -c [ name ]
```
