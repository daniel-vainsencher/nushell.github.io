---
title: query df
categories: |
  dataframe
version: 0.73.1
dataframe: |
  Query dataframe using SQL. Note: The dataframe is always named 'df' in your query's from clause.
usage: |
  Query dataframe using SQL. Note: The dataframe is always named 'df' in your query's from clause.
---

# <code>{{ $frontmatter.title }}</code> for dataframe

<div class='command-title'>{{ $frontmatter.dataframe }}</div>

## Signature

```> query df ```

## Examples

Query dataframe using SQL
```shell
> [[a b]; [1 2] [3 4]] | into df | query df 'select a from df'
```
