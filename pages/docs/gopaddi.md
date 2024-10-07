---
title: gopaddi
description: gopaddi documentation page
---

# {% $markdoc.frontmatter.title %}

## Create beautiful REST API docs in Markdown

`POST:`/(overwrites all in-memory stub and/or proxy-config)

##### Parameters

{% table bordered=true %}
| name      | type     | data type               | description                                                           |
|-----------|----------|-------------------------|-----------------------------------------------------------------------|
| None      | required | object (JSON or YAML)   | N/A  |
{% /table %}

{% table bordered=true %}
| Column 1 | Column 2 | Column 3 |
|:---|:---|:---|
| Row 1, Cell 1 | Row 1, Cell 2 | Row 1, Cell 3 |
| Row 2, Cell 1 | Row 2, Cell 2 | Row 2, Cell 3 |
{% /table %}

##### Responses

{% table bordered=true %}
| http code | content-type                | response                                                            |
|-----------|-----------------------------|---------------------------------------------------------------------|
| `201`     | `text/plain;charset=UTF-8`  | `Configuration created successfully`                                |
| `400`     | `application/json`          | `{"code":"400","message":"Bad Request"}`                            |
| `405`     | `text/html;charset=utf-8`   | None                                                                |
{% /table %}

##### Example cURL

 ```javascript
curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:8889/
```

---

#### Listing existing stubs & proxy configs as YAML string

Get: (gets all in-memory stub & proxy configs)

##### Parameters

> None

##### Responses

{% table bordered=true %}
| http code | content-type                | response                                                            |
|-----------|-----------------------------|---------------------------------------------------------------------|
| `200`     | `text/plain;charset=UTF-8`  | YAML string                                                         |
{% /table %}

##### Example cURL

```javascript
curl -X GET -H "Content-Type: application/json" http://localhost:8889/
```

#### More tables...



```markdown
GET: /{stub_numeric_id}
```

> (gets stub by its resource-id-{stub_numeric_id} in the YAML config)

##### Parameters

{% table bordered=true %}
| name              | type     | data type  | description                         |
|-------------------|----------|------------|-------------------------------------|
| `stub_numeric_id` | required | int ($int64)| The specific stub numeric id        |
{% /table %}

##### Responses

{% table bordered=true %}
| http code | content-type                | response                                                            |
|-----------|-----------------------------|---------------------------------------------------------------------|
| `200`     | `text/plain;charset=UTF-8`  | YAML string                                                         |
| `400`     | `application/json`          | `{"code":"400","message":"Bad Request"}`                            |
{% /table %}

##### Example cURL

```javascript
curl -X GET -H "Content-Type: application/json" http://localhost:8889/0
```