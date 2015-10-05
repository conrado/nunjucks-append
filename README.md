# Nunjucks Sekizai

Allows one to define a tag that subviews can append content to. Handy for
letting subviews add resources to the head or footer, for example.

## Example:

The layout - `/views/layouts/default.html`:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>The Title</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />

        {% render_block "javascript" %}
        <script src="/jquery.js"></script>
        {% endrender_block %}
    </head>
    <body>
        {% block content %}{% endblock %}
    </body>
</html>
```

The view - `/views/index.html`:

```HTML
{% extends "/layouts/default.html" %}

{% addtoblock "javascript" %}
<!-- Will be output beneath jquery.js -->
<script src="/index-script.js"></script>
{% endaddtoblock %}

{% block content %}
<div>
    <p>The content</p>
</div>
{% endblock %}
```

The output:

```HTML
<html>
<head>
    <title>The Title</title>
    <link href="/stylesheets/style.css" rel="stylesheet">
    <script src="/jquery.js"></script>
    <!-- Will be output beneath jquery.js -->
    <script src="/index-script.js"></script>
</head>

<body>
    <div>
        <p>The content</p>
    </div>
</body>
</html>
```

To add to the tags to the nunjucks use `install`:

```javscript
var nunjucks = require('nunjucks');
var nunjucks_sekizai =  require('nunjucks-sekizai');
var env = nunjucks.configure();
nunjucks_sekizai(env);
```
